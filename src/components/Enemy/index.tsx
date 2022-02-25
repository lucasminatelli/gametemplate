import useEnemyMovement from '../../hooks/useEnemyMovement';
import { TILE_SIZE, EDirection } from '../../settings/constants';
import "./index.css";

interface IProps {
    initialPosition: { x: number; y: number }
}

const Enemy = (props: IProps) => {
    const { position, direction } = useEnemyMovement(props.initialPosition);

    return (
        <div style={{
            width: TILE_SIZE,
            top: TILE_SIZE * position.y,
            left: TILE_SIZE * position.x,
            height: TILE_SIZE,
            backgroundImage: "url(./assets/mini-demon.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px -${TILE_SIZE}px`,
            animation: "enemy-animation 1s steps(4) infinite",
            position: "absolute",
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        }} />
    )
}

export default Enemy;