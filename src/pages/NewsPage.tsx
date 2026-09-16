import React from 'react';
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Newspaper,
  TrendingUp,
} from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'Xu hướng thiết bị âm thanh hội trường & sân khấu 2026',
    date: '02/09/2026',
    category: 'Xu hướng thị trường',
    readTime: '5 phút đọc',
    desc: 'Cập nhật những công nghệ loa, amply và hệ thống âm thanh mới đang được giới thiệu tại các triển lãm quốc tế.',
    image:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1000',
    featured: true,
  },
  {
    id: 2,
    title:
      'Kinh nghiệm kiểm tra chất lượng nguồn hàng Sourcing tại nhà máy',
    date: '28/08/2026',
    category: 'Sourcing',
    readTime: '4 phút đọc',
    desc: 'Các tiêu chí quan trọng giúp doanh nghiệp đánh giá chính xác năng lực sản xuất và chất lượng của nhà cung cấp.',
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700',
  },
  {
    id: 3,
    title: '5 yếu tố cần kiểm tra trước khi lựa chọn nhà cung cấp',
    date: '20/08/2026',
    category: 'Kinh nghiệm',
    readTime: '6 phút đọc',
    desc: 'Từ năng lực nhà máy đến chứng từ và khả năng giao hàng, doanh nghiệp cần đánh giá nhiều yếu tố trước khi hợp tác.',
    image:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=700',
  },
  {
    id: 4,
    title: 'Tối ưu chi phí logistics khi nhập khẩu hàng hóa',
    date: '12/08/2026',
    category: 'Logistics',
    readTime: '5 phút đọc',
    desc: 'Một số phương án giúp doanh nghiệp kiểm soát chi phí vận chuyển và hạn chế phát sinh trong quá trình nhập khẩu.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700',
  },
];

export const NewsPage: React.FC = () => {
  const featuredNews = news.find((item) => item.featured);
  const otherNews = news.filter((item) => !item.featured);

  return (
    <main className="bg-white">
      {/* ================= HEADER ================= */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-slate-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <Newspaper size={15} className="text-blue-600" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                News & Insights
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Tin tức &
              <span className="text-blue-600"> Góc nhìn thị trường</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Cập nhật xu hướng ngành, kinh nghiệm sourcing, logistics và những
              thông tin hữu ích dành cho doanh nghiệp trong hoạt động thương
              mại quốc tế.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-blue-600">
                <TrendingUp size={18} />

                <span className="text-sm font-bold uppercase tracking-[0.15em]">
                  Mới nhất
                </span>
              </div>

              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Bài viết nổi bật
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Góc nhìn và kiến thức thực tế về sourcing, thương mại và chuỗi
              cung ứng.
            </p>
          </div>

          {/* ================= FEATURED ================= */}
          {featuredNews && (
            <article className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[430px]">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent lg:hidden" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    Bài viết nổi bật
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                  {featuredNews.category}
                </span>

                <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-950 transition-colors group-hover:text-blue-600 sm:text-3xl">
                  {featuredNews.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  {featuredNews.desc}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={15} />
                    {featuredNews.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={15} />
                    {featuredNews.readTime}
                  </div>
                </div>

                <button className="group/button mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-600">
                  Đọc bài viết

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </button>
              </div>
            </article>
          )}

          {/* ================= OTHER ARTICLES ================= */}
          <div className="mt-14">
            <div className="mb-7 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-950">
                Tin tức mới nhất
              </h2>

              <button className="hidden items-center gap-2 text-sm font-semibold text-blue-600 sm:flex">
                Xem tất cả
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherNews.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-blue-600 shadow-sm backdrop-blur">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {item.date}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock3 size={14} />
                        {item.readTime}
                      </div>
                    </div>

                    <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.desc}
                    </p>

                    <button className="group/button mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                      Xem chi tiết

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-10 lg:px-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                Zeno Global Insights
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Bạn đang tìm kiếm nguồn hàng phù hợp?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Không chỉ cập nhật thông tin thị trường, Zeno Global còn hỗ trợ
                doanh nghiệp tìm kiếm, đánh giá và kết nối trực tiếp với nhà
                cung cấp.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Liên hệ tư vấn

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};