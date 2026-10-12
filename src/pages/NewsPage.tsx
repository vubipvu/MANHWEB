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
  Radio,
  Ship,
  Globe2,
  FileCheck2,
} from 'lucide-react';

const news = [
  {
    id: 1,
    slug: 'quy-trinh-do-kiem-hop-quy-micro-khong-day-2026',
    title: 'Quy trình đo kiểm & chứng nhận hợp quy micro không dây năm 2026',
    date: '10/10/2026',
    category: 'Pháp lý & Đo kiểm',
    readTime: '6 phút đọc',
    desc:
      'Hướng dẫn chi tiết về quy định quản lý dải tần sóng vô tuyến, các bước đo kiểm chỉ tiêu kỹ thuật và thủ tục công bố hợp quy cho thiết bị micro không dây nhập khẩu.',
    image: '/images/home/ADE1396.JPG',
    featured: true,
  },
  {
    id: 2,
    slug: 'thu-tuc-nhap-khau-thiet-bi-am-thanh-chuyen-nghiep',
    title: 'Lưu ý thủ tục hải quan và xuất nhập khẩu thiết bị âm thanh sân khấu',
    date: '28/09/2026',
    category: 'Xuất Nhập Khẩu',
    readTime: '5 phút đọc',
    desc:
      'Kinh nghiệm tra mã HS code cho cục đẩy, bàn mixer, loa công suất lớn, xử lý chứng nhận xuất xứ (C/O) và tối ưu thuế nhập khẩu chính ngạch.',
    image: '/images/home/1.jpg',
  },
  {
    id: 3,
    slug: 'xu-huong-loa-line-array-san-khau-hoi-truong',
    title: 'Cách lựa chọn cấu hình loa Line Array và Subwoofer cho hội trường lớn',
    date: '18/09/2026',
    category: 'Tư vấn kỹ thuật',
    readTime: '7 phút đọc',
    desc:
      'Phân tích góc phủ âm thanh, tính toán công suất RMS trên từng module loa và cách phân bổ áp suất âm đồng đều cho toàn bộ khán phòng.',
    image: '/images/home/ROB1146.JPG',
  },
  {
    id: 4,
    slug: 'trien-lam-pro-audio-quoc-te-demo-am-thanh',
    title: 'Tổng hợp các kỳ triển lãm Demo Pro Audio quốc tế đáng chú ý',
    date: '05/09/2026',
    category: 'Triển lãm Demo',
    readTime: '5 phút đọc',
    desc:
      'Điểm tin những kỳ hội chợ âm thanh biểu diễn quy mô tại Quảng Châu, Thượng Hải, Châu Á và cơ hội kết nối trực tiếp nhà xưởng sản xuất thiết bị.',
    image: '/images/home/ROB1142.JPG',
  },
  {
    id: 5,
    slug: 'nguyen-ly-phoi-ghep-cuc-day-va-vang-so',
    title: 'Nguyên tắc phối ghép cục đẩy công suất và vang số tránh cháy loa',
    date: '24/08/2026',
    category: 'Kỹ thuật vận hành',
    readTime: '6 phút đọc',
    desc:
      'Cách căn chỉnh dải cắt tần (Crossover), giới hạn biên độ tín hiệu (Limiter/Compressor) và cân bằng tải giữa main công suất với trở kháng loa.',
    image:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900',
  },
  {
    id: 6,
    slug: 'vai-tro-bo-quan-ly-nguon-dien-am-thanh',
    title: 'Tại sao dàn âm thanh sự kiện bắt buộc phải có bộ quản lý nguồn?',
    date: '12/08/2026',
    category: 'An toàn thiết bị',
    readTime: '4 phút đọc',
    desc:
      'Tìm hiểu cơ chế bật tắt tuần tự, lọc nguồn chống nhiễu và bảo vệ chống sốc điện đột ngột gây hư hỏng hệ thống củ loa cao cấp.',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900',
  },
];

