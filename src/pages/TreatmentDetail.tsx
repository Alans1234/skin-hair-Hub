import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TREATMENTS } from '../data';
import { CheckCircle2, Shield, Calendar, ArrowLeft } from 'lucide-react';

export default function TreatmentDetail() {
  const { id } = useParams<{ id: string }>();
  const treatment = TREATMENTS.find((t) => t.id === id);

  if (!treatment) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4 animate-fadeIn">
        <h2 className="font-serif text-3xl font-bold text-gray-950">Treatment Profile Not Found</h2>
        <p className="text-xs text-gray-500 font-sans max-w-md mx-auto">
          The requested clinical aesthetics treatment coordinate could not be resolved. It might have been updated or archived.
        </p>
        <Link
          to="/treatments"
          className="inline-block bg-brand-primary text-white text-xs font-sans font-semibold uppercase px-6 py-3 rounded-xl transition-all"
        >
          Return to Treatment Menu
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-4 text-left animate-fadeIn space-y-10"
    >
      {/* Back button */}
      <div>
        <Link
          to="/treatments"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-accent transition-colors uppercase tracking-wider font-sans"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Treatments Menu
        </Link>
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Visual Asset & Category Badge */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-3xl overflow-hidden border border-brand-border bg-brand-card p-2 shadow-luxury">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-80 sm:h-100 object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-[#F4EFEA]/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-border font-serif text-xs font-bold text-brand-primary uppercase tracking-wider shadow-sm">
              {treatment.category} Category
            </div>
          </div>

          <div className="bg-brand-card border border-brand-border rounded-2xl p-5 space-y-2">
            <h4 className="text-[11px] font-bold text-gray-800 uppercase tracking-widest font-sans flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-brand-primary" /> Active Clinical Guard
            </h4>
            <p className="text-[11px] text-gray-600 font-sans leading-relaxed">
              Fully supervised by double-certified medical doctors. Formulated with skin-barrier stabilizing agents matching highest clinical safety indexes.
            </p>
          </div>
        </div>

        {/* Right Column: Descriptions & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase block">Scientific Standard Specification</span>
            <h1 className="font-serif text-3xl sm:text-4.5xl font-bold text-gray-950 leading-tight">
              {treatment.title}
            </h1>
          </div>

          <div className="space-y-4 pt-2 border-t border-brand-border">
            <div>
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block font-sans mb-1.5">Bespoke Methodology</span>
              <p className="text-xs sm:text-sm text-gray-650 font-sans leading-relaxed">
                {treatment.fullDescription}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block font-sans mb-2">Guaranteed Clinical Benefits</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {treatment.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-2 text-xs text-gray-600 font-sans items-start">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decoupled non-payment booking module invitation */}
          <div className="bg-brand-primary/5 rounded-2xl border border-brand-border p-6 space-y-4">
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-gray-950">Plan Your Rejuvenation</h3>
              <p className="text-[11px] text-gray-600 font-sans leading-relaxed">
                Schedule a clinical dermal scan session to review this therapy pathway with an expert specialist. No pre-payment or credit cards required.
              </p>
            </div>
            <Link
              to="/book"
              state={{ preselectedServiceId: treatment.id }}
              className="w-full bg-brand-primary hover:bg-opacity-95 text-white py-3.5 rounded-xl font-sans font-semibold text-xs text-center uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-brand-surface" /> Coordinate Aesthetic Scan Now
            </Link>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
