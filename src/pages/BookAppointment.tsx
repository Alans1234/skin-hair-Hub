import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Trash2 } from 'lucide-react';
import { TREATMENTS } from '../data';
import { AppointmentBooking } from '../types';
import BookingForm from '../components/BookingForm';

export default function BookAppointment() {
  const location = useLocation();
  const state = location.state as { preselectedServiceId?: string } | null;
  const initialPreselectedId = state?.preselectedServiceId || '';

  const [storedBookings, setStoredBookings] = useState<AppointmentBooking[]>([]);

  // Load existing bookings on startup
  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    const list = localStorage.getItem('skinhairhub_bookings');
    if (list) {
      try {
        setStoredBookings(JSON.parse(list));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleCancelBooking = (id: string | undefined) => {
    if (!id) return;
    if (window.confirm('Are you sure you want to cancel this reserved treatment?')) {
      const list = storedBookings.filter((b) => b.id !== id);
      localStorage.setItem('skinhairhub_bookings', JSON.stringify(list));
      setStoredBookings(list);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 animate-fadeIn"
    >
      {/* BOOKING SUMMARY */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">The Sanctuary Calendar</span>
        <h1 className="font-serif text-4xl font-bold text-gray-950">Secure Clinical Consultations</h1>
        <p className="text-xs text-gray-600 font-sans leading-relaxed">
          Select your therapy and reserve direct time slots. Your aesthetic scan and medical outline are prepared with dedicated, zero-payment hospitality.
        </p>
      </section>

      {/* COMPONENT SEGMENT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Booking Interactive Card Form */}
        <div className="lg:col-span-7">
          <BookingForm
            preselectedServiceId={initialPreselectedId}
            onSuccess={loadBookings}
          />
        </div>

        {/* History Lookups Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-brand-border p-6 rounded-2xl shadow-soft text-left space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#4E342E] border-b border-brand-border/60 pb-2">Your Dermal Agenda</h3>
            
            {storedBookings.length > 0 ? (
              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {storedBookings.map((b) => {
                  const treatmentObj = TREATMENTS.find((t) => t.id === b.serviceId);
                  return (
                    <div
                      key={b.id}
                      className="p-3 bg-brand-surface/40 hover:bg-brand-surface border border-brand-border rounded-xl flex justify-between items-center transition-colors"
                    >
                      <div className="space-y-0.5 min-w-0 pr-2">
                        <p className="text-xs font-bold text-brand-primary truncate">
                          {treatmentObj?.title || 'Bespoke Assessment'}
                        </p>
                        <p className="text-[10px] text-gray-500 font-sans flex flex-wrap gap-x-2 gap-y-0.5">
                          <span>Guest: <strong>{b.name}</strong></span>
                          <span>&bull;</span>
                          <span className="text-gray-600">{b.date} at {b.time}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => handleCancelBooking(b.id)}
                        className="text-gray-400 hover:text-brand-accent p-1.5 bg-white border border-brand-border rounded-lg shadow-xs hover:border-brand-accent transition-colors flex-shrink-0 cursor-pointer"
                        title="Cancel Reserved Appointment"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 px-4 rounded-xl border border-dashed border-brand-border/85 bg-brand-surface/20 text-xs text-gray-400 font-sans leading-relaxed">
                <CheckCircle2 className="w-8 h-8 text-brand-border mx-auto mb-2.5 opacity-60" />
                No active clinical appointments booked on this browser session yet. Save your slot above to view details here.
              </div>
            )}
          </div>

          <div className="bg-brand-primary/5 rounded-2xl border border-brand-border p-5 text-left space-y-2">
            <h4 className="text-xs font-bold text-[#4E342E] uppercase tracking-wider">No-Payment Commitment</h4>
            <p className="text-[11px] text-gray-600 font-sans leading-relaxed">
              We charge zero pre-payment fees. If you need to cancel or shift hours, you can do so directly using this agenda panel or notify our reception helpline at +977 (1) 422-8000.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
