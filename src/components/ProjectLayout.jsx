import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectLayout = ({
  isModal = false,
  isOpen = true,
  onClose,
  title,
  subtitle,
  techStack = [],
  metaDetails = [],
  image,
  githubLink,
  pdfLink,
  children
}) => {
  // Prevent body scrolling when the modal is open
  useEffect(() => {
    if (isModal && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModal, isOpen]);

  if (isModal && !isOpen) return null;

  const themedCardStyle = {
    backgroundColor: 'var(--surface-bg)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--card-shadow)',
    borderRadius: '16px',
  };

  const mutedTextStyle = {
    color: 'var(--text-secondary)',
  };

  // Shared inner contents (header, banner, content grid, metadata sidebar)
  const LayoutContent = () => (
    <>
      {/* Header Title Section */}
      <header className="mb-10 pb-8 pr-12" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{
                backgroundColor: 'var(--hero-badge-bg)',
                color: 'var(--hero-badge-text)',
                border: '1px solid var(--hero-badge-border)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)', lineHeight: 1.15 }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg leading-relaxed max-w-3xl" style={mutedTextStyle}>
            {subtitle}
          </p>
        )}
      </header>

      {/* Hero image banner */}
      {image && (
        <div className="w-full overflow-hidden shadow-md mb-10" style={{ borderRadius: '14px', border: '1px solid var(--border-color)' }}>
          <img src={image} alt={title} className="w-full h-auto max-h-[380px] object-cover" />
        </div>
      )}

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Column: Case Study/Report Contents */}
        <div className="lg:col-span-2 space-y-8 leading-relaxed text-[15.5px]">
          {children}
        </div>

        {/* Right Column: Metadata Sidebar */}
        <div className="space-y-6 lg:sticky lg:top-24">
          <div className="p-5" style={themedCardStyle}>
            <h3 className="text-md font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Project Metadata
            </h3>
            <div className="space-y-3">
              {metaDetails.map((detail, index) => (
                <div
                  key={index}
                  style={{
                    borderBottom: index === metaDetails.length - 1 ? 'none' : '1px solid var(--border-color)',
                    paddingBottom: index === metaDetails.length - 1 ? '0' : '10px',
                  }}
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>
                    {detail.label}
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {(githubLink || pdfLink) && (
            <div className="p-5" style={themedCardStyle}>
              <h3 className="text-md font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Resources
              </h3>
              <p className="text-xs mb-3" style={mutedTextStyle}>
                Explore the source code or download report sheets.
              </p>
              <div className="space-y-2">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 font-semibold py-2 px-4 rounded-lg transition-all"
                    style={{
                      backgroundColor: 'var(--hero-primary-bg)',
                      color: '#ffffff',
                      border: 'none',
                      textAlign: 'center',
                      textDecoration: 'none',
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    View Source Code
                  </a>
                )}
                {pdfLink && (
                  <a
                    href={pdfLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 font-semibold py-2 px-4 rounded-lg transition-all"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'var(--hero-cta-secondary-text)',
                      border: '2px solid var(--hero-cta-secondary-border)',
                      textAlign: 'center',
                      textDecoration: 'none',
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    View PDF Report
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

  // Modal View Overlay
  if (isModal) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
        onClick={onClose}
      >
        <style>{`
          @keyframes modalSlideUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .modal-container-anim {
            animation: modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .modal-close-btn:hover {
            background-color: var(--border-color) !important;
            transform: rotate(90deg);
          }
        `}</style>

        <div
          className="modal-container-anim w-full max-w-5xl h-[85vh] max-h-[850px] flex flex-col relative"
          style={{
            backgroundColor: 'var(--page-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
            overflow: 'hidden',
            color: 'var(--text-primary)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1010 }}>
            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close project modal"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--surface-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 md:px-10 py-10" style={{ scrollbarWidth: 'thin' }}>
            <LayoutContent />
          </div>
        </div>
      </div>
    );
  }

  // Standalone Full Page View
  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-6">
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '600',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
        >
          <span>←</span> Back to Overview
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <LayoutContent />
      </div>
    </div>
  );
};

export default ProjectLayout;
