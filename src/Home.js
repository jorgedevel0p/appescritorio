import React  from 'react'
import { Layout_Admin, Navbar, Footer } from './components/index'
import Fondo1080 from "./assets/img/720x120.jpg"

export const Home = () => {

  return (
      <Layout_Admin>
        <div>
                <img src={Fondo1080} 
                    className="card-img" 
                    height={140} />
                    </div>
                    <h1 class="text-center mt-3">
          Modulo Administrador
        </h1>
        <div >
          <div>
          </div>
        </div>
            
        
      </Layout_Admin>
  )
}