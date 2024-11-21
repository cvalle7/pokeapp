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
            <ul className="pokemon-list">
                {pokemons.length > 0 && (
                    pokemons.map((p, index) => {
                        return (
                            <li key={index}>{p.name} : {p.url}</li>
                        )
                    })
                )}
            </ul>

        </div>
    )
}

export default Home;