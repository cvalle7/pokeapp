import { useEffect, useState } from "react";
import pokemonService from "../services/pokemon.service";
import "../styles/app.css"
import Card from "./reusable/Cards";
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
            <div className="card-container">
                {pokemons.length > 0 && (
                    pokemons.map((p, index) => {
                        return (
                            <Card data={p} key={index} />
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Home;