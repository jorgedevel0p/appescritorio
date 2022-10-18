import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout_Admin, Navbar, Footer } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

// const DEFAULT_STATE = {
//     id: '',
//     state: false,
//     name: '',
//     stock: '',
//     expiration_date: '',
//     measure_unit: '',
//     category_product: 'Bebestibles',
//   }

//   export const Productos = () => {
//     const [producto, setProducto] = useState(DEFAULT_STATE)
//     const [productos, setProductos] = useState([])
//     const { isLoading, makeHttpRequest } = useHttpRequest()

//     const handleChange = (e) => {
//       setProducto({
//         ...producto,
//         [e.target.name]: e.target.value
//       })
//     }

//     const handleCheck = (e) => {
//       setProducto({
//         ...producto,
//         state: e.target.checked
//       })
//     }

//     const resetForm = () => setProducto({ ...DEFAULT_STATE })

//     const getProducts = () => {
//       makeHttpRequest({
//         operation: '/producto/',
//         data: null,
//         method: 'GET',
//         callback: ({ ok, data }) => {
//           if (!ok) {
//             alert(JSON.stringify(data))
//             return
//           }
//           setProductos(data)
//         }
//       })
//     }

//     const saveProduct = () => {
//       makeHttpRequest({
//         operation: '/producto/',
//         data: producto,
//         method: 'POST',
//         callback: ({ ok, data }) => {
//           if (!ok) {
//             alert(JSON.stringify(data))
//             return
//           }
//           resetForm()
//           getProducts()
//         }
//       })
//     }

//     const setProductDataIntoForm = (producto) => {
//       setProducto(producto)
//     }

//     const updateProduct = (id) => {
//       makeHttpRequest({
//         operation: `/producto/${id}`,
//         data: producto,
//         method: 'PUT',
//         callback: ({ ok, data }) => {
//           if (!ok) {
//             alert(JSON.stringify(data))
//             return
//           }
//           getProducts()
//           resetForm()
//         }
//       })
//     }

//     const deleteProduct = (id) => {
//       if (confirm("Desea eliminar producto?") === false) {
//         return
//       }

//       makeHttpRequest({
//         operation: `/producto/${id}`,
//         data: null,
//         method: 'DELETE',
//         callback: ({ ok, data }) => {
//           if (!ok) {
//             alert(JSON.stringify(data))
//             return
//           }
//           getProducts()
//         }
//       })
//     }

//     useEffect(() => {
//       getProducts()
//     }, [])


export const Cajas = () => {
    return (
        <Layout_Admin>
            <div>
                <img src={Fondo1080} className="card-img" height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Caja
                    </h2>
                </div>
                <div className='card-body'>
                    <input type='text' name='id' className='form-control mb-2' placeholder='ID Caja' readOnly={true}></input>
                    <input type='text' name='daily_total_valor' className='form-control mb-2' placeholder='Total Diario'></input>
                    <div>
                        <button type='button' className='btn btn-success '>Guardar</button>
                        <button type='button' className='btn btn-light'>Limpiar</button>
                    </div>
                </div>
            </div>
            <hr className='mt-4 m-4'></hr>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Listado de Cajas</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Total Diario</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </Layout_Admin>
    )
}