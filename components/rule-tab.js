import check from "@/assets/images/icon-check.svg";
import Image from "next/image";
import Link from "next/link";

export default function RuleTabs() {
  return (
    <div className="relative">
      <div
        className="w-80 bg-white flex justify-center items-left flex-col gap-4 border-solid border-2 rounded-md z-10 relative p-4"
        style={{ height: "28rem" }}
      >
        <h1 className="text-center">RULES</h1>
        <h2>OBJECTIVE</h2>
        <p>{`Be the first player to connect 4 of the same colored discs in a row (either 
  vertically, horizontally, or diagonally).`}</p>
        <h2>HOW TO PLAY</h2>
        <p>1. Red goes first in the first game.</p>
        <p>
          2. Players must alternate turns, and only one disc can be dropped in
          each turn.
        </p>
        <p>3. The game ends when there is a 4-in-a-row or a stalemate.</p>
        <p>4. The starter of the previous game goes second on the next game.</p>
      </div>
      <div
        className="tab-background absolute top-2 bg-black w-80 rounded-md"
        style={{ height: "28rem" }}
      />
      <Link href="/">
        <Image
          src={check}
          alt="confirm-button"
          height={40}
          className="absolute z-20"
          style={{ left: "calc(50% - 20px)", bottom: "-20px" }}
        />
      </Link>
    </div>
  );
}
