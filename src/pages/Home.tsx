import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Award, Shield, Heart, Sliders, ChevronRight, Check } from 'lucide-react';
import { TREATMENTS, PRODUCTS, BEFORE_AFTER_ITEMS, FAQS } from '../data';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-20 pb-20 animate-fadeIn"
    >
      {/* BRAND HERO SECTION */}
      <section className="relative overflow-hidden bg-brand-bg/40 py-12 lg:py-24 border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1 bg-brand-card border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-primary">
              <Award className="w-4 h-4 text-brand-accent animate-pulse" />
              <span>Nepal’s Premier Medical Aesthetics & Laser Sanctuary</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl text-gray-900 tracking-tight leading-none font-extrabold">
              Discover Your <br />
              <span className="text-brand-primary italic font-serif">Anatomical</span> Masterpiece
            </h1>

            <p className="font-sans text-sm sm:text-md text-gray-650 max-w-xl leading-relaxed">
              At Skin & Hair Hub Nepal, we fuse state-of-the-art dual-wavelength laser technologies with premium dermatological sciences to lift, smooth, and restore. Trust certified clinicians with clinical luxury.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/book"
                className="bg-brand-primary text-white font-sans font-semibold text-xs tracking-wider uppercase px-7 py-3.5 rounded-xl hover:bg-opacity-90 active:scale-97 transition-all shadow-md text-center cursor-pointer"
              >
                Schedule Free Consultation
              </Link>
              <Link
                to="/treatments"
                className="bg-white border border-brand-border text-brand-primary hover:text-brand-accent hover:border-brand-accent font-sans font-semibold text-xs tracking-wider uppercase px-7 py-3.5 rounded-xl transition-all text-center cursor-pointer"
              >
                Explore Treatment Menu &rarr;
              </Link>
            </div>

            {/* Quality Indicators Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border/80">
              <div>
                <p className="font-serif text-2xl font-bold text-brand-primary">100%</p>
                <p className="text-[10px] text-gray-500 font-sans uppercase tracking-wider mt-0.5">Board Certified Doctors</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-brand-primary">15k+</p>
                <p className="text-[10px] text-gray-500 font-sans uppercase tracking-wider mt-0.5">Completed Procedures</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-brand-primary">4.9★</p>
                <p className="text-[10px] text-gray-500 font-sans uppercase tracking-wider mt-0.5">Customer Trust Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column Photo Visual Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-brand-border shadow-luxury bg-brand-card p-2">
              <img
                src="/src/assets/images/elite_hero_reception_1780468893786.png"
                alt="Skin & Hair Hub Nepal Sanctuary Reception"
                className="w-full h-84 md:h-110 object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#F4EFEA]/95 backdrop-blur-md rounded-xl p-4 border border-brand-border shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center border border-brand-border">
                    <Shield className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-950">Luxury Private Suite Sanctuary</p>
                    <p className="text-[10px] text-gray-500">Level 3, Durbar Marg, Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT CLINIC PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/src/assets/images/elite_treatment_room_1780468916103.png"
                alt="State of the art treatment room"
                className="w-full h-48 object-cover rounded-2xl border border-brand-border"
                referrerPolicy="no-referrer"
              />
              <div className="bg-brand-primary p-6 rounded-2xl text-white space-y-2">
                <Sparkles className="w-6 h-6 text-brand-accent" />
                <h4 className="font-serif text-lg font-bold">The Gold Standard</h4>
                <p className="text-[11px] text-brand-bg/90 font-sans leading-relaxed">
                  Winner of the 2025 National Dermal Technology Award for clinical safety.
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-brand-card border border-brand-border p-6 rounded-2xl space-y-2">
                <Award className="w-6 h-6 text-brand-primary" />
                <h4 className="font-serif text-lg font-bold text-gray-900">Custom DNA Care</h4>
                <p className="text-[11px] text-gray-600 font-sans leading-relaxed">
                  Every peptide bottle is blended uniquely based on your morning skin barrier index.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=600"
                alt="Clinical skincare study"
                className="w-full h-64 object-cover rounded-2xl border border-brand-border"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Narrative Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">Inside the Clinic</span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-gray-950 leading-tight">
              A Heritage of Aesthetic Precision and Medical Rigor
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
              Founded by industry innovator Dr. Evelyn Sinclair, Skin & Hair Hub Nepal was established to dismantle the artificial, overfilled look. We believe that clinical beauty is a subtle science of vectors, proportions, and deep cellular hydration.
            </p>
            <div className="space-y-3.5">
              {[
                'Clinical diagnosis led by board-certified dermatologists',
                'Strict integration of FDA-cleared energy lasers only',
                'Signature luxury skin & hair revitalizing formulations',
                'Private state-of-the-art medical suites guaranteeing full client privacy'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2.5 items-start text-xs text-gray-700">
                  <Check className="w-4.5 h-4.5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-block bg-brand-primary hover:bg-opacity-95 text-white font-sans font-semibold text-xs py-3.5 px-6 rounded-xl transition-all shadow-sm tracking-wider uppercase text-center"
              >
                Meet Our Medical Team &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US METRIC CARDS */}
      <section className="bg-brand-card border-y border-brand-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">The Skin & Hair Hub Commitment</span>
            <h2 className="font-serif text-3xl font-bold text-gray-950">Why Discerning Clients Choose Us</h2>
            <p className="text-xs text-gray-500 font-sans max-w-lg mx-auto">
              Bespoke clinical responsibility. Here is how we redefine the aesthetics treatment interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Certified Professionals',
                desc: 'Every clinician is double-certified with over a decade of high-end facial rejuvenation experience.',
                icon: Award
              },
              {
                title: 'Advanced Technology',
                desc: 'Equipped with Cynosure, PicoSure, and Lutronic ultra-precise energy targeting arrays.',
                icon: Sliders
              },
              {
                title: 'Personalized Care',
                desc: 'Zero generic templates. Your 12-month timeline adapts dynamically to climate and stress parameters.',
                icon: Heart
              },
              {
                title: 'Safe Treatments',
                desc: 'Triple sterile protocols matching hospital surgical theaters ensuring zero infection vectors.',
                icon: Shield
              }
            ].map((card, i) => (
              <div key={i} className="bg-brand-surface p-5 rounded-2xl border border-brand-border space-y-3 shadow-soft hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-primary">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-md font-bold text-gray-900">{card.title}</h3>
                <p className="text-[11px] text-gray-600 font-sans leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES PREVIEW PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-1 text-left">
            <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">Signature Catalog</span>
            <h2 className="font-serif text-3xl font-bold text-gray-950">Featured Aesthetic Rituals</h2>
            <p className="text-xs text-gray-500 font-sans">
              A curation of our award-winning and scientific face and hair restructuring treatments.
            </p>
          </div>
          <Link
            to="/treatments"
            className="font-sans font-semibold text-xs text-brand-primary hover:text-brand-accent flex items-center gap-1 group transition-colors"
          >
            View Entire Service Menu
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TREATMENTS.slice(0, 3).map((treatment) => (
            <div key={treatment.id} className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-soft flex flex-col group hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-brand-primary text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-md uppercase border border-brand-border">
                  {treatment.category}
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between text-left space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg font-bold text-gray-950">{treatment.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-2">
                    {treatment.shortDescription}
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Link
                    to={`/treatment/${treatment.id}`}
                    className="flex-1 text-center bg-brand-surface hover:bg-brand-border/40 text-brand-primary text-[10.5px] font-semibold py-2.5 rounded-lg border border-brand-border transition-colors uppercase block"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/book"
                    state={{ preselectedServiceId: treatment.id }}
                    className="flex-1 text-center bg-brand-primary hover:bg-opacity-90 text-white text-[10.5px] font-semibold py-2.5 rounded-lg transition-colors uppercase block"
                  >
                    Reserve Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE BEFORE & AFTER SLIDER GALLERY (PREVIEW) */}
      <section className="bg-brand-surface/40 border-y border-brand-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">Interactive Case Portfolios</span>
            <h2 className="font-serif text-3xl font-bold text-gray-950">Visual Proof of Restoration</h2>
            <p className="text-xs text-gray-500 font-sans">
              Drag the central handle left and right on each image to review real, unedited clinical outcome results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BEFORE_AFTER_ITEMS.map((item) => (
              <BeforeAfterSlider key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1 text-brand-primary hover:text-brand-accent text-xs font-semibold uppercase tracking-wider"
            >
              Browse Entire Patient Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
          <div className="space-y-1 text-left">
            <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">Luxury Formulations</span>
            <h2 className="font-serif text-3xl font-bold text-gray-950">Molecular Dermal Products</h2>
            <p className="text-xs text-gray-500 font-sans">
              Take the clinical experience home with advanced, non-comedogenic bio-formulas.
            </p>
          </div>
          <Link
            to="/products"
            className="font-sans font-semibold text-xs text-brand-primary hover:text-brand-accent flex items-center gap-1 group transition-colors"
          >
            View Entire Skincare Catalog &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {PRODUCTS.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-soft hover:shadow-md transition-all flex flex-col group justify-between">
              <div className="relative aspect-square overflow-hidden bg-brand-surface/40 p-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-104 transition-transform duration-500 rounded-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 text-brand-primary font-mono text-[9px] font-bold py-1 px-2.5 rounded border border-brand-border">
                  {product.size}
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between space-y-3.5">
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 font-sans uppercase tracking-wider block font-semibold">{product.category}</span>
                  <h3 className="font-serif text-sm font-bold text-gray-900 group-hover:text-brand-primary transition-colors line-clamp-1">{product.title}</h3>
                  <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">{product.description}</p>
                </div>
                
                <div className="pt-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="w-full text-center block bg-brand-surface border border-brand-border hover:bg-brand-primary hover:text-white transition-all text-brand-primary text-[10.5px] py-2 rounded-lg font-semibold tracking-wide uppercase"
                  >
                    View Formula Specs
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="max-w-4xl mx-auto space-y-6 pt-4 text-left px-4">
        <div className="text-center space-y-1.5">
          <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase block">FAQs</span>
          <h3 className="font-serif text-2xl font-bold text-gray-950">Medical & Treatment Protocol Inquiries</h3>
          <p className="text-xs text-gray-400 font-sans">Everything you should expect regarding safety and custom planning at our clinic.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div key={faq.id} className="bg-white border border-brand-border rounded-xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full p-4 flex justify-between items-center text-left hover:bg-brand-surface/40 transition-colors font-serif text-sm font-semibold text-gray-900 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl text-brand-primary pr-1">{isOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-brand-border/50 bg-brand-surface/10 p-4 text-xs text-gray-600 font-sans leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
