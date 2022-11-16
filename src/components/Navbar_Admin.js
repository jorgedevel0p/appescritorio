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
        <RouteLink route={'/Home'} title='Home' icon='fa-solid fa-home' />
        <RouteLink route={'/Users'} title='Usuarios' icon='fa-solid fa-user' />
        <RouteLink route={'/Mesas'} title='Mesas' icon='fa-solid fa-table' />
        <RouteLink route={'/Reservas'} title='Reservas' icon='fa-regular fa-calendar-check' />
        <RouteLink route={'/Ordenes'} title='Ordenes' icon='fa-solid fa-arrow-up-wide-short'/>
        <RouteLink route={'/DetalleOrden'} title='DetalleOrden'icon='fa-solid fa-circle-info' />
        <RouteLink route={'/Platos'} title='Platos' icon='fa-solid fa-utensils'/>
        {/* <RouteLink route={'/Ingredientes'} title='Ingredientes' /> */}
        <RouteLink route={'/Productos'} title='Productos' icon='fa-solid fa-cart-shopping' />
        <RouteLink route={'/Proveedores'} title='Proveedores' icon='fa-solid fa-truck-field-un'/>
        <RouteLink route={'/PedidoProveedor'} title='PedidoProveedor'icon='fa-solid fa-cart-shopping' />
        <RouteLink route={'/DetallePedidos'} title='DetallePedidos' icon='fa-solid fa-list-check'/>
        <RouteLink route={'/Facturas'} title='Facturas' icon='fa-solid fa-file-invoice'/>
        <RouteLink route={'/MovimientoCaja'} title='MovimientoCaja' icon='fa-solid fa-cash-register'/>
        <RouteLink route={'/Boletas'} title='Boletas' icon='fa-solid fa-ticket'/>
        <RouteLink route={'/ResumenDatos'} title='ResumenDatos' icon='fa-solid fa-chart-simple'/>
        <RouteLink route={'/'} title='Cerrar Sesión' icon='fa-solid fa-right-from-bracket'/>
        
        
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