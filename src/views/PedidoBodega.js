import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer, Layout_Bodega } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/Bodega_720x120.jpg"

const DEFAULT_STATE = {
    id: '',
    date: '',
    time: '',
    total_value: '',
    proveedor_id: '',
}

export const PedidoBodega = () => {

    const [pedidoProv, setPedidoProv] = useState(DEFAULT_STATE)
    const [pedidosProv, setPedidosProv] = useState([])
    const { isLoading, makeHttpRequest } = useHttpRequest()

    const handleChange = (e) => {
        setPedidoProv({
            ...pedidoProv,
            [e.target.name]: e.target.value
        })
    }

    const getPedidosProv = () => {
        makeHttpRequest({
            operation: '/pedido_proveedor/',
            data: null,
            method: 'GET',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                console.log(data, 'Listado de Pedido proveedores recibido')
                setPedidosProv(data)
            }
        })
    }

    const savePedidoProv = () => {
        console.log(' llega')
        let pedidoProvToSave = { ...pedidoProv }

        makeHttpRequest({
            operation: '/pedido_proveedor/',
            data: pedidoProv,
            method: 'POST',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                console.log(data, 'Ha guardado el pedido proveedor correctamente')
                resetForm()
                getPedidosProv()
            }
        })
    }
    const setPedidoProvDataIntoForm = (pedidoProv) => {
        setPedidoProv(pedidoProv)
    }

    const updatePedidoProv = (id) => {
        if (confirm("¿Desea actualizar la información de este pedido proveedor?") === false) {
            return
        }
        makeHttpRequest({
            operation: `/pedido_proveedor/${id}`,
            data: pedidoProv,
            method: 'PUT',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                console.log(data, 'Pedido proveedor se ha actualizado correctamente')
                getPedidosProv()
                resetForm()
            }
        })
    }

    const deletePedidoProv = (id) => {
        if (confirm("¿Desea eliminar este pedido proveedor?") === false) {
            return
        }

        makeHttpRequest({
            operation: `/pedido_proveedor/${id}`,
            data: null,
            method: 'DELETE',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                console.log(data, 'Pedido proveedor se ha eliminado correctamente')
                getPedidosProv()
            }
        })
    }

    const handleCheck = (e) => {
        setPedidoProv({
            ...pedidoProv,
            available: e.target.checked
        })
    }

    const resetForm = () => setPedidoProv({ ...DEFAULT_STATE })

    useEffect(() => {
        getPedidosProv()
    }, [])




    return (
        <Layout_Bodega>
            <div>
                <img src={Fondo1080}
                    className="card-img"
                    height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Pedido a Proveedor
                    </h2>
                </div>
                <div className='card-body'>
                    <input
                        type='text'
                        name='id'
                        className='form-control mb-2'
                        placeholder='ID Pedido Proveedor'
                        readOnly={true}
                        value={pedidoProv.id}
                        onChange={handleChange}>
                    </input>
                    <input
                        type='date'
                        name='date'
                        className='form-control mb-2'
                        placeholder='Fecha'
                        value={pedidoProv.date}
                        onChange={handleChange}>
                    </input>
                    <input
                        type='time'
                        name='time'
                        className='form-control mb-2'
                        placeholder='Hora'
                        value={pedidoProv.time}
                        onChange={handleChange}>
                    </input>
                    <input
                        type='text'
                        name='total value'
                        className='form-control mb-2'
                        placeholder='Valor Total'
                        value={pedidoProv.total_value}
                        onChange={handleChange}>
                    </input>
                    <select
                        type='text'
                        name='state'
                        className='form-control mb-2'
                        value={pedidoProv.state}
                        onChange={handleChange}>
                        <option disabled selected>Estado</option>
                        <option value="Efectivo">Pagado</option>
                        <option value="Credito">Pendiente</option>
                        <option value="Debito">Cancelado</option>
                    </select>
                    <input
                        type='text'
                        name='proveedor'
                        className='form-control mb-2'
                        placeholder='ID Proveedor'
                        value={pedidoProv.proveedor_id}
                        onChange={handleChange}>
                    </input>
                    <div className='col-md-12 text-center my-3 ' >
                        {
                            !pedidoProv.id
                                ? <button
                                    type='button'
                                    className='col-md-2 btn btn-success'
                                    onClick={savePedidoProv}>
                                    Guardar
                                </button>
                                : <button
                                    type='button'
                                    className='col-md-2 btn btn-dark'
                                    onClick={() => updatePedidoProv(pedidoProv.id)}>
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
        </Layout_Bodega>
    )
}