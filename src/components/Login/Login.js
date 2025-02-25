
import React, { useState } from "react";

import cn from './Login.module.css';

export default function Login(props) {
  //props.handleRegister - обработчик с APP
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
    props.handleLogin(userName, password);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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
        placeholder="Password"
        required
      />
      <button 
        type="submit" 
        className="form__submit"
      >
        Войти    
      </button>
      
    </form>
  );
}