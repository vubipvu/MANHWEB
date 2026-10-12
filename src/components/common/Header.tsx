import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MessageCircle,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

export const Header: React.FC = () => {
  const zaloPhone = '0332933226';

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'TRANG CHỦ', path: '/' },
    { label: 'VỀ CHÚNG TÔI', path: '/about' },
    { label: 'SẢN PHẨM', path: '/products' },
    { label: 'TIN TỨC', path: '/news' },
    { label: 'CHÍNH SÁCH', path: '/chinh-sach' },
    { label: 'LIÊN HỆ', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      {/* ================= DESKTOP HEADER ================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex flex-shrink-0 items-center gap-3">
            <img
              src="/images/logo/logotrang.jpg"
              alt="Zeno Global Logo"
              className="h-12 w-auto max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* ================= NAVIGATION ================= */}
          <nav className="hidden items-center gap-1 lg:flex">
            {menuItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative rounded-lg px-3.5 py-2.5 text-xs font-bold transition-all duration-200 ${
                    active
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  {item.label}

                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-amber-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ================= RIGHT ACTION ================= */}
          <div className="flex items-center gap-2">
            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md sm:flex"
            >
              <MessageCircle size={17} />
              <span>Chat Zalo</span>
              <ChevronRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
            >
              {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition ${
                    active
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    size={16}
                    className={active ? 'text-blue-500' : 'text-slate-300'}
                  />
                </Link>
              );
            })}
          </nav>

          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            <MessageCircle size={18} />
            Chat Zalo tư vấn (0332 933 226)
          </a>
        </div>
      </div>
    </header>
  );
};
