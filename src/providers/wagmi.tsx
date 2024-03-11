"use client";
import React from "react";

import { createConfig, WagmiProvider as WagmiProv, State } from "wagmi";
import { useTheme } from "next-themes";

import { config, projectId } from "./wagmi-config";

import { createWeb3Modal } from "@web3modal/wagmi/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, 
});

export function WagmiProvider({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: State;
}) {
  // const { setTheme, theme } = useTheme();
  return (
    <WagmiProv config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProv>
  );
}
