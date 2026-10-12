import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  Headphones,
  Speaker,
  FileCheck2,
  Ship,
  Globe2,
  Sliders,
  Mic,
  Zap,
  Cable,
  Radio,
  Disc3,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const phoneRaw = '0332933226';
  const phoneDisplay = '0332 933 226';
  const email = 'zenoglobalvietnam@gmail.com';

  const productCategories = [
    { icon: Zap, label: 'Cục đẩy công suất' },
    { icon: Sliders, label: 'Mixer - Vang số' },
    { icon: Mic, label: 'Micro chuyên nghiệp' },
    { icon: Speaker, label: 'Hệ thống Loa' },
    { icon: Disc3, label: 'Quản lý nguồn' },
    { icon: Cable, label: 'Phụ kiện âm thanh' },
  ];

  const specializedServices = [
    {
      icon: Radio,
      title: 'Đo kiểm & Hợp quy Micro',
      desc: 'Tư vấn chứng nhận hợp chuẩn, hợp quy tần số micro không dây',
    },
    {
      icon: Ship,
      title: 'Tư vấn Xuất Nhập Khẩu',
      desc: 'Hỗ trợ thủ tục hải quan, logistics thiết bị âm thanh quốc tế',
    },
    {
      icon: Globe2,
      title: 'Triển lãm Demo Âm thanh',
      desc: 'Cập nhật và kết nối sự kiện, expo, demo trong và ngoài nước',
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/home/1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/70 to-slate-950" />
        <div className="absolute left-1/2 top-0 h-80 w-[720px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <Headphones size={15} className="text-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Liên Hệ Zeno Global
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Tư vấn thiết bị &amp;
            <span className="block text-amber-400">
              Giải pháp âm thanh chuyên nghiệp
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Đơn vị cung ứng thiết bị âm thanh toàn diện, đo kiểm hợp quy tần số 
            và xúc tiến thương mại quốc tế uy tín.
          </p>

          {/* Product Badges */}
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {productCategories.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-slate-200 backdrop-blur"
                >
                  <Icon size={14} className="text-amber-400" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTACT SECTION ================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-amber-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Contact Info & Locations */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Thông tin kết nối
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Trực tiếp tiếp nhận &amp; Hỗ trợ
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  Liên hệ trao đổi về cấu hình âm thanh dự án, báo giá thiết bị hoặc các dịch vụ hỗ trợ kỹ thuật, xúc tiến thương mại.
                </p>

                {/* Direct Communications */}
                <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <a
                    href={`tel:${phoneRaw}`}
                    className="group flex items-center gap-3.5 rounded-2xl border border-slate-200 p-4 transition duration-200 hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-950 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950">
                      <Phone size={19} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Hotline / Zalo
                      </p>
                      <p className="truncate text-sm font-bold text-slate-900">
                        {phoneDisplay}
                      </p>
                    </div>
                    <ArrowUpRight size={16} className="ml-auto text-slate-300 group-hover:text-blue-600" />
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="group flex items-center gap-3.5 rounded-2xl border border-slate-200 p-4 transition duration-200 hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-950 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950">
                      <Mail size={19} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Email liên hệ
                      </p>
                      <p className="truncate text-xs font-bold text-slate-900">
                        {email}
                      </p>
                    </div>
                    <ArrowUpRight size={16} className="ml-auto text-slate-300 group-hover:text-blue-600" />
                  </a>
                </div>

                {/* Locations */}
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <span className="inline-block rounded bg-blue-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                          Hà Nội
                        </span>
                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          Số 1 Trần Thủ Độ, Quận Hoàng Mai, Hà Nội
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-slate-800 text-white shadow-sm">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <span className="inline-block rounded bg-slate-200 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                          Hà Tĩnh
                        </span>
                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          56 La Sơn Phu Tử, Phường Thành Sen, Hà Tĩnh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working hours & Policy Badges */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock3 size={16} className="text-slate-400" />
                    <span>Làm việc: Thứ 2 – Thứ 7 (08:00 – 18:00)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-slate-600">
                      <FileCheck2 size={14} className="text-emerald-600" /> Chính sách bảo mật
                    </span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <Ship size={14} className="text-blue-600" /> Chính sách vận chuyển
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Consultation & Zalo CTA */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-xl shadow-slate-200/60 sm:p-9 lg:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] p-3">
                  <Headphones size={26} className="text-amber-400" />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  Audio Solutions &amp; Trade Consulting
                </p>

                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Tư vấn kỹ thuật &amp; Pháp lý chuyên ngành
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Đội ngũ Zeno Global trực tiếp hỗ trợ giải pháp thiết bị toàn diện, tiêu chuẩn đo kiểm hợp quy và dịch vụ thương mại:
                </p>

                <div className="mt-6 space-y-3.5">
                  {[
                    'Đo kiểm, tư vấn hợp quy micro không dây chuẩn tần số',
                    'Hỗ trợ thủ tục xuất nhập khẩu thiết bị âm thanh',
                    'Tư vấn thông tin triển lãm demo thiết bị trong & ngoài nước',
                    'Cung cấp đồng bộ: Cục đẩy, Vang số, Micro, Loa, Quản lý nguồn',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-blue-400" />
                      <span className="text-sm font-medium text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zalo Direct CTA */}
              <div className="relative mt-8 pt-6">
                <a
                  href={`https://zalo.me/${phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition duration-200 hover:bg-blue-500"
                >
                  <MessageCircle size={20} />
                  <span>Chat Zalo ({phoneDisplay})</span>
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <p className="mt-3 text-center text-xs text-slate-500">
                  Tư vấn kỹ thuật &amp; báo giá cấu hình âm thanh dự án nhanh chóng
                </p>
              </div>
            </div>
          </div>

          {/* ================= SPECIALIZED SERVICES ================= */}
          <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:grid-cols-3">
            {specializedServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`p-6 text-center ${
                    idx !== specializedServices.length - 1
                      ? 'border-b border-slate-200 sm:border-b-0 sm:border-r'
                      : ''
                  }`}
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-3 text-base font-bold text-slate-900">
                    {service.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= QUICK CTA BANNER ================= */}
      <section className="bg-amber-400 px-4 py-8 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:px-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-black uppercase sm:text-xl">
              Cần hồ sơ thiết bị, đo kiểm hợp quy hoặc xuất nhập khẩu?
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-900">
              Gửi thông số kỹ thuật hoặc yêu cầu danh mục hàng hóa qua Zalo/Email để được xử lý ngay.
            </p>
          </div>

          <a
            href={`https://zalo.me/${phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            <MessageCircle size={18} />
            <span>Liên hệ Zeno Global</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </section>
    </main>
  );
};