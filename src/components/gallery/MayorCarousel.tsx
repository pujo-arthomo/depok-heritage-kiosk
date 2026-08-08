import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Mayor {
  id: string;
  name: string;
  period: string;
  title: string;
  photoUrl: string;
}

interface MayorCarouselProps {
  mayors: Mayor[];
}

// Posisi relatif tiap foto di "fan" — indeks 0 = tengah/aktif
// offset negatif = kiri, positif = kanan
const SLOT_CONFIG = [
  { xOffset: 0,    rotate: 0,   scale: 1,    zIndex: 10, opacity: 1    },
  { xOffset: 380,  rotate: 9,   scale: 0.70, zIndex: 6,  opacity: 0.75 },
  { xOffset: 600,  rotate: 14,  scale: 0.50, zIndex: 4,  opacity: 0.40 },
  { xOffset: -380, rotate: -9,  scale: 0.70, zIndex: 6,  opacity: 0.75 },
  { xOffset: -600, rotate: -14, scale: 0.50, zIndex: 4,  opacity: 0.40 },
];

function getSlot(index: number, activeIndex: number, total: number) {
  let diff = index - activeIndex;
  // Wrap melingkar
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  if (diff === 0)  return SLOT_CONFIG[0];
  if (diff === 1)  return SLOT_CONFIG[1];
  if (diff === 2)  return SLOT_CONFIG[2];
  if (diff === -1) return SLOT_CONFIG[3];
  if (diff === -2) return SLOT_CONFIG[4];
  return null; // terlalu jauh, sembunyikan
}

export default function MayorCarousel({ mayors }: MayorCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = mayors.length;
  const active = mayors[activeIndex];

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  return (
    <div className="flex flex-col items-center">

      {/* Area carousel */}
      <div className="relative w-full" style={{ height: 900 }}>
        {mayors.map((mayor, i) => {
          const slot = getSlot(i, activeIndex, total);
          if (!slot) return null;
          const isActive = i === activeIndex;
          return (
            <motion.button
              key={mayor.id}
              onClick={() => !isActive && setActiveIndex(i)}
              animate={{
                x: slot.xOffset,
                rotate: slot.rotate,
                scale: slot.scale,
                opacity: slot.opacity,
                zIndex: slot.zIndex,
              }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: 16, transformOrigin: 'bottom center' }}
              aria-label={mayor.name}
            >
              {/* Frame polaroid */}
              <div
                className="bg-cream shadow-lg"
                style={{
                  padding: '20px 20px 80px 20px',
                  width: 420,
                  boxShadow: isActive
                    ? '0 24px 72px rgba(20,33,61,0.34)'
                    : '0 8px 24px rgba(20,33,61,0.14)',
                }}
              >
                <img
                  src={mayor.photoUrl}
                  alt={mayor.name}
                  className="w-full object-cover"
                  style={{ height: 560 }}
                />
                {/* Border aktif gold */}
                {isActive && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ border: '2px solid #C9A227' }}
                  />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Info aktif */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="text-center px-6 mt-4"
        >
          <p className="font-heading font-bold text-navy text-xl leading-snug">
            {active.name}
          </p>
          <p className="text-red text-base font-heading font-semibold mt-1">
            {active.period}
          </p>
          <p className="text-navy/60 text-sm mt-1 leading-snug">
            {active.title}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigasi panah */}
      <div className="flex items-center gap-8 mt-4">
        <button
          onClick={prev}
          aria-label="Sebelumnya"
          className="touch-target rounded-full bg-navy text-cream flex items-center justify-center text-xl"
        >
          &#8249;
        </button>

        {/* Dot indikator */}
        <div className="flex gap-1.5">
          {mayors.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all ${
                i === activeIndex ? 'w-5 h-1.5 bg-red' : 'w-1.5 h-1.5 bg-navy/25'
              }`}
              aria-label={`Ke foto ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Berikutnya"
          className="touch-target rounded-full bg-navy text-cream flex items-center justify-center text-xl"
        >
          &#8250;
        </button>
      </div>

      <p className="text-navy/40 text-xs mt-2">
        {activeIndex + 1} / {total}
      </p>
    </div>
  );
}
