import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Navbar_Inicio } from '../components'
import { contenedor } from '../styles/inicio.css'



export const Inicio = () => {

    return (
        <>
            <Navbar_Inicio />

    

    <div class="contenedor">
    <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/06/21112912/FS_BA_Elena_Restaurant_05-1024x575.jpg" class="d-block w-100 " alt="..."  width="1327" height="1330" />
  <div class="texto-encima" >los mejores platos te los puedes servir en siglo XXI donde siempre estamos dispuestos a entregar el mejor servicio
   </div>
   
   
  
</div>




          
        </>
    )}
