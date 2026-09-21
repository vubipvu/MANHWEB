import React from 'react';
import { Link } from 'react-router-dom';
import {
ArrowRight,
  CalendarDays,
  Clock3,
  TrendingUp,
  Headphones,
  Speaker,
  MessageCircle,
} from 'lucide-react';

const news = [
  {
    id: 1,
    slug: 'xu-huong-thiet-bi-am-thanh-san-khau-2026',
    title: 'Xu hướng thiết bị âm thanh sân khấu & hội trường 2026',
    date: '02/09/2026',
    category: 'Công nghệ âm thanh',
    readTime: '5 phút đọc',
    desc:
      'Cập nhật những xu hướng mới về loa Line Array, hệ thống khuếch đại và xử lý tín hiệu dành cho sân khấu và hội trường.',
    image: '/images/home/1.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'cach-chon-loa-line-array',
    title: 'Cách lựa chọn loa Line Array phù hợp cho sân khấu',
    date: '28/08/2026',
    category: 'Tư vấn kỹ thuật',
    readTime: '6 phút đọc',
    desc:
      'Những yếu tố cần cân nhắc như diện tích, số lượng khán giả, công suất và độ phủ âm thanh khi lựa chọn hệ thống Line Array.',
    image: '/images/home/ROB1146.JPG',
  },
  {
    id: 3,
    slug: 'loa-fullrange-va-subwoofer-khac-nhau-the-nao',
    title: 'Loa Full-range và Subwoofer khác nhau như thế nào?',
    date: '20/08/2026',
    category: 'Kiến thức âm thanh',
    readTime: '4 phút đọc',
    desc:
      'Tìm hiểu vai trò của loa Full-range và loa Subwoofer trong một hệ thống âm thanh chuyên nghiệp.',
    image: '/images/home/ROB1142.JPG',
  },
  {
    id: 4,
    slug: 'trien-lam-am-thanh-quoc-te',
    title: 'Những công nghệ đáng chú ý tại triển lãm âm thanh quốc tế',
    date: '12/08/2026',
    category: 'Triển lãm',
    readTime: '5 phút đọc',
    desc:
      'Các dòng loa, driver và công nghệ xử lý âm thanh mới đang được giới thiệu tại những triển lãm chuyên ngành.',
    image: '/images/home/ADE1396.JPG',
  },
  {
    id: 5,
    slug: 'cong-suat-loa-va-amply',
    title: 'Công suất loa và amply: Ghép thế nào để hệ thống hoạt động ổn định?',
    date: '06/08/2026',
    category: 'Kỹ thuật',
    readTime: '7 phút đọc',
    desc:
      'Giải thích cách hiểu công suất RMS, Peak và những nguyên tắc cơ bản khi phối ghép loa với cục đẩy công suất.',
    image:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900',
  },
  {
    id: 6,
    slug: 'he-thong-am-thanh-hoi-truong',
    title: 'Một hệ thống âm thanh hội trường cần những thiết bị gì?',
    date: '01/08/2026',
    category: 'Giải pháp',
    readTime: '6 phút đọc',
    desc:
      'Tổng quan các thiết bị cơ bản gồm loa, mixer, cục đẩy, processor và micro trong một hệ thống hội trường.',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900',
  },
];

export const NewsPage: React.FC = () => {
  const zaloPhone = '0912345678';

  const featuredNews = news.find((item) => item.featured);
  const otherNews = news.filter((item) => !item.featured);

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

        <div className="absolute inset-0 bg-slate-950/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/65 to-slate-950" />

        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <Headphones size={15} className="text-amber-400" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Audio News & Insights
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Tin tức & kiến thức
            <span className="block text-amber-400">
              âm thanh chuyên nghiệp
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Cập nhật công nghệ loa, kinh nghiệm lựa chọn thiết bị, giải pháp âm
            thanh và những xu hướng mới trong ngành Professional Audio.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
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

              <div className="mt-3 h-1 w-10 rounded-full bg-amber-400" />
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Kiến thức thực tế về loa, thiết bị và hệ thống âm thanh chuyên
              nghiệp.
            </p>
          </div>

          {/* ================= FEATURED ================= */}
          {featuredNews && (
            <article className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Image */}
              <div className="relative min-h-[320px] overflow-hidden lg:min-h-[440px]">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-950 shadow-lg">
                    Bài viết nổi bật
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                <div className="flex items-center gap-2">
                  <Speaker size={16} className="text-blue-600" />

                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                    {featuredNews.category}
                  </span>
                </div>

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

                <Link
                  to={`/news/${featuredNews.slug}`}
                  className="group/button mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-600"
                >
                  Đọc bài viết

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          )}

          {/* ================= LATEST NEWS ================= */}
          <div className="mt-16">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Audio Knowledge
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  Tin tức & kiến thức mới nhất
                </h2>
              </div>

              <Link
                to="/news"
                className="group hidden items-center gap-2 text-sm font-semibold text-blue-600 sm:flex"
              >
                Xem tất cả

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherNews.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  {/* Image */}
                  <Link
                    to={`/news/${item.slug}`}
                    className="relative block h-52 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/30 bg-white/95 px-3 py-1 text-[11px] font-bold text-blue-600 shadow-sm backdrop-blur">
                        {item.category}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
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

                    <Link to={`/news/${item.slug}`}>
                      <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                        {item.title}
                      </h3>
                    </Link>

                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                      {item.desc}
                    </p>

                    <Link
                      to={`/news/${item.slug}`}
                      className="group/button mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                    >
                      Xem chi tiết

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= KNOWLEDGE STRIP ================= */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Kiến thức sản phẩm',
                desc: 'Hiểu rõ loa, amply, mixer và thiết bị xử lý âm thanh.',
              },
              {
                number: '02',
                title: 'Tư vấn kỹ thuật',
                desc: 'Kinh nghiệm lựa chọn và phối ghép thiết bị phù hợp.',
              },
              {
                number: '03',
                title: 'Xu hướng công nghệ',
                desc: 'Cập nhật sản phẩm và công nghệ mới của ngành âm thanh.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-sm font-black text-amber-500">
                  {item.number}
                </span>

                <h3 className="mt-3 font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-amber-400">
                <Headphones size={18} />

                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Zeno Global Audio Support
                </p>
              </div>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Bạn cần tư vấn loa hoặc hệ thống âm thanh?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Gửi nhu cầu, diện tích không gian hoặc sản phẩm bạn quan tâm.
                Đội ngũ Zeno Global sẽ hỗ trợ đề xuất giải pháp phù hợp.
              </p>
            </div>

            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
            >
              <MessageCircle size={18} />

              Tư vấn qua Zalo

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