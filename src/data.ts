import { Treatment, Product, Expert, BeforeAfterItem, Testimonial, FaqItem } from './types';

export const TREATMENTS: Treatment[] = [
  {
    id: 't-hydrafacial',
    title: 'HydraFacial Platinum Signature',
    category: 'Facial',
    price: '$295',
    duration: '60 mins',
    shortDescription: 'The ultimate skin detoxification and hydration procedure combining active peeling with dynamic antioxidant sealing.',
    fullDescription: 'Our signature multi-step therapy utilizes patented vortex fusion technology to deep-cleanse, painlessly extract congestion, and seal deep epidermal layers with highly concentrated botanical extracts, peptides, and premium hyaluronic acid.',
    benefits: [
      'Deeply cleanses and purifies congested facial pores',
      'Improves dermal elasticity and evens out skin tone',
      'Saturates cellular layers with intense nutrient complexes',
      'Zero downtime with immediate, high-gloss results'
    ],
    image: '/src/assets/images/elite_facial_glow_1780468949566.png'
  },
  {
    id: 't-microneedling',
    title: 'Fractional RF Dermal Remodeling',
    category: 'Skin',
    price: '$450',
    duration: '75 mins',
    shortDescription: 'Synergistic radiofrequency microneedling targeting deep collagen structures for ultimate skin firming and scar smoothing.',
    fullDescription: 'By combining gold-plated micro-needles with precise bipolar radiofrequency pulses, this state-of-the-art procedure triggers a highly localized healing cascade in the deep reticular dermis, stimulating massive new collagen and elastin production.',
    benefits: [
      'Visibly lifts, tightens, and firms lax facial contours',
      'Safely reduces fine lines, deep wrinkles, and acne scarring',
      'Promotes cellular turnover and refines rough skin texture',
      'Customizable depth levels tailored perfectly to your dermis structure'
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't-picosure',
    title: 'PicoSure Laser Skin Resurfacing',
    category: 'Laser',
    price: '$550',
    duration: '45 mins',
    shortDescription: 'Advanced ultra-fast picosecond thermal technology addressing pigmentation, age spots, and uneven complexions.',
    fullDescription: 'Utilizing fractional pressure waves rather than harsh burning heat, PicoSure targets stubborn melanin deposits and sun damage without harming surrounding skin layers, prompting self-repair and rapid brightness.',
    benefits: [
      'Effectively breaks down melasma, freckles, and sun hyperpigmentation',
      'Stimulates structural collagen without open wounds or redness',
      'Gentle on skin with minimal social downtime of only a few hours',
      'Saves time with fast, high-intensity targeted sessions'
    ],
    image: '/src/assets/images/elite_treatment_room_1780468916103.png'
  },
  {
    id: 't-caviar',
    title: 'Caviar Micro-Sculpting Facial',
    category: 'Facial',
    price: '$380',
    duration: '90 mins',
    shortDescription: 'Indulgent, cell-rejuvenating facial leveraging rich Sturgeon caviar extracts to dramatically firm tired tissues.',
    fullDescription: 'Designed for our most discerning clients, this opulent facial massage incorporates highly concentrated marine active proteins, liquid silk amino acids, and microcurrent lifting technology to firm the facial matrix and restore youth.',
    benefits: [
      'Imparts an instant, long-lasting porcelain radiance',
      'Nourishes dry cells with essential fatty acids and minerals',
      'Soothes inflammation while defining jawline contours',
      'Includes an ultra-relaxing neck, shoulder and décolleté botanical massage'
    ],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't-platelet',
    title: 'Follicular Platelet Enrichment',
    category: 'Hair',
    price: '$650',
    duration: '60 mins',
    shortDescription: 'Autologous scalp revitalization therapy designed to natural activate thinning follicles and stimulate growth cycles.',
    fullDescription: 'A clinical service isolating rich growth factors. Micro-injected into the upper dermis level of the scalp, it awakens dormant hair follicles, increases blood and oxygen flow, and thickens existing hair fibers safely and naturally.',
    benefits: [
      'Re-anchors weak hair roots and stops active follicular regression',
      'Boosts hair density and diameter in targeted zones',
      'Uses natural, non-synthetic clinical bio-compounds',
      'Administered under sterile medical conditions with local comfort creams'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't-botanical-nails',
    title: 'Nail Restorative Spa Manicure',
    category: 'Nails',
    price: '$95',
    duration: '50 mins',
    shortDescription: 'Therapeutic hand wellness session combining customized nail shaping with mineral clay and botanical hot oil wraps.',
    fullDescription: 'Our nail restorative ritual focuses heavily on keratin health. Enjoy premium chemical-free organic dermal scrubs, cuticle conditioning, mineral clay cell wraps, and an ultra-relaxing warm rose-wax massage prep.',
    benefits: [
      'Re-hydrates brittle nails and repairs dry, cracked skin layers',
      'Exfoliates with premium micro-fine volcanic pearl powder',
      'Features premium organic non-toxic toxin-free varnish selections',
      'Highly hygienic medical-grade sterilization of all tools'
    ],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 't-consultation',
    title: 'Aesthetic Face Vector Analysis',
    category: 'Consultation',
    price: '$120',
    duration: '45 mins',
    shortDescription: 'In-depth dermal scan and structural vector plotting with our Lead Doctor to develop your personalized longevity roadmaps.',
    fullDescription: 'Utilizing advanced multi-spectral cross-polarized facial imaging, we analyze invisible sun damage, vascular patterns, moisture indexes, and wrinkle depths to mathematically plot your ideal 12-month rejuvenation roadmap.',
    benefits: [
      'Reveals sub-surface pigmentation and future micro-line risks',
      'Enables high-precision, custom-tailored laser and dermal doses',
      'Fully refundable upon booking any of your planned clinical procedures',
      'Accompanied by a luxury health beverage and detailed digital profile'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Signature Hydration Serum (HA+)',
    category: 'Serums',
    price: 145,
    description: 'A multi-weight medical grade Hyaluronic Acid serum containing powerful beta-glucan compounds to instantly plump dehydration lines and construct an elegant moisture reservoir.',
    size: '30 ml',
    rating: 5.0,
    image: '/src/assets/images/elite_skincare_product_1780468933535.png',
    ingredients: ['Multi-Weight Hyaluronic Acid', 'Peptide Complex', 'Beta-Glucan', 'Organic Chamomile Extract']
  },
  {
    id: 'p2',
    title: 'Bio-Matrix Crème Radiance',
    category: 'Creams',
    price: 185,
    description: 'A deeply nourishing, rich, velvet-feel face cream. Boosts natural lipid barriers and uses gentle retinoids alongside botanical ceramides to repair and resurface tired skin.',
    size: '50 ml',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=600',
    ingredients: ['Ceramide NP', 'Phytosphingosine', '0.5% Encapsulated Retinol', 'Rich Shea Extract', 'Rose Centifolia Water']
  },
  {
    id: 'p3',
    title: 'Pure Velvet Amino Gel Cleanser',
    category: 'Cleansers',
    price: 65,
    description: 'Ultra-gentle low-pH pH foam wash with rich amino acids and thermal water. Effortlessly lifts away sunscreen, environmental toxins, and surface oils without stripping beneficial lipophilic fats.',
    size: '150 ml',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600',
    ingredients: ['Oat Amino Acids', 'Thermal Spring Water', 'Squalane', 'Centella Asiatica (Cica) Extract']
  },
  {
    id: 'p4',
    title: 'Cellular Defense Shield SPF 50+',
    category: 'Treatments',
    price: 85,
    description: 'Broad-spectrum mineral physical sunscreen with lightweight elegant zinc fluid. Includes skin-brightening niacinamide and potent green tea antioxidants for total daily skin shield.',
    size: '50 ml',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600',
    ingredients: ['20% Zinc Oxide', '4% Niacinamide', 'EGCG (Green Tea Extract)', 'Resveratrol']
  }
];

export const EXPERTS: Expert[] = [
  {
    id: 'exp1',
    name: 'Dr. Evelyn Sinclair, MD',
    role: 'Chief Medical Director & Founder',
    bio: 'Dr. Evelyn Sinclair graduated with top honors from Stanford Medical School, specializing in cosmetic dermatology and non-surgical facial rejuvenation. She has over 14 years of clinical experience blending scientific accuracy with artful aesthetic harmony.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500',
    specialties: ['Facial Vector Injectables', 'Advanced Laser Systems', 'Anti-Aging Custom Roadmaps'],
    credentials: ['Board Certified Dermatologist', 'Member of American Society for Laser Medicine & Surgery', 'Stanford Health Alumna']
  },
  {
    id: 'exp2',
    name: 'Dr. Marcus Vance, PhD',
    role: 'Lead Laser Therapeutist',
    bio: 'With a doctorate in biophysics and a deep medical focus on laser-tissue interactions, Dr. Vance is at the absolute forefront of pigment correction and fractional light therapies. He consults globally on safe, ultra-precise skin treatments.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500',
    specialties: ['Fractional Microneedling RF', 'PicoSure Laser Resurfacing', 'Vascular Scar Subcision'],
    credentials: ['PhD in Medical Light Physics', 'ASLMS Certified Practitioner', 'Former Research Lead at CynoSure Group']
  },
  {
    id: 'exp3',
    name: 'Sarah Lin, LE',
    role: 'Senior Spa Esthetician & Skin Coach',
    bio: 'Sarah boasts a comprehensive European spa training and specializes in restorative facial rituals. She believes in treating the skin holistically—fusing advanced medical technologies with relaxing high-end botanical cellular massage.',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=500',
    specialties: ['Premium Dermal Sculpting', 'Lymphatic Drainage Sculpting Massage', 'Aqueous Nutrient Infusions'],
    credentials: ['Licensed CIDESCO Esthetician (Switzerland)', 'Expert HydraFacial Educator', 'Certified Advanced Skin Needler']
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba1',
    title: 'Signature Radiance Peel Protocol',
    category: 'Facial & Pigment Correction',
    description: 'Client presented with heavy sun damage and hyperpigmentation across cheeks. This 3-month result demonstrates 3 sessions of PicoSure Laser combined with Bio-Matrix skincare.',
    beforeImage: 'https://images.unsplash.com/photo-1614859324967-bdf461fcf769?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ba2',
    title: 'RF Dermal Jawline Sculpting',
    category: 'Skin Firming & Contouring',
    description: 'Noticeable sag and fine lines along the lower jaw area. Transformed using 2 sessions of Fractional Gold RF Microneedling to lift tissue and generate structural deep collagen.',
    beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600',
    afterImage: '/src/assets/images/elite_facial_glow_1780468949566.png'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tst1',
    clientName: 'Victoria Montgomery',
    rating: 5,
    text: 'Skin & Hair Hub Nepal completely changed how I think about my skin. Dr. Sinclair did not just sell me treatments; she drew a full mathematical timeline. My face looks younger, deeply hydrated, and completely natural.',
    treatmentReceived: 'HydraFacial Platinum & Vector Injectables',
    date: '3 weeks ago'
  },
  {
    id: 'tst2',
    clientName: 'Alexandra Sterling',
    rating: 5,
    text: 'The PicoSure treatment is hands-down the best investment I have ever made. My stubborn melasma, which I had for six years, faded significantly after just two treatments. The clinic is absolute luxury.',
    treatmentReceived: 'PicoSure Laser Resurfacing',
    date: '1 month ago'
  },
  {
    id: 'tst3',
    clientName: 'Julianne Thorne',
    rating: 5,
    text: 'A world-class experience. The moment you walk in, you feel serene and cared for. No aggressive upselling, just pure medical excellence and warm hospitality. My skin literally glows is now incredibly soft.',
    treatmentReceived: 'Caviar Micro-Sculpting Facial',
    date: '2 months ago'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq1',
    question: 'What should I expect during my first consultation at Skin & Hair Hub Nepal?',
    answer: 'Your first visit begins with a warm welcome and a custom botanical beverage. You will undergo a state-of-the-art Dermal Scan (Face Vector Analysis) which maps sub-surface pigment, moisture index, and skin layers. Dr. Evelyn Sinclair will sit down with you to study the scan and create a bespoke 12-month treatment plan that prioritizes your wellness goals.'
  },
  {
    id: 'faq2',
    question: 'How do you ensure treatments are safe and clinical?',
    answer: 'Skin & Hair Hub Nepal operates with absolute medical rigor. All treatments are conceptualized, supervised, or carried out directly by double-certified medical doctors. We use premium FDA-approved laser technology, and maintain surgical-grade hygiene standards across all suites.'
  },
  {
    id: 'faq3',
    question: 'Is there downtime involved in Fractional RF Dermal Remodeling?',
    answer: 'Fractional RF has very minimal downtime. You can expect mild pinkness, similar to a light sunburn, for 12 to 24 hours. We provide a customized post-treatment recovery balm (from our premium clinical line) that accelerates dermal healing so you can resume makeup and social activities quickly.'
  },
  {
    id: 'faq4',
    question: 'Do you offer virtual consultations or online inquiries?',
    answer: 'Yes! We recognize that busy schedules make physical walk-ins difficult. You can book an interactive Virtual Aesthetics Consult, or submit any custom product inquiries directly through our Products page for customized recommendations from our clinical team.'
  }
];
