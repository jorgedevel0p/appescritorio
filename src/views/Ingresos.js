import React, { useEffect, useState } from 'react'
import { Layout_Finanzas } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"
import DataTable from 'react-data-table-component'
import 'style-components'

export const Ingresos = () => {
    const [boletas, setBoletas] = useState([])
    const {isLoading, makeHttpRequest} = useHttpRequest()

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

    useEffect(() => {
        getBoletas()
    }, [])

    const columns = [
        {
            name: 'ID',
            selector: row => row.id
        },
        {
            name: 'Valor',
            selector: row => row.value
        },
        {
            name: 'Propina',
            selector: row => row.tip
        },
        {
            name: 'Método de Pago',
            selector: row => row.payment_method
        },
        {
            name: 'Fecha',
            selector: row => row.date
        },
        {
            name: 'Hora',
            selector: row => row.time
        },
        {
            name: 'Estado',
            selector: row => row.state
        },
        {
            name: 'ID Usuario',
            selector: row => row.user_id
        },
    ]


    return(
        <Layout_Finanzas>
            <div>
                <img src={Fondo1080} className="card-img" height={140} />
            </div>
            <div className='text-center my-4'>
                <h1>Ingresos</h1>
                <h5>"Ventas"</h5>
            </div>
            <hr className='mt-4 m-4'></hr>
            <DataTable
                columns={columns}
                data={boletas}
                pagination
                searching 
                ordering
            />
            



            
        </Layout_Finanzas>
    )

}