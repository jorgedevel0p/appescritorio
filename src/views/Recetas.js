import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Cocina } from '../components'
import Fondo1080 from "../assets/img/720x120.jpg"
import { Modal } from "../components/ui/Modal";

const DEFAULT_STATE = {
  id: '',
  name: '',
  description: '',
  recipe: '',
  value: '',
  type_dish: '',
  image_plato: '',
  score: '',
}

export const Recetas = () => {
  const [plato, setPlato] = useState(DEFAULT_STATE)
  const [platos, setPlatos] = useState([])
  const [form, setForm] = useState(DEFAULT_STATE)
  const { isLoading, makeHttpRequest } = useHttpRequest()

  const handleChange = (e) => {
    setPlato({
      ...plato,
      [e.target.name]: e.target.value
    })
  }

  const getPlatos = () => {
    makeHttpRequest({
      operation: '/plato/',
      data: null,
      method: 'GET',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        setPlatos(data)
        console.log(data, 'Listado de Platos recibido')
      }
    })
  }

  const savePlato = () => {
    console.log(plato)
    makeHttpRequest({
      operation: '/plato/',
      data: plato,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Ha guardado Plato correctamente')
        getPlatos()
        resetForm()
      }
    })
  }

  const updatePlato = (id) => {
    if (confirm("¿Desea actualizar la información de este plato?") === false) {
      return
    }
    makeHttpRequest({
      operation: `/plato/${id}`,
      data: plato,
      method: 'PUT',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        console.log(data, 'Plato se ha actualizado correctamente')
        getPlatos()
        resetForm()
      }
    })
  }

  const setPlatoDataIntoForm = (plato) => {
    setPlato(plato)
    openModalImperative();
  }



  const resetForm = () => [
    setPlato({ ...DEFAULT_STATE })
  ]

  useEffect(() => {
    getPlatos()
  }, [])

  const btnAddModal = useRef();
  const openModalImperative = () => {
    console.log(btnAddModal.current);
    btnAddModal.current.click();
  };

  return (
    <>
      <Layout_Cocina>
        <div>
          <img src={Fondo1080} className="card-img" height={140} />
        </div>
        <div className="card my-3 mx-4 justify-center">
          <div div className="card-header d-flex justify-content-between">
            <h4>Añadir Receta</h4>
            <Modal
              modalTitle={"Agregar usuario"}
              renderButton={() => (
                <div ref={btnAddModal}>
                  <i class="fa-solid fa-plus" />
                </div>
              )}
              renderContent={() => (
                <form className="container" style={{ width: 400 }}>
                  <input
                    type='text'
                    name='name'
                    className='form-control mb-2'
                    placeholder='Nombre'
                    value={plato.name}
                    onChange={handleChange}>
                  </input>
                  <input
                    type='text'
                    name='description'
                    className='form-control mb-2'
                    placeholder='Descripción'
                    value={plato.description}
                    onChange={handleChange}>
                  </input>
                  <input
                    type='text-box'
                    name='recipe'
                    className='form-control mb-2'
                    placeholder='Receta'
                    value={plato.recipe}
                    onChange={handleChange}>
                  </input>
                  <input
                    type='number'
                    name='value'
                    className='form-control mb-2'
                    min={0}
                    placeholder='Valor'
                    value={plato.value}
                    onChange={handleChange}>
                  </input>
                  <select
                    type='text'
                    name='type_dish'
                    className='form-control mb-2'
                    value={plato.type_dish}
                    onChange={handleChange}>
                    <option disabled selected>Tipo de Plato</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Fondo">Fondo</option>
                    <option value="Postre">Postre</option>
                  </select>

                  <div className="col">
                    <label for="number_name" class="form-label">Dificultad</label>
                    <select
                      type='number'
                      name='score'
                      className='form-control mb-2'
                      value={plato.score}
                      onChange={handleChange}>
                      <option disabled selected>Dificultad</option>
                      <option value={'1'}>1</option>
                      <option value={'2'}>2</option>
                      <option value={'3'}>3</option>
                    </select>
                  </div>

                  <input
                    type='url'
                    name='image_plato'
                    className='form-control mb-2'

                    placeholder='Imagen'
                    value={plato.image_plato}
                    onChange={handleChange}>
                  </input>
                  <div className='col-md-12 text-center my-3 ' >
                    {
                      !plato.id
                        ? <button
                          type='button'
                          className='btn btn-success mx-3'
                          onClick={savePlato}>
                          Añadir
                        </button>
                        : <button
                          type='button'
                          className='btn-dark mx-3 '
                          onClick={() => updatePlato(plato.id)}>
                          Actualizar
                        </button>
                    }
                    <button
                      type='button'
                      className='btn btn-light mx-3'
                      onClick={resetForm}>
                      Limpiar
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
          <div className='card-body'>
            <table className='table'>
              <thead>
                <tr>
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
                          style={{ color: '#ffffff' }}>
                        </i>
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </Layout_Cocina>
      <Footer />
    </>
  )

}