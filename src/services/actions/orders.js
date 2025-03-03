import { getOrdersRequest } from "../../utils/hexie-api";


//Получение списка заявок от API. Приватно
export const GET_ORDERS_LIST_SUCCESS = 'GET_ORDERS_LIST_SUCCESS';
export const GET_ORDERS_LIST_ERROR = 'GET_ORDERS_LIST_ERROR';
export const GET_ORDERS_LIST_REQUEST = 'GET_ORDERS_LIST_REQUEST';


export const getOrders = () => (dispatch) => { 
    dispatch({
        type: GET_ORDERS_LIST_REQUEST
    });
    getOrdersRequest()
        .then(res => {
            if (res.ok) {
                console.log(res.body);
            dispatch({
                type: GET_ORDERS_LIST_SUCCESS,
                orders: res.body
            })
            } else {
                Promise.reject(`Не получилось оформить заказ. Ошибка ${res.status}`)
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: GET_ORDERS_LIST_ERROR,
            })
    });
}
