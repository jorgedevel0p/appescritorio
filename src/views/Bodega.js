import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/Bodega_720x120.jpg"
import { Layout_Bodega } from '../components'

export const Bodegas = () => {
    return (
        <>
            <Layout_Bodega>
                <div>
                    <img src={Fondo1080}
                        className="card-img"
                        height={140} />
                </div>

                <h1 className="text-center">Módulo Bodega</h1>
                <hr></hr>


                <form className='container ' >
                    <div className="row row-cols-3 my-2">
                        <div className='col-6'>
                            <div class="alert alert-primary mx-1" role="alert">
                                Utiliza los EPP si estás en bodega
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-primary mx-1" role="alert">
                                Almacena los productos de acuerdo a su naturaleza
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-primary mx-1" role="alert">
                                Protége los alimentos para reducir riesgos de contaminación
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-primary mx-1" role="alert">
                                La temperatura debe ser la correcta para cada uno de ellos
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-primary mx-1" role="alert">
                                Revisa la fecha de vencimiento y considerala al almacenarlos
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-primary mx-1" role="alert">
                                Recuerda controlar el stock para que no haga falta mercadería
                            </div>
                        </div>
                    </div>
                </form>
            </Layout_Bodega>
            <Footer />
        </>
    )

}