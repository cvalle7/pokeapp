import { useMyTeam } from "../contexts/my-team.context";
import { usePokedex } from "../contexts/pokedex.context";


function MyTeam() {
    const { myTeam, setMyTeam } = useMyTeam()
    const { pokedex } = usePokedex()

    const renderTeam = (p: any) => {
        return (
            <div className="team-card-container">
                {p ? (
                    <>
                        <div key={p.name} className="team-card">
                            <div className="avatar">
                                <img key={p.name} alt={p.name} src={p.data.sprites.versions["generation-iii"].emerald.front_default} onClick={() => handlePokemonSelected(p)} />
                            </div>
                            <div className="team-info">
                                <p>Lv. 100</p>
                                {p.name}
                                <p className="stamine"></p>
                                {p.data.base_experience}/{p.data.base_experience}
                            </div>
                        </div>
                        { }
                        <button className="send-pc" onClick={() => handleSendPc(p)}>Send to PC</button>
                    </>

                ) : (
                    <>
                        <div className="team-card disabled">
                        </div>
                    </>
                )}
            </div>
        )
    }

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

    const handleLoop = () => {
        const elements = [];
        for (let index = 0; index < 6; index++) {
            elements.push(renderTeam(myTeam?.pokemons[index]))
        }
        return elements;
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
                        {handleLoop()}
                    </div>
                </>

            ) : (
                <h1>You need to catch Pokemons</h1>
            )}
        </div>
    )
}

export default MyTeam;


