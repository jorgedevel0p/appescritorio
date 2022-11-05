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
    GET_BOLETAS_LOADING,
    GET_BOLETAS_SUCCESS,
    GET_BOLETAS_ERROR,
    GET_FACTURAS_LOADING,
    GET_FACTURAS_SUCCESS,
    GET_FACTURAS_ERROR,
    GET_PEDIDOSPROV_SUCCESS,
    GET_DETALLEORDS_SUCCESS,
    GET_ORDENES_SUCCESS

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

        

        case GET_BOLETAS_SUCCESS: {
            return {
                ...state,
                boletas: {
                    ...state.boletas,
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

        case GET_FACTURAS_SUCCESS: {
            return {
                ...state,
                facturas: {
                    ...state.facturas,
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

        case GET_PEDIDOSPROV_SUCCESS: {
            return {
                ...state,
                pedidos_proveedor: {
                    ...state.pedidos_proveedor,
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

        case GET_DETALLEORDS_SUCCESS: {
            return {
                ...state,
                detalle_ordenes: {
                    ...state.detalle_ordenes,
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

        case GET_ORDENES_SUCCESS: {
            return {
                ...state,
                ordenes: {
                    ...state.ordenes,
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