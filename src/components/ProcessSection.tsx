import React from 'react';
import { processSteps } from '../data/landingData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 tracking-wide uppercase">
            Giải Pháp Toàn Diện
          </h2>
          <p className="text-blue-800 text-sm font-semibold tracking-widest uppercase mt-1">
            OUR END-TO-END SOLUTIONS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {processSteps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-amber-500 text-amber-500 font-bold text-lg flex items-center justify-center mb-3">
                {item.step}
              </div>
              <h3 className="font-bold text-gray-900 text-xs mb-1">{item.title}</h3>
              <p className="text-[11px] text-gray-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};