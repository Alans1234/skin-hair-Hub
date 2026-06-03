import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import TreatmentDetail from './pages/TreatmentDetail';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brand-surface text-gray-900 selection:bg-brand-primary selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Global Page Canvas Layout */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/treatment/:id" element={<TreatmentDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Brand Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}
