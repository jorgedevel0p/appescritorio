import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHttpRequest } from './hooks/useHttpRequest'

export const Home = () => {
  const { isLoading, error, makeHttpRequest } = useHttpRequest()

  useEffect(()=>{
    console.log('se ha iniciado el componente', isLoading)

    makeHttpRequest({
      data: null,
      method: 'GET',
      callback: (responseApi) => {
        console.log(responseApi)
      }
    })

  },[])

  return (
    <>
      <div>Hello from Home!</div>
      <Link to='/about'>go to /about</Link>
    </>
  )
}
