import GameBoard from "@/components/game/gameboard";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import player1 from "@/assets/images/player-one.svg";
import player2 from "@/assets/images/player-two.svg";

export default function GamePages() {
  return (
    <main className="relative w-full h-full pl-10 pr-10 flex justify-center items-center flex-col gap-4">
      <nav className="flex flex-row justify-between items-center w-full">
        <button>MENU</button>
        <Image src={logo} alt="" />
        <button>RESTART</button>
      </nav>
      <div className="flex">
        <div className="score-1 relative">
          <div className="relative flex flex-row bg-white h-16 w-60 justify-between items-center p-4 rounded-md border-2 border-black border-solid z-10">
            <p>Player1</p>
            <h2>12</h2>
          </div>
          <div className="absolute h-16 w-60 bg-black rounded-md top-1 left-0 z-0" />
          <Image
            src={player1}
            alt="player1"
            height={40}
            className="absolute top-4 -left-6 z-20"
          />
        </div>

        <div className="score-1 relative">
          <div className="relative flex flex-row bg-white h-16 w-60 justify-between items-center p-4 rounded-md border-2 border-black border-solid z-10">
            <h2>23</h2>
            <p>Player2</p>
          </div>
          <div className="absolute h-16 w-60 bg-black rounded-md top-1 left-0 z-0" />
          <Image
            src={player2}
            alt="player2"
            height={40}
            className="absolute top-4 -right-6 z-20"
          />
        </div>
      </div>
      <GameBoard />
      <div className="background absolute w-screen h-1/5 bg-red bottom-0 rounded-t-lg -z-10" />
    </main>
  );
}
