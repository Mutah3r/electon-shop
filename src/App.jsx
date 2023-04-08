import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;