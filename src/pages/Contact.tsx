import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Navigation, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Question');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Maps / Location Directions preview
  const [originAddress, setOriginAddress] = useState('');
  const [directionRoute, setDirectionRoute] = useState<string | null>(null);

  const handleGetDirections = (e: FormEvent) => {
    e.preventDefault();
    if (!originAddress) {
      alert('Please enter your starting location.');
      return;
    }
    setDirectionRoute(
      `Standard private route mapped from "${originAddress}" to Level 3, Durbar Marg, Kathmandu (opposite Narayanhiti Palace Museum): Approx 12-15 mins.`
    );
  };

  const handleSubmitInquiry = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(false);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 animate-fadeIn"
    >
      {/* CONTACT HEADER */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">The Sanctuary Gateway</span>
        <h1 className="font-serif text-4xl font-bold text-gray-950">Connect & Inquire</h1>
        <p className="text-xs text-gray-600 font-sans leading-relaxed">
          Submit aesthetic questions regarding skin health, allergen compatibility, or clinical directions to our Kathmandu sanctuary.
        </p>
      </section>

      {/* TWO COLUMN GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Ask an Expert Form (General message contact only) */}
        <div className="lg:col-span-7 bg-white border border-brand-border rounded-3xl p-6 md:p-8 text-left shadow-soft">
          {!submitted ? (
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <div className="border-b border-brand-border pb-3 flex items-center gap-2">
                <div className="p-2 bg-brand-surface rounded-xl border border-brand-border text-brand-primary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-950">General Clinical Inquiry</h3>
                  <p className="text-xs text-gray-500 font-sans mt-0.5">
                    Our medical specialists typically reply to digital queries within 2-4 hours.
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-800 font-sans block">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Diana Prince"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs font-sans px-4 py-3 bg-brand-surface/40 border border-brand-border rounded-xl focus:border-brand-primary focus:bg-white transition-all outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-800 font-sans block">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="diana@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs font-sans px-4 py-3 bg-brand-surface/40 border border-brand-border rounded-xl focus:border-brand-primary focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-800 font-sans block">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+977 (985) 100-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs font-sans px-4 py-3 bg-brand-surface/40 border border-brand-border rounded-xl focus:border-brand-primary focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-800 font-sans block">Inquiry Topic</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full text-xs font-sans bg-brand-surface/40 border border-brand-border rounded-xl px-3.5 py-3 text-gray-800 focus:border-brand-primary focus:bg-white outline-none cursor-pointer appearance-none"
                >
                  <option value="General Question">General Healthcare Question</option>
                  <option value="Allergy Concerns">Allergens & Skin Reactivity Queries</option>
                  <option value="Location Routing">Town Car & Clinic Directions</option>
                  <option value="Product Sourcing">Formulary Product Stock Inquiry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-800 font-sans block">Your Question or Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Detail your question or specific skin coordinates pattern here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs font-sans px-4 py-3 bg-brand-surface/40 border border-brand-border rounded-xl focus:border-brand-primary focus:bg-white transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary hover:bg-opacity-95 text-white font-sans font-semibold text-xs py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 uppercase tracking-wider cursor-pointer"
              >
                <Send className="w-4 h-4" /> Message Clinical Specialists
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mx-auto border border-brand-border">
                <CheckCircle2 className="w-9 h-9 text-brand-primary" />
              </div>
              <span className="text-xs font-mono text-brand-primary tracking-wider uppercase font-semibold">Message Dispatched</span>
              <h3 className="font-serif text-2xl text-gray-900 font-semibold">Thank you for your Inquiry</h3>
              <p className="font-sans text-xs text-gray-650 max-w-sm mx-auto leading-relaxed">
                Dear <strong>{name}</strong>, your request regarding <strong>{subject}</strong> has been logged. Our chief medical secretary will draft guidance and email you at <strong>{email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setPhone('');
                  setMessage('');
                }}
                className="mt-4 bg-brand-primary hover:bg-opacity-90 text-white font-sans font-semibold text-xs py-2.5 px-6 rounded-xl transition-all shadow-sm"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Address info & Maps Navigation */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Clinic Address Info Box */}
          <div className="bg-white border border-brand-border p-6 rounded-2xl shadow-soft text-left space-y-4">
            <h3 className="font-serif text-lg font-bold text-gray-900 border-b border-brand-border/60 pb-2">The Sanctuary Hub</h3>
            <div className="space-y-3.5 text-xs text-gray-600 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-primary mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Skin & Hair Hub Nepal</p>
                  <p>Level 3, Durbar Marg</p>
                  <p>Kathmandu, Nepal (opposite Narayanhiti)</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-primary" />
                <span>Reception Network: <strong>+977 (1) 422-8000</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-brand-primary" />
                <span>Secure Email Desk: <strong>concierge@skinhairhubnepal.com</strong></span>
              </div>
            </div>
          </div>

          {/* PREMIUM LUXURIOUS MOCK GOOGLE MAP INTEGRATION */}
          <div className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-soft text-left">
            <div className="bg-brand-surface/60 p-4 border-b border-brand-border font-serif text-sm font-bold text-gray-950 flex justify-between items-center">
              <span>Coordinates Locator</span>
              <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Est. Kathmandu 2024</span>
            </div>

            {/* Styled Map Box Graphic */}
            <div className="relative h-60 bg-[#FAF4EF] p-2 flex flex-col justify-between">
              {/* Grid background representing roads, styled cleanly */}
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #4E342E 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
              
              {/* Fake Roads */}
              <div className="absolute top-1/3 left-0 right-0 h-4 bg-brand-card shadow-xs rounded-full opacity-60"></div>
              <div className="absolute left-1/3 top-0 bottom-0 w-4 bg-brand-card shadow-xs rounded-full opacity-60"></div>
              <div className="absolute left-2/3 top-0 bottom-0 w-3 bg-brand-card shadow-xs rounded-full opacity-40"></div>

              {/* Map Pin Label */}
              <div className="relative m-auto z-10 bg-[#F4EFEA]/95 border border-brand-border p-3 rounded-xl shadow-md max-w-xs flex items-center gap-2">
                <div className="p-2 rounded-lg bg-brand-accent/15 text-brand-accent animate-bounce">
                  <MapPin className="w-5 h-5 fill-brand-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-950">Skin & Hair Hub Nepal</p>
                  <p className="text-[9px] text-gray-400 font-sans font-bold">Durbar Marg &bull; Kathmandu</p>
                </div>
              </div>

              <div className="relative z-10 p-2 bg-[#F4EFEA]/80 backdrop-blur-xs rounded-lg text-[9.5px] text-brand-primary font-mono text-right border border-brand-border/40 mt-auto">
                Lat: 27.7082° N, Long: 85.3190° E
              </div>
            </div>

            {/* ROUTE FINDER DIRECTIONS */}
            <div className="p-4 border-t border-brand-border">
              <form onSubmit={handleGetDirections} className="space-y-2 text-xs">
                <label className="text-[10px] font-bold text-gray-700 tracking-wider uppercase font-sans block">Directions & Town Cars</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter starting location..."
                    value={originAddress}
                    onChange={(e) => setOriginAddress(e.target.value)}
                    className="flex-1 text-xs px-3 py-2 bg-brand-surface/40 border border-brand-border rounded-lg outline-none focus:border-brand-primary"
                  />
                  <button
                    type="submit"
                    className="bg-brand-primary text-white text-[10px] tracking-wider uppercase py-2 px-3.5 rounded-lg font-semibold hover:bg-opacity-95 transition-all text-center cursor-pointer"
                  >
                    Map Route
                  </button>
                </div>

                {directionRoute && (
                  <div className="p-2.5 bg-brand-surface rounded-lg border border-brand-border/80 text-[10px] text-gray-600 font-sans leading-relaxed flex gap-2 animate-fadeIn">
                    <Navigation className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{directionRoute}</span>
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>

      </section>
    </motion.div>
  );
}
