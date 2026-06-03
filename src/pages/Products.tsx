import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { PRODUCTS } from '../data';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = PRODUCTS.filter(
    (product) => activeCategory === 'All' || product.category === activeCategory
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 animate-fadeIn"
    >
      {/* PRODUCTS HEADER */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">The Molecular Formulary</span>
        <h1 className="font-serif text-4xl font-bold text-gray-950">Luxury Skincare Formulations</h1>
        <p className="text-xs text-gray-600 font-sans leading-relaxed">
          Engineered with premium hyaluronic matrices, botanical peptides, and natural Swiss micro-algae to regenerate tissue structure daily at home.
        </p>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2 justify-center pt-2">
          {['All', 'Serums', 'Creams', 'Cleansers', 'Treatments'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10.5px] font-sans font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-primary text-white border-brand-primary'
                  : 'bg-white text-gray-600 border-brand-border hover:bg-brand-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS CATALOG LISTING */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-soft hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="relative aspect-square overflow-hidden bg-brand-surface/40 p-4 flex items-center justify-center border-b border-brand-border/40">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-104 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 left-3 bg-white/90 text-brand-primary font-mono text-[9px] font-bold py-0.5 px-2 rounded border border-brand-border">
                {product.size}
              </span>
            </div>

            <div className="p-4 space-y-3.5 flex-grow flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[10.5px] text-gray-400 font-sans">
                  <span>{product.category}</span>
                  <span className="flex items-center text-amber-500 gap-0.5">
                    <Star className="w-3 pb-0.5 fill-amber-500 text-amber-500" /> {product.rating}
                  </span>
                </div>
                <h3 className="font-serif text-sm font-bold text-gray-900 truncate">{product.title}</h3>
                <p className="text-[11px] text-gray-500 font-sans leading-relaxed line-clamp-3">
                  {product.description}
                </p>
              </div>

              {/* Active Ingredients list badge */}
              <div className="space-y-1.5">
                <span className="text-[9.5px] font-sans font-bold text-gray-600 block">Ingredients:</span>
                <div className="flex flex-wrap gap-1">
                  {product.ingredients.slice(0, 2).map((ing, k) => (
                    <span
                      key={k}
                      className="text-[8.5px] bg-brand-surface text-brand-primary font-medium px-1.5 py-0.5 rounded border border-brand-border/60"
                    >
                      {ing}
                    </span>
                  ))}
                  {product.ingredients.length > 2 && (
                    <span className="text-[8.5px] text-gray-400 px-1.5 py-0.5">
                      +{product.ingredients.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="border-t border-brand-border/40 pt-3 flex flex-col gap-2 mt-2">
                <Link
                  to={`/product/${product.id}`}
                  className="w-full text-center bg-brand-primary text-white font-sans text-[10.5px] font-semibold tracking-wider uppercase py-2 py-2.5 rounded-lg hover:bg-opacity-95 transition-all shadow-xs block"
                >
                  View Details & Specs
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PRODUCTS SUMMARY INFORMATION */}
      <section className="bg-brand-primary text-white rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center text-left">
        <div className="space-y-3 flex-1">
          <span className="text-[10px] font-mono text-brand-accent tracking-widest uppercase font-bold bg-white/10 px-2.5 py-1 rounded-full">
            Formulary Advice
          </span>
          <h3 className="font-serif text-2xl font-bold font-semibold">Unsure about your epidermal barrier category?</h3>
          <p className="text-[11.5px] text-brand-surface/90 font-sans leading-relaxed">
            Take our quick clinical diagnostic facial scan physically at the clinic to find your precise formulation coordinates. We will customize serum concentrations for dry, oil-prone, or inflammatory skin layers.
          </p>
        </div>
        <Link
          to="/book"
          className="bg-white text-brand-primary font-sans font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap block"
        >
          Schedule Formulation Scan &rarr;
        </Link>
      </section>
    </motion.div>
  );
}
