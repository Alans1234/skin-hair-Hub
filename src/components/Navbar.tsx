import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Treatments', path: '/treatments' },
    { label: 'Products', path: '/products' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ] as const;

  const currentPath = location.pathname;

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F4EFEA]/95 backdrop-blur-md shadow-sm border-b border-brand-border py-3'
          : 'bg-brand-surface/40 backdrop-blur-xs py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo Brand Title */}
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white border-2 border-brand-border group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-brand-bg" />
            </div>
            <div>
              <div className="font-serif text-sm tracking-[0.08em] font-extrabold text-brand-primary uppercase leading-tight">
                Skin & Hair Hub
              </div>
              <div className="font-sans text-[9px] tracking-[0.4em] font-bold text-brand-accent uppercase mt-0.5">
                Nepal
              </div>
            </div>
          </Link>
 
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`relative font-sans text-[12px] font-semibold tracking-wider uppercase transition-colors py-1 cursor-pointer ${
                    isActive ? 'text-brand-primary font-bold' : 'text-gray-600 hover:text-brand-primary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </div>
 
          {/* Booking Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/book"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-brand-primary text-white font-sans font-semibold text-[11px] tracking-widest uppercase py-2.5 px-5 rounded-full hover:bg-opacity-90 active:scale-95 transition-all shadow-sm border border-brand-border flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-surface" />
              Book Consult
            </Link>
          </div>
 
          {/* Mobile Menu Actuator */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-primary hover:text-brand-accent p-1.5 bg-brand-card border border-brand-border rounded-xl shadow-xs cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
 
        </div>
      </div>
 
      {/* Mobile Drawer Slide-out bar */}
      {isOpen && (
        <div className="md:hidden border-t border-brand-border bg-brand-card shadow-xl py-4 px-6 animate-fadeIn transition-all">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left font-sans text-xs font-semibold tracking-widest uppercase py-3 border-b border-gray-100 transition-all ${
                    isActive ? 'text-brand-primary pl-2 border-l-2 border-brand-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/book"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-2 w-full bg-brand-primary text-white text-center font-sans font-semibold text-xs py-3 px-5 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
