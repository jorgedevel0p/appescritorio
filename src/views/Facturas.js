import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

export const Facturas = () => {
    return(
        <Layout_Admin>
            <div>
                <img src={Fondo1080} 
                    className="card-img" 
                    height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Registro de Factura                        
                    </h2>
                </div>
                <div className='card-body'>                    
                    <input 
                        type='text' 
                        name='id' 
                        className='form-control mb-2'
                        placeholder='ID Factura'
                        readOnly={true}>
                    </input>
                    <input
                        type='date'
                        name='date'
                        className='form-control mb-2'
                        placeholder='Fecha'>                            
                    </input>
                    <input 
                        type='text' 
                        name='pedido_prov id' 
                        className='form-control mb-2'
                        placeholder='Pedido Proveedor ID'>
                    </input>
                    <input 
                        type='text' 
                        name='proveedor id' 
                        className='form-control mb-2'
                        placeholder='Proveedor ID'>
                    </input>
                    <div>
                        <button type='button' className='btn btn-success '>Guardar</button>
                        <button type='button' className='btn btn-dark'>Actualizar</button>
                        <button type='button' className='btn btn-light'>Limpiar</button>
                    </div>                        
                    
                </div>
            </div>
            <hr className='mt-4 m-4'></hr>
            <div className='card my-3 mx-4 justify-center'>
                <div  className='card-header text-center'>
                    <h2>Listado de Facturas</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Fecha</th>
                                <th scope='col'>ID Pedido Proveedor</th>
                                <th scope='col'>ID Proveedor</th>
                                <th scope='col'>Editar</th>
                            </tr>
                        </thead>
                    </table>

                </div>
            </div>

        </Layout_Admin>
    )
}