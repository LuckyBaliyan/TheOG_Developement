import { useState } from 'react'
import React, { Component } from 'react'
import { Q1 } from './components/Q1';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './ui/Navigation/Nav';
import NotFound from './Erros/NotFound';

const App = ()=>{
  return(
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      {/* Handle Wrong Url navigations using a comman page not Found component */}
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
