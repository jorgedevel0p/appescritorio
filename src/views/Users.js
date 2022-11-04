import React, { useState, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Admin } from '../components/index'
import restaurantContext from '../context/restaurantContext'
import { Modal } from '../components/ui/Modal'
import Fondo1080 from '../assets/img/720x120.jpg'

const DEFAULT_STATE = {
  id: '',
  username: '',
  name: '',
  last_name: '',
  email: '',
  type: '',
  password: '',
}

export const Users = () => {
  const { users, getUsers } = useContext(restaurantContext)
  const { isLoading, error, makeHttpRequest } = useHttpRequest()
  const [form, setForm] = useState(DEFAULT_STATE)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const saveUser = () => {
    console.log(form)
    makeHttpRequest({
      operation: '/user/',
      data: form,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Ha guardado Usuario correctamente')
        getUsers()
        resetForm()
      }
    })
  }

  const updateUser = (id) => {
    if (confirm("¿Desea actualizar la información de este usuario?") === false) {
      return
    }
    makeHttpRequest({
      operation: `/user/${id}`,
      data: form,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Usuario se ha actualizado correctamente')
        getUsers()
        resetForm()
      }
    })
  }

  const setUserDataIntoForm = (usuario) => {
    console.log(usuario, 'usuario')
    openModalImperative()
    const { id, username, name, last_name, email, type, /* password */ } = usuario
    setForm({
      id,
      username,
      name,
      last_name,
      email,
      type,
    })
  }

  const deleteUser = (id) => {
    if (confirm("¿Desea eliminar este usuario?") === false) {
      return
    }
    makeHttpRequest({
      operation: `/user/${id}`,
      data: null,
      method: 'DELETE',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Usuario se ha eliminado correctamente')
        getUsers()
      }
    })
  }

  const resetForm = () => [
    setForm({ ...DEFAULT_STATE })
  ]

  const btnAddModal = useRef()
  const openModalImperative = () => {
    console.log(btnAddModal.current)
    btnAddModal.current.click()
  }

  return (
    <Layout_Admin>
      <div>
        <img
          src={Fondo1080}
          className="card-img"
          height={140}
        />
      </div>

      <div className="card my-3 mx-4 justify-center">
        <div className="card-header d-flex justify-content-between">
          <h2> Lista de Usuarios</h2>
          <Modal
            modalTitle={'Agregar usuario'}
            renderButton={() => (
              <div ref={btnAddModal}><i class="fa-solid fa-plus" /></div>
            )}
            renderContent={() => (
              <form className='container' style={{ width: 400 }}>
                <input
                  type='text'
                  className='form-control mb-2'
                  value={form.username}
                  name='username'
                  placeholder='Username'
                  onChange={handleChange}
                />
                <input
                  type='text'
                  className='form-control mb-2'
                  value={form.name}
                  name='name'
                  placeholder='Nombre'
                  onChange={handleChange}
                />
                <input
                  type='text'
                  className='form-control mb-2'
                  value={form.last_name}
                  name='last_name'
                  placeholder='Apellido'
                  onChange={handleChange}
                />
                <input
                  type='email'
                  className='form-control mb-2'
                  value={form.email}
                  name='email'
                  placeholder='e-mail'
                  onChange={handleChange}
                />
                <select
                  name="type"
                  className='form-select mb-2'
                  id="cars"
                  value={form.type}
                  onChange={handleChange}>
                  <option value='' disabled selected>Tipo de Usuario</option>
                  <option value="Admin">Admin</option>
                  <option value="Finanzas">Finanzas</option>
                  <option value="Cocina">Cocina</option>
                  <option value="Bodega">Bodega</option>
                  <option value="Cliente">Cliente</option>
                </select>
                <input
                  type='password'
                  className='form-control mb-2'
                  value={form.password}
                  name='password'
                  placeholder='Nueva password'
                  onChange={handleChange}
                />
                <div className='col-md-12 text-center my-3 ' >
                  {
                    !form.id
                      ? <button
                        type='button'
                        className='btn btn-success mx-3'
                        onClick={saveUser}>
                        Guardar
                      </button>
                      : <button
                        type='button'
                        className='btn btn-dark mx-3 '
                        onClick={() => updateUser(form.id)}>
                        Actualizar
                      </button>
                  }
                  <button
                    type='button'
                    className='btn btn-light mx-3'
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
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Tipo</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {users.data.map(usuario => (
                <tr>
                  <td>{usuario.id}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.name}</td>
                  <td>{usuario.last_name}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.type}</td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-warning btn-xs m-1'
                      onClick={() => setUserDataIntoForm(usuario)}>
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
                      onClick={() => deleteUser(usuario.id)}>
                      <i
                        className="fa-solid fa-trash"
                      >
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
