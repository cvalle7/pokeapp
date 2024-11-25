import { Link } from "react-router-dom";
import "../styles/navbar.css"
import { useEffect, useState } from "react";

function Navbar() {

    const [active, setActive] = useState('');

    useEffect(() => {
        setActive(location.pathname);
    }, [active])

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to='/' onClick={() => setActive('/')}>
                    <img alt="pokeapi" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
                </Link>
            </div>
            <ul>
                <li>
                    <Link onClick={() => setActive('/')} className={`navbar-link ${active === '/' ? 'is-active' : ''}`}  to="/">
                        Pokémon
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setActive('/my-pokemons')} className={`navbar-link ${active === '/my-pokemons' ? 'is-active' : ''}`} to="/my-pokemons">
                        My Pokémon
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setActive('/my-team')} className={`navbar-link ${active === '/my-team' ? 'is-active' : ''}`} to="/my-team">
                        My Team
                    </Link>

                </li>
                <li>
                    <Link onClick={() => setActive('/pokedex')} className={`navbar-link ${active === '/pokedex' ? 'is-active' : ''}`} to="/pokedex">
                        Pokédex
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;