import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SeedsPage from './pages/SeedsPage';
import SeedDetailPage from './pages/SeedDetailPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Layout from './components/layout/Layout';
import PoontangPie from './pages/strains/PoontangPie';
import RestingBitchFace from './pages/strains/RestingBitchFace';
import WilsonZero from './pages/strains/WilsonZero';

function App() {
  // Use the correct basename for GitHub Pages
  const basename = import.meta.env.DEV ? '/' : '/seeds/';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="seeds" element={<SeedsPage />} />
          {/* Remove or comment out the generic seed detail route */}
          {/* <Route path="seeds/:id" element={<SeedDetailPage />} /> */}
          
          {/* Add specific strain routes */}
          <Route path="seeds/poontang-pie" element={<PoontangPie />} />
          <Route path="seeds/resting-bitch-face" element={<RestingBitchFace />} />
          <Route path="seeds/wilson-zero" element={<WilsonZero />} />
          
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
