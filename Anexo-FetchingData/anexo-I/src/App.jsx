import './App.css'
import { useFetch } from './hooks/UseFetch'
import BuscadorPokemon from './components/BuscadorPokemon'

const URL_PERFIL = "https://api.github.com/users/Lou-uw"

function App() {
  const { datos, cargando, error } = useFetch(URL_PERFIL)

  return (
    <>
      <section>
        {cargando && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        {datos && (
          <>
            <img src={datos.avatar_url} alt={datos.name} />
            <h2>{datos.name}</h2>
            <h3>{datos.public_repos}</h3>
          </>
        )}
      </section>

      <BuscadorPokemon />
    </>
  )
}

export default App