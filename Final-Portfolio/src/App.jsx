import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutMe, Home } from './Page';

function App() {
 
  return (

    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/view" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
