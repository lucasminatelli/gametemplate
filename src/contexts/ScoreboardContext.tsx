import React, { useState } from "react";
import { IProps } from "../settings/types";

export const ScoreboardContext = React.createContext({
    currentStep: 0,
    limit: 0,
    setSteps: () => null,

    helthy: 0,
    setHelthy: () => null,
})

const ScoreboardProvider = (props: IProps) => {
    const [scoreboard, setScoreboard] = useState({
        currentStep: 0,
        limit: 55,
        setSteps: () => {
            setScoreboard((prevState) => {
                return {
                    currentStep: prevState.currentStep + 1,
                    limit: prevState.limit,
                    setSteps: prevState.setSteps,
                    helthy: prevState.helthy,
                    setHelthy: prevState.setHelthy
                }
            })
        },

        helthy: 3,
        setHelthy: () => {
            setScoreboard((prevState) => {
                return {
                    currentStep: prevState.currentStep,
                    limit: prevState.limit,
                    setSteps: prevState.setSteps,
                    helthy: prevState.helthy - 1,
                    setHelthy: prevState.setHelthy
                }
            })
        }
    })
    return (
        <ScoreboardContext.Provider value={scoreboard}>
            {props.children}
        </ScoreboardContext.Provider>
    )
}

export default ScoreboardProvider;