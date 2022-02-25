import React, { useState } from "react";
import { ECanvas } from "../../settings/constants";
import { IPositionProps, IProps } from "../../settings/types";
import { canvas, checkValidMovement, handleNextMovement } from "./helpers";

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

            if (nextMove.valid) {
                setCanvasState((prevState) => {
                    const newCanvas = [...prevState.canvas];
                    const currentValue = newCanvas[currentPosition.y][currentPosition.x];

                    newCanvas[currentPosition.y][currentPosition.x] = ECanvas.FLOOR;
                    newCanvas[nextPosition.y][nextPosition.x] = currentValue;

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