import React from 'react';
import { Mail, Phone, MapPin, MessageCircle,Globe2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const zaloPhone = '0912345678';

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 uppercase">Liên Hệ Với Zeno Global</h1>
          <p className="text-blue-600 text-sm font-semibold uppercase mt-1">CONTACT US</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Thông tin trực tiếp */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Thông Tin Kết Nối</h2>
            <p className="text-gray-600 text-sm">Hãy liên hệ ngay với chúng tôi qua Zalo hoặc Hotline để nhận tư vấn báo giá nguồn hàng nhanh nhất.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="text-blue-600" size={20} />
                <span>Hotline / Zalo: +84 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-blue-600" size={20} />
                <span>Email: info@zenoglobal.vn</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-blue-600" size={20} />
                <span>Địa chỉ: Hà Nội, Việt Nam</span>
              </div>
            </div>

            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors mt-4"
            >
              <MessageCircle size={18} />
              <span>Chat Zalo Báo Giá Tức Thì</span>
            </a>
          </div>

          {/* Bản đồ hoặc hình ảnh văn phòng */}
          <div className="bg-gray-100 rounded-xl p-8 flex flex-col justify-center items-center text-center border">
            <Globe2 size={48} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-lg text-gray-900">ZENO GLOBAL TRADING</h3>
            <p className="text-xs text-gray-500 mt-2">Đồng hành cùng doanh nghiệp phát triển nguồn hàng uy tín.</p>
          </div>
        </div>
      </div>
    </div>
  );
};