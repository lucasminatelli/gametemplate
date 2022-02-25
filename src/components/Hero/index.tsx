import useHeroMovement from '../../hooks/useHeroMovement';
import { TILE_SIZE, EDirection } from '../../settings/constants';
import "./index.css";
interface IProps {
    initialPosition: {
        x: number,
        y: number
    }
}

const Hero = (props: IProps) => {
    const { position, direction } = useHeroMovement(props.initialPosition);
    return (
        <div style={{
            width: TILE_SIZE,
            top: TILE_SIZE * position.y,
            left: TILE_SIZE * position.x,
            height: TILE_SIZE,
            backgroundImage: "url(./assets/hero.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0px -${TILE_SIZE}px`,
            animation: "hero-animation 1s steps(4) infinite",
            position: "absolute",
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
            zIndex: 1,
        }} />
    )
}

export default Hero;