import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export const Home = () => {

  return (
    <main class="d-flex flex-nowrap">
      <h1 class="visually-hidden">Sidebars examples</h1>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height: '100vh' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"></svg>
          <span className="fs-4">Administrador</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to='/Users'>
              <a href="#" className="nav-link active" aria-current="page">
                <i className="fa-regular fa-user m-2" style={{ color: '#ffffff' }}></i>
                Usuarios
              </a>
            </Link>
          </li>
          <li>
            <Link to='/Mesas'>
              <a href="#" className="nav-link text-white" aria-current="page">
                <i className="fa-solid fa-utensils m-2" style={{ color: '#ffffff' }}></i>
                Mesas
              </a>
            </Link>

          </li>
          <li>
            <Link to='/Productos'>
              <a href="#" className="nav-link text-white">
                <i className="fa-solid fa-cart-shopping m-2" style={{ color: '#ffffff' }}></i>
                Productos
              </a>
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="fa-solid fa-rotate-left m-2" style={{ color: '#ffffff' }}></i>
              Volver al inicio
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <div href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>Perfil</strong>
          </div>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>New project...</li>
            <li>Settings</li>
            <li>
              Profile
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>Sign out</li>
          </ul>
        </div>

      </div>

      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        <h1 class="text-center mt-3">
          Modulo Administrador
        </h1>
      </div>
    </main>

  )
}

{/* <>
<Navbar />
<div class="container">

<h1 class="text-center mt-3">
  Modulo Administrador
</h1>
<div class="my-5 text-center">
  <div class="container-fluid justify-center">
    <div class="row">
      <div class="col-12">
        <Link to='/Users' class="btn btn-primary">Mantenedor Usuarios</Link>
      </div>
      <div class="col-12 my-4">
        <Link to='/Mesas' class="btn btn-primary">Mantenedor Mesas</Link>
      </div>

      <div class="col-12">
        <Link to='/Productos' class="btn btn-primary">Mantenedor Productos</Link>
      </div>

    </div>

  </div>

</div>
</div>
<Footer />     </>*/}