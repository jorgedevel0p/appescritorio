import {
    GET_USERS_LOADING,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    GET_MESAS_LOADING,
    GET_MESAS_SUCCESS,
    GET_MESAS_ERROR,
    GET_PRODUCTOS_LOADING,
    GET_PRODUCTOS_SUCCESS,
    GET_PRODUCTOS_ERROR,
    GET_PROVEEDORES_LOADING,
    GET_PROVEEDORES_SUCCESS,
    GET_PROVEEDORES_ERROR,
    GET_PLATOS_LOADING,
    GET_PLATOS_SUCCESS,
    GET_PLATOS_ERROR,

} from './types'

export default (state, action) => {
    switch(action.type){

        case GET_USERS_LOADING: {
            return {
                ...state,
                users: {
                    ...state.users,
                    fetchingStatus: {
                        loading: true,
                        success: false,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        case GET_USERS_SUCCESS: {
            return {
                ...state,
                users: {
                    ...state.users,
                    data: action.payload,
                    fetchingStatus: {
                        loading: false,
                        success: true,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        
        case GET_MESAS_LOADING: {
            return {
                ...state,
                mesas: {
                    ...state.mesas,
                    fetchingStatus: {
                        loading: true,
                        success: false,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        case GET_MESAS_SUCCESS: {
            return {
                ...state,
                mesas: {
                    ...state.mesas,
                    data: action.payload,
                    fetchingStatus: {
                        loading: false,
                        success: true,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        case GET_PRODUCTOS_LOADING: {
            return {
                ...state,
                productos: {
                    ...state.productos,
                    fetchingStatus: {
                        loading: true,
                        success: false,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        case GET_PRODUCTOS_SUCCESS: {
            return {
                ...state,
                productos: {
                    ...state.productos,
                    data: action.payload,
                    fetchingStatus: {
                        loading: false,
                        success: true,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        case GET_PROVEEDORES_LOADING: {
            return {
                ...state,
                proveedores: {
                    ...state.proveedores,
                    fetchingStatus: {
                        loading: true,
                        success: false,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        case GET_PROVEEDORES_SUCCESS: {
            return {
                ...state,
                proveedores: {
                    ...state.proveedores,
                    data: action.payload,
                    fetchingStatus: {
                        loading: false,
                        success: true,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        case GET_PLATOS_LOADING: {
            return {
                ...state,
                platos: {
                    ...state.platos,
                    fetchingStatus: {
                        loading: true,
                        success: false,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        case GET_PLATOS_SUCCESS: {
            return {
                ...state,
                platos: {
                    ...state.platos,
                    data: action.payload,
                    fetchingStatus: {
                        loading: false,
                        success: true,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }



    }
}