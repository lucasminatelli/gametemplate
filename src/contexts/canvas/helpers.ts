import { ECanvas, EDirection, EWalker } from "../../settings/constants";

export function handleNextMovement(direction: any, position: any) {
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
}

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR = ECanvas.DOOR;
const EN = ECanvas.ENEMY;
const HE = ECanvas.HERO;

export const canvas = [
  [WL, WL, DR, WL, WL],
  [WL, FL, FL, EN, WL],
  [WL, FL, FL, FL, WL],
  [WL, HE, FL, FL, WL],
  [WL, WL, WL, WL, WL],
];

export function checkValidMovement(nextPosition: any, walker: string) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x];

  let result =
    walker === EWalker.HERO
      ? getHeroValidMoves(canvasValue)
      : getEnemyValidMoves(canvasValue);

  return result;
}

function getHeroValidMoves(canvasValue: any) {
  return {
    valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.ENEMY,
    dead: canvasValue === ECanvas.ENEMY,
    door: canvasValue === ECanvas.DOOR,
  };
}

function getEnemyValidMoves(canvasValue: any) {
  return {
    valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.HERO,
    dead: canvasValue === ECanvas.HERO,
    door: false,
  };
}
