function SideBar({ dataPok, setActive }) {
    console.log(dataPok)

    return (
        <aside id="sideBar">
            <div>
            <button onClick={() => setActive(false)} >Cerrar</button>
            </div>
            <h2>{dataPok?.name}</h2>
            <div id="sideBar-divImg">
                <img src={dataPok?.sprites.front_shiny} alt="Pokemon" />
                <img src={dataPok?.sprites.front_default} alt="Pokemon" />
                <img src={dataPok?.sprites.back_shiny} alt="Pokemon" />
                <img src={dataPok?.sprites.back_default} alt="Pokemon" />
            </div>
            <div id="sideBar-divText">
                <p>PESO: {dataPok?.weight}</p>
                <p>ALTURA: {dataPok?.height}</p>
            </div>
        </aside>
    )
}
export default SideBar