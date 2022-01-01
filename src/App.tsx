import React from 'react';
import './App.css';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
