import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Bodega } from '../components'

export const Bodegas = () => {
    return (
        <>
            <Layout_Bodega>
        
            <h1 className="text-center">Modulo Bodega</h1>
            
            {/* <div className="my-5 text-center container-fluid">
                <div className="container-fluid justify-center">
                    <div className="row">
                        <div className="col-6 ">
                            <Link to='/' className="btn btn-primary">Modulo de Productos</Link>
                        </div>
                        <div className="col-6 ">
                            <Link to='/' className="btn btn-primary">Modulo de Proveedores</Link>
                        </div>
                    </div>
                </div>
            </div> */} 
            </Layout_Bodega>
            <Footer />
        </>
    )

}