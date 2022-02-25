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
            if (walker === EWalker.ENEMYBIG) {
                const eArray = [];
                eArray.push({ y: currentPosition.y + 1, x: currentPosition.x })
                eArray.push({ y: currentPosition.y, x: currentPosition.x + 1 })
                eArray.push({ y: currentPosition.y + 1, x: currentPosition.x + 1 })

                let valid = [];
                for (let i = 0; i < 3; i++) {
                    const nextPosition = handleNextMovement(direction, eArray[i]);
                    const nextMove = checkValidMovement(nextPosition, walker);
                    valid[i] = nextMove.valid;
                }
                if (valid[0] && valid[1] && valid[2]) {
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

            } else {
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
        }
    });

    return (
        <CanvasContext.Provider value={canvasState}>
            {props.children}
        </CanvasContext.Provider>
    )
}

export default CanvasProvider;