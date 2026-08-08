import { forwardRef, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import type { StoryEra } from '../../types';

interface StoryBookProps {
  eras: StoryEra[];
}

interface PageProps {
  era: StoryEra;
}

// react-pageflip butuh tiap halaman berupa elemen dengan ref langsung
// menempel (forwardRef), karena library-nya mengukur & menggerakkan
// elemen DOM ini secara langsung untuk bikin efek lipatan kertas.
//
// Ilustrasi mengisi seluruh halaman sebagai background, lalu ditutup
// gradient gelap dari tengah ke bawah supaya teks "menyatu" dengan
// gambar, bukan dua blok terpisah. Ganti /public/assets/story/*.jpg
// dengan ilustrasi (bukan foto) begitu asetnya siap.
const Page = forwardRef<HTMLDivElement, PageProps>(({ era }, ref) => {
  return (
    <div ref={ref} className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${era.imageUrl})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(20,33,61,0) 38%, rgba(20,33,61,0.88) 66%, rgba(20,33,61,0.98) 100%)',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="font-heading font-semibold text-gold text-lg mb-2">
          {era.year}
        </p>
        <p className="font-heading font-medium text-3xl text-cream mb-4 leading-tight">
          {era.title}
        </p>
        <p className="text-cream/90 text-lg leading-relaxed">{era.body}</p>
      </div>
    </div>
  );
});
Page.displayName = 'Page';

export default function StoryBook({ eras }: StoryBookProps) {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      {/* Buku mengisi seluruh sisa tinggi layar — calc(100vh - tinggi header - nav) */}
      <div
        className="w-full max-w-[760px] mx-auto overflow-hidden flex-1"
        style={{ minHeight: 0 }}
      >
        <HTMLFlipBook
          ref={bookRef}
          width={720}
          height={1100}
          size="stretch"
          minWidth={420}
          maxWidth={760}
          minHeight={700}
          maxHeight={1400}
          startPage={0}
          drawShadow={true}
          flippingTime={700}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={false}
          swipeDistance={20}
          clickEventForward={true}
          useMouseEvents={true}
          showPageCorners={true}
          disableFlipByClick={false}
          className="rounded-2xl shadow-lg"
          style={{}}
          onFlip={(e: { data: number }) => setCurrentPage(e.data)}
        >
          {eras.map((era) => (
            <Page key={era.id} era={era} />
          ))}
        </HTMLFlipBook>
      </div>

      <div className="flex items-center justify-between mt-4 px-4">
        <button
          onClick={() => bookRef.current?.pageFlip().flipPrev()}
          disabled={currentPage === 0}
          aria-label="Halaman sebelumnya"
          className="touch-target rounded-full bg-navy text-cream disabled:opacity-30 flex items-center justify-center text-xl"
        >
          &#8249;
        </button>

        <div className="flex gap-1.5 flex-wrap justify-center max-w-[60%]">
          {eras.map((e, i) => (
            <span
              key={e.id}
              className={`block rounded-full transition-all ${
                i === currentPage ? 'w-5 h-1.5 bg-red' : 'w-1.5 h-1.5 bg-navy/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          disabled={currentPage === eras.length - 1}
          aria-label="Halaman berikutnya"
          className="touch-target rounded-full bg-navy text-cream disabled:opacity-30 flex items-center justify-center text-xl"
        >
          &#8250;
        </button>
      </div>

      <p className="text-center text-navy/40 text-xs mt-3">
        {currentPage + 1} / {eras.length}
      </p>
    </div>
  );
}
