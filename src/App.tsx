import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import MyPokemons from "./components/My-pokemon";
import MyTeam from "./components/My-Team";

function App() {

    useEffect(() => {
        const getPokemons = async () => {
        }
        getPokemons();
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/my-pokemons" element={<MyPokemons />} />
                <Route path="/my-team" element={<MyTeam />} />
            </Routes>
        </Router>
    );
}

export default App