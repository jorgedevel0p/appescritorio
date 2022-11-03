import React, { useEffect, useState } from 'react'
import { Footer, Layout_Cliente } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

export const ReservaWeb = () => {
    return (
        <>
            <Layout_Cliente>
                <div>
                    <img src={Fondo1080} className="card-img" height={140} />
                </div>
                <h3 className='text-center my-4'>Reserva</h3>

            </Layout_Cliente>
            <Footer />
        </>
    )
}