import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"
import { Modal } from '../components/ui/Modal'

const DEFAULT_STATE = {
  id: '',
  date_mov: '',
  initial_balance: '',
  boleta: '',
  factura: '',
}

export const MovimientoCaja = () => {

  const [movimientoCaja, setMovimientoCaja] = useState(DEFAULT_STATE)
  const [movimientosCaja, setMovimientosCaja] = useState([])
  const { isLoading, makeHttpRequest } = useHttpRequest()

  const handleChange = (e) => {
    setMovimientoCaja({
      ...movimientoCaja,
      [e.target.name]: e.target.value
    })
  }

  const getMovimientosCaja = () => {
    makeHttpRequest({
      operation: '/movimiento_caja/',
      data: null,
      method: 'GET',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Listado de Movimientos Caja recibido')
        setMovimientosCaja(data)
      }
    })
  }

  const saveMovimientoCaja = () => {
    console.log(' llega')
    let movimientoCajaToSave = { ...movimientoCaja }

    makeHttpRequest({
      operation: '/movimiento_caja/',
      data: movimientoCaja,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Ha guardado la movimiento caja correctamente')
        resetForm()
        getMovimientosCaja()
      }
    })
  }
  const setMovimientoCajaDataIntoForm = (movimientoCaja) => {
    setMovimientoCaja(movimientoCaja)
    openModalImperative()
  }

  const updateMovimientoCaja = (id) => {
    if (confirm("¿Desea actualizar la información de esta movimiento caja?") === false) {
      return
    }
    makeHttpRequest({
      operation: `/movimiento_caja/${id}`,
      data: movimientoCaja,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'MovimientoCaja se ha actualizado correctamente')
        getMovimientosCaja()
        resetForm()
      }
    })
  }

  const deleteMovimientoCaja = (id) => {
    if (confirm("¿Desea eliminar esta movimiento caja?") === false) {
      return
    }

    makeHttpRequest({
      operation: `/movimiento_caja/${id}`,
      data: null,
      method: 'DELETE',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'MovimientoCaja se ha eliminado correctamente')
        getMovimientosCaja()
      }
    })
  }

  const handleCheck = (e) => {
    setMovimientoCaja({
      ...movimientoCaja,
      available: e.target.checked
    })
  }

  const resetForm = () => setMovimientoCaja({ ...DEFAULT_STATE })

  useEffect(() => {
    getMovimientosCaja()
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
          <h2>Detalle de Movimiento Caja</h2>

          <Modal
            modalTitle={'Agregar Caja'}
            renderButton={() => (
              <div ref={btnAddModal}><i class="fa-solid fa-plus" /></div>
            )}
            renderContent={() => (
              <form className='container' style={{ width: 400 }}>
                <input
                  type='number'
                  name='id'
                  className='form-control mb-2'
                  placeholder='ID Movimiento Caja'
                  readOnly={true}
                  value={movimientoCaja.id}
                  onChange={handleChange}>
                </input>
                <input
                  type='date'
                  name='date_mov'
                  className='form-control mb-2'
                  placeholder='Fecha'
                  value={movimientoCaja.date_mov}
                  onChange={handleChange}>
                </input>
                <input
                  type='number'
                  name='initial_balance'
                  className='form-control mb-2'
                  placeholder='Saldo Inicial'
                  value={movimientoCaja.initial_balance}
                  onChange={handleChange}>
                </input>
                <input
                  type='number'
                  name='boleta'
                  className='form-control mb-2'
                  placeholder='ID Boleta'
                  value={movimientoCaja.boleta}
                  onChange={handleChange}>
                </input>
                <input
                  type='number'
                  name='factura'
                  className='form-control mb-2'
                  placeholder='ID Factura'
                  value={movimientoCaja.factura}
                  onChange={handleChange}>
                </input>
                <div className='col-md-12 text-center my-3 ' >
                  {
                    !movimientoCaja.id
                      ? <button
                        type='button'
                        className='col-md-2 btn btn-success'
                        onClick={saveMovimientoCaja}>
                        Guardar
                      </button>
                      : <button
                        type='button'
                        className='col-md-2 btn btn-dark'
                        onClick={() => updateMovimientoCaja(movimientoCaja.id)}>
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
                <th scope='col'>Fecha</th>
                <th scope='col'>Saldo Inicial</th>
                <th scope='col'>ID Boleta</th>
                <th scope='col'>ID Factura</th>
                <th scope='col'>Editar</th>
                <th scope='col'>Eliminar</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {movimientosCaja.map(movimientoCaja => (
                <tr>
                  <th scope="row">{movimientoCaja.id}</th>
                  <td>{movimientoCaja.date_mov}</td>
                  <td>{movimientoCaja.initial_balance}</td>
                  <td>{movimientoCaja.boleta}</td>
                  <td>{movimientoCaja.factura}</td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-warning btn-xs'
                      onClick={() => setMovimientoCajaDataIntoForm(movimientoCaja)}>
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
                      onClick={() => deleteMovimientoCaja(movimientoCaja.id)}>
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