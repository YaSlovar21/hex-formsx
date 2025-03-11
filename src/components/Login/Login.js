
import { CircularProgress } from "@mui/joy";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/actions/user";

import cn from './Login.module.css';

export default function Login(props) {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(store => store.user.isLoggedIn);
  const isLoginRequest = useSelector(store => store.user.isLoginRequest);
  //управляемые поля
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(evt) {
    setUserName(evt.target.value);
  }
  function handlePassChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(login(userName, password))
  }

  
  return (
    <form className={`form form_hidden ${!isLoggedIn && 'form_block' }`} onSubmit={handleSubmit}>
      <h2 className="form__heading">Вход</h2>
      <input
        className="form__input"
        onChange={handleEmailChange}
        type="text"
        placeholder="username"
        required
      />
      <input 
        className="form__input"
        onChange={handlePassChange}
        type="password"
        placeholder="password"
        required
      />
      <button type="submit" className="form__submit">{!isLoginRequest ? 'Войти' : <><CircularProgress color="success" size="sm" /><span>Заходим...</span></>}</button>
    </form>
  );
}