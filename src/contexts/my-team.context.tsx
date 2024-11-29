import React, { createContext, ReactNode, useContext, useState } from "react";
import useMyTeamHook from "../hooks/myTeam.hook";

interface Pokemon {
    name: string,
    url: string,
    data: any
}

interface MyTeam {
    pokemons: Pokemon[]
}

interface myTeamContextType {
    myTeam: MyTeam | null,
    setMyTeam: React.Dispatch<React.SetStateAction<MyTeam | null>>
}

interface MyTeamProviderProps {
    children: ReactNode
}

const MyTeamContext = createContext<myTeamContextType | undefined>(undefined)

export const MyTeamProvider: React.FC<MyTeamProviderProps> = ({ children }) => {
    const [myTeam, setMyTeam] = useMyTeamHook();
    return (
        <MyTeamContext.Provider value={{ myTeam, setMyTeam }}>
            {children}
        </MyTeamContext.Provider>
    )
}

export const useMyTeam = () => {
    const context = useContext(MyTeamContext);
    if (!context) {
        throw new Error('No context create');
    }
    return context;
}