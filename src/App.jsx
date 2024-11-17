import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Services from './components/services/services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default App

