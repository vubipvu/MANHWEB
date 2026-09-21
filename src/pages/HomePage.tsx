import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Volume2,
  Speaker,
  ShieldCheck,
  Truck,
  Wrench,
  Calendar,
  Image as ImageIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const zaloPhone = '0912345678';

  const featuredCategories = [
    {
      title: 'Loa Line Array',
      desc: 'Giải pháp âm thanh chuyên nghiệp cho sân khấu và sự kiện lớn.',
      image: '/images/home/ROB1146.JPG',
    },
    {
      title: 'Loa Subwoofer',
      desc: 'Tăng cường dải trầm mạnh mẽ cho hội trường, bar, club.',
      image: '/images/home/ROB1142.JPG',
    },
    {
      title: 'Loa Full-range',
      desc: 'Đáp ứng tốt cho nhiều nhu cầu lắp đặt và biểu diễn.',
      image: '/images/home/ROB1101.JPG',
    },
    {
      title: 'Linh kiện loa',
      desc: 'Driver, bass loa, treble và các linh kiện âm thanh chất lượng.',
      image: '/images/home/ROB1142.JPG',
    },
  ];

  const applications = [
    {
      title: 'Âm thanh hội trường',
      desc: 'Giải pháp cho hội trường, trung tâm hội nghị, nhà văn hóa.',
    },
    {
      title: 'Sân khấu sự kiện',
      desc: 'Hệ thống loa chuyên dùng cho liveshow, event, biểu diễn ngoài trời.',
    },
    {
      title: 'Bar / Club / Lounge',
      desc: 'Tối ưu áp lực âm thanh, chất âm mạnh mẽ và độ phủ tốt.',
    },
    {
      title: 'Showroom / công trình',
      desc: 'Giải pháp âm thanh kết hợp tính thẩm mỹ cho không gian trưng bày.',
    },
  ];

  const galleryImages = [
    {
      title: 'Sân khấu thực tế',
      image: '/images/home/1.jpg',
    },
    {
      title: 'Triển lãm thiết bị âm thanh',
      image: '/images/home/ADE1396.JPG',
    },
    {
      title: 'Booth trưng bày sản phẩm',
      image: '/images/home/ROB1101.JPG',
    },
    {
      title: 'Linh kiện / củ loa',
      image: '/images/home/ROB1142.JPG',
    },
    {
      title: 'Loa line array',
      image: '/images/home/ROB1146.JPG',
    },
    {
      title: 'Không gian showroom',
      image: '/images/home/showroom.jpg',
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
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/55 to-slate-950" />
        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Professional Audio Solutions
            </span>
          </div>

          <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
            Professional
            <span className="block text-amber-400">Speaker System</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-7 text-slate-300 md:text-lg">
            Cung cấp loa sân khấu, loa hội trường, loa sự kiện và giải pháp âm
            thanh chuyên nghiệp cho doanh nghiệp, công trình và biểu diễn.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm">
            Từ sản phẩm – kỹ thuật – lắp đặt – tư vấn giải pháp tổng thể.
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              {
                icon: Speaker,
                title: 'Loa chuyên nghiệp',
                english: 'Pro Audio Speakers',
              },
              {
                icon: ShieldCheck,
                title: 'Hàng chất lượng',
                english: 'Quality Assurance',
              },
              {
                icon: Wrench,
                title: 'Hỗ trợ kỹ thuật',
                english: 'Technical Support',
              },
              {
                icon: Truck,
                title: 'Giao hàng toàn quốc',
                english: 'Nationwide Delivery',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.10]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/10">
                      <Icon className="text-amber-400" size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white">{item.title}</p>
                      <p className="mt-0.5 text-[10px] text-slate-500">
                        {item.english}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3.5 text-xs font-bold uppercase text-slate-950 transition hover:bg-amber-300"
            >
              Xem sản phẩm
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

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Danh mục nổi bật"
            subtitle="Featured Speaker Categories"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCategories.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>

                  <Link
                    to="/products"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                  >
                    Xem thêm <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Vì sao chọn chúng tôi"
            subtitle="Why Choose Our Audio Solutions"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              {
                icon: CheckCircle2,
                title: 'Sản phẩm phù hợp thực tế',
                desc: 'Tư vấn đúng nhu cầu sử dụng, ngân sách và không gian lắp đặt.',
              },
              {
                icon: Volume2,
                title: 'Giải pháp âm thanh đồng bộ',
                desc: 'Không chỉ bán loa mà còn hỗ trợ phối ghép và lên cấu hình.',
              },
              {
                icon: Wrench,
                title: 'Tư vấn kỹ thuật',
                desc: 'Hỗ trợ thông số, lắp đặt và định hướng hệ thống âm thanh.',
              },
              {
                icon: Truck,
                title: 'Hỗ trợ giao hàng',
                desc: 'Linh hoạt trong khâu giao nhận và hỗ trợ khách hàng toàn quốc.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-4 text-sm font-bold uppercase text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeaderDark
            title="Giải pháp theo ứng dụng"
            subtitle="Applications"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:bg-white/[0.07]"
              >
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
              <ImageIcon size={15} className="text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                Gallery
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-black uppercase tracking-wide text-slate-950 sm:text-3xl">
              Hình ảnh thực tế
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Hình ảnh sản phẩm, triển lãm, sân khấu và không gian ứng dụng thực tế.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <div className="h-52 overflow-hidden md:h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <p className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXHIBITION CTA ================= */}
      <section className="bg-slate-50 py-16 sm:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-slate-950 text-white">
            <div className="grid items-center gap-0 md:grid-cols-2">
              <div className="p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                  Audio Exhibition
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Kết nối sản phẩm và công nghệ âm thanh mới
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Chúng tôi thường xuyên cập nhật xu hướng, công nghệ và sản phẩm
                  mới từ các triển lãm thiết bị âm thanh trong và ngoài nước.
                </p>

                <a
                  href={`https://zalo.me/${zaloPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  <Calendar size={16} />
                  Liên hệ nhận tư vấn
                </a>
              </div>

              <div className="h-full min-h-[280px]">
                <img
                  src="/images/home/ADE1396.JPG"
                  alt="Triển lãm âm thanh"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-amber-400 px-4 py-10 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-lg font-black uppercase sm:text-xl">
              Bạn đang cần tư vấn chọn loa phù hợp?
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-800">
              Gửi yêu cầu cho chúng tôi để được tư vấn cấu hình âm thanh phù hợp
              cho hội trường, sân khấu, showroom hoặc công trình của bạn.
            </p>
          </div>

          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-xs font-bold uppercase text-white transition hover:bg-slate-800"
          >
            Nhận tư vấn ngay
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

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
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

const SectionHeaderDark: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-10 text-center sm:mb-12">
      <h2 className="text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-amber-400" />
      <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
        {subtitle}
      </p>
    </div>
  );
};