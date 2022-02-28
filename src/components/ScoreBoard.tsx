import React, { useContext } from 'react'
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
        </div>
    )
}

export default ScoreBoard;