import logo from "@/assets/images/logo.svg";
import playerLogo from "@/assets/images/player-vs-player.svg";
import Image from "next/image";
import Link from "next/link";

export default function HomeTabs() {
  return (
    <div className="relative">
      <div className="h-72 w-80 bg-purple flex justify-center items-center flex-col gap-5 border-solid border-2 rounded-md z-10 relative">
        <Image src={logo} alt="logo" />
        <div className="w-60 h-10 relative">
          <Link
            className="relative flex justify-between items-center bg-white hover:bg-yellow border-black border-2 border-solid w-full h-full rounded-md p-3 z-10"
            href="/game"
          >
            <p>PlLAY VS PLAYER</p>
            <Image src={playerLogo} alt="player-vs-player" height={30} />
          </Link>

          <div className="btn-background block absolute w-full h-full bg-black z-0 top-2 rounded-md" />
        </div>

        <div className="w-60 h-10 relative">
          <Link
            className="relative flex justify-left items-center bg-white hover:bg-yellow border-black border-2 border-solid w-full h-full rounded-md p-3 z-10"
            href="/rule"
          >
            GAME RULES
          </Link>

          <div className="btn-background block absolute w-full h-full bg-black z-0 top-2 rounded-md" />
        </div>
      </div>
      <div className="tab-background absolute top-2 bg-black h-72 w-80 rounded-md" />
    </div>
  );
}
