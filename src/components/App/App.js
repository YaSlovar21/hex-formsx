import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getClients } from '../../services/actions/clients';
import { getOrders } from '../../services/actions/orders';
import { getUserData } from '../../services/actions/user';

import Header from '../Header/Header';
import ProtectedRouteFromAuth from '../HOC/ProtectedRouteFromAuth';
import ProtectedRouteWithAuth from '../HOC/ProtectedRouteWithAuth';
import Home from '../Home/Home';
import Login from '../Login/Login';

import ControlledOpenSpeedDial from '../_details/SpeedDial/SpeedDial';

import './App.css';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUserData());
    dispatch(getOrders());
    dispatch(getClients())
  }, []);



  return (
    <div className="content">
      
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRouteWithAuth element={<Home />} />} />
        <Route path="/login" element={<ProtectedRouteFromAuth element={<Login/>}/> } />
      </Routes>
      <ControlledOpenSpeedDial />
    </div>
  );  
}

export default App;
