export const TILE_SIZE = 48;
export const GAME_SIZE = 5 * TILE_SIZE; // 240px

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
}

export enum EWalker {
  HERO = "HERO",
  ENEMY = "ENEMY",
}