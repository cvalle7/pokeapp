import { useEffect } from "react";

interface Pokemon {
    name: string,
    url: string,
    data: any
}

function Card({ data }: { data: Pokemon }) {
    useEffect(() => {

    });
    return (
        <div className="pokecard">
            <img className="pokemon-img" alt={data.name} src={data.data.sprites.front_default}></img>
            <h3>{data.name.toUpperCase()}</h3>
            <div className="pokeball-button">
                <img className="pokeball-img" alt="pokeball" src='/src/resources/pokeball.png' />
            </div>
        </div>
    )
}

export default Card;