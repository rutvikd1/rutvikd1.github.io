import React from 'react';
import JuliaBackground from '../JuliaBackground';

const EMAIL = 'rutvik@example.com';
const RESUME_PATH = '/resume';
const FRACTAL_LINK = 'https://www.danbgray.com/blog/Coding/GLSL_/GLSL_3D_Fractals_-_Quaternion_Julia_Sets';

const SKILLS = [
  'MS Robotics',
  'Perception',
  'Sensor Fusion',
  'State Estimation',
  'Computer Vision',
  'Navigation'
];

const Hero = ({ theme }) => {
  const isDark = theme === 'dark';

  const accent      = isDark ? '#22d3ee' : '#0369a1';
  const accentRGB   = isDark ? '34,211,238' : '3,105,161';
  const scrimRGB    = isDark ? '6,11,20' : '240,244,255';

  const chipStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '13px',
    fontWeight: 500,
    color: isDark ? '#cbd5e1' : '#334155',
    padding: '7px 15px',
    border: `1px solid ${isDark ? 'rgba(148,163,184,0.22)' : 'rgba(51,65,85,0.2)'}`,
    borderRadius: '999px',
    background: isDark ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.04)'
  };

  const iconDefaultBg     = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
  const iconDefaultBorder = isDark ? 'rgba(148,163,184,0.28)' : 'rgba(100,116,139,0.3)';
  const iconDefaultColor  = isDark ? '#cbd5e1' : '#4b5563';

  const iconLinkStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: iconDefaultBg,
    border: `1px solid ${iconDefaultBorder}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: iconDefaultColor,
    textDecoration: 'none',
    transition: 'all .25s'
  };

  const hoverIcon = (e, on) => {
    e.currentTarget.style.background    = on ? accent : iconDefaultBg;
    e.currentTarget.style.color         = on ? (isDark ? '#06283a' : '#ffffff') : iconDefaultColor;
    e.currentTarget.style.borderColor   = on ? accent : iconDefaultBorder;
    e.currentTarget.style.transform     = on ? 'translateY(-4px)' : 'translateY(0)';
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh + var(--navbar-height))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: isDark ? '#060b14' : '#f0f4ff',
        fontFamily: "'Poppins', system-ui, sans-serif"
      }}
    >
      <JuliaBackground />

      {/* Central scrim — keeps text legible over the fractal */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: `radial-gradient(ellipse 58% 60% at 50% 48%, rgba(${scrimRGB},${isDark ? '0.86' : '0.90'}) 0%, rgba(${scrimRGB},${isDark ? '0.62' : '0.68'}) 34%, rgba(${scrimRGB},0.18) 62%, rgba(${scrimRGB},0) 78%)`
        }}
      />
      {/* Top/bottom vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: `linear-gradient(180deg, rgba(${scrimRGB},0.55) 0%, rgba(${scrimRGB},0) 22%, rgba(${scrimRGB},0) 74%, rgba(${scrimRGB},0.7) 100%)`
        }}
      />

      <style>{`
        @keyframes heroRise {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroScroll {
          0%   { transform: translateY(0);    opacity: 0; }
          30%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translateY(11px); opacity: 0; }
        }
        .hero-rise { animation: heroRise 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }

        .qj-info { position:absolute; right:22px; bottom:20px; z-index:4; text-decoration:none; display:block; }
        .qj-info__btn {
          width:34px; height:34px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-family:'JetBrains Mono', monospace; font-size:15px; font-style:italic; font-weight:500;
          transition:color .25s, background .25s, border-color .25s; margin-left:auto;
        }
        [data-theme="dark"] .qj-info__btn {
          border:1px solid rgba(148,163,184,0.35);
          background:rgba(10,18,30,0.6); -webkit-backdrop-filter:blur(6px); backdrop-filter:blur(6px);
          color:#9fb4c8;
        }
        [data-theme="dark"] .qj-info:hover .qj-info__btn { color:#06283a; background:#22d3ee; border-color:#22d3ee; }
        [data-theme="light"] .qj-info__btn {
          border:1px solid rgba(100,116,139,0.35);
          background:rgba(240,244,255,0.75); -webkit-backdrop-filter:blur(6px); backdrop-filter:blur(6px);
          color:#475569;
        }
        [data-theme="light"] .qj-info:hover .qj-info__btn { color:#ffffff; background:#0369a1; border-color:#0369a1; }

        .qj-info__pop {
          position:absolute; right:0; bottom:46px; width:250px; padding:14px 16px;
          border-radius:12px; -webkit-backdrop-filter:blur(10px); backdrop-filter:blur(10px);
          opacity:0; transform:translateY(8px); pointer-events:none;
          transition:opacity .25s ease, transform .25s ease; text-align:left;
        }
        [data-theme="dark"] .qj-info__pop {
          background:rgba(10,18,30,0.94);
          border:1px solid rgba(148,163,184,0.22); box-shadow:0 16px 40px rgba(0,0,0,0.45);
        }
        [data-theme="light"] .qj-info__pop {
          background:rgba(240,244,255,0.96);
          border:1px solid rgba(100,116,139,0.25); box-shadow:0 16px 40px rgba(0,0,0,0.12);
        }
        .qj-info:hover .qj-info__pop { opacity:1; transform:translateY(0); }
      `}</style>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '840px', padding: '120px 40px 90px' }}>
        {/* Role eyebrow */}
        <div
          className="hero-rise"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', margin: '0 0 18px' }}
        >
          <span style={{ width: '34px', height: '1px', background: `linear-gradient(90deg, transparent, rgba(${accentRGB},0.65))` }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 500, letterSpacing: '0.26em', color: accent, textTransform: 'uppercase' }}>
            Roboticist · AI Engineer
          </span>
          <span style={{ width: '34px', height: '1px', background: `linear-gradient(90deg, rgba(${accentRGB},0.65), transparent)` }} />
        </div>

        {/* Name */}
        <h1
          className="hero-rise"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(48px, 8.2vw, 88px)',
            fontWeight: 800,
            lineHeight: 1.14,
            letterSpacing: '-0.025em',
            margin: '0 0 16px',
            paddingBottom: '0.06em',
            backgroundImage: isDark
              ? 'linear-gradient(165deg,#ffffff 0%,#d4ecfb 50%,#5cc9ee 100%)'
              : 'linear-gradient(165deg,#0f172a 0%,#1e3a5f 50%,#0369a1 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 2px 34px rgba(${accentRGB},0.22))`,
            animationDelay: '0.06s'
          }}
        >
          Rutvik Dagadkhair
        </h1>

        {/* Tagline */}
        <p
          className="hero-rise"
          style={{
            fontSize: 'clamp(18px, 2.5vw, 27px)',
            fontWeight: 600,
            lineHeight: 1.3,
            color: isDark ? '#e6edf5' : '#1e293b',
            margin: '0 0 22px',
            animationDelay: '0.12s'
          }}
        >
          Building intelligent systems that see, think, and{' '}
          <span
            style={{
              fontStyle: 'italic',
              backgroundImage: isDark
                ? 'linear-gradient(120deg, #22d3ee, #3b82f6)'
                : 'linear-gradient(120deg, #0369a1, #1d4ed8)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            act.
          </span>
        </p>

        {/* Skills row */}
        <div
          className="hero-rise"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '9px', maxWidth: '780px', margin: '0 auto 38px', animationDelay: '0.16s' }}
        >
          {SKILLS.map((s) => (
            <span key={s} style={chipStyle}>{s}</span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="hero-rise"
          style={{ display: 'flex', gap: '14px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px', animationDelay: '0.24s' }}
        >
          <Button href="#projects" variant="primary" isDark={isDark}>
            View my work ↓
          </Button>
          <Button href={RESUME_PATH} variant="secondary" isDark={isDark}>
            Download résumé
          </Button>
        </div>

        {/* Social icons */}
        <div
          className="hero-rise"
          style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center', animationDelay: '0.32s' }}
        >
          <a href="https://www.linkedin.com/in/rutvik-dagadkhair" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            style={iconLinkStyle} onMouseEnter={(e) => hoverIcon(e, true)} onMouseLeave={(e) => hoverIcon(e, false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.12-4 0v5.6h-3v-11h3v1.76c1.4-2.59 7-2.78 7 2.48v6.76z" />
            </svg>
          </a>
          <a href="https://github.com/rutvikd1" target="_blank" rel="noreferrer" aria-label="GitHub"
            style={iconLinkStyle} onMouseEnter={(e) => hoverIcon(e, true)} onMouseLeave={(e) => hoverIcon(e, false)}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z" />
            </svg>
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email"
            style={iconLinkStyle} onMouseEnter={(e) => hoverIcon(e, true)} onMouseLeave={(e) => hoverIcon(e, false)}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Background info box — hover to learn, click to read more */}
      <a className="qj-info" href={FRACTAL_LINK} target="_blank" rel="noreferrer" aria-label="About the background shape">
        <span className="qj-info__pop">
          <span style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '13px', color: isDark ? '#e6edf5' : '#1e293b', marginBottom: '6px' }}>
            The shape behind this page
          </span>
          <span style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '12.5px', lineHeight: 1.55, color: isDark ? '#9fb4c8' : '#475569', marginBottom: '9px' }}>
            A 3D <span style={{ color: isDark ? '#7dd3fc' : '#0369a1' }}>quaternion Julia set</span> — <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.92em' }}>q ↦ q² + c</span>, raymarched live. Quaternions are how robots represent rotation.
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', letterSpacing: '0.04em', color: accent }}>
            Read how it&rsquo;s made →
          </span>
        </span>
        <span className="qj-info__btn">i</span>
      </a>

      {/* Bottom fade — dissolves the fractal into the page background */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '220px',
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, var(--body-bg))'
        }}
      />

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: isDark ? '#7c93a8' : '#64748b'
        }}
      >
        <span style={{ fontSize: '11px', letterSpacing: '0.08em', fontFamily: "'JetBrains Mono', monospace" }}>scroll</span>
        <div style={{ width: '23px', height: '36px', border: `2px solid ${isDark ? '#475569' : '#94a3b8'}`, borderRadius: '13px', display: 'flex', justifyContent: 'center', paddingTop: '7px' }}>
          <div style={{ width: '3px', height: '8px', borderRadius: '2px', background: isDark ? '#94a3b8' : '#64748b', animation: 'heroScroll 1.8s ease-in-out infinite' }} />
        </div>
      </div>
    </div>
  );
};

