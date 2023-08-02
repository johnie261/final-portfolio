import React from 'react';

import './App.scss'
import { About, Footer, Home, Skills, Work } from './container';

function App() {

  return (
    <div className="app">
      <Home />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
