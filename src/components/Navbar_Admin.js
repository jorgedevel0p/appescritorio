import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar_Admin = () => {

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height: '100vh' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"></svg>
        <span className="fs-4">Administrador</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to='/Home'>
            <a href="#" className="nav-link text-white active">
              <i className="fa-solid fa-home m-2" style={{ color: '#ffffff' }}></i>
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/Users'>
            <a href="#" className="nav-link text-white" aria-current="page">
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
          <Link to='/Boletas'>
            <a href="#" className="nav-link text-white">
              <i className="fa-solid fa-cart-shopping m-2" style={{ color: '#ffffff' }}></i>
              Boletas
            </a>
          </Link>
        </li>
        <li>
          <Link to='/DetalleOrden'>
            <a href="#" className="nav-link text-white">
              <i className="fa-solid fa-cart-shopping m-2" style={{ color: '#ffffff' }}></i>
              Detalle Orden
            </a>
          </Link>
        </li>
        <li>
          <Link to='/Facturas'>
            <a href="#" className="nav-link text-white">
              <i className="fa-solid fa-cart-shopping m-2" style={{ color: '#ffffff' }}></i>
              Facturas
            </a>
          </Link>
        </li>
        <li>
          <Link to='/PedidoProveedor'>
            <a href="#" className="nav-link text-white">
              <i className="fa-solid fa-cart-shopping m-2" style={{ color: '#ffffff' }}></i>
              Pedido Proveedor
            </a>
          </Link>
        </li>
        <li>
          <Link to='/DetallePedidos'>
            <a href="#" className="nav-link text-white">
              <i className="fa-solid fa-cart-shopping m-2" style={{ color: '#ffffff' }}></i>
              Detalle Pedido Proveedor
            </a>
          </Link>
        </li>
        <li>
          <Link to='/MovimientoCaja'>
            <a href="#" className="nav-link text-white">
              <i className="fa-solid fa-cart-shopping m-2" style={{ color: '#ffffff' }}></i>
              Movimiento Caja
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/Cajas'>
            <a href="#" className="nav-link text-white" aria-current="page">
              <i className="fa-regular fa-user m-2" style={{ color: '#ffffff' }}></i>
              Caja
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/Proveedores'>
            <a href="#" className="nav-link text-white" aria-current="page">
              <i className="fa-regular fa-user m-2" style={{ color: '#ffffff' }}></i>
              Proveedores
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link to='/Platos'>
            <a href="#" className="nav-link text-white" aria-current="page">
              <i className="fa-regular fa-user m-2" style={{ color: '#ffffff' }}></i>
              Platos
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link to='/Reservas'>
            <a href="#" className="nav-link text-white" aria-current="page">
              <i className="fa-regular fa-user m-2" style={{ color: '#ffffff' }}></i>
              Reservas
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link to='/Ingredientes'>
            <a href="#" className="nav-link text-white" aria-current="page">
              <i className="fa-regular fa-user m-2" style={{ color: '#ffffff' }}></i>
              Ingredientes
            </a>
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to='/Ordenes'>
            <a href="#" className="nav-link text-white" aria-current="page">
              <i className="fa-regular fa-user m-2" style={{ color: '#ffffff' }}></i>
              Ordenes
            </a>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <a href="#" className="nav-link text-white">
              <i className="fa-solid fa-right-from-bracket m-2" style={{ color: '#ffffff' }}></i>
              Cerrar Sesión
            </a>
          </Link>

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

  )

}