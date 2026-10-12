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
  const zaloPhone = '0332933226';

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
              Hệ Thống Thiết Bị Âm Thanh Zeno Global
            </span>
          </div>

          <h2 className="text-2xl font-black uppercase tracking-wide text-slate-950 sm:text-3xl">
            Danh mục sản phẩm chủ lực
          </h2>

          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-amber-400" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Cung cấp thiết bị âm thanh chuyên nghiệp: Cục đẩy, Mixer - Vang số, Micro, Loa, Quản lý nguồn &amp; Phụ kiện cho hội trường, sân khấu và dự án.
          </p>
        </div>

        {/* ================= CATEGORY GRID ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categoriesData.map((cat, index) => (
            <article
              key={index}
              className="group flex overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <div className="flex w-full flex-col">
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-slate-900">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute right-2.5 top-2.5 flex h-7 min-w-7 items-center justify-center rounded-lg border border-white/20 bg-slate-950/60 px-1.5 text-[10px] font-bold text-white backdrop-blur">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute bottom-2.5 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-300">
                      {cat.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm font-bold text-slate-950 transition-colors group-hover:text-blue-600">
                    {cat.title}
                  </h3>

                  <div className="mt-2.5 h-px bg-slate-100" />

                  {/* Items */}
                  <ul className="mt-3 flex-1 space-y-2">
                    {cat.items.slice(0, 4).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-1.5 text-[11px] leading-4 text-slate-600"
                      >
                        <CheckCircle2
                          size={13}
                          className="mt-0.5 flex-shrink-0 text-blue-500"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="mt-4 space-y-1.5">
                    <Link
                      to="/products"
                      className="group/button flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-950 px-3 py-2 text-[11px] font-bold text-white transition-all hover:bg-slate-800"
                    >
                      <span>Xem chi tiết</span>
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover/button:translate-x-1"
                      />
                    </Link>

                    <a
                      href={`https://zalo.me/${zaloPhone}?text=Tôi%20cần%20tư%20vấn%20về%20dòng%20sản%20phẩm:%20${encodeURIComponent(cat.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-[11px] font-bold text-blue-700 transition-all hover:border-blue-200 hover:bg-blue-100"
                    >
                      <MessageCircle size={13} />
                      <span>Hỏi Zalo</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:p-7">
          <div>
            <p className="font-bold text-slate-950">
              Cần cấu hình dàn âm thanh trọn gói hoặc báo giá công trình?
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Gửi thông số không gian sử dụng hoặc mã thiết bị để Zeno Global lên phương án tối ưu chi phí.
            </p>
          </div>

          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-amber-300"
          >
            <MessageCircle size={17} />
            Nhận tư vấn ngay
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