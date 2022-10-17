import React from 'react'
import { Navbar_Admin } from './Navbar_Admin'
import { Navbar_Bodega } from './Navbar_Bodega'
import { Navbar_Cocina } from './Navbar_Cocina'
import { Navbar_Finanzas } from './Navbar_Finanzas'

export const Layout_Admin = (props) => {
  return (
    <main class="d-flex flex-nowrap">
      <h1 class="visually-hidden">Sidebars examples</h1>
      <Navbar_Admin />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}

export const Layout_Bodega = (props) => {
  return (
    <main class="d-flex flex-nowrap">
      <h1 class="visually-hidden">Sidebars examples</h1>
      <Navbar_Bodega />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}

export const Layout_Cocina = (props) => {
  return (
    <main class="d-flex flex-nowrap">
      <h1 class="visually-hidden">Sidebars examples</h1>
      <Navbar_Cocina />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}

export const Layout_Finanzas = (props) => {
  return (
    <main class="d-flex flex-nowrap">
      <h1 class="visually-hidden">Sidebars examples</h1>
      <Navbar_Finanzas />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}