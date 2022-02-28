import { useContext } from 'react'
import { ScoreboardContext } from '../contexts/ScoreboardContext';

const ScoreBoard = () => {
    const scoreboardContext = useContext(ScoreboardContext);

    return (
        <div
            style={{
                position: "absolute",
                textAlign: "left",
                color: "white",
            }}
        >
            Steps: {scoreboardContext.currentStep} | Limit: {scoreboardContext.limit}
            <div
                style={{
                    backgroundImage: "url(./assets/heart.png)",
                    backgroundRepeat: "repeat-x",
                    width: `${13*scoreboardContext.helthy}px`,
                    height: "12px",
                }}
            />
        </div>
    )
}

export default ScoreBoard;