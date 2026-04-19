import React from 'react';
// Assuming you install react-katex: npm install react-katex katex
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const NuclearLocalization = () => {
  const themedCardStyle = {
    backgroundColor: 'var(--surface-bg)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--card-shadow)',
  };

  const mutedTextStyle = {
    color: 'var(--text-secondary)',
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16" style={{ color: 'var(--text-primary)' }}>
      
      {/* 1. Header Section */}
      <header className="mb-12 pb-8" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Nuclear Source Localization
        </h1>
        <p className="text-xl leading-relaxed mb-6" style={mutedTextStyle}>
          Developing an estimator to localize a radiation source using a single mobile scintillator detector.
        </p>
        <div className="flex flex-wrap gap-2">
          {['C++', 'ROS', 'Sensor Fusion', 'State Estimation'].map(tech => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm font-semibold"
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
      </header>

      {/* 2. Abstract / Problem Statement */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>The Challenge</h2>
        <p className="leading-relaxed mb-4">
          Localizing a nuclear radiation source safely requires remote operation and accurate sensor modeling. This project utilizes a single scintillator detector mounted on a mobile robot to estimate the unknown 3D position of a radiation source in real-time.
        </p>
        
        {/* Placeholder for your ROS Architecture Diagram */}
        <div
          className="w-full rounded-lg border-2 border-dashed p-12 text-center my-8"
          style={{
            backgroundColor: 'var(--surface-alt)',
            borderColor: 'var(--border-color)',
          }}
        >
          <p className="font-medium" style={mutedTextStyle}></p>
        </div>
      </section>

      {/* 3. The Math & Estimator Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Measurement Model</h2>
        <p className="leading-relaxed mb-4">
          The core of the estimator relies on an accurate mathematical model of the sensor. The radiation intensity measured by the scintillator follows the inverse-square law. We define the measurement $y_k$ at time step $k$ as:
        </p>
        
        {/* Rendered LaTeX Block for the equation */}
        <div className="p-6 rounded-lg my-6 overflow-x-auto text-center" style={themedCardStyle}>
          <BlockMath math={String.raw`y_k = \frac{\alpha}{|| \mathbf{p}_k - \mathbf{p}_s ||^2} + \beta + \nu_k`} />
        </div>

        <p className="leading-relaxed mt-4">
          Where <InlineMath math="\mathbf{p}_k" /> is the known position of the detector, <InlineMath math="\mathbf{p}_s" /> is the unknown source location we are estimating, <InlineMath math="\alpha" /> represents the source intensity, <InlineMath math="\beta" /> is the background radiation, and <InlineMath math="\nu_k" /> is the Poisson-distributed sensor noise.
        </p>
      </section>

      {/* 4. Implementation Details */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>System Architecture</h2>
        <ul className="list-disc pl-6 space-y-2" style={mutedTextStyle}>
          <li><strong>Data Ingestion:</strong> Custom C++ ROS nodes parse raw sensor telemetry.</li>
          <li><strong>State Estimation:</strong> Implemented a non-linear filter (e.g., EKF or Particle Filter) to handle the highly non-linear measurement model.</li>
          <li><strong>Visualization:</strong> Real-time mapping of the probability distribution using RViz.</li>
        </ul>
      </section>

    </div>
  );
};

export default NuclearLocalization;