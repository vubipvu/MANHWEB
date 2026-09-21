import React from 'react';
import { Link } from 'react-router-dom';
import {
  PackageSearch,
  CheckCircle2,
  Speaker,
  Headphones,
  Wrench,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

import { ProductCatalog } from '../components/ProductCatalog';

export const ProductsPage: React.FC = () => {
  const zaloPhone = '0912345678';

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/home/ROB1146.JPG')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/88" />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />

        {/* Decoration */}
        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <Speaker size={15} className="text-amber-400" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Professional Audio Equipment
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Thiết bị âm thanh
            <span className="block text-amber-400">
              chuyên nghiệp
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Khám phá các dòng loa và thiết bị âm thanh dành cho sân khấu,
            hội trường, sự kiện, showroom và công trình chuyên nghiệp.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Line Array · Full-range · Subwoofer · Amplifier · Mixer ·
            Speaker Components
          </p>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {[
              'Thiết bị chuyên nghiệp',
              'Tư vấn cấu hình',
              'Hỗ trợ kỹ thuật',
              'Nguồn hàng uy tín',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <CheckCircle2
                  size={16}
                  className="flex-shrink-0 text-amber-400"
                />

                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORY INTRO ================= */}
      <section className="border-b border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {/* Item */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <Speaker size={21} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-950">
                  Loa chuyên nghiệp
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Nhiều dòng loa phù hợp cho từng nhu cầu sử dụng.
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <Headphones size={21} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-950">
                  Tư vấn cấu hình
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Lựa chọn thiết bị theo diện tích và mục đích sử dụng.
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <Wrench size={21} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-950">
                  Hỗ trợ kỹ thuật
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Hỗ trợ thông số, phối ghép và giải pháp hệ thống.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT CATALOG ================= */}
      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-amber-50 blur-3xl" />

        <div className="relative">
          <ProductCatalog />
        </div>
      </section>

      {/* ================= HELP SECTION ================= */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-[0.8fr_1.2fr]">
            {/* Image */}
            <div className="relative min-h-[300px] overflow-hidden">
              <img
                src="/images/home/ROB1142.JPG"
                alt="Thiết bị loa chuyên nghiệp"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 text-blue-600">
                <PackageSearch size={18} />

                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Product Support
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">
                Chưa biết nên chọn sản phẩm nào?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Hãy gửi cho chúng tôi thông tin về diện tích không gian, mục
                đích sử dụng, công suất mong muốn hoặc ngân sách dự kiến.
                Zeno Global sẽ hỗ trợ đề xuất sản phẩm và cấu hình phù hợp.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Tư vấn loa theo diện tích và nhu cầu',
                  'Hỗ trợ lựa chọn công suất phù hợp',
                  'Tư vấn phối ghép loa và amplifier',
                  'Hỗ trợ tìm sản phẩm theo yêu cầu',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={17}
                      className="flex-shrink-0 text-blue-600"
                    />

                    <span className="text-sm text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`https://zalo.me/${zaloPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  <MessageCircle size={17} />

                  Tư vấn qua Zalo

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  Gửi yêu cầu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-amber-400 px-4 py-10 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:px-2 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-black uppercase sm:text-xl">
              Cần báo giá thiết bị âm thanh?
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-800">
              Gửi mã sản phẩm, hình ảnh hoặc nhu cầu sử dụng để Zeno Global
              hỗ trợ tư vấn và báo giá nhanh.
            </p>
          </div>

          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            <MessageCircle size={18} />

            Nhận báo giá

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
};