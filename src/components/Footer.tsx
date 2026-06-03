import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock, Award, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="brand-footer" className="bg-brand-card border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-border/60 pb-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-1.5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white border border-brand-border">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="font-serif text-[15px] tracking-[0.08em] font-extrabold text-brand-primary uppercase block leading-none">
                  Skin & Hair Hub
                </span>
                <p className="text-[9px] font-bold text-brand-accent tracking-[0.25em] mt-1 uppercase block leading-none">Nepal</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 font-sans leading-relaxed text-left">
              We fuse state-of-the-art clinical laser technology with opulent restoration rituals to highlight your natural, anatomical elegance.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="text-[10px] text-brand-primary bg-brand-surface font-semibold py-1 px-2.5 rounded-md border border-brand-border flex items-center gap-1">
                <Award className="w-3 h-3 text-brand-primary" /> Board Certified
              </span>
              <span className="text-[10px] text-brand-primary bg-brand-surface font-semibold py-1 px-2.5 rounded-md border border-brand-border flex items-center gap-1">
                <Shield className="w-3 h-3 text-brand-primary" /> FDA Approved Lasers
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-xs font-bold text-gray-900 tracking-wider uppercase">Clinic Pages</h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-500 hover:text-brand-primary transition-colors block">
                  The Sanctuary (Home)
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-500 hover:text-brand-primary transition-colors block">
                  Our Scientific Heritage (About)
                </Link>
              </li>
              <li>
                <Link to="/treatments" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-500 hover:text-brand-primary transition-colors block">
                  Treatment Menu (Treatments)
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-500 hover:text-brand-primary transition-colors block">
                  Molecular Formulary (Products)
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-500 hover:text-brand-primary transition-colors block">
                  Before & After Portfolio (Gallery)
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-xs font-bold text-gray-900 tracking-wider uppercase">Business Hours</h4>
            <div className="space-y-3.5 text-xs text-gray-500 font-sans">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Monday — Friday</p>
                  <p className="text-[11px] text-gray-500">09:00 AM — 07:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Saturday (VIP only)</p>
                  <p className="text-[11px] text-gray-500">10:00 AM — 05:00 PM</p>
                </div>
              </div>
              <p className="text-[10px] text-brand-primary italic">Sunday: Strictly Private Booking</p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-xs font-bold text-gray-900 tracking-wider uppercase">Contact Details</h4>
            <div className="space-y-3 text-xs text-gray-500 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                <span>Level 3, Durbar Marg (Opposite Narayanhiti Palace Museum), Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="font-semibold text-gray-800">+977 (1) 422-8000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="hover:text-brand-primary transition-colors block">concierge@skinhairhubnepal.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub-bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 font-sans gap-4">
          <p>&copy; {new Date().getFullYear()} Skin & Hair Hub Nepal. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-brand-primary transition-colors cursor-pointer">Medical Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-brand-primary transition-colors cursor-pointer">Clinical Liability Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
