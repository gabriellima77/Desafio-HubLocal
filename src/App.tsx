import React from 'react';
import './App.css';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
