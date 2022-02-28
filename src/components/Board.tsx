import { useContext } from "react";
import { CanvasContext } from "../contexts/CanvasContext";
import { ChestsContext } from "../contexts/ChestsContext";
import { ECanvas, GAME_SIZE } from "../settings/constants";
import Chest from "./Chest";
import Enemy from "./Enemy";
import EnemyBig from "./EnemyBig";
import Hero from "./Hero";
import ScoreBoard from "./ScoreBoard";
import Trap from "./Trap";

const getCanvasMap = (canvas: any) => {
  const array = [];

  for (let y = 0; y < canvas.length; y++) {
    for (let x = 0; x < canvas.length; x++) {
      const position = { x, y };
      const text = canvas[y][x];
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

const Board = () => {
  const chestsContext = useContext(ChestsContext);
  const canvasContext = useContext(CanvasContext);
  const Elements = getCanvasMap(canvasContext.canvas);

  return (
    <div>
      {Elements}
      {
        chestsContext.totalChests === chestsContext.openedChests.total && (
          <img src='./assets/opened-door.png' alt='' style={{
            position: "absolute",
            left: 578,
            top: 0,
          }} />
        )
      }
      <ScoreBoard />
      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  )
}

export default Board;