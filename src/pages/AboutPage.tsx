import React from 'react';
import {
  ShieldCheck,
  Globe2,
  CheckCircle2,
  ArrowUpRight,
  Speaker,
  Wrench,
  Headphones,
  Factory,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Speaker,
    title: 'Thiết Bị Âm Thanh Chuyên Nghiệp',
    description:
      'Cung cấp loa, hệ thống âm thanh và thiết bị chuyên dụng cho sân khấu, hội trường, sự kiện và công trình.',
  },
  {
    icon: Factory,
    title: 'Nguồn Hàng Trực Tiếp',
    description:
      'Kết nối trực tiếp với hệ thống nhà máy và nhà sản xuất uy tín, tối ưu chất lượng và chi phí.',
  },
  {
    icon: Wrench,
    title: 'Hỗ Trợ Kỹ Thuật',
    description:
      'Tư vấn cấu hình, thông số kỹ thuật và giải pháp phù hợp với từng không gian sử dụng.',
  },
  {
    icon: ShieldCheck,
    title: 'Uy Tín & Minh Bạch',
    description:
      'Thông tin sản phẩm rõ ràng, quy trình minh bạch và đồng hành cùng khách hàng trong suốt dự án.',
  },
];

const stats = [
  {
    value: '100+',
    label: 'Đối tác & nhà máy',
  },
  {
    value: '5+',
    label: 'Năm kinh nghiệm',
  },
  {
    value: '300+',
    label: 'Dự án & đơn hàng',
  },
  {
    value: '98%',
    label: 'Khách hàng hài lòng',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/home/1.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/85" />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />

        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <Headphones size={15} className="text-amber-400" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              About Zeno Global
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Giải pháp âm thanh
            <span className="block text-amber-400">
              chuyên nghiệp & đáng tin cậy
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Zeno Global cung cấp thiết bị âm thanh chuyên nghiệp và giải pháp
            tổng thể dành cho sân khấu, hội trường, sự kiện và công trình.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Từ lựa chọn sản phẩm, tư vấn cấu hình đến nguồn hàng và hỗ trợ kỹ
            thuật, chúng tôi đồng hành cùng khách hàng trong toàn bộ quá trình.
          </p>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/home/ROB1146.JPG"
                  alt="Hệ thống loa chuyên nghiệp Zeno Global"
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10 sm:left-8 sm:right-auto sm:w-[300px]">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
                    <Speaker size={21} />
                  </div>

                  <div>
                    <p className="font-bold text-slate-950">
                      Professional Audio
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Loa sân khấu · Hội trường · Sự kiện · Công trình
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-6 lg:pt-0">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Zeno Global
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Không chỉ bán loa,
                <span className="block">
                  chúng tôi cung cấp giải pháp
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                Mỗi không gian cần một cấu hình âm thanh khác nhau. Vì vậy,
                Zeno Global tập trung vào việc hiểu nhu cầu thực tế của khách
                hàng để lựa chọn sản phẩm và hệ thống phù hợp nhất.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Bên cạnh thiết bị âm thanh, chúng tôi sở hữu kinh nghiệm về
                sourcing và thương mại quốc tế, giúp kết nối trực tiếp với các
                nhà sản xuất và nhà máy uy tín.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  'Tư vấn loa và cấu hình âm thanh theo nhu cầu',
                  'Kết nối trực tiếp với nhà máy & nhà sản xuất',
                  'Kiểm tra thông số và chất lượng sản phẩm',
                  'Hỗ trợ logistics & xuất nhập khẩu',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="flex-shrink-0 text-blue-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  Xem sản phẩm

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  Liên hệ tư vấn
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
                index !== stats.length - 1
                  ? 'md:border-r md:border-white/10'
                  : ''
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

      {/* ================= VALUES ================= */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Vì sao chọn Zeno Global?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                Giá trị tạo nên sự khác biệt
              </h2>

              <div className="mt-4 h-1 w-10 rounded-full bg-amber-400" />
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-500">
              Chúng tôi tập trung vào sản phẩm phù hợp, hỗ trợ kỹ thuật và sự
              đồng hành lâu dài cùng khách hàng.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-amber-400 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>

                  <div className="mt-6 h-[2px] w-8 bg-amber-400 transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= AUDIO / EXHIBITION ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl bg-slate-950 lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 text-amber-400">
                <Globe2 size={17} />

                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Global Audio Connection
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Cập nhật công nghệ âm thanh từ thị trường quốc tế
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                Zeno Global thường xuyên tiếp cận các triển lãm và nhà sản xuất
                thiết bị âm thanh để cập nhật sản phẩm, công nghệ và xu hướng
                mới của ngành.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  'Kết nối trực tiếp với nhà sản xuất',
                  'Cập nhật công nghệ và sản phẩm mới',
                  'Tìm kiếm giải pháp phù hợp thị trường Việt Nam',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="flex-shrink-0 text-blue-400"
                    />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="min-h-[320px] lg:min-h-[450px]">
              <img
                src="/images/home/ADE1396.JPG"
                alt="Zeno Global tại triển lãm thiết bị âm thanh"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-amber-400 px-4 py-10 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:px-2 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-black uppercase sm:text-xl">
              Bạn đang cần một hệ thống âm thanh phù hợp?
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-800">
              Liên hệ Zeno Global để được tư vấn sản phẩm và cấu hình phù hợp
              với không gian, nhu cầu sử dụng và ngân sách của bạn.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Liên hệ ngay

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
};