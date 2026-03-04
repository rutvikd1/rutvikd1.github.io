import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Journey from '../components/sections/Journey';
import Expertise from '../components/sections/Expertise';
import Research from '../components/sections/Research';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Hero />
      <About />
      <Journey />
      <Expertise />
      <Research />

      {/* Footer CTA */}
      <div style={{
        padding: '60px 20px',
        textAlign: 'center',
        borderTop: '1px solid #e5e7eb',
        backgroundColor: '#f9fafb'
      }}>
        <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
          Let's work together
        </h3>
        <p style={{ color: '#6b7280', marginBottom: '20px' }}>
          Interested in collaborating? Get in touch via email or social media.
        </p>
        <a href="mailto:rutvik@example.com" style={{
          padding: '12px 28px',
          backgroundColor: '#2563eb',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          display: 'inline-block',
          transition: 'background 0.3s'
        }} onMouseEnter={(e) => e.target.style.background = '#1d4ed8'} onMouseLeave={(e) => e.target.style.background = '#2563eb'}>
          Send me an email
        </a>
      </div>
    </div>
  );
};

export default Home;