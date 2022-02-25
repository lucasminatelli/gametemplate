import useHeroMovement from "../hooks/useHeroMovement";
import { EDirection, HEAD_OFFSET, TILE_SIZE } from "../settings/constants";
import { IPositionProps } from "../settings/types";
import "./index.css";
interface IProps {
    initialPosition: IPositionProps;
}

const Hero = (props: IProps) => {
    const { position, direction } = useHeroMovement(props.initialPosition);
    return (
        <div style={{
            width: TILE_SIZE,
            top: TILE_SIZE * position.y - HEAD_OFFSET,
            left: TILE_SIZE * position.x,
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundImage: "url(./assets/hero.png)",
            backgroundRepeat: "no-repeat",
            animation: "hero-animation 1s steps(4) infinite",
            position: "absolute",
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
            zIndex: 10,
        }} />
    )
}

export default Hero;