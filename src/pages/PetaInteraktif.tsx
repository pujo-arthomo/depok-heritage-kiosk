import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import locations from '../data/locations.json';
import LocationPanel from '../components/map/LocationPanel';
import BottomNav from '../components/common/BottomNav';
import type { HistoricalLocation } from '../types';

const data = locations as HistoricalLocation[];

export default function PetaInteraktif() {
  const [selected, setSelected] = useState<HistoricalLocation | null>(null);
  const [karenVisible, setKarenVisible] = useState(true);

  return (
    <div className="h-screen overflow-hidden bg-cream flex flex-col">

      {/* Header tipis */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1 shrink-0">
        <div>
          <p className="font-heading italic text-red text-xs leading-none">Jelajahi</p>
          <p className="font-heading font-black text-navy text-xl leading-tight">
            Peta Sejarah Kota Depok
          </p>
        </div>
        <Link
          to="/"
          className="touch-target rounded-full bg-navy text-cream text-xs px-4 flex items-center shrink-0"
        >
          Kembali
        </Link>
      </div>

      {/* Kontainer peta */}
      <div className="relative flex-1 mx-4 mb-2 rounded-2xl overflow-hidden">

        {/* Peta ilustrasi */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/map/peta-depok.jpg)' }}
        />

        {/* Nyai Karen — PNG transparan, berdiri langsung di atas peta.
            Tidak auto-hilang; hanya hilang saat tombol tutup dipencet. */}
        <AnimatePresence>
          {karenVisible && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute left-0 top-0 z-20"
              style={{ width: '42%' }}
            >
              <img
                src="/assets/characters/karen-peta.png"
                alt="Nyai Karen memandu penjelajahan peta"
                className="w-full"
              />
              {/* Tombol tutup */}
              <button
                onClick={() => setKarenVisible(false)}
                aria-label="Tutup sambutan Nyai Karen"
                className="touch-target absolute rounded-full bg-navy/80 text-cream flex items-center justify-center shadow"
                style={{ top: 6, right: '18%', width: 34, height: 34, fontSize: 15 }}
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pin lokasi — semua pin hilang saat panel info terbuka.
            Karen kini transparan, jadi pin di belakangnya tetap tampil. */}
        <AnimatePresence>
          {!selected && data.map((loc, i) => (
            <motion.button
              key={loc.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelected(loc)}
              aria-label={loc.name}
              className="touch-target absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-red border-2 border-cream flex items-center justify-center text-cream text-xs font-heading font-semibold shadow z-30"
              style={{
                left: `${loc.mapPosition.xPercent}%`,
                top: `${loc.mapPosition.yPercent}%`,
                width: 40,
                height: 40,
              }}
            >
              {i + 1}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <LocationPanel location={selected} onClose={() => setSelected(null)} />
      <BottomNav />
    </div>
  );
}
