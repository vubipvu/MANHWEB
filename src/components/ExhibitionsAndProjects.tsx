import React from 'react';
import { exhibitionsData, projectsData } from '../data/landingData';

export const ExhibitionsAndProjects: React.FC = () => {
  return (
    <>
      {/* Triển lãm */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-xl font-bold uppercase mb-8">Triển Lãm Âm Thanh Quốc Tế</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {exhibitionsData.map((ex, i) => (
              <div key={i} className="bg-slate-900 text-white p-6 rounded-lg">
                <h3 className="font-bold text-amber-500 text-sm">{ex.title}</h3>
                <p className="text-xs text-slate-400 mb-4">{ex.subtitle}</p>
                <ul className="text-xs space-y-2 mb-4 text-slate-300">
                  {ex.items.map((item, idx) => <li key={idx}>• {item}</li>)}
                </ul>
                <div className="text-xs text-amber-400 font-bold border-t border-slate-800 pt-3 flex justify-between">
                  <span>{ex.location}</span>
                  <span>{ex.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dự án tiêu biểu */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-xl font-bold uppercase mb-8">Dự Án Tiêu Biểu</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {projectsData.map((p, i) => (
              <div key={i} className="border rounded-lg overflow-hidden text-center">
                <img src={p.image} alt={p.name} className="h-32 w-full object-cover" />
                <p className="p-2 text-xs font-semibold text-gray-700">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};