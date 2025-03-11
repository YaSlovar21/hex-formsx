import { GET_CLIENTS_LIST_REQUEST, GET_CLIENTS_LIST_SUCCESS, POST_CLIENT_REQUEST, POST_CLIENT_SUCCESS } from "../actions/clients";



const initialState = {
    isRequesting: false,
    isAddingNew: false,
    items: [],
}

export const clientssReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLIENTS_LIST_REQUEST: {
            return {
                ...state,
                isRequesting: true,
            };
        }
        case GET_CLIENTS_LIST_SUCCESS: {
            return {
                ...state,
                isRequesting: false,
                items: action.orders
            };
        }
        case POST_CLIENT_REQUEST: {
            return {
                ...state,
                isAddingNew: true
            }
        }
        case POST_CLIENT_SUCCESS: {
            return {
                ...state,
                isAddingNew: false,
                items: action.clients
            }
        }
        default: {
            return state;
        }
    }
}