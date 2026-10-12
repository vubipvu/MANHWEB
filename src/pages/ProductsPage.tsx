import React from 'react';
import { Link } from 'react-router-dom';
import {
  PackageSearch,
  CheckCircle2,
  Speaker,
  Headphones,
  Sliders,
  Mic,
  Zap,
  Disc3,
  Cable,
  Radio,
  Ship,
  Globe2,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

import { ProductCatalog } from '../components/ProductCatalog';

export const ProductsPage: React.FC = () => {
  const zaloPhone = '0332933226';
  const phoneDisplay = '0332 933 226';

  const productHighlights = [
    {
      icon: Zap,
      title: 'Cục đẩy công suất',
      desc: 'Nguồn xung, mạch Class TD/D hiệu suất cao đánh loa array & sub kép.',
    },
    {
      icon: Sliders,
      title: 'Mixer & Vang số',
      desc: 'DSP xử lý kỹ thuật số đa kênh, tinh chỉnh chi tiết và chống hú rít triệt để.',
    },
    {
      icon: Mic,
      title: 'Micro chuyên nghiệp',
      desc: 'Sóng UHF bắt xa, hỗ trợ đo kiểm và cấp chứng nhận hợp quy tần số.',
    },
    {
      icon: Speaker,
      title: 'Hệ thống Loa',
      desc: 'Loa Line Array, loa Full-range, Subwoofer cho sân khấu & hội trường.',
    },
    {
      icon: Disc3,
      title: 'Quản lý nguồn',
      desc: 'Khởi động tuần tự bảo vệ dàn âm thanh, chống sốc điện và quá tải áp.',
    },
    {
      icon: Cable,
      title: 'Phụ kiện âm thanh',
      desc: 'Tủ rack, dây jack Neutrik/Canon, pat treo array và phụ kiện đấu nối.',
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/home/ROB1146.JPG')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/70 to-slate-950" />
        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <Speaker size={15} className="text-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Zeno Global Pro Audio Portfolio
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Thiết bị âm thanh chuyên nghiệp &amp;
            <span className="block text-amber-400">
              Giải pháp cấu hình đồng bộ
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Cung cấp thiết bị trọn gói cho sân khấu, hội trường, sự kiện, công trình và dịch vụ hỗ trợ đo kiểm hợp quy micro không dây chuẩn quy định.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Cục đẩy · Mixer - Vang số · Micro · Loa · Quản lý nguồn · Phụ kiện
          </p>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {[
              'Cung ứng thiết bị chính ngạch',
              'Tư vấn cấu hình theo diện tích',
              'Hỗ trợ hợp quy tần số micro',
              'Tư vấn xuất nhập khẩu & triển lãm',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-semibold text-slate-300 sm:text-sm"
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

      {/* ================= 6 CORE CATEGORIES OVERVIEW ================= */}
      <section className="border-b border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-xs transition hover:border-slate-300 hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-950 text-amber-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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

      {/* ================= HELP & VALUE ADDED SERVICES ================= */}
      <section className="bg-slate-50 py-16 sm:py-20 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
            {/* Image */}
            <div className="relative min-h-[340px] overflow-hidden bg-slate-900">
              <img
                src="/images/home/ROB1142.JPG"
                alt="Tư vấn giải pháp âm thanh Zeno Global"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 text-blue-600">
                <PackageSearch size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Dịch Vụ Tư Vấn Chuyên Sâu
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                Cần tư vấn chọn thiết bị hoặc hồ sơ hợp quy?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Cung cấp cho Zeno Global thông tin về diện tích không gian, mục đích sử dụng (sân khấu ngoài trời, hội trường, phòng họp) hoặc danh mục thiết bị cần kiểm định. Đội ngũ chuyên gia sẽ lên phương án chi tiết nhất.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    icon: CheckCircle2,
                    text: 'Tư vấn cấu hình phối ghép loa, amply, mixer chuẩn công suất',
                  },
                  {
                    icon: Radio,
                    text: 'Hỗ trợ đo kiểm và chứng nhận hợp quy dải tần micro không dây',
                  },
                  {
                    icon: Ship,
                    text: 'Hỗ trợ thủ tục xuất nhập khẩu, kiểm tra chất lượng nguồn hàng',
                  },
                  {
                    icon: Globe2,
                    text: 'Tư vấn thông tin tham quan, kết nối demo tại các triển lãm Pro Audio',
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon size={17} className="flex-shrink-0 text-blue-600" />
                      <span className="text-xs sm:text-sm text-slate-700">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href={`https://zalo.me/${zaloPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  <MessageCircle size={17} />
                  <span>Chat Zalo ({phoneDisplay})</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  Gửi thông tin liên hệ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA BANNER ================= */}
      <section className="bg-amber-400 px-4 py-10 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:px-2 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-black uppercase sm:text-xl">
              Cần báo giá đại lý hoặc hồ sơ dự án âm thanh?
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-900">
              Gửi danh mục số lượng, thông số thiết bị hoặc yêu cầu hợp quy qua Zalo để Zeno Global phản hồi nhanh chóng.
            </p>
          </div>

          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            <MessageCircle size={18} />
            <span>Nhận báo giá ngay</span>
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