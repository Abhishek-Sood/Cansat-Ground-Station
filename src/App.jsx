import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Station from './Station';
import Home from './Home';



export default function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/Station' element={<Station />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
