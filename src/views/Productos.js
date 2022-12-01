import React, { useState, useEffect, useRef } from 'react'
import { Layout_Admin } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"
import { Modal } from '../components/ui/Modal'

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
    if (confirm("¿Desea guardar este producto?") === false) {
      return
    }
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
    openModalImperative()
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

  const btnAddModal = useRef()
  const openModalImperative = () => {
    console.log(btnAddModal.current)
    btnAddModal.current.click()
  }

  console.log(typeof getProductos,'get')
  console.log(typeof producto,'prod')
  console.log(typeof saveProducto,'save')

  return (
    <Layout_Admin>
      <div>
        <img src={Fondo1080} className="card-img" height={140} />
      </div>
      <div className="card my-3 mx-4 justify-center">
        <div className="card-header d-flex justify-content-between">
          <h2> Lista de Productos</h2>
          <Modal modalTitle={"Detalle producto"}
            renderButton={() => (
              <div ref={btnAddModal}>
                <i class="fa-solid fa-plus" />
              </div>
            )}
            renderContent={() => (
              <form className='container' style={{ width: 400 }}>
                <div className="row row-cols-3 mb-1">
                  <div className="col">
                    <label for="number_name" class="form-label">ID Producto</label>
                    <input
                      type='text'
                      name='id'
                      className='form-control mb-1'
                      placeholder='ID Producto'
                      readOnly={true}
                      value={producto.id}
                      onChange={handleChange}>
                    </input>
                  </div>
                  <div className="col">
                    <label for="number_name" class="form-label">Stock</label>
                    <input
                      type='number'
                      name='stock'
                      className='form-control mb-1'
                      value={producto.stock}
                      placeholder='Stock'
                      onChange={handleChange} />
                  </div>
                  <div className="col">
                    <label for="number_name" class="form-label">Valor</label>
                    <input
                      type='number'
                      name='value'
                      className='form-control mb-1'
                      value={producto.value}
                      placeholder='Valor'
                      onChange={handleChange} />
                  </div>
                </div>
                <div className="row row-cols-2 mb-1">
                  <div className="col">
                    <label for="number_name" class="form-label">Fecha Ingreso</label>
                    <input
                      type='date'
                      className='form-control mb-1'
                      value={producto.entry_date}
                      name='entry_date'
                      placeholder='Fecha de Ingreso'
                      onChange={handleChange} />
                  </div>
                  <div className="col">
                    <label for="number_name" class="form-label">Fecha Expiración</label>
                    <input
                      type='date'
                      className='form-control mb-1'
                      value={producto.expiration_date}
                      name='expiration_date'
                      placeholder='Fecha de Expiración'
                      onChange={handleChange} />
                  </div>
                </div>
                <div className="col">
                  <label for="number_name" class="form-label">Nombre</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control mb-1'
                    value={producto.name}
                    placeholder='Nombre'
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label for="number_name" class="form-label">Marca</label>
                  <input
                    type='text'
                    name='brand'
                    className='form-control mb-1'
                    value={producto.brand}
                    placeholder='Marca'
                    onChange={handleChange}
                  />
                </div>
                <div className='col-md-12 text-center my-3 ' >
                  {
                    !producto.id
                      ? <button
                        type='button'
                        className='col-md-6 btn btn-success '
                        onClick={saveProducto}>
                        Guardar
                      </button>
                      : <button
                        type='button'
                        className='col-md-6 btn btn-dark  '
                        onClick={() => updateProducto(producto.id)}>
                        Actualizar
                      </button>
                  }
                  <button
                    type='button'
                    className='col-md-6 btn btn-light '
                    onClick={resetForm}>
                    Limpiar
                  </button>
                </div>
              </form>
            )}
          />
        </div>

        <div className="card-body text-center">
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