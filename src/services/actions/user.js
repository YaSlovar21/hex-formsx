import { getUserInfoRequest, loginRequest } from "../../utils/hexie-api";

export const SET_USER = 'SET_USER';
export const SET_USER_LOGOUT= 'SET_USER_LOGOUT';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';


export const login = (email, password) => (dispatch) => { 
        dispatch({
            type: LOGIN_REQUEST
        });
        loginRequest(email, password) 
            .then(res =>{
                console.log(res);
                if (res.ok) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        name: `${res.first_name} ${res.last_name}`,
                        username: res.username
                    });
                    /*let accessToken1, refreshToken;
                    accessToken1 = res.accessToken.split('Bearer ')[1];
                    refreshToken = res.refreshToken;
                    setCookie('accessToken', accessToken1);
                    setCookie('refreshToken', refreshToken);*/
                } else {
                    Promise.reject(`Произошла ошибка при попытке регистрации пользователя. Ошибка ${res.status}`)
                }
            })
            .catch(e => {
                console.log(e);
                dispatch({
                    type: LOGIN_ERROR,
                })
            });
    }

export const getUserData = () => (dispatch) => { 
        getUserInfoRequest()
            .then(res => {
                if (res.ok) {
                    dispatch({
                        type: SET_USER,
                        name: `Авторизированный юзер`,
                        username: 'au'
                    });
                } else {
                    Promise.reject(`Произошла ошибка при получении данных пользователя с сервера. Ошибка ${res.status}`)
                }
            })
            .catch(e => console.log(e))
    }

/*
export const logout = () => (dispatch) => { 
        logoutRequest(getCookie('refreshToken') as string)
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: LOGOUT_SUCCESS
                    });
                    deleteCookie();
                } else {
                    Promise.reject(`Произошла ошибка при выходе из профиля. Ошибка ${res.status}`)
                }
            })
            .catch(e => console.log(e));
    }
*/
