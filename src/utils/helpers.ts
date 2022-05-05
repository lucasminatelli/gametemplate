import { ECanvas, EDirection, EWalker } from "../settings/constants";
import { IPositionProps } from "../settings/types";

export const handleNextMovement = (
  direction: string,
  position: IPositionProps
) => {
  switch (direction) {
    case EDirection.LEFT:
      return { x: position.x - 1, y: position.y };
    case EDirection.RIGHT:
      return { x: position.x + 1, y: position.y };
    case EDirection.DOWN:
      return { x: position.x, y: position.y + 1 };
    case EDirection.UP:
      return { x: position.x, y: position.y - 1 };
    default:
      break;
  }
};

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR = ECanvas.DOOR;
const EN = ECanvas.ENEMY;
const HE = ECanvas.HERO;
const CH = ECanvas.CHEST;
const TR = ECanvas.TRAP;

export const canvas = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, FL, FL, WL, FL, FL, FL, FL, WL, FL, FL, FL, EN, FL, EN, WL, WL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, CH, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, TR, TR, TR, TR, TR, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, EN, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, HE, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
];

export function checkValidMovement(
  nextPosition: IPositionProps,
  walker: string
) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x];

  let result =
    walker === EWalker.HERO
      ? getHeroValidMoves(canvasValue)
      : getEnemyValidMoves(canvasValue);

  return result;
}

function getHeroValidMoves(canvasValue: any) {
  return {
    valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.ENEMY || canvasValue === ECanvas.CHEST || canvasValue.TRAP,
    dead: canvasValue === ECanvas.ENEMY || canvasValue === ECanvas.ENEMYBIG || canvasValue === ECanvas.TRAP,
    chest: canvasValue === ECanvas.CHEST,
    door: canvasValue === ECanvas.DOOR,
  };
}

function getEnemyValidMoves(canvasValue: any) {
  return {
    valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.HERO,
    dead: canvasValue === ECanvas.HERO,
    chest: false,
    door: false,
  };
}
