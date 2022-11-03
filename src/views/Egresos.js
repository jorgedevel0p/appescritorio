import React, { useEffect, useState } from 'react'
import { Layout_Finanzas } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"
import DataTable from 'react-data-table-component'
import 'style-components'



export const Egresos = () => {

    const [pedidosProv, setPedidosProv] = useState([])
    const { isLoading, makeHttpRequest } = useHttpRequest()

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

    useEffect(() => {
        getPedidosProv()
    }, [])

    const columns = [
        {
            name: 'ID',
            selector: row => row.id
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
            name: 'Valor Total',
            selector: row => row.total_value
        },
        {
            name: 'Estado',
            selector: row => row.state
        },
        {
            name: 'ID Proveedor',
            selector: row => row.proveedor
        },
    ]





    return(
        <Layout_Finanzas>
            <div>
                <img src={Fondo1080} className="card-img" height={140} />
            </div>
            <div className='text-center my-4'>
                <h1>Egresos</h1>
                <h5>"Compras a Proveedores"</h5>
            </div>
            <hr className='mt-4 m-4'></hr>
            <DataTable
                columns={columns}
                data={pedidosProv}
                pagination
                searching 
                ordering
            />
            
        </Layout_Finanzas>
    )
    
}