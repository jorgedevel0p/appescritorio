import React from 'react'
import { Navbar } from './Navbar'

export const Layout = (props) => {
  return (
    <main class="d-flex flex-nowrap">
      <h1 class="visually-hidden">Sidebars examples</h1>
      <Navbar />
      <div className='contenido' style={{ flex: 1, backgroundColor: 'white' }}>
        {props.children}
      </div>
    </main>
  )
}