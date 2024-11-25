import { useEffect, useState } from "react";
import pokemonService from "../services/pokemon.service";
import "../styles/app.css"
function Home() {

    const [pokemons, setPokemons] = useState<any[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getAllPokemons = async () => {
            try {
                const response = await pokemonService.getPokemons();
                setPokemons(response);
            } catch (err) {
                setError(err + '');
            }
        }
        getAllPokemons();
    }, [])

    return (
        <div className="main-container">
            {error && <p>{error}</p>}
                {pokemons.length > 0 && (
                    pokemons.map((p, index) => {
                        return (
                            <div className="pokecard" key={index}>
                                {p.name}
                            </div>
                        )
                    })
                )}
        </div>
    )
}

export default Home;