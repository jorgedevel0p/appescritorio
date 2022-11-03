import {
    GET_USERS_LOADING,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    GET_MESAS_LOADING,
    GET_MESAS_SUCCESS,
    GET_MESAS_ERROR,
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


    }
}