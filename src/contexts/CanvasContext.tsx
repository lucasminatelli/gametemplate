import React, { useState } from "react";
import { ECanvas, EWalker } from "../settings/constants";
import { IPositionProps, IProps } from "../settings/types";
import { canvas, checkValidMovement, handleNextMovement } from "../utils/helpers";

export const CanvasContext = React.createContext({
    canvas: [],
    setCanvas: (direction: string, currentPosition: IPositionProps, walker: string) => null
})

const CanvasProvider = (props: IProps) => {
    const [canvasState, setCanvasState] = useState({
        canvas,
        setCanvas: (direction: string, currentPosition: IPositionProps, walker: string) => {
            const nextPosition = handleNextMovement(direction, currentPosition);
            const nextMove = checkValidMovement(nextPosition, walker);
            if (nextMove?.valid) {
                setCanvasState((prevState) => {
                    const newCanvas = [...prevState.canvas];
                    newCanvas[currentPosition.y][currentPosition.x] = ECanvas.FLOOR;

                    if (walker === EWalker.HERO) newCanvas[nextPosition.y][nextPosition.x] = ECanvas.HERO
                    if (walker === EWalker.ENEMY) newCanvas[nextPosition.y][nextPosition.x] = ECanvas.ENEMY;
                    if (nextMove.dead) newCanvas[nextPosition.y][nextPosition.x] = ECanvas.HERO;

                    return {
                        canvas: newCanvas,
                        setCanvas: prevState.setCanvas
                    }
                })
            }
            return {
                nextPosition,
                nextMove
            }
        }
    });

    return (
        <CanvasContext.Provider value={canvasState}>
            {props.children}
        </CanvasContext.Provider>
    )
}

export default CanvasProvider;