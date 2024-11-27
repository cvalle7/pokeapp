import { useState } from "react";
import { usePokedex } from "../contexts/pokedex.context";
import Pokecard from "./reusable/Poke-card";

interface Pokemon {
    name: string,
    url: string,
    data: any
}

function MyPokemons() {

    const { pokedex } = usePokedex();
    const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();

    return (
        <div className="main-container">
            <div className="poke-container">
                <div className="poke-info">
                {pokemonSelected && (
                    <Pokecard pokemon={pokemonSelected}></Pokecard>
                )}
                </div>
                <div className="poke-box">
                    {pokedex && pokedex.pokemons.length > 0 && (
                        pokedex.pokemons.map((p) => {
                            return (
                                <img onClick={() => setPokemonSelected(p)} key={p.name} alt={p.name} src={p.data.sprites.versions["generation-iii"].emerald.front_default}/>
                            );
                        })
                    )}
                </div>

            </div>

        </div>
    )
}

export default MyPokemons;