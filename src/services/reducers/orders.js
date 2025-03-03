import { GET_ORDERS_LIST_SUCCESS, GET_ORDERS_LIST_REQUEST } from "../actions/orders";


const initialState = {
    isRequesting: false,
    items: [],
}

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_LIST_REQUEST: {
            return {
                ...state,
                isRequesting: true,
            };
        }
        case GET_ORDERS_LIST_SUCCESS: {
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