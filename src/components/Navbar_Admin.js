import React from 'react'
import { Link } from 'react-router-dom'
import { RouteLink } from './RouteLink'

export const Navbar_Admin = () => {

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height: '100%' }}>
      <Link to="/home">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"></svg>
          <span className="fs-4">Administrador</span>
        </a>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto activate">
        <RouteLink route={'/Home'} title='Home' icon='fa-solid fa-table' />
        <RouteLink route={'/Users'} title='Usuarios' icon='fa-solid fa-user' />
        <RouteLink route={'/Mesas'} title='Mesas' icon='fa-solid fa-table' />
        <RouteLink route={'/Reservas'} title='Reservas' />
        <RouteLink route={'/Ordenes'} title='Ordenes' />
        <RouteLink route={'/DetalleOrden'} title='DetalleOrden' />
        <RouteLink route={'/Platos'} title='Platos' />
        {/* <RouteLink route={'/Ingredientes'} title='Ingredientes' /> */}
        <RouteLink route={'/Productos'} title='Productos' />
        <RouteLink route={'/Proveedores'} title='Proveedores' />
        <RouteLink route={'/PedidoProveedor'} title='PedidoProveedor' />
        <RouteLink route={'/DetallePedidos'} title='DetallePedidos' />
        <RouteLink route={'/Facturas'} title='Facturas' />
        <RouteLink route={'/MovimientoCaja'} title='MovimientoCaja' />
        <RouteLink route={'/Boletas'} title='Boletas' />
        <RouteLink route={'/Boletas'} title='Facturas' />
        <RouteLink route={'/'} title='Cerrar Sesión' />
      </ul>

      <hr />

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
      </div>

    </div>

  )

}