import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Navbar } from '../components/Navbar'
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
      <Navbar />
      <main class="py-5 px-4">
        <div class="container mt-5">
          <div class="col-md-4 offset-md-4">
            <div class="card">
              <div class="card-header text-center">
                <h4>Iniciar Sesión</h4>
              </div>
              <div class="card-body">
                <form>

                  <div class="form-group">
                    <label for="user">Usuario</label>
                    <input name="user" id="user" class="form-control" type="string" value={username} onChange={handleUsername} />
                  </div>

                  <div class="form-group">
                    <div class="row">
                      <div class="col-3">
                        <label for="password">Contraseña</label>
                      </div>
                    </div>
                    <input name="password" id="password" class="form-control" type="password" value={password} onChange={handlePassword} />
                  </div>

                  <div class="form-group mt-4 text-center">
                    {
                      isLoading
                        ?
                        (<div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>)
                        : (<button class="btn btn-primary btn-block" onClick={handleSubmit} /* disabled={!username || !password} */>Ingresar</button>)
                    }
                  </div>

                </form>

                {/* <p class="text-center">O</p> */}

                <div class="form-group mt-4 text-center">
                  <a href="#" class="btn btn-success btn-block">Registrarse</a>
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
