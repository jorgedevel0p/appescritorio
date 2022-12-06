import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Layout_Cliente } from '../components'
import { Footer } from '../components/Footer'
import Fondo1080 from "../assets/img/720x120.jpg"
import { useHttpRequest } from '../hooks/useHttpRequest'

export const Clientes = () => {
    return (
        <>
            <Layout_Cliente>
                <div>
                    <img src={Fondo1080} className="card-img" height={140} />
                </div>
                {/* <Link to='/home' className="btn btn-secondary right my-3 ml-5">Volver al home</Link> */}
                <h1 className="text-center">Buen día</h1>
                <hr></hr>
                <form className='container ' >
                    <div className="row row-cols-3 my-2">
                        <div class="alert alert-info mx-1" role="alert">
                            Recuerda que puedes hacer una reserva desde la Web
                        </div>
                        <div class="alert alert-info mx-1" role="alert">
                            Tenemos los mejores platos, postres y tragos
                        </div>
                        <div class="alert alert-info mx-1" role="alert">
                            Siempre es un buen día para un volcán de chocolate
                        </div>
                        <div class="alert alert-info mx-1" role="alert">
                            Puedes celebrar con nosotros cada momento especial para ti
                        </div>
                        <div class="alert alert-info mx-1" role="alert">
                            Si tienes inconvenientes, puedes cancelar tu reserva
                        </div>
                        <div class="alert alert-info mx-1" role="alert">
                            Desde el restaurante también puedes reservar una mesa según disponibilidad
                        </div>

                    </div>
                </form>

            </Layout_Cliente>
            <Footer />
        </>
    )
}