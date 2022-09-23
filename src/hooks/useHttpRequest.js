import { useState } from 'react'

const API_SIGLO_XXI_URL = 'http://localhost:8000/api'

export const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const makeHttpRequest = ({ operation, data, method, callback }) => {
    const savedToken = localStorage.getItem('token')

    let headers = { 
      'Content-Type': 'application/json'
    }

    /* if(savedToken && operation !== '/token'){
      headers.Authentication = savedToken
    } */

    let options = {
      method: method,      
      headers,
    }

    if(data){ options.body = JSON.stringify(data) }

    setIsLoading(true)
    setError(null)
    
    // const endpointUrl = `${API_SIGLO_XXI_URL}${operation}` // <--- es lo mismo que: API_SIGLO_XXI_URL + operation (contatenar strings)
    const FINAL_URL = API_SIGLO_XXI_URL + operation

    console.log(FINAL_URL, 'FINAL_URL') // http://localhost:8000/api//token

    fetch(API_SIGLO_XXI_URL + operation, options)
      .then(res => res.json())
      .then(respuesta => {
        
        callback(respuesta)        
      })
  
      .catch(error => {
        setError(error)
        console.log('ha ocurrido un error, revisa que pasa en la consola')
        console.log(error)
      })
  
      .finally(() => {
        setIsLoading(false)
      })      
  }

  return {
    isLoading,
    error,
    makeHttpRequest,
  }

}
