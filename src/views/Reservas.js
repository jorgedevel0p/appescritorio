import React, { useEffect, useState, useContext, useRef } from 'react'
import { Layout_Admin } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import restaurantContext from '../context/restaurantContext'
import Fondo1080 from "../assets/img/720x120.jpg"
import { Modal } from "../components/ui/Modal";
import { DateTime } from 'luxon'

const DEFAULT_STATE = {
    id: '',
    status: '',
    mesa: '',
    user: '',
    date: '',
    time: '',
    date_reserva: DateTime.now()
}

export const Reservas = () => {
    const { mesas, users, getUserById } = useContext(restaurantContext)
    const [reserva, setReserva] = useState(DEFAULT_STATE)
    const [reservas, setReservas] = useState([])
    const [form, setForm] = useState(DEFAULT_STATE)
    const { isLoading, makeHttpRequest } = useHttpRequest()

    const handleChange = (e) => {
        console.log(e.target.value)
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
            callback: ({ ok, data }) => {
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
        if (confirm("¿Desea crear una nueva reserva?") === false) {
            return
        }
        
        console.log(reserva)
        makeHttpRequest({
            operation: '/reserva/',
            data: reserva,
            method: 'POST',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert('Error, no se ha guardado correctamente. Verifique los datos ingresados')
                    console.log(JSON.stringify(data))
                    return
                }
                alert('Ha guardado Reserva correctamente')
                console.log(JSON.stringify(data))
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
                    alert('Error, no se ha actualizado correctamente. Verifique los datos de ingresados')
                    console.log(JSON.stringify(data))
                    return
                }
                alert('Reserva se ha actualizado correctamente')
                console.log(JSON.stringify(data))
                getReservas()
                resetForm()
            }
        })
    }

    const setReservaDataIntoForm = (reserva) => {
        openModalImperative();
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
                    console.log(JSON.stringify(data))
                    alert('Error, no se ha eliminado. Intente más tarde.')
                    return
                }
                console.log(JSON.stringify(data))
                alert('Se ha eliminado la reserva correctamente')
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

    const btnAddModal = useRef();
    const openModalImperative = () => {
        console.log(btnAddModal.current);
        btnAddModal.current.click();
    };

    return (
        <Layout_Admin>
            <div>
                <img src={Fondo1080} className="card-img" height={140} />
            </div>
            <div className="card my-3 mx-4 justify-center">
                <div className="card-header d-flex justify-content-between">
                    <h2> Lista de Reservas</h2>
                    <Modal
                        modalTitle={"Detalle reserva"}
                        renderButton={() => (
                            <div ref={btnAddModal}>
                                <i class="fa-solid fa-plus" />
                            </div>
                        )}
                        renderContent={() => (
                            <form className='container' style={{ width: 400 }}>
                                <div className="row row-cols-2 mb-2">
                                    <div className="col mb-3">
                                        <label for="user" class="form-label">Mesa a reservar</label>
                                        <select
                                            type='text'
                                            name='mesa'
                                            className='form-control'
                                            value={reserva.mesa}
                                            onChange={handleChange}
                                        >
                                            <option value='' disabled selected>Número mesa</option>
                                            {mesas.data.map(mesa => (
                                                <option value={mesa.id}>{mesa.number_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col mb-3">
                                        <label for="user" class="form-label">Usuario reserva</label>
                                        <select
                                            type='text'
                                            name='user'
                                            className='form-control'
                                            value={reserva.user}
                                            onChange={handleChange}
                                        >
                                            <option value='' disabled selected>Usuario reserva</option>
                                            {users.data.map(user => (
                                                <option value={user.id}>{user.email}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row row-cols-2 mb-2">
                                    <div className="col mb-3">
                                        <label for="user" class="form-label">Fecha a reservar</label>
                                        <input
                                            type='date'
                                            name='date'
                                            className='form-control'
                                            value={reserva.date}
                                            onChange={handleChange}
                                        >

                                        </input>
                                    </div>
                                    <div className="col mb-3">
                                        <label for="user" class="form-label">Hora a reservar</label>
                                        <input
                                            type='time'
                                            name='time'
                                            className='form-control'
                                            value={reserva.time}
                                            onChange={handleChange}
                                        >

                                        </input>
                                    </div>


                                </div>

                                {/* <div className="col mb-3">
                            <label for="user" class="form-label">Fecha reserva</label>
                            <input
                                type='datetime-local'
                                name='status'
                                className='form-control mb-2'
                                placeholder='Fecha'
                                value={reserva.status}
                                onChange={handleChange}>
                            </input>
                        </div> */}
                                <div className="col mb-3">
                                    <label for="user" class="form-label">Estado Reserva</label>
                                    <select
                                        type='text'
                                        name='status'
                                        className='form-control mb-2'
                                        placeholder='Estado'
                                        value={reserva.status}
                                        onChange={handleChange}>
                                        <option value='' disabled selected>Estado</option>
                                        <option value={'Reservado'}>Reservado</option>
                                        <option value={'Cancelado'}>Cancelado</option>
                                    </select>
                                </div>



                                <div className='col-md-12 text-center my-3 ' >
                                    {
                                        !reserva.id
                                            ? <button
                                                type='button'
                                                className='col-md-6 btn btn-success '
                                                onClick={saveReserva}>
                                                Guardar
                                            </button>
                                            : <button
                                                type='button'
                                                className='col-md-6 btn btn-dark  '
                                                onClick={() => updateReserva(reserva.id)}>
                                                Actualizar
                                            </button>
                                    }
                                    <button
                                        type='button'
                                        className='col-md-6 btn btn-light '
                                        onClick={resetForm}>
                                        Limpiar
                                    </button>
                                </div>
                            </form>
                        )}
                    />
                </div>

                <div className='card-body text-center'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID Reserva</th>
                                <th scope='col'>Estado</th>
                                <th scope='col'>Mesa</th>
                                <th scope='col'>Usuario</th>
                                <th scope='col'>Fecha</th>
                                <th scope='col'>Hora</th>
                                <th scope='col'>Editar</th>
                                <th scope='col'>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {reservas.map(reserva => (
                                <tr>
                                    <th scope='row'>{reserva.id}</th>
                                    <td>{reserva.status.replace('T', ' - ')}</td>
                                    <td>{reserva.mesa}</td>
                                    <td>{getUserById(reserva.user).email}</td>
                                    <td>{reserva.date}</td>
                                    <td>{reserva.time}</td>
                                    <td>
                                        <button
                                            type='button'
                                            className='btn btn-warning btn-xs'
                                            onClick={() => setReservaDataIntoForm(reserva)}>
                                            <i className='fa-solid fa-pen-to-square'
                                                style={{ color: '#ffffff' }}>
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
    );
};