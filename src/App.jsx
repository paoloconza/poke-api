import { useEffect, useState } from 'react'
import logo from '../public/pokeball.svg'
import './App.css'
import Card from './components/Card'
import SideBar from './components/SideBar'

function App() {
  const [data, setData] = useState(null)
  const [active, setActive] = useState(false)
  const [pokemonID, setPokemonID] = useState(null)
  const [pokemonIdData, setPokemonIdData] = useState(null)

  const getData = async (url, setState) => {
    const res = await fetch(url)
    const datos = await res.json();

    setState(datos);
  };

  useEffect(() => {
    getData("https://pokeapi.co/api/v2/pokemon?limit=50", setData)
  }, [])

  useEffect(() => {
    if (pokemonID === null) return;
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`, setPokemonIdData)
  }, [pokemonID])

  const handlePokID = (id) => setPokemonID(id)

  const toggleSideBar = () => setActive(!active)

  return (
    <div id='main'>
      <header>
        <div><h1>Pokedex</h1></div>
        <div id='divImgLogo'>
          <img src={logo} alt="Pokeball" />
          </div>
      </header>

      <div id='contenido'>
        <div id='divCards' className={active ? 'active' : ''}>
          {data && data.results.map((el, i) => (
            <Card 
            key={i} 
            link={el.url} 
            fnID={handlePokID}
            setActive={setActive} />))}
        </div>
        {active && <SideBar dataPok={pokemonIdData} setActive={setActive} />}
      </div>
    </div>
  )
}

export default App