export const NewsPage: React.FC = () => {
  const zaloPhone = '0332933226';
  const phoneDisplay = '0332 933 226';

  const featuredNews = news.find((item) => item.featured);
  const otherNews = news.filter((item) => !item.featured);

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

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <Headphones size={15} className="text-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Zeno Global Knowledge &amp; Insights
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Tin tức thiết bị, hợp quy &amp;
            <span className="block text-amber-400">
              Công nghệ âm thanh chuyên nghiệp
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Chuyên mục chia sẻ kinh nghiệm kỹ thuật âm thanh biểu diễn, cập nhật thủ tục hợp chuẩn - hợp quy micro không dây và tin tức triển lãm Pro Audio quốc tế.
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
                  Tiêu điểm ngành âm thanh
                </span>
              </div>

              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Bài viết &amp; Chuyên đề nổi bật
              </h2>

              <div className="mt-3 h-1 w-10 rounded-full bg-amber-400" />
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Cập nhật thông tin thực chiến về thiết bị, chứng nhận tần số và thương mại quốc tế.
            </p>
          </div>

          {/* ================= FEATURED POST ================= */}
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
                  <span className="rounded-full bg-amber-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-md">
                    Tiêu điểm đo kiểm
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                <div className="flex items-center gap-2 text-blue-600">
                  <Radio size={16} />
                  <span className="text-xs font-bold uppercase tracking-[0.15em]">
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
                  Đọc toàn văn bài viết
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          )}

          {/* ================= LATEST NEWS LIST ================= */}
          <div className="mt-16">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Kho kiến thức chuyên ngành
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  Tin tức &amp; Giải pháp kỹ thuật mới nhất
                </h2>
              </div>

              <Link
                to="/news"
                className="group hidden items-center gap-2 text-sm font-semibold text-blue-600 sm:flex"
              >
                Tất cả bài viết
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
                    className="relative block h-52 overflow-hidden bg-slate-900"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-[11px] font-bold text-amber-300 shadow-sm backdrop-blur">
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
                      <h3 className="mt-4 text-base font-bold leading-7 text-slate-950 transition-colors duration-300 group-hover:text-blue-600 line-clamp-2">
                        {item.title}
                      </h3>
                    </Link>

                    <p className="mt-3 flex-1 text-xs leading-6 text-slate-500 line-clamp-3">
                      {item.desc}
                    </p>

                    <Link
                      to={`/news/${item.slug}`}
                      className="group/button mt-6 inline-flex items-center gap-2 text-xs font-bold text-blue-600"
                    >
                      Xem chi tiết
                      <ArrowRight
                        size={15}
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

      {/* ================= KNOWLEDGE & SERVICE STRIP ================= */}
      <section className="bg-slate-50 py-14 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: FileCheck2,
                title: 'Đo kiểm & Hợp quy',
                desc: 'Hỗ trợ thủ tục kiểm định, cấp chứng nhận tần số micro theo đúng chuẩn cơ quan chức năng.',
              },
              {
                icon: Ship,
                title: 'Xuất nhập khẩu Pro Audio',
                desc: 'Tư vấn mã HS, tối ưu logistics và thủ tục hải quan cho thiết bị âm thanh nhập khẩu chính ngạch.',
              },
              {
                icon: Globe2,
                title: 'Triển lãm & Demo thiết bị',
                desc: 'Cập nhật lịch trình các kỳ expo âm thanh quốc tế và kết nối trực tiếp đối tác sản xuất.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-amber-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-bold text-slate-950 text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-amber-400">
                <Headphones size={18} />
                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Zeno Global Audio &amp; Trade Support
                </p>
              </div>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Cần tư vấn hồ sơ hợp quy hoặc cấu hình âm thanh dự án?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Liên hệ ngay hotline/Zalo <strong>{phoneDisplay}</strong> để được các chuyên gia kỹ thuật và xúc tiến thương mại của Zeno Global hỗ trợ trực tiếp.
              </p>
            </div>

            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
            >
              <MessageCircle size={18} />
              <span>Chat Zalo tư vấn ({phoneDisplay})</span>
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