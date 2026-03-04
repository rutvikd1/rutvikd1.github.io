import React from 'react';
import ProjectCard from './ProjectCard';

const Research = () => {
  const projects = [
    {
      title: "Fallen Tree Detection via Drone",
      description: "A deep learning pipeline processing orthomosaic drone images to detect fallen trees with 94%+ accuracy.",
      techStack: ["Python", "DeepLabV3+", "Computer Vision", "OpenCV"],
      projectLink: "/projects/fallen-tree-detection",
      icon: "🛸"
    },
    {
      title: "Nuclear Source Localization",
      description: "Real-time radiation source localization using sensor fusion and state estimation with a mobile scintillator.",
      techStack: ["C++", "ROS", "Sensor Fusion", "Math Modeling"],
      projectLink: "/projects/nuclear-localization",
      icon: "⚛️"
    },
    {
      title: "AI in Clinical Trials",
      description: "Comprehensive analysis of machine learning applications for intelligent clinical trial site selection.",
      techStack: ["Machine Learning", "Data Analysis", "Research"],
      projectLink: "/projects/cmnn-trials",
      icon: "🏥"
    }
  ];

  return (
    <div id="projects" style={{
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
          Featured Projects & Research
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          Exploring the intersection of computer vision, robotics, and machine learning
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '28px'
      }}>
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            techStack={proj.techStack}
            projectLink={proj.projectLink}
            icon={proj.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Research;
