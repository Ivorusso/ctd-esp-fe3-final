import React from 'react'
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

const Navbar = () => {


  return (
    <div>
      <nav>
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