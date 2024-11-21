import { useEffect } from "react"
import pokemonService from "./services/pokemon.service"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App (){

    useEffect(() => {
        const getPokemons = async () => {
            console.log(await pokemonService.getPokemons())
        }
        getPokemons();
    }, []);<img alt="pokeapi" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"/>

    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App