// Importing libraries
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

// Import fs
import * as fs from "fs";

//Importing private key
require("dotenv").config();

//Instantiate 3rdweb SDK
const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Your wallet private key
    process.env.PRIVATE_KEY as string,
    // RPC URL
    ethers.getDefaultProvider("https://polygon-rpc.com/")
  )
);

// assign the smart contract address
const nft_smart_contract_address = "0xD91A8C3Dd5fa4F829A009FCd9C1DDc8417DB78f9";

// Instantiate NFT Collection module
const nft = sdk.getNFTModule(nft_smart_contract_address);

// Load the image bytes from file "logo.png".
const imageBytes = fs.readFileSync("logo.png");

// Minting the NFT asynchronously
async function mint() {
  console.log(
    await nft.mint({
      name: "Hi 👋",
      description: "If you are interested in...follow me✅",
      image: imageBytes,
      properties: {},
    }),
  );
}

// Running the entire thing
mint();