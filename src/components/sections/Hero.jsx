import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ButtonWithHover = ({ children, href, variant = 'primary', onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const primaryStyle = {
      padding: '14px 32px',
      backgroundColor: 'var(--hero-primary-bg, #2563eb)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '10px',
      fontWeight: '600',
      fontSize: '15px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: isHovered ? '0 12px 24px rgba(37, 99, 235, 0.4)' : '0 4px 12px rgba(37, 99, 235, 0.2)'
    };

    const secondaryStyle = {
      padding: '14px 32px',
      border: '2px solid var(--hero-cta-secondary-border)',
      backgroundColor: 'transparent',
      color: 'var(--hero-cta-secondary-text)',
      textDecoration: 'none',
      borderRadius: '10px',
      fontWeight: '600',
      fontSize: '15px',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: isHovered ? '0 12px 24px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.05)'
    };

    const style = variant === 'primary' ? primaryStyle : secondaryStyle;

    return (
      <a
        href={href}
        onClick={onClick}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noreferrer' : undefined}
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
    );
  };

  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--hero-bg)',
      padding: '120px 20px 100px',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, var(--hero-glow-1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'float 6s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-40%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, var(--hero-glow-2) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.22) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.3,
        pointerEvents: 'none'
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '900px',
        textAlign: 'center'
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          marginBottom: '24px',
          animation: 'slideInUp 0.8s ease-out'
        }}>
          <span style={{
            padding: '8px 14px',
            backgroundColor: 'var(--hero-badge-bg)',
            color: 'var(--hero-badge-text)',
            borderRadius: '50px',
            fontSize: '13px',
            fontWeight: '600',
            border: '1px solid var(--hero-badge-border)',
            display: 'inline-block'
          }}>
            ✨ Welcome to my portfolio
          </span>
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: 'clamp(36px, 8vw, 64px)',
          fontWeight: '900',
          lineHeight: '1.15',
          marginBottom: '24px',
          marginTop: '0',
          color: 'var(--text-primary)',
          animation: 'slideInUp 0.8s ease-out 0.1s backwards',
          backgroundImage: 'var(--hero-heading-gradient)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Build intelligent systems that see, think, and act
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          marginBottom: '40px',
          maxWidth: '700px',
          margin: '0 auto 40px',
          animation: 'slideInUp 0.8s ease-out 0.2s backwards'
        }}>
          I'm a roboticist and AI engineer specializing in computer vision, sensor fusion, and autonomous systems.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '60px',
          animation: 'slideInUp 0.8s ease-out 0.3s backwards'
        }}>
          <ButtonWithHover href="#projects" variant="primary">
            View My Work →
          </ButtonWithHover>
          <ButtonWithHover href="https://github.com/rutvikd1" variant="secondary">
            GitHub Profile
          </ButtonWithHover>
        </div>

        {/* Social Links */}  
        <div style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          marginBottom: '60px',
          animation: 'slideInUp 0.8s ease-out 0.4s backwards'
        }}>
          <a href="https://www.linkedin.com/in/rutvik-dagadkhair" target="_blank" rel="noreferrer" style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--hero-icon-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--hero-icon-text)',
            textDecoration: 'none',
            transition: 'all 0.3s',
            fontSize: '20px'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--hero-primary-bg, #2563eb)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--hero-icon-bg)';
            e.currentTarget.style.color = 'var(--hero-icon-text)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            in
          </a>
          <a href="mailto:your.email@example.com" style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--hero-icon-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--hero-icon-text)',
            textDecoration: 'none',
            transition: 'all 0.3s',
            fontSize: '20px'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--hero-primary-bg, #2563eb)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--hero-icon-bg)';
            e.currentTarget.style.color = 'var(--hero-icon-text)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            ✉️
          </a>
          <a href="https://github.com/rutvikd1" target="_blank" rel="noreferrer" style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--hero-icon-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--hero-icon-text)',
            textDecoration: 'none',
            transition: 'all 0.3s',
            fontSize: '20px'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--hero-primary-bg, #2563eb)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--hero-icon-bg)';
            e.currentTarget.style.color = 'var(--hero-icon-text)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            ⚙️
          </a>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-secondary)',
          fontSize: '13px',
          animation: 'slideInUp 0.8s ease-out 0.5s backwards'
        }}>
          <p style={{ margin: 0 }}>Scroll to explore</p>
          <div style={{
            width: '24px',
            height: '32px',
            border: '2px solid var(--hero-scroll-border)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '6px 0',
            animation: 'slideInUp 1.5s ease-in-out 2s infinite'
          }}>
            <div style={{
              width: '3px',
              height: '8px',
              backgroundColor: 'var(--hero-scroll-border)',
              borderRadius: '2px'
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
