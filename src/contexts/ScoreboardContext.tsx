import React, { useState } from "react";
import { IProps } from "../settings/types";

export const ScoreboardContext = React.createContext({
    currentStep: 0,
    limit: 0,
    setSteps: () => null
})

const ScoreboardProvider = (props: IProps) => {
    const [steps, setSteps] = useState({
        currentStep: 0,
        limit: 55,
        setSteps: () => {
            setSteps((prevState) => {
                return {
                    currentStep: prevState.currentStep + 1,
                    limit: prevState.limit,
                    setSteps: prevState.setSteps
                }
            })
        }
    })
    return (
        <ScoreboardContext.Provider value={steps}>{props.children}</ScoreboardContext.Provider>
    )
}

export default ScoreboardProvider;