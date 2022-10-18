import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

export const PedidoProveedor = () => {
    return(
        <Layout_Admin>
            <div>
                <img src={Fondo1080} 
                    className="card-img" 
                    height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Registro de Pedido a Proveedor                        
                    </h2>
                </div>
                <div className='card-body'>                    
                    <input 
                        type='text' 
                        name='id' 
                        className='form-control mb-2'
                        placeholder='ID Pedido Proveedor'
                        readOnly={true}>
                    </input>
                    <input
                        type='date'
                        name='date'
                        className='form-control mb-2'
                        placeholder='Fecha'>                            
                    </input>
                    <input
                        type='time'
                        name='time'
                        className='form-control mb-2'
                        placeholder='Hora'>                            
                    </input>
                    <input 
                        type='text' 
                        name='total value' 
                        className='form-control mb-2'
                        placeholder='Valor Total'>
                    </input>
                    <select 
                        type='text' 
                        name='state' 
                        className='form-control mb-2'>
                            <option disabled selected>Estado</option>
                            <option value="Efectivo">Pagado</option>
                            <option value="Credito">Pendiente</option>
                            <option value="Debito">Cancelado</option>
                    </select>
                    <input
                        type='text'
                        name='proveedor'
                        className='form-control mb-2'
                        placeholder='ID Proveedor'>                            
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
                    <h2>Listado de Pedidos a Proveedor</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Fecha</th>
                                <th scope='col'>Hora</th>
                                <th scope='col'>Valor Total</th>
                                <th scope='col'>Estado</th>
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