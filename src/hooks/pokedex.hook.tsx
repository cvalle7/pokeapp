import { useEffect, useState } from "react"

const usePokedexHook = () => {
    const [pokedex, setPokedex] = useState(() => {
        const item = window.localStorage.getItem('pokedex');
        return item ? JSON.parse(item) : null;
    });

    useEffect(() => {
        if(pokedex){
            window.localStorage.setItem('pokedex', JSON.stringify(pokedex));
        }else{
            window.localStorage.removeItem('pokedex');
        }
    }, [pokedex]);

    return [pokedex, setPokedex] as const;
}

export default usePokedexHook