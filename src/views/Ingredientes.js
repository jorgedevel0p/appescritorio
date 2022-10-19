import React, { useEffect, useState } from 'react'
import { Layout_Admin } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

const DEFAULT_STATE = {
    id: '',
    name_ingredient: '',
    quantity: '',
    plato_id:'',
    producto_id:'',
}

export const Ingredientes = () => {

    const [ingrediente, setIngrediente] = useState(DEFAULT_STATE)
    const [ingredientes, setIngredientes] = useState([])
    const { isLoading, makeHttpRequest } = useHttpRequest()
  
    const handleChange = (e) => {
      setIngrediente({
        ...ingrediente,
        [e.target.name]: e.target.value
      })
    }
  
    const getIngredientes = () => {
      makeHttpRequest({
        operation: '/ingrediente/',
        data: null,
        method: 'GET',
        callback: ({ ok, data }) => {
          if (!ok) {
            alert(JSON.stringify(data))
            return
          }
          console.log(data, 'Listado de Ingredientes recibido')
          setIngredientes(data)
        }
      })
    }
  
    const saveIngrediente = () => {
      console.log(' llega')
      let ingredienteToSave = { ...ingrediente }
  
      makeHttpRequest({
        operation: '/ingrediente/',
        data: ingrediente,
        method: 'POST',
        callback: ({ ok, data }) => {
          if (!ok) {
            alert(JSON.stringify(data))
            return
          }
          console.log(data, 'Ha guardado el ingrediente correctamente')
          resetForm()
          getIngredientes()
        }
      })
    }
    const setIngredienteDataIntoForm = (ingrediente) => {
      setIngrediente(ingrediente)
    }
  
    const updateIngrediente = (id) => {
      if (confirm("¿Desea actualizar la información de este ingrediente?") === false) {
        return
      }
      makeHttpRequest({
        operation: `/ingrediente/${id}`,
        data: ingrediente,
        method: 'PUT',
        callback: ({ ok, data }) => {
          if (!ok) {
              alert(JSON.stringify(data))
            return
          }
          console.log(data, 'Ingrediente se ha actualizado correctamente')
          getIngredientes()
          resetForm()
        }
      })
    }
  
    const deleteIngrediente = (id) => {
      if (confirm("¿Desea eliminar este ingrediente?") === false) {
        return
      }
  
      makeHttpRequest({
        operation: `/ingrediente/${id}`,
        data: null,
        method: 'DELETE',
        callback: ({ ok, data }) => {
          if (!ok) {
              alert(JSON.stringify(data))
          return
          }
          console.log(data, 'Ingrediente se ha eliminado correctamente')
          getIngredientes()
        }
      })
    }
  
    const handleCheck = (e) => {
      setIngrediente({
        ...ingrediente,
        available: e.target.checked
      })
    }
    
    const resetForm = () => setIngrediente({ ...DEFAULT_STATE })
    
    useEffect(() => {
      getIngredientes()
    }, [])
  
    return (
        <Layout_Admin>
            <div>
                <img src={Fondo1080} className="card-img" height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>
                        Detalle Ingrediente
                    </h2>
                </div>
                <div className='card-body'>
                    <input 
                        type='text' 
                        name='id' 
                        className='form-control mb-2' 
                        placeholder='ID Ingrediente' 
                        readOnly={true}
                        value={ingrediente.id}
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='text' 
                        name='name_ingredient' 
                        className='form-control mb-2' 
                        placeholder='Nombre ingrediente'
                        value={ingrediente.name_ingredient}
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='number' 
                        name='quantity' 
                        className='form-control mb-2' 
                        placeholder='Cantidad'
                        value={ingrediente.quantity}>                            
                    </input>
                    <input 
                        type='number' 
                        name='plato_id' 
                        className='form-control mb-2' 
                        placeholder='Plato ID' 
                        value={ingrediente.plato_id}
                        onChange={handleChange}>                            
                    </input>
                    <input 
                        type='number' 
                        name='producto_id' 
                        className='form-control mb-2' 
                        placeholder='Producto ID'
                        value={ingrediente.producto_id}
                        onChange={handleChange}>                            
                    </input>
                    <div className='col-md-12 text-center my-3 ' >
                        {
                        !ingrediente.id
                            ? <button 
                                type='button' 
                                className='col-md-2 btn btn-success' 
                                onClick={saveIngrediente}>
                                    Guardar
                            </button>
                            : <button 
                                type='button' 
                                className='col-md-2 btn btn-dark' 
                                onClick={() => updateIngrediente(ingrediente.id)}>
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
                </div>
            </div>
            <hr className='mt-4 m-4'></hr>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Listado de Ingredientes</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID Ingrediente</th>
                                <th scope='col'>Nombre ingrediente</th>
                                <th scope='col'>Cantidad</th>
                                <th scope='col'>ID Plato</th>
                                <th scope='col'>ID Producto</th>
                                <th scope='col'>Editar</th>
                                <th scope='col'>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {ingredientes.map(ing => (
                            <tr>
                                <th scope="row">{ing.id}</th>
                                <td>{ing.name_ingredient}</td>
                                <td>{ing.quantity}</td>
                                <td>{ing.plato_id}</td>
                                <td>{ing.producto_id}</td>
                                <td>
                                <button 
                                    type='button' 
                                    className='btn btn-warning btn-xs' 
                                    onClick={() => setIngredienteDataIntoForm(ing)}>
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
                                    onClick={() => deleteIngrediente(ing.id)}>
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