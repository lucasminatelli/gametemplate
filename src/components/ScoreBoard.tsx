import React, { useContext } from 'react'
import { StepCounterContext } from '../contexts/StepCounterContext';

const ScoreBoard = () => {
    const stepCounterContext = useContext(StepCounterContext);

    return (
        <div
            style={{
                position: "absolute",
                textAlign: "left",
                color: "white",
            }}
        >
            Steps: {stepCounterContext.currentStep} | Limit: {stepCounterContext.limit}
        </div>
    )
}

export default ScoreBoard;