import useEnemyMovement from "../hooks/useEnemyMovement";
import { EDirection, TILE_SIZE } from "../settings/constants";
import { IPositionProps } from "../settings/types";
import "./index.css";

interface IProps {
    initialPosition: IPositionProps;
}

const Enemy = (props: IProps) => {
    const { position, direction } = useEnemyMovement(props.initialPosition);

    return (
        <div style={{
            width: TILE_SIZE,
            top: TILE_SIZE * position.y,
            left: TILE_SIZE * position.x,
            height: TILE_SIZE,
            backgroundImage: "url(./assets/enemy.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px`,
            animation: "enemy-animation 1s steps(4) infinite",
            position: "absolute",
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        }} />
    )
}

export default Enemy;