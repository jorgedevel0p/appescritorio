import React from 'react'
import { Link } from 'react-router-dom'
import { RouteLink } from './RouteLink'

export const Navbar_Bodega = () => {

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height:850}}>
                <Link to="/bodegas">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <svg className="bi pe-none me-2" width="40" height="32"></svg>
                        <span className="fs-4">Bodega</span>
                    </a>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto activate">
                    <RouteLink route={'/bodegas'} title='Home' icon='fa-solid fa-home' />
                    <RouteLink route={'/controlStock'} title='Stock de Productos' icon='fa-solid fa-box' />
                    <RouteLink route={'/pedidoBodega'} title='Pedido Proveedor' icon='fa-solid fa-clipboard-check' />
                    <RouteLink route={'/'} title='Cerrar Sesión' icon='fa-solid fa-right-from-bracket' />
                </ul>
            </div>
        </>
    )

}