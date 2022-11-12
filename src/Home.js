import React, { useContext } from 'react'
import { Layout_Admin, Navbar, Footer } from './components/index'
import Fondo1080 from "./assets/img/720x120.jpg"
import restaurantContext from './context/restaurantContext'

export const Home = () => {
  const { platos, getPlatos } = useContext(restaurantContext)

  return (
    <>
      <Layout_Admin>
        <div>
          <img src={Fondo1080}
            className="card-img"
            height={140} />
        </div>
        <h1 className="text-center mt-3">
          Módulo Administrador
        </h1>
        <hr></hr>
        <form className='container ' >
          <div className="row row-cols-3 my-2">
            <div className='col-6'>
              <div class="alert alert-success mx-1" role="alert">
                Cuida tu salud visual. Toma un descanso de vez en cuando
              </div>
            </div>
            <div className='col-6'>
              <div class="alert alert-success mx-1" role="alert">
                Adopta una postura adecuada
              </div>
            </div>
            <div className='col-6'>
              <div class="alert alert-success mx-1" role="alert">
                Tus muñecas también son importantes, cuidalas!
              </div>
            </div>
            <div className='col-6'>
              <div class="alert alert-success mx-1" role="alert">
                Ten una buena hidratación. El agua ayuda a la concentración.
              </div>
            </div>
            <div className='col-6'>
              <div class="alert alert-success mx-1" role="alert">
                No olvides socializar. La comunicación es importante para un buen lugar de trabajo
              </div>
            </div>
            <div className='col-6'>
              <div class="alert alert-success mx-1" role="alert">
                Realiza estiramientos para no tener dolores lumbares
              </div>
            </div>
          </div>
        </form>
      </Layout_Admin>
      {/* <h1>Menú</h1>
      <div>
      <div>
        <ul>
          <li>{platos.data.map(plato => plato.type_dish)}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>{platos.data.map(plato => plato.name)}</li>
        </ul>
      </div>
      </div> */}
    </>
  )
}