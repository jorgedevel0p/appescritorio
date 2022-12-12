import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Layout_Admin, Navbar, Footer } from "../components/index";
import { useHttpRequest } from "../hooks/useHttpRequest";
import Fondo1080 from "../assets/img/720x120.jpg";
import restaurantContext from "../context/restaurantContext";
import { Modal } from "../components/ui/Modal";

const DEFAULT_STATE = {
  id: "",
  number_dish: "",
  orden: "",
  plato: "",
  producto: "",
};

export const DetalleOrden = () => {
  const { productos, platos, ordenes, getProductosById, getPlatosById } =
    useContext(restaurantContext);
  const [detalleOrden, setDetalleOrden] = useState(DEFAULT_STATE);
  const [detalleOrdenes, setDetalleOrdenes] = useState([]);
  const { isLoading, makeHttpRequest } = useHttpRequest();

  const handleChange = (e) => {
    setDetalleOrden({
      ...detalleOrden,
      [e.target.name]: e.target.value,
    });
  };

  const getDetalleOrdenes = () => {
    makeHttpRequest({
      operation: "/detalle_orden/",
      data: null,
      method: "GET",
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data));
          return;
        }
        console.log(data, "Listado de Detalle Ordenes recibido");
        setDetalleOrdenes(data);
      },
    });
  };

  const saveDetalleOrden = () => {
    if (confirm("¿Desea crear este detalle orden?") === false) {
      return;
    }
    console.log(" llega");
    let detalleOrdenToSave = { ...detalleOrden };

    makeHttpRequest({
      operation: "/detalle_orden/",
      data: detalleOrden,
      method: "POST",
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data));
          console.log(data, 'ERROR. NO se ha guardado correctamente')
          return;
        }
        console.log(data, "Ha guardado el detalle orden correctamente");
        resetForm();
        getDetalleOrdenes();
      },
    });
  };
  const setDetalleOrdenDataIntoForm = (detalleOrden) => {
    openModalImperative();
    setDetalleOrden(detalleOrden);
  };

  const updateDetalleOrden = (id) => {
    if (
      confirm("¿Desea actualizar la información de este detalle orden?") ===
      false
    ) {
      return;
    }
    makeHttpRequest({
      operation: `/detalle_orden/${id}`,
      data: detalleOrden,
      method: "PUT",
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data));
          console.log(data, 'ERROR. NO se ha actualizado correctamente')
          return;
        }
        console.log(data, "Detalle Orden se ha actualizado correctamente");
        getDetalleOrdenes();
        resetForm();
      },
    });
  };

  const deleteDetalleOrden = (id) => {
    if (confirm("¿Desea eliminar este detalle orden?") === false) {
      return;
    }

    makeHttpRequest({
      operation: `/detalle_orden/${id}`,
      data: null,
      method: "DELETE",
      callback: ({ ok, data }) => {
        if (!ok) {
          alert(JSON.stringify(data));
          console.log(data, 'ERROR. NO se ha eliminado correctamente')
          return;
        }
        console.log(data, "Detalle Orden se ha eliminado correctamente");
        getDetalleOrdenes();
      },
    });
  };

  const handleCheck = (e) => {
    setDetalleOrden({
      ...detalleOrden,
      available: e.target.checked,
    });
  };

  const resetForm = () => setDetalleOrden({ ...DEFAULT_STATE });

  useEffect(() => {
    getDetalleOrdenes();
  }, []);

  const btnAddModal = useRef();
  const openModalImperative = () => {
    console.log(btnAddModal.current);
    btnAddModal.current.click();
  };
  return (
    <Layout_Admin>
      <div>
        <img src={Fondo1080} className="card-img" height={140} />
      </div>
      <div className="card my-3 mx-4 justify-center">
        <div className="card-header d-flex justify-content-between">
          <h2> Lista de Orden detallada</h2>
          <Modal
            modalTitle={"Datos detalle orden"}
            renderButton={() => (
              <div ref={btnAddModal}>
                <i class="fa-solid fa-plus" />
              </div>
            )}
            renderContent={() => (
              <form className="container" style={{ width: 400 }}>
                <div className="row row-cols-2 mb-1">
                  <div className="col">
                    <label for="number_name" class="form-label">ID detalle</label>

                    <input
                      type="number"
                      name="id"
                      className="form-control mb-2"
                      placeholder="ID Detalle Orden"
                      readOnly={true}
                      value={detalleOrden.id}
                      onChange={handleChange}></input>
                  </div>
                 
                  
                  <div className="col mb-1">
                  <div className="col">
                    <label for="number_name" class="form-label">ID Orden</label>
                    <input
                      type="number"
                      name="orden"
                      className="form-control mb-2"
                      placeholder="ID Orden"
                      value={detalleOrden.orden}
                      onChange={handleChange}
                    ></input>
                  </div>

                  {/* <select
                    type="text"
                    name="orden"
                    className="form-control"
                    value={detalleOrden.orden}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      ID Orden
                    </option>
                    {ordenes.data.map((orden) => (
                      <option value={orden.id}>{orden.id}</option>
                    ))}
                  </select> */}
                </div>

                </div>
                <div className="col mb-1">
                  <label for="user" class="form-label">Cantidad</label>
                  <input
                    type="number"
                    name="number_dish"
                    className="form-control mb-1"
                    placeholder="Cantidad Platos"
                    value={detalleOrden.number_dish}
                    onChange={handleChange}
                  ></input></div>


                <div className="col mb-1">
                  <label for="user" class="form-label">
                    Plato
                  </label>
                  <select
                    type="text"
                    name="plato"
                    className="form-control"
                    value={detalleOrden.plato}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Plato
                    </option>
                    {platos.data.map((plato) => (
                      <option value={plato.id}>{plato.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col mb-1">
                  <label for="user" class="form-label">
                    Producto
                  </label>
                  <select
                    type="text"
                    name="producto"
                    className="form-control"
                    value={detalleOrden.producto}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Producto
                    </option>
                    {productos.data.map((prod) => (
                      <option value={prod.id}>{prod.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-12 text-center my-3 ">
                  {!detalleOrden.id ? (
                    <button
                      type="button"
                      className="col-md-6 btn btn-success"
                      onClick={saveDetalleOrden}
                    >
                      Guardar
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="col-md-6 btn btn-dark"
                      onClick={() => updateDetalleOrden(detalleOrden.id)}
                    >
                      Actualizar
                    </button>
                  )}
                  <button
                    type="button"
                    className="col-md-6 btn btn-light "
                    onClick={resetForm}
                  >
                    Limpiar
                  </button>
                </div>
              </form>
            )}
          />
        </div>

        <div className="card-body text-center">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Cantidad de Platos</th>
                <th scope="col">ID Orden</th>
                <th scope="col">Plato</th>
                <th scope="col">Producto</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {detalleOrdenes.map((detalleOrden) => (
                <tr>
                  <th scope="row">{detalleOrden.id}</th>
                  <td>{detalleOrden.number_dish}</td>
                  <td>{detalleOrden.orden}</td>
                  <td>{getPlatosById(detalleOrden.plato).name}</td>
                  <td>{getProductosById(detalleOrden.producto).name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning btn-xs"
                      onClick={() => setDetalleOrdenDataIntoForm(detalleOrden)}
                    >
                      <i
                        className="fa-solid fa-pen-to-square"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-xs"
                      onClick={() => deleteDetalleOrden(detalleOrden.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout_Admin>
  );
};
