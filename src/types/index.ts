// Tipe data untuk fitur Peta Interaktif
export interface HistoricalLocation {
  id: string;
  name: string;
  address: string;
  yearFounded: string;
  category: string;
  description: string;
  funFact: string;
  photoUrl: string;
  gallery: string[];
  // Posisi pin di atas ilustrasi peta custom, dalam persen (0-100)
  // supaya tetap presisi walau ukuran layar kiosk berbeda-beda.
  mapPosition: {
    xPercent: number;
    yPercent: number;
  };
}

// Tipe data untuk fitur Cerita Sejarah Depok (timeline naratif)
export interface StoryEra {
  id: string;
  year: string;
  title: string;
  body: string;
  imageUrl: string;
  source?: string;
}

// Tipe data untuk fitur Galeri Foto Bersejarah
export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Foto' | 'Dokumen' | 'Peta' | 'Surat' | 'Arsip Pemerintah' | 'Majalah Lama';
  year: string;
  imageUrl: string;
  caption: string;
}
