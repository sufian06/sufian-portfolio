import React from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Hero from '../../components/Hero/Hero';
import Portfolio from '../../components/Portfolio/Portfolio';
import Skills from '../../components/Skills/Skills';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;