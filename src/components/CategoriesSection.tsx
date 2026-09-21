import React from 'react';
import { Link } from 'react-router-dom';
import { categoriesData } from '../data/landingData';
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Speaker,
} from 'lucide-react';

export const CategoriesSection: React.FC = () => {
  const zaloPhone = '0912345678';

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
      {/* Background decoration */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <Speaker size={15} className="text-blue-600" />

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
              Professional Audio Equipment
            </span>
          </div>

          <h2 className="text-2xl font-black uppercase tracking-wide text-slate-950 sm:text-3xl">
            Danh mục thiết bị âm thanh
          </h2>

          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-amber-400" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Cung cấp các dòng loa và thiết bị âm thanh chuyên nghiệp cho sân
            khấu, hội trường, sự kiện và công trình.
          </p>
        </div>

        {/* ================= CATEGORY GRID ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categoriesData.map((cat, index) => (
            <article
              key={index}
              className="group flex overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <div className="flex w-full flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute right-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/20 bg-slate-950/50 px-2 text-[10px] font-bold text-white backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Subtitle */}
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300">
                      {cat.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold text-slate-950 transition-colors group-hover:text-blue-600">
                    {cat.title}
                  </h3>

                  <div className="mt-3 h-px bg-slate-100" />

                  {/* Items */}
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {cat.items.slice(0, 5).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 flex-shrink-0 text-blue-500"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="mt-5 space-y-2">
                    <Link
                      to="/products"
                      className="group/button flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-slate-800"
                    >
                      Xem sản phẩm

                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/button:translate-x-1"
                      />
                    </Link>

                    <a
                      href={`https://zalo.me/${zaloPhone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-4 py-2.5 text-xs font-bold text-blue-700 transition-all hover:border-blue-200 hover:bg-blue-100"
                    >
                      <MessageCircle size={14} />

                      Tư vấn sản phẩm
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:p-7">
          <div>
            <p className="font-bold text-slate-950">
              Không tìm thấy sản phẩm bạn cần?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Gửi hình ảnh hoặc thông số sản phẩm để chúng tôi tư vấn và tìm
              thiết bị phù hợp.
            </p>
          </div>

          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-amber-300"
          >
            <MessageCircle size={17} />

            Gửi yêu cầu

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};