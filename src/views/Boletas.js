import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"
import restaurantContext from '../context/restaurantContext'

const DEFAULT_STATE = {
    id: '',
    value:'',
    tip:'',
    payment_method:'',
    date:'',
    time:'',
    state:'',
    orden:'',
    user:'',
}

export const Boletas = () => {
    const [boleta, setBoleta] = useState(DEFAULT_STATE)
    const [boletas, setBoletas] = useState([])
    const {isLoading, makeHttpRequest} = useHttpRequest()
    const { mesas, users, getUserById } = useContext(restaurantContext)

    const handleChange = (e) => {
        setBoleta({
            ...boleta,
            [e.target.name]: e.target.value
        })
    }

    const getBoletas = () => {
        makeHttpRequest({
            operation: '/boleta/',
            data: null,
            method: 'GET',
            callback: ({ok, data}) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                setBoletas(data)
                console.log(data, 'Listado Boletas recibidas')
            }
        })
    }

    const saveBoleta = () => {
        console.log(' llega', boleta)
        makeHttpRequest({
            operation: '/boleta/',
            data: boleta,
            method: 'POST',
            callback: ({ok, data}) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                console.log(data, 'Ha guardado la Boleta correctamente')
                resetForm()
                getBoletas()
            }
        })
    }

    const updateBoleta = (id) => {
        if (confirm("¿Desea actualizar la información de esta boleta?") === false) {
            return
        }
        makeHttpRequest({
            operation: `/boleta/${id}`,
            data: boleta,
            method: 'PUT',
            callback: ({ok, data}) => {
                if (!ok){
                    alert(JSON.stringify(data))
                    return  
                }
                console.log(data, 'Boleta se ha actualizado correctamente')
                getBoletas()
                resetForm()
            }
        })
    }

    const setBoletaDataIntoForm = (boleta) => {
        setBoleta(boleta)
    }

    const deleteBoleta = (id) => {
        if (confirm("¿Desea eliminar la boleta?") === false) {
            return
        }
        makeHttpRequest({
            operation: `/boleta/${id}`,
            data: null,
            method: 'DELETE',
            callback: (ok, data) => {
                if (!ok){
                    alert(JSON.stringify(data))
                    return 
                }
                console.log(data, 'Boleta se ha eliminado correctamente')
                getBoletas()
            }
        })
    }

    const resetForm = () => setBoleta({ ...DEFAULT_STATE})

    useEffect(() => {
        getBoletas()
    }, [])

    return(
        <Layout_Admin>
            <div>
                <img src={Fondo1080} 
                    className="card-img" 
                    height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Detalle Boleta                        
                    </h2>
                </div>
                <div className='card-body'>  
                
                    <div className="row row-cols-4 mb-2">
                    <div className="col mb-1">
                        <label for="user" class="form-label">ID Boleta</label>                  
                    <input 
                        type='text' 
                        name='id' 
                        className='form-control mb-2'
                        placeholder='ID Boleta'
                        readOnly={true}
                        value={boleta.id}
                        onChange={handleChange}>
                    </input></div>
                    <div className="col mb-1">
                        <label for="user" class="form-label">Valor Boleta</label>
                        <input 
                            type='number' 
                            name='value' 
                            className='form-control mb-2'
                            placeholder='Valor Boleta'
                            value={boleta.value}
                            onChange={handleChange}>
                        </input></div>
                        <div className="col mb-1">
                    <label for="user" class="form-label">Valor Propina</label>
                    
                    <input 
                        type='number' 
                        name='tip' 
                        className='form-control mb-2'
                        placeholder='Propina'
                        value={boleta.tip}
                        onChange={handleChange}>
                    </input></div>
                    <div className="col mb-1">
                    <label for="user" class="form-label">Medio de Pago</label>
                    <select 
                        type='text' 
                        name='payment_method' 
                        className='form-control mb-2'
                        value={boleta.payment_method}
                        onChange={handleChange}>
                            <option disabled selected>Método de Pago</option>
                            <option value="Efectivo">Efectivo</option>
                            <option value="Credito">Crédito</option>
                            <option value="Debito">Débito</option>
                    </select></div>
                    </div>
                    <div className="row row-cols-2 mb-2">
                    <div className="col mb-">
                    <label for="user" class="form-label">Fecha</label>
  
                    <input
                        type='date'
                        name='date'
                        className='form-control mb-2'
                        placeholder='Fecha'
                        value={boleta.date}
                        onChange={handleChange}>                            
                    </input>
                    </div>
                    <div className="col mb-1">
                    <label for="user" class="form-label">Hora</label>
  
                    <input
                        type='time'
                        name='time'
                        className='form-control mb-2'
                        placeholder='Hora'
                        value={boleta.time}
                        onChange={handleChange}>                            
                    </input>
                    </div>
                    </div>
                    <div className="row row-cols-2 mb-2">
                    <div className="col mb-1">
                    <label for="user" class="form-label">Estado Orden</label>
                    <select 
                        type='text' 
                        name='state' 
                        className='form-control mb-2'
                        value={boleta.state}
                        onChange={handleChange}>
                            <option disabled selected>Estado</option>
                            <option value="Efectivo">Pagado</option>
                            <option value="Credito">Pendiente</option>
                            <option value="Debito">Cancelado</option>
                    </select></div>
                    <div className="col mb-1">
                    <label for="user" class="form-label">ID Orden</label>
                    <input
                        type='number'
                        name='orden'
                        className='form-control mb-2'
                        placeholder='ID Orden'
                        value={boleta.orden}
                        onChange={handleChange}>                            
                    </input></div></div>
                    
                    <div className="col mb-3">
                                <label for="user" class="form-label">Usuario boleta</label>
                                <select
                                    type='text'
                                    name='user'
                                    className='form-control'
                                    value={boleta.user}
                                    onChange={handleChange}
                                >
                                    <option value='' disabled selected>Usuario boleta</option>
                                    {users.data.map(user => (
                                        <option value={user.id}>{user.email}</option>
                                    ))}
                                </select>
                            </div>
                    <div className='col-md-12 text-center my-3 ' >
                        {
                            !boleta.id
                                ?<button 
                                    type='button' 
                                    className='col-md-2 btn btn-success mx-3' 
                                    onClick={saveBoleta}>
                                        Guardar
                                </button>
                                :<button 
                                    type='button' 
                                    className='col-md-2 btn btn-dark mx-3 '
                                    onClick={() => updateBoleta(boleta.id)}>
                                        Actualizar
                                </button>
                        }
                        <button 
                            type='button' 
                            className='col-md-2 btn btn-light mx-3' 
                            onClick={resetForm}>
                                Limpiar
                        </button>                                             
                    </div>                        
                </div>
            </div>
            <hr className='mt-4 m-4'></hr>
            <div className='card my-3 mx-4 justify-center'>
                <div  className='card-header text-center'>
                    <h2>Listado de Boletas</h2>
                </div>
                <div className='card-body text-center'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Valor</th>
                                <th scope='col'>Propina</th>
                                <th scope='col'>Método Pago</th>
                                <th scope='col'>Fecha</th>
                                <th scope='col'>Hora</th>
                                <th scope='col'>Estado</th>
                                <th scope='col'>ID Orden</th>
                                <th scope='col'>Mail Usuario</th>
                                <th scope='col'>Editar</th>
                                <th scope='col'>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {boletas.map(bol => (
                            <tr>
                                <th scope="row">{bol.id}</th>
                                <td>{bol.value}</td>
                                <td>{bol.tip}</td>
                                <td>{bol.payment_method}</td>
                                <td>{bol.date}</td>
                                <td>{bol.time}</td>
                                <td>{bol.state}</td>
                                <td>{bol.orden}</td>
                                <td>{getUserById(bol.user).email}</td>
                                <td>{bol.user}</td>                                
                                <td>
                                <button 
                                    type='button' 
                                    className='btn btn-warning btn-xs' 
                                    onClick={() => setBoletaDataIntoForm(bol)}>
                                    <i 
                                        className="fa-solid fa-pen-to-square" 
                                        style={{ color: '#ffffff' }}>
                                    </i>
                                    </button>
                                </td>
                                <td>
                                <button 
                                    type='button' 
                                    className='btn btn-danger btn-xs' 
                                    onClick={() => deleteBoleta(bol.id)}>
                                    <i 
                                        className="fa-solid fa-trash">
                                    </i>
                                </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </Layout_Admin>
    )
}