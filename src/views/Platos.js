import React, { useEffect, useState } from 'react'
import { Layout_Admin } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

const DEFAULT_STATE = {
    id: '',
    name: '',
    description: '',
    recipe: '',
    value: '',
    type_dish: '',
}

export const Platos = () => {
  // const [plato, setPlato] = useState(DEFAULT_STATE)
  const [platos, setPlatos] = useState([])
  const [form, setForm] = useState(DEFAULT_STATE)
  const { isLoading, makeHttpRequest } = useHttpRequest()
    
  const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
  }
    
  const getPlatos = () => {
    makeHttpRequest({
      operation: '/plato/',
      data: null,
      method: 'GET',
      callback: (responseApi) => {
        const { data } = responseApi
        setPlatos(data)
      }
    })
  }
    
  const savePlato = () => {
    console.log(form)
    makeHttpRequest({
      operation: '/plato/',
      data: form,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        getPlatos()
        resetForm()
      }
    })
  }
    
  const updatePlato = (id) => {
    makeHttpRequest({
      operation: `/plato/${id}`,
      data: form,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        getPlatos()
        resetForm()
      }
    })
  }
    
  const setPlatoDataIntoForm = (plato) => {
    const { id, name, description, recipe, value, type_dish } = plato
    setForm({
      id,
      name,
      description,
      recipe,
      value,
      type_dish,
    })
  }
    
  const deletePlato = (id) => {
    makeHttpRequest({
      operation: `/plato/${id}`,
      data: null,
      method: 'DELETE',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        getPlatos()
      }
    })
  }
    
  const resetForm = () => [
    setForm({ ...DEFAULT_STATE })
  ]

  useEffect(() => {
    getPlatos()
  }, [])
   
  return (
    <>
      <Layout_Admin>
        <div>
          <img src={Fondo1080} className="card-img" height={140} />
        </div>
        <div className='card my-3 mx-4 justify-center'>
          <div className='card-header text-center'>
            <h2>Platos</h2>
          </div>
          <div className='card-body'>
            {/* <input type='text' name='id' className='form-control mb-2' placeholder='ID Plato' readOnly={true}></input> */}
            <input type='text' name='name' className='form-control mb-2' placeholder='Nombre'></input>
            <input type='text' name='description' className='form-control mb-2' placeholder='Descripción'></input>
            <input type='text-box' name='recipe' className='form-control mb-2' placeholder='Receta'></input>
            <input type='number' name='value' className='form-control mb-2' placeholder='Valor'></input>
            {/* <input type='text' name='type_dish' className='form-control mb-2' placeholder='Tipo de plato'></input> */}
            <select
              type='text'
              name='type_dish'
              className='form-control mb-2'>
                <option disabled selected>Tipo de Plato</option>
                <option value="Entrada">Entrada</option>
                <option value="Fondo">Fondo</option>
                <option value="Postre">Postre</option>
            </select>  
            <div>
              {
                !form.id
                  ?<button type='button' className='btn btn-success' onClick={savePlato}>Guardar</button>
                  :<button type='button' className='btn btn-dark' onClick={updatePlato(plato.id)}>Actualizar</button>
              }
              <button type='button' className='btn btn-light' onClick={resetForm}>Limpiar</button>
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
                  <th scope='col'>Nombre</th>
                  <th scope='col'>Descripción</th>
                  <th scope='col'>Receta</th>
                  <th scope='col'>Valor</th>
                  <th scope='col'>Tipo de Plato</th>
                  <th scope='col'>Editar</th>
                </tr>
              </thead>
              <tbody className='table-group-divider'>
                {platos.map(plato => (
                <tr>
                  <th scope='row'>{plato.id}</th>
                  <td>{plato.name}</td>
                  <td>{plato.description}</td>
                  <td>{plato.recipe}</td>
                  <td>{plato.value}</td>
                  <td>{plato.type_dish}</td>
                  <td>
                    <button 
                      type='button' 
                      className='btn btn-warning btn-xs'
                      onClick={() => setPlatoDataIntoForm(plato)}>
                      <i className='fa-solid fa-pen-to-square'
                        style={{color: '#ffffff'}}>
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
    </>
  )
}