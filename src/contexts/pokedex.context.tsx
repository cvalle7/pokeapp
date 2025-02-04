import { createContext, ReactNode, useContext } from "react"
import usePokedexHook from "../hooks/pokedex.hook"

interface Pokemon {
    name: string,
    url: string,
    data: any
}

interface Pokedex {
    pokemons: Pokemon[]
}

interface PokedexContexType {
    pokedex: Pokedex | null,
    setPokedex: React.Dispatch<React.SetStateAction<Pokedex | null>>
}

interface PokedexProviderProps {
    children: ReactNode
}

const PokedexContext = createContext<PokedexContexType | undefined>(undefined);

export const PokedexProvider: React.FC<PokedexProviderProps> = ({ children }) => {
    const [pokedex, setPokedex] = usePokedexHook();
    return (
        <PokedexContext.Provider value={{pokedex, setPokedex}}>
            {children}
        </PokedexContext.Provider>
    );
}

export const usePokedex = () => {
    const context = useContext(PokedexContext);
    if(!context){
        throw new Error('Error: usePokedex must be used within an pokedexPorvider')
    }
    return context;
}