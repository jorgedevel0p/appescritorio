import React, { useState, useEffect, useContext } from 'react'
import { Footer, Layout_Bodega } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/Bodega_720x120.jpg"
import DataTable from 'react-data-table-component'
import 'style-components'
import restaurantContext from '../context/restaurantContext'

export const ControlStock = () => {

    const {productos, getProductos} = useContext(restaurantContext)    
    const { isLoading, makeHttpRequest } = useHttpRequest()

    


 
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
            name: 'Marca',
            selector: row => row.brand
        },
        {
            name: 'Alerta',
            selector: row => [
                (row.stock <= 30) ? 'Pedir' : ''
            ]
        },
    ]

  

    return (

            <Layout_Bodega>
                <div>
                    <img src={Fondo1080} className="card-img" height={140} />
                </div>
                <div className="card-header text-center my-4">
                    <h2>Control de Stock</h2>
                </div>
                <hr></hr>               
                <div className="card-body">
                    <DataTable
                        columns={columns}
                        data={productos.data}
                        pagination
                    />
                </div>
            </Layout_Bodega>
    )
}