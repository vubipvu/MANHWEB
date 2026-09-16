import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Globe2,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const zaloPhone = '0912345678';
  const phoneDisplay = '0912 345 678';
  const email = 'info@zenoglobal.vn';

  const contactItems = [
    {
      icon: Phone,
      label: 'Hotline / Zalo',
      value: phoneDisplay,
      href: `tel:${zaloPhone}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: MapPin,
      label: 'Văn phòng',
      value: 'Hà Nội, Việt Nam',
      href: undefined,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 blur-3xl" />
      <div className="absolute right-0 top-40 h-[320px] w-[320px] translate-x-1/3 rounded-full bg-slate-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              Contact Us
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Kết nối cùng
            <span className="text-blue-600"> Zeno Global</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Liên hệ với đội ngũ Zeno Global để được tư vấn về sourcing,
            tìm nguồn hàng, báo giá và giải pháp xuất nhập khẩu phù hợp
            với nhu cầu doanh nghiệp.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Thông tin liên hệ
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                Chúng tôi luôn sẵn sàng hỗ trợ
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Hãy liên hệ với chúng tôi qua Hotline, Zalo hoặc Email.
                Đội ngũ Zeno Global sẽ tiếp nhận yêu cầu và hỗ trợ bạn trong
                thời gian sớm nhất.
              </p>
            </div>

            {/* Contact items */}
            <div className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/40">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        size={18}
                        className="ml-auto text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                      />
                    )}
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Working time */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <Clock3
                size={20}
                className="mt-0.5 flex-shrink-0 text-blue-600"
              />

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Thời gian hỗ trợ
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Thứ 2 – Thứ 7 · 08:00 – 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-xl shadow-slate-200/60 sm:p-9 lg:p-10">
            {/* Decoration */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <Globe2 size={27} className="text-blue-400" />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                Zeno Global Trading
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                Bắt đầu tìm kiếm nguồn hàng phù hợp cho doanh nghiệp
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                Gửi yêu cầu sản phẩm, số lượng và nhu cầu của bạn.
                Đội ngũ Zeno Global sẽ hỗ trợ tìm kiếm nhà cung cấp,
                kiểm tra thông tin và tư vấn phương án phù hợp.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {[
                  'Tư vấn sourcing theo nhu cầu',
                  'Hỗ trợ tìm và đánh giá nhà cung cấp',
                  'Báo giá minh bạch, rõ ràng',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="flex-shrink-0 text-blue-400"
                    />
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-10">
                <a
                  href={`https://zalo.me/${zaloPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-500"
                >
                  <MessageCircle size={20} />

                  <span>Chat Zalo nhận tư vấn</span>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <p className="mt-4 text-center text-xs text-slate-500">
                  Phản hồi nhanh trong thời gian làm việc
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:grid-cols-3">
          <div className="border-b border-slate-200 p-5 text-center sm:border-b-0 sm:border-r">
            <p className="font-bold text-slate-900">Phản hồi nhanh</p>
            <p className="mt-1 text-xs text-slate-500">
              Tiếp nhận yêu cầu trực tiếp
            </p>
          </div>

          <div className="border-b border-slate-200 p-5 text-center sm:border-b-0 sm:border-r">
            <p className="font-bold text-slate-900">Tư vấn chuyên nghiệp</p>
            <p className="mt-1 text-xs text-slate-500">
              Giải pháp theo từng nhu cầu
            </p>
          </div>

          <div className="p-5 text-center">
            <p className="font-bold text-slate-900">Bảo mật thông tin</p>
            <p className="mt-1 text-xs text-slate-500">
              Bảo vệ thông tin dự án
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};