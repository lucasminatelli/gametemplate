export const TILE_SIZE = 48;
export const HEAD_OFFSET = 12;
export const GAME_SIZE = 20 * TILE_SIZE;

export enum EDirection {
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
  UP = "ArrowUp",
  DOWN = "ArrowDown",
}

export enum ECanvas {
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,
  ENEMY = 3,
  HERO = 4,
  CHEST = 5,
  TRAP = 6,
  ENEMYBIG = 7,
}

export enum EWalker {
  HERO = "HERO",
  ENEMY = "ENEMY",
}