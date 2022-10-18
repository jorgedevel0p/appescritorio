import React, { useEffect, useState } from 'react'
import { Layout_Admin } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

const DEFAULT_STATE = {
  id: '',
  state: false,
  name: '',
  stock: '',
  expiration_date: '',
  measure_unit: '',
  category_product: 'Bebestibles',
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

  const handleCheck = (e) => {
    setProducto({
      ...producto,
      state: e.target.checked
    })
  }

  const resetForm = () => setProducto({ ...DEFAULT_STATE })

  const getProducts = () => {
    makeHttpRequest({
      operation: '/producto/',
      data: null,
      method: 'GET',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        setProductos(data)
      }
    })
  }

  const saveProduct = () => {
    makeHttpRequest({
      operation: '/producto/',
      data: producto,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        resetForm()
        getProducts()
      }
    })
  }

  const setProductDataIntoForm = (producto) => {
    setProducto(producto)
  }

  const updateProduct = (id) => {
    makeHttpRequest({
      operation: `/producto/${id}`,
      data: producto,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        getProducts()
        resetForm()
      }
    })
  }

  const deleteProduct = (id) => {
    if (confirm("Desea eliminar producto?") === false) {
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
        getProducts()
      }
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Layout_Admin>
      <div>
        <img src={Fondo1080} className="card-img" height={140} />
      </div>
      <div className="card my-3 mx-4 justify-center">
          <div className="card-header text-center">
          <h2>Registro de Productos</h2>
        </div>

        <div className="card-body">
          <form>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={producto.state}
                onChange={handleCheck}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Activo
              </label>
            </div>

            <input type='text' name='name' className='form-control mb-2' value={producto.name} placeholder='Nombre' onChange={handleChange} />
            <input type='number' name='stock' className='form-control mb-2' value={producto.stock} placeholder='Stock' onChange={handleChange} />
            <input type='date' className='form-control mb-2' value={producto.expiration_date} name='expiration_date' placeholder='Fecha de Expiración' onChange={handleChange} />
            <input type='text' name='measure_unit' className='form-control mb-2' value={producto.measure_unit} placeholder='Unidad de Medida' onChange={handleChange} />

            <select name="category_product" className='form-select mb-5' value={producto.category_product} placeholder='Categoría producto' onChange={handleChange}>
              <option value="Bebestibles">Bebestibles</option>
              <option value="Frutas">Frutas</option>
              <option value="Carne">Carne</option>
            </select>


            {
              !producto.id
                ? <button type='button' className='btn btn-success' onClick={saveProduct}>Guardar producto</button>
                : <button type='button' className='btn btn-dark' onClick={() => updateProduct(producto.id)}>Actualizar producto</button>

            }

            <button type='button' className='btn btn-light' onClick={resetForm}>Limpiar</button>
            
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
                <th scope="col">Habilitado</th>
                <th scope="col">Nombre</th>
                <th scope="col">Stock</th>
                <th scope="col">Fecha de Expiración</th>
                <th scope="col">Unidad de Medida</th>
                <th scope="col">Categoría</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {productos.map(prod => (
                <tr>
                  <th scope="row">{prod.id}</th>
                  <td>{prod.state}</td>
                  <td>{prod.name}</td>
                  <td>{prod.stock}</td>
                  <td>{prod.expiration_date}</td>
                  <td>{prod.measure_unit}</td>
                  <td>{prod.category_product}</td>
                  <td>
                    <button type='button' className='btn btn-warning btn-xs' onClick={() => setProductDataIntoForm(prod)}><i className="fa-solid fa-pen-to-square" style={{ color: '#ffffff' }}></i></button>
                  </td>
                  <td>
                    <button type='button' className='btn btn-danger btn-xs' onClick={() => deleteProduct(prod.id)}><i className="fa-solid fa-trash"></i></button>
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