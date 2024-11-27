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
                <div className="pokemon-container">
                    <Pokecard pokemon={pokemon}></Pokecard>
                </div>
            )}
        </div>
    )
}

export default Pokemon;