import { TILE_SIZE } from '../settings/constants';
import { IPositionProps } from '../settings/types';
import "./index.css";

interface IProps {
    initialPosition: IPositionProps
}

const Trap = (props: IProps) => {
    return (
        <div style={{
            width: TILE_SIZE,
            top: TILE_SIZE * props.initialPosition.y,
            left: TILE_SIZE * props.initialPosition.x,
            height: 100,
            backgroundImage: "url(./assets/trap.png)",
            backgroundRepeat: "no-repeat",
            animation: "trap-animation 1s steps(8) infinite",
            position: "absolute",
        }} />
    )
}

export default Trap;