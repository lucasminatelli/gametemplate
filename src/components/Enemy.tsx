import useEnemyMovement from "../hooks/useEnemyMovement";
import { EDirection, EWalker, HEAD_OFFSET, TILE_SIZE } from "../settings/constants";
import { IPositionProps } from "../settings/types";
import "./Animations.css";

interface IProps {
    initialPosition: IPositionProps;
}

const Enemy = (props: IProps) => {
    const { position, direction } = useEnemyMovement(props.initialPosition, EWalker.ENEMY)

    return (
        <div style={{
            width: TILE_SIZE,
            top: TILE_SIZE * position.y - HEAD_OFFSET,
            left: TILE_SIZE * position.x,
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundImage: "url(./assets/enemy.png)",
            backgroundRepeat: "no-repeat",
            animation: "enemy-animation 1s steps(4) infinite",
            position: "absolute",
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : ("") || direction === EDirection.LEFT ? -1 : ("")}`,
        }} />
    )
}

export default Enemy;