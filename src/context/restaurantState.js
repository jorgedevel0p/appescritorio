import React, { useEffect, useReducer } from 'react'
import restaurantReducer from './restaurantReducer'
import RestaurantContext from './restaurantContext'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { agregarProductosOrdenes, filtrarOrdenesDelDia } from '../utils/MapearOrdenes'

/* const DUMMY_PEDIDOS_DATA = [
  {
      "id": 1,
      "boletas": [
          {
              "id": 1
          }
      ],
      "detalle_ordenes": [
          {
              "id": 1,
              "plato": 1,
              "producto": 3,
              "number_dish": 1
          },
          {
            "id": 2,
            "plato": 1,
            "producto": 3,
            "number_dish": 1
        }
      ],
      "start_time": "19:00:00",
      "end_time": "20:00:00",
      "mesa": 1,
      "date": "2022-12-08T15:00:00Z",
      "number_people": 4,
      "state": true
  },
  {
      "id": 4,
      "boletas": [
          {
              "id": 4
          }
      ],
      "detalle_ordenes": [
          {
              "id": 4,
              "plato": 3,
              "producto": 5,
              "number_dish": 4
          }
      ],
      "start_time": "15:00:00",
      "end_time": "16:00:00",
      "mesa": 4,
      "date": "2022-12-08T15:00:00Z",
      "number_people": 5,
      "state": true
  },
] */

import {
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_MESAS_SUCCESS,
  GET_PRODUCTOS_SUCCESS,
  GET_PROVEEDORES_SUCCESS,
  GET_PLATOS_SUCCESS,
  GET_BOLETAS_SUCCESS,
  GET_FACTURAS_SUCCESS,
  GET_PEDIDOSPROV_SUCCESS,
  GET_DETALLEORDS_SUCCESS,

  GET_ORDENES_LOADING,
  GET_ORDENES_SUCCESS,
  GET_ORDENES_ERROR
} from './types'
// import { stat } from 'original-fs'

const fetchingStatus = {
  loading: false,
  success: false,
  error: false,
  errorInfo: null
}

const INITIAL_STATE = {
  users: {
    data: [],
    fetchingStatus
  },
  proveedores: {
    data: [],
    fetchingStatus
  },
  productos: {
    data: [],
    fetchingStatus
  },
  platos: {
    data: [],
    fetchingStatus
  },
  ordenes: {
    data: [],
    fetchingStatus
  }
}

const RestaurantState = (props) => {
  const [state, dispatch] = useReducer(restaurantReducer, INITIAL_STATE)
  const { makeHttpRequest } = useHttpRequest()

  function getUserById(id) {
    return state.users.data.find(user => user.id === id)
  }

  function getProductosById(id) {
    return state.productos.data.find(producto => producto.id === id)
  }

  function getProveedoresById(id) {
    return state.proveedores.data.find(proveedor => proveedor.id === id)
  }

  function getPlatosById(id) {
    return state.platos.data.find(plato => plato.id === id)
  }

  function getResourcesByName(resource) {
    return new Promise((resolve, reject) => {
      makeHttpRequest({
        operation: `/${resource}/`,
        data: null,
        method: 'GET',
        callback: ({ ok, data }) => {
          if (!ok) reject(new Error('error al obtener datos'))
          console.log(data)
          resolve(data)
        }
      })
    })
  }

  function getUsers(){
    getResourcesByName('user').then(res => dispatch({ type: GET_USERS_SUCCESS, payload: res }, console.log({res})))
  }

  function getMesas(){
    getResourcesByName('mesa').then(res => dispatch({ type: GET_MESAS_SUCCESS, payload: res }))
  }

  function getProductos(){
    getResourcesByName('producto').then(res => dispatch({ type: GET_PRODUCTOS_SUCCESS, payload: res }))
  }

  function getProveedores(){
    getResourcesByName('proveedor').then(res => dispatch({ type: GET_PROVEEDORES_SUCCESS, payload: res }))
  }

  function getPlatos(){
    getResourcesByName('plato').then(res => dispatch({ type: GET_PLATOS_SUCCESS, payload: res }))
  }

  function getBoletas(){
    getResourcesByName('boleta').then(res => dispatch({ type: GET_BOLETAS_SUCCESS, payload: res }))
  }

  function getFacturas(){
    getResourcesByName('factura').then(res => dispatch({ type: GET_FACTURAS_SUCCESS, payload: res }))
  }

  function getPedidosProv(){
    getResourcesByName('pedido_proveedor').then(res => dispatch({ type: GET_PEDIDOSPROV_SUCCESS, payload: res }))
  }

  function getDetalleOrds(){
    getResourcesByName('detalle_orden').then(res => dispatch({ type: GET_DETALLEORDS_SUCCESS, payload: res }))
  }
  
  function getOrdenesClientes(){
    getResourcesByName('orden').then(res => {
      const ordenesDelDia = filtrarOrdenesDelDia(res/* DUMMY_PEDIDOS_DATA */)
      const ordenesConProductos = agregarProductosOrdenes(ordenesDelDia, state.productos.data)
      dispatch({ type: GET_ORDENES_SUCCESS, payload: ordenesConProductos })
    })
  }


  useEffect(() => {
    
    getUsers()
    getMesas()
    getProductos()
    getProveedores(),
    getPlatos()
    getBoletas(),
    getFacturas(),
    getPedidosProv(),
    getDetalleOrds(),

    getPedidosProv()
    // getOrdenesClientes()
  }, [])



  return (
    <RestaurantContext.Provider
      value={{
        users: state.users,
        mesas: state.mesas,
        productos: state.productos,
        proveedores: state.proveedores,
        platos: state.platos,
        boletas: state.boletas,
        facturas: state.facturas,
        pedidos_proveedor: state.pedidos_proveedor,
        detalle_ordenes: state.detalle_ordenes,
        ordenes: state.ordenes,
        getUsers,
        getMesas,
        getProductos,
        getProveedores,
        getPlatos,
        getBoletas,
        getFacturas,
        getPedidosProv,
        getDetalleOrds,
        getPlatosById,
        getProductosById,
        getProveedoresById,
        getUserById,
        getOrdenesClientes
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantState

