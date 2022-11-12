import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Finanzas } from '../components'
import Fondo1080 from "../assets/img/720x120.jpg"

export const Finanzas = () => {
    return (
        <>
            <Layout_Finanzas>
                <div>
                    <img src={Fondo1080} className="card-img" height={140} />
                </div>

                <h1 className="text-center">Módulo Finanzas</h1>
                <hr></hr>
                <form className='container ' >
                    <div className="row row-cols-3 my-2">
                        <div className='col-6'>
                            <div class="alert alert-danger mx-1" role="alert">
                                Controla las entradas y salidas de fondos
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-danger mx-1" role="alert">
                                Revisa los informes financieros
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-danger mx-1" role="alert">
                                Si existen movimientos desconocidos, habla con tu supervisor
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-danger mx-1" role="alert">
                                Recuerda no dar información personal profesional a nadie
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-danger mx-1" role="alert">
                                Cuida tus inicios de sesión
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-danger mx-1" role="alert">
                                Ten contraseñas seguras
                            </div>
                        </div>
                    </div>
                </form>
            </Layout_Finanzas>
        </>
    )

}