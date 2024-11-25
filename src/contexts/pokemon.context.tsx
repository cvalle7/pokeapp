import React, { createContext, ReactNode, useContext, useState } from "react"

interface Pokemon {
    name: string,
    url: string,
    data: any
}

//primero el contexto, (el hook para variable setVariable)
interface PokemonContexType {
    pokemon: Pokemon | null,
    setPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>
}

//provider del prop, gracias a ReactNode se puede renderizar ese tipo de contenido ej: <div>hola</div>
interface PokemonProviderProps {
    children: ReactNode
}

const PokemonContext = createContext<PokemonContexType | undefined>(undefined)

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    return (
        <PokemonContext.Provider value={{ pokemon, setPokemon }}>
            {children}
        </PokemonContext.Provider>
    );
}

export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error('usePokemon must be used within an pokemonPorvider')
    }
    return context;
}

