# Depok Heritage Interactive Kiosk

Museum digital sejarah Kota Depok — kiosk touchscreen untuk Diskarpus Kota Depok,
bagian dari rangkaian HUT RI ke-81.

Versi ini **statis** — tanpa database, tanpa admin panel. Semua konten hidup
sebagai file JSON di `src/data/`, jadi tidak butuh backend, tidak butuh internet
saat kiosk berjalan (setelah build).

## Fitur

1. **Peta Interaktif** (`/peta`) — peta lokasi bersejarah dengan pin yang bisa
   disentuh, memunculkan panel info dari bawah.
2. **Cerita Sejarah Depok** (`/cerita`) — timeline naratif dari masa kolonial
   hingga sekarang.
3. **Galeri Foto Bersejarah** (`/galeri`) — grid foto arsip, tap untuk lihat
   fullscreen.

## Struktur folder

```
src/
├── components/
│   ├── common/     BottomNav, dan komponen yang dipakai di semua halaman
│   ├── map/        LocationPanel, khusus fitur Peta Interaktif
│   ├── story/       (siap dipakai kalau Cerita Depok butuh sub-komponen)
│   └── gallery/     (siap dipakai kalau Galeri Foto butuh sub-komponen)
├── data/
│   ├── locations.json   data 7 lokasi untuk Peta Interaktif
│   ├── story.json       data 8 era timeline untuk Cerita Sejarah Depok
│   └── gallery.json     data foto untuk Galeri Foto Bersejarah
├── pages/
│   ├── Home.tsx
│   ├── PetaInteraktif.tsx
│   ├── CeritaDepok.tsx
│   └── GaleriFoto.tsx
└── types/index.ts   tipe TypeScript untuk ketiga data di atas
```

Gambar-gambar taruh di `public/assets/locations/`, `public/assets/story/`,
`public/assets/gallery/` — path-nya sudah dirujuk di masing-masing file JSON,
tinggal ganti nama file sesuai foto yang dipakai. Ilustrasi peta utama sudah
terpasang di `public/assets/map/peta-depok.jpg`, dengan posisi 7 pin di
`locations.json` (`mapPosition`) sudah disesuaikan presisi ke posisi ikon
gambar tersebut — kalau ilustrasi petanya diganti lagi nanti, posisi pin
perlu disesuaikan ulang juga.

## Mengisi konten

Banyak field di `src/data/*.json` masih ditandai `"TODO"` — itu tempat naskah
sejarah asli dari arsip Diskarpus perlu dimasukkan. Hanya "Monumen Cornelis
Chastelein" yang sudah terisi penuh, dari mockup yang sudah dibuat sebelumnya.

Posisi pin di `locations.json` (`mapPosition.xPercent` / `yPercent`) masih
perkiraan kasar dari layout mockup — sesuaikan lagi begitu ilustrasi peta
isometrik final sudah jadi.

## Efek buka halaman di Cerita Sejarah Depok

Fitur `/cerita` memakai library `react-pageflip` supaya efeknya seperti
membalik halaman buku sungguhan (kertas melengkung, ada bayangan lipatan),
bukan sekadar transisi geser biasa. Bisa disentuh di sudut halaman dan
di-drag, atau pakai tombol panah di bawah.

Ditampilkan **satu halaman saja** (bukan dua halaman berdampingan) —
lebar area buku sengaja dikunci di `StoryBook.tsx` supaya selalu di bawah
ambang batas yang bikin library-nya pindah ke mode dua halaman.

Tiap halaman berupa **ilustrasi (bukan foto)** yang mengisi seluruh
halaman sebagai background, dengan teks menyatu di bagian bawah lewat
gradient gelap — bukan gambar dan teks sebagai dua blok terpisah. Ganti
file placeholder di `public/assets/story/` dengan ilustrasi final. Karena
teks tidak bisa di-scroll (harus muat satu halaman penuh), kalau nanti
mengedit narasi di `story.json`, usahakan tetap ringkas seperti isi yang
sudah ada.

## Warna & font

Didefinisikan di `src/index.css` lewat `@theme` (Tailwind v4):
cream `#FCF3E1`, navy `#14213D`, red `#C1272D`, green `#6B8F4E`, gold `#C9A227`.
Font: Poppins (heading) dan Plus Jakarta Sans (body). Nilai navy/red/green/gold
ini masih perkiraan karena brief belum kasih hex pasti — sesuaikan kalau
Diskarpus sudah punya panduan warna resmi.

## Menjalankan di lokal

```
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Deploy

1. Push folder ini ke repo GitHub baru.
2. Buka [vercel.com](https://vercel.com), pilih "Import Project", sambungkan ke
   repo GitHub tadi. Vercel otomatis mendeteksi ini project Vite dan build-nya.
3. Setiap kali push ke branch utama, Vercel otomatis build ulang dan deploy.
4. Di perangkat kiosk, buka URL Vercel tersebut lewat browser dalam mode
   kiosk/fullscreen. Kalau ingin kiosk bisa berjalan tanpa internet sama
   sekali, jalankan `npm run build` lalu salin folder `dist/` ke perangkat dan
   sajikan secara lokal.
