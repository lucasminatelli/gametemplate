import { ECanvas, TILE_SIZE } from '../../../settings/constants';

interface IProps {
    position: {
        x: number,
        y: number
    },
    text: number,
}

function Tile(props: IProps) {
    function getTileColor() {
        switch (props.text) {
            case ECanvas.FLOOR:
                return "darkgrey";
            case ECanvas.WALL:
                return "yellow";
            case ECanvas.DOOR:
                return "white";
            case ECanvas.ENEMY:
                return "red";
            case ECanvas.HERO:
                return "magenta";
            default: break;
        }
    }
    const color = getTileColor();
    return (
        <div
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE,
                border: `2px solid ${color}`,
                position: "absolute",
                top: TILE_SIZE * props.position.y,
                left: TILE_SIZE * props.position.x,
                color: color,
                fontSize: 32,
                zIndex: 2,
            }}
        >{props.text}</div>
    )
}

export default Tile;