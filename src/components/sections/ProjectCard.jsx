import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, icon, techStack, projectLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={projectLink} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          backgroundColor: 'var(--surface-bg)',
          borderRadius: '12px',
          padding: '28px',
          boxShadow: isHovered ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
          border: '1px solid var(--border-color)',
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
        {/* Icon */}
        {icon && (
          <div style={{ fontSize: '36px', marginBottom: '16px' }}>
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '12px',
          marginTop: 0
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.5',
          marginBottom: '20px',
          flex: 1
        }}>
          {description}
        </p>

        {/* Tech Stack */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {techStack.map((tech, index) => (
            <span
              key={index}
              style={{
                backgroundColor: '#eff6ff',
                color: '#1e40af',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '500',
                border: '1px solid #bfdbfe'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{
          color: '#2563eb',
          fontWeight: '600',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          View Case Study
          <span style={{
            transition: 'transform 0.3s',
            display: 'inline-block',
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
          }}>
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;