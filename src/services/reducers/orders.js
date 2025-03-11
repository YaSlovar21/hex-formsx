import { 
    GET_ORDERS_LIST_SUCCESS, 
    GET_ORDERS_LIST_REQUEST,
    SOME_COMMENT_ADDED,
    SOME_FILES_ADDED,
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
} from "../actions/orders";


const initialState = {
    isRequesting: false,
    isOrderAdding: false,
    items: [],
}

function orderArrMapper(orderArr) {
    return orderArr.map(orderObj => ({
        ...orderObj,
        comments: JSON.parse(orderObj.comments),
        files: JSON.parse(orderObj.files) 
    }))
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
        case POST_ORDER_REQUEST: {
            return {
                ...state,
                isOrderAdding: true
            }
        }
        case POST_ORDER_SUCCESS: {
            return {
                ...state,
                isOrderAdding: false,
                items: state.items.filter(item => item.client_id !== action.clientId).concat(orderArrMapper(action.ordersForClientId)).sort((a,b)=> b.id - a.id) 
            }
        }
        case SOME_COMMENT_ADDED: {
            return {
                ...state,
                items: state.items.map((order)=> {
                        if (order.id === action.newOrderObj.id) 
                            return ({...action.newOrderObj, 
                                comments: JSON.parse(action.newOrderObj.comments),
                                files: JSON.parse(action.newOrderObj.files) // может быть парсить на уровне экшна???
                            });
                        else return order;
                    })
            }
        }
        case SOME_FILES_ADDED: {
            return {
                ...state,
                items: state.items.map((order)=> {
                        if (order.id === action.newOrderObj.id) 
                            return ({...action.newOrderObj, 
                                comments: JSON.parse(action.newOrderObj.comments),
                                files: JSON.parse(action.newOrderObj.files) // может быть парсить на уровне экшна???
                            });
                        else return order;
                    })
            }
        }
        default: {
            return state;
        }
    }
}