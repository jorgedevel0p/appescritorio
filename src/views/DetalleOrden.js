import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

const DEFAULT_STATE = {
    id: '',
    number_dish:'',
    orden:'',
    plato:'',
    producto:'',
}

export const DetalleOrden = () => {

    const [detalleOrden, setDetalleOrden] = useState(DEFAULT_STATE)
    const [detalleOrdenes, setDetalleOrdenes] = useState([])
    const { isLoading, makeHttpRequest } = useHttpRequest()
  
    const handleChange = (e) => {
      setDetalleOrden({
        ...detalleOrden,
        [e.target.name]: e.target.value
      })
    }
  
    const getDetalleOrdenes = () => {
      makeHttpRequest({
        operation: '/detalle_orden/',
        data: null,
        method: 'GET',
        callback: ({ ok, data }) => {
          if (!ok) {
            alert(JSON.stringify(data))
            return
          }
          console.log(data, 'Listado de Detalle Ordenes recibido')
          setDetalleOrdenes(data)
        }
      })
    }
  
    const saveDetalleOrden = () => {
      console.log(' llega')
      let detalleOrdenToSave = { ...detalleOrden }
  
      makeHttpRequest({
        operation: '/detalle_orden/',
        data: detalleOrden,
        method: 'POST',
        callback: ({ ok, data }) => {
          if (!ok) {
            alert(JSON.stringify(data))
            return
          }
          console.log(data, 'Ha guardado el detalle orden correctamente')
          resetForm()
          getDetalleOrdenes()
        }
      })
    }
    const setDetalleOrdenDataIntoForm = (detalleOrden) => {
      setDetalleOrden(detalleOrden)
    }
  
    const updateDetalleOrden = (id) => {
      if (confirm("¿Desea actualizar la información de este detalle orden?") === false) {
        return
      }
      makeHttpRequest({
        operation: `/detalle_orden/${id}`,
        data: detalleOrden,
        method: 'PUT',
        callback: ({ ok, data }) => {
          if (!ok) {
              alert(JSON.stringify(data))
            return
          }
          console.log(data, 'Detalle Orden se ha actualizado correctamente')
          getDetalleOrdenes()
          resetForm()
        }
      })
    }
  
    const deleteDetalleOrden = (id) => {
      if (confirm("¿Desea eliminar este detalle orden?") === false) {
        return
      }
  
      makeHttpRequest({
        operation: `/detalle_orden/${id}`,
        data: null,
        method: 'DELETE',
        callback: ({ ok, data }) => {
          if (!ok) {
              alert(JSON.stringify(data))
          return
          }
          console.log(data, 'Detalle Orden se ha eliminado correctamente')
          getDetalleOrdenes()
        }
      })
    }
  
    const handleCheck = (e) => {
      setDetalleOrden({
        ...detalleOrden,
        available: e.target.checked
      })
    }
    
    const resetForm = () => setDetalleOrden({ ...DEFAULT_STATE })
    
    useEffect(() => {
      getDetalleOrdenes()
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
                    <h2>Detalle Orden                        
                    </h2>
                </div>
                <div className='card-body'>
                    
                    <input 
                        type='number' 
                        name='id' 
                        className='form-control mb-2'
                        placeholder='ID Detalle Orden'
                        readOnly={true}
                        value={detalleOrden.id}
                        onChange={handleChange}> 
                    </input>
                    <input 
                        type='number' 
                        name='number_dish' 
                        className='form-control mb-2'
                        placeholder='Cantidad Platos'
                        value={detalleOrden.number_dish}
                        onChange={handleChange}> 
                    </input>
                    <input
                        type='number'
                        name='orden'
                        className='form-control mb-2'
                        placeholder='ID Orden'
                        value={detalleOrden.orden}
                        onChange={handleChange}>                             
                    </input>
                    <input
                        type='number'
                        name='plato'
                        className='form-control mb-2'
                        placeholder='ID Plato'
                        value={detalleOrden.plato}
                        onChange={handleChange}>                            
                    </input>
                    <input
                        type='number'
                        name='producto'
                        className='form-control mb-2'
                        placeholder='ID Producto'
                        value={detalleOrden.producto}
                        onChange={handleChange}>                            
                    </input>
                    <div className='col-md-12 text-center my-3 ' >
                        {
                        !detalleOrden.id
                            ? <button 
                                type='button' 
                                className='col-md-2 btn btn-success' 
                                onClick={saveDetalleOrden}>
                                Guardar
                            </button>
                            : <button 
                                type='button' 
                                className='col-md-2 btn btn-dark' 
                                onClick={() => updateDetalleOrden(detalleOrden.id)}>
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
                    <h2>Listado de Detalles Ordenes</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Cantidad de Platos</th>
                                <th scope='col'>ID Orden</th>
                                <th scope='col'>ID Plato</th>
                                <th scope='col'>ID Producto</th>
                                <th scope='col'>Editar</th>
                                <th scope='col'>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {detalleOrdenes.map(detalleOrden => (
                            <tr>
                                <th scope="row">{detalleOrden.id}</th>
                                <td>{detalleOrden.number_dish}</td>
                                <td>{detalleOrden.orden}</td>
                                <td>{detalleOrden.plato}</td>
                                <td>{detalleOrden.producto}</td>
                                <td>
                                <button 
                                    type='button' 
                                    className='btn btn-warning btn-xs' 
                                    onClick={() => setDetalleOrdenDataIntoForm(detalleOrden)}>
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
                                    onClick={() => deleteDetalleOrden(detalleOrden.id)}>
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