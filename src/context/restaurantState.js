import React, { useEffect, useReducer } from 'react'
import restaurantReducer from './restaurantReducer'
import RestaurantContext from './restaurantContext'
import { useHttpRequest } from '../hooks/useHttpRequest'

import {
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_MESAS_SUCCESS,
  GET_PRODUCTOS_SUCCESS,
  GET_PROVEEDORES_SUCCESS,
  GET_PLATOS_SUCCESS

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
    getResourcesByName('user').then(res => dispatch({ type: GET_USERS_SUCCESS, payload: res }))
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

  useEffect(() => {
    
    getUsers()
    getMesas()
    getProductos()
    getProveedores(),
    getPlatos()

  }, [])



  return (
    <RestaurantContext.Provider
      value={{
        users: state.users,
        mesas: state.mesas,
        productos: state.productos,
        proveedores: state.proveedores,
        platos: state.platos,
        getUsers,
        getMesas,
        getProductos,
        getProveedores,
        getPlatos,
        getPlatosById,
        getProductosById,
        getProveedoresById,
        getUserById
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantState

