import { ECanvas, GAME_SIZE } from "../settings/constants";
import { canvas } from "../utils/helpers";
import Enemy from "./Enemy";
import Hero from "./Hero";


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
        case ECanvas.ENEMY:
          array.push(<Enemy key={key} initialPosition={position} />);
          break;
        default: break;
      }
    }
  }
  return array;
}

const elements = getCanvasMap();

const Board = () => {
  return (
    <div>
      {elements}
      <img src="./assets/tileset.png" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  )
}

export default Board;