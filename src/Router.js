import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AirCart from './pages/AirCart/AirCart';
import AirList from './pages/AirList/AirList';
import AirMain from './pages/AirMain/AirMain';
import AirMap from './pages/AirMap/AirMap';
import Login from './pages/Login/Login';
import Redirect from './pages/Redirect';
import Main from './pages/Main';
import Esg from './pages/Esg/Esg';
import AirModal from './pages/AirModal/AirModal';
import Loading from './components/Loading';
import ModalFilterBar from '../src/components/ModalFilterBar';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users/kakao" element={<Redirect />} />
        <Route path="/" element={<Main />} />
        <Route path="/airmain" element={<AirMain />} />
        <Route path="/aircart" element={<AirCart />} />
        <Route path="/airList" element={<AirList />} />
        <Route path="/airmap" element={<AirMap />} />
        <Route path="/esg" element={<Esg />} />
        <Route path="/airmodal" element={<AirModal />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/filter" element={<ModalFilterBar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
