import React, { useEffect, useState, useContext, useRef } from 'react'
import { Layout_Finanzas } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"
import restaurantContext from '../context/restaurantContext'

export const Utilidades = () => {
    const { boletas, pedidos_proveedor } = useContext(restaurantContext)

    const valoresVenta = boletas.data.map((boleta) => (boleta.value))
   
    const valoresCompra = pedidos_proveedor.data.map((ped) => (ped.total_value))

    const totalVenta = valoresVenta.reduce((acumulador, valorActual) =>
        acumulador + valorActual, 0);   

    const totalCompra = valoresCompra.reduce((acumulador, valorActual) =>
        acumulador + valorActual, 0);

    const utilidades = totalVenta - totalCompra

//     const tiempoTranscurrido = Date.now();
// const hoy = new Date(tiempoTranscurrido);
// const mesActual = hoy.getMonth() + 1; 

//     console.log(mesActual)

        return (
        <Layout_Finanzas>
            <div>
                <img src={Fondo1080} className="card-img" height={140} />
            </div>
            <div className='text-center my-4'>
                <h1>Utilidades</h1>
            </div>
            <hr className='mt-4 m-4'></hr>
             <div className='container'>                
                <div className='row row-cols-3 text-center'>
                    <div className='col'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Ingresos</h5>
                                <p class="card-text">${totalVenta}</p>                                
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                    <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Egresos</h5>
                                <p class="card-text">${totalCompra}</p>                                
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                    <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Utilidades</h5>
                                <p class="card-text">${utilidades}</p>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            


        </Layout_Finanzas>
    )

}