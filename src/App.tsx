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

function App() {
  // We'll add this back before deploying to GitHub Pages
  // const basename = import.meta.env.DEV ? '/' : '/elmseeds/';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="seeds" element={<SeedsPage />} />
          <Route path="seeds/:id" element={<SeedDetailPage />} />
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
