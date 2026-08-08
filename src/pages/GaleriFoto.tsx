import { Link } from 'react-router-dom';
import mayors from '../data/mayors.json';
import BottomNav from '../components/common/BottomNav';
import MayorCarousel from '../components/gallery/MayorCarousel';

export default function GaleriFoto() {
  return (
    <div className="h-screen overflow-hidden bg-cream flex flex-col pb-24">

      <header className="relative px-5 pt-6 pb-2 shrink-0">
        <Link
          to="/"
          className="touch-target absolute top-6 right-5 rounded-full bg-navy text-cream text-xs px-4 flex items-center"
        >
          Kembali
        </Link>
        <p className="font-heading italic text-red text-base leading-none">Lihat</p>
        <h1
          className="font-heading font-black text-navy leading-none mt-1"
          style={{ fontSize: 'clamp(2.6rem, 10vw, 4.5rem)' }}
        >
          Khazanah
          <br />
          Arsip
        </h1>
        <div className="flex items-center gap-2 mt-3 mb-2">
          <span className="h-px w-8 bg-gold/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="h-px w-8 bg-gold/60" />
        </div>
        <p className="text-navy/60 text-sm leading-relaxed">
          Kepala Daerah & Walikota Kota Depok dari masa ke masa, 1982–2025.
        </p>
      </header>

      <MayorCarousel mayors={mayors} />

      <BottomNav />
    </div>
  );
}
