import axios from "axios";

class PokemonService {
    #API_URL = import.meta.env.VITE_API_URL || "https://pokeapi.co/api/v2"

    async getPokemons() {
        try {
            const response = await axios.get(`${this.#API_URL}/pokemon`);
            return response.data.results;
        } catch (err) {
            throw new Error(`Error: ${err}`);
        }
    }
}

export default new PokemonService();