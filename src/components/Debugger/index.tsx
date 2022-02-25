import React, { useContext } from 'react'
import { CanvasContext } from '../../contexts/canvas';
import Tile from './Tile';

function getCanvasMap(canvas: any) {
    const tileArray = [];

    for (let y = 0; y < canvas.length; y++) {
        const canvasY = canvas[y];
        for (let x = 0; x < canvasY.length; x++) {
            const canvasYX = canvasY[x];

            const position = { x: x, y: y };
            const tile = canvas[y][x] || canvasYX;
            const key = `${x}-${y}`;

            tileArray.push(<Tile key={key} position={position} text={tile} />);
        }
    }
    return tileArray;
}

function Debugger() {
    const canvasContext = useContext(CanvasContext);
    const tiles = getCanvasMap(canvasContext.canvas);

    return (
        <div>
            {tiles}
        </div>
    )
}

export default Debugger;