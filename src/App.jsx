import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './assets/compomenents/contexts/AuthContext';
import Header from './assets/compomenents/header/Header';
import HomePage from './assets/compomenents/pages/homePage/HomePage';
import Index from './assets/compomenents/pages/index/Index';
import Show from './assets/compomenents/pages/show/Show';
import Login from './assets/compomenents/pages/login/Login';
import PrivatePage from './assets/compomenents/middlewares/PrivatePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/lista" element={
            <PrivatePage><Index /></PrivatePage>} />

          <Route path="/lista/:slug" element={
            <PrivatePage><Show /></PrivatePage>} />
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
