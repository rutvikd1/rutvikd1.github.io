import React from 'react';
import ProjectCard from './ProjectCard';

const Research = () => {
  const projects = [
    {
      title: "Object Detection with SSD",
      description: "A computer vision project using SSD with a 7-layer backbone to detect objects in real time, with an animated inference preview on the tile.",
      techStack: ["Python", "Tensorflow", "SSD", "Object Detection"],
      projectLink: "https://github.com/rutvikd1/Object-Detection",
      image: "https://raw.githubusercontent.com/rutvikd1/Object-Detection/main/experiments/ssd-7layers/inference/output.gif",
      icon: "🤖",
      ctaLabel: "Open GitHub Repo"
    },
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
      title: "RF Localization",
      description: "Radio-frequency source localization and mapping using a drone-mounted payload.",
      techStack: ["C++", "ROS", "Localization", "Robotics"],
      projectLink: "https://github.com/rutvikd1/RF_localization",
      image: "https://raw.githubusercontent.com/rutvikd1/RF_localization/main/images/Drone_with_payload.jpeg",
      ctaLabel: "Open GitHub Repo"
    },
    {
      title: "Formula Student Vehicle Dynamics",
      description: "A scrollytelling journey through my Formula Student experience: CAD design, scroll-driven assembly animations, simulations, and achievements as a Vehicle Dynamics team member at Veloce Racing.",
      techStack: ["CAD Design", "React", "Scroll Animation", "FEA Simulations"],
      projectLink: "/story",
      icon: "🏎️"
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
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '80px 20px',
      backgroundColor: 'var(--surface-alt)'
    }}>
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '800',
          color: 'var(--text-primary)',
          marginBottom: '16px'
        }}>
          Featured Projects & Research
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          Exploring the intersection of computer vision, robotics, and machine learning
        </p>
      </div>

      <div className="research-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '40px',
        rowGap: '80px'
      }}>
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            title={proj.title}
            description={proj.description}
            techStack={proj.techStack}
            projectLink={proj.projectLink}
            icon={proj.icon}
            image={proj.image}
            ctaLabel={proj.ctaLabel}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .research-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            row-gap: 80px !important;
          }
        }
        @media (max-width: 768px) {
          .research-grid {
            grid-template-columns: 1fr !important;
            row-gap: 60px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Research;
