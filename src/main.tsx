import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { PokemonProvider } from './contexts/pokemon.context'
import { PokedexProvider } from './contexts/pokedex.context'

createRoot(document.getElementById('root')!).render(
  <PokedexProvider>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </PokedexProvider>
)
