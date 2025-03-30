import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SeedsPage from './pages/SeedsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Layout from './components/layout/Layout';

// Import only the strain pages that exist
import PoontangXOP from './pages/strains/PoontangXOP';
import PoontangXPeachGoblin from './pages/strains/PoontangXPeachGoblin';
import WilsonZeroXOP from './pages/strains/WilsonZeroXOP';
import PoontangXFruitOfEden from './pages/strains/PoontangXFruitOfEden';
import PoontangXPeachSmash from './pages/strains/PoontangXPeachSmash';
import PoontangXBlueberry from './pages/strains/PoontangXBlueberry';
import PoontangXSpaceGelloZuchi from './pages/strains/PoontangXSpaceGelloZuchi';
import PoontangXFizzleRocksCandyJam from './pages/strains/PoontangXFizzleRocksCandyJam';
import PoontangXHuckleberryMellonheads from './pages/strains/PoontangXHuckleberryMellonheads';
import ChimeraXOP from './pages/strains/ChimeraXOP';
import ChimeraXSpaceGelloZuchi from './pages/strains/ChimeraXSpaceGelloZuchi';
import WilsonZeroXPeachGoblin from './pages/strains/WilsonZeroXPeachGoblin';
import WilsonZeroXHuckleberryMellonheads from './pages/strains/WilsonZeroXHuckleberryMellonheads';
import WilsonZeroXPeachSmash from './pages/strains/WilsonZeroXPeachSmash';
import RestingBitchFaceXOP from './pages/strains/RestingBitchFaceXOP';
import RestingBitchFaceXBlueberry from './pages/strains/RestingBitchFaceXBlueberry';
import RestingBitchFaceXPeachGoblin from './pages/strains/RestingBitchFaceXPeachGoblin';
import RestingBitchFaceXFizzleRocksCandyJam from './pages/strains/RestingBitchFaceXFizzleRocksCandyJam';
import TropCherryXOP from './pages/strains/TropCherryXOP';
import TropCherryXSpaceGelloZuchi from './pages/strains/TropCherryXSpaceGelloZuchi';
import TropCherryXPeachGoblin from './pages/strains/TropCherryXPeachGoblin';
import TropCherryXHuckleberryMellonheads from './pages/strains/TropCherryXHuckleberryMellonheads';
import TropCherryXBlueberry from './pages/strains/TropCherryXBlueberry';

function App() {
  // Use the correct basename for GitHub Pages
  const basename = import.meta.env.DEV ? '/' : '/seeds/';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="seeds" element={<SeedsPage />} />
          
          {/* Strain routes - only include the ones we have files for */}
          <Route path="seeds/poontang-x-open-pollination" element={<PoontangXOP />} />
          <Route path="seeds/poontang-x-peach-goblin" element={<PoontangXPeachGoblin />} />
          <Route path="seeds/wilson-zero-x-open-pollination" element={<WilsonZeroXOP />} />
          
          <Route path="seeds/poontang-x-fruit-of-eden" element={<PoontangXFruitOfEden />} />
          <Route path="seeds/poontang-x-peach-smash" element={<PoontangXPeachSmash />} />
          <Route path="seeds/poontang-x-blueberry" element={<PoontangXBlueberry />} />
          <Route path="seeds/poontang-x-space-gello-x-zuchi" element={<PoontangXSpaceGelloZuchi />} />
          <Route path="seeds/poontang-x-fizzle-rocks-x-candy-jam" element={<PoontangXFizzleRocksCandyJam />} />
          
          <Route path="seeds/poontang-x-huckleberry-x-mellonheads" element={<PoontangXHuckleberryMellonheads />} />
          <Route path="seeds/chimera-x-open-pollination" element={<ChimeraXOP />} />
          <Route path="seeds/chimera-x-space-gello-x-zuchi" element={<ChimeraXSpaceGelloZuchi />} />
          
          <Route path="seeds/wilson-zero-x-peach-goblin" element={<WilsonZeroXPeachGoblin />} />
          <Route path="seeds/wilson-zero-x-huckleberry-x-mellonheads" element={<WilsonZeroXHuckleberryMellonheads />} />
          <Route path="seeds/wilson-zero-x-peach-smash" element={<WilsonZeroXPeachSmash />} />
          
          <Route path="seeds/resting-bitch-face-x-open-pollination" element={<RestingBitchFaceXOP />} />
          <Route path="seeds/resting-bitch-face-x-blueberry" element={<RestingBitchFaceXBlueberry />} />
          <Route path="seeds/resting-bitch-face-x-peach-goblin" element={<RestingBitchFaceXPeachGoblin />} />
          <Route path="seeds/resting-bitch-face-x-fizzle-rocks-x-candy-jam" element={<RestingBitchFaceXFizzleRocksCandyJam />} />
          
          <Route path="seeds/trop-cherry-x-open-pollination" element={<TropCherryXOP />} />
          <Route path="seeds/trop-cherry-x-space-gello-x-zuchi" element={<TropCherryXSpaceGelloZuchi />} />
          <Route path="seeds/trop-cherry-x-peach-goblin" element={<TropCherryXPeachGoblin />} />
          <Route path="seeds/trop-cherry-x-huckleberry-x-mellonheads" element={<TropCherryXHuckleberryMellonheads />} />
          <Route path="seeds/trop-cherry-x-blueberry" element={<TropCherryXBlueberry />} />
          
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<ArticlePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
