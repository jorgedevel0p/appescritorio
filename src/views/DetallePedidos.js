import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"
import { Modal } from '../components/ui/Modal'
import restaurantContext from '../context/restaurantContext'

const DEFAULT_STATE = {
  id: '',
  value: '',
  quantity: '',
  pedido_proveedor: '',
  producto: '',
}

export const DetallePedidos = () => {
  const { productos, getProductosById } = useContext(restaurantContext)
  const [detallePedido, setDetallePedido] = useState(DEFAULT_STATE)
  const [detallePedidos, setDetallePedidos] = useState([])
  const { isLoading, makeHttpRequest } = useHttpRequest()

  const handleChange = (e) => {
    setDetallePedido({
      ...detallePedido,
      [e.target.name]: e.target.value
    })
  }

  const getDetallePedidos = () => {
    makeHttpRequest({
      operation: '/detalle_pedido/',
      data: null,
      method: 'GET',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Listado de Detalle Pedidos recibido')
        setDetallePedidos(data)
      }
    })
  }

  const saveDetallePedido = () => {
    console.log(' llega')
    let detallePedidoToSave = { ...detallePedido }

    makeHttpRequest({
      operation: '/detalle_pedido/',
      data: detallePedido,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Ha guardado la detalle pedido correctamente')
        resetForm()
        getDetallePedidos()
      }
    })
  }
  const setDetallePedidoDataIntoForm = (detallePedido) => {
    setDetallePedido(detallePedido)
    openModalImperative()
  }

  const updateDetallePedido = (id) => {
    if (confirm("¿Desea actualizar la información de esta detalle pedido?") === false) {
      return
    }
    makeHttpRequest({
      operation: `/detalle_pedido/${id}`,
      data: detallePedido,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Detalle Pedido se ha actualizado correctamente')
        getDetallePedidos()
        resetForm()
      }
    })
  }

  const deleteDetallePedido = (id) => {
    if (confirm("¿Desea eliminar esta detalle pedido?") === false) {
      return
    }

    makeHttpRequest({
      operation: `/detalle_pedido/${id}`,
      data: null,
      method: 'DELETE',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Detalle Pedido se ha eliminado correctamente')
        getDetallePedidos()
      }
    })
  }

  const handleCheck = (e) => {
    setDetallePedido({
      ...detallePedido,
      available: e.target.checked
    })
  }

  const resetForm = () => setDetallePedido({ ...DEFAULT_STATE })

  useEffect(() => {
    getDetallePedidos()
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
          <h2>Detalle Pedido Proveedor</h2>
          <Modal
            modalTitle={'Agregar usuario'}
            renderButton={() => (
              <div ref={btnAddModal}><i class="fa-solid fa-plus" /></div>
            )}
            renderContent={() => (
              <form className='container' style={{ width: 400 }}>
                <input
                  type='number'
                  name='id'
                  className='form-control mb-2'
                  placeholder='ID Detalle Pedido'
                  readOnly={true}
                  value={detallePedido.id}
                  onChange={handleChange}>
                </input>
                <input
                  type='number'
                  name='value'
                  className='form-control mb-2'
                  placeholder='Valor Pedido'
                  value={detallePedido.value}
                  onChange={handleChange}>
                </input>
                <input
                  type='number'
                  name='quantity'
                  className='form-control mb-2'
                  placeholder='Cantidad'
                  value={detallePedido.quantity}
                  onChange={handleChange}>
                </input>
                <input
                  type='number'
                  name='pedido_proveedor'
                  className='form-control mb-2'
                  placeholder='ID Pedido Proveedor'
                  value={detallePedido.pedido_proveedor}
                  onChange={handleChange}>
                </input>
                <div className="col mb-3">
                  <label for="user" class="form-label">Producto</label>
                  <select
                    type='text'
                    name='producto'
                    className='form-control'
                    value={detallePedido.producto}
                    onChange={handleChange}
                  >
                    <option value='' disabled selected>Producto</option>
                    {productos.data.map(prod => (
                      <option value={prod.id}>{prod.name}</option>
                    ))}
                  </select>
                </div>
                <div className='col-md-12 text-center my-3 ' >
                  {
                    !detallePedidos.id
                      ? <button
                        type='button'
                        className='col-md-2 btn btn-success'
                        onClick={saveDetallePedido}>
                        Guardar
                      </button>
                      : <button
                        type='button'
                        className='col-md-2 btn btn-dark'
                        onClick={() => updateDetallePedido(detallePedido.id)}>
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
              </form>
            )}
          />
        </div>
        <div className='card-body'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Valor</th>
                <th scope='col'>Cantidad</th>
                <th scope='col'>ID Pedido Proveedor</th>
                <th scope='col'>Producto</th>
                <th scope='col'>Editar</th>
                <th scope='col'>Eliminar</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {detallePedidos.map(detallePedido => (
                <tr>
                  <th scope="row">{detallePedido.id}</th>
                  <td>{detallePedido.value}</td>
                  <td>{detallePedido.quantity}</td>
                  <td>{detallePedido.pedido_proveedor}</td>
                  <td>{getProductosById(detallePedido.producto).name}</td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-warning btn-xs'
                      onClick={() => setDetallePedidoDataIntoForm(detallePedido)}>
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
                      onClick={() => deleteDetallePedido(detallePedido.id)}>
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