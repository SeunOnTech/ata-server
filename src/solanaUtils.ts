import { Connection, PublicKey } from "@solana/web3.js";
import {
  getAssociatedTokenAddressSync,
  createAssociatedTokenAccountIdempotentInstruction,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

// Token data JSON
export const TOKEN_DATA = {
  "data": [
    {
      "address": "AKEWE7Bgh87GPp171b4cJPSSZfmZwQ3KaqYqXoKLNAEE",
      "mintAuthority": "AKEWE7Bgh87GPp171b4cJPSSZfmZwQ3KaqYqXoKLNAEE",
      "supply": 16936172832626,
      "decimals": 6,
      "isInitialized": true,
      "freezeAuthority": null,
      "tokenProgram": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
      "extensions": {
        "metadataPointer": {
          "authority": "9bRSUPjfS3xS6n5EfkJzHFTRDa4AHLda8BU2pP4HoWnf",
          "metadataAddress": "AKEWE7Bgh87GPp171b4cJPSSZfmZwQ3KaqYqXoKLNAEE"
        },
        "tokenMetadata": {
          "additionalMetadata": [],
          "mint": "AKEWE7Bgh87GPp171b4cJPSSZfmZwQ3KaqYqXoKLNAEE",
          "name": "USD Coin",
          "symbol": "USDC",
          "updateAuthority": "9bRSUPjfS3xS6n5EfkJzHFTRDa4AHLda8BU2pP4HoWnf",
          "uri": "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/0aeb6bb4b6f8d53cdcc4d2129bb9538824874498/deployments/warp_routes/USDC/metadata.json"
        }
      },
      "updatedEpoch": 125,
      "updatedAt": "2025-02-17T06:27:22.473889Z",
      "updatedSlot": 48864522,
      "writeVersion": 0,
      "metadata": {
        "description": "Warp Route USDC",
        "image": "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
        "name": "USD Coin",
        "risk": 1,
        "symbol": "USDC"
      },
      "price": "1",
      "volumeUsdc24h": 2186030.17266735
    },
    {
      "address": "841P4tebEgNux2jaWSjCoi9LhrVr9eHGjLc758Va3RPH",
      "mintAuthority": "841P4tebEgNux2jaWSjCoi9LhrVr9eHGjLc758Va3RPH",
      "supply": 15472833936,
      "decimals": 6,
      "isInitialized": true,
      "freezeAuthority": null,
      "tokenProgram": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
      "extensions": {
        "metadataPointer": {
          "authority": "841P4tebEgNux2jaWSjCoi9LhrVr9eHGjLc758Va3RPH",
          "metadataAddress": "841P4tebEgNux2jaWSjCoi9LhrVr9eHGjLc758Va3RPH"
        },
        "tokenMetadata": {
          "additionalMetadata": [],
          "mint": "841P4tebEgNux2jaWSjCoi9LhrVr9eHGjLc758Va3RPH",
          "name": "dogwifhat",
          "symbol": "WIF",
          "updateAuthority": "841P4tebEgNux2jaWSjCoi9LhrVr9eHGjLc758Va3RPH",
          "uri": "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/9b9b07c9df8cd326e097d87aec67128832221407/deployments/warp_routes/WIF/metadata.json"
        }
      },
      "updatedEpoch": 125,
      "updatedAt": "2025-02-17T07:12:37.588093Z",
      "updatedSlot": 48871910,
      "writeVersion": 0,
      "metadata": {
        "description": "Warp Route WIF",
        "image": "https://bafkreibk3covs5ltyqxa272uodhculbr6kea6betidfwy3ajsav2vjzyum.ipfs.nftstorage.link",
        "name": "dogwifhat",
        "risk": 2,
        "symbol": "WIF"
      },
      "price": "0.4309773723122738332029787680",
      "volumeUsdc24h": 87.1877520702428
    },
    {
      "address": "BeRUj3h7BqkbdfFU7FBNYbodgf8GCHodzKvF9aVjNNfL",
      "mintAuthority": "BeRUj3h7BqkbdfFU7FBNYbodgf8GCHodzKvF9aVjNNfL",
      "supply": 37789716885474,
      "decimals": 9,
      "isInitialized": true,
      "freezeAuthority": null,
      "tokenProgram": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
      "extensions": {
        "metadataPointer": {
          "authority": "9bRSUPjfS3xS6n5EfkJzHFTRDa4AHLda8BU2pP4HoWnf",
          "metadataAddress": "BeRUj3h7BqkbdfFU7FBNYbodgf8GCHodzKvF9aVjNNfL"
        },
        "tokenMetadata": {
          "additionalMetadata": [],
          "mint": "BeRUj3h7BqkbdfFU7FBNYbodgf8GCHodzKvF9aVjNNfL",
          "name": "Solana",
          "symbol": "SOL",
          "updateAuthority": "9bRSUPjfS3xS6n5EfkJzHFTRDa4AHLda8BU2pP4HoWnf",
          "uri": "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/77a04c0b7e214ae17853215467f8ddea5e0ac710/deployments/warp_routes/SOL/metadata.json"
        }
      },
      "updatedEpoch": 125,
      "updatedAt": "2025-02-17T07:32:41.588600Z",
      "updatedSlot": 48875189,
      "writeVersion": 0,
      "metadata": {
        "description": "Warp Route SOL",
        "image": "https://raw.githubusercontent.com/github/explore/14191328e15689ba52d5c10e18b43417bf79b2ef/topics/solana/solana.png",
        "name": "Solana",
        "risk": 2,
        "symbol": "SOL"
      },
      "price": "183.8773776313961519639906665000",
      "volumeUsdc24h": 813604.715864243
    },
    {
      "address": "So11111111111111111111111111111111111111112",
      "mintAuthority": null,
      "supply": 0,
      "decimals": 9,
      "isInitialized": true,
      "freezeAuthority": null,
      "tokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "extensions": {},
      "updatedEpoch": 125,
      "updatedAt": "2025-02-17T07:42:42.963635Z",
      "updatedSlot": 48876829,
      "writeVersion": 0,
      "metadata": {
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
        "name": "Ethereum",
        "risk": 1,
        "symbol": "ETH"
      },
      "price": "2806.0465769161274249545852586000",
      "volumeUsdc24h": 2617625.16965707
    },
    {
      "address": "GU7NS9xCwgNPiAdJ69iusFrRfawjDDPjeMBovhV1d4kn",
      "mintAuthority": "GU7NS9xCwgNPiAdJ69iusFrRfawjDDPjeMBovhV1d4kn",
      "supply": 8030485182067,
      "decimals": 9,
      "isInitialized": true,
      "freezeAuthority": null,
      "tokenProgram": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
      "extensions": {
        "metadataPointer": {
          "authority": "9bRSUPjfS3xS6n5EfkJzHFTRDa4AHLda8BU2pP4HoWnf",
          "metadataAddress": "GU7NS9xCwgNPiAdJ69iusFrRfawjDDPjeMBovhV1d4kn"
        },
        "tokenMetadata": {
          "additionalMetadata": [],
          "mint": "GU7NS9xCwgNPiAdJ69iusFrRfawjDDPjeMBovhV1d4kn",
          "name": "Turbo ETH",
          "symbol": "tETH",
          "updateAuthority": "9bRSUPjfS3xS6n5EfkJzHFTRDa4AHLda8BU2pP4HoWnf",
          "uri": "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/f5c3d59c5f0155618ae156c971ace5894a88cec6/deployments/warp_routes/tETH/metadata.json"
        }
      },
      "updatedEpoch": 125,
      "updatedAt": "2025-02-16T16:59:44.722584Z",
      "updatedSlot": 48732887,
      "writeVersion": 0,
      "metadata": {
        "description": "Warp Route tETH",
        "image": "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/06833c4417faafd198ef8cf904612c721e5d96db/deployments/warp_routes/tETH/logo.svg",
        "name": "Turbo ETH",
        "risk": 2,
        "symbol": "tETH"
      },
      "price": "2852.5280210103065488634969269000",
      "volumeUsdc24h": 513964.759313695
    },
    {
      "address": "2tGbYEm4nuPFyS6zjDTELzEhvVKizgKewi6xT7AaSKzn",
      "mintAuthority": "2tGbYEm4nuPFyS6zjDTELzEhvVKizgKewi6xT7AaSKzn",
      "supply": 31060357924,
      "decimals": 6,
      "isInitialized": true,
      "freezeAuthority": null,
      "tokenProgram": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
      "extensions": {
        "metadataPointer": {
          "authority": "9bRSUPjfS3xS6n5EfkJzHFTRDa4AHLda8BU2pP4HoWnf",
          "metadataAddress": "2tGbYEm4nuPFyS6zjDTELzEhvVKizgKewi6xT7AaSKzn"
        },
        "tokenMetadata": {
          "additionalMetadata": [],
          "mint": "2tGbYEm4nuPFyS6zjDTELzEhvVKizgKewi6xT7AaSKzn",
          "name": "Orca",
          "symbol": "ORCA",
          "updateAuthority": "9bRSUPjfS3xS6n5EfkJzHFTRDa4AHLda8BU2pP4HoWnf",
          "uri": "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/13ef3e3b8447ba446c562b7fb9b769324d35e6c0/deployments/warp_routes/ORCA/metadata.json"
        }
      },
      "updatedEpoch": 125,
      "updatedAt": "2025-02-17T02:06:38.209233Z",
      "updatedSlot": 48821856,
      "writeVersion": 0,
      "metadata": {
        "description": "Warp Route ORCA",
        "image": "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/refs/heads/main/deployments/warp_routes/ORCA/logo.svg",
        "name": "Orca",
        "risk": 2,
        "symbol": "ORCA"
      },
      "price": "2.1108407189820695226161469419",
      "volumeUsdc24h": 3510.89224646907
    },
    {
      "address": "CEBP3CqAbW4zdZA57H2wfaSG1QNdzQ72GiQEbQXyW9Tm",
      "mintAuthority": "CEBP3CqAbW4zdZA57H2wfaSG1QNdzQ72GiQEbQXyW9Tm",
      "supply": 1120655407804,
      "decimals": 6,
      "isInitialized": true,
      "freezeAuthority": null,
      "tokenProgram": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
      "extensions": {
        "metadataPointer": {
          "authority": "9bRSUPjfS3xS6n5EfkJzHFTRDa4AHLda8BU2pP4HoWnf",
          "metadataAddress": "CEBP3CqAbW4zdZA57H2wfaSG1QNdzQ72GiQEbQXyW9Tm"
        },
        "tokenMetadata": {
          "additionalMetadata": [],
          "mint": "CEBP3CqAbW4zdZA57H2wfaSG1QNdzQ72GiQEbQXyW9Tm",
          "name": "Tether USD",
          "symbol": "USDT",
          "updateAuthority": "9bRSUPjfS3xS6n5EfkJzHFTRDa4AHLda8BU2pP4HoWnf",
          "uri": "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/13ef3e3b8447ba446c562b7fb9b769324d35e6c0/deployments/warp_routes/USDT/metadata.json"
        }
      },
      "updatedEpoch": 125,
      "updatedAt": "2025-02-17T01:46:28.530217Z",
      "updatedSlot": 48818558,
      "writeVersion": 0,
      "metadata": {
        "description": "Warp Route USDT",
        "image": "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/refs/heads/main/deployments/warp_routes/USDT/logo.svg",
        "name": "Tether USD",
        "risk": 2,
        "symbol": "USDT"
      },
      "price": "0.9998710646264742868877572499",
      "volumeUsdc24h": 385396.422301729
    },
    {
      "address": "64mggk2nXg6vHC1qCdsZdEFzd5QGN4id54Vbho4PswCF",
      "mintAuthority": "Feh8eCUQaHGfdPyGEARmVse3m4NBGgaVYwMiKE3CdcPz",
      "supply": 12089270727616,
      "decimals": 11,
      "isInitialized": true,
      "freezeAuthority": null,
      "tokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      "extensions": {},
      "updatedEpoch": 155,
      "updatedAt": "2025-04-11T21:51:05.699004Z",
      "updatedSlot": 61581291,
      "writeVersion": 0,
      "metadata": {
        "description": "Collect bitz by breaking PoW blocks",
        "image": "https://powpow.app/assets/icon.png",
        "name": "BITZ",
        "risk": 3,
        "symbol": "BITZ"
      },
      "price": "21.843320479413654266501490",
      "volumeUsdc24h": 6759.01281694018
    }
  ],
  "meta": {
    "cursor": {
      "previous": "Ahg1opVcGX",
      "next": "7KvCFWzQFWo"
    }
  }
};

// Function to create or verify an Associated Token Account and its instruction
export async function createAtaAndIx(
  token: PublicKey,
  ownerPublicKey: PublicKey,
  tokenProgramId: PublicKey,
  connection: Connection,
  ignoreCheck = false
): Promise<{
  AtaTokenIx: any | undefined;
  associatedToken: PublicKey;
}> {
  let AtaTokenIx: any | undefined;
  const associatedToken = getAssociatedTokenAddressSync(
    token,
    ownerPublicKey,
    false,
    tokenProgramId
  );

  if (!ignoreCheck) {
    const accountExist = await connection.getAccountInfo(associatedToken);
    if (!accountExist) {
      AtaTokenIx = createAssociatedTokenAccountIdempotentInstruction(
        ownerPublicKey,
        associatedToken,
        ownerPublicKey,
        token,
        tokenProgramId
      );
    }
  } else {
    AtaTokenIx = createAssociatedTokenAccountIdempotentInstruction(
      ownerPublicKey,
      associatedToken,
      ownerPublicKey,
      token,
      tokenProgramId
    );
  }

  return {
    AtaTokenIx,
    associatedToken,
  };
}

// Function to validate a Solana public key
export function isValidPublicKey(address: string): boolean {
  try {
    new PublicKey(address);
    return true;
  } catch (error) {
    return false;
  }
}

// Function to find token mint address by name or symbol
export function findTokenMintAddress(tokenInput: string): { address: string; tokenProgram: string } | null {
  const inputLower = tokenInput.toLowerCase();
  for (const token of TOKEN_DATA.data) {
    if (
      token.metadata.name.toLowerCase() === inputLower ||
      token.metadata.symbol.toLowerCase() === inputLower
    ) {
      return { address: token.address, tokenProgram: token.tokenProgram };
    }
  }
  return null;
}