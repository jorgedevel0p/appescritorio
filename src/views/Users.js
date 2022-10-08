import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout } from '../components/index'

const DEFAULT_STATE = {
  id: '',
  username: '',
  name: '',
  last_name: '',
  email: '',
  type: 'Admin',
  password: '',
}

export const Users = () => {
  const { isLoading, error, makeHttpRequest } = useHttpRequest()
  const [usuarios, setUsuarios] = useState([])
  const [form, setForm] = useState(DEFAULT_STATE)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const getUsers = () => {
    makeHttpRequest({
      operation: '/user/',
      data: null,
      method: 'GET',
      callback: (responseApi) => {
        const { data } = responseApi
        setUsuarios(data)
      }
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
        getUsers()
        resetForm()
      }
    })
  }

  const updateUser = (id) => {
    makeHttpRequest({
      operation: `/user/${id}`,
      data: form,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        getUsers()
        resetForm()
      }
    })
  }

  const setUserDataIntoForm = (usuario) => {
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
    makeHttpRequest({
      operation: `/user/${id}`,
      data: null,
      method: 'DELETE',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        getUsers()
      }
    })
  }

  const resetForm = () => [
    setForm({ ...DEFAULT_STATE })
  ]

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Layout>
      <h1 class="text-center">Mantenedor Usuarios</h1>
      <div class="card my-5 mx-5 justify-center">
        <div class="card-header">
          <h2 class="text-center">Usuario</h2>
        </div>
        <div class="card-body">
          <form className='container'>
            <input
              type='text'
              className='form-control mb-2'
              value={form.username}
              name='username'
              placeholder='username'
              onChange={handleChange}
            />
            <input type='text' className='form-control mb-2' value={form.name} name='name' placeholder='name' onChange={handleChange} />
            <input type='text' className='form-control mb-2' value={form.last_name} name='last_name' placeholder='last_name' onChange={handleChange} />
            <input type='text' className='form-control mb-2' value={form.email} name='email' placeholder='email' onChange={handleChange} />
            <select name="type" className='form-select mb-2' id="cars" value={form.type} placeholder='type' onChange={handleChange}>
              <option value="Admin">Admin</option>
              <option value="Finanzas">Finanzas</option>
              <option value="Cocina">Cocina</option>
              <option value="Bodega">Bodega</option>
              <option value="Cliente">Cliente</option>
            </select>

            <input type='text' className='form-control mb-2' value={form.password} name='password' placeholder='new password' onChange={handleChange} />

            {
              !form.id
                ? <button type='button' className='btn btn-success' onClick={saveUser}>Guardar usuario</button>
                : <button type='button' className='btn btn-dark' onClick={() => updateUser(form.id)}>Actualizar usuario</button>

            }

            <button type='button' className='btn btn-light' onClick={resetForm}>Limpiar form</button>

          </form>
        </div>
      </div>
      <hr className='mt-5'></hr>
      <div class="card mx-5 justify-center">
        <div class="card-header text-center">
          <h2>Usuarios</h2>

        </div>
        <div class="card-body">

          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">username</th>
                <th scope="col">Nombre</th>
                <th scope="col">email</th>
                <th scope="col">tipo</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {usuarios.map(usuario => (
                <tr>
                  <td>{usuario.id}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.name}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.type}</td>


                  <td>
                    <button
                      type='button'
                      className='btn btn-warning btn-xs m-1'
                      onClick={() => setUserDataIntoForm(usuario)}
                    >
                      <i className="fa-solid fa-pen-to-square" style={{ color: '#ffffff' }}></i>
                    </button>
                    <button
                      type='button'
                      className='btn btn-danger btn-xs'
                      onClick={() => deleteUser(usuario.id)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>


        </div>

      </div>
    </Layout>
  )
}
