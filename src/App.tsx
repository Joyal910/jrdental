import React from 'react';
import UtilityStrip from './components/UtilityStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="font-dm-sans">
      <UtilityStrip />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Reviews />
        <Contact />
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}
export default App;