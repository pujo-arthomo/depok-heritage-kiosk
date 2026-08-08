import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { path: '/peta', label: 'Peta Interaktif' },
  { path: '/cerita', label: 'Cerita Depok' },
  { path: '/galeri', label: 'Khazanah Arsip' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-navy px-4 py-3 flex gap-3">
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`touch-target flex-1 rounded-xl py-3 text-center font-heading font-medium text-sm transition-colors ${
              isActive ? 'bg-red text-cream' : 'bg-navy-dark text-cream'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
