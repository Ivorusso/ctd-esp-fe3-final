import React from 'react'
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <div>
      <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to='/home'>Home</Link> {" "}
      <Link to='/contacto'>Contacto</Link> {" "}
      <Link to='/favs'>Favs</Link> {" "}
      <button>Change theme</button>
    </nav>
    <Outlet/>
    </div>
  )
}

export default Navbar