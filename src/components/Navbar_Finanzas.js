import React from 'react'
import { Link } from 'react-router-dom'
import { RouteLink } from './RouteLink'

export const Navbar_Finanzas = () => {

  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height: 850 }}>
        <Link to="/finanzas">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg className="bi pe-none me-2" width="40" height="32"></svg>
            <span className="fs-4">Administrador</span>
          </a>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto activate">
          <RouteLink route={'/finanzas'} title='Home' icon='fa-solid fa-home' />
          <RouteLink route={'/Ingresos'} title='Ingresos' icon='fa-solid fa-money-bill-trend-up' />
          <RouteLink route={'/Egresos'} title='Egresos' icon='fa-solid fa-wallet' />
          <RouteLink route={'/Utilidades'} title='Utilidades' icon='fa-solid fa-sack-dollar' />
          <RouteLink route={'/'} title='Cerrar Sesión' icon='fa-solid fa-right-from-bracket' />
        </ul>
        {/* <hr />
        <div className="dropdown">
          <div href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <Link to='/Profile'>
              <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-bleu.png" alt="" width="32" height="32" className="rounded-circle me-2" />
              <strong>Perfil</strong>
            </Link>
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
        </div> */}

      </div>
    </>
  )

}