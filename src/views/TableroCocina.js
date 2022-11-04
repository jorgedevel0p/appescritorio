import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Cocina } from '../components'
import Fondo1080 from "../assets/img/720x120.jpg" 

export const TableroCocina = () => {
    return (
        <>
            <Layout_Cocina>
            <div>
                <img src={Fondo1080}
                    className="card-img"
                    height={140} />
            </div>
            <h2 className='text-center my-4'>Pedido Pendientes</h2>
            <hr></hr>
            

            </Layout_Cocina>
            
            <Footer />
        </>
    )

}