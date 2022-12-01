import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Admin } from '../components/index'
import { Modal } from '../components/ui/Modal'
import Fondo1080 from '../assets/img/720x120.jpg'


const DEFAULT_STATE = {
  id: '',
  name: '',
  email: '',
  phone: '',
  state: ''
}

export const Proveedores = () => {
  const [proveedor, setProveedor] = useState(DEFAULT_STATE)
  const [proveedores, setProveedores] = useState([])
  const [form, setForm] = useState(DEFAULT_STATE)
  const { isLoading, makeHttpRequest } = useHttpRequest()

  const handleChange = (e) => {
    setProveedor({
      ...proveedor,
      [e.target.name]: e.target.value
    })
  }

  const getProveedores = () => {
    makeHttpRequest({
      operation: '/proveedor/',
      data: null,
      method: 'GET',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        setProveedores(data)
        console.log(data, 'Listado de Proveedores recibido')
      }
    })
  }

  const saveProveedor = () => {
    if (confirm("¿Desea guardar la información de este proveedor?") === false) {
      return
    }
    console.log(proveedor)
    makeHttpRequest({
      operation: '/proveedor/',
      data: proveedor,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Ha guardado Proveedor correctamente')
        getProveedores()
        resetForm()
      }
    })
  }

  const updateProveedor = (id) => {
    if (confirm("¿Desea actualizar la información de este proveedor?") === false) {
      return
    }
    makeHttpRequest({
      operation: `/proveedor/${id}`,
      data: proveedor,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Proveedor se ha actualizado correctamente')
        getProveedores()
        resetForm()
      }
    })
  }

  const setProveedorDataIntoForm = (proveedor) => {
    setProveedor(proveedor)
    openModalImperative()
  }

  const deleteProveedor = (id) => {
    if (confirm("¿Desea eliminar el proveedor?") === false) {
      return
    }
    makeHttpRequest({
      operation: `/proveedor/${id}`,
      data: null,
      method: 'DELETE',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(dato, 'Se ha eliminado el proveedor correctamente')
        getProveedores()
      }
    })
  }

  const resetForm = () => [
    setProveedor({ ...DEFAULT_STATE })
  ]

  const btnAddModal = useRef()
  const openModalImperative = () => {
    console.log(btnAddModal.current)
    btnAddModal.current.click()
  }

  useEffect(() => {
    getProveedores()
  }, [])

  return (
    <Layout_Admin>
      <div>
        <img
          src={Fondo1080}
          className="card-img"
          height={140}
        />
      </div>
      <div className='card my-3 mx-4 justify-center'>
        <div className='card-header d-flex justify-content-between'>
          <h2>Lista de Proveedores</h2>
          <Modal
            modalTitle={'Detalle Proveedor'}
            renderButton={() => (
              <div ref={btnAddModal}><i class="fa-solid fa-plus" /></div>
            )}
            renderContent={() => (
              <form className='container' style={{ width: 400 }}>
                <input
                  type='text'
                  name='id'
                  className='form-control mb-2'
                  placeholder='ID Proveedor'
                  readOnly={true}
                  value={proveedor.id}
                  onChange={handleChange}>
                </input>
                <input
                  type='text'
                  name='name'
                  className='form-control mb-2'
                  placeholder='Nombre Proveedor'
                  value={proveedor.name}
                  onChange={handleChange}>
                </input>
                <input
                  type='email'
                  name='email'
                  className='form-control mb-2'
                  placeholder='Email'
                  value={proveedor.email}
                  onChange={handleChange}>
                </input>
                <input
                  type='tel'
                  name='phone'
                  className='form-control mb-2'
                  placeholder='Número de Telefono'
                  value={proveedor.phone}
                  onChange={handleChange}>
                </input>
                <select
                  type='text'
                  name='state'
                  className='form-control mb-2'
                  value={proveedor.state}
                  onChange={handleChange}>
                  <option value='' disabled selected>Estado</option>
                  <option value={0}>Inactivo</option>
                  <option value={1}>Activo</option>
                </select>
                <div className='col-md-12 text-center my-3 ' >
                  {
                    !proveedor.id
                      ? <button
                        type='button'
                        className='col-md-6 btn btn-success '
                        onClick={saveProveedor}>
                        Guardar
                      </button>
                      : <button
                        type='button'
                        className='col-md-6 btn btn-dark  '
                        onClick={() => updateProveedor(proveedor.id)}>
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
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Email</th>
                <th scope='col'>Telefono</th>
                <th scope='col'>Estado</th>
                <th scope='col'>Editar</th>
                <th scope='col'>Eliminar</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {proveedores.map(proveedor => (
                <tr>
                  <th scope='row'>{proveedor.id}</th>
                  <td>{proveedor.name}</td>
                  <td>{proveedor.email}</td>
                  <td>{proveedor.phone}</td>
                  <td>{proveedor.state
                    ? <span className="badge bg-success">Activo</span>
                    : <span className="badge bg-secondary">Inactivo</span>
                  }</td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-warning btn-xs m-1'
                      onClick={() => setProveedorDataIntoForm(proveedor)}>
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
                      onClick={() => deleteProveedor(proveedor.id)}>
                      <i
                        className="fa-solid fa-trash"                                        >
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