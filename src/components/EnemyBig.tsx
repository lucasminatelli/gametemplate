import useEnemyMovement from "../hooks/useEnemyMovement";
import { EDirection, EWalker, TILE_SIZE } from "../settings/constants";
import { IPositionProps } from "../settings/types";
import "./Animations.css";

interface IProps {
    initialPosition: IPositionProps
}

const EnemyBig = (props: IProps) => {
    const { position, direction } = useEnemyMovement(props.initialPosition, EWalker.ENEMYBIG)
    return (
        <div style={{
            top: TILE_SIZE * position.y,
            left: TILE_SIZE * position.x,
            width: TILE_SIZE * 2,
            height: TILE_SIZE * 2,
            backgroundImage: "url(./assets/enemy_big.png)",
            backgroundRepeat: "no-repeat",
            animation: "enemy-big-animation 1s steps(4) infinite",
            position: "absolute",
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : ("") || direction === EDirection.LEFT ? -1 : ("")}`,
        }} />
    )
}

export default EnemyBig;