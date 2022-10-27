import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar_Bodega = () => {

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height: '100vh' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"></svg>
                <span className="fs-4">Bodega</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <Link to='/controlStock'>
                        <a href="#" className="nav-link text-white active">
                            <i className="fa-solid fa-home m-2" style={{ color: '#ffffff' }}></i>
                            Stock de Productos
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/pedidoBodega'>
                        <a href="#" className="nav-link text-white" aria-current="page">
                            <i className="fa-regular fa-user m-2" style={{ color: '#ffffff' }}></i>
                            Pedido Proveedores
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <a href="#" className="nav-link text-white">
                            <i className="fa-solid fa-right-from-bracket m-2" style={{ color: '#ffffff' }}></i>
                            Cerrar sesion
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