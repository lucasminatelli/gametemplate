import React, { useState } from "react";
import { IPositionProps, IProps } from "../settings/types";

export const ChestsContext = React.createContext({
    totalChests: 0,
    openedChests: {
        total: 0,
        positions: []
    },
    updateOpenedChests: (position: IPositionProps) => null,
})

const ChestsProvider = (props: IProps) => {
    const [chestsState, updateChestsState] = useState({
        totalChests: 2,
        openedChests: {
            total: 0,
            positions: []
        },
        updateOpenedChests: (position: IPositionProps) => {
            updateChestsState((prevState) => {
                return {
                    totalChests: prevState.totalChests,
                    openedChests: {
                        total: prevState.openedChests.total + 1,
                        positions: prevState.openedChests.positions.concat(position),
                    },
                    updateOpenedChests: prevState.updateOpenedChests,
                }
            })
        }
    })
    return (
        <ChestsContext.Provider value={chestsState}>{props.children}</ChestsContext.Provider>
    )
}

export default ChestsProvider;