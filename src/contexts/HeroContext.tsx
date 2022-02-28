import { createContext, useState } from "react";
import { IProps } from "../settings/types";

export const HeroContext = createContext({
    pain: false,
    setPain: (isPainning: boolean) => null
})

const HeroProvider = (props: IProps) => {
    const [hero, setHero] = useState({
        pain: false,
        setPain: (isPainning: boolean) => {
            setHero(prevState => {
                return {
                    pain: isPainning,
                    setPain: prevState.setPain
                }
            })
        }
    });
    return <HeroContext.Provider value={hero}>
        {props.children}
    </HeroContext.Provider>
}

export default HeroProvider;