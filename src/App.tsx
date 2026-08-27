import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Starfield from './components/Starfield';
import ScrollToTop from './components/ScrollToTop';
import CardModal from './components/CardModal';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { LangProvider } from './state/LangContext';

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ minHeight: '100vh', background: 'var(--page)', position: 'relative' }}>
          <Starfield />
          <Nav />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <CardModal />
        </div>
      </BrowserRouter>
    </LangProvider>
  );
}
