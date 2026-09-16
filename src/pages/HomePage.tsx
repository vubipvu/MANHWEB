import React from 'react';
import {
  Search,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Users,
  FileText,
  Award,
  Globe,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const zaloPhone = '0912345678';

  const processSteps = [
    {
      num: '01',
      title: 'Tìm nguồn hàng',
      icon: Search,
      desc: 'Tìm kiếm sản phẩm & nhà cung cấp phù hợp',
    },
    {
      num: '02',
      title: 'Đánh giá nhà cung cấp',
      icon: CheckCircle2,
      desc: 'Kiểm tra năng lực & uy tín nhà cung cấp',
    },
    {
      num: '03',
      title: 'Kiểm tra sản phẩm',
      icon: ShieldCheck,
      desc: 'Kiểm tra chất lượng & thông số kỹ thuật',
    },
    {
      num: '04',
      title: 'Đàm phán & đặt hàng',
      icon: FileText,
      desc: 'Đàm phán giá cả & điều khoản hợp đồng',
    },
    {
      num: '05',
      title: 'Chứng từ & thủ tục',
      icon: FileText,
      desc: 'Chuẩn bị chứng từ & hỗ trợ xuất nhập khẩu',
    },
    {
      num: '06',
      title: 'Vận chuyển Logistics',
      icon: Truck,
      desc: 'Vận chuyển quốc tế & giao hàng tận nơi',
    },
    {
      num: '07',
      title: 'Hậu mãi & hỗ trợ',
      icon: Users,
      desc: 'Hỗ trợ sau bán hàng & xử lý phát sinh',
    },
  ];

  const strengths = [
    {
      icon: Users,
      title: 'Am hiểu chuyên ngành',
      desc: 'Hiểu rõ sản phẩm âm thanh, ánh sáng và vật liệu dự án.',
    },
    {
      icon: Globe,
      title: 'Mạng lưới rộng khắp',
      desc: 'Kết nối trực tiếp với các nhà máy uy tín tại Trung Quốc.',
    },
    {
      icon: Award,
      title: 'Hỗ trợ kỹ thuật',
      desc: 'Đọc thông số và tư vấn giải pháp phù hợp.',
    },
    {
      icon: Truck,
      title: 'Kinh nghiệm XNK',
      desc: 'Hỗ trợ thủ tục và logistics quốc tế.',
    },
    {
      icon: ShieldCheck,
      title: 'Uy tín & bảo mật',
      desc: 'Minh bạch và bảo mật thông tin khách hàng.',
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* =================================================
          1. HERO
      ================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

        {/* Decorative light */}
        <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
          {/* Small label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-amber-400" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Global Sourcing • Trading • Import & Export
            </span>
          </div>

          {/* Keep old style */}
          <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
            Your Product.
          </h1>

          <h2 className="mt-3 text-xl font-extrabold uppercase tracking-wide text-amber-400 sm:text-2xl md:text-3xl">
            Our Sourcing & Trade Expertise.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-7 text-slate-300 md:text-lg">
            Kết nối nguồn hàng chất lượng – Giải pháp thương mại & xuất nhập
            khẩu toàn diện
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm">
            Connecting you with reliable manufacturers and complete import -
            export solutions.
          </p>

          {/* 4 Highlights */}
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              {
                icon: CheckCircle2,
                title: 'Nguồn hàng uy tín',
                english: 'Reliable Sourcing',
              },
              {
                icon: Award,
                title: 'Am hiểu sản phẩm',
                english: 'Industry Expertise',
              },
              {
                icon: Users,
                title: 'Hỗ trợ kỹ thuật',
                english: 'Technical Support',
              },
              {
                icon: Truck,
                title: 'XNK đơn giản',
                english: 'Import - Export',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-white/10 bg-white/[0.06] p-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.1]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/10">
                      <Icon className="text-amber-400" size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        {item.english}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3.5 text-xs font-bold uppercase text-slate-950 transition hover:bg-amber-300"
            >
              Tìm nguồn hàng

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/[0.04] px-6 py-3.5 text-xs font-bold uppercase text-white transition hover:bg-white hover:text-slate-950"
            >
              Liên hệ tư vấn

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* =================================================
          2. INDUSTRIES
      ================================================= */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Ngành hàng chúng tôi cung cấp"
            subtitle="Our Industry Platforms"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <IndustryCard
              image="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=700"
              title="Thiết bị âm thanh"
              english="PRO AUDIO"
              items={[
                'Micro không dây',
                'Loa, Amply, Mixer',
                'Thiết bị hội nghị',
                'Thiết bị sân khấu',
                'Phụ kiện âm thanh',
              ]}
            />

            <IndustryCard
              image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700"
              title="Thiết bị ánh sáng"
              english="LIGHTING"
              items={[
                'Đèn sân khấu',
                'Đèn kiến trúc',
                'LED, LED Film',
                'Thiết bị điều khiển',
                'Phụ kiện',
              ]}
            />

            <IndustryCard
              image="https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=700"
              title="Thảm & trải sàn"
              english="FLOORING"
              items={[
                'Thảm văn phòng',
                'Thảm khách sạn',
                'Thảm sự kiện',
                'Thảm công trình',
                'Carpet Tile',
              ]}
            />

            <IndustryCard
              image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700"
              title="Gạch ốp lát"
              english="TILES"
              items={[
                'Gạch porcelain',
                'Gạch ceramic',
                'Gạch lót nền',
                'Gạch ốp tường',
                'Vật liệu hoàn thiện',
              ]}
            />

            <IndustryCard
              image="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=700"
              title="Thiết bị vệ sinh"
              english="SANITARY WARE"
              items={[
                'Sen vòi, vòi chậu',
                'Bồn cầu, chậu rửa',
                'Phụ kiện phòng tắm',
                'Phụ kiện nhà bếp',
                'Thiết bị cao cấp',
              ]}
            />
          </div>
        </div>
      </section>

      {/* =================================================
          3. PROCESS
      ================================================= */}
      <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Giải pháp toàn diện"
            subtitle="Our End-to-End Solutions"
          />

          {/* 7 bước */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  className="group relative rounded-xl border border-slate-200 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <span className="text-lg font-black text-amber-500">
                    {step.num}
                  </span>

                  <div className="mx-auto my-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-xs font-bold leading-5 text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Strengths */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:bg-white hover:shadow-md"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Icon size={21} />
                  </div>

                  <h4 className="mt-4 text-xs font-bold uppercase text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          4. EXHIBITIONS
      ================================================= */}
      <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-black uppercase tracking-wide sm:text-3xl">
              Triển lãm âm thanh quốc tế
            </h2>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              International Pro Audio Exhibitions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ExhibitionCard
              location="VIỆT NAM"
              title="Triển lãm Quốc tế Thiết bị & Công nghệ Âm thanh Việt Nam"
              english="VIETNAM INTERNATIONAL PRO AUDIO EXHIBITION"
              items={[
                'Giới thiệu sản phẩm & công nghệ mới nhất',
                'Kết nối trực tiếp với nhà máy và khách hàng',
                'Trải nghiệm sản phẩm thực tế',
                'Hội thảo chuyên ngành & đào tạo',
              ]}
              footer="Hà Nội | TP. Hồ Chí Minh"
            />

            <ExhibitionCard
              location="TRUNG QUỐC"
              title="Triển lãm Âm thanh Chuyên nghiệp Quốc tế Quảng Châu"
              english="GUANGZHOU INTERNATIONAL PRO AUDIO EXHIBITION"
              items={[
                'Quy tụ các thương hiệu âm thanh hàng đầu',
                'Cập nhật xu hướng & công nghệ mới',
                'Kết nối nhà máy & supplier chất lượng',
                'Cơ hội hợp tác & phát triển thị trường',
              ]}
              footer="Quảng Châu, Trung Quốc"
            />
          </div>

          {/* Exhibition CTA */}
          <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-5 sm:flex-row">
            <p className="max-w-3xl text-xs leading-6 text-slate-400">
              Zeno Global hỗ trợ khách hàng tham dự, kết nối nhà cung cấp và
              tìm kiếm sản phẩm tại các triển lãm âm thanh quốc tế.
            </p>

            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-shrink-0 items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-xs font-bold text-slate-950 transition hover:bg-amber-300"
            >
              <Calendar size={15} />
              Xem lịch triển lãm
            </a>
          </div>
        </div>
      </section>

      {/* =================================================
          5. PROJECTS
      ================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Dự án tiêu biểu"
            subtitle="Featured Projects"
          />

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            {[
              {
                title: 'Hội trường',
                desc: 'Âm thanh & Ánh sáng',
                img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700',
              },
              {
                title: 'Khách sạn',
                desc: 'Thảm trải sàn',
                img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=700',
              },
              {
                title: 'Showroom',
                desc: 'Gạch ốp lát',
                img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700',
              },
              {
                title: 'Nhà máy',
                desc: 'Thiết bị âm thanh',
                img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=700',
              },
              {
                title: 'Khách sạn',
                desc: 'Thiết bị vệ sinh',
                img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=700',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-36 overflow-hidden sm:h-40">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-sm font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-[11px] text-slate-500">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          6. STATISTICS
      ================================================= */}
      <section className="border-t border-slate-800 bg-slate-950 py-12 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          {[
            {
              number: '100+',
              text: 'Nhà cung cấp uy tín tại Trung Quốc',
            },
            {
              number: '500+',
              text: 'Đơn hàng đã thực hiện thành công',
            },
            {
              number: '10+',
              text: 'Quốc gia đã xuất khẩu và nhập khẩu',
            },
            {
              number: '5+',
              text: 'Năm kinh nghiệm trong thương mại quốc tế',
            },
          ].map((stat) => (
            <div key={stat.number}>
              <p className="text-3xl font-black text-amber-400 sm:text-4xl">
                {stat.number}
              </p>

              <p className="mx-auto mt-2 max-w-[180px] text-xs leading-5 text-slate-400">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================
          7. FINAL CTA
      ================================================= */}
      <section className="bg-amber-400 px-4 py-9 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-lg font-black uppercase sm:text-xl">
              Bạn đang tìm kiếm nguồn hàng hoặc sản phẩm cụ thể?
            </h3>

            <p className="mt-2 max-w-3xl text-xs font-medium leading-6 text-slate-800 sm:text-sm">
              Gửi yêu cầu cho chúng tôi. Zeno Global sẽ tìm kiếm và đề xuất
              giải pháp phù hợp với nhu cầu của doanh nghiệp.
            </p>
          </div>

          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-xs font-bold uppercase text-white transition hover:bg-slate-800"
          >
            Gửi yêu cầu ngay

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

/* =================================================
   REUSABLE COMPONENTS
================================================= */

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-10 text-center sm:mb-12">
      <h2 className="text-2xl font-black uppercase tracking-wide text-slate-950 sm:text-3xl">
        {title}
      </h2>

      <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-amber-400" />

      <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
        {subtitle}
      </p>
    </div>
  );
};

interface IndustryCardProps {
  image: string;
  title: string;
  english: string;
  items: string[];
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  image,
  title,
  english,
  items,
}) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="text-center">
          <h3 className="text-sm font-bold uppercase text-slate-900">
            {title}
          </h3>

          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
            {english}
          </p>
        </div>

        <div className="mt-4 h-px bg-slate-100" />

        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs leading-5 text-slate-600"
            >
              <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-amber-400" />

              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ExhibitionCardProps {
  location: string;
  title: string;
  english: string;
  items: string[];
  footer: string;
}

const ExhibitionCard: React.FC<ExhibitionCardProps> = ({
  location,
  title,
  english,
  items,
  footer,
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:bg-white/[0.08] sm:p-7">
      <span className="inline-flex rounded-full bg-amber-400/10 px-3 py-1 text-[10px] font-bold tracking-wider text-amber-400">
        {location}
      </span>

      <h3 className="mt-5 text-sm font-bold leading-6 text-white sm:text-base">
        {title}
      </h3>

      <p className="mt-1 text-[10px] font-medium uppercase leading-5 text-slate-500">
        {english}
      </p>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-xs leading-5 text-slate-300"
          >
            <CheckCircle2
              size={15}
              className="mt-0.5 flex-shrink-0 text-blue-400"
            />

            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[11px] font-bold text-amber-400">
        <span>{footer}</span>
        <span>Hàng năm</span>
      </div>
    </div>
  );
};