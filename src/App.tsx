import { Routes, Route } from 'react-router-dom';
import './App.css';
import TopBanner from './components/TopBanner';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';

// S() helper — wrap any component to show a red pill label for debugging
// Usage: <S name="CategoryBar"><CategoryBar /></S>
function S({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <span style={{
        position: 'absolute', top: 6, left: '50%',
        transform: 'translateX(-50%)',
        background: '#e7335e', color: '#fff',
        fontSize: 10, fontWeight: 700,
        padding: '2px 10px', borderRadius: 10,
        zIndex: 9999, fontFamily: 'monospace',
        whiteSpace: 'nowrap', pointerEvents: 'none',
        letterSpacing: 0.5,
      }}>
        {name}
      </span>
      {children}
    </div>
  );
}

// Suppress unused-variable warning for S — remove this line when S is in use
void S;

export default function App() {
  return (
    <div className="app">
      {/* Fixed bars — always visible on every page */}
      <TopBanner />
      <Header />

      {/* Spacer for fixed header (36px banner + ~80px navbar) */}
      <div style={{ height: 116 }} />

      {/* CategoryBar appears on every page */}
      <CategoryBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}
