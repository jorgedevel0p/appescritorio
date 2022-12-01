import React, { useContext } from 'react'
import { Layout_Bodega } from '../components/index'
import { useHttpRequest } from '../hooks/useHttpRequest'
import Fondo1080 from "../assets/img/Bodega_720x120.jpg"
import restaurantContext from '../context/restaurantContext'

export const PedidoBodega = () => {
    const { productos } = useContext(restaurantContext);
    const { isLoading, makeHttpRequest } = useHttpRequest()

    //Stock 
    const listaConFiltro = productos.data.filter((prod) => prod.stock < 30);



    return (
        <Layout_Bodega>
            <div>
                <img src={Fondo1080}
                    className="card-img"
                    height={140} />
            </div>
            <h1 className='text-center my-4'> Pedir a Proveedor</h1>
            <hr></hr>
            <div className='card my-3 mx-3 justify-center alert alert-primary '>
                {/* <div className='card-header text-center'>
                    <h4>Reponer Stock
                    </h4>
                </div> */}
                <div class="card-body alert alert-light">
                    <table className="table">
                        <thead className="table ">
                            <tr>
                                <th scope='col'>Producto</th>
                                <th scope='col'>Stock</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {listaConFiltro.map((producto) => (
                                <tr>
                                    <td>{producto.name}</td>
                                    <td>{producto.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout_Bodega>
    )
}