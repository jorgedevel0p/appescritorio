import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'

export const Finanzas = () => {
    return (
        <>
            <Navbar />
            <h1 class="text-center">Modulo Finanzas</h1>
            <div class="my-5 text-center">
                <div class="container-fluid justify-center">
                    <div class="row">
                        <div class="col-12">
                            <Link to='/' class="btn btn-primary">Modulo de ingreso</Link>
                        </div>
                        <div class="col-12 my-4">
                            <Link to='/' class="btn btn-primary">Modulo de Egreso</Link>
                        </div>

                        <div class="col-12">
                            <Link to='/' class="btn btn-primary">Modulo Resumen Finanzas</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}