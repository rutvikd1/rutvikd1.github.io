import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ theme, onToggleTheme }) {
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
    { path: '/resume', label: 'Resume' },
    { path: '/#journey', label: 'Journey', isHash: true },
    { path: '/#projects', label: 'Projects', isHash: true },
    { path: '/projects/fallen-tree-detection', label: 'About' }
  ];

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.25s ease',
    backgroundColor: 'var(--nav-bg)',
    color: 'var(--nav-text)',
    borderBottom: '1px solid var(--nav-border)',
    boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
  };

  const linkStyle = (active) => ({
    color: active ? '#2563eb' : 'var(--nav-muted)',
    textDecoration: 'none',
    fontWeight: active ? 700 : 500,
    transition: 'color 0.2s ease'
  });

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <Link to="/" onClick={closeMenu} style={{ fontSize: '20px', fontWeight: '800', color: 'var(--nav-text)', textDecoration: 'none' }}>
          Rutvik D
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {!isMobile ? (
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              {navLinks.map((link) => 
                link.isHash ? (
                  <a key={link.path} href={link.path} onClick={closeMenu} style={linkStyle(false)}>
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.path} to={link.path} onClick={closeMenu} style={linkStyle(isActive(link.path))}>
                    {link.label}
                  </Link>
                )
              )}
            </div>
          ) : null}

          <button
            onClick={onToggleTheme}
            aria-label="Toggle light and dark mode"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'transparent',
              border: '1px solid var(--nav-border)',
              borderRadius: '999px',
              padding: '8px 10px',
              color: 'var(--nav-text)',
              cursor: 'Rutvik'
            }}
          >
            <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
          </button>

          {isMobile ? (
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              style={{
                background: 'transparent',
                border: '1px solid var(--nav-border)',
                borderRadius: '8px',
                padding: '6px 10px',
                color: 'var(--nav-text)',
                cursor: 'pointer'
              }}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          ) : null}
        </div>
      </div>

      {isMobile && isOpen && (
        <div style={{
          borderTop: '1px solid var(--nav-border)',
          backgroundColor: 'var(--nav-bg)',
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