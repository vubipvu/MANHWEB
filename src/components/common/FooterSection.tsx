import React from 'react';
import { statsData } from '../../data/landingData';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const zaloPhone = "0912345678";

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      {/* Stats Counter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-1">{stat.number}</div>
              <div className="text-xs text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white uppercase">Bạn đang tìm kiếm nguồn hàng hoặc sản phẩm cụ thể?</h3>
          <p className="text-xs text-slate-400 mt-1">Gửi yêu cầu cho chúng tôi. Zeno Global sẽ tìm kiếm và đề xuất giải pháp phù hợp nhất.</p>
        </div>
        <a
          href={`https://zalo.me/${zaloPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap flex items-center gap-2"
        >
          <MessageCircle size={18} />
          GỬI YÊU CẦU NGAY
        </a>
      </div>

      {/* Bottom Contact Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <span className="flex items-center gap-1"><Mail size={14} className="text-amber-500" /> info@zenoglobal.vn</span>
          <span className="flex items-center gap-1"><Phone size={14} className="text-amber-500" /> +84 123 456 789</span>
          <span className="flex items-center gap-1"><MapPin size={14} className="text-amber-500" /> Hà Nội, Việt Nam</span>
        </div>
        <div>
          © 2026 Zeno Global Trading & Import Export Consulting Co., Ltd.
        </div>
      </div>
    </footer>
  );
};