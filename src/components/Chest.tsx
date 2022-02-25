import { useContext } from 'react';
import { ChestsContext } from '../contexts/ChestsContext';
import { TILE_SIZE } from '../settings/constants';
import { IPositionProps } from '../settings/types';
import "./index.css";

interface IProps {
    initialPosition: IPositionProps
}

const Chest = (props: IProps) => {
    const chestsContext = useContext(ChestsContext);

    const shouldAnimate = chestsContext.openedChests.positions.find((position: IPositionProps) => {
        const match = props.initialPosition.y === position.y &&
            props.initialPosition.x === position.x;
        return match;
    });

    return (
        <div style={{
            width: TILE_SIZE,
            top: TILE_SIZE * props.initialPosition.y,
            left: TILE_SIZE * props.initialPosition.x,
            height: TILE_SIZE,
            backgroundImage: "url(./assets/chest.png)",
            backgroundRepeat: "no-repeat",
            animation: shouldAnimate && "chest-animation 1s steps(2) forwards",
            position: "absolute",
        }} />
    )
}

export default Chest;