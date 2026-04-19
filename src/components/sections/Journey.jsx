import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Journey = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const handleMilestoneClick = (link) => {
    if (!link) {
      return;
    }

    if (link.startsWith('http://') || link.startsWith('https://')) {
      window.open(link, '_blank', 'noopener,noreferrer');
      return;
    }

    navigate(link);
  };
  const milestones = [
    {
      year: 'Current',
      title: 'Research Assistant at Virginia Tech',
      description: 'Corruntly working on advanced robotics research in the field of autonomous navigation and sensor fusion.',
      tag: 'Achievement',
      location: 'Blacksburg, VA',
      icon: '🦅',
      color: '#8b5cf6'
    },
    {
      year: 'October 2025',
      title: 'M.S in Mechanical Engineering (Robotics)',
      description: 'Published research on neural networks and sensor fusion techniques.',
      tag: 'Milestone',
      location: 'Blacksburg, VA',
      icon: '📊',
      color: '#ec4899',
      link: 'https://vtechworks.lib.vt.edu/items/14888685-b89e-426b-a30c-786c1c49a46d'
    },
    {
      year: 'July 2023',
      title: 'Research Intern at the Automotive Research Association of India (ARAI)',
      description: 'Expanded skills to full-stack development with React and modern frameworks.',
      tag: 'Achievement',
      location: 'Pune, India',
      icon: '⚛️',
      color: '#06b6d4'
    },
    {
      year: 'July 2022',
      title: 'B. Tech in Production Engineering',
      description: 'Completed undergraduate studies with a focus on manufacturing processes and automation.',
      tag: 'Milestone',
      location: 'Pune, India',
      icon: '⚛️',
      color: '#06b6d4'
    },
    {
      year: 'July 2022',
      title: 'Project Intern at Tata Technologies',
      description: 'Leading projects and mentoring engineers in robotics and AI systems.',
      tag: 'Achievement',
      location: 'Pune, India',
      icon: '🚀',
      color: '#f59e0b'
    },
    {
      // year: 'July 2022',
      title: 'Vehicle Dynamics Team member at Veloce Racing (Formula Student Team)',
      description: 'Contributed to the design and development of the vehicle dynamics system for a Formula Student car.',
      tag: 'Achievement',
      location: 'Pune, India',
      icon: '🚀',
      color: '#f59e0b',
      link: '/story'
    }
  ];

  const visibleMilestones = isExpanded ? milestones : milestones.slice(0, 3);

  return (
    <section id="journey" style={{
      padding: '100px 20px',
      background: 'linear-gradient(180deg, var(--page-bg) 0%, var(--surface-alt) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: '900',
            color: 'var(--text-primary)',
            margin: '0 0 16px 0',
            backgroundImage: 'linear-gradient(135deg, var(--text-primary) 0%, #2563eb 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            My Journey
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            margin: 0,
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            A timeline of growth, learning, and achievement in robotics and AI
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Center line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #2563eb 0%, #8b5cf6 50%, #ec4899 100%)',
            transform: 'translateX(-1px)',
            '@media (max-width: 768px)': {
              left: '20px'
            }
          }} />

          {/* Timeline items */}
          {visibleMilestones.map((milestone, index) => (
            <div
              key={index}
              style={{
                marginBottom: '60px',
                display: 'flex',
                alignItems: 'center',
                opacity: 0,
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s forwards`,
                gap: '20px'
              }}
            >
              {/* Left side - content for even indices */}
              {index % 2 === 0 ? (
                <div style={{ flex: 1, textAlign: 'left', paddingRight: '40px' }}>
                  <div style={{
                    background: 'var(--surface-bg)',
                    padding: '28px',
                    paddingBottom: '44px',
                    borderRadius: '12px',
                    boxShadow: 'var(--card-shadow)',
                    border: '1px solid var(--border-color)',
                    borderLeft: `4px solid ${milestone.color}`,
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onClick={() => handleMilestoneClick(milestone.link)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = milestone.color;
                    e.currentTarget.style.boxShadow = `0 12px 40px ${milestone.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '12px',
                      color: 'var(--text-secondary)',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      <span style={{ opacity: 0.7 }}>📅</span>
                      <span>{milestone.year}</span>
                    </div>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      margin: '12px 0 8px 0'
                    }}>
                      {milestone.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {milestone.description}
                    </p>
                    {milestone.tag && (
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        fontSize: '12px',
                        fontWeight: '700',
                        color: milestone.color,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}>
                        {milestone.tag}
                      </div>
                    )}
                    {milestone.location && (
                      <div style={{
                        position: 'absolute',
                        left: '16px',
                        bottom: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 8px',
                        borderRadius: '999px',
                        backgroundColor: '#f8fafc',
                        color: '#9ca3af',
                        fontSize: '11px',
                        fontWeight: '500',
                        border: '1px solid var(--border-color)'
                      }}>
                        <span aria-hidden="true">📍</span>
                        <span>{milestone.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div style={{ flex: 1 }} />
              )}

              {/* Center - Timeline dot */}
              <div style={{
                width: '32px',
                height: '32px',
                background: 'var(--surface-bg)',
                border: `4px solid ${milestone.color}`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                boxShadow: '0 0 0 8px var(--page-bg)',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: milestone.color,
                  borderRadius: '50%'
                }} />
              </div>

              {/* Right side - content for odd indices */}
              {index % 2 === 1 ? (
                <div style={{ flex: 1, textAlign: 'left', paddingLeft: '40px' }}>
                  <div style={{
                    background: 'var(--surface-bg)',
                    padding: '28px',
                    paddingBottom: '44px',
                    borderRadius: '12px',
                    boxShadow: 'var(--card-shadow)',
                    border: '1px solid var(--border-color)',
                    borderLeft: `4px solid ${milestone.color}`,
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onClick={() => handleMilestoneClick(milestone.link)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = milestone.color;
                    e.currentTarget.style.boxShadow = `0 12px 40px ${milestone.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '12px',
                      color: 'var(--text-secondary)',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      <span style={{ opacity: 0.7 }}>📅</span>
                      <span>{milestone.year}</span>
                    </div>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      margin: '12px 0 8px 0'
                    }}>
                      {milestone.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {milestone.description}
                    </p>
                    {milestone.tag && (
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        fontSize: '12px',
                        fontWeight: '700',
                        color: milestone.color,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}>
                        {milestone.tag}
                      </div>
                    )}
                    {milestone.location && (
                      <div style={{
                        position: 'absolute',
                        right: '16px',
                        bottom: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 8px',
                        borderRadius: '999px',
                        backgroundColor: '#f8fafc',
                        color: '#9ca3af',
                        fontSize: '11px',
                        fontWeight: '500',
                        border: '1px solid var(--border-color)'
                      }}>
                        <span aria-hidden="true">📍</span>
                        <span>{milestone.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div style={{ flex: 1 }} />
              )}
            </div>
          ))}

          {!isExpanded && milestones.length > 3 && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px', position: 'relative', zIndex: 20 }}>
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 24px',
                  borderRadius: '14px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--surface-bg)',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: 'var(--card-shadow)',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  zIndex: 21
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(37, 99, 235, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                }}
                aria-label="Show more journey milestones"
              >
                <span>Show more</span>
                <span
                  aria-hidden="true"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '1px solid currentColor',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    lineHeight: 1,
                    fontWeight: 900
                  }}
                >
                  ▾
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Journey;