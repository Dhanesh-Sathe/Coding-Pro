import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import Footer from './components/Footer';
import MentorSection from './components/MentorSection';
import AppPromotion from './components/AppPromotion';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <MentorSection />
      <AppPromotion />
      <Footer />
    </div>
  );
};

export default App;
