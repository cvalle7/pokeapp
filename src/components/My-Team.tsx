import { useEffect } from "react";
import { useMyTeam } from "../contexts/my-team.context";


function MyTeam() {
    const {myTeam} = useMyTeam()

    useEffect(() =>{
        console.log(myTeam);
    });

    return(
        <div className="main-container">
            {myTeam?.pokemons.map(p => {
                return (
                    p.name
                )
            })}
        </div>
    )
}

export default MyTeam;