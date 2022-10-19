import React, { useState, useEffect } from 'react'
import { Layout_Admin } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

const DEFAULT_STATE = {
  id: '',
  name: '',
  stock: '',
  entry_date: '',
  expiration_date: '',
  value: '',
  brand: '',
}

export const Productos = () => {

  const [producto, setProducto] = useState(DEFAULT_STATE)
  const [productos, setProductos] = useState([])
  const { isLoading, makeHttpRequest } = useHttpRequest()

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const getProductos = () => {
    makeHttpRequest({
      operation: '/producto/',
      data: null,
      method: 'GET',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Listado de productos recibido')
        setProductos(data)
      }
    })
  }

  const saveProducto = () => {
    console.log(' llega')
    let productoToSave = { ...producto }

    makeHttpRequest({
      operation: '/producto/',
      data: producto,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Ha guardado el producto correctamente')
        resetForm()
        getProductos()
      }
    })
  }
  
  const setProductoDataIntoForm = (producto) => {
    setProducto(producto)
  }

  const updateProducto = (id) => {
    if (confirm("¿Desea actualizar la información de este producto?") === false) {
      return
    }
    makeHttpRequest({
      operation: `/producto/${id}`,
      data: producto,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
            alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Producto se ha actualizado correctamente')
        getProductos()
        resetForm()
      }
    })
  }

  const deleteProducto = (id) => {
    if (confirm("¿Desea eliminar este producto?") === false) {
      return
    }

    makeHttpRequest({
      operation: `/producto/${id}`,
      data: null,
      method: 'DELETE',
      callback: ({ ok, data }) => {
        if (!ok) {
            alert(JSON.stringify(data))
        return
        }
        console.log(data, 'Producto se ha eliminado correctamente')
        getProductos()
      }
    })
  }

  const handleCheck = (e) => {
    setProducto({
      ...producto,
      available: e.target.checked
    })
  }
  
  const resetForm = () => setProducto({ ...DEFAULT_STATE })
  
  useEffect(() => {
    getProductos()
  }, [])



  return (
    <Layout_Admin>
      <div>
        <img src={Fondo1080} className="card-img" height={140} />
      </div>
      <div className="card my-3 mx-4 justify-center">
          <div className="card-header text-center">
          <h2>Detalle de Productos</h2>
        </div>

        <div className="card-body">
          <form>
            {/* <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={producto.state}
                onChange={handleCheck}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Activo
              </label>
            </div> */}
            <input 
                type='text' 
                name='id' 
                className='form-control mb-2'
                placeholder='ID Producto'
                readOnly={true}
                value={producto.id}
                onChange={handleChange}>
              </input>
            <input 
              type='text' 
              name='name' 
              className='form-control mb-2' 
              value={producto.name} 
              placeholder='Nombre' 
              onChange={handleChange}
            />
            <input 
              type='number' 
              name='stock' 
              className='form-control mb-2' 
              value={producto.stock} 
              placeholder='Stock' 
              onChange={handleChange}
            />
            <input 
              type='date' 
              className='form-control mb-2'
               value={producto.entry_date} 
               name='entry_date' 
               placeholder='Fecha de Ingreso' 
               onChange={handleChange} 
            /> 
            <input 
              type='date' 
              className='form-control mb-2' 
              value={producto.expiration_date} 
              name='expiration_date' 
              placeholder='Fecha de Expiración' 
              onChange={handleChange} 
            />
            <input 
              type='number' 
              name='value' 
              className='form-control mb-2' 
              value={producto.value} 
              placeholder='Valor' 
              onChange={handleChange}
            />
            <input 
              type='text' 
              name='brand' 
              className='form-control mb-2' 
              value={producto.brand} 
              placeholder='Marca' 
              onChange={handleChange} 
            />
            <div className='col-md-12 text-center my-3 ' >
                {            
                !producto.id
                  ? <button 
                    type='button' 
                    className='col-md-2 btn btn-success mx-3' 
                    onClick={saveProducto}>
                      Guardar
                  </button>
                  : <button 
                    type='button' 
                    className='col-md-2 btn btn-dark mx-3 '  
                    onClick={() => updateProducto(producto.id)}>
                      Actualizar
                  </button>
                } 
              <button 
                type='button' 
                className='col-md-2 btn btn-light mx-3'  
                onClick={resetForm}>
                  Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className='mt-4 m-4'></hr>
        <div className="card my-3 mx-4 justify-center">
          <div className="card-header text-center">
          <h2>Lista de Productos</h2>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Stock</th>
                <th scope="col">Fecha de Ingreso</th>
                <th scope="col">Fecha de Expiración</th>
                <th scope="col">Valor</th>
                <th scope="col">Marca</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {productos.map(producto => (
                <tr>
                  <th scope="row">{producto.id}</th>
                  <td>{producto.name}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.entry_date}</td>
                  <td>{producto.expiration_date}</td>
                  <td>{producto.value}</td>
                  <td>{producto.brand}</td>
                  <td>
                    <button 
                      type='button' 
                      className='btn btn-warning btn-xs' 
                      onClick={() => setProductoDataIntoForm(producto)}>
                        <i 
                          className="fa-solid fa-pen-to-square" 
                          style={{ color: '#ffffff' }}>
                        </i>
                      </button>
                  </td>
                  <td>
                    <button 
                      type='button' 
                      className='btn btn-danger btn-xs' 
                      onClick={() => deleteProducto(producto.id)}>
                        <i 
                          className="fa-solid fa-trash">
                        </i>
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>

        </div>
      </div>
    </Layout_Admin>
  )

}