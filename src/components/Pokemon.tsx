import { useEffect } from "react";
import { usePokemon } from "../contexts/pokemon.context";
import { useNavigate } from "react-router-dom";

function Pokemon (){

    const navigate = useNavigate();
    const {pokemon} = usePokemon();

    useEffect(() => {
        if(!pokemon){
            navigate('/')
        }
    })

    return (
        <div className="main-container">

        </div>
    )
}

export default Pokemon;