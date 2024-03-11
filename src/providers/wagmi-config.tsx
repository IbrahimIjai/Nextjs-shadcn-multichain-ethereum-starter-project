import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage, createConfig } from "wagmi";
import { mainnet, polygon, bsc, blast } from "wagmi/chains";

// Get projectId at https://cloud.walletconnect.com
export const projectId = "926aea17b9e7bceeaff476f56a0d1d95";

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3 template by whizzie",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
export const config = defaultWagmiConfig({
  chains: [mainnet, polygon, bsc, blast], // required
  projectId, // required
  metadata, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
  //   ...wagmiOptions // Optional - Override createConfig parameters
});
