import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/home'));
const UmkmPage = lazy(() => import('./pages/umkm'));
const DetailUmkmPage = lazy(() => import('./pages/detail'));
const GalleryPage = lazy(() => import('./pages/gallery'));

import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';
import LoadingPage from './components/ui/LoadingPage';
import ScrollToTop from './components/ui/ScroolToTop';
import ButtonToTop from './components/ui/ButtonToTop';

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/umkm" element={<UmkmPage />} />
          <Route path="/umkm/detail/:id" element={<DetailUmkmPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <ButtonToTop />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
