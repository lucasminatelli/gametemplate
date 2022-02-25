import { useContext, useState } from "react";
import useEventListener from "@use-it/event-listener";
import { EDirection, EWalker } from "../settings/constants";
import { IPositionProps } from "../settings/types";
import { CanvasContext } from "../contexts/CanvasContext";
import { ChestsContext } from "../contexts/ChestsContext";

const useHeroMovement = (initialPosition: IPositionProps) => {
  const canvasContext = useContext(CanvasContext);
  const chestsContext = useContext(ChestsContext);
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener("keydown", (event: any) => {
    const direction = event.key as EDirection;
    if (direction.indexOf("Arrow") === -1) {
      return;
    }

    const movement = canvasContext.setCanvas(direction, position, EWalker.HERO);

    if (movement.nextMove.valid) {
      setPosition(movement.nextPosition);
      setDirection(direction);
    }
    if (movement.nextMove.dead) {
      alert("Game-over");
      window.location.reload();
    }
    if (movement.nextMove.chest) {
      chestsContext.updateOpenedChests(movement.nextPosition);
    }
    if (
      chestsContext.openedChests.total === chestsContext.totalChests &&
      movement.nextMove.door
    ) {
      alert("Win");
      window.location.reload();
    }
  });

  return {
    position,
    direction,
  };
};

export default useHeroMovement;
