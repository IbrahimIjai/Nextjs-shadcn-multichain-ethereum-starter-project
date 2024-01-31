"use client";
import React, { useEffect, useState } from "react";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, bsc } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { useTheme } from "next-themes";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, bsc],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID! }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export function WagmiProvider({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme();
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={theme == "light" ? lightTheme() : midnightTheme()}
        chains={chains}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
