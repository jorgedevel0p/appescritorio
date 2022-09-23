import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export const Home = () => {

  return (
    <>
      <Navbar />
      <h1 class="text-center mt-3">
        Modulo Administrador
      </h1>
      <div class="my-5 text-center">
        <div class="container-fluid justify-center">
          <div class="row">
            <div class="col-12">
              <Link to='/Users' class="btn btn-primary">Mantenedor Usuarios</Link>
            </div>
            <div class="col-12 my-4">
              <Link to='/Mesas' class="btn btn-primary">Mantenedor Mesas</Link>
            </div>

            <div class="col-12">
              <Link to='/Productos' class="btn btn-primary">Mantenedor Productos</Link>
            </div>

          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}
