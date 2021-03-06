import { ECanvas, TILE_SIZE } from "../../settings/constants";
import { ITileProps } from "../../settings/types";

const Tile = (props: ITileProps) => {
    const getTileColor = () => {
        switch (props.text) {
            case ECanvas.FLOOR:
                return "darkgrey";
            case ECanvas.WALL:
                return "yellow";
            case ECanvas.DOOR:
                return "white";
            case ECanvas.ENEMY:
                return "red";
            case ECanvas.ENEMYBIG:
                return "red";
            case ECanvas.HERO:
                return "magenta";
            case ECanvas.CHEST:
                return "cyan";
            case ECanvas.TRAP:
                return "pink";
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