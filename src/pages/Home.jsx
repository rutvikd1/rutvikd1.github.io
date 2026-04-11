import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Journey from '../components/sections/Journey';
import Expertise from '../components/sections/Expertise';
import Research from '../components/sections/Research';
import Footer from '../components/Footer';

const Home = ({scrollToSection}) => {
  return (
    <div style={{ backgroundColor: 'var(--page-bg)', color: 'var(--text-primary)' }}>
      <div style={{ marginTop: '-82px' }}>
        <Hero />
      </div>
      <About />
      <Journey />
      <Expertise />
      <div id="projects">
        <Research />
      </div>

      <Footer />
    </div>
  );
};

export default Home;