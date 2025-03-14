import { NoteAlt } from "@mui/icons-material";
import { BASE_URL, CLIENTS_URL, LOGIN_URL, LOGOUT_URL, ORDERS_URL, USER_URL } from "./constants";

function checkResponseIsOk(res) {
    if(res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export function loginRequest(org, userName, password) {
    return fetch(`${BASE_URL}${LOGIN_URL}`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        org: org,
        username: userName,
        password: password
      }),
      headers: {
        // Добавляем необходимые заголовки
        "Authorization": "Bearer 234",
        'Content-Type': 'application/json',
      },
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export function logoutRequest() {
    return fetch(`${BASE_URL}${LOGOUT_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Authorization": "Bearer 234",
            'Content-Type': 'application/json',
        },
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export const getUserInfoRequest = () => {
    return fetch(`${BASE_URL}${USER_URL}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            "Authorization": "Bearer 234",
        }
    }).then((res)=> {
        return checkResponseIsOk(res);
    });
}

export const getOrdersRequest = () => {
    return fetch(`${BASE_URL}${ORDERS_URL}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            "Authorization": "Bearer 234",
        }
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export const postOrderRequest = (clientId, orderText) => {
    return fetch(`${BASE_URL}${ORDERS_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer 234",
        },
        body: JSON.stringify({
            clientId,
            orderText
        })    
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export const patchOrderWithNewManOfClientRequest = ( orderId, newManId) => {
    return fetch(`${BASE_URL}${ORDERS_URL}/${orderId}/manager`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer 234",
        },
        body: JSON.stringify({
            newManId,
        })    
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export const getClientsRequest = () => {
    return fetch(`${BASE_URL}${CLIENTS_URL}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            "Authorization": "Bearer 234",
        }
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export const postClientRequest = (nameOfClient, email, tel, note) => {
    return fetch(`${BASE_URL}${CLIENTS_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer 234",
        },
        body: JSON.stringify({
            name_of_client: nameOfClient,
            central_email: email,
            central_tel: tel,
            note: note
        })    
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export const postManagerOfClientRequest = (clientId, fio, email, tel, comment) =>{
    return fetch(`${BASE_URL}${CLIENTS_URL}/${clientId}/managers`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer 234",
        },
        body: JSON.stringify({
            fio,
            email,
            tel,
            comment
        })    
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export const putCommentRequest = (commentText, orderId) => {
    return fetch(`${BASE_URL}/orders/${orderId}/comments`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer 234",
        },
        body: JSON.stringify({
            commentText: commentText
        })
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}

export const filesUploadRequest = (orderId, formData) => {
    return fetch(`${BASE_URL}/orders/${orderId}/files`, {
        method: 'POST',
        body: formData, 
        credentials: 'include',
        headers: {
          "Authorization": "Bearer 234",
        }
    }).then((res)=> {
        return checkResponseIsOk(res);
    })
}