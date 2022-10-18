import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'

export const Clientes = () => {
    return (
        <>
            {/* <Link to='/home' className="btn btn-secondary right my-3 ml-5">Volver al home</Link> */}
            <h1 className="text-center">Mi Cuenta</h1>
            <div className="my-5 text-center">
                <div className="container-fluid justify-center">
                    <div className="row">
                        <div className="col-12">
                            <Link to='/' className="btn btn-primary">Mis Datos</Link>
                        </div>
                        <div className="col-12 my-4">
                            <Link to='/' className="btn btn-primary">Mis Reservas</Link>
                        </div>

                        <div className="col-12">
                            <Link to='/' className="btn btn-primary">Reservar</Link> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}