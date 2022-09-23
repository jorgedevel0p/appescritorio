import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {

  return (
    <>
      <div>Hello from Home!</div>
      <Link to='/users'>Ir a CRUD usuarios</Link>
      ----
      <Link to='/'>Logout</Link>
    </>
  )
}
