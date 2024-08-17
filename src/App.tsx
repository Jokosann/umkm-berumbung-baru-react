import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/home'));
const UmkmPage = lazy(() => import('./pages/umkm'));
const DetailUmkmPage = lazy(() => import('./pages/detail'));

import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';
import LoadingPage from './components/ui/LoadingPage';
import ScrollToTop from './components/ui/ScroolToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingPage />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/umkm" element={<UmkmPage />} />
          <Route path="/umkm/detail/:id" element={<DetailUmkmPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