/* CTA button with hover */
const Button = ({ children, href, variant = 'primary', isDark }) => {
  const [hover, setHover] = React.useState(false);
  const isExternal = href?.startsWith('http');

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '15px 30px',
    textDecoration: 'none',
    borderRadius: '11px',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'transform .25s cubic-bezier(.4,0,.2,1), box-shadow .25s, border-color .25s, background .25s',
    transform: hover ? 'translateY(-3px)' : 'translateY(0)'
  };

  const darkVariants = {
    primary: {
      background: '#22d3ee',
      color: '#06283a',
      fontWeight: 700,
      boxShadow: hover ? '0 14px 32px rgba(34,211,238,0.45)' : '0 6px 22px rgba(34,211,238,0.3)'
    },
    secondary: {
      background: hover ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)',
      color: '#e2e8f0',
      fontWeight: 600,
      border: `1px solid ${hover ? '#22d3ee' : 'rgba(148,163,184,0.32)'}`
    }
  };

  const lightVariants = {
    primary: {
      background: '#0369a1',
      color: '#ffffff',
      fontWeight: 700,
      boxShadow: hover ? '0 14px 32px rgba(3,105,161,0.45)' : '0 6px 22px rgba(3,105,161,0.3)'
    },
    secondary: {
      background: hover ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.04)',
      color: '#1e293b',
      fontWeight: 600,
      border: `1px solid ${hover ? '#0369a1' : 'rgba(100,116,139,0.3)'}`
    }
  };

  const variants = isDark ? darkVariants : lightVariants;

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
};

export default Hero;
