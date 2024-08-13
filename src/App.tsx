import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import UmkmPage from './pages/umkm';
import DetailUmkmPage from './pages/detail';

import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/umkm" element={<UmkmPage />} />
        <Route path="/umkm/detail/:id" element={<DetailUmkmPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
