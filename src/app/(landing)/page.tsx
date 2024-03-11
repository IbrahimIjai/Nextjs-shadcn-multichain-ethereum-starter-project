"use client";

import { ModeToggle } from "@/components/theme-switch";
import NetworkSwitch from "@/components/wagmi/network-switch";

export default function Home() {
  return (
    <main className="">
      <ModeToggle />
      <ConnectButton />
      <w3m-network-button />
      {/* <NetworkSwitch /> */}
    </main>
  );
}

const ConnectButton = () => {
  return <w3m-button />;
};
