import React from 'react'
//import "./img/"
import "./navbar.css"
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (

    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><alt width={120} height={80} className="d-inline-block align-text-top logo_image" />
          </NavLink>
          <h3 className="colortext">Fernández &amp; Asociados.</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link " : "nav-link")} aria-current="page" to="/Proyect4nuevo">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/clients">Reservación</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>



  )
}

export default Navbar

