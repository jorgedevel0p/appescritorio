import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Finanzas } from '../components'

export const Finanzas = () => {
    return (
        <>
            <Layout_Finanzas>
            
            <h1 className="text-center">Modulo Finanzas</h1>
            <div className="my-5 text-center">
                <div className="container-fluid justify-center">
                    <div className="row">
                        <div className="col-12">
                            <Link to='/' className="btn btn-primary">Modulo de ingreso</Link>
                        </div>
                        <div className="col-12 my-4">
                            <Link to='/' className="btn btn-primary">Modulo de Egreso</Link>
                        </div>

                        <div className="col-12">
                            <Link to='/' className="btn btn-primary">Modulo Resumen Finanzas</Link>
                        </div>
                    </div>
                </div>
            </div>
            </Layout_Finanzas>
        </>
    )

}