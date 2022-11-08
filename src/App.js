import React, { useEffect, useState } from 'react';
import './styles/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';

import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import Header from './components/Header';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  });

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Header />
        <Navbar />

        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
