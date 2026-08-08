import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PetaInteraktif from './pages/PetaInteraktif';
import CeritaDepok from './pages/CeritaDepok';
import GaleriFoto from './pages/GaleriFoto';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peta" element={<PetaInteraktif />} />
      <Route path="/cerita" element={<CeritaDepok />} />
      <Route path="/galeri" element={<GaleriFoto />} />
    </Routes>
  );
}

export default App;
