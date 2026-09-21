import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  Headphones,
  Speaker,
  Wrench,
  ShieldCheck,
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

  const benefits = [
    {
      icon: Speaker,
      title: 'Tư vấn chọn loa',
      desc: 'Theo nhu cầu, diện tích và ngân sách',
    },
    {
      icon: Wrench,
      title: 'Hỗ trợ kỹ thuật',
      desc: 'Cấu hình hệ thống và thông số thiết bị',
    },
    {
      icon: ShieldCheck,
      title: 'Thông tin rõ ràng',
      desc: 'Minh bạch sản phẩm và phương án đề xuất',
    },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />

        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <Headphones size={15} className="text-amber-400" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Contact Zeno Global
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Liên hệ tư vấn
            <span className="block text-amber-400">
              giải pháp âm thanh
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Liên hệ Zeno Global để được tư vấn loa, cấu hình hệ thống âm thanh
            và lựa chọn thiết bị phù hợp với nhu cầu sử dụng thực tế.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Hội trường · Sân khấu · Sự kiện · Showroom · Công trình
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-amber-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* ================= LEFT ================= */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                  Thông tin liên hệ
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                  Chúng tôi luôn sẵn sàng hỗ trợ
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  Gửi thông tin về nhu cầu sử dụng, không gian, sản phẩm hoặc
                  ngân sách dự kiến. Đội ngũ Zeno Global sẽ hỗ trợ tư vấn phương
                  án phù hợp trong thời gian sớm nhất.
                </p>
              </div>

              {/* Contact items */}
              <div className="mt-8 space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/40">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-950 text-amber-400 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
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
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <Clock3 size={19} />
                </div>

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

            {/* ================= RIGHT ================= */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-xl shadow-slate-200/60 sm:p-9 lg:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]">
                  <Headphones size={27} className="text-amber-400" />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                  Professional Audio Support
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  Chưa biết nên chọn hệ thống loa nào?
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  Hãy gửi cho chúng tôi thông tin về diện tích, mục đích sử dụng,
                  mức đầu tư hoặc sản phẩm bạn đang quan tâm. Đội ngũ Zeno Global
                  sẽ hỗ trợ đề xuất cấu hình phù hợp.
                </p>

                {/* Benefits */}
                <div className="mt-8 space-y-4">
                  {[
                    'Tư vấn loa theo diện tích và nhu cầu',
                    'Hỗ trợ lựa chọn cấu hình thiết bị',
                    'Tư vấn sản phẩm và thông số kỹ thuật',
                    'Hỗ trợ nguồn hàng & logistics khi cần',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
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

          {/* ================= SERVICE BENEFITS ================= */}
          <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`p-6 text-center ${
                    index !== benefits.length - 1
                      ? 'border-b border-slate-200 sm:border-b-0 sm:border-r'
                      : ''
                  }`}
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Icon size={19} />
                  </div>

                  <p className="mt-3 font-bold text-slate-900">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= QUICK CTA ================= */}
      <section className="bg-amber-400 px-4 py-9 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:px-2 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-black uppercase sm:text-xl">
              Cần báo giá hoặc tư vấn cấu hình âm thanh?
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-800">
              Gửi hình ảnh, thông số hoặc nhu cầu của bạn qua Zalo để được hỗ
              trợ nhanh hơn.
            </p>
          </div>

          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            <MessageCircle size={18} />

            Gửi yêu cầu ngay

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </section>
    </main>
  );
};