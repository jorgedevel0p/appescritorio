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

export const Platos = () => {
    return (
        <Layout_Admin>
            <div>
                <img src={Fondo1080} class="card-img" height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Platos
                    </h2>
                </div>
                <div className='card-body'>
                    <input type='text' name='id' className='form-control mb-2' placeholder='ID Caja' readOnly={true}></input>
                    <input type='text' name='description' className='form-control mb-2' placeholder='Descripción'></input>
                    <input type='text' name='recipe' className='form-control mb-2' placeholder='Receta'></input>
                    <input type='text' name='value' className='form-control mb-2' placeholder='Valor'></input>
                    <input type='text' name='type_dish' className='form-control mb-2' placeholder='Tipo de plato'></input>
                    <div>
                        <button type='button' className='btn btn-success '>Guardar</button>
                        <button type='button' className='btn btn-light'>Limpiar</button>
                    </div>
                </div>
            </div>
            <hr className='mt-4 m-4'></hr>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Listado de Platos</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Descripción</th>
                                <th scope='col'>Receta</th>
                                <th scope='col'>Valor</th>
                                <th scope='col'>Tipo de Plato</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </Layout_Admin>
    )
}