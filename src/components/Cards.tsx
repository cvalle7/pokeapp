import { useNavigate } from "react-router-dom";
import { usePokemon } from "../contexts/pokemon.context";
import { usePokedex } from "../contexts/pokedex.context";

interface Pokemon {
    name: string,
    url: string,
    data: any
}

function Card({ data }: { data: Pokemon }) {

    let navigate = useNavigate();
    const { setPokemon } = usePokemon();
    const { pokedex, setPokedex } = usePokedex();

    const handleClick = (data: Pokemon) => {
        setPokemon(data)
        navigate('/pokemon')
    }

    const releasePokemon = (data: Pokemon) => {
        if (pokedex) {
            const pokemons = pokedex.pokemons.filter(p => p.name !== data.name);
            setPokedex({ pokemons: [...pokemons] })
        }
    }

    const checkPokemons = (data: Pokemon) => {
        if (pokedex) {
            return pokedex.pokemons.some(p => p.name === data.name);
        }
        return false;
    }

    const handlePokemon = (data: Pokemon) => {
        if (pokedex) {
            if (!checkPokemons(data)) setPokedex({ pokemons: [...pokedex.pokemons, data] });
        } else {
            setPokedex({ pokemons: [data] })
        }
    }

    return (
        <div className="pokecard">
            <img className="pokemon-img" alt={data.name} src={data.data.sprites.front_default} onClick={() => handleClick(data)} />
            <h3>{data.name.toUpperCase()}</h3>
            {!checkPokemons(data) ? (
                <div className="pokeball-button" onClick={() => handlePokemon(data)}>
                    <img className="pokeball-img" alt="pokeball" src='/src/resources/pokeball.png' />
                </div>

            ) : (
                <div className="pokeball-button" onClick={() => releasePokemon(data)}>
                    <img className="pokeball-img" alt="pokeball" src='/src/resources/pokeball.svg' />
                </div>
            )}

        </div>
    )
}

export default Card;