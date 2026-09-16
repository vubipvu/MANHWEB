import React from 'react';
import {
  Search,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Users,
  FileText,
  Award,
  Globe2,
  ArrowRight,
  Calendar,
  MessageCircle,
  Factory,
  Headphones,
  Lightbulb,
  Layers3,
  Grid3X3,
  Bath,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const zaloPhone = '0912345678';

  const industries = [
    {
      title: 'Thiết bị âm thanh',
      english: 'PRO AUDIO',
      icon: Headphones,
      image:
        'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800',
      items: [
        'Micro không dây',
        'Loa, Amply, Mixer',
        'Thiết bị hội nghị',
        'Thiết bị sân khấu',
      ],
    },
    {
      title: 'Thiết bị ánh sáng',
      english: 'LIGHTING',
      icon: Lightbulb,
      image:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
      items: [
        'Đèn sân khấu',
        'Đèn kiến trúc',
        'LED & LED Film',
        'Thiết bị điều khiển',
      ],
    },
    {
      title: 'Thảm & trải sàn',
      english: 'FLOORING',
      icon: Layers3,
      image:
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800',
      items: [
        'Thảm văn phòng',
        'Thảm khách sạn',
        'Thảm sự kiện',
        'Carpet Tile',
      ],
    },
    {
      title: 'Gạch ốp lát',
      english: 'TILES',
      icon: Grid3X3,
      image:
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
      items: [
        'Gạch porcelain',
        'Gạch ceramic',
        'Gạch lót nền',
        'Gạch ốp tường',
      ],
    },
    {
      title: 'Thiết bị vệ sinh',
      english: 'SANITARY WARE',
      icon: Bath,
      image:
        'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800',
      items: [
        'Sen vòi & vòi chậu',
        'Bồn cầu & chậu rửa',
        'Phụ kiện phòng tắm',
        'Phụ kiện nhà bếp',
      ],
    },
  ];

  const process = [
    {
      num: '01',
      title: 'Tìm nguồn hàng',
      icon: Search,
      desc: 'Tìm kiếm sản phẩm và nhà cung cấp phù hợp.',
    },
    {
      num: '02',
      title: 'Đánh giá nhà cung cấp',
      icon: CheckCircle2,
      desc: 'Kiểm tra năng lực và mức độ uy tín.',
    },
    {
      num: '03',
      title: 'Kiểm tra sản phẩm',
      icon: ShieldCheck,
      desc: 'Đánh giá chất lượng và thông số kỹ thuật.',
    },
    {
      num: '04',
      title: 'Đàm phán & đặt hàng',
      icon: FileText,
      desc: 'Đàm phán giá, điều khoản và hợp đồng.',
    },
    {
      num: '05',
      title: 'Chứng từ & thủ tục',
      icon: FileText,
      desc: 'Chuẩn bị chứng từ xuất nhập khẩu.',
    },
    {
      num: '06',
      title: 'Vận chuyển',
      icon: Truck,
      desc: 'Logistics quốc tế và giao hàng tận nơi.',
    },
    {
      num: '07',
      title: 'Hậu mãi',
      icon: Users,
      desc: 'Hỗ trợ sau bán hàng và xử lý phát sinh.',
    },
  ];

  const strengths = [
    {
      icon: Award,
      title: 'Am hiểu chuyên ngành',
      desc: 'Hiểu sản phẩm, thông số và nhu cầu thực tế của dự án.',
    },
    {
      icon: Globe2,
      title: 'Mạng lưới rộng khắp',
      desc: 'Kết nối trực tiếp với hệ thống nhà máy tại Trung Quốc.',
    },
    {
      icon: Users,
      title: 'Hỗ trợ kỹ thuật',
      desc: 'Tư vấn giải pháp và lựa chọn sản phẩm phù hợp.',
    },
    {
      icon: Truck,
      title: 'Kinh nghiệm XNK',
      desc: 'Hỗ trợ chứng từ, logistics và thông quan.',
    },
    {
      icon: ShieldCheck,
      title: 'Uy tín & bảo mật',
      desc: 'Minh bạch quy trình và bảo mật thông tin khách hàng.',
    },
  ];

  const projects = [
    {
      title: 'Hội trường',
      category: 'Âm thanh & Ánh sáng',
      img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
    },
    {
      title: 'Khách sạn',
      category: 'Thảm trải sàn',
      img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800',
    },
    {
      title: 'Showroom',
      category: 'Gạch ốp lát',
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
    },
    {
      title: 'Nhà máy',
      category: 'Thiết bị âm thanh',
      img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800',
    },
  ];

  const stats = [
    {
      value: '100+',
      label: 'Nhà cung cấp',
      desc: 'Đối tác uy tín tại Trung Quốc',
    },
    {
      value: '500+',
      label: 'Đơn hàng',
      desc: 'Đã thực hiện thành công',
    },
    {
      value: '10+',
      label: 'Quốc gia',
      desc: 'Xuất khẩu & nhập khẩu',
    },
    {
      value: '5+',
      label: 'Năm kinh nghiệm',
      desc: 'Trong thương mại quốc tế',
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[650px] overflow-hidden bg-slate-950">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />

        {/* Decorations */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Global Sourcing & Trading
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Kết nối nguồn hàng
              <span className="block text-blue-400">
                tối ưu chuỗi cung ứng
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Zeno Global cung cấp giải pháp sourcing, thương mại và xuất nhập
              khẩu toàn diện, giúp doanh nghiệp kết nối trực tiếp với các nhà
              sản xuất uy tín tại Trung Quốc và quốc tế.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-500"
              >
                Tìm nguồn hàng

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href={`https://zalo.me/${zaloPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white hover:text-slate-950"
              >
                <MessageCircle size={18} />
                Liên hệ tư vấn
              </a>
            </div>

            {/* Trust */}
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                'Nguồn hàng uy tín',
                'Kiểm tra nhà máy',
                'Hỗ trợ kỹ thuật',
                'Logistics XNK',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-slate-300"
                >
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 text-blue-400"
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-6 sm:p-7 ${
                index !== stats.length - 1 ? 'lg:border-r' : ''
              } border-slate-200`}
            >
              <p className="text-3xl font-bold text-blue-600 sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-1 font-bold text-slate-900">{stat.label}</p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Our Industries
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Ngành hàng chúng tôi cung cấp
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-500">
              Tập trung vào các nhóm sản phẩm phục vụ dự án, thương mại và
              phân phối với nguồn cung trực tiếp từ nhà sản xuất.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-blue-600 shadow">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600">
                      {industry.english}
                    </p>

                    <h3 className="mt-1 text-base font-bold text-slate-950">
                      {industry.title}
                    </h3>

                    <div className="mt-4 space-y-2">
                      {industry.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-xs leading-5 text-slate-500"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-blue-500" />

                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              End-to-End Solution
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Quy trình sourcing toàn diện
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Đồng hành từ bước tìm kiếm nguồn hàng cho đến giao nhận và hỗ trợ
              sau bán hàng.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  className={`group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg ${
                    index === 6 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <span className="text-2xl font-bold text-slate-200">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="mt-5 font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Strengths */}
          <div className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-5">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`p-6 ${
                    index !== strengths.length - 1
                      ? 'lg:border-r lg:border-slate-200'
                      : ''
                  }`}
                >
                  <Icon size={23} className="text-blue-600" />

                  <h4 className="mt-4 text-sm font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EXHIBITIONS ================= */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-400">
                International Exhibitions
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Kết nối tại triển lãm quốc tế
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-400">
              Zeno Global hỗ trợ khách hàng tiếp cận nhà sản xuất, sản phẩm mới
              và cơ hội hợp tác tại các triển lãm chuyên ngành.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Vietnam */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400">
                  VIỆT NAM
                </span>

                <Calendar size={20} className="text-slate-500" />
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug">
                Triển lãm Quốc tế Thiết bị & Công nghệ Âm thanh Việt Nam
              </h3>

              <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                Vietnam International Pro Audio Exhibition
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Giới thiệu sản phẩm và công nghệ mới',
                  'Kết nối nhà máy và khách hàng',
                  'Trải nghiệm sản phẩm thực tế',
                  'Hội thảo & đào tạo chuyên ngành',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="flex-shrink-0 text-blue-400"
                    />

                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-xs font-semibold text-slate-400">
                <span>Hà Nội · TP. Hồ Chí Minh</span>
                <span>Hàng năm</span>
              </div>
            </div>

            {/* Guangzhou */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400">
                  TRUNG QUỐC
                </span>

                <Globe2 size={20} className="text-slate-500" />
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug">
                Triển lãm Âm thanh Chuyên nghiệp Quốc tế Quảng Châu
              </h3>

              <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                Guangzhou International Pro Audio Exhibition
              </p>

              <div className="mt-6 space-y-3">
                {[
                  'Quy tụ các thương hiệu âm thanh',
                  'Cập nhật xu hướng và công nghệ mới',
                  'Kết nối nhà máy & supplier',
                  'Phát triển cơ hội hợp tác',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="flex-shrink-0 text-blue-400"
                    />

                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-xs font-semibold text-slate-400">
                <span>Quảng Châu, Trung Quốc</span>
                <span>Hàng năm</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold text-white">
                Bạn muốn tham dự triển lãm cùng Zeno Global?
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Liên hệ để nhận thông tin lịch trình và hỗ trợ kết nối.
              </p>
            </div>

            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              <Calendar size={17} />
              Xem lịch triển lãm
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Featured Projects
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Dự án tiêu biểu
              </h2>
            </div>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
            >
              Xem tất cả dự án

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <div
                key={`${project.title}-${project.category}`}
                className="group relative h-[340px] overflow-hidden rounded-2xl"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    {project.category}
                  </p>

                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition group-hover:bg-blue-600">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Factory size={23} />
              </div>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Bạn đang tìm kiếm sản phẩm hoặc nhà cung cấp?
              </h2>

              <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base">
                Gửi thông tin sản phẩm bạn cần. Zeno Global sẽ hỗ trợ tìm nguồn,
                đánh giá nhà cung cấp và đề xuất giải pháp phù hợp.
              </p>
            </div>

            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-700 transition-all hover:bg-slate-50"
            >
              <MessageCircle size={19} />

              Gửi yêu cầu ngay

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};