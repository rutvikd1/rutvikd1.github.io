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
    root.style.setProperty('--page-bg', isDark ? '#0f172a' : '#f8fafc');
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
    root.style.setProperty('--hero-bg', isDark ? 'linear-gradient(135deg, #111827 0%, #1e1b4b 50%, #312e81 100%)' : 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #ede9fe 100%)');
    root.style.setProperty('--hero-glow-1', isDark ? 'rgba(168, 85, 247, 0.18)' : 'rgba(147, 51, 234, 0.2)');
    root.style.setProperty('--hero-glow-2', isDark ? 'rgba(99, 102, 241, 0.16)' : 'rgba(168, 85, 247, 0.15)');
    root.style.setProperty('--hero-heading-gradient', isDark ? 'linear-gradient(135deg, #f8fafc 0%, #c4b5fd 50%, #93c5fd 100%)' : 'linear-gradient(135deg, #111827 0%, #2563eb 50%, #7c3aed 100%)');
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
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--page-bg)', color: 'var(--text-primary)' }}>
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