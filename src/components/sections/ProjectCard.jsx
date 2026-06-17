import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, icon, techStack, projectLink, image, ctaLabel = 'View Case Study' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExternalLink = typeof projectLink === 'string' && /^https?:\/\//i.test(projectLink);

  const CardContent = () => (
    <div
      style={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: isHovered ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
        border: '2px solid rgba(255, 255, 255, 0.14)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: isHovered ? 10 : 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ padding: '22px 24px 16px' }}>
        {icon && !image && (
          <div style={{ fontSize: '36px', marginBottom: '14px' }}>{icon}</div>
        )}

        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '12px',
          marginTop: 0
        }}>
          {title}
        </h3>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {techStack.map((tech, index) => (
            <span
              key={index}
              style={{
                backgroundColor: 'var(--hero-badge-bg)',
                color: 'var(--hero-badge-text)',
                padding: '4px 10px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid var(--hero-badge-border)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {image ? (
        <div style={{ padding: '0 0 18px', display: 'flex' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            overflow: 'hidden',
            borderRadius: '0',
            backgroundColor: 'var(--surface-alt)',
            borderTop: '1px solid var(--border-color)',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <img
              src={image}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 0.35s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.02) 0%, rgba(15, 23, 42, 0.28) 100%)'
            }} />
          </div>
        </div>
      ) : null}

      <div style={{ padding: image ? '0 24px 24px' : '0 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          marginBottom: '20px',
          marginTop: 0,
          flex: 1
        }}>
          {description}
        </p>

        <div style={{
          color: '#2563eb',
          fontWeight: '600',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          {ctaLabel}
          <span style={{
            transition: 'transform 0.3s',
            display: 'inline-block',
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
          }}>
            →
          </span>
        </div>
      </div>
    </div>
  );

  return isExternalLink ? (
    <a href={projectLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardContent />
    </a>
  ) : (
    <Link to={projectLink} style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardContent />
    </Link>
  );
};

export default ProjectCard;