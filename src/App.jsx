import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default App;