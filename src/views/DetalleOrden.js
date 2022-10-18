import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

export const DetalleOrden = () => {
    return(
        <Layout_Admin>
            <div>
                <img src={Fondo1080} 
                    className="card-img" 
                    height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Detalle Orden                        
                    </h2>
                </div>
                <div className='card-body'>
                    
                    <input 
                        type='text' 
                        name='id' 
                        className='form-control mb-2'
                        placeholder='ID Boleta'
                        readOnly={true}>
                    </input>
                    <input 
                        type='text' 
                        name='cantidad' 
                        className='form-control mb-2'
                        placeholder='Cantidad Platos'>
                    </input>
                    <input
                        type='text'
                        name='orden'
                        className='form-control mb-2'
                        placeholder='ID Orden'>                            
                    </input>
                    <input
                        type='text'
                        name='plato'
                        className='form-control mb-2'
                        placeholder='ID Plato'>                            
                    </input>
                    <input
                        type='text'
                        name='producto'
                        className='form-control mb-2'
                        placeholder='ID Producto'>                            
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
                    <h2>Listado de Detalles Ordenes</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Cantidad de Platos</th>
                                <th scope='col'>ID Orden</th>
                                <th scope='col'>ID Plato</th>
                                <th scope='col'>ID Producto</th>
                                <th scope='col'>Editar</th>
                            </tr>
                        </thead>
                    </table>

                </div>
            </div>

        </Layout_Admin>
    )
}