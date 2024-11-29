import { useEffect, useState } from "react"
import pokemonService from "../services/pokemon.service";
import { usePokedex } from "../contexts/pokedex.context";

function Podekex() {

    const [pokemons, setPokemons] = useState<any[]>();
    const { pokedex } = usePokedex();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const sPokemons = async () => {
            setPokemons(await await pokemonService.getPokemons())
        }
        sPokemons();
    }, []);

    const handleIndex = (i: number) => {
        if (index == 0 && i < 0) {
            setIndex(0);
        } else {
            if (index == 19) {
                if (i < 0) {
                    let a = index + i;
                    setIndex(a);
                }
            } else {
                if (index >= 0 && index <= 19) {
                    let a = index + i;
                    setIndex(a);
                }
            }
        }
    }

    return (
        <div className="main-container">
            <div className="pokedex-container">
                {pokemons && pokedex?.pokemons.some(p => p.name === pokemons[index].name) ? (
                    <>
                        <div className="pokedex-left">
                            <div className="display">
                                <img alt={pokemons[index].name} src={pokemons[index].data.sprites.versions["generation-iii"].emerald.front_default} />
                            </div>
                            <div className="pokedex-left-down">
                                <div className="screen-1">
                                    <p>{pokemons[index].name}</p>
                                </div>
                                <div className="buttons">
                                    <button onClick={() => handleIndex(-1)} />
                                    <button onClick={() => handleIndex(1)} />
                                </div>
                            </div>
                        </div>
                        <div className="pokedex-right">
                            <div className="screen-2">
                                <p>Move 1: {pokemons[index].data.moves[0].move.name}</p>
                                <p>Move 2: {pokemons[index].data.moves[1].move.name}</p>
                                <p>Move 3: {pokemons[index].data.moves[2].move.name}</p>
                                <p>Move 4: {pokemons[index].data.moves[3].move.name}</p>
                            </div>
                            <div className="pokedex-right-down">
                                <div className="screen-3">
                                    <p>id: {pokemons[index].data.id}</p>
                                </div>
                                <div className="screen-4">
                                    <p>type: {pokemons[index].data.types[0].type.name}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {pokemons && (
                            <div className="pokedex-left">
                                <div className="display">
                                    <img className="hidden" alt={pokemons[index].name} src={pokemons[index].data.sprites.versions["generation-iii"].emerald.front_default} />
                                </div>
                                <div className="pokedex-left-down">
                                    <div className="screen-1">
                                        <p>??????</p>
                                    </div>
                                    <div className="buttons">
                                        <button onClick={() => handleIndex(-1)} />
                                        <button onClick={() => handleIndex(1)} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Podekex