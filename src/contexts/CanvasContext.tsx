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
            if (walker === EWalker.HERO) {
                const cv = canvasState.canvas;
                const ebArray = [];
                for (let y = 0; y < cv.length; y++) {
                    for (let x = 0; x < cv.length; x++) {
                        if (cv[y][x] === 7) {
                            ebArray.push({ y, x });
                        }
                    }
                }

                ebArray.forEach(pos => {
                    const eArray = [];
                    eArray.push(pos)
                    eArray.push({ y: pos.y + 1, x: pos.x })
                    eArray.push({ y: pos.y, x: pos.x + 1 })
                    eArray.push({ y: pos.y + 1, x: pos.x + 1 })

                    eArray.filter(element => {
                        const nextPosition = handleNextMovement(direction, currentPosition);
                        if (element.y === nextPosition.y && element.x === nextPosition.x) {
                            alert("Game-over");
                            window.location.reload();
                        }
                    });
                })
            }

            if (walker === EWalker.ENEMYBIG) {
                const eArray = [];
                eArray.push(currentPosition)
                eArray.push({ y: currentPosition.y + 1, x: currentPosition.x })
                eArray.push({ y: currentPosition.y, x: currentPosition.x + 1 })
                eArray.push({ y: currentPosition.y + 1, x: currentPosition.x + 1 })

                eArray.filter(element => {
                    const nextPosition = handleNextMovement(direction, element);
                    const nextMove = checkValidMovement(nextPosition, walker);
                    if (nextMove.dead) {
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
                });


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