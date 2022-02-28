import { useContext } from "react";
import { ChestsContext } from "../contexts/ChestsContext";
import { ECanvas, GAME_SIZE } from "../settings/constants";
import { canvas } from "../utils/helpers";
import Chest from "./Chest";
import Enemy from "./Enemy";
import EnemyBig from "./EnemyBig";
import Hero from "./Hero";
import ScoreBoard from "./ScoreBoard";
import Trap from "./Trap";


const getCanvasMap = () => {
  const array = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];
    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x, y };
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;

      switch (text) {
        case ECanvas.HERO:
          array.push(<Hero key={key} initialPosition={position} />);
          break;
        case ECanvas.CHEST:
          array.push(<Chest key={key} initialPosition={position} />);
          break;
        case ECanvas.ENEMY:
          array.push(<Enemy key={key} initialPosition={position} />);
          break;
        case ECanvas.TRAP:
          array.push(<Trap key={key} initialPosition={position} />);
          break;
        case ECanvas.ENEMYBIG:
          array.push(<EnemyBig key={key} initialPosition={position} />);
          break;
        default: break;
      }
    }
  }
  return array;
}

const elements = getCanvasMap();

const Board = () => {
  const chestsContext = useContext(ChestsContext);

  return (
    <div>
      <ScoreBoard />
      {elements}
      {
        chestsContext.totalChests === chestsContext.openedChests.total && (
          <img src='./assets/opened-door.png' alt='' style={{
            position: "absolute",
            left: 578,
            top: 0,
          }} />
        )
      }
      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  )
}

export default Board;