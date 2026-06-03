import { useState, FormEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data';
import { ArrowLeft, Star, ShoppingBag, Send, CheckCircle, Info } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [queryText, setQueryText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4 animate-fadeIn">
        <h2 className="font-serif text-3xl font-bold text-gray-950">Product Specification Not Found</h2>
        <p className="text-xs text-gray-500 font-sans max-w-md mx-auto">
          The requested clinical product formula is currently being synthesized or re-evaluated by our lab team.
        </p>
        <Link
          to="/products"
          className="inline-block bg-brand-primary text-white text-xs font-sans font-semibold uppercase px-6 py-3 rounded-xl transition-all"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !queryText) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-4 text-left animate-fadeIn space-y-10"
    >
      {/* Return link */}
      <div>
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-accent transition-colors uppercase tracking-wider font-sans"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products Catalog
        </Link>
      </div>

      {/* Product Information Sheet */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Product Visual Frame */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-brand-card p-8 border border-brand-border rounded-3xl relative flex items-center justify-center shadow-soft aspect-square">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-white/95 border border-brand-border px-3.5 py-1 rounded-md text-[10px] font-bold text-brand-primary font-mono uppercase">
              {product.size} Volume
            </div>
          </div>

          <div className="bg-white border border-brand-border rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-800 uppercase font-sans">
              <ShoppingBag className="w-4 h-4 text-brand-primary" /> Formulation Standard
            </div>
            <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
              100% Swiss bio-active ingredients, paraben-free, non-comedogenic, and clinically certified hypoallergenic. Designed to shield dermal layers against high-altitude Nepalese UV indexes.
            </p>
          </div>
        </div>

        {/* Right: Spec details & Inquiry Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-brand-accent font-mono font-bold uppercase tracking-widest">
              <span>{product.category}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-0.5 text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-500" /> {product.rating} (Clinical Rating)
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>
          </div>

          <div className="space-y-4 pt-4 border-t border-brand-border">
            <div>
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block font-sans mb-1">Formula Character</span>
              <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block font-sans mb-1.5">Lab Ingredients Matrix</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs bg-brand-surface text-brand-primary border border-brand-border px-3.5 py-1 rounded-full font-sans font-semibold"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Product inquiry form - purely helpful informational questions */}
          <div className="bg-brand-card rounded-2xl border border-brand-border p-6 shadow-sm space-y-4">
            {!submitted ? (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <div className="border-b border-brand-border pb-2">
                  <h3 className="font-serif text-lg font-bold text-gray-950">Ask a Dermatological Coach</h3>
                  <p className="text-[11px] text-gray-500 font-sans">
                    Submit questions regarding application frequencies, barrier compatibility, or custom formulation coordinates.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-gray-700 uppercase font-sans block">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter name..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 bg-white border border-brand-border rounded-xl focus:border-brand-primary outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold text-gray-700 uppercase font-sans block">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 bg-white border border-brand-border rounded-xl focus:border-brand-primary outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-gray-700 uppercase font-sans block">Inquiry Phone (Optional)</label>
                  <input
                    type="tel"
                    placeholder="Enter phone..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-white border border-brand-border rounded-xl focus:border-brand-primary outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-gray-700 uppercase font-sans block">Describe Your Barrier / Question</label>
                  <textarea
                    required
                    rows={3}
                    placeholder={`e.g., Is ${product.title} safe to use alongside overnight salicylic acid treatments?`}
                    value={queryText}
                    onChange={(e) => setQueryText(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 bg-white border border-brand-border rounded-xl focus:border-brand-primary outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-opacity-95 text-white py-3 rounded-xl font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Formulary Query
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 bg-brand-surface rounded-full flex items-center justify-center mx-auto border border-brand-border">
                  <CheckCircle className="w-7 h-7 text-brand-primary" />
                </div>
                <h4 className="font-serif text-lg font-bold text-gray-950">Inquiry Received</h4>
                <p className="text-xs text-gray-600 font-sans max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your query regarding <strong>{product.title}</strong> has been transmitted securely. Our clinical coach will draft a personalized routine response and email it to <strong>{email}</strong> soon.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setQueryText('');
                    }}
                    className="text-xs text-brand-primary hover:text-brand-accent underline font-semibold font-sans uppercase tracking-wider"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
}
