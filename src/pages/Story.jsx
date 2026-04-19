import React, { useEffect, useRef, useState } from 'react';

const storySections = [
  {
    id: 'beginning',
    label: '01',
    title: 'The Beginning',
    teaser: 'Joining Formula Student and learning how a race car is truly built from the ground up.',
  },
  {
    id: 'simulations',
    label: '02',
    title: 'Simulations',
    teaser: 'A set of visual checkpoints showing structural, mechanical, and performance analysis.',
  },
  {
    id: 'achievements',
    label: '03',
    title: 'Achievements',
    teaser: 'What the Formula Student journey added to the team and to my own practice.',
  },
];

const simulationPatches = [
  {
    title: 'Structural validation',
    subtitle: 'Stress and stiffness screenshots',
    accent: '#2563eb',
    size: 'wide',
  },
  {
    title: 'Packaging study',
    subtitle: 'Clearance, routing, and fit checks',
    accent: '#7c3aed',
    size: 'tall',
  },
  {
    title: 'Performance run',
    subtitle: 'Simulation results and iteration notes',
    accent: '#0ea5e9',
    size: 'wide',
  },
];

const achievements = [
  {
    title: 'Designed cleaner assemblies',
    description: 'The design process taught me how to turn disconnected parts into a packaged and maintainable system.',
    accent: '#2563eb',
  },
  {
    title: 'Built a simulation-first workflow',
    description: 'I learned to validate design choices earlier and reduce rework before fabrication.',
    accent: '#7c3aed',
  },
  {
    title: 'Strengthened team collaboration',
    description: 'Working in Formula Student improved communication across design, analysis, and build phases.',
    accent: '#0ea5e9',
  },
  {
    title: 'Developed better engineering discipline',
    description: 'The experience reinforced version control, design iteration, and documentation as real engineering habits.',
    accent: '#14b8a6',
  },
];
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

const computeScrollProgress = (element) => {
  if (!element) {
    return 0;
  }

  const rect = element.getBoundingClientRect();
  const viewport = window.innerHeight || 1;
  const raw = (viewport - rect.top) / (viewport + rect.height);

  return clamp(raw, 0, 1);
};

