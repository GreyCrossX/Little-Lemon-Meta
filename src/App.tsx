import React from 'react';
import Header from './components/Header/HeaderMain';
import Home from "./components/Intro/Home.js"
import Location from './components/Location/Location.js';
import Order from './components/Order Online/Order.js';
import Reservations from './components/Reservation/reservations.js';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/location' element={<Location />} />
        <Route path='/reservation' element={<Reservations />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </main>
  );
};

export default App;