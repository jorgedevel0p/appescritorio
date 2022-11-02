import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

const DEFAULT_STATE = {
    id: '',
    daily_total_value: '',
}

export const Cajas = () => {
    const { isLoading, error, makeHttpRequest } = useHttpRequest()
    const [cajas, setCajas] = useState([])
    const [caja, setCaja] = useState(DEFAULT_STATE)

    const handleChange = (e) => {
        setCaja({
        ...caja,
        [e.target.name]: e.target.value
        })
    }

    const getCajas = () => {
        makeHttpRequest({
            operation: '/caja/',
            data: null,
            method: 'GET',
            callback: ({ok, data}) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                return
                }
                console.log(data, 'Listado Cajas recibido')
                setCajas(data)
            }
        })
    } 

    const saveCaja = () => {
        console.log(caja)
        makeHttpRequest({
            operation: '/caja/',
            data: caja,
            method: 'POST',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                return
                }
            console.log(data, 'Ha guardado Caja correctamente')
            getCajas()
            resetForm()
            }
        })
    }

    const updateCaja = (id) => {
        if (confirm("¿Desea actualizar la información de esta caja?") === false) {
            return
        }
        makeHttpRequest({
            operation: `/caja/${id}`,
            data: caja,
            method: 'PUT',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                return
            }
            console.log(data, 'Caja se ha actualizado correctamente')
            getCajas()
            resetForm()
            }
        })
    }

    const setCajaDataIntoForm = (caja) => {
        setCaja(caja)
    }

    const deleteCaja = (id) => {
        if (confirm("¿Desea eliminar esta caja?") === false) {
            return
        }
        makeHttpRequest({
            operation: `/caja/${id}`,
            data: null,
            method: 'DELETE',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                return
            }
            console.log(data, 'Caja se ha eliminado correctamente')
            getCajas()
            }
        })
    }

    const resetForm = () => [setCaja({ ...DEFAULT_STATE })]

    useEffect(() => {
        getCajas()
    }, [])

    return (
        <Layout_Admin>
            <div>
                <img 
                    src={Fondo1080} 
                    className="card-img" 
                    height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Detalle Caja
                    </h2>
                </div>
                <div className='card-body'>
                    <input 
                        type='text' 
                        name='id' 
                        className='form-control mb-2' 
                        placeholder='ID Caja' 
                        readOnly={true}
                        value={caja.id}
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='number' 
                        name='daily_total_value' 
                        className='form-control mb-2' 
                        placeholder='Total Diario'
                        value={caja.daily_total_value}
                        onChange={handleChange}>                            
                    </input>
                    <div className='col-md-12 text-center my-3 '>
                        {
                            !caja.id
                                ? <button 
                                    type='button' 
                                    className='col-md-2 btn btn-success mx-3' 
                                    onClick={saveCaja}>
                                    Guardar
                                </button>
                                : <button 
                                    type='button' 
                                    className='col-md-2 btn btn-dark mx-3 ' 
                                    onClick={() => updateCaja(caja.id)}>
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
                <div className='card-header text-center'>
                    <h2>Listado de Cajas</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Total Diario</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {cajas.map(caja => (
                                <tr>
                                    <td>{caja.id}</td>
                                    <td>{caja.daily_total_value}</td>
                                    <td>
                                        <button
                                            type='button'
                                            className='btn btn-warning btn-xs m-1'
                                            onClick={() => setCajaDataIntoForm(caja)}>
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
                                            onClick={() => deleteCaja(caja.id)}>
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