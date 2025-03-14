import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueChain from './components/ValueChain';
import GlobalPresence from './components/GlobalPresence';
import Articles from './components/Articles';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <ValueChain />
      <GlobalPresence />
      <Articles />
      <About />
      <Footer />
    </div>
  );
}

export default App;