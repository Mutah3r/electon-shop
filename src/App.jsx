import React, { createContext } from 'react';
import Header from './components/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css'

export const ProductsContext = createContext([]);

const App = () => {
  const products = useLoaderData();

  return (
    <div>
      <ProductsContext.Provider value={products}>
        <Header />
        <Navbar />
        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </ProductsContext.Provider >
    </div>
  );
};

export default App;