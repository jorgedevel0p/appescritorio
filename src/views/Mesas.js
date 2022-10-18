import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

const DEFAULT_STATE = {
  id: '',
  number_name: '',
  available: '',
  capacity: '',
}

export const Mesas = () => {

  const [mesa, setMesa] = useState(DEFAULT_STATE)
  const [mesas, setMesas] = useState([])
  const { isLoading, makeHttpRequest } = useHttpRequest()

  const handleChange = (e) => {
    setMesa({
      ...mesa,
      [e.target.name]: e.target.value
    })
  }
  const handleCheck = (e) => {
    setMesa({
      ...mesa,
      available: e.target.checked
    })
  }

  const resetForm = () => setMesa({ ...DEFAULT_STATE })

  const getMesas = () => {
    makeHttpRequest({
      operation: '/mesa/',
      data: null,
      method: 'GET',
      callback: ({ ok, data }) => {
        console.log(data, 'mesas recibidos')
        setMesas(data)
      }
    })
  }

  const saveMesa = () => {
    console.log(' llega')
    let mesaToSave = { ...mesa }

    makeHttpRequest({
      operation: '/mesa/',
      data: mesa,
      method: 'POST',
      callback: (responseApi) => {
        console.log(responseApi, 'ha guardado la mesa correctamente')
        resetForm()
        getMesas()
      }
    })
  }
  const setMesaDataIntoForm = (mesa) => {
    setMesa(mesa)
  }

  const updateMesa = (id) => {
    makeHttpRequest({
      operation: `/mesa/${id}`,
      data: mesa,
      method: 'PUT',
      callback: (responseApi) => {
        console.log(responseApi, 'respuesta update mesa')
        getMesas()
        resetForm()
      }
    })
  }

  const deleteMesa = (id) => {
    if (confirm("Desea eliminar mesa?") === false) {
      return
    }

    makeHttpRequest({
      operation: `/mesa/${id}`,
      data: null,
      method: 'DELETE',
      callback: (responseApi) => {
        console.log(responseApi, 'ha eliminado la mesa correctamente')
        getMesas()
      }
    })
  }

  useEffect(() => {
    getMesas()
  }, [])


  return (
    <>
      <Layout_Admin>
        <div>
          <img src={Fondo1080} class="card-img" height={140} />
        </div>
        <div class="card my-3 mx-4 justify-center">
          <div class="card-header">
            <h2 className='text-center'>Detalle Mesas</h2>
          </div>
          <div class="card-body">
            <form>
              <input type='number' name='capacity' className='form-control mb-2' value={mesa.capacity} placeholder='Capacidad' onChange={handleChange} />
              <input type='text' name='number_name' className='form-control mb-2' value={mesa.number_name} placeholder='N° Mesa' onChange={handleChange} />
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked={mesa.available}
                  onChange={handleCheck}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Activa
                </label>
              </div>
              <div class="container my-3">
                {
                  !mesa.id
                    ? <button type='button' className='btn btn-success' onClick={saveMesa}>Guardar mesa</button>
                    : <button type='button' className='btn btn-dark' onClick={() => updateMesa(mesa.id)}>Actualizar mesa</button>

                }
                <button type='button' className='btn btn-light' onClick={resetForm}>Limpiar</button>
              </div>
            </form>
          </div>
        </div>
        <hr className='mt-4 m-4'></hr>
        <div class="card my-3 mx-4 justify-center">
          <div class="card-header text-center">
            <h2>
              Listado Mesas
            </h2>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Capacidad</th>
                  <th scope="col">N° Mesa</th>
                  <th scope="col">Disponibilidad</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                {mesas.map(mes => (
                  <tr>
                    <th scope="row">{mes.id}</th>
                    <td>{mes.capacity}</td>
                    <td>{mes.number_name}</td>
                    <td>{mes.available}</td>
                    <td>
                      <button type='button' className='btn btn-warning btn-xs' onClick={() => setMesaDataIntoForm(mes)}><i className="fa-solid fa-pen-to-square" style={{ color: '#ffffff' }}></i></button>
                    </td>
                    <td>
                      <button type='button' className='btn btn-danger btn-xs' onClick={() => deleteMesa(mes.id)}><i class="fa-solid fa-trash"></i></button>
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