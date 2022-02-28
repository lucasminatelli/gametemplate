import { ECanvas } from "../settings/constants";
import { IPositionProps } from "../settings/types";

// Returns an array with the EnemyBig positions on canvas
export function enemyBigTiles(canvas: any) {
  const array = [];
  for (let y = 0; y < canvas.length; y++) {
    for (let x = 0; x < canvas.length; x++) {
      if (canvas[y][x] === ECanvas.ENEMYBIG) {
        array.push({ y, x });
      }
    }
  }
  return array;
}

// Returns an array with 4 tiles placed by 1 enemy big
export function enemyBigPlaces(position: IPositionProps) {
  const array = [];
  array.push(position);
  array.push({ y: position.y + 1, x: position.x });
  array.push({ y: position.y, x: position.x + 1 });
  array.push({ y: position.y + 1, x: position.x + 1 });
  return array;
}
