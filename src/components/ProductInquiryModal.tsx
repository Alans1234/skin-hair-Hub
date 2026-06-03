import { useState, FormEvent } from 'react';
import { Mail, Phone, User, CheckCircle, Send, X, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductInquiryModal({ product, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`Hi clinical team, I would love to order the ${product.title} ($${product.price}) and receive personalized application advice based on sensitive combination skin types.`);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill out your contact details.');
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      // Automatic success feedback trigger
    }, 100);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-brand-card rounded-2xl border border-brand-border w-full max-w-lg overflow-hidden shadow-2xl relative">
        
        {/* Header Banner */}
        <div className="bg-brand-surface p-6 border-b border-brand-border flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="bg-brand-card p-2 border border-brand-border rounded-xl">
              <ShoppingBag className="w-5 h-5 text-brand-primary" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-brand-accent tracking-widest uppercase font-semibold">Premium Catalog Inquiry</span>
              <h3 className="font-serif text-lg text-gray-950 font-bold">Inquire & Purchase</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 bg-brand-card p-1 rounded-full border border-brand-border shadow-sm transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!submitted ? (
            <div className="space-y-4">
              {/* Product preview card */}
              <div className="flex gap-4 p-3 bg-brand-surface/40 border border-brand-border/60 rounded-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-lg border border-brand-border"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-semibold text-gray-950 truncate">{product.title}</h4>
                  <p className="text-xs text-gray-500 font-sans mt-0.5">{product.size} &bull; Clinical Formulation</p>
                  <p className="text-sm font-semibold text-brand-primary mt-1 font-mono">${product.price}.00 USD</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-gray-700 font-sans block">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="Diana Prince"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs font-sans pl-10 pr-4 py-2.5 bg-brand-surface/50 border border-brand-border rounded-xl outline-none focus:border-brand-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-gray-700 font-sans block">Client Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        required
                        placeholder="diana@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs font-sans pl-10 pr-4 py-2.5 bg-brand-surface/50 border border-brand-border rounded-xl outline-none focus:border-brand-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-gray-700 font-sans block">Phone Number (Optional)</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 012-3456"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs font-sans pl-10 pr-4 py-2.5 bg-brand-surface/50 border border-brand-border rounded-xl outline-none focus:border-brand-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-gray-700 font-sans block">Aesthetics Inquiry Notes</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs font-sans px-4 py-2.5 bg-brand-surface/50 border border-brand-border rounded-xl outline-none focus:border-brand-primary focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-primary text-white font-sans font-semibold text-xs py-3 px-6 rounded-xl hover:bg-opacity-95 transition-all shadow-md flex items-center justify-center gap-1.5 uppercase tracking-wider cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Concierge Request
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-brand-surface rounded-full flex items-center justify-center mx-auto border border-brand-border">
                <CheckCircle className="w-8 h-8 text-brand-primary" />
              </div>
              <span className="text-[10px] font-mono text-brand-primary uppercase tracking-wider font-semibold">Message Dispatched</span>
              <h4 className="font-serif text-xl font-medium text-gray-900">Request Received Successfully</h4>
              <p className="text-xs text-gray-600 font-sans max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. A Skin & Hair Hub Nepal concierge specialist has reserved <strong>{product.title}</strong> for you. We will send coordinates and advice to <strong>{email}</strong> within 4 hours.
              </p>
              <div className="pt-5">
                <button
                  onClick={onClose}
                  className="bg-brand-primary hover:bg-opacity-90 text-white font-sans text-xs font-semibold py-2.5 px-6 rounded-xl shadow-sm tracking-wide transition-all cursor-pointer"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
