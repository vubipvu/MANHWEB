import React from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  Globe2,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: 'Mạng Lưới Toàn Cầu',
    description:
      'Kết nối trực tiếp với hơn 100+ nhà máy và nhà sản xuất uy tín tại Trung Quốc và quốc tế.',
  },
  {
    icon: Award,
    title: 'Kinh Nghiệm Chuyên Sâu',
    description:
      'Hơn 5 năm kinh nghiệm trong lĩnh vực sourcing, thương mại và xuất nhập khẩu quốc tế.',
  },
  {
    icon: ShieldCheck,
    title: 'Minh Bạch & Uy Tín',
    description:
      'Quy trình rõ ràng, minh bạch chi phí và cam kết bảo mật toàn bộ thông tin dự án.',
  },
  {
    icon: Users,
    title: 'Hỗ Trợ Chuyên Nghiệp',
    description:
      'Đội ngũ tư vấn đồng hành xuyên suốt từ tìm nguồn hàng đến vận chuyển và thủ tục XNK.',
  },
];

const stats = [
  { value: '100+', label: 'Nhà máy đối tác' },
  { value: '5+', label: 'Năm kinh nghiệm' },
  { value: '300+', label: 'Dự án hoàn thành' },
  { value: '98%', label: 'Khách hàng hài lòng' },
];

export const AboutPage: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 blur-3xl" />
      <div className="absolute right-0 top-32 h-[350px] w-[350px] translate-x-1/3 rounded-full bg-slate-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              About Zeno Global
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Đồng hành cùng doanh nghiệp
            <span className="block text-blue-600">
              kết nối nguồn cung toàn cầu
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Zeno Global cung cấp giải pháp sourcing, thương mại và xuất nhập
            khẩu toàn diện, giúp doanh nghiệp tiếp cận trực tiếp các nhà sản
            xuất uy tín, tối ưu chi phí và nâng cao hiệu quả chuỗi cung ứng.
          </p>
        </div>

        {/* Introduction block */}
        <div className="mt-16 grid items-center gap-10 rounded-3xl border border-slate-200 bg-slate-950 p-7 shadow-xl shadow-slate-200/50 md:grid-cols-2 md:p-10 lg:p-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
              Giải pháp của chúng tôi
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Đơn giản hóa quy trình tìm nguồn hàng và nhập khẩu
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Từ việc tìm kiếm nhà cung cấp, kiểm tra chất lượng, đàm phán giá
              đến logistics và thủ tục xuất nhập khẩu, Zeno Global đồng hành
              cùng doanh nghiệp trong toàn bộ quy trình.
            </p>

            <div className="mt-7 space-y-4">
              {[
                'Tìm kiếm & đánh giá nhà cung cấp',
                'Đàm phán giá và kiểm soát chất lượng',
                'Hỗ trợ vận chuyển & thủ tục xuất nhập khẩu',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500">
              Tìm hiểu dịch vụ
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition duration-300 hover:bg-white/[0.1]"
              >
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Vì sao chọn Zeno Global?
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Giá trị tạo nên sự khác biệt
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-6 text-slate-500">
              Chúng tôi tập trung vào hiệu quả, minh bạch và sự đồng hành lâu
              dài cùng doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-600">
                    <Icon className="h-6 w-6 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>

                  <div className="mt-6 h-[2px] w-8 bg-blue-600 transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};