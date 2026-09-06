import React from 'react';
import { categoriesData } from '../data/landingData';
import { MessageCircle } from 'lucide-react';

export const CategoriesSection: React.FC = () => {
  const zaloPhone = "0912345678";

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 tracking-wide uppercase">
            Ngành Hàng Chúng Tôi Cung Cấp
          </h2>
          <p className="text-blue-800 text-sm font-semibold tracking-widest uppercase mt-1">
            OUR INDUSTRY PLATFORMS
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categoriesData.map((cat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col justify-between">
              <div>
                <img src={cat.image} alt={cat.title} className="w-full h-36 object-cover" />
                <div className="p-4 text-center border-b">
                  <h3 className="font-bold text-gray-900 text-sm">{cat.title}</h3>
                  <span className="text-xs text-blue-600 font-bold uppercase">{cat.subtitle}</span>
                </div>
                <ul className="p-4 text-xs text-gray-600 space-y-2">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-blue-600">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 pt-0">
                <a
                  href={`https://zalo.me/${zaloPhone}?text=${encodeURIComponent(`Tôi muốn tìm hiểu về ngành hàng: ${cat.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 rounded transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>Tư vấn ngành hàng</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};