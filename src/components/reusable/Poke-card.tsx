
import { FaWeightHanging } from "react-icons/fa";
import { MdStraighten } from "react-icons/md";

interface Pokemon {
    name: string,
    url: string,
    data: any
}

const handleType = (type: string) => {
    switch (type) {
        case "grass":
            return (
                <p className="pokemon-type grass" key={type}>{type}</p>
            );
        case "poison":
            return (
                <p className="pokemon-type poison" key={type}>{type}</p>
            );

        case "fire": return (
            <p className="pokemon-type fire" key={type}>{type}</p>
        );

        case "flying": return (
            <p className="pokemon-type flying" key={type}>{type}</p>
        );

        case "water": return (
            <p className="pokemon-type water" key={type}>{type}</p>
        );

        case "bug": return (
            <p className="pokemon-type bug" key={type}>{type}</p>
        );

        case "normal": return (
            <p className="pokemon-type normal" key={type}>{type}</p>
        );
    }
}

function Pokecard({pokemon}: {pokemon: Pokemon}) {

    return (
        <div className="pokemon-info">
            <h4 className="pokemon-info-tittle">{pokemon.name.toUpperCase()}</h4>
            <img alt={pokemon.name} src={pokemon.data.sprites.front_default} />
            <div className="info">
                <div className="info-left">
                    <h4>About</h4>
                    <p><MdStraighten /> Height: {pokemon.data.height}</p>
                    <p><FaWeightHanging /> Weight: {pokemon.data.weight}</p>
                </div>
                <div className="info-right">
                    <h4>Types</h4>
                    {pokemon.data.types.map((t: any) => {
                        return handleType(t.type.name);
                    })}
                    <h4>Abilities</h4>
                    {pokemon.data.abilities.map((a: any) => {
                        return (
                            <p className="ability" key={a.ability.name}> - {a.ability.name}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pokecard;