import { Link } from "react-router-dom";
import "../styles/navbar.css"

function Navbar() {

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to='/'>
                    <img alt="pokeapi" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
                </Link>
            </div>
            <ul>
                <li>
                    Pokémon
                </li>
                <li>
                    My Pokémon
                </li>
                <li>
                    My Team
                </li>
                <li>
                    Pokédex
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;