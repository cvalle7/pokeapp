import axios from "axios";

class PokemonService {
    #API_URL = import.meta.env.VITE_API_URL || "https://pokeapi.co/api/v2"

    async getPokemons() {
        try {
            const response = await axios.get(`${this.#API_URL}/pokemon`);
            const results = response.data.results
            const pokemons = [];
            for (let r of results) {
                pokemons.push({ name: r.name, url: r.url, data: await this.getPokemon(r.url) })
            }
            return pokemons;
        } catch (err) {
            throw new Error(`Error: ${err}`);
        }
    }

    async getPokemon(url: string) {
        try {
            const response = await axios.get(url);
            console.log(response.data)
            return response.data;
        } catch (err) {
            throw new Error(`Error: ${err}`)
        }
    }
}

export default new PokemonService();