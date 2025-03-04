import { GET_CLIENTS_LIST_REQUEST, GET_CLIENTS_LIST_SUCCESS } from "../actions/clients";



const initialState = {
    isRequesting: false,
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
        default: {
            return state;
        }
    }
}