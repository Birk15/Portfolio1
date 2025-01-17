import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Services from './components/services/services';
import MyWork from './components/my-work/my-work';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

