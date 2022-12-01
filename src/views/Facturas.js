import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"
import restaurantContext from '../context/restaurantContext'
import { Modal } from '../components/ui/Modal'

const DEFAULT_STATE = {
  id: '',
  date: '',
  pedido_proveedor: '',
  proveedor: '',
}

export const Facturas = () => {
  const { proveedores, getProveedoresById } = useContext(restaurantContext)


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
    if (confirm("¿Desea guardar la información de esta factura?") === false) {
      return
    }
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
    openModalImperative()
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

  const btnAddModal = useRef()
  const openModalImperative = () => {
    console.log(btnAddModal.current)
    btnAddModal.current.click()
  }

  return (
    <Layout_Admin>
      <div>
        <img src={Fondo1080}
          className="card-img"
          height={140} />
      </div>
      <div className="card my-3 mx-4 justify-center">
        <div className="card-header d-flex justify-content-between">
          <h2>Listado de Factura</h2>
          <Modal
            modalTitle={'Detalle factura'}
            renderButton={() => (
              <div ref={btnAddModal}><i class="fa-solid fa-plus" /></div>
            )}
            renderContent={() => (
              <form className='container' style={{ width: 400 }}>
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
                  name='pedido_proveedor'
                  className='form-control mb-2'
                  placeholder='Pedido Proveedor ID'
                  value={factura.pedido_proveedor}
                  onChange={handleChange}>
                </input>

                <div className="col mb-3">
                  <label for="user" class="form-label">Proveedor</label>
                  <select
                    type='text'
                    name='proveedor'
                    className='form-control'
                    value={factura.proveedor}
                    onChange={handleChange}
                  >
                    <option value='' disabled selected>Proveedor</option>
                    {proveedores.data.map(prov => (
                      <option value={prov.id}>{prov.name}</option>
                    ))}
                  </select>
                </div>
                <div className='col-md-12 text-center my-3 ' >
                  {
                    !factura.id
                      ? <button
                        type='button'
                        className='col-md-6 btn btn-success'
                        onClick={saveFactura}>
                        Guardar
                      </button>
                      : <button
                        type='button'
                        className='col-md-6 btn btn-dark'
                        onClick={() => updateFactura(factura.id)}>
                        Actualizar
                      </button>
                  }
                  <button
                    type='button'
                    className='col-md-6 btn btn-light'
                    onClick={resetForm}>
                    Limpiar
                  </button>
                </div>
              </form>
            )}

            />
        </div>

        <div className='card-body'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Fecha</th>
                <th scope='col'>ID Pedido Proveedor</th>
                <th scope='col'>Proveedor</th>
                <th scope='col'>Editar</th>
                <th scope='col'>Eliminar</th>
              </tr>
            </thead><tbody className="table-group-divider">
              {facturas.map(factura => (
                <tr>
                  <th scope="row">{factura.id}</th>
                  <td>{factura.date}</td>
                  <td>{factura.pedido_proveedor}</td>
                  <td>{getProveedoresById(factura.proveedor).name}</td>
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