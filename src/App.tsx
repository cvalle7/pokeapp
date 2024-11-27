import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import MyPokemons from "./components/My-pokemon";

function App() {

    useEffect(() => {
        const getPokemons = async () => {
        }
        getPokemons();
    }, []); <img alt="pokeapi" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/my-pokemons" element={<MyPokemons />} />
            </Routes>
        </Router>
    );
}

export default App