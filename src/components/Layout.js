import React from 'react'
import { Navbar_Admin } from './Navbar_Admin'
import { Navbar_Bodega } from './Navbar_Bodega'
import { Navbar_Cliente } from './Navbar_Cliente'
import { Navbar_Cocina } from './Navbar_Cocina'
import { Navbar_Finanzas } from './Navbar_Finanzas'

export const Layout_Admin = (props) => {
  return (
    <main className="d-flex flex-nowrap">
      <h1 className="visually-hidden">Sidebars examples</h1>
      <Navbar_Admin />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}

export const Layout_Bodega = (props) => {
  return (
    <main className="d-flex flex-nowrap">
      <h1 className="visually-hidden">Sidebars examples</h1>
      <Navbar_Bodega />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}

export const Layout_Cocina = (props) => {
  return (
    <main className="d-flex flex-nowrap">
      <h1 className="visually-hidden">Sidebars examples</h1>
      <Navbar_Cocina />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}

export const Layout_Finanzas = (props) => {
  return (
    <main className="d-flex flex-nowrap">
      <h1 className="visually-hidden">Sidebars examples</h1>
      <Navbar_Finanzas />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}

export const Layout_Cliente = (props) => {
  return (
    <main className="d-flex flex-nowrap">
      <h1 className="visually-hidden">Sidebars examples</h1>
      <Navbar_Cliente />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}

export const Layout_Inicio = (props) => {
  return (
    <main class="">
      <Navbar_Inicio />
      </main>
      )
     }