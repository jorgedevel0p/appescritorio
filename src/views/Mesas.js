import React, { useState, useContext, useRef } from 'react'
import { Layout_Admin } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import restaurantContext from '../context/restaurantContext'
import Fondo1080 from "../assets/img/720x120.jpg"
import { Modal } from '../components/ui/Modal'


const DEFAULT_STATE = {
  id: '',
  number_name: '',
  available: '',
  capacity: '',
  user: '',
}

export const Mesas = () => {
  const { mesas, users, getUserById, getMesas } = useContext(restaurantContext)
  const [mesa, setMesa] = useState(DEFAULT_STATE)
  const { isLoading, makeHttpRequest } = useHttpRequest()

  const handleChange = (e) => {
    setMesa({
      ...mesa,
      [e.target.name]: e.target.value
    })
  }

  const saveMesa = () => {
    if (confirm("¿Desea crear esta mesa?") === false) {
      return
    }
    let mesaToSave = { ...mesa }
    mesaToSave.available = (mesa.available > 0) // if 1 = true, if 0 = false

    makeHttpRequest({
      operation: '/mesa/',
      data: mesaToSave,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          console.log(data, 'ERROR. NO se ha guardado correctamente')
          return
        }
        console.log(data, 'Ha guardado la mesa correctamente')
        resetForm()
        getMesas()
      }
    })
  }
  const setMesaDataIntoForm = (mesa) => {
    openModalImperative()
    setMesa(mesa)
  }

  const updateMesa = (id) => {
    if (confirm("¿Desea actualizar la información de esta mesa?") === false) {
      return
    }
    makeHttpRequest({
      operation: `/mesa/${id}`,
      data: mesa,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          console.log(data, 'ERROR. NO se ha actualizado correctamente')
          return
        }
        console.log(data, 'Mesa se ha actualizado correctamente')
        getMesas()
        resetForm()
      }
    })
  }

  const deleteMesa = (id) => {
    if (confirm("¿Desea eliminar esta mesa?") === false) {
      return
    }

    makeHttpRequest({
      operation: `/mesa/${id}`,
      data: null,
      method: 'DELETE',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          console.log(data, 'ERROR. NO se ha eliminado correctamente')
          return
        }
        console.log(data, 'Mesa se ha eliminado correctamente')
        getMesas()
      }
    })
  }

  const handleCheck = () => {
    setMesa({
      ...mesa,
      available: !mesa.available
    })
  }

  const resetForm = () => setMesa({ ...DEFAULT_STATE })

  const btnAddModal = useRef()
  const openModalImperative = () => {
    console.log(btnAddModal.current)
    btnAddModal.current.click()
  }

  return (
    <>
      <Layout_Admin>
        <div>
          <img
            src={Fondo1080}
            className="card-img"
            height={140} />
        </div>
        <div className="card my-3 mx-4 justify-center">
          <div className="card-header d-flex justify-content-between">
            <h2> Lista de Mesas</h2>
            <Modal modalTitle={"Detalle mesa"}
              renderButton={() => (
                <div ref={btnAddModal}>
                  <i class="fa-solid fa-plus" />
                </div>
              )}
              renderContent={() => (
                <form className='container' style={{ width: 400 }}>
                  <div className="row row-cols-2 mb-2">
                    <div className="col">
                      <label for="number_name" class="form-label">Número de Mesa</label>
                      <input
                        type='text'
                        name='number_name'
                        className='form-control'
                        value={mesa.number_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label for="number_name" class="form-label">Capacidad</label>
                      <input
                        type='number'
                        name='capacity'
                        className='form-control'
                        value={mesa.capacity}
                        min="1"
                        onChange={handleChange} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="user" class="form-label">Usuario asignado</label>
                    <select
                      type='text'
                      name='user'
                      className='form-control'
                      value={mesa.user}
                      onChange={handleChange}
                    >
                      <option value='' disabled selected>Usuario reserva</option>
                      {users.data.map(user => (
                        <option value={user.id}>{user.email}</option>
                      ))}
                    </select>
                  </div>

                  <div class="form-check" onClick={handleCheck}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={mesa.available}
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Mesa disponible ?
                    </label>
                  </div>
                  <div className='col-md-12 text-center my-3 ' >
                    {
                      !mesa.id
                        ? <button
                          type='button'
                          className='col-md-6 btn btn-success '
                          onClick={saveMesa}>
                          Guardar
                        </button>
                        : <button
                          type='button'
                          className='col-md-6 btn btn-dark  '
                          onClick={() => updateMesa(mesa.id)}>
                          Actualizar
                        </button>
                    }
                    <button
                      type='button'
                      className='col-md-6 btn btn-light '
                      onClick={resetForm}>
                      Limpiar
                    </button>
                  </div>
                </form>
              )}
            />
          </div>

          <div className="card-body text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Capacidad</th>
                  <th scope="col">N° Mesa</th>
                  <th scope="col">Disponibilidad</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {mesas.data.map(mes => (
                  <tr>
                    <td> <i className="fa-solid fa-users"></i> {mes.capacity}</td>
                    <td>{mes.number_name}</td>
                    <td>
                      {
                        mes.available
                          ? <span className="badge bg-success">Disponible</span>
                          : <span className="badge bg-secondary">Ocupada</span>
                      }
                    </td>
                    <td>{getUserById(mes.user).email}</td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-warning btn-xs'
                        onClick={() => setMesaDataIntoForm(mes)}>
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
                        onClick={() => deleteMesa(mes.id)}>
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
    </>
  )

}