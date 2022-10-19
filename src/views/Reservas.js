import React, { useEffect, useState } from 'react'
import { Layout_Admin } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

const DEFAULT_STATE = {
    id: '',
    status: '',
    mesa_id: '',
    user_id: '',
}

export const Reservas = () => {

    const [reserva, setReserva] = useState(DEFAULT_STATE)
    const [reservas, setReservas] = useState([])
    const [form, setForm] = useState(DEFAULT_STATE)
    const { isLoading, makeHttpRequest } = useHttpRequest()
        
    const handleChange = (e) => {
        setReserva({
            ...reserva,
            [e.target.name]: e.target.value
        })
    }
        
    const getReservas = () => {
        makeHttpRequest({
        operation: '/reserva/',
        data: null,
        method: 'GET',
        callback: ({ok, data}) => {
            if (!ok) {
                alert(JSON.stringify(data))
            return
            }
            setReservas(data)
            console.log(data, 'Listado de Reservas recibido')
        }
        })
    }
        
    const saveReserva = () => {
        console.log(reserva)
        makeHttpRequest({
        operation: '/reserva/',
        data: reserva,
        method: 'POST',
        callback: ({ ok, data }) => {
            if (!ok) {
            alert(JSON.stringify(data))
            return
            }
            console.log(data, 'Ha guardado Reserva correctamente')
            getReservas()
            resetForm()
        }
        })
    }
        
    const updateReserva = (id) => {
        if (confirm("¿Desea actualizar la información de este reserva?") === false) {
        return
        }
        makeHttpRequest({
        operation: `/reserva/${id}`,
        data: reserva,
        method: 'PUT',
        callback: ({ ok, data }) => {
            if (!ok) {
            alert(JSON.stringify(data))
            return
            }
            console.log(data, 'Reserva se ha actualizado correctamente')
            getReservas()
            resetForm()
        }
        })
    }
        
    const setReservaDataIntoForm = (reserva) => {
        setReserva(reserva)
    }
        
    const deleteReserva = (id) => {
        if (confirm("¿Desea eliminar la reserva?") === false) {
        return
        } 
        makeHttpRequest({
        operation: `/reserva/${id}`,
        data: null,
        method: 'DELETE',
        callback: ({ ok, data }) => {
            if (!ok) {
            alert(JSON.stringify(data))
            return
            }
            console.log(dato, 'Se ha eliminado la reserva correctamente')
            getReservas()
        }
        })
    }
        
    const resetForm = () => [
        setReserva({ ...DEFAULT_STATE })
    ]

    useEffect(() => {
        getReservas()
    }, [])

    return (
        <Layout_Admin>
            <div>
                <img src={Fondo1080} className="card-img" height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Detalle Reserva
                    </h2>
                </div>
                <div className='card-body'>
                    <input 
                        type='text' 
                        name='id' 
                        className='form-control mb-2' 
                        placeholder='ID Caja' 
                        readOnly={true}
                        value={reserva.id}
                        onChange={handleChange}>
                    </input>
                    <select
                        type='text'
                        name='status'
                        className='form-control mb-2'
                        value={reserva.status}
                        onChange={handleChange}>
                            <option disabled selected>Estado Reserva</option>
                            <option value="Reservado">Reservado</option>
                            <option value="Cancelado">Cancelado</option>
                    </select>
                    <input 
                        type='number' 
                        name='mesa_id' 
                        className='form-control mb-2' 
                        placeholder='ID Mesa' 
                        value={reserva.mesa_id}
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='number' 
                        name='user_id' 
                        className='form-control mb-2' 
                        placeholder='ID Usuario'
                        value={reserva.user_id}
                        onChange={handleChange}>
                    </input>
                    <div className='col-md-12 text-center my-3 ' >
                        {
                            !reserva.id
                            ?<button 
                                type='button' 
                                className='col-md-2 btn btn-success mx-3' 
                                onClick={saveReserva}>
                                Guardar
                            </button>
                            :<button 
                                type='button' 
                                className='col-md-2 btn btn-dark mx-3 '
                                onClick={() => updateReserva(reserva.id)}>
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
                    <h2>Listado de Reservas</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID Reserva</th>
                                <th scope='col'>Estado</th>
                                <th scope='col'>ID Mesa</th>
                                <th scope='col'>ID Usuario</th>
                                <th scope='col'>Editar</th>
                                <th scope='col'>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {reservas.map(reserva => (
                                <tr>
                                    <th scope='row'>{reserva.id}</th>
                                    <td>{reserva.status}</td>
                                    <td>{reserva.mesa_id}</td>
                                    <td>{reserva.user_id}</td>
                                    <td>
                                        <button 
                                        type='button' 
                                        className='btn btn-warning btn-xs'
                                        onClick={() => setReservaDataIntoForm(reserva)}>
                                        <i className='fa-solid fa-pen-to-square'
                                            style={{color: '#ffffff'}}>
                                        </i>
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            type='button' 
                                            className='btn btn-danger btn-xs' 
                                            onClick={() => deleteReserva(reserva.id)}>
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