import { motion, AnimatePresence } from 'framer-motion';
import type { HistoricalLocation } from '../../types';

interface LocationPanelProps {
  location: HistoricalLocation | null;
  onClose: () => void;
}

// Ikon garis sederhana (bukan library eksternal, biar dependency tetap ringan)
function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  );
}

function IconTag() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M20 13.5 12.5 21a2 2 0 0 1-2.8 0l-6.7-6.7a2 2 0 0 1 0-2.8L10.5 4H19a1 1 0 0 1 1 1v8.5Z" />
      <circle cx="15" cy="9" r="1.4" />
    </svg>
  );
}

function IconBulb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z" />
    </svg>
  );
}

interface StatBoxProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  small?: boolean;
}

function StatBox({ icon, label, value, small }: StatBoxProps) {
  return (
    <div className="rounded-xl bg-cream-dark p-2 text-center flex flex-col items-center gap-1">
      <span className="text-gold">{icon}</span>
      <p className="text-xs text-navy/60">{label}</p>
      <p
        className={`font-heading font-medium text-navy leading-snug ${
          small ? 'text-xs' : 'text-sm'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default function LocationPanel({ location, onClose }: LocationPanelProps) {
  return (
    <AnimatePresence>
      {location && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          className="fixed bottom-24 left-4 right-4 bg-cream rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Handle bar: sinyal visual bahwa panel ini bisa ditutup/digeser */}
          <div className="w-10 h-1.5 bg-navy/15 rounded-full mx-auto mt-2.5 mb-1" />

          <button
            onClick={onClose}
            aria-label="Tutup panel informasi"
            className="touch-target absolute top-3 right-3 z-10 rounded-full bg-navy/80 text-cream flex items-center justify-center"
          >
            &#10005;
          </button>

          <img
            src={location.photoUrl}
            alt={location.name}
            className="w-full aspect-[3/2] object-cover bg-navy-dark"
          />

          <div className="p-4 space-y-3">
            <div>
              <h3 className="font-heading font-semibold text-lg text-navy">
                {location.name}
              </h3>
              <p className="text-sm text-navy/70">{location.address}</p>
            </div>

            {/* Garis aksen gold tipis, bukan full-width, sebagai pemisah halus */}
            <div className="w-10 h-0.5 bg-gold rounded-full" />

            <p className="text-sm leading-relaxed text-navy">
              {location.description}
            </p>

            <div className="grid grid-cols-3 gap-2 pt-2">
              <StatBox icon={<IconCalendar />} label="Tahun" value={location.yearFounded} />
              <StatBox icon={<IconTag />} label="Kategori" value={location.category} />
              <StatBox icon={<IconBulb />} label="Fun fact" value={location.funFact} small />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
