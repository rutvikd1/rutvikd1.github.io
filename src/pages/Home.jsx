import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Journey from '../components/sections/Journey';
import Expertise from '../components/sections/Expertise';
import Research from '../components/sections/Research';

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

      <footer style={{ borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--surface-alt)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 20px 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr 0.9fr', gap: '28px' }} className="footer-grid">
            <div>
              <p style={{ margin: '0 0 14px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                Closing Note
              </p>
              <h3 style={{ fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.12, fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 14px' }}>
                Building intelligent systems that connect perception, design, and motion.
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, maxWidth: '620px' }}>
                This portfolio brings together my robotics work, Formula Student experience, and research-oriented projects into one digital space. Explore the highlights, follow the journey, or reach out for collaboration.
              </p>
              <a href="mailto:rutvik@example.com" style={{
                marginTop: '20px',
                padding: '12px 22px',
                backgroundColor: '#2563eb',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                fontWeight: '700',
                display: 'inline-block',
                transition: 'background 0.3s ease'
              }} onMouseEnter={(e) => { e.currentTarget.style.background = '#1d4ed8'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#2563eb'; }}>
                Send me an email
              </a>
            </div>

            <div>
              <p style={{ margin: '0 0 14px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                Quick Links
              </p>
              <div style={{ display: 'grid', gap: '12px' }}>
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Journey', href: '#journey' },
                  { label: 'Research', href: '#projects' },
                  { label: 'Resume', href: '/resume' },
                  { label: 'Veloce Racing', href: 'https://veloceracing.in/' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, width: 'fit-content' }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p style={{ margin: '0 0 14px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                Affiliations
              </p>
              <div style={{ display: 'grid', gap: '12px' }}>
                {[
                  { title: 'Virginia Tech', subtitle: 'Graduate research and robotics work' },
                  { title: 'USL Lab', subtitle: 'Blacksburg, VA' },
                  { title: 'Veloce Racing', subtitle: 'Formula Student team' },
                ].map((item) => (
                  <div key={item.title} style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid var(--border-color)', backgroundColor: 'var(--surface-bg)' }}>
                    <div style={{ fontWeight: 800, color: 'var(--text-primary)' }}>{item.title}</div>
                    <div style={{ marginTop: '4px', color: 'var(--text-secondary)', fontSize: '14px' }}>{item.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '32px', paddingTop: '18px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '13px' }}>
            <span>© 2026 Rutvik D. All rights reserved.</span>
            <span>Built with React and shared as a digital portfolio.</span>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;