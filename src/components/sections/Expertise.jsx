import React from 'react';

const Expertise = () => {
  const skills = [
    {
      category: 'Programming',
      skills: ['Python', 'C++', 'JavaScript/TypeScript', 'MATLAB']
    },
    {
      category: 'Computer Vision',
      skills: ['OpenCV', 'PyTorch', 'TensorFlow', 'DeepLabV3+', 'Object Detection']
    },
    {
      category: 'Robotics & Systems',
      skills: ['ROS', 'Sensor Fusion', 'State Estimation', 'Navigation', 'Path Planning']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'CUDA']
    },
    {
      category: 'AI & ML',
      skills: ['Deep Learning', 'Neural Networks', 'Machine Learning', 'Data Analysis']
    },
    {
      category: 'Mathematics',
      skills: ['Linear Algebra', 'Probability', 'Calculus', 'Optimization']
    }
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px'
    }}>
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '800',
          color: '#111827',
          marginBottom: '16px'
        }}>
          Expertise
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          A comprehensive view of my technical skills and competencies
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px'
      }}>
        {skills.map((skillGroup, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '28px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
            transition: 'all 0.3s'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '16px',
              marginTop: 0
            }}>
              {skillGroup.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skillGroup.skills.map((skill, idx) => (
                <span key={idx} style={{
                  backgroundColor: '#eff6ff',
                  color: '#1e40af',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '500',
                  border: '1px solid #bfdbfe'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
