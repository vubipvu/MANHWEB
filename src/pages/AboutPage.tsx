import React from 'react';
import {
  ShieldCheck,
  Globe2,
  CheckCircle2,
  ArrowUpRight,
  Speaker,
  Headphones,
  Sliders,
  Mic,
  Zap,
  Disc3,
  Cable,
  Radio,
  Ship,
  MapPin,
  CalendarCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const productList = [
  { icon: Zap, title: 'Cục đẩy công suất', desc: 'Đa dạng cấu hình tải, hoạt động ổn định và bền bỉ' },
  { icon: Sliders, title: 'Mixer - Vang số', desc: 'Xử lý tín hiệu chuyên nghiệp, chống hú rít hiệu quả' },
  { icon: Mic, title: 'Micro không dây & có dây', desc: 'Độ nhạy cao, bắt sóng xa, hỗ trợ chuẩn tần số' },
  { icon: Speaker, title: 'Hệ thống Loa', desc: 'Loa full, loa sub, line array cho hội trường & sân khấu' },
  { icon: Disc3, title: 'Quản lý nguồn', desc: 'Bảo vệ thiết bị, khởi động nguồn theo thứ tự an toàn' },
  { icon: Cable, title: 'Phụ kiện âm thanh', desc: 'Dây jack, chân đế, tủ rack và phụ kiện đấu nối' },
];

const coreServices = [
  {
    icon: Radio,
    title: 'Đo Kiểm & Hợp Quy Micro',
    desc: 'Tư vấn, đo kiểm và hoàn thiện thủ tục chứng nhận hợp chuẩn - hợp quy tần số cho micro không dây theo quy định.',
  },
  {
    icon: Ship,
    title: 'Tư Vấn Xuất Nhập Khẩu',
    desc: 'Hỗ trợ sourcing nguồn hàng tận xưởng, thủ tục hải quan, vận tải quốc tế và nhập khẩu thiết bị âm thanh chính ngạch.',
  },
  {
    icon: Globe2,
    title: 'Triển Lãm & Demo Quốc Tế',
    desc: 'Cập nhật xu hướng, kết nối đối tác tại các triển lãm Pro Audio lớn trong nước và quốc tế (Trung Quốc, Châu Á).',
  },
  {
    icon: ShieldCheck,
    title: 'Đồng Hành Kỹ Thuật Dự Án',
    desc: 'Tư vấn cấu hình thực tế, minh bạch thông số kỹ thuật, chính sách bảo mật và hỗ trợ vận chuyển linh hoạt.',
  },
];

const stats = [
  { value: '6+', label: 'Hệ nhóm thiết bị chủ lực' },
  { value: '100%', label: 'Hỗ trợ hợp quy & kỹ thuật' },
  { value: '2', label: 'Văn phòng đại diện (HN & HT)' },
  { value: '24/7', label: 'Đồng hành cùng dự án' },
];

export const AboutPage: React.FC = () => {
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
        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <Headphones size={15} className="text-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Về Zeno Global
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Giải pháp thiết bị âm thanh &amp;
            <span className="block text-amber-400">
              Hỗ trợ pháp lý - thương mại quốc tế
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Zeno Global chuyên cung cấp thiết bị âm thanh chuyên nghiệp, hỗ trợ đo kiểm hợp quy micro không dây, tư vấn xuất nhập khẩu và xúc tiến demo tại các triển lãm thiết bị trong nước và quốc tế.
          </p>

          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin size={14} className="text-amber-400" /> Trụ sở Hà Nội: Hoàng Mai
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin size={14} className="text-amber-400" /> Cơ sở Hà Tĩnh: TP. Hà Tĩnh
            </span>
          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION & STRENGTHS ================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image & Location Tags */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-xl">
                <img
                  src="/images/home/ROB1146.JPG"
                  alt="Thiết bị âm thanh chuyên nghiệp Zeno Global"
                  className="h-[440px] w-full object-cover sm:h-[520px]"
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10 sm:left-8 sm:right-auto sm:w-[320px]">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-950 text-amber-400">
                    <Radio size={21} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-950">
                      Tư vấn hợp quy &amp; XNK
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Đo kiểm micro không dây · Thủ tục hải quan · Kết nối demo triển lãm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-6 lg:pt-0">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Thế mạnh Zeno Global
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Cung ứng đồng bộ,
                <span className="block text-slate-900">
                  Am hiểu kỹ thuật &amp; Pháp lý tần số
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                Không chỉ dừng lại ở việc phân phối từng sản phẩm riêng lẻ, Zeno Global đem đến hệ sinh thái thiết bị âm thanh hoàn chỉnh phục vụ biểu diễn, hội trường, sự kiện và dự án công trình.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Đặc biệt, chúng tôi là đối tác hỗ trợ các đơn vị kinh doanh âm thanh giải quyết các vấn đề then chốt: đo kiểm hợp quy tần số micro theo chuẩn cơ quan quản lý, xử lý nguồn hàng xuất nhập khẩu và cập nhật công nghệ mới từ các triển lãm demo quốc tế.
              </p>

              <div className="mt-7 space-y-3.5">
                {[
                  'Cung cấp đủ bộ thiết bị: Cục đẩy, Vang số, Micro, Loa, Quản lý nguồn',
                  'Tư vấn đo kiểm, hoàn thiện hồ sơ hợp chuẩn - hợp quy micro',
                  'Hỗ trợ dịch vụ logistics, xuất nhập khẩu thiết bị âm thanh',
                  'Tư vấn thông tin tham quan, tham gia triển lãm Pro Audio trong và ngoài nước',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="flex-shrink-0 text-blue-600"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  Danh mục sản phẩm
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  Nhận tư vấn kỹ thuật
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-0 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-6 text-center ${
                index !== stats.length - 1 ? 'md:border-r md:border-white/10' : ''
              }`}
            >
              <p className="text-3xl font-black text-amber-400 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCT PORTFOLIO ================= */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Hệ sinh thái sản phẩm
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Thiết bị âm thanh cung cấp chính
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              Đáp ứng đầy đủ từ các công trình hội trường, sự kiện ngoài trời đến dàn âm thanh chuyên dụng.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-amber-400 transition duration-200 group-hover:bg-amber-400 group-hover:text-slate-950">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES & LEGAL SUPPORT ================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              Dịch vụ hỗ trợ chuyên sâu
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              Đồng hành cùng đối tác âm thanh
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-amber-400" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition duration-200 hover:border-blue-200 hover:bg-blue-50/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EXHIBITIONS & GLOBAL DEMO ================= */}
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-semibold text-amber-400">
                <Globe2 size={15} />
                <span>Global Audio Expos &amp; Demo</span>
              </div>

              <h2 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Kết nối &amp; Tham gia các triển lãm Pro Audio quốc tế
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Zeno Global liên tục cập nhật lịch trình các kỳ triển lãm thiết bị âm thanh biểu diễn, demo dàn line-array ngoài trời tại các trung tâm công nghệ âm thanh hàng đầu.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CalendarCheck size={18} className="text-amber-400" />
                  <span>Cung cấp thông tin các kỳ hội chợ &amp; expo chuyên ngành</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="text-amber-400" />
                  <span>Hỗ trợ kết nối thương mại trực tiếp tại các buổi demo</span>
                </div>
              </div>
            </div>

            <div className="h-72 lg:h-full">
              <img
                src="/images/home/ADE1396.JPG"
                alt="Triển lãm demo thiết bị âm thanh"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= OFFICES & CONTACT CTA ================= */}
      <section className="bg-amber-400 px-4 py-12 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
                Cần hợp tác phân phối hoặc tư vấn kỹ thuật?
              </h2>
              <div className="mt-3 flex flex-col gap-2 text-sm text-slate-900 sm:flex-row sm:gap-6">
                <span>📍 <strong>Hà Nội:</strong> Số 1 Trần Thủ Độ, Hoàng Mai</span>
                <span>📍 <strong>Hà Tĩnh:</strong> 56 La Sơn Phu Tử, Phường Thành Sen</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              <span>Liên hệ Zeno Global</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};