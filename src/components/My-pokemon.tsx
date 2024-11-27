import { useState } from "react";
import { usePokedex } from "../contexts/pokedex.context";
import Pokecard from "./reusable/Poke-card";

interface Pokemon {
    name: string,
    url: string,
    data: any
}

function MyPokemons() {

    const { pokedex, setPokedex } = usePokedex();
    const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();

    const handleRelease = () => {
        if (pokemonSelected && pokedex) {
            if (pokedex.pokemons.length == 1) {
                setPokedex({pokemons: []});
                setPokemonSelected(undefined);
            } else {
                const pkx = pokedex.pokemons.filter(p => p.name !== pokemonSelected.name);
                if (pkx.length > 0) {
                    setPokedex({ pokemons: [...pkx] });
                    setPokemonSelected(undefined);
                }
            }
        }
    }

    return (
        <div className="main-container">
            <div className="poke-container">
                <div className="poke-info">
                    {pokemonSelected && (
                        <>
                            <Pokecard pokemon={pokemonSelected}></Pokecard>
                            <div className="info-buttons">
                                <button className="release" onClick={() => handleRelease()}>Release</button>
                                <button className="clear" onClick={() => setPokemonSelected(undefined)}>Clear</button>
                            </div>
                        </>

                    )}
                </div>
                <div className="poke-box">
                    {pokedex && pokedex.pokemons.length > 0 && (
                        pokedex.pokemons.map((p) => {
                            return (
                                <img onClick={() => setPokemonSelected(p)} key={p.name} alt={p.name} src={p.data.sprites.versions["generation-iii"].emerald.front_default} />
                            );
                        })
                    )}
                </div>

            </div>

        </div>
    )
}

export default MyPokemons;