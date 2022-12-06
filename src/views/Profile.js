import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'

import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout, Layout_Admin, Layout_Bodega, Layout_Cliente, Layout_Cocina, Layout_Finanzas } from '../components'
 
const DEFAULT_STATE = {
    id: '',
    username: '',
    name: '',
    last_name: '',
    email: '',
    type: '',
    password: '',
  }

export const Profile = () => {
    const { isLoading, error, makeHttpRequest } = useHttpRequest()
    const [form, setForm] = useState(DEFAULT_STATE)

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }
    

    return (
        <>  <div className='row'>   
        <div className='col-2'>
            {
                (() => {
                    switch (localStorage.getItem('type_user')) {
                        case 'Admin':
                            return  <Layout_Admin/>
                        case 'Bodega':
                            return <Layout_Bodega/>
                        case 'Finanzas':
                            return <Layout_Finanzas/>
                        case 'Cocina':
                            return <Layout_Cocina/>
                        default:
                            return <Layout_Cliente/> 
                    }
                }) ()
            }
            </div>  
            </div>


      
        </>
    )

}