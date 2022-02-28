import { useContext, useState } from "react";
import useEventListener from "@use-it/event-listener";
import { EDirection, EWalker } from "../settings/constants";
import { IPositionProps } from "../settings/types";
import { CanvasContext } from "../contexts/CanvasContext";
import { ChestsContext } from "../contexts/ChestsContext";
import { ScoreboardContext } from "../contexts/ScoreboardContext";
import { gameOver, gameWin } from "../utils/messages";

const useHeroMovement = (initialPosition: IPositionProps) => {
  const canvasContext = useContext(CanvasContext);
  const chestsContext = useContext(ChestsContext);
  const scoreboardContext = useContext(ScoreboardContext);
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener("keydown", (event: any) => {
    const direction = event.key as EDirection;
    if (direction.indexOf("Arrow") === -1) {
      return;
    }

    const movement = canvasContext.setCanvas(direction, position, EWalker.HERO);
    const isStepFulled =
      scoreboardContext.currentStep >= scoreboardContext.limit ? true : false;
    const isHelthyEmpty = scoreboardContext.helthy === 0 ? true : false;

    if (movement.nextMove.valid) {
      setPosition(movement.nextPosition);
      setDirection(direction);
      scoreboardContext.setSteps();
    }

    if (movement.nextMove.dead) {
      scoreboardContext.setHelthy();
    }

    if (isStepFulled || isHelthyEmpty) {
      gameOver();
    }

    if (movement.nextMove.chest) {
      chestsContext.updateOpenedChests(movement.nextPosition);
    }
    if (
      chestsContext.openedChests.total === chestsContext.totalChests &&
      movement.nextMove.door
    ) {
      gameWin();
    }
  });

  return {
    position,
    direction,
  };
};

export default useHeroMovement;
