const API_SIGLO_XXI_URL = 'http://localhost:8000/api'
const STATUS_CODE_OK = 200

export const useHttpRequest = () => {

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
    const endpointUrl = `${API_SIGLO_XXI_URL}${operation}` // <--- es lo mismo que: API_SIGLO_XXI_URL + operation (contatenar strings)

    fetch(endpointUrl, options)
  
      .then(res => {
        if (!res.ok || res.status !== STATUS_CODE_OK) {
          return res.text().then(text => { throw new Error('Username y/o contraseña incorrecta. Intenta nuevamente!',text) })
        } else {
          return res.json()
        }
      })
      .then(respuesta => {
        callback({
          ok: true,
          data: respuesta
        })
      })
      .catch(error => {
        callback({
          ok: false,
          data: error
        })
      })
  }

  return {
    makeHttpRequest,
  }

}
