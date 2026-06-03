export interface Treatment {
  id: string;
  title: string;
  category: 'Skin' | 'Hair' | 'Laser' | 'Facial' | 'Nails' | 'Consultation';
  price: string;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  image: string;
}

export interface Product {
  id: string;
  title: string;
  category: 'Serums' | 'Creams' | 'Cleansers' | 'Treatments';
  price: number;
  description: string;
  size: string;
  rating: number;
  image: string;
  ingredients: string[];
}

export interface Expert {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  credentials: string[];
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  rating: number;
  text: string;
  treatmentReceived: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentBooking {
  id?: string;
  serviceId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}
