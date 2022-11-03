import React, { useEffect, useState } from 'react'
import { Layout_Admin } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/720x120.jpg"

const DEFAULT_STATE = {
    id: '',
    date: '',
    start_time: '',
    end_time:'',
    number_people: '',
    state: '',
    mesa: '',
}

export const Ordenes = () => {
    const [orden, setOrden] = useState(DEFAULT_STATE)
    const [ordenes, setOrdenes] = useState([])
    const [form, setForm] = useState(DEFAULT_STATE)
    const { isLoading, makeHttpRequest } = useHttpRequest()
      
    const handleChange = (e) => {
        setOrden({
          ...orden,
          [e.target.name]: e.target.value
        })
    }
      
    const getOrdenes = () => {
      makeHttpRequest({
        operation: '/orden/',
        data: null,
        method: 'GET',
        callback: ({ok, data}) => {
          if (!ok) {
              alert(JSON.stringify(data))
            return
          }
          setOrdenes(data)
          console.log(data, 'Listado de Ordenes recibido')
        }
      })
    }
      
    const saveOrden = () => {
      console.log(orden)
      makeHttpRequest({
        operation: '/orden/',
        data: orden,
        method: 'POST',
        callback: ({ ok, data }) => {
          if (!ok) {
            alert(JSON.stringify(data))
            return
          }
          console.log(data, 'Ha guardado Orden correctamente')
          getOrdenes()
          resetForm()
        }
      })
    }
      
    const updateOrden = (id) => {
      if (confirm("¿Desea actualizar la información de esta orden?") === false) {
        return
      }
      makeHttpRequest({
        operation: `/orden/${id}`,
        data: orden,
        method: 'PUT',
        callback: ({ ok, data }) => {
          if (!ok) {
            alert(JSON.stringify(data))
            return
          }
          console.log(data, 'Orden se ha actualizado correctamente')
          getOrdenes()
          resetForm()
        }
      })
    }
      
    const setOrdenDataIntoForm = (orden) => {
      setOrden(orden)
    }
      
    const deleteOrden = (id) => {
      if (confirm("¿Desea eliminar el orden?") === false) {
        return
      } 
      makeHttpRequest({
        operation: `/orden/${id}`,
        data: null,
        method: 'DELETE',
        callback: ({ ok, data }) => {
          if (!ok) {
            alert(JSON.stringify(data))
            return
          }
          console.log(dato, 'Se ha eliminado la orden correctamente')
          getOrdenes()
        }
      })
    }
      
    const resetForm = () => [
      setOrden({ ...DEFAULT_STATE })
    ]
  
    useEffect(() => {
      getOrdenes()
    }, [])

    return (
        <Layout_Admin>
            <div>
                <img src={Fondo1080} className="card-img" height={140} />
            </div>
            <div className='card my-3 mx-4 justify-center'>
                <div className='card-header text-center'>
                    <h2>Orden
                    </h2>
                </div>
                <div className='card-body'>
                    <input 
                        type='text' 
                        name='id' 
                        className='form-control mb-2' 
                        placeholder='ID Orden' 
                        readOnly={true}
                        value={orden.id}
                        onChange={handleChange}>                            
                    </input>
                    <input 
                        type='date' 
                        name='date' 
                        className='form-control mb-2' 
                        placeholder='Fecha'
                        value={orden.date}
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='time'     
                        name='start_time' 
                        className='form-control mb-2' 
                        placeholder='Hora Inicio'
                        value={orden.start_time}
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='time'     
                        name='end_time' 
                        className='form-control mb-2' 
                        placeholder='Hora Término'
                        value={orden.end_time}
                        onChange={handleChange}>
                    </input>
                    <input 
                        type='number' 
                        name='number_people' 
                        className='form-control mb-2' 
                        placeholder='Numero de Personas'
                        value={orden.number_people}
                        onChange={handleChange}>
                    </input>
                    <select 
                        type='text' 
                        name='state' 
                        className='form-control mb-2'
                        value={orden.state}
                        onChange={handleChange}>
                            <option disabled selected>Estado</option>
                            <option value={1}>Activa</option>
                            <option value={0}>Cerrada</option>
                    </select>
                    <input 
                        type='number' 
                        name='mesa' 
                        className='form-control mb-2' 
                        placeholder='ID Mesa'
                        value={orden.mesa}
                        onChange={handleChange}>
                    </input>
                    
                    <div className='col-md-12 text-center my-3 ' >
                        {
                        !orden.id
                            ? <button 
                                type='button' 
                                className='col-md-2 btn btn-success' 
                                onClick={saveOrden}>
                                    Guardar
                            </button>
                            : <button 
                                type='button' 
                                className='col-md-2 btn btn-dark' 
                                onClick={() => updatOrden(orden.id)}>
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
                    <h2>Listado de Ordenes</h2>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Fecha</th>
                                <th scope='col'>Hora Inicio</th>
                                <th scope='col'>Hora Término</th>
                                <th scope='col'>Numero de Personas</th>
                                <th scope='col'>Estado</th>
                                <th scope='col'>ID Mesa</th>
                                <th scope='col'>Editar</th>
                                <th scope='col'>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {ordenes.map(orden => (
                                <tr>
                                    <th scope="row">{orden.id}</th>
                                    <td>{orden.date}</td>
                                    <td>{orden.start_time}</td>
                                    <td>{orden.end_time}</td>
                                    <td>{orden.number_people}</td>
                                    <td>{orden.state
                                    ? <span className="badge bg-success">Activa</span>
                                    : <span className="badge bg-secondary">Cerrada</span>
                                    }</td>
                                    <td>{orden.mesa}</td>
                                    <td>
                                    <button 
                                        type='button' 
                                        className='btn btn-warning btn-xs' 
                                        onClick={() => setOrdenDataIntoForm(orden)}>
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
                                        onClick={() => deleteOrden(orden.id)}>
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