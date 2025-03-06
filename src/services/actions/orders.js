import { getOrdersRequest, putCommentRequest } from "../../utils/hexie-api";


//Получение списка заявок от API. Приватно
export const GET_ORDERS_LIST_SUCCESS = 'GET_ORDERS_LIST_SUCCESS';
export const GET_ORDERS_LIST_ERROR = 'GET_ORDERS_LIST_ERROR';
export const GET_ORDERS_LIST_REQUEST = 'GET_ORDERS_LIST_REQUEST';

//добавился комментарий
export const SOME_COMMENT_ADD_REQUEST = 'SOME_COMMENT_ADD_REQUEST';
export const SOME_COMMENT_ADDED = 'SOME_COMMENT_ADDED';
export const SOME_COMMENT_ADD_ERROR = 'SOME_COMMENT_ADD_ERROR';

export const getOrders = () => (dispatch) => { 
    dispatch({
        type: GET_ORDERS_LIST_REQUEST
    });
    getOrdersRequest()
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: GET_ORDERS_LIST_SUCCESS,
                    orders: res.map(item => ({...item, comments: JSON.parse(item.comments)}))
                })
            } else {
                Promise.reject(`Не получилось список заявок orders. Ошибка ${res.status}`)
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: GET_ORDERS_LIST_ERROR,
            })
    });
}


export const putComment = (commentText, orderId) => (dispatch) => {
    dispatch({
        type: SOME_COMMENT_ADD_REQUEST
    })
    putCommentRequest(commentText, orderId)
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: SOME_COMMENT_ADDED,
                    newOrderObj: res
                })
            } else {
                Promise.reject(`Не получилось добавить комментарий к заявке. Ошибка ${res.status}`);
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: SOME_COMMENT_ADD_ERROR,
            })
        });
}