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
    type: 'Cliente',
    password: '',
}

export const Registro = () => {
    const navigate = useNavigate()
    const { isLoading, error, makeHttpRequest } = useHttpRequest()
    const [usuarios, setUsuarios] = useState([])
    const [form, setForm] = useState(DEFAULT_STATE)

    const ROUTES_DEPEND_ON_TYPE = {
      Cliente: '/clientes',
      Admin: '/home',
      Bodega: '/bodegas',
      Finanzas: '/finanzas',
      Cocina: '/cocinas',
    }   

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (evento) => {
      evento.preventDefault()
      console.log(form)  
      
      makeHttpRequest({
        operation: '/user/',
        data: form,
        method: 'POST', 
        callback: ({ ok, data }) => {
          if (!ok) { 
            alert(JSON.stringify(data))      
            console.log(data, 'ERROR. NO se ha guardado correctamente')      
            return
          }
          console.log(data, 'Ha guardado Usuario correctamente')
          
          const routeToNavigate = ROUTES_DEPEND_ON_TYPE[form.type]
        console.log(routeToNavigate)
        navigate(routeToNavigate)
        
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
                      name='email'
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
                        onClick={handleSubmit}>
                          Guardar
                      </button>                  
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <Link to='/login'>
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
