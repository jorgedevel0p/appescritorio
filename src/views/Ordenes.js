import React, { useEffect, useState } from 'react'
import { Layout_Admin } from '../components/index'
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
// }

// export const Productos = () => {
//     const [producto, setProducto] = useState(DEFAULT_STATE)
//     const [productos, setProductos] = useState([])
//     const { isLoading, makeHttpRequest } = useHttpRequest()

//     const handleChange = (e) => {
//         setProducto({
//             ...producto,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleCheck = (e) => {
//         setProducto({
//             ...producto,
//             state: e.target.checked
//         })
//     }

//     const resetForm = () => setProducto({ ...DEFAULT_STATE })

//     const getProducts = () => {
//         makeHttpRequest({
//             operation: '/producto/',
//             data: null,
//             method: 'GET',
//             callback: ({ ok, data }) => {
//                 if (!ok) {
//                     alert(JSON.stringify(data))
//                     return
//                 }
//                 setProductos(data)
//             }
//         })
//     }

//     const saveProduct = () => {
//         makeHttpRequest({
//             operation: '/producto/',
//             data: producto,
//             method: 'POST',
//             callback: ({ ok, data }) => {
//                 if (!ok) {
//                     alert(JSON.stringify(data))
//                     return
//                 }
//                 resetForm()
//                 getProducts()
//             }
//         })
//     }

//     const setProductDataIntoForm = (producto) => {
//         setProducto(producto)
//     }

//     const updateProduct = (id) => {
//         makeHttpRequest({
//             operation: `/producto/${id}`,
//             data: producto,
//             method: 'PUT',
//             callback: ({ ok, data }) => {
//                 if (!ok) {
//                     alert(JSON.stringify(data))
//                     return
//                 }
//                 getProducts()
//                 resetForm()
//             }
//         })
//     }

//     const deleteProduct = (id) => {
//         if (confirm("Desea eliminar producto?") === false) {
//             return
//         }

//         makeHttpRequest({
//             operation: `/producto/${id}`,
//             data: null,
//             method: 'DELETE',
//             callback: ({ ok, data }) => {
//                 if (!ok) {
//                     alert(JSON.stringify(data))
//                     return
//                 }
//                 getProducts()
//             }
//         })
//     }

//     useEffect(() => {
//         getProducts()
//     }, [])

export const Ordenes = () => {
    return (
        <Layout_Admin>
            <div>
                <img src={Fondo1080} class="card-img" height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Ordenes
                    </h2>
                </div>
                <div className='card-body'>
                    <input type='text' name='id' className='form-control mb-2' placeholder='ID Orden' readOnly={true}></input>
                    <input type='date' name='date' className='form-control mb-2' placeholder='Fecha'></input>
                    <input type='text' name='time' className='form-control mb-2' placeholder='Tiempo'></input>
                    <input type='text' name='number_people' className='form-control mb-2' placeholder='Numero de Personas'></input>
                    <select type='text' name='state' className='form-control mb-2'>
                        <option disabled selected>Estado</option>

                    </select>
                    <input type='text' name='mesa_id' className='form-control mb-2' placeholder='ID MESA'></input>
                    <div>
                        <button type='button' className='btn btn-success '>Guardar</button>
                        <button type='button' className='btn btn-light'>Limpiar</button>
                    </div>
                </div>
            </div>
            <hr className='mt-4 m-4'></hr>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Listado de Ordenes</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Fecha</th>
                                <th scope='col'>Tiempo</th>
                                <th scope='col'>Numero de Personas</th>
                                <th scope='col'>Estado</th>
                                <th scope='col'>ID MESA</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </Layout_Admin>
    )
}