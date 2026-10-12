import React from 'react';
import { exhibitionsData, projectsData } from '../data/landingData';
import { Calendar, MapPin, Globe2, Sparkles } from 'lucide-react';

export const ExhibitionsAndProjects: React.FC = () => {
  return (
    <>
      {/* ================= TRIỂN LÃM & DEMO ================= */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-amber-400 mb-3">
              <Globe2 size={15} />
              <span>Kết Nối Triển Lãm &amp; Demo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide">
              Triển Lãm Âm Thanh &amp; Demo Quốc Tế
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Zeno Global cung cấp thông tin, hỗ trợ kết nối khách hàng và đối tác tham gia các kỳ triển lãm Pro Audio trong nước &amp; quốc tế.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {exhibitionsData.map((ex, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-amber-400 text-base">{ex.title}</h3>
                    <Sparkles size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-slate-400 mb-4">{ex.subtitle}</p>
                  
                  <ul className="text-xs space-y-2.5 mb-6 text-slate-300">
                    {ex.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-slate-400 font-semibold border-t border-slate-800 pt-4 flex flex-wrap justify-between gap-2">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MapPin size={14} className="text-amber-400" /> {ex.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar size={14} className="text-blue-400" /> {ex.frequency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DỰ ÁN TIÊU BIỂU ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-black uppercase text-slate-950 sm:text-3xl">
              Dự Án Âm Thanh Tiêu Biểu
            </h2>
            <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-amber-400" />
            <p className="text-sm text-slate-500 mt-3">
              Các công trình hội trường, sự kiện và phòng hát sử dụng thiết bị đồng bộ do Zeno Global cung cấp.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {projectsData.map((p, i) => (
              <div
                key={i}
                className="group border border-slate-200 rounded-xl overflow-hidden text-center bg-slate-50 hover:shadow-md hover:border-slate-300 transition"
              >
                <div className="h-36 w-full overflow-hidden bg-slate-200">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold text-slate-800 line-clamp-1">{p.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};