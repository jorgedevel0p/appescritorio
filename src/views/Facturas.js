import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

const DEFAULT_STATE = {
    id:'',
    date:'',
    pedido_proveedor_id:'',
    proveedor_id:'',
}

export const Facturas = () => {

    

  const [factura, setFactura] = useState(DEFAULT_STATE)
  const [facturas, setFacturas] = useState([])
  const { isLoading, makeHttpRequest } = useHttpRequest()

  const handleChange = (e) => {
    setFactura({
      ...factura,
      [e.target.name]: e.target.value
    })
  }

  const getFacturas = () => {
    makeHttpRequest({
      operation: '/factura/',
      data: null,
      method: 'GET',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Listado de Facturas recibido')
        setFacturas(data)
      }
    })
  }

  const saveFactura = () => {
    console.log(' llega')
    let facturaToSave = { ...factura }

    makeHttpRequest({
      operation: '/factura/',
      data: factura,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Ha guardado la factura correctamente')
        resetForm()
        getFacturas()
      }
    })
  }
  const setFacturaDataIntoForm = (factura) => {
    setFactura(factura)
  }

  const updateFactura = (id) => {
    if (confirm("¿Desea actualizar la información de esta factura?") === false) {
      return
    }
    makeHttpRequest({
      operation: `/factura/${id}`,
      data: factura,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
            alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Factura se ha actualizado correctamente')
        getFacturas()
        resetForm()
      }
    })
  }

  const deleteFactura = (id) => {
    if (confirm("¿Desea eliminar esta factura?") === false) {
      return
    }

    makeHttpRequest({
      operation: `/factura/${id}`,
      data: null,
      method: 'DELETE',
      callback: ({ ok, data }) => {
        if (!ok) {
            alert(JSON.stringify(data))
        return
        }
        console.log(data, 'Factura se ha eliminado correctamente')
        getFacturas()
      }
    })
  }

  const handleCheck = (e) => {
    setFactura({
      ...factura,
      available: e.target.checked
    })
  }
  
  const resetForm = () => setFactura({ ...DEFAULT_STATE })
  
  useEffect(() => {
    getFacturas()
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
                    <h2>Detalle de Factura                        
                    </h2>
                </div>
                <div className='card-body'>                    
                    <input 
                        type='text' 
                        name='id' 
                        className='form-control mb-2'
                        placeholder='ID Factura'
                        readOnly={true}
                        value={factura.id}
                        onChange={handleChange}>
                    </input>
                    <input
                        type='date'
                        name='date'
                        className='form-control mb-2'
                        placeholder='Fecha'
                        value={factura.date}
                        onChange={handleChange}>                            
                    </input>
                    <input 
                        type='number' 
                        name='pedido_prov id' 
                        className='form-control mb-2'
                        placeholder='Pedido Proveedor ID'
                        value={factura.pedido_proveedor_id}
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='number' 
                        name='proveedor id' 
                        className='form-control mb-2'
                        placeholder='Proveedor ID'
                        value={factura.proveedor_id}
                        onChange={handleChange}>
                    </input>
                    <div className='col-md-12 text-center my-3 ' >
                        {
                        !factura.id
                            ? <button 
                                type='button' 
                                className='col-md-2 btn btn-success' 
                                onClick={saveFactura}>
                                Guardar
                            </button>
                            : <button 
                                type='button' 
                                className='col-md-2 btn btn-dark' 
                                onClick={() => updateFactura(factura.id)}>
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
                    <h2>Listado de Facturas</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Fecha</th>
                                <th scope='col'>ID Pedido Proveedor</th>
                                <th scope='col'>ID Proveedor</th>
                                <th scope='col'>Editar</th>
                                <th scope='col'>Eliminar</th>
                            </tr>
                        </thead><tbody className="table-group-divider">
                            {facturas.map(factura => (
                                <tr>
                                    <th scope="row">{factura.id}</th>
                                    <td>{factura.date}</td>
                                    <td>{factura.pedido_proveedor_id}</td>
                                    <td>{factura.proveedor_id}</td>
                                    <td>
                                        <button 
                                            type='button' 
                                            className='btn btn-warning btn-xs' 
                                            onClick={() => setFacturaDataIntoForm(factura)}>
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
                                            onClick={() => deleteFactura(factura.id)}>
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