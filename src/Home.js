import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <div>Hello from Home!</div>
      <Link to='/about'>go to /about</Link>
    </>
  )
}
