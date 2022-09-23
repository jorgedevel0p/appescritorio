import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'

export const Bodegas = () => {
    return (
        <>
            <Navbar />
        
            <h1 class="text-center">Modulo Bodega</h1>
            
            <div class="my-5 text-center container-fluid">
                <div class="container-fluid justify-center">
                    <div class="row">
                        <div class="col-6 ">
                            <Link to='/' class="btn btn-primary">Modulo de Productos</Link>
                        </div>
                        <div class="col-6 ">
                            <Link to='/' class="btn btn-primary">Modulo de Proveedores</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}