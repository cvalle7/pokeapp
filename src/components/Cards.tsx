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
    const {setPokemon} = usePokemon();
    const {pokedex, setPokedex} = usePokedex();

    const handleClick = (data: Pokemon) => {
        setPokemon(data)
        navigate('/pokemon')
    }

    //revisar mañana
    const handlePokemon = (data: Pokemon) => {
        if(pokedex){
            setPokedex({pokemons: [...pokedex.pokemons, data]});
        }
        
    }

    return (
        <div className="pokecard" onClick={ () => handleClick(data) }>
            <img className="pokemon-img" alt={data.name} src={data.data.sprites.front_default}></img>
            <h3>{data.name.toUpperCase()}</h3>
            <div className="pokeball-button" onClick={() => handlePokemon(data)}>
                <img className="pokeball-img" alt="pokeball" src='/src/resources/pokeball.png' />
            </div>
        </div>
    )
}

export default Card;