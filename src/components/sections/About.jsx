import React from 'react';

const About = () => {
  return (
    <div id="about" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '800',
          color: 'var(--text-primary)',
          marginBottom: '20px'
        }}>
          About Me
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: 'var(--surface-alt)',
          borderRadius: '12px',
          padding: '40px',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-secondary)'
        }}>
          <p style={{ fontSize: '16px', fontWeight: '500' }}>Photo or profile image</p>
        </div>

        <div>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '20px'
          }}>
            I'm a passionate roboticist and AI engineer with expertise in computer vision, sensor fusion, and autonomous systems. My work focuses on solving real-world problems at the intersection of perception and decision-making.
          </p>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '20px'
          }}>
            With a strong background in mathematics and software engineering, I tackle complex challenges in localization, object detection, and intelligent automation. I'm particularly interested in making robots smarter and more autonomous.
          </p>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8'
          }}>
            When I'm not coding or building systems, you'll find me exploring new research papers, contributing to open-source projects, or experimenting with new technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
