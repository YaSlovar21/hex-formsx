import { 
    GET_CLIENTS_LIST_REQUEST, 
    GET_CLIENTS_LIST_SUCCESS, 
    POST_CLIENT_REQUEST, 
    POST_CLIENT_SUCCESS,
    MODAL_CLIENT_ADD_FORM_OPEN,
    MODAL_CLIENT_ADD_FORM_CLOSE,
} from "../actions/clients";



const initialState = {
    isRequesting: false, //запрос на сервер всех клиентов
    isAddModalOpen: false,
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
                items: action.clients
            };
        }
        case POST_CLIENT_REQUEST: {
            return {
                ...state,
                isAddingNew: true
            }
        }
        case MODAL_CLIENT_ADD_FORM_OPEN: {
            return {
                ...state,
                isAddModalOpen: true
            }
        }
        case MODAL_CLIENT_ADD_FORM_CLOSE: {
            return {
                ...state,
                isAddModalOpen: false
            }
        }
        case POST_CLIENT_SUCCESS: {
            return {
                ...state,
                isAddModalOpen: false,
                isAddingNew: false,
                items: action.clients
            }
        }
        default: {
            return state;
        }
    }
}