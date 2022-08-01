import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AirCart from './pages/AirCart';
import AirList from './pages/AirList';
import AirMain from './pages/AirMain';
import AirMap from './pages/AirMap';
import Login from './pages/Login';
import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/airmain" element={<AirMain />} />
        <Route path="/aircart" element={<AirCart />} />
        <Route path="/airlist" element={<AirList />} />
        <Route path="/airmap" element={<AirMap />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
