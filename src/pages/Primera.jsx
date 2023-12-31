import { useEffect, useState } from 'react'
import PokeballSpinner from '../components/PokeballSpinner'

function Primera() {

    const [data, setData] = useState(null)
    const [pokemon, setPokemon] = useState("charizard")
  
    useEffect(() => {
      const getData = async () => {
        setData(null)
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const datos = await res.json()
  
        setData(datos)
      }
      getData()
    }, [pokemon])
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      const texto = e.target[0].value;
      setPokemon(texto);
    }

    return (
        <main>
            <h1>Pokedex</h1>
            <div id='content'>
                <form onSubmit={handleSubmit}>
                    <input type="text" />
                    <div>
                        <button type="submit">Buscar</button>
                    </div>
                </form>
                <div id='card'>
                    {data === null ? (
                        <PokeballSpinner />
                    ) : (
                        <>
                            <div>
                                <img src={data.sprites.other.home.front_default} alt="Pokemon" id='imgPokemon' />
                            </div>
                            <div>
                                <p>Name: {data.name} -ID: {data.id} </p>
                                <p>Type: {data.types[0].type.name}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}
export default Primera