import React, { useContext, useEffect } from 'react'

import { Layout_Cocina } from '../components'
import restaurantContext from '../context/restaurantContext'

const SECONDS_TO_REFRESH = 30000 // 30 secs

export const TableroCocina = () => {
  const { ordenes, getOrdenesClientes } = useContext(restaurantContext)

  useEffect(() => {
    getOrdenesClientes()

    // descomentar esta linea para que la cocina refresque el tablero cada 30 segundos
    // setInterval(getOrdenesClientes, SECONDS_TO_REFRESH)
  }, [])

  return (
    <>
      <Layout_Cocina>
        <h2 className='text-center my-4'>Ordenes Pendientes</h2>
        <hr></hr>


        <div className='d-flex flex-row bd-highlight mb-3 gap-3' style={{ height: '88vh', width: '100%'}}>

          {/* Columna en pedido */}
          <div className='border p-5 pt-2' style={{ width: '33%', height: '100%' }}>

            <h4 className='text-center mb-5'>Recien pedido</h4>

            <div className="d-flex flex-column bd-highlight mb-3 gap-3">

              {ordenes && ordenes.data.map(orden => (
                <div className="card text-dark bg-light mb-3" style={{ width: '100%' }}>
                  <div className="card-header">Hora: {orden.start_time}</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">Mesa {orden.mesa}</h5>

                    <ul className="list-group list-group-flush">
                      {orden && orden.detalle_ordenes.map(detalle => (
                        <li className="list-group-item">{detalle?.productoInfo?.name}</li>
                      ))}

                    </ul>
                  </div>
                </div>
              ))}

            </div>


          </div>

          {/* Columna en preparacion */}
          <div className='border p-5 pt-2' style={{ width: '33%', height: '100%' }}>
            <h4 className='text-center mb-5'>En preparacion</h4>
          </div>

          {/* Columna despachada */}
          <div className='border p-5 pt-2' style={{ width: '33%', height: '100%' }}>
            <h4 className='text-center mb-5'>Despachado a mesa</h4>
          </div>
        </div>

      </Layout_Cocina>
    </>
  )

}