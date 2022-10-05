import React from 'react'
import "./footer.css"


const Footer = () => {
  return (
    <>
    <div className="container footer">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 colortext">Home</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 colortext">Servicios</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 colortext">Tienda</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 colortext">Contacto</a></li>
    </ul>
    <p className="text-center colortext">Dra. Nelly Fernández</p>
  </footer>
</div>

   
    </>
  )
}

export default Footer