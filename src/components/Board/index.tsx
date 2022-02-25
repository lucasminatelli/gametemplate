import { canvas } from '../../contexts/canvas/helpers';
import { ECanvas, GAME_SIZE } from '../../settings/constants';
import Enemy from '../Enemy';
import Hero from '../Hero';

function getCanvasMap() {
  const array = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];
    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
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
      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  )
}

export default Board;