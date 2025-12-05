import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { useSiteEffects } from './hooks/useSiteEffects';

function ScrollAndEffects() {
  const { pathname } = useLocation();
  useSiteEffects();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollAndEffects />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicii" element={<Services />} />
          <Route path="/preturi" element={<Pricing />} />
          <Route path="/portofoliu" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
