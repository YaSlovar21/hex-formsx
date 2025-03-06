import { 
    GET_ORDERS_LIST_SUCCESS, 
    GET_ORDERS_LIST_REQUEST,
    SOME_COMMENT_ADDED,
} from "../actions/orders";


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
        case SOME_COMMENT_ADDED: {
            return {
                ...state,
                items: state.items.map((order)=> {
                        if (order.id === action.newOrderObj.id) 
                            return ({...action.newOrderObj, comments: JSON.parse(action.newOrderObj.comments)});
                        else return order;
                    })
            }
        }
        default: {
            return state;
        }
    }
}