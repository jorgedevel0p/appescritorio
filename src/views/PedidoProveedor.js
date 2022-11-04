import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Admin } from '../components/index'
import restaurantContext from '../context/restaurantContext'
import { Modal } from '../components/ui/Modal'
import Fondo1080 from '../assets/img/720x120.jpg'

const DEFAULT_STATE = {
  id: '',
  date: '',
  time: '',
  total_value: '',
  state: '',
  proveedor: '',
}

export const PedidoProveedor = () => {
  const { proveedores, getProveedoresById } = useContext(restaurantContext)
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
    openModalImperative()
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



  const btnAddModal = useRef()
  const openModalImperative = () => {
    console.log(btnAddModal.current)
    btnAddModal.current.click()
  }

  useEffect(() => {
    getPedidosProv()
  }, [])

  return (
    <Layout_Admin>
      <div>
        <img src={Fondo1080}
          className="card-img"
          height={140} />
      </div>
      <div className="card my-3 mx-4 justify-center">
        <div className="card-header d-flex justify-content-between">
          <h2>Pedidos a Proveedores</h2>
          <Modal
            modalTitle={'Agregar Detalle Pedido Proveedor'}
            renderButton={() => (
              <div ref={btnAddModal}><i class="fa-solid fa-plus" /></div>
            )}
            renderContent={() => (
              <form className='container' style={{ width: 400 }}>
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
                  name='total_value'
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
                  <option value="Pagado">Pagado</option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Cancelado">Cancelado</option>
                </select>
                <div className="col mb-3">
                  <label for="user" class="form-label">Proveedor</label>
                  <select
                    type='text'
                    name='proveedor'
                    className='form-control'
                    value={pedidoProv.proveedor}
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
              </form>
            )}
          />
        </div>
        <div className="card-body">
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Fecha</th>
              <th scope='col'>Hora</th>
              <th scope='col'>Valor Total</th>
              <th scope='col'>Estado</th>
              <th scope='col'>Proveedor</th>
              <th scope='col'>Editar</th>
              <th scope='col'>Eliminar</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {pedidosProv.map(pedidoProv => (
              <tr>
                <th scope="row">{pedidoProv.id}</th>
                <td>{pedidoProv.date}</td>
                <td>{pedidoProv.time}</td>
                <td>{pedidoProv.total_value}</td>
                <td>{pedidoProv.state}</td>
                <td>{getProveedoresById(pedidoProv.proveedor).name}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-warning btn-xs'
                    onClick={() => setPedidoProvDataIntoForm(pedidoProv)}>
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
                    onClick={() => deletePedidoProv(pedidoProv.id)}>
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

    </Layout_Admin >
  )
}