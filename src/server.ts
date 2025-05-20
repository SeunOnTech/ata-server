import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { Connection, PublicKey } from "@solana/web3.js";
import { createAtaAndIx, isValidPublicKey, findTokenMintAddress, TOKEN_DATA } from "./solanaUtils";

// Load environment variables
dotenv.config();

// Validate environment variables
const RPC_URL = process.env.RPC_URL;
if (!RPC_URL) {
  console.error("RPC_URL not set in .env file");
  process.exit(1);
}
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  console.error("API_KEY not set in .env file");
  process.exit(1);
}

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set("trust proxy", 1);

// Rate limiter for createAta endpoint
const createAtaLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: "Too many requests, please try again later." }
});

// API key middleware
const authenticateApiKey = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Checking API key...");
  const apiKey = req.query.apiKey || req.headers["x-api-key"];
  if (!apiKey || apiKey !== API_KEY) {
    console.log("API key invalid or missing");
    res.status(401).json({ error: "Unauthorized: Invalid or missing API key" });
    return;
  }
  console.log("API key valid");
  next();
};

// Health check endpoint
app.get("/", (req: Request, res: Response): void => {
  console.log("Reached / endpoint");
  res.json({ message: "Server is running" });
});

// Endpoint to create or verify an ATA
app.get("/api/createAta", authenticateApiKey, createAtaLimiter, async (req: Request, res: Response): Promise<void> => {
  console.log("Reached /api/createAta endpoint");
  console.log("Query parameters:", req.query);

  const { tokenInput, ownerPublicKey } = req.query;

  // Validate inputs
  if (!tokenInput || typeof tokenInput !== "string") {
    console.log("Missing or invalid tokenInput parameter");
    res.status(400).json({ error: "Missing or invalid tokenInput parameter" });
    return;
  }
  if (!ownerPublicKey || !isValidPublicKey(ownerPublicKey as string)) {
    console.log("Missing or invalid ownerPublicKey parameter");
    res.status(400).json({ error: "Missing or invalid ownerPublicKey parameter" });
    return;
  }

  try {
    // Find token mint address and token program
    const tokenInfo = findTokenMintAddress(tokenInput as string);
    if (!tokenInfo) {
      console.log(`Token not found: ${tokenInput}`);
      res.status(404).json({
        error: `Token not found: ${tokenInput}. Available tokens: ${TOKEN_DATA.data.map(t => `${t.metadata.name} (${t.metadata.symbol})`).join(", ")}`
      });
      return;
    }

    const tokenMintAddress = new PublicKey(tokenInfo.address);
    const tokenProgramId = new PublicKey(tokenInfo.tokenProgram);
    const connection = new Connection(RPC_URL, "confirmed");

    console.log("Processing ATA for:", {
      tokenInput,
      tokenMint: tokenInfo.address,
      ownerPublicKey,
      tokenProgram: tokenProgramId.toBase58()
    });

    const { AtaTokenIx, associatedToken } = await createAtaAndIx(
      tokenMintAddress,
      new PublicKey(ownerPublicKey as string),
      tokenProgramId,
      connection,
      false
    );

    res.json({
      token: tokenInput,
      tokenMint: tokenInfo.address,
      ownerPublicKey,
      associatedToken: associatedToken.toBase58(),
      status: AtaTokenIx ? "Instruction Created" : "Account Exists",
      instruction: AtaTokenIx
        ? {
            programId: AtaTokenIx.programId.toBase58(),
            keys: AtaTokenIx.keys.map((key: any) => ({
              pubkey: key.pubkey.toBase58(),
              isSigner: key.isSigner,
              isWritable: key.isWritable
            }))
          }
        : null
    });
  } catch (error) {
    console.error("Error processing ATA:", error);
    if (error instanceof Error) {
      if (error.message.includes("Invalid public key")) {
        res.status(400).json({ error: "Invalid token mint or owner public key" });
        return;
      }
    }
    res.status(500).json({ error: "Failed to process ATA" });
  }
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
  console.log("Available endpoints:");
  console.log("- GET /");
  console.log("- GET /api/createAta");
});

// Graceful shutdown
async function shutdown() {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);