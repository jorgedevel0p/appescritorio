import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Navbar_Inicio } from '../components'


export const Carta = () => {
    
  const [platos, setPlatos] = useState([])
  const { isLoading, makeHttpRequest } = useHttpRequest()

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
    useEffect(() => {
        getPlatos()
      }, [])
    return (
        <>
            <Navbar_Inicio />
            <h5 class="card-title">Carta</h5>
            <div className='card-body'>
                <table className='table'>
                    <thead>
                        <tr class="table-dark" >
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Descripción</th>
                            <th scope='col'>Valor</th>
                            <th scope='col'>Tipo de Plato</th>
                            
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {platos.map(plato => (
                            <tr class="table-Active">
                                
                                <td>{plato.name}</td>
                                <td>{plato.description}</td>
                                
                                <td>{plato.value}</td>
                                <td>{plato.type_dish}</td>
                                
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            


        </>

    )
}
