import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { login } from '../../utils/utils';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import ControlledOpenSpeedDial from '../_details/SpeedDial/SpeedDial';

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
    <div className="content">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
      <ControlledOpenSpeedDial />
    </div>
  );  
}

export default App;
