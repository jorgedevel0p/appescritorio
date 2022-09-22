import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { Navbar } from '../components/Navbar'

export const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

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

    setIsLoading(true)

    
    /* if(!username || !password){
      return
    } */

    const options = {
      method: 'POST'
    }

    fetch('http://localhost:8000/api/token', options)
      .then(res => res.json())
      .then(respuesta => {
        // Pasó todo OK

        console.log('Aquí está la respuesta')
        console.log(respuesta)

        
        navigate("/home")

      })
      .catch(error =>{
        console.log('ha ocurrido un error, revisa que pasa en la consola')
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
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
                    <label for="email">Email</label>
                    <input name="email" id="email" class="form-control" type="email" value={username} onChange={handleUsername} />
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

                    {/* {isLoading && (
                      (<div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>)
                    )} */}

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

      {/* <footer class="bd-footer py-4 py-md-5 mt-5 bg-light">
        <div class="container-fluid text-center text-md-left bg-image-footer">
          <div class="row justify-content-center">

            <div class="col-lg-5 col-md-12 col-sm-12">
              <div class="card mt-3 mb-3">
                <div class="card-body text-center ">
                  <img src="" width="60%" height="60%" alt="" />
                </div>
                <div class="card-footer text-center ">
                  <div class="btn-group">
                    <a href=" ">
                      <button type="button" class="btn btn-dark text-white ">Pagina Principal</button>
                    </a>
                    <a href=" ">
                      <button type="button" class="btn btn-dark text-white mx-4">Contacto</button>
                    </a>
                    <a href="">
                      <button type="button" class="btn btn-dark text-white ">Sobre nosotros</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer> */}

    </>



  )

}
