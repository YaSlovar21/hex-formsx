import { getClientsRequest, postClientRequest } from "../../utils/hexie-api";


//Получение списка клиентов от API. Приватно
export const GET_CLIENTS_LIST_SUCCESS = 'GET_CLIENTS_LIST_SUCCESS';
export const GET_CLIENTS_LIST_ERROR = 'GET_CLIENTS_LIST_ERROR';
export const GET_CLIENTS_LIST_REQUEST = 'GET_CLIENTS_LIST_REQUEST';

export const POST_CLIENT_SUCCESS = 'POST_CLIENT_SUCCESS';
export const POST_CLIENT_ERROR = 'POST_CLIENT_ERROR';
export const POST_CLIENT_REQUEST = 'POST_CLIENT_REQUEST';

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

export const postClient = ({nameOfClient, email, tel, note}) => (dispatch) => {
    dispatch({
        type: POST_CLIENT_REQUEST
    });
    postClientRequest(nameOfClient, email, tel, note)
        .then(res => {
            if (res) {
                console.log(res);
                dispatch({
                    type: POST_CLIENT_SUCCESS,
                    clients: res //новый список клиентов, не забыть что надо промаппить изза managerOfClient
                })
            } else {
                Promise.reject(`Не получилось список заявок orders. Ошибка ${res.status}`)
            }
        })
        .catch(e => {
            console.log(e);
            dispatch({
                type: POST_CLIENT_ERROR,
            })
    });
}