import React, { useEffect, useState, useContext, useRef } from "react";
import { Layout_Admin, Layout_Finanzas } from "../components/index";
import { useHttpRequest } from "../hooks/useHttpRequest";
import Fondo1080 from "../assets/img/720x120.jpg";
import restaurantContext from "../context/restaurantContext";
import DataTable from 'react-data-table-component'
import 'style-components'

export const ResumenDatos = () => {
  const { productos, boletas, getUserById, getPlatosById, platos, detalle_ordenes, ordenes } =
    useContext(restaurantContext);
  const { isLoading, makeHttpRequest } = useHttpRequest();
  const [users, setUsers] = useState([]);

  //Stock 
  const listaConFiltro = productos.data.filter((prod) => prod.stock < 30);

  //Usuario

  const getUsers = () => {
    makeHttpRequest({
      operation: '/user/',
      data: null,
      method: 'GET',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data))
          return
        }
        setUsers(data)
        console.log(data, 'Listado de Usuarios recibido')
      }
    })
  }
  const userCompras = boletas.data.map((bol) => bol.user);
  console.log(userCompras)
  const listaCount = {};
  userCompras.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });
  const listaModa = Object.entries(listaCount).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  const moda = listaModa[listaModa.length - 1];
  const cantUser = moda[1];
  const listaCliente = [moda];
  const idUser = parseInt(moda[0] );

  console.log('id user data', users)
  console.log('id user ', idUser)

  console.log('id user ', users)
  // PLATO 
  const eliminaDuplicados = (arr) => {
    return arr.filter((valor, indice) => {
      return arr.indexOf(valor) === indice;
    });
  }

  const listaPlatos = detalle_ordenes.data.map((dt) => dt.plato)
  const listaNuevaPlato = eliminaDuplicados(listaPlatos)
  console.log(typeof listaNuevaPlato)




  for (let idp of listaNuevaPlato) {
    console.log(idp)
  }

  useEffect(() => {
    getUsers()
  }, [])


  // // const detalleO = detalle_ordenes.data.filter((dt) => (dt.plato == (idPlato)))
  // // const listND = detalleO.map((dt) => dt.number_dish)
  // // const sumaPlato = listND.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

  // // console.log(typeof detalle_ordenes, detalle_ordenes)
  // // console.log(typeof detalleO, detalleO)
  // // console.log(typeof listND, listND)
  // // console.log(typeof sumaPlato, sumaPlato)








  // //   const cantidadPorId = detalleO.data[idPl]['number_dish']
  // // // console.log(detalleO,'idpl')

  // // // const total = detalle_ordenes.data

  // // console.log( detalleO)

  // const columns = [
  //   {
  //     name: 'ID',
  //     selector: row => row.id
  //   },
  //   {
  //     name: 'Fecha',
  //     selector: row => row.date
  //   },
  //   {
  //     name: 'Inicio',
  //     selector: row => row.start_time
  //   },
  //   {
  //     name: 'Término',
  //     selector: row => row.end_time
  //   },{
  //     name: 'Tiempo',
  //     selector: row => [(row.end_time).value() - (row.start_time).value()]
  //   }
  // ]


  return (
    <>
      <Layout_Admin>
        <div>
          <img src={Fondo1080} className="card-img" height={140} />
        </div>
        <h2 className="text-center my-4">Resumen de Datos</h2>
        <hr></hr>
        <div className="container">
          <div className="row row-cols-12 text-center">
            
            <div className="col-6">
              <div class="card text-center">
                <div className="alert alert-secondary">Cliente frecuente</div>
                <table className="table">
                  <tbody className="table">
                <td>{getUserById(idUser).username} {getUserById(idUser).email}</td>
                  </tbody>
                </table>
              </div>
            </div>
          
          
            <div className="col-6">
              <div className="card">
                <div className="alert alert-success">Los más vendidos</div>

                <table className="table">
                  <tbody className="table">
                    
                      <td>{platos.data[1].name}</td>
                      <td>{platos.data[2].name}</td>
                      <td>{platos.data[0].name}</td>
                    
                  </tbody>
                </table>
              </div>
              </div>
              <div className="col-12 mt-3">
              <div class="card">
                <div className="alert alert-warning">Reponer Stock</div>
                <table className="table">
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
        </div>
        </div>
        {/* <DataTable
          columns={columns}
          data={ordenes.data}
          pagination
          searching
          ordering /> */}
      </Layout_Admin>
    </>
  );
};
