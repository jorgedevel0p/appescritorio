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
            <h1 class="text-center">Modulo Cocina</h1>
            <div class="my-5 text-center">
                <div class="container-fluid justify-center">
                    <div class="row">
                        <div class="col-12">
                            <Link to='/' class="btn btn-primary">Modulo de Recetas</Link>
                        </div>
                        <div class="col-12 my-4">
                            <Link to='/' class="btn btn-primary">Modulo de Pedidos</Link>
                        </div>
                    </div>
                </div>
            </div>
            </Layout_Cocina>
            <Footer />
        </>
    )

}