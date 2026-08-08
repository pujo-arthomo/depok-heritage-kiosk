import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    path: '/peta',
    title: 'Peta Interaktif',
    subtitle: 'Jelajahi titik lokasi bersejarah Kota Depok',
  },
  {
    path: '/cerita',
    title: 'Cerita Sejarah Depok',
    subtitle: 'Perjalanan Kota Depok dari masa kolonial hingga kini',
  },
  {
    path: '/galeri',
    title: 'Khazanah Arsip',
    subtitle: 'Koleksi foto dan dokumentasi arsip Diskarpus',
  },
];

export default function Home() {
  return (
    <div
      className="h-screen overflow-hidden bg-cream flex flex-col"
      style={{ position: 'relative' }}
    >
      {/* ── Ornamen sudut gold ── */}
      {/* Kiri atas */}
      <svg className="absolute top-0 left-0 pointer-events-none z-0" width="120" height="120" viewBox="0 0 120 120">
        <path d="M0 0 L80 0 Q60 0 60 20 L60 80 Q60 60 40 60 L0 60 Z" fill="none" stroke="#C9A227" strokeWidth="1.2" opacity="0.35"/>
        <path d="M0 0 L50 0 Q40 0 40 10 L40 50 Q40 40 30 40 L0 40 Z" fill="none" stroke="#C9A227" strokeWidth="0.7" opacity="0.2"/>
        <circle cx="4" cy="4" r="2.5" fill="#C9A227" opacity="0.3"/>
      </svg>
      {/* Kanan atas */}
      <svg className="absolute top-0 right-0 pointer-events-none z-0" width="120" height="120" viewBox="0 0 120 120">
        <path d="M120 0 L40 0 Q60 0 60 20 L60 80 Q60 60 80 60 L120 60 Z" fill="none" stroke="#C9A227" strokeWidth="1.2" opacity="0.35"/>
        <path d="M120 0 L70 0 Q80 0 80 10 L80 50 Q80 40 90 40 L120 40 Z" fill="none" stroke="#C9A227" strokeWidth="0.7" opacity="0.2"/>
        <circle cx="116" cy="4" r="2.5" fill="#C9A227" opacity="0.3"/>
      </svg>
      {/* Kiri bawah */}
      <svg className="absolute bottom-0 left-0 pointer-events-none z-0" width="120" height="120" viewBox="0 0 120 120">
        <path d="M0 120 L80 120 Q60 120 60 100 L60 40 Q60 60 40 60 L0 60 Z" fill="none" stroke="#C9A227" strokeWidth="1.2" opacity="0.35"/>
        <circle cx="4" cy="116" r="2.5" fill="#C9A227" opacity="0.3"/>
      </svg>
      {/* Kanan bawah */}
      <svg className="absolute bottom-0 right-0 pointer-events-none z-0" width="120" height="120" viewBox="0 0 120 120">
        <path d="M120 120 L40 120 Q60 120 60 100 L60 40 Q60 60 80 60 L120 60 Z" fill="none" stroke="#C9A227" strokeWidth="1.2" opacity="0.35"/>
        <circle cx="116" cy="116" r="2.5" fill="#C9A227" opacity="0.3"/>
      </svg>

      {/* ── Header: dua logo ── */}
      <header className="relative z-10 flex items-center justify-between px-6 pt-5 pb-2 shrink-0">
        <img
          src="/assets/logos/logo-diskarpus.png"
          alt="Dinas Kearsipan dan Perpustakaan Kota Depok"
          className="h-20 w-auto object-contain"
        />
        <img
          src="/assets/logos/logo-berakhlak.png"
          alt="ASN BerAKHLAK"
          className="h-14 w-auto object-contain"
        />
      </header>

      {/* ── Garis gold tipis di bawah header ── */}
      <div className="relative z-10 mx-6 shrink-0">
        <div className="h-px bg-gold/30" />
        <div className="flex justify-center mt-1 gap-1">
          <span className="w-12 h-0.5 bg-gold/50 rounded-full" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold/60 -mt-0.5" />
          <span className="w-12 h-0.5 bg-gold/50 rounded-full" />
        </div>
      </div>

      {/* ── Area kosong atas — diisi judul SI NYAI KAREN ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="relative z-10 px-2 pt-1 shrink-0"
      >
        <img
          src="/assets/title-sinyaikaren.png"
          alt="SI NYAI KAREN — Sistem Penyediaan Informasi Khazanah Arsip Elektronik"
          className="w-full object-contain"
        />
      </motion.div>

      {/* ── Konten utama: karakter kiri-kanan, teks + tombol di tengah ── */}
      <div className="relative z-10 flex-1 flex items-center px-2 gap-1 overflow-hidden">

        {/* NARA — kiri, lebih besar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="shrink-0"
          style={{ width: '34%' }}
        >
          <img
            src="/assets/characters/nara-home.png"
            alt="NARA"
            className="w-full object-contain"
          />
        </motion.div>

        {/* Tengah — judul + tombol */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex-1 flex flex-col items-center text-center px-2"
        >
          <p className="font-heading text-red text-sm tracking-widest uppercase mb-1">
            Diskarpus Kota Depok
          </p>
          <h1
            className="font-heading font-black text-navy leading-none mb-1"
            style={{ fontSize: 'clamp(1.8rem, 6vw, 3.2rem)' }}
          >
            JELAJAHI SEJARAH
            <br />
            KOTA DEPOK
          </h1>
          <p className="text-navy/60 text-sm mb-5">
            Sentuh salah satu fitur di bawah untuk mulai menjelajah
          </p>

          <div className="w-full flex flex-col gap-3">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.path}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.35 }}
              >
                <Link
                  to={feature.path}
                  className="touch-target block rounded-2xl bg-navy text-cream px-5 py-3 text-left shadow-sm"
                >
                  <p className="font-heading font-semibold text-sm">
                    {feature.title}
                  </p>
                  <p className="text-cream/60 text-xs mt-0.5">
                    {feature.subtitle}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Karen — kanan, lebih besar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="shrink-0"
          style={{ width: '34%' }}
        >
          <img
            src="/assets/characters/karen-home.png"
            alt="Nyai Karen"
            className="w-full object-contain"
          />
        </motion.div>
      </div>

      {/* ── Garis gold bawah ── */}
      <div className="relative z-10 mx-6 mb-3 shrink-0">
        <div className="flex justify-center mb-1 gap-1">
          <span className="w-12 h-0.5 bg-gold/50 rounded-full" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold/60 -mb-0.5" />
          <span className="w-12 h-0.5 bg-gold/50 rounded-full" />
        </div>
        <div className="h-px bg-gold/30" />
      </div>
    </div>
  );
}
