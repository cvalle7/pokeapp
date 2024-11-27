import { useEffect } from "react";
import { usePokemon } from "../contexts/pokemon.context";
import { useNavigate } from "react-router-dom";
import Pokecard from "./reusable/Poke-card";


function Pokemon() {

    const navigate = useNavigate();
    const { pokemon } = usePokemon();

    useEffect(() => {
        if (!pokemon) {
            navigate('/')
        }
        console.log(pokemon)
    })

    return (
        <div className="main-container">
            {pokemon && (
                <Pokecard pokemon={pokemon}></Pokecard>
            )}
        </div>
    )
}

export default Pokemon;