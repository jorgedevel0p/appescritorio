import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from '../components/Navbar_Admin'
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'

export const Login = () => {
  const navigate = useNavigate()
  const { isLoading, error, makeHttpRequest } = useHttpRequest()

  const ROUTES_DEPEND_ON_TYPE = {
    Cliente: '/clientes',
    Admin: '/home',
    Bodega: '/bodegas',
    Finanzas: '/finanzas',
    Cocina: '/cocinas',
  }


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (evento) => {
    const value = evento.target.value
    setUsername(value)
  }

  const handlePassword = (evento) => {
    const value = evento.target.value
    setPassword(value)
  }

  const handleSubmit = (evento) => {
    evento.preventDefault()

    const data = {
      username: username,
      password: password
    }

    makeHttpRequest({
      operation: '/token',
      data: data,
      method: 'POST',
      callback: (respuestaApi) => {
        const { ok, data } = respuestaApi
        if(!ok) {
          alert(JSON.stringify(data))
          return
        }
        localStorage.setItem('type_user', data.type)
        localStorage.setItem('token', data.access)
        console.log(data.type)

        const routeToNavigate = ROUTES_DEPEND_ON_TYPE[data.type]
        console.log(routeToNavigate)
        navigate(routeToNavigate)
      }
    })
  }

  return (
    <>
          
      <main className="py-5 px-4">
        <div className="container mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card">              
              <div className="card-header text-center">
                <h4>Iniciar Sesión</h4>
              </div>
              <div className="card-body">
                <form>

                  <div className="form-group">
                    <label for="user">Usuario</label>
                    <input name="user" id="user" className="form-control" type="string" value={username} onChange={handleUsername} />
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <div className="col-3">
                        <label for="password">Contraseña</label>
                      </div>
                    </div>
                    <input name="password" id="password" className="form-control" type="password" value={password} onChange={handlePassword} />
                  </div>

                  <div className="form-group mt-4 text-center">
                    {
                      isLoading
                        ?
                        (<div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>)
                        : (<button className="btn btn-primary btn-block" onClick={handleSubmit} /* disabled={!username || !password} */>Ingresar</button>)
                    }
                  </div>

                </form>

                {/* <p className="text-center">O</p> */}

                <div className="form-group mt-4 text-center">
                  <Link to='/Registro'>
                    <a href="#" className="btn btn-success btn-block ">Registrarse</a>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>



  )

}
