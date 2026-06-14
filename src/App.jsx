import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Campus from './pages/Campus';
import Research from './pages/Research';
import News from './pages/News';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="text-center text-white">
        <div className="text-9xl font-bold text-white/20 mb-4">404</div>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-white/75 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="btn-primary inline-flex">Go to Homepage</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news" element={<News />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
