import { useState } from 'react'

const API_SIGLO_XXI_URL = 'http://localhost:8000/api'
const STATUS_CODE_OK = 200

export const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getErrorFromHttpResponse = async(response) => {
    return await response.json()
      .then(res => ({
        ok: false,
        data: res
      }))
      .catch(error => console.log(error))
  }

  const makeHttpRequest = ({ operation, data, method, callback }) => {
    const savedToken = localStorage.getItem('token')

    let headers = {
      'Content-Type': 'application/json'
    }

    if (savedToken && operation !== '/token') {
      headers.Authorization = `Bearer ${savedToken}`
    }

    let options = {
      method: method,
      headers,
    }

    if (data) { options.body = JSON.stringify(data) }

    setIsLoading(true)
    setError(null)

    const endpointUrl = `${API_SIGLO_XXI_URL}${operation}` // <--- es lo mismo que: API_SIGLO_XXI_URL + operation (contatenar strings)

    fetch(endpointUrl, options)
      .then(res => {
        if (res.status !== STATUS_CODE_OK) {
          getErrorFromHttpResponse(res).then(responseError => {
            callback(responseError)
          })
        }

        return res.json()
      })
      .then(respuesta => {
        callback({
          ok: true,
          data: respuesta
        })
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
