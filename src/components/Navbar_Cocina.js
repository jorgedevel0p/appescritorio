import React from 'react'
import { Link } from 'react-router-dom'
import { RouteLink } from './RouteLink'

export const Navbar_Cocina = () => {

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height: 900}}>
                <Link to="/cocinas">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <svg className="bi pe-none me-2" width="40" height="32"></svg>
                        <span className="fs-4">Cocina</span>
                    </a>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto activate">
                    <RouteLink route={'/cocinas'} title='Home' icon='fa-solid fa-home' />
                    <RouteLink route={'/Recetas'} title='Recetas' icon='fa-solid fa-table' />
                    <RouteLink route={'/TableroCocina'} title='Tablero Cocina' icon='fa-solid fa-utensils' />
                    <RouteLink route={'/'} title='Cerrar Sesión' icon='fa-solid fa-right-from-bracket' />
                </ul>
            </div>
        </>
    )

}