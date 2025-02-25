import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { login } from '../../utils/utils';
import Home from '../Home/Home';
import Login from '../Login/Login';

import './App.css';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  function handleLogin(userName, pass) {
    login(userName, pass)
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        setUserData(res);
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
