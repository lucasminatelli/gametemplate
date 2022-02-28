import useInterval from "@use-it/interval";
import { useContext, useState } from "react";
import { CanvasContext } from "../contexts/CanvasContext";
import { HeroContext } from "../contexts/HeroContext";
import { ScoreboardContext } from "../contexts/ScoreboardContext";
import { EDirection } from "../settings/constants";
import { IPositionProps } from "../settings/types";

const useEnemyMovement = (initialPosition: IPositionProps, walker: string) => {
  const canvasContext = useContext(CanvasContext);
  const scoreboardContext = useContext(ScoreboardContext);
  const heroContext = useContext(HeroContext);
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(function move() {
    const random = Math.floor(Math.random() * 4);
    const directions = Object.values(EDirection);
    const randomDirection = directions[random];
    const movement = canvasContext.setCanvas(randomDirection, position, walker);

    if (movement.nextMove.valid) {
      setDirection(randomDirection);
      setPosition(movement.nextPosition);
    }
    if (movement.nextMove.dead) {
      scoreboardContext.setHelthy();
      heroContext.setPain(true);
      setTimeout(() => {
        heroContext.setPain(false);
      }, 2000);
    }
  }, 2000);

  return {
    position,
    direction,
  };
};

export default useEnemyMovement;
