import { useState } from 'react'

const API_SIGLO_XXI_URL = 'http://localhost:8000/api/token'

export const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const makeHttpRequest = ({ data, method, callback }) => {
    
    const options = {
      method: method,
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json'}
    }

    setIsLoading(true)
    setError(null)
    
    fetch(API_SIGLO_XXI_URL, options)
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
