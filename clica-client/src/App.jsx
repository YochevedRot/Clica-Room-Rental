 
import React, { useState } from 'react';
import './App.css'
import { getBusinessData, getMeetings, getServices, setServices } from './store/server.js';
import UserHome from './components/User/UserHome.jsx';
import AdminPage from './components/Login/AdminPage.jsx';
import { Outlet, Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MyRouter from './Routs.jsx';


function App() {

 getBusinessData();
 getServices();
 getMeetings();
  
  return (
    <>
    <MyRouter/>
    </>
    
  );
}

export default App;