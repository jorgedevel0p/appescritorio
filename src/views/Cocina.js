import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Cocina } from '../components'

export const Cocinas = () => {
    return (
        <>
            <Layout_Cocina>
            <h1 className="text-center">Modulo Cocina</h1>
            <div className="my-5 text-center">
                <div className="container-fluid justify-center">
                    <div className="row">
                        <div className="col-12">
                            <Link to='/Recetas' className="btn btn-primary">Modulo de Recetas</Link>
                        </div>
                        <div className="col-12 my-4">
                            <Link to='/TableroCocina' className="btn btn-primary">Modulo de Pedidos</Link>
                        </div>
                    </div>
                </div>
            </div>
            </Layout_Cocina>
            <Footer />
        </>
    )

}