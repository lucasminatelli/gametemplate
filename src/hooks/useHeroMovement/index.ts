import { useContext, useState } from "react";
import useEventListener from "@use-it/event-listener";
import { CanvasContext } from "../../contexts/canvas";
import { EDirection, EWalker } from "../../settings/constants";
import { IPositionProps } from "../../settings/types";

const useHeroMovement = (initialPosition: IPositionProps) => {
  const canvasContext = useContext(CanvasContext);
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener("keydown", (event: any) => {
    const direction = event.key as EDirection;
    if (direction.indexOf("Arrow") === -1) {
      return;
    }

    const movement = canvasContext.updateCanvas(
      direction,
      position,
      EWalker.HERO
    );

    if (movement.nextMove.valid) {
      setPosition(movement.nextPosition);
      setDirection(direction);
    }
    if (movement.nextMove.dead) {
      alert("Game-over");
      window.location.reload();
    }
    if (movement.nextMove.door) {
      alert("You win");
      window.location.reload();
    }
  });

  return {
    position,
    direction,
  };
}

export default useHeroMovement;
