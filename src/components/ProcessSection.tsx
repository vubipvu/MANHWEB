import React from 'react';
import { processSteps } from '../data/landingData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase">
            QUY TRÌNH HỖ TRỢ CHUYÊN NGHIỆP
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-wide uppercase mt-1">
            Quy Trình Cung Cấp &amp; Hỗ Trợ Kỹ Thuật
          </h2>
          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-amber-400" />
          <p className="text-sm text-slate-500 mt-3 max-w-xl mx-auto">
            Từ tiếp nhận nhu cầu, tư vấn cấu hình, xử lý hồ sơ hợp quy micro đến giao hàng và hướng dẫn kỹ thuật.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-200 transition"
            >
              <div className="w-11 h-11 rounded-full bg-amber-400 text-slate-950 font-black text-base flex items-center justify-center mb-3 shadow-sm">
                {item.step}
              </div>
              <h3 className="font-bold text-slate-900 text-xs mb-1.5">{item.title}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};