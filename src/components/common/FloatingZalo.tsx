import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingZalo: React.FC = () => {
  const zaloPhone = '0912345678'; // Đổi thành SĐT Zalo thực tế của bạn

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <a
        href={`https://zalo.me/${zaloPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      >
        {/* Hiệu ứng sóng lan tỏa xung quanh nút */}
        <span className="absolute -inset-1 rounded-full bg-blue-500 opacity-75 animate-ping -z-10"></span>

        <MessageCircle size={24} className="fill-current" />
        <span className="font-semibold text-sm pr-1 hidden sm:inline">
          Tư vấn Zalo
        </span>
      </a>
    </div>
  );
};