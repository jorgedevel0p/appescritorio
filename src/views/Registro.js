import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from '../components/Navbar_Admin'
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'

const DEFAULT_STATE = {
    id: '',
    username: '',
    name: '',
    last_name: '',
    email: '',
    type: '',
    password: '',
}

export const Registro = () => {
    const { isLoading, error, makeHttpRequest } = useHttpRequest()
    const [usuarios, setUsuarios] = useState([])
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


  return ( 
    <>
      <div className='container col-4'>
        <div className='card'>
          <div className="card-header text-center">
            <h4>Registrate</h4>
          </div>
          <div className="card-body">
            <form>
              <div className='form-group'>
                <div className='row'>
                  <div className='col-12'>
                    <label>Username</label> 
                    <input
                      type='text'
                      className='form-control mb-2'
                      value={form.username}
                      name='username'
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <label>Nombre</label>
                    <input 
                      type='text' 
                      className='form-control mb-2' 
                      value={form.name} 
                      name='name' 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <label>Apellido</label>
                    <input 
                      type='text' 
                      className='form-control mb-2' 
                      value={form.last_name} 
                      name='last_name' 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <label>Email</label>
                    <input 
                      type='email' 
                      className='form-control mb-2' 
                      value={form.email} 
                      name='Email'
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <label>Contraseña</label>
                    <input 
                      type='password' 
                      className='form-control mb-2' 
                      value={form.password} 
                      name='password' 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                <div className='form-group text-center my-2'>
                  <div className='row '>
                    <div className='col-12'>
                      <button 
                        type='button' 
                        className='btn col-6 btn-primary btn-block' 
                        onClick={saveUser}>
                          Guardar
                      </button>                  
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <Link to='/'>
                        <a href="#" 
                          className="btn col-6 btn-success btn-block mt-2">
                            ¿Tienes cuenta? Inicia Sesión!</a>
                      </Link>                  
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>   
      <Footer />
    </>
  )
}
