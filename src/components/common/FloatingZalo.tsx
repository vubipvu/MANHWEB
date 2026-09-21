import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const FloatingZalo: React.FC = () => {
  const zaloPhone = '0912345678';

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <a
        href={`https://zalo.me/${zaloPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ tư vấn qua Zalo"
        className="group relative flex items-center"
      >
        {/* Tooltip desktop */}
        <div className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-xl shadow-slate-900/10 opacity-0 translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
          <p className="text-xs font-bold text-slate-900">
            Cần tư vấn âm thanh?
          </p>

          <div className="mt-1 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <p className="text-[11px] text-slate-500">
              Chat Zalo với chúng tôi
            </p>
          </div>

          {/* Arrow */}
          <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-slate-200 bg-white" />
        </div>

        {/* Subtle pulse */}
        <span className="absolute inset-0 rounded-full bg-blue-600/25 animate-ping" />

        {/* Main button */}
        <div className="relative flex h-14 items-center gap-2.5 rounded-full bg-blue-600 px-4 text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 sm:h-[58px] sm:px-5">
          {/* Icon */}
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <MessageCircle size={21} strokeWidth={2.2} />

            {/* Online */}
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-blue-600 bg-emerald-400" />
          </div>

          {/* Text */}
          <div className="hidden text-left sm:block">
            <p className="text-[10px] font-medium leading-none text-blue-100">
              Hỗ trợ nhanh
            </p>

            <p className="mt-1 text-sm font-bold leading-none">
              Tư vấn Zalo
            </p>
          </div>

          <ArrowUpRight
            size={16}
            className="hidden transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
          />
        </div>
      </a>
    </div>
  );
};