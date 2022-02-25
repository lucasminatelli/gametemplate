import useInterval from "@use-it/interval";
import { useContext, useState } from "react";
import { CanvasContext } from "../contexts/CanvasContext";
import { EDirection, EWalker } from "../settings/constants";
import { IPositionProps } from "../settings/types";

const useEnemyMovement = (initialPosition: IPositionProps, walker: string) => {
  const canvasContext = useContext(CanvasContext);
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(function move() {
    const random = Math.floor(Math.random() * 4);
    const directions = Object.values(EDirection);
    const randomDirection = directions[random];
    const movement = canvasContext.setCanvas(
      randomDirection,
      position,
      walker
    );

    if (movement.nextMove.valid) {
      setDirection(randomDirection);
      setPosition(movement.nextPosition);
    }
    if (movement.nextMove.dead) {
      alert("Game-over");
      window.location.reload();
    }
  }, 2000);

  return {
    position,
    direction,
  };
};

export default useEnemyMovement;
