import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Admin } from '../components/index'
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
    <Layout_Admin>
        <div>
          <img src={Fondo1080} className="card-img" height={140}/>
        </div>
        <div className="card my-3 mx-4 justify-center">
          <div className="card-header">
            <h2 className="text-center">Registro de Usuario</h2>
          </div>
          <div className="card-body">
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

              <button type='button' className='btn btn-light' onClick={resetForm}>Limpiar</button>

            </form>
          </div>
        </div>
        <hr className='mt-4 m-4'></hr>
        <div className="card my-3 mx-4 justify-center">
          <div className="card-header text-center">
            <h2> Lista de Usuarios</h2>

          </div>
          <div className="card-body">

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre de Usuario</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Email</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
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
                        <i className="fa-solid fa-trash"></i>
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
