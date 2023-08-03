// import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Menu from "./pages/Menu"
import Order from "./pages/Order"
import Conversation from "./pages/Conversation"

function App() {
  return (
    <div className="App">
      <Menu />
        <Routes>
            <Route exact path="/" element={<Dashboard />}/>
            <Route path="/orders" element={<Order />}/>
            <Route path="/conversation" element={<Conversation />}/>
        </Routes>
    </div>
  );
}

export default App;
