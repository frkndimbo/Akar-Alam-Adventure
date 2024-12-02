import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Adventures } from './components/Adventures';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Adventures />
      <Team />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;