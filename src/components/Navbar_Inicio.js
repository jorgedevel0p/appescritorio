import React from 'react'
import { Link } from 'react-router-dom'



export const Navbar_Inicio = () => {

  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to='/'>
          <a class="navbar-brand" href="#">Siglo XXI</a>
        </Link>
        


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <Link to='/carta'>
              <a class="nav-link" href="#">Carta <span class="sr-only">(current)</span></a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/Nosotros'>
                <a class="nav-link" href="#">Nosotros</a>
              </Link>
            </li>

            <li class="nav-item">
              <Link to='/login'>
                <a class="nav-link" href="#">Iniciar Sesión</a>
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )

}