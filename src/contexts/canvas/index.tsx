import React, { useState } from "react";
import { ECanvas } from "../../settings/constants";
import { canvas, checkValidMovement, handleNextMovement } from "./helpers";

interface IProps {
    children: React.ReactNode
}

export const CanvasContext = React.createContext({
    canvas: [],
    updateCanvas: (direction, currentPosition, walker) => null
})

function CanvasProvider(props: IProps) {
    const [canvasState, setCanvasState] = useState({
        canvas,
        updateCanvas: (direction: any, currentPosition: any, walker: any) => {
            const nextPosition = handleNextMovement(direction, currentPosition);
            const nextMove = checkValidMovement(nextPosition, walker);
            if (nextMove.valid) {
                setCanvasState((prevState) => {
                    const newCanvas = Object.assign([], prevState.canvas);
                    const currentValue = newCanvas[currentPosition.y][currentPosition.x];
                    newCanvas[currentPosition.y][currentPosition.x] = ECanvas.FLOOR;
                    newCanvas[nextPosition.y][nextPosition.x] = currentValue;
                    return {
                        canvas: newCanvas,
                        updateCanvas: prevState.updateCanvas
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