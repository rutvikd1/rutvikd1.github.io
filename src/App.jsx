import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NuclearLocalization from './pages/projects/NuclearLocalization';
import TreeDetectionProject from './pages/projects/TreeDetectionProject';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: '82px', minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<Home />} />

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