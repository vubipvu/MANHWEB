import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { MessageCircle, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const zaloPhone = '0912345678';

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl tracking-tight text-gray-900">
              ZENO <span className="text-blue-600">GLOBAL</span>
            </span>
          </Link>

          {/* Dùng Link để chuyển giữa các trang riêng */}
          <nav className="flex items-center gap-6 font-medium text-xs md:text-sm">
  <Link to="/" className={location.pathname === '/' ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}>
    TRANG CHỦ
  </Link>
  <Link to="/about" className={location.pathname === '/about' ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}>
    VỀ CHÚNG TÔI
  </Link>
  <Link to="/products" className={location.pathname === '/products' ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}>
    SẢN PHẨM
  </Link>
  <Link to="/news" className={location.pathname === '/news' ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}>
    TIN TỨC
  </Link>
  <Link to="/contact" className={location.pathname === '/contact' ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}>
    LIÊN HỆ
  </Link>
</nav>

          <div className="flex items-center gap-3">
            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              <MessageCircle size={18} />
              <span>Chat Zalo</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};