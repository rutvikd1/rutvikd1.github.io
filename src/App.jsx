import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Story from './pages/Story';
import Resume from './pages/Resume';
import NuclearLocalization from './pages/projects/NuclearLocalization';
import TreeDetectionProject from './pages/projects/TreeDetectionProject';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return window.localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'dark';

    root.dataset.theme = theme;
    root.style.setProperty('--page-bg', isDark ? 'rgba(15, 23, 42, 0.76)' : 'rgba(248, 250, 252, 0.7)');
    root.style.setProperty('--section-bg', isDark ? '#111827' : '#ffffff');
    root.style.setProperty('--surface-bg', isDark ? '#1f2937' : '#ffffff');
    root.style.setProperty('--surface-alt', isDark ? '#111827' : '#f9fafb');
    root.style.setProperty('--text-primary', isDark ? '#f8fafc' : '#111827');
    root.style.setProperty('--text-secondary', isDark ? '#cbd5e1' : '#6b7280');
    root.style.setProperty('--border-color', isDark ? '#334155' : '#e5e7eb');
    root.style.setProperty('--nav-bg', isDark ? 'rgba(15, 23, 42, 0.92)' : '#f8fafc');
    root.style.setProperty('--nav-border', isDark ? 'rgba(51, 65, 85, 0.9)' : 'rgba(229, 231, 235, 0.7)');
    root.style.setProperty('--nav-text', isDark ? '#f8fafc' : '#111827');
    root.style.setProperty('--nav-muted', isDark ? '#cbd5e1' : '#6b7280');
    root.style.setProperty('--hero-bg', isDark ? 'linear-gradient(145deg, #0b1220 0%, #0f1c2e 48%, #10263b 100%)' : 'linear-gradient(145deg, #f2f8fb 0%, #edf5fa 52%, #e8f2f8 100%)');
    root.style.setProperty('--hero-glow-1', isDark ? 'rgba(34, 211, 238, 0.16)' : 'rgba(14, 165, 233, 0.18)');
    root.style.setProperty('--hero-glow-2', isDark ? 'rgba(56, 189, 248, 0.14)' : 'rgba(56, 189, 248, 0.14)');
    root.style.setProperty('--hero-heading-gradient', isDark ? 'linear-gradient(135deg, #f8fafc 0%, #bae6fd 48%, #22d3ee 100%)' : 'linear-gradient(135deg, #0f172a 0%, #0f3b5f 48%, #0ea5e9 100%)');
    root.style.setProperty('--hero-badge-bg', isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(37, 99, 235, 0.1)');
    root.style.setProperty('--hero-badge-text', isDark ? '#ddd6fe' : '#1e40af');
    root.style.setProperty('--hero-badge-border', isDark ? 'rgba(196, 181, 253, 0.25)' : 'rgba(37, 99, 235, 0.2)');
    root.style.setProperty('--hero-primary-bg', isDark ? '#7c3aed' : '#2563eb');
    root.style.setProperty('--hero-cta-secondary-border', isDark ? '#475569' : '#e5e7eb');
    root.style.setProperty('--hero-cta-secondary-text', isDark ? '#e2e8f0' : '#374151');
    root.style.setProperty('--hero-icon-bg', isDark ? '#1e293b' : '#f3f4f6');
    root.style.setProperty('--hero-icon-text', isDark ? '#e2e8f0' : '#374151');
    root.style.setProperty('--hero-scroll-border', isDark ? '#94a3b8' : '#6b7280');
    root.style.setProperty('--card-shadow', isDark ? '0 4px 12px rgba(0, 0, 0, 0.22)' : '0 4px 12px rgba(0, 0, 0, 0.06)');
    root.style.setProperty('--card-shadow-hover', isDark ? '0 20px 40px rgba(0, 0, 0, 0.35)' : '0 20px 40px rgba(0, 0, 0, 0.12)');
    root.style.setProperty(
      '--mesh-gradient',
      isDark
        ? 'radial-gradient(42% 34% at 10% 14%, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0) 72%), radial-gradient(34% 30% at 88% 8%, rgba(139, 92, 246, 0.18) 0%, rgba(139, 92, 246, 0) 74%), radial-gradient(36% 34% at 78% 84%, rgba(6, 182, 212, 0.18) 0%, rgba(6, 182, 212, 0) 76%), radial-gradient(34% 30% at 16% 84%, rgba(59, 130, 246, 0.16) 0%, rgba(59, 130, 246, 0) 72%)'
        : 'radial-gradient(44% 36% at 8% 12%, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0) 70%), radial-gradient(36% 32% at 88% 8%, rgba(59, 130, 246, 0.18) 0%, rgba(59, 130, 246, 0) 72%), radial-gradient(38% 34% at 72% 86%, rgba(14, 165, 233, 0.16) 0%, rgba(14, 165, 233, 0) 74%), radial-gradient(42% 38% at 18% 84%, rgba(125, 211, 252, 0.2) 0%, rgba(125, 211, 252, 0) 76%)'
    );
    root.style.setProperty('--mesh-opacity', isDark ? '0.82' : '1');
    root.style.setProperty('--mesh-blur', isDark ? '10px' : '8px');

    document.body.style.backgroundColor = isDark ? '#0f172a' : '#f8fafc';
    document.body.style.color = isDark ? '#f8fafc' : '#111827';
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main style={{ minHeight: '100vh', backgroundColor: 'transparent', color: 'var(--text-primary)' }}>
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/story" element={<Story />} />
        <Route path="/resume" element={<Resume />} />

        <Route path="/projects/nuclear-localization" element={<NuclearLocalization />} />
        <Route path="/projects/fallen-tree-detection" element={<TreeDetectionProject />} />
        <Route path="/projects/NuclearLocalization" element={<Navigate to="/projects/nuclear-localization" replace />} />
        <Route path="/projects/TreeDetectionProject" element={<Navigate to="/projects/fallen-tree-detection" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        
      </Routes>
      </main>
    </Router>
  );
}

export default App;