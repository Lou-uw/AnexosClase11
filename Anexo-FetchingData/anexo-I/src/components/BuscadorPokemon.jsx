import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

export default function BuscadorPokemon() {
  const [nombre, setNombre] = useState("")      // lo que escribís
  const [busqueda, setBusqueda] = useState("")  // lo que se busca al apretar el botón

  const url = busqueda ? API_URL + busqueda : null
  const { datos: pokemon, cargando, error } = useFetch(url)

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="pikachu"
      />
      <button onClick={() => setBusqueda(nombre.trim().toLowerCase())}>
        Buscar
      </button>

      {cargando && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}

      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
        </div>
      )}
    </div>
  )
}