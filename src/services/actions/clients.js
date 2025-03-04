import { getClientsRequest } from "../../utils/hexie-api";


//Получение списка заявок от API. Приватно
export const GET_CLIENTS_LIST_SUCCESS = 'GET_CLIENTS_LIST_SUCCESS';
export const GET_CLIENTS_LIST_ERROR = 'GET_CLIENTS_LIST_ERROR';
export const GET_CLIENTS_LIST_REQUEST = 'GET_CLIENTS_LIST_REQUEST';


export const getClients = () => (dispatch) => { 
    dispatch({
        type: GET_CLIENTS_LIST_REQUEST
    });
    getClientsRequest()
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: GET_CLIENTS_LIST_SUCCESS,
                    orders: res
                })
            } else {
                Promise.reject(`Не получилось список заявок orders. Ошибка ${res.status}`)
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: GET_CLIENTS_LIST_ERROR,
            })
    });
}
