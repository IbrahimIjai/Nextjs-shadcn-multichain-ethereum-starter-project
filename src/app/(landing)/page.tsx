import { ModeToggle } from "@/components/theme-switch";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <ModeToggle />
      <ConnectButton />
    </main>
  );
}
