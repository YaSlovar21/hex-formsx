import { BASE_URL, CLIENTS_URL, LOGIN_URL, LOGOUT_URL, ORDERS_URL, USER_URL } from "./constants";

function checkResponseIsOk(res) {
    if(res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export function loginRequest(userName, password) {
    return fetch(`${BASE_URL}${LOGIN_URL}`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
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