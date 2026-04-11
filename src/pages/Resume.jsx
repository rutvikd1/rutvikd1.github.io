import React from 'react';

const experience = [
  {
    title: 'Research Assistant',
    org: 'Virginia Tech',
    period: 'Current',
    location: 'Blacksburg, VA',
    summary: 'Working on robotics research focused on autonomous navigation, sensor fusion, and practical system integration.',
  },
  {
    title: 'Vehicle Dynamics Team Member',
    org: 'Veloce Racing, Formula Student Team',
    period: 'Formula Student',
    location: 'Pune, India',
    summary: 'Contributed to vehicle dynamics design, CAD-driven development, and the broader Formula Student build process.',
  },
  {
    title: 'Research Intern',
    org: 'Automotive Research Association of India (ARAI)',
    period: 'July 2023',
    location: 'Pune, India',
    summary: 'Expanded technical exposure across analysis, software tools, and engineering workflows in an automotive research setting.',
  },
  {
    title: 'Project Intern',
    org: 'Tata Technologies',
    period: 'July 2022',
    location: 'Pune, India',
    summary: 'Worked on engineering projects and built experience in collaborative delivery and robotics-oriented problem solving.',
  },
];

const projects = [
  {
    title: 'Formula Student Vehicle Dynamics',
    detail: 'Scrollytelling page with CAD assembly animation, simulations, and achievement highlights.',
    link: '/story',
  },
  {
    title: 'Fallen Tree Detection via Drone',
    detail: 'Deep learning pipeline for orthomosaic drone imagery with high-accuracy detection.',
    link: '/projects/fallen-tree-detection',
  },
  {
    title: 'Nuclear Source Localization',
    detail: 'Sensor fusion and state estimation workflow for real-time radiation source localization.',
    link: '/projects/nuclear-localization',
  },
];

const skills = [
  'Robotics',
  'Computer Vision',
  'Sensor Fusion',
  'CAD',
  'FEA / Simulation',
  'React',
  'Python',
  'C++',
  'ROS',
  'Autonomous Systems',
  'Data Analysis',
  'Technical Writing',
];

const education = [
  {
    title: 'M.S. in Mechanical Engineering (Robotics)',
    org: 'Virginia Tech',
    period: 'October 2025',
    location: 'Blacksburg, VA',
  },
  {
    title: 'B.Tech in Production Engineering',
    org: 'Undergraduate Degree',
    period: 'July 2022',
    location: 'Pune, India',
  },
];

const Resume = () => {
  return (
    <div style={{ backgroundColor: 'var(--page-bg)', color: 'var(--text-primary)' }}>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '88px 20px 32px' }}>
        <div
          style={{
            borderRadius: '28px',
            border: '1px solid var(--border-color)',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(124, 58, 237, 0.08))',
            boxShadow: 'var(--card-shadow)',
            padding: '32px',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ maxWidth: '760px' }}>
              <p style={{ margin: '0 0 10px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                Digital Resume
              </p>
              <h1 style={{ margin: '0 0 12px', fontSize: 'clamp(40px, 7vw, 68px)', lineHeight: 1.02 }}>
                Rutvik D.
              </h1>
              <p style={{ margin: '0 0 18px', maxWidth: '720px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                Roboticist and AI engineer focused on computer vision, sensor fusion, autonomous systems, and Formula Student vehicle dynamics.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Robotics', 'Computer Vision', 'Sensor Fusion', 'Formula Student'].map((item) => (
                  <span key={item} style={{ padding: '8px 12px', borderRadius: '999px', border: '1px solid var(--border-color)', backgroundColor: 'var(--surface-bg)', fontSize: '13px', fontWeight: 700 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gap: '12px', minWidth: '260px' }}>
              <a href="mailto:rutvik@example.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid var(--border-color)', backgroundColor: 'var(--surface-bg)', boxShadow: 'var(--card-shadow)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Email</div>
                  <div style={{ marginTop: '4px', fontWeight: 700 }}>rutvik@example.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/rutvik-dagadkhair" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid var(--border-color)', backgroundColor: 'var(--surface-bg)', boxShadow: 'var(--card-shadow)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>LinkedIn</div>
                  <div style={{ marginTop: '4px', fontWeight: 700 }}>linkedin.com/in/rutvik-dagadkhair</div>
                </div>
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                style={{
                  padding: '14px 16px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--surface-bg)',
                  boxShadow: 'var(--card-shadow)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                }}
              >
                Print / Save as PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '24px' }} className="resume-grid">
          <div style={{ display: 'grid', gap: '24px' }}>
            <section style={{ padding: '24px', borderRadius: '24px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}>
              <h2 style={{ margin: '0 0 12px', fontSize: '24px' }}>Summary</h2>
              <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px' }}>
                I build engineering systems that combine mechanical design, robotics, and software. My work spans autonomous systems, computer vision, sensor fusion, and Formula Student development, with a focus on practical implementation and clean iteration.
              </p>
            </section>

            <section style={{ padding: '24px', borderRadius: '24px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}>
              <h2 style={{ margin: '0 0 18px', fontSize: '24px' }}>Experience</h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                {experience.map((item) => (
                  <article key={item.title} style={{ padding: '18px', borderRadius: '18px', border: '1px solid var(--border-color)', backgroundColor: 'rgba(148, 163, 184, 0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                      <div>
                        <h3 style={{ margin: '0 0 4px', fontSize: '18px' }}>{item.title}</h3>
                        <p style={{ margin: 0, color: 'var(--text-secondary)', fontWeight: 700 }}>{item.org}</p>
                      </div>
                      <div style={{ textAlign: 'right', color: 'var(--text-secondary)', fontSize: '13px' }}>
                        <div style={{ fontWeight: 700 }}>{item.period}</div>
                        <div>{item.location}</div>
                      </div>
                    </div>
                    <p style={{ margin: '12px 0 0', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '14px' }}>
                      {item.summary}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section style={{ padding: '24px', borderRadius: '24px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}>
              <h2 style={{ margin: '0 0 18px', fontSize: '24px' }}>Selected Projects</h2>
              <div style={{ display: 'grid', gap: '14px' }}>
                {projects.map((project) => (
                  <a key={project.title} href={project.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ padding: '18px', borderRadius: '18px', border: '1px solid var(--border-color)', backgroundColor: 'rgba(37, 99, 235, 0.04)', transition: 'all 0.25s ease' }}>
                      <div style={{ fontWeight: 800, marginBottom: '6px' }}>{project.title}</div>
                      <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '14px' }}>{project.detail}</div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <div style={{ display: 'grid', gap: '24px' }}>
            <section style={{ padding: '24px', borderRadius: '24px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}>
              <h2 style={{ margin: '0 0 18px', fontSize: '24px' }}>Skills</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.map((skill) => (
                  <span key={skill} style={{ padding: '8px 12px', borderRadius: '999px', backgroundColor: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.16)', color: 'var(--text-primary)', fontSize: '13px', fontWeight: 700 }}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section style={{ padding: '24px', borderRadius: '24px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}>
              <h2 style={{ margin: '0 0 18px', fontSize: '24px' }}>Education</h2>
              <div style={{ display: 'grid', gap: '14px' }}>
                {education.map((item) => (
                  <article key={item.title} style={{ padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', backgroundColor: 'rgba(148, 163, 184, 0.06)' }}>
                    <div style={{ fontWeight: 800, marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{item.org}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section style={{ padding: '24px', borderRadius: '24px', backgroundColor: 'var(--surface-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}>
              <h2 style={{ margin: '0 0 12px', fontSize: '24px' }}>Contact</h2>
              <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '15px' }}>
                Open to robotics, autonomy, and engineering design opportunities.
              </p>
              <div style={{ display: 'grid', gap: '10px', marginTop: '16px' }}>
                <a href="mailto:rutvik@example.com" style={{ color: '#2563eb', fontWeight: 800, textDecoration: 'none' }}>rutvik@example.com</a>
                <a href="https://www.linkedin.com/in/rutvik-dagadkhair" target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 800, textDecoration: 'none' }}>LinkedIn Profile</a>
                <a href="/story" style={{ color: '#2563eb', fontWeight: 800, textDecoration: 'none' }}>Formula Student Story</a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .resume-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media print {
          nav,
          button,
          .no-print {
            display: none !important;
          }

          body {
            background: white !important;
          }

          #root,
          main {
            background: white !important;
          }

          a {
            color: inherit !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
