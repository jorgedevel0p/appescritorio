import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Cocina } from '../components'

export const TableroCocina = () => {
    return (
        <>
            <Layout_Cocina>
                

            </Layout_Cocina>
            <Footer />
        </>
    )

}