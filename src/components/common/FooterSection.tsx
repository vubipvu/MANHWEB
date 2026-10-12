import React from 'react';
import { statsData } from '../../data/landingData';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FooterSection: React.FC = () => {
  const zaloPhone = '0332933226';
  const phoneDisplay = '0332 933 226';
  const email = 'zenoglobalvietnam@gmail.com';

  return (
    <footer className="bg-slate-950 text-white pt-12 pb-6 border-t border-slate-800">
      {/* Stats Counter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-slate-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-8 items-center">
          <div>
            <Link to="/">
              <img
                src="/images/logo/logoden.jpg"
                alt="Zeno Global Logo"
                className="h-14 w-auto object-contain rounded-lg"
              />
            </Link>
            <p className="mt-4 text-xs text-slate-400 leading-6 max-w-sm">
              Đơn vị cung ứng thiết bị âm thanh chuyên nghiệp, hỗ trợ đo kiểm hợp quy micro không dây và tư vấn xuất nhập khẩu chính ngạch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                Cần báo giá hoặc tư vấn hợp quy micro?
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Đội ngũ kỹ thuật hỗ trợ trực tiếp qua Zalo: <strong>{phoneDisplay}</strong>
              </p>
            </div>
            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors whitespace-nowrap flex items-center gap-2 flex-shrink-0"
            >
              <MessageCircle size={16} />
              GỬI YÊU CẦU NGAY
            </a>
          </div>
        </div>
      </div>

      {/* Links & Policies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-semibold text-slate-200">Sản phẩm:</span>
          <span>Cục đẩy</span>
          <span className="text-slate-600">•</span>
          <span>Mixer - Vang số</span>
          <span className="text-slate-600">•</span>
          <span>Micro</span>
          <span className="text-slate-600">•</span>
          <span>Loa</span>
          <span className="text-slate-600">•</span>
          <span>Quản lý nguồn</span>
          <span className="text-slate-600">•</span>
          <span>Phụ kiện</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/chinh-sach" className="hover:text-amber-400 transition">Chính sách bảo hành &amp; Đổi trả</Link>
          <span className="text-slate-600">•</span>
          <Link to="/chinh-sach" className="hover:text-amber-400 transition">Vận chuyển &amp; Hợp quy</Link>
        </div>
      </div>

      {/* Contact Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between text-xs text-slate-400 gap-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <Mail size={14} className="text-amber-400" /> {email}
          </a>
          <a
            href={`tel:${zaloPhone}`}
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <Phone size={14} className="text-amber-400" /> {phoneDisplay}
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-amber-400" /> HN: Số 1 Trần Thủ Độ, Q. Hoàng Mai
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-amber-400" /> HT: 56 La Sơn Phu Tử, P. Thành Sen
          </span>
        </div>
        <div className="whitespace-nowrap">
          © 2026 Zeno Global Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};