import { Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { FooterSection } from './components/common/FooterSection';
import { FloatingZalo } from './components/common/FloatingZalo';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased relative">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <FooterSection />
      <FloatingZalo />
    </div>
  );
}

export default App;