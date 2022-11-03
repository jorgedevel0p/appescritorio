import React, { useEffect, useReducer } from 'react'
import restaurantReducer from './restaurantReducer'
import RestaurantContext from './restaurantContext'
import { useHttpRequest } from '../hooks/useHttpRequest'

import {
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_MESAS_SUCCESS
} from './types'

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
  proveedores: null,
  productos: null
}

const RestaurantState = (props) => {
  const [state, dispatch] = useReducer(restaurantReducer, INITIAL_STATE)
  const { makeHttpRequest } = useHttpRequest()

  function getUserById(id) {
    return state.users.data.find(user => user.id === id)
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

  useEffect(() => {
    
    getUsers()
    getMesas()

  }, [])



  return (
    <RestaurantContext.Provider
      value={{
        users: state.users,
        mesas: state.mesas,
        getUsers,
        getMesas,
        getUserById
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantState

