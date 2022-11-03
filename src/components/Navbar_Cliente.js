import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar_Cliente = () => {

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height: '100vh' }}>
            <Link to="/clientes">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"></svg>
                    <span className="fs-4">Cliente</span>
                </a>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <Link to='/reservaWeb'>
                        <a href="#" className="nav-link text-white">
                            <i className="fa-solid fa-home m-2" style={{ color: '#ffffff' }}></i>
                            Nueva Reserva
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/reservasCliente'>
                        <a href="#" className="nav-link text-white" aria-current="page">
                            <i className="fa-regular fa-user m-2" style={{ color: '#ffffff' }}></i>
                            Listado Reservas
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <a href="#" className="nav-link text-white">
                            <i className="fa-solid fa-right-from-bracket m-2" style={{ color: '#ffffff' }}></i>
                            Cerrar sesión
                        </a>
                    </Link>
                </li>
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