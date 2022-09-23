import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'

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
      callback: (responseApi) => {
        console.log(responseApi, 'productos recibidos')
        setProductos(responseApi)
      }
    })
  }

  const saveProduct = () => {
    let productoToSave = {...producto}

    makeHttpRequest({
      operation: '/producto/',
      data: producto,
      method: 'POST',
      callback: (responseApi) => {
        console.log(responseApi, 'ha guardado el producto correctamente')      
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
      callback: (responseApi) => {
        console.log(responseApi, 'ha actualizado el producto correctamente')
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
      callback: (responseApi) => {
        console.log(responseApi, 'ha eliminado el producto correctamente')
        getProducts()
      }
    })
  }

  useEffect(()=>{
    getProducts()
  },[])

/*   // revisar que cambia el state
  useEffect(()=>{
    console.log(producto, 'memoria...')
  },[producto]) */


  return (
    <>
      <Navbar />
    
      <div className='container'>
        <Link to='/home' class="btn btn-link right">Volver al home</Link>

        <div class="card-body">
          <form>

            <div class="form-check">
              <input 
                class="form-check-input" 
                type="checkbox" 
                checked={producto.state} 
                onChange={handleCheck}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Habilitado?
              </label>
            </div>

            <input type='text' name='name' className='form-control mb-2' value={producto.name} placeholder='name' onChange={handleChange} />
            <input type='number' name='stock' className='form-control mb-2' value={producto.stock} placeholder='stock' onChange={handleChange} />
            <input type='date' className='form-control mb-2' value={producto.expiration_date} name='expiration_date' placeholder='expiration_date' onChange={handleChange} />
            <input type='text' name='measure_unit' className='form-control mb-2' value={producto.measure_unit} placeholder='measure_unit' onChange={handleChange} />
            
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

            <button type='button' className='btn btn-light' onClick={resetForm}>Limpiar form</button>

          </form>
        </div>


        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">state</th>
              <th scope="col">name</th>
              <th scope="col">stock</th>
              <th scope="col">expiration_date</th>
              <th scope="col">measure_unit</th>
              <th scope="col">category_product</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
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
                  <button type='button' className='btn btn-warning btn-xs' onClick={() => setProductDataIntoForm(prod)}>Editar</button>
                  <button type='button' className='btn btn-danger btn-xs' onClick={() => deleteProduct(prod.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>

      


      <Footer />
    </>



  )

}