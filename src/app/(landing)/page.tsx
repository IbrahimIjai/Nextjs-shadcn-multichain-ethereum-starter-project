"use client";

import { ModeToggle } from "@/components/theme-switch";
import { useNetworkConnectorUpdater } from "@/hooks/useSwitchNetwork";

export default function Home() {
  useNetworkConnectorUpdater();
  return (
    <main className="">
      <ModeToggle />
      <ConnectButton />
      <w3m-network-button />
    </main>
  );
}

const ConnectButton = () => {
  return <w3m-button />;
};
