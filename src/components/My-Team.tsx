import { useEffect } from "react";
import { useMyTeam } from "../contexts/my-team.context";
import { usePokedex } from "../contexts/pokedex.context";
import Pokecard from "./reusable/Poke-card";


function MyTeam() {
    const { myTeam, setMyTeam } = useMyTeam()
    const { pokedex } = usePokedex()

    const handlePokemonSelected = (pokemon: any) => {
        if (myTeam && myTeam.pokemons.length > 0) {
            if (myTeam.pokemons.length < 6) {
                if (!myTeam.pokemons.some(p => p.name === pokemon.name)) {
                    setMyTeam({ pokemons: [...myTeam.pokemons, pokemon] })
                }
            }
        } else {
            setMyTeam({ pokemons: [pokemon] })
        }
    }

    const handleSendPc = (pokemon: any) => {
        const filter = myTeam?.pokemons.filter(p => p.name !== pokemon.name);
        if (myTeam && myTeam.pokemons.length == 1) {
            setMyTeam(null);
        } else {
            if (filter && filter.length > 0) {
                setMyTeam({ pokemons: [...filter] })
            }
        }

    }

    return (
        <div className="main-container">
            {pokedex && pokedex.pokemons.length > 0 ? (
                <>
                    <div className="selector">
                        {!myTeam || myTeam && myTeam.pokemons.length < 6 ? (
                            <h1 className="selector-tittel">Select Your team</h1>
                        ) : (
                            <h1 className="selector-tittel">Your team is complete</h1>
                        )}
                        {pokedex.pokemons.map(p => {
                            if (!myTeam?.pokemons.some(mt => mt.name == p.name)) {
                                return (
                                    <img key={p.name} alt={p.name} src={p.data.sprites.versions["generation-iii"].emerald.front_default} onClick={() => handlePokemonSelected(p)} />
                                )
                            }
                        })}
                    </div>
                    <div className="team-container">
                        {myTeam?.pokemons.map(p => {
                            return (
                                <div className="team-card">
                                    <Pokecard pokemon={p} />
                                    <button onClick={() => handleSendPc(p)} className="send-pc">Send to PC</button>
                                </div>
                            )
                        })}
                    </div>
                </>

            ) : (
                <h1>You need to catch Pokemons</h1>
            )}
        </div>
    )
}

export default MyTeam;


