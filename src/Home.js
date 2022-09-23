import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export const Home = () => {

  return (
    <>
      <Navbar />
      <div>
        <div class="container-fluid align-center">
          <div class="row">
            <div class="col-4">
              <button class="btn btn-primary" type="button" > Mantenedor Usuario</button>
            </div>
            <div class="col-4">
              <button class="btn btn-primary" type="button">Mantenedor Mesas </button>
            </div>

            <div class="col-4">
              <button class="btn btn-primary" type="button" >Mantenedor Productos</button>
            </div>
          </div>
        </div>
        <main class="py-5 px-4">
          <div class="row">
            <div class="col-12">
              <div class="card" >
                <div class="card-header text-center"  >
                  <div>Hello from Home!</div>
                  <Link to='/users'>Ir a CRUD usuarios</Link>
                  <br></br>
                  <Link to='/'>Logout</Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
