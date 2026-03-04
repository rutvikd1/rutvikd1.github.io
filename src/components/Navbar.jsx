import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects/nuclear-localization', label: 'Projects' },
    { path: '/projects/fallen-tree-detection', label: 'About' }
  ];

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.25s ease',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.1)',
    color: scrolled ? '#111827' : 'white',
    borderBottom: scrolled ? '1px solid rgba(229, 231, 235, 0.3)' : '1px solid rgba(255,255,255,0.15)',
    boxShadow: scrolled ? '0 4px 14px rgba(0,0,0,0.05)' : 'none'
  };

  const linkStyle = (active) => ({
    color: active ? (scrolled ? '#2563eb' : '#93c5fd') : (scrolled ? '#374151' : 'white'),
    textDecoration: 'none',
    fontWeight: active ? 700 : 500,
    transition: 'color 0.2s ease'
  });

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" onClick={closeMenu} style={{ fontSize: '20px', fontWeight: '800', color: scrolled ? '#111827' : 'white', textDecoration: 'none' }}>
          Rutvik D
        </Link>

        {!isMobile ? (
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} style={linkStyle(isActive(link.path))}>
                {link.label}
              </Link>
            ))}
          </div>
        ) : (
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: '1px solid rgba(107,114,128,0.4)',
              borderRadius: '8px',
              padding: '6px 10px',
              color: scrolled ? '#111827' : 'white',
              cursor: 'pointer'
            }}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {isMobile && isOpen && (
        <div style={{
          borderTop: scrolled ? '1px solid rgba(229, 231, 235, 0.3)' : '1px solid rgba(255,255,255,0.15)',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '10px 16px 14px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={closeMenu} style={linkStyle(isActive(link.path))}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;