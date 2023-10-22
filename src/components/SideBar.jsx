function SideBar({ dataPok, setActive }) {
    console.log(dataPok)

    return (
        <aside id="sideBar">
            <div>
            <button onClick={() => setActive(false)} >Cerrar</button>
            </div>
            <h2>{dataPok?.name}</h2>
            <div id="sideBar-divImg">
                <img src={dataPok?.sprites.other.home.front_shiny} alt="Pokemon" />
            </div>

            <div id="sideBar-divText">
        <table>
          <thead>
            <tr>
              <th>Propiedad</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Altura</td>
              <td>{dataPok?.height}</td>
            </tr>
            <tr>
              <td>Peso</td>
              <td>{dataPok?.weight}</td>
            </tr>
            <tr>
              <td>Experiencia base</td>
              <td>{dataPok?.base_experience}</td>
            </tr>
          </tbody>
        </table>
      </div>
        </aside>
    )
}
export default SideBar