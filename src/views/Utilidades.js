import React, { useEffect, useState } from 'react'
import { Layout_Finanzas } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"


export const Utilidades = () => {

    return(
        <Layout_Finanzas>
            <div>
                <img src={Fondo1080} className="card-img" height={140} />
            </div>
            <div className='text-center my-4'>
                <h1>Utilidades</h1>
            </div>
            <hr className='mt-4 m-4'></hr>
            
        </Layout_Finanzas>
    )
    
}