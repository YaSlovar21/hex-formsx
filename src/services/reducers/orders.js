import { GET_ORDERS_LIST_SUCCESS } from "../actions/orders";


const initialState = {
    orders: [],
}

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_LIST_SUCCESS: {
            return {
                ...state,
                orders: action.orders
            };
        }
        default: {
            return state;
        }
    }
}