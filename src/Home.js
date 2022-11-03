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
                    <h1 className="text-center mt-3">
          Módulo Administrador
        </h1>
        <hr></hr>
        <form className='container ' >
                    <div className="row row-cols-3 my-2">
                    <div class="alert alert-success mx-1"  role="alert">
                        Cuida tu salud visual. Toma un descanso de vez en cuando
</div>
<div class="alert alert-success mx-1"  role="alert">
                Adopta una postura adecuada  
</div>
<div class="alert alert-success mx-1"  role="alert">
                Tus muñecas también son importantes, cuidalas!  
</div>
<div class="alert alert-success mx-1"  role="alert">
                Ten una buena hidratación. El agua ayuda a la concentración. 
</div>
<div class="alert alert-success mx-1"  role="alert">
                No olvides socializar. La comunicación es importante para un buen lugar de trabajo
</div>
<div class="alert alert-success mx-1"  role="alert">
                Realiza estiramientos para no tener dolores lumbares
</div>

                    </div>
                </form>
            
        
      </Layout_Admin>
  )
}