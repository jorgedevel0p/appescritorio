import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Cocina } from '../components'
import Fondo1080 from "../assets/img/720x120.jpg"

export const Cocinas = () => {
    return (
        <>
            <Layout_Cocina>
                <div>
                    <img src={Fondo1080} className="card-img" height={140} />
                </div>
                <h1 className="text-center">Módulo Cocina</h1>
                <hr></hr>
                <form className='container ' >
                    <div className="row row-cols-3 my-2">
                        <div className='col-6'>
                            <div class="alert alert-warning mx-1" role="alert">
                                Cuidado con los utensilios de cocina
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-warning mx-1" role="alert">
                                Presta atención a los líquidos de alta temperatura
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-warning mx-1" role="alert">
                                Mantén tu espacio de trabajo limpio
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-warning mx-1" role="alert">
                                Siempre usa los implementos que se te asignaron
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-warning mx-1" role="alert">
                                Utiliza los productos de mejor calidad
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-warning mx-1" role="alert">
                                Recuerda lavar bien tus manos y utensilios
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="alert alert-warning mx-1" role="alert">
                                Usa calzado limpio y apropiado
                            </div>
                        </div>
                    </div>
                </form>
            </Layout_Cocina>
           
        </>
    )

}