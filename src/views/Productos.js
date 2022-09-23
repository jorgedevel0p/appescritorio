import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'

const DEFAULT_STATE = {
    id: '',
    state: '',
    name: '',
    stock: '',
    expiration_date: '',
    measure_unit: '',
    category_producto: '',                                 
}

export const Productos = () => {
    return (
        <>
            <Navbar />

            <Footer />
        </>



    )

}