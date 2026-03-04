import React from 'react';

const Journey = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Advanced Research',
      description: 'Focused on advanced robotics research and AI system optimization.'
    },
    {
      year: '2023',
      title: 'Deep Learning Projects',
      description: 'Developed computer vision pipelines using DeepLabV3+ and neural networks.'
    },
    {
      year: '2022',
      title: 'ROS & Sensor Fusion',
      description: 'Built real-time localization systems using ROS and multi-sensor integration.'
    },
    {
      year: '2021',
      title: 'Foundation Work',
      description: 'Started exploring robotics fundamentals and autonomous systems.'
    }
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '800',
          color: '#111827',
          marginBottom: '16px'
        }}>
          My Journey
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          A timeline of key milestones and experiences that shaped my career
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: '#e5e7eb',
          transform: 'translateX(-1px)'
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {milestones.map((milestone, index) => (
            <div key={index} style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'center'
            }}>
              {index % 2 === 0 ? (
                <>
                  <div style={{ flex: 1, textAlign: 'right' }}>
                    <div style={{
                      backgroundColor: 'white',
                      padding: '24px',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
                    }}>
                      <h3 style={{ color: '#2563eb', fontWeight: '700', marginBottom: '8px', marginTop: 0 }}>
                        {milestone.title}
                      </h3>
                      <p style={{ color: '#6b7280', fontSize: '14px', marginTop: 0 }}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#2563eb',
                    borderRadius: '50%',
                    border: '4px solid white',
                    boxShadow: '0 0 0 2px #2563eb',
                    zIndex: 10
                  }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: 0 }}>
                      {milestone.year}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: 0 }}>
                      {milestone.year}
                    </p>
                  </div>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#2563eb',
                    borderRadius: '50%',
                    border: '4px solid white',
                    boxShadow: '0 0 0 2px #2563eb',
                    zIndex: 10
                  }} />
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div style={{
                      backgroundColor: 'white',
                      padding: '24px',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
                    }}>
                      <h3 style={{ color: '#2563eb', fontWeight: '700', marginBottom: '8px', marginTop: 0 }}>
                        {milestone.title}
                      </h3>
                      <p style={{ color: '#6b7280', fontSize: '14px', marginTop: 0 }}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