const StoryPatchStrip = ({ title, eyebrow, cards }) => (
  <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 20px 84px' }}>
    <div style={{ marginBottom: '18px' }}>
      <p style={{ margin: '0 0 8px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
        {eyebrow}
      </p>
      <h3 style={{ margin: 0, fontSize: '28px', lineHeight: 1.08, color: 'var(--text-primary)' }}>{title}</h3>
    </div>

    <div className="patch-strip-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr 1.3fr', gap: '16px' }}>
      {cards.map((card, index) => (
        <div
          key={`${card.title}-${index}`}
          style={{
            position: 'relative',
            minHeight: card.size === 'tall' ? '260px' : '190px',
            borderRadius: '22px',
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${card.accent}22, ${card.accent}08)`,
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.18 }} />
          <div style={{ position: 'absolute', inset: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ margin: 0, fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: card.accent }}>
                Image patch
              </p>
              <h4 style={{ margin: '8px 0 6px', fontSize: '22px', lineHeight: 1.1, color: 'var(--text-primary)' }}>
                {card.title}
              </h4>
              <p style={{ margin: 0, maxWidth: '220px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {card.subtitle}
              </p>
            </div>
            <div style={{ display: 'inline-flex', alignSelf: 'flex-start', padding: '8px 12px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.7)', color: 'var(--text-primary)', fontSize: '12px', fontWeight: 700 }}>
              Drop in your screenshot here
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Story = () => {
  const [activeSection, setActiveSection] = useState(storySections[0].id);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [isWebsitePreviewHovered, setIsWebsitePreviewHovered] = useState(false);
  const [isWebsiteIconHovered, setIsWebsiteIconHovered] = useState(false);
  const simulationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('data-story-section'));
          }
        });
      },
      { threshold: 0.58 }
    );

    document.querySelectorAll('[data-story-section]').forEach((element) => observer.observe(element));

    const updateProgress = () => {
      setSimulationProgress(computeScrollProgress(simulationRef.current));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const activeSectionData = storySections.find((section) => section.id === activeSection) || storySections[0];
  const simulationEase = easeOutCubic(simulationProgress);

  return (
    <div style={{ backgroundColor: 'var(--page-bg)', color: 'var(--text-primary)' }}>
      <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 20px 40px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(620px, 760px)', gap: '24px', alignItems: 'start' }}>
        <div style={{ maxWidth: '860px' }}>
          <p style={{ margin: '0 0 12px', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 800 }}>
            Formula Student scrollytelling
          </p>
          <h1 style={{ fontSize: 'clamp(42px, 7vw, 78px)', lineHeight: 1.02, margin: '0 0 18px', fontWeight: 900 }}>
            From first sketch to assembled car.
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0, maxWidth: '760px' }}>
            This page turns your Formula Student undergraduate experience into a scroll-driven narrative: the beginning, design iterations, simulation images, and a closing achievements section.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '26px' }}>
            {storySections.map((section) => (
              <div
                key={section.id}
                style={{
                  padding: '10px 14px',
                  borderRadius: '999px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: section.id === activeSection ? 'var(--surface-bg)' : 'transparent',
                  boxShadow: section.id === activeSection ? 'var(--card-shadow)' : 'none',
                  color: section.id === activeSection ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontSize: '13px',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                }}
              >
                {section.label} · {section.title}
              </div>
            ))}
          </div>
        </div>

        <aside style={{ position: 'sticky', top: '106px' }}>
          <div
            style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)', backgroundColor: 'var(--surface-bg)', position: 'relative' }}
            onMouseEnter={() => setIsWebsitePreviewHovered(true)}
            onMouseLeave={() => setIsWebsitePreviewHovered(false)}
          >
            <div style={{ aspectRatio: '16 / 9', width: '100%', minHeight: '480px', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
              <iframe
                title="Veloce Racing Homepage"
                src="https://veloceracing.in/"
                style={{ width: 'calc(100% + 24px)', height: 'calc(100% + 24px)', border: 0, marginRight: '-24px', marginBottom: '-24px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                scrolling="yes"
              />

              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-66px',
                  right: '-66px',
                  width: '220px',
                  height: '220px',
                  borderRadius: '999px',
                  pointerEvents: 'none',
                  background: 'radial-gradient(circle, rgba(15, 23, 42, 0.34) 0%, rgba(15, 23, 42, 0.2) 32%, rgba(15, 23, 42, 0) 72%)',
                  opacity: isWebsitePreviewHovered ? 1 : 0,
                  transition: 'opacity 0.22s ease',
                  zIndex: 2,
                }}
              />

              <a
                href="https://veloceracing.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open team website in a new tab"
                onMouseEnter={() => setIsWebsiteIconHovered(true)}
                onMouseLeave={() => setIsWebsiteIconHovered(false)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  textDecoration: 'none',
                  zIndex: 3,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isWebsitePreviewHovered ? '0 12px 24px rgba(15, 23, 42, 0.24)' : '0 8px 16px rgba(15, 23, 42, 0.14)',
                  backdropFilter: 'blur(4px)',
                  opacity: isWebsitePreviewHovered ? 1 : 0,
                  transform: isWebsitePreviewHovered ? 'translateY(0) scale(1)' : 'translateY(-4px) scale(0.9)',
                  transition: 'opacity 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '48px',
                    transform: isWebsiteIconHovered ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(8px)',
                    opacity: isWebsiteIconHovered ? 1 : 0,
                    pointerEvents: 'none',
                    padding: '8px 12px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(15, 23, 42, 0.88)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 12px 24px rgba(15, 23, 42, 0.22)',
                    transition: 'opacity 0.18s ease, transform 0.18s ease',
                  }}
                >
                  Visit the team&apos;s website
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M14 4h6v6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 14L20 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section
        data-story-section="beginning"
        className="story-page-split"
        style={{ maxWidth: '1440px', margin: '0 auto', padding: '16px 20px 84px', display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(320px, 0.85fr)', gap: '28px', alignItems: 'start' }}
      >
        <div>
          <div style={{ padding: '10px 0 22px' }}>
            <p style={{ margin: '0 0 10px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb' }}>
              Chapter 01
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', lineHeight: 1.04, margin: '0 0 12px' }}>
              The beginning
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0, maxWidth: '640px' }}>
              Formula Student was where the story started to feel real: the team, the deadlines, the packaging constraints, the early sketches, and the first sense that every small design choice mattered.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
            {[
              { title: 'Team setup', subtitle: 'The garage, the tasks, the rhythm', accent: '#2563eb' },
              { title: 'First sketches', subtitle: 'Ideas moving from paper to design', accent: '#7c3aed' },
              { title: 'Initial feedback', subtitle: 'Design reviews and iteration', accent: '#0ea5e9' },
            ].map((card) => (
              <div key={card.title} style={{ minHeight: '180px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)', background: `linear-gradient(135deg, ${card.accent}22, ${card.accent}08)` }}>
                <div style={{ position: 'relative', height: '100%', padding: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.66)', border: '1px solid rgba(255,255,255,0.4)' }} />
                  <div>
                    <h3 style={{ margin: '0 0 6px', fontSize: '18px', lineHeight: 1.1, color: 'var(--text-primary)' }}>{card.title}</h3>
                    <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{card.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside style={{ position: 'sticky', top: '106px' }}>
          <div style={{ borderRadius: '28px', padding: '24px', background: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}>
            <p style={{ margin: '0 0 10px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Current section
            </p>
            <h3 style={{ margin: '0 0 8px', fontSize: '28px', lineHeight: 1.05 }}>
              {activeSectionData.title}
            </h3>
            <p style={{ margin: '0 0 18px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {activeSectionData.teaser}
            </p>

            <div style={{ display: 'grid', gap: '10px' }}>
              {storySections.map((section) => (
                <div
                  key={section.id}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '16px',
                    backgroundColor: section.id === activeSection ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#2563eb', marginBottom: '4px' }}>{section.label}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>{section.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '3px', lineHeight: 1.5 }}>{section.teaser}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '18px', height: '6px', borderRadius: '999px', backgroundColor: 'var(--border-color)', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${((storySections.findIndex((section) => section.id === activeSection) + 1) / storySections.length) * 100}%`,
                  height: '100%',
                  borderRadius: '999px',
                  backgroundColor: '#2563eb',
                  transition: 'width 0.35s ease',
                }}
              />
            </div>
          </div>
        </aside>
      </section>

      <StoryPatchStrip
        eyebrow="Between chapters"
        title="Patches of the workshop and design process"
        cards={[
          { title: 'Garage note', subtitle: 'Add a photo patch here', accent: '#2563eb', size: 'wide' },
          { title: 'Design sketch', subtitle: 'Drop in a design capture', accent: '#7c3aed', size: 'tall' },
          { title: 'Build log', subtitle: 'Use this space for a project image', accent: '#0ea5e9', size: 'wide' },
        ]}
      />

      <StoryPatchStrip
        eyebrow="Image patches"
        title="Use these spaces for simulation screenshots"
        cards={simulationPatches}
      />

      <section
        data-story-section="simulations"
        ref={simulationRef}
        className="story-page-split"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '8px 20px 90px', display: 'grid', gridTemplateColumns: 'minmax(0, 0.92fr) minmax(340px, 1.08fr)', gap: '28px', alignItems: 'start' }}
      >
        <div>
          <p style={{ margin: '0 0 10px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0ea5e9' }}>
            Chapter 02
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', lineHeight: 1.04, margin: '0 0 12px' }}>
            Simulations and validation
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-secondary)', margin: '0 0 22px', maxWidth: '640px' }}>
            This section is built to hold your simulation images. You can use it for stress plots, motion studies, packaging checks, or any analysis screenshots that support the Formula Student build story.
          </p>

          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              'Structural checks before fabrication',
              'Packaging studies before the final assembly',
              'Performance and iteration snapshots',
            ].map((item, index) => (
              <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '14px 16px', borderRadius: '18px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '12px', backgroundColor: ['#0ea5e9', '#7c3aed', '#14b8a6'][index] + '18', border: `1px solid ${['#0ea5e9', '#7c3aed', '#14b8a6'][index]}33` }} />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800 }}>{item}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>Replace with an exported simulation screenshot.</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'sticky', top: '106px' }}>
          <div style={{ borderRadius: '28px', padding: '22px', background: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
              <div>
                <p style={{ margin: '0 0 6px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  Simulation gallery
                </p>
                <h3 style={{ margin: 0, fontSize: '24px', lineHeight: 1.08 }}>Visual checkpoints</h3>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 900, color: '#0ea5e9' }}>{Math.round(simulationEase * 100)}%</div>
            </div>

            <div style={{ display: 'grid', gap: '14px' }}>
              {simulationPatches.map((frame, index) => {
                const highlight = Math.round(simulationEase * (simulationPatches.length - 1)) === index;

                return (
                  <div key={frame.title} style={{ minHeight: frame.size === 'tall' ? '220px' : '160px', borderRadius: '22px', overflow: 'hidden', border: highlight ? `1px solid ${frame.accent}55` : '1px solid var(--border-color)', background: `linear-gradient(135deg, ${frame.accent}22, ${frame.accent}08)`, boxShadow: highlight ? `0 16px 32px ${frame.accent}22` : 'var(--card-shadow)' }}>
                    <div style={{ padding: '16px', display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <p style={{ margin: 0, fontSize: '11px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: frame.accent }}>
                          Simulation patch
                        </p>
                        <h4 style={{ margin: '8px 0 6px', fontSize: '18px', color: 'var(--text-primary)' }}>{frame.title}</h4>
                        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{frame.subtitle}</p>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--text-primary)' }}>Add screenshot here</span>
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: frame.accent, boxShadow: `0 0 0 6px ${frame.accent}18` }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <StoryPatchStrip
        eyebrow="Final transition"
        title="A short visual bridge before the closing wins"
        cards={[
          { title: 'Track day prep', subtitle: 'Drop a build photo here', accent: '#14b8a6', size: 'wide' },
          { title: 'Pit notes', subtitle: 'Use this for a race-day image', accent: '#ea580c', size: 'tall' },
          { title: 'Team snapshot', subtitle: 'One more patch before the end', accent: '#2563eb', size: 'wide' },
        ]}
      />

      <section
        data-story-section="achievements"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '8px 20px 60px' }}
      >
        <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
          <p style={{ margin: '0 0 10px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#14b8a6' }}>
            Chapter 03
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', lineHeight: 1.04, margin: '0 0 12px' }}>
            Achievements
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
            End the story with the outcomes of the Formula Student work: the design habits, the assembly thinking, the simulation discipline, and the team skills that followed you into the rest of your projects.
          </p>
        </div>

        <div className="story-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '18px' }}>
          {achievements.map((item) => (
            <div key={item.title} style={{ padding: '22px', borderRadius: '22px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 24px ${item.accent}44`; e.currentTarget.style.borderColor = `${item.accent}66`; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--card-shadow)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: item.accent, marginBottom: '16px', boxShadow: `0 0 0 7px ${item.accent}18` }} />
              <h3 style={{ margin: '0 0 10px', fontSize: '22px', lineHeight: 1.08 }}>{item.title}</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '15px' }}>{item.description}</p>
            </div>
          ))}
          <a href="https://timesofindia.indiatimes.com/city/pune/vit-team-wins-at-national-level-car-racing-competition/articleshow/71226652.cms" target="_blank" rel="noopener noreferrer" style={{ padding: '22px', borderRadius: '22px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 24px #2563eb44'; e.currentTarget.style.borderColor = '#2563eb66'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--card-shadow)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
            <div>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#2563eb', marginBottom: '16px', boxShadow: '0 0 0 7px #2563eb18' }} />
              <h3 style={{ margin: '0 0 10px', fontSize: '22px', lineHeight: 1.08, color: 'var(--text-primary)' }}>📰 Times of India</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '15px' }}>VIT Team Wins National Car Racing Competition</p>
            </div>
          </a>
          <a href="https://formulabharat.com/wp-content/uploads/2025/09/Results_CV_Overall_FormulaBharat2020-2.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: '22px', borderRadius: '22px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 24px #7c3aed44'; e.currentTarget.style.borderColor = '#7c3aed66'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--card-shadow)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
            <div>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#7c3aed', marginBottom: '16px', boxShadow: '0 0 0 7px #7c3aed18' }} />
              <h3 style={{ margin: '0 0 10px', fontSize: '22px', lineHeight: 1.08, color: 'var(--text-primary)' }}>🏆 Formula Bharat 2020</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '15px' }}>Official Results & Competition Overview</p>
            </div>
          </a>
        </div>

        <div style={{ marginTop: '40px', padding: '28px', borderRadius: '24px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}>
          <p style={{ margin: '0 0 20px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            Team Veloce Racing
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://veloceracing.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px 24px', borderRadius: '999px', border: '1px solid var(--border-color)', backgroundColor: 'transparent', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '14px', transition: 'all 0.3s ease', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--surface-bg)'; e.currentTarget.style.borderColor = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 3c2.8 2.5 4.2 5.5 4.2 9S14.8 18.5 12 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 3c-2.8 2.5-4.2 5.5-4.2 9S9.2 18.5 12 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span>Website</span>
            </a>
            <a 
              href="https://www.instagram.com/veloce_racing_india/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px 24px', borderRadius: '999px', border: '1px solid var(--border-color)', backgroundColor: 'transparent', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '14px', transition: 'all 0.3s ease', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--surface-bg)'; e.currentTarget.style.borderColor = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>
            <a 
              href="https://in.linkedin.com/company/team-veloce-racing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px 24px', borderRadius: '999px', border: '1px solid var(--border-color)', backgroundColor: 'transparent', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '14px', transition: 'all 0.3s ease', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--surface-bg)'; e.currentTarget.style.borderColor = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8.2 10.5V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="8.2" cy="8" r="1" fill="currentColor" />
                <path d="M12.1 16v-3.1c0-1.2.8-2 1.9-2s1.8.8 1.8 2V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .patch-strip-grid {
            grid-template-columns: 1fr !important;
          }

          .story-page-split {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 860px) {
          .story-stack {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 720px) {
          .story-grid-mobile {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Story;
