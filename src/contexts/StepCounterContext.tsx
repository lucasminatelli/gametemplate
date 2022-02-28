import React, { useState } from "react";
import { IProps } from "../settings/types";

export const StepCounterContext = React.createContext({
    currentStep: 0,
    limit: 0,
    setSteps: () => null
})

const StepCounterProvider = (props: IProps) => {
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
        <StepCounterContext.Provider value={steps}>{props.children}</StepCounterContext.Provider>
    )
}

export default StepCounterProvider;