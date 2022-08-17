
// import { Router } from 'react-router-dom';
import React,{useState} from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/pages/pages';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Admin from './components/pages/admin';
import Alogin from './components/Admin/Login/ALogin'


function App() {
  
  return (
    <Router>
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
     
     
     <Routes>
     <Route path="/Admin" element={<Admin/>}/>
     <Route path="/admin" element={<Alogin/>}/>
     </Routes>
     </Router>
    
  );
}

export default App;
