import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import RoomsPage from './pages/RoomsPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
console.log('App loaded');

export default App;
