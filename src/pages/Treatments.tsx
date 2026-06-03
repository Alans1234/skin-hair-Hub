import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, Info } from 'lucide-react';
import { TREATMENTS } from '../data';

export default function Treatments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTreatments = TREATMENTS.filter((t) => {
    const queryMatch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const catMatch = activeCategory === 'All' || t.category === activeCategory;
    return searchQuery ? queryMatch : catMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 animate-fadeIn"
    >
      {/* SERVICES SUMMARY HEADER */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">The Treatment Menu</span>
        <h1 className="font-serif text-4xl font-bold text-gray-950">Clinical Beauty Treatments</h1>
        <p className="text-xs text-gray-600 font-sans leading-relaxed">
          We specialize in non-surgical age manipulation, structural lifting, and deep epidermal cellular therapy. Filter treatments below or search directly to discover your roadmap.
        </p>

        {/* SEARCH AND CATEGORY BAR */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center items-center">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search treatment (e.g. Laser, Facial)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-sans pl-10 pr-4 py-2 bg-white border border-brand-border rounded-xl outline-none focus:border-brand-primary transition-all text-left"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {['All', 'Skin', 'Hair', 'Laser', 'Facial', 'Nails', 'Consultation'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchQuery('');
                }}
                className={`text-[10.5px] font-sans font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  activeCategory === cat && !searchQuery
                    ? 'bg-brand-primary text-white border-brand-primary'
                    : 'bg-white text-gray-600 border-brand-border hover:bg-brand-surface hover:text-brand-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ALL DETAILED TREATMENTS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {filteredTreatments.length > 0 ? (
          filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-soft hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-brand-surface/40">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 text-brand-primary font-mono text-[9px] font-bold py-1 px-2.5 rounded border border-brand-border uppercase">
                  {treatment.category}
                </div>
              </div>

              <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-gray-950 leading-tight">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-3">
                    {treatment.shortDescription}
                  </p>
                </div>

                <div className="pt-2 flex gap-2">
                  <Link
                    to={`/treatment/${treatment.id}`}
                    className="flex-grow text-center text-brand-primary bg-brand-surface hover:bg-brand-border/40 text-xs font-semibold py-2.5 rounded-xl border border-brand-border transition-colors uppercase block"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/book"
                    state={{ preselectedServiceId: treatment.id }}
                    className="flex-grow text-center text-white bg-brand-primary hover:bg-opacity-95 text-xs font-semibold py-2.5 rounded-xl transition-all uppercase block"
                  >
                    Book Selection
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-xs text-gray-400 font-sans">
            No dermal rituals matching your search queries. Try another filter.
          </div>
        )}
      </section>

      {/* DIAGNOSTIC WARNING BANNER */}
      <section className="bg-white border border-brand-border rounded-2xl p-6 text-left max-w-4xl mx-auto flex flex-col sm:flex-row gap-5 items-start sm:items-center">
        <div className="bg-brand-surface p-3 rounded-xl border border-brand-border text-brand-primary">
          <Info className="w-6 h-6" />
        </div>
        <div className="flex-grow space-y-1">
          <h4 className="font-serif text-md font-bold text-gray-950">First-Time Clinic Visitor Advisory</h4>
          <p className="text-xs text-gray-500 leading-relaxed font-sans">
            Any treatment booked with an asterisk is preceded by a quick 10-minute diagnostic allergen review. Your safety is our primary medical guideline. All aesthetic timelines are tailored directly to your cellular healing speeds.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
