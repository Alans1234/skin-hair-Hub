import { motion } from 'motion/react';
import { Sparkles, Award, Shield, Clock } from 'lucide-react';
import { EXPERTS } from '../data';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 animate-fadeIn"
    >
      {/* HEADER STORY */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">The Scientific Legacy</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-950">A New Era of Clinical Aesthetics</h1>
        <p className="text-sm text-gray-600 font-sans leading-relaxed">
          Skin & Hair Hub Nepal is Nepal’s premiere clinical beauty and hair restoration sanctuary. Unwavering medical rigor coupled with a meticulous standard of aesthetic grace produces pristine, beautiful, organic outcomes.
        </p>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-brand-border space-y-3.5 text-left shadow-soft">
          <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-gray-900">Custom Mission</h3>
          <p className="text-xs text-gray-600 font-sans leading-relaxed">
            To deliver high-precision, board-certified non-surgical treatments that restore dermal cellular health, highlight bone structures, and honor the organic beauty of each visitor.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-brand-border space-y-3.5 text-left shadow-soft">
          <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-gray-900">Clinical Vision</h3>
          <p className="text-xs text-gray-600 font-sans leading-relaxed">
            To establish a world-class model where advanced dermal biophysics is blended with luxurious Swiss hospitality settings, eliminating heavy artificial over-injection.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-brand-border space-y-3.5 text-left shadow-soft">
          <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-gray-900">Core Values</h3>
          <p className="text-xs text-gray-600 font-sans leading-relaxed">
            Mathematical Precision. Clinical Integrity. Cleanliness. Continuous innovation of FDA-cleared technologies. Bespoke hospitality for ultimate mental comfort.
          </p>
        </div>
      </section>

      {/* MEET OUR EXPERTS WITH CERTIFICATES */}
      <section className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">Our Clinical Experts</span>
          <h2 className="font-serif text-3xl font-bold text-gray-950">Aesthetic Physicians & Estheticans</h2>
          <p className="text-xs text-gray-500 font-sans">
            Your face and hair are overseen strictly by board-certified doctors with decades of cosmetic injectables and tissue experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERTS.map((expert) => (
            <div key={expert.id} className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-soft flex flex-col hover:shadow-md transition-shadow text-left">
              <div className="relative h-64 overflow-hidden bg-brand-surface/40">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-primary text-white text-[9px] font-mono uppercase tracking-wider py-1 px-2.5 rounded-full border border-brand-border">
                  {expert.credentials[0]}
                </div>
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-900">{expert.name}</h3>
                    <p className="text-xs text-brand-accent font-semibold font-sans mt-0.5">{expert.role}</p>
                  </div>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">
                    {expert.bio}
                  </p>
                </div>

                <div className="space-y-2.5 border-t border-brand-border/60 pt-4">
                  <div>
                    <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider font-sans block mb-1">Key Specialties</span>
                    <div className="flex flex-wrap gap-1.5">
                      {expert.specialties.map((spec, sIdx) => (
                        <span key={sIdx} className="text-[9.5px] bg-brand-surface text-brand-primary font-semibold px-2 py-0.5 rounded border border-brand-border">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider font-sans block mb-1">Academic Affiliations</span>
                    <ul className="list-disc pl-3.5 space-y-0.5 text-[10px] text-gray-400">
                      {expert.credentials.slice(1).map((cred, cIdx) => (
                        <li key={cIdx}>{cred}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE SANCTUARY ENVIRONMENT */}
      <section className="bg-white border border-brand-border rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">The Physical Sanctuary</span>
          <h2 className="font-serif text-3xl font-bold text-gray-950">A Purified Luxury Suite Environment</h2>
          <p className="text-xs text-gray-650 leading-relaxed font-sans">
            Every element of our clinic architecture is designed for tranquility. We have removed high-contrast fluorescent lighting in favor of circadian biological warm glows, and installed dual-filtration Swiss particulate air purifiers.
          </p>
          <p className="text-xs text-gray-650 leading-relaxed font-sans">
            During your sessions, you can select customized musical frequencies, adjust mattress heating zones, and request fresh premium tea preps. It is aesthetic medicine at its absolute zenith.
          </p>
          
          <div className="flex gap-6 pt-2">
            <div className="flex gap-2 items-center text-xs font-semibold text-brand-primary">
              <Shield className="w-5 h-5 text-brand-primary" /> Active Air UV Filters
            </div>
            <div className="flex gap-2 items-center text-xs font-semibold text-brand-primary">
              <Clock className="w-5 h-5 text-brand-primary" /> Private Reception Space
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
            alt="Clinic private relaxation lounge"
            className="w-full h-80 object-cover rounded-2xl border border-brand-border shadow-soft"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-[#F4EFEA]/95 backdrop-blur-sm text-brand-primary font-serif font-semibold text-xs px-3.5 py-1.5 rounded-lg border border-brand-border">
            Kathmandu Clinical Sanctuary
          </div>
        </div>
      </section>
    </motion.div>
  );
}
