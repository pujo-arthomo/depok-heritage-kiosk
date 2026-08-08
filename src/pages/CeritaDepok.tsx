import { Link } from 'react-router-dom';
import story from '../data/story.json';
import StoryBook from '../components/story/StoryBook';
import BottomNav from '../components/common/BottomNav';
import type { StoryEra } from '../types';

const eras = story as StoryEra[];

export default function CeritaDepok() {
  return (
    <div className="h-screen overflow-hidden bg-cream pb-24 flex flex-col">
      <header className="relative px-5 pt-4 pb-1 shrink-0">
        <Link
          to="/"
          className="touch-target absolute top-6 right-5 rounded-full bg-navy text-cream text-xs px-4 flex items-center"
        >
          Kembali
        </Link>
        <p className="font-heading italic text-red text-base leading-none">Baca</p>
        <h1
          className="font-heading font-black text-navy leading-none mt-1"
          style={{ fontSize: 'clamp(2.6rem, 10vw, 4.5rem)' }}
        >
          Cerita
          <br />
          Sejarah Depok
        </h1>
        <div className="flex items-center gap-2 mt-3">
          <span className="h-px w-8 bg-gold/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="h-px w-8 bg-gold/60" />
        </div>
      </header>

      <p className="px-5 text-navy/60 text-xs mb-1 shrink-0">
        Sentuh panah atau geser untuk membuka halaman berikutnya
      </p>

      <StoryBook eras={eras} />

      <BottomNav />
    </div>
  );
}
