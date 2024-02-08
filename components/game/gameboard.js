import gameboardBackground from "@/assets/images/board-layer-black-large.svg";
import gameboardImg from "@/assets/images/board-layer-white-large.svg";

import Image from "next/image";

export default function GameBoard() {
  return (
    <div className="relative" style={{ height: "70vh", width: "70vw" }}>
      <Image
        src={gameboardImg}
        alt="gameboard"
        className="relative z-10"
        layout="fill"
      />
      <Image
        src={gameboardBackground}
        alt="gameboard-background"
        className="absolute top-2"
        layout="fill"
      />
    </div>
  );
}
