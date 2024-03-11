"use client";

import * as React from "react";
import { ThemeProvider } from "./theme-providers";
import { WagmiProvider } from "./wagmi";
import { cookieToInitialState } from "wagmi";
import { State } from "wagmi";

export function RootProvider({
  children,
  initialState,
  ...props
}: {
  children: React.ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider initialState={initialState}>
      <ThemeProvider {...props}>{children}</ThemeProvider>
    </WagmiProvider>
  );
}
