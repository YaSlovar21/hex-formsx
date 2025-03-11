import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  SET_USER,
} from "../actions/user";


const initialState = {
  name: null,
  username: null,
  isLoggedIn: false,
  isLoginRequest: false,
  isPasswordReseted: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST : {
      return {
        ...state,
        isLoginRequest: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.name,
        username: action.username,
        isLoggedIn: true,
        isLoginRequest: false,
      };
    }
    case SET_USER: {
      return {
        ...state,
        name: action.name,
        username: action.username,
        isLoggedIn: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        name: action.name,
        username: action.username,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};
