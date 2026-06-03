import { useState, FormEvent } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, User, Mail, Phone, FileText } from 'lucide-react';
import { TREATMENTS } from '../data';
import { AppointmentBooking } from '../types';

interface Props {
  preselectedServiceId?: string;
  onSuccess?: () => void;
}

export default function BookingForm({ preselectedServiceId = '', onSuccess }: Props) {
  const [formData, setFormData] = useState<AppointmentBooking>({
    serviceId: preselectedServiceId || TREATMENTS[0]?.id || '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [createdBooking, setCreatedBooking] = useState<AppointmentBooking | null>(null);

  const selectedTreatment = TREATMENTS.find((t) => t.id === formData.serviceId);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill out all required clinical contact details.');
      return;
    }

    const newBooking: AppointmentBooking = {
      ...formData,
      id: 'book-' + Math.floor(Math.random() * 100000)
    };

    // Save to localStorage so users can see real records
    const existing = localStorage.getItem('skinhairhub_bookings');
    const list = existing ? JSON.parse(existing) : [];
    list.push(newBooking);
    localStorage.setItem('skinhairhub_bookings', JSON.stringify(list));

    setCreatedBooking(newBooking);
    setIsSubmitted(true);
    if (onSuccess) {
      onSuccess();
    }
  };

  const handleReset = () => {
    setFormData({
      serviceId: TREATMENTS[0]?.id || '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      notes: ''
    });
    setIsSubmitted(false);
    setCreatedBooking(null);
  };

  if (isSubmitted && createdBooking) {
    return (
      <div className="bg-brand-card border-2 border-brand-primary rounded-2xl p-6 text-center shadow-lg transition-all max-w-lg mx-auto animate-fadeIn">
        <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-border">
          <CheckCircle2 className="w-9 h-9 text-brand-primary" />
        </div>
        <span className="text-xs font-mono text-brand-primary tracking-wider uppercase font-semibold">Booking Verified</span>
        <h3 className="font-serif text-2xl text-gray-900 mt-1 font-semibold">Your Luxury Suite Awaits</h3>
        <p className="font-sans text-xs text-gray-600 mt-2 max-w-sm mx-auto leading-relaxed">
          A premium Skin & Hair Hub Nepal concierge specialist is preparing your clinical room. A confirmation with pre-treatment guidelines has been dispatched to your digital address.
        </p>

        <div className="my-5 p-4 rounded-xl bg-brand-surface border border-brand-border text-left space-y-2 text-xs">
          <div className="flex justify-between border-b border-brand-border/60 pb-1.5">
            <span className="font-medium text-gray-500">Scheduled Treatment:</span>
            <span className="font-semibold text-brand-primary">{selectedTreatment?.title}</span>
          </div>
          <div className="flex justify-between border-b border-brand-border/60 pb-1.5">
            <span className="font-medium text-gray-500">Honorary Guest:</span>
            <span className="font-semibold text-gray-900">{createdBooking.name}</span>
          </div>
          <div className="flex justify-between border-b border-brand-border/60 pb-1.5">
            <span className="font-medium text-gray-500">Date & Location:</span>
            <span className="font-semibold text-gray-900">{createdBooking.date} at Clinical Hub Nepal</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-500">Designated Hour:</span>
            <span className="font-semibold text-gray-900">{createdBooking.time}</span>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="w-full bg-brand-primary hover:bg-opacity-90 text-white font-sans font-semibold text-xs py-3 px-6 rounded-xl transition-all shadow-sm tracking-wide cursor-pointer animate-fadeIn"
        >
          Schedule Another Session
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-brand-card border border-brand-border rounded-2xl p-6 shadow-sm space-y-4 max-w-xl mx-auto animate-fadeIn">
      <div className="border-b border-brand-border pb-3">
        <h3 className="font-serif text-xl font-semibold text-gray-950 flex items-center gap-1.5">
          <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
          Skin & Hair Hub Treatment Reservation
        </h3>
        <p className="text-xs text-gray-500 font-sans mt-1">
          Select your therapy and schedule a luxurious session. No advance payment required.
        </p>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-gray-800 font-sans block">Aesthetics Treatment</label>
        <select
          value={formData.serviceId}
          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
          className="w-full font-sans text-xs bg-brand-surface/50 border border-brand-border rounded-xl px-3.5 py-3 text-gray-800 outline-none focus:border-brand-primary focus:bg-white transition-all appearance-none cursor-pointer"
        >
          {TREATMENTS.map((treatment) => (
            <option key={treatment.id} value={treatment.id}>
              {treatment.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-800 font-sans flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-brand-primary" /> Preferred Date
          </label>
          <input
            type="date"
            required
            value={formData.date}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full font-sans text-xs bg-brand-surface/50 border border-brand-border rounded-xl px-3.5 py-2.5 text-gray-800 outline-none focus:border-brand-primary focus:bg-white transition-all cursor-pointer"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-800 font-sans flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brand-primary" /> Desired Time Slot
          </label>
          <select
            required
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full font-sans text-xs bg-brand-surface/50 border border-brand-border rounded-xl px-3.5 py-2.5 text-gray-800 outline-none focus:border-brand-primary focus:bg-white transition-all appearance-none cursor-pointer"
          >
            <option value="">Choose slot...</option>
            <option value="09:00 AM">09:00 AM — Morning Serene</option>
            <option value="11:30 AM">11:30 AM — Luxury Midday</option>
            <option value="02:00 PM">02:00 PM — Early Afternoon</option>
            <option value="04:30 PM">04:30 PM — Afternoon Sunset</option>
            <option value="06:00 PM">06:00 PM — Evening Glow</option>
          </select>
        </div>
      </div>

      <div className="border-t border-brand-border/40 my-3"></div>

      <div className="space-y-3">
        <div className="space-y-1 animate-fadeIn">
          <label className="text-xs font-semibold text-gray-800 font-sans flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-brand-primary" /> Full Name
          </label>
          <input
            type="text"
            required
            placeholder="Hon. Victoria Montgomery"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full font-sans text-xs bg-brand-surface/50 border border-brand-border rounded-xl px-3.5 py-2.5 text-gray-800 outline-none focus:border-brand-primary focus:bg-white transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-800 font-sans flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-brand-primary" /> Email Address
            </label>
            <input
              type="email"
              required
              placeholder="vicky@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full font-sans text-xs bg-brand-surface/50 border border-brand-border rounded-xl px-3.5 py-2.5 text-gray-800 outline-none focus:border-brand-primary focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-800 font-sans flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-brand-primary" /> Private Phone
            </label>
            <input
              type="tel"
              required
              placeholder="+1 (555) 732-9988"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full font-sans text-xs bg-brand-surface/50 border border-brand-border rounded-xl px-3.5 py-2.5 text-gray-800 outline-none focus:border-brand-primary focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-800 font-sans flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-brand-primary" /> Custom Concerns or Medical Notes (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Please mention skin sensitivities, active allergies, or custom beauty preferences here..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full font-sans text-xs bg-brand-surface/50 border border-brand-border rounded-xl px-3.5 py-2.5 text-gray-800 outline-none focus:border-brand-primary focus:bg-white transition-all resize-none"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-brand-primary text-white font-sans font-semibold text-xs py-3 px-6 rounded-xl hover:bg-opacity-95 transition-all shadow-md focus:ring-2 focus:ring-brand-accent text-center tracking-wider uppercase mt-2 cursor-pointer"
      >
        Submit Registration Request
      </button>

      <p className="text-[10px] text-gray-400 text-center font-sans">
        By scheduling, you agree to our respectful 24-hour rescheduling policy.
      </p>
    </form>
  );
}
