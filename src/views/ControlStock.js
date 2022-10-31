import React, { useState, useEffect } from 'react'
import { Layout_Bodega } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/Bodega_720x120.jpg"
import DataTable from 'react-data-table-component'
import 'style-components'

export const ControlStock = () => {

    const [productos, setProductos] = useState([])
    const { isLoading, makeHttpRequest } = useHttpRequest()


    const getProductos = () => {
        makeHttpRequest({
            operation: '/producto/',
            data: null,
            method: 'GET',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                console.log(data, 'Listado de productos recibido')
                setProductos(data)
            }
        })
    }

    useEffect(() => {
        getProductos()
    }, [])

    const columns = [
        {
            name: 'ID',
            selector: row => row.id
        },
        {
            name: 'Nombre',
            selector: row => row.name
        },
        {
            name: 'Stock',
            selector: row => row.stock
        },
        {
            name: 'Fecha de Ingreso',
            selector: row => row.entry_date
        },
        {
            name: 'Fecha de Expiración',
            selector: row => row.expiration_date
        },
        {
            name: 'Valor',
            selector: row => row.value
        },
        {
            name: 'Marca',
            selector: row => row.brand
        },
    ]

    return (
        <Layout_Bodega>
            <div>
                <img src={Fondo1080} className="card-img" height={140} />
            </div>

            <div className="card-header text-center">
                <h2>Control de Stock</h2>
            </div>
            <div className="card-body">
                <DataTable
                    columns={columns}
                    data={productos}
                    pagination
                />
            </div>
        </Layout_Bodega >
    )
}