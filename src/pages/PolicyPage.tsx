import React, { useState } from 'react';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Radio,
  Lock,
  FileText,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Headphones,
  Sliders,
  ChevronRight,
  FileCheck2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PolicyPage: React.FC = () => {
  const zaloPhone = '0332933226';
  const phoneDisplay = '0332 933 226';
  const email = 'zenoglobalvietnam@gmail.com';

  const [activeTab, setActiveTab] = useState('bao-hanh');

  const policySections = [
    {
      id: 'bao-hanh',
      title: 'Chính sách bảo hành',
      icon: ShieldCheck,
      badge: 'Bảo hành 12 - 24 tháng',
    },
    {
      id: 'doi-tra',
      title: 'Chính sách đổi trả',
      icon: RotateCcw,
      badge: 'Đổi mới trong 7 - 30 ngày',
    },
    {
      id: 'van-chuyen',
      title: 'Vận chuyển & Giao nhận',
      icon: Truck,
      badge: 'Toàn quốc & Công trình',
    },
    {
      id: 'hop-quy',
      title: 'Đo kiểm & Hợp quy micro',
      icon: Radio,
      badge: 'Chuẩn tần số Bộ TTTT',
    },
    {
      id: 'bao-mat',
      title: 'Bảo mật thông tin',
      icon: Lock,
      badge: 'Cam kết bảo mật dự án',
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/home/ROB1146.JPG')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/70 to-slate-950" />
        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <FileText size={15} className="text-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
              Chính Sách &amp; Cam Kết Dịch Vụ
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Chính sách bán hàng &amp;
            <span className="block text-amber-400">
              Quy chuẩn bảo hành thiết bị
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            Zeno Global cam kết minh bạch chất lượng thiết bị âm thanh, đảm bảo quyền lợi tối đa cho đối tác, đại lý và khách hàng công trình trên toàn quốc.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-400" /> Thiết bị chính hãng
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-400" /> Kích hoạt bảo hành điện tử
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-400" /> Hỗ trợ kỹ thuật 24/7
            </span>
          </div>
        </div>
      </section>

      {/* ================= NAVIGATION TABS & CONTENT ================= */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Policy Quick Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none border-b border-slate-200 mb-10">
            {policySections.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-950 text-amber-400 shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-amber-400' : 'text-slate-500'} />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            {/* Left Content Column */}
            <div className="space-y-12">
              {/* 1. CHÍNH SÁCH BẢO HÀNH */}
              {(activeTab === 'bao-hanh' || activeTab === 'all') && (
                <div id="bao-hanh" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <ShieldCheck size={26} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                        Bảo Hành Chính Hãng
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                        1. Quy định &amp; Thời hạn bảo hành
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                    <p>
                      Mọi thiết bị âm thanh do <strong>Zeno Global</strong> cung cấp (Cục đẩy công suất, Mixer - Vang số, Micro, Loa, Quản lý nguồn) đều được bảo hành theo đúng tiêu chuẩn nhà sản xuất:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 pt-2">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <strong className="block text-slate-900">Cục đẩy &amp; Vang số:</strong>
                        <span className="text-xs text-slate-500">Bảo hành 12 – 24 tháng theo số serial hoặc tem điện tử.</span>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <strong className="block text-slate-900">Micro không dây &amp; Loa:</strong>
                        <span className="text-xs text-slate-500">Bảo hành 12 tháng, đổi mới linh kiện chính hãng khi có lỗi kỹ thuật.</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-slate-900 pt-3 text-base">Điều kiện được bảo hành miễn phí:</h3>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span>Sản phẩm còn trong thời hạn bảo hành tính từ ngày bàn giao hoặc kích hoạt điện tử.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span>Tem bảo hành, mã vạch, số serial trên thân máy còn nguyên vẹn, không bị cào sửa hay rách vỡ.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span>Hư hỏng được xác định do lỗi linh kiện hoặc lỗi sản xuất từ nhà máy.</span>
                      </li>
                    </ul>

                    <h3 className="font-bold text-slate-900 pt-3 text-base">Các trường hợp từ chối bảo hành miễn phí:</h3>
                    <div className="rounded-xl bg-amber-50/80 border border-amber-200 p-4 text-xs leading-6 text-amber-900">
                      <p className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Hư hỏng do sử dụng sai điện áp (chập điện, sét đánh), đấu nối sai trở kháng làm cháy củ loa/sò công suất do vận hành quá tải công suất trong thời gian dài.</span>
                      </p>
                      <p className="flex items-start gap-2 mt-2">
                        <AlertCircle size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Thiết bị bị vào nước, rơi vỡ móp méo, hoặc đã tự ý tháo mở sửa chữa tại các cơ sở không được Zeno Global ủy quyền.</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. CHÍNH SÁCH ĐỔI TRẢ */}
              {(activeTab === 'doi-tra' || activeTab === 'all') && (
                <div id="doi-tra" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                      <RotateCcw size={26} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                        Đổi Mới Thiết Bị
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                        2. Chính sách đổi trả &amp; Hoàn tiền
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                    <p>
                      Nhằm đảm bảo sự hài lòng tuyệt đối khi mua sắm và lắp đặt hệ thống âm thanh, Zeno Global áp dụng chính sách đổi mới:
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <strong className="text-slate-900 text-sm">Đổi mới 1 - 1 trong vòng 7 ngày đầu:</strong>
                          <p className="text-xs text-slate-500 mt-0.5">Áp dụng đối với sản phẩm phát sinh lỗi kỹ thuật do nhà sản xuất (được kỹ thuật viên kiểm tra xác nhận).</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <strong className="text-slate-900 text-sm">Điều kiện sản phẩm đổi trả:</strong>
                          <p className="text-xs text-slate-500 mt-0.5">Sản phẩm còn đầy đủ hộp, xốp chống sốc, phụ kiện đi kèm (dây nguồn, sách hướng dẫn, anten micro) và không trầy xước ngoại quan.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <strong className="text-slate-900 text-sm">Chi phí vận chuyển đổi hàng:</strong>
                          <p className="text-xs text-slate-500 mt-0.5">Trường hợp lỗi từ nhà sản xuất, Zeno Global chịu 100% chi phí vận chuyển thu hồi và gửi sản phẩm mới.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. VẬN CHUYỂN & GIAO NHẬN */}
              {(activeTab === 'van-chuyen' || activeTab === 'all') && (
                <div id="van-chuyen" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <Truck size={26} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                        Giao Hàng &amp; Nghiệm Thu
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                        3. Chính sách vận chuyển &amp; Giao nhận
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                    <p>
                      Zeno Global cung cấp dịch vụ giao hàng linh hoạt trên phạm vi toàn quốc từ 2 cơ sở tại <strong>Hà Nội</strong> và <strong>Hà Tĩnh</strong>:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-slate-200 p-4">
                        <span className="text-xs font-bold uppercase text-blue-600">Giao hàng dự án / Công trình</span>
                        <p className="text-xs text-slate-600 mt-1">Hỗ trợ xe tải chuyên dụng chuyển tận công trình, có kỹ thuật viên đi kèm bàn giao và hướng dẫn vận hành hệ thống.</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 p-4">
                        <span className="text-xs font-bold uppercase text-emerald-600">Giao hàng COD / Chành xe</span>
                        <p className="text-xs text-slate-600 mt-1">Đóng kiện gỗ/xốp chống sốc tiêu chuẩn, gửi qua Viettel Post hoặc chành xe quen của đại lý trong ngày.</p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs leading-6 text-slate-700">
                      <strong className="block text-slate-900 mb-1">Quyền đồng kiểm khi nhận hàng:</strong>
                      Khách hàng được mở kiện kiểm tra nguyên trạng số lượng, đúng model và kiểm tra tem niêm phong trước khi ký nhận hoặc thanh toán COD.
                    </div>
                  </div>
                </div>
              )}

              {/* 4. ĐO KIỂM & HỢP QUY MICRO */}
              {(activeTab === 'hop-quy' || activeTab === 'all') && (
                <div id="hop-quy" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                      <Radio size={26} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600">
                        Quy Chuẩn Kỹ Thuật
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                        4. Dịch vụ đo kiểm &amp; Hợp quy micro không dây
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                    <p>
                      Micro không dây là thiết bị phát sóng vô tuyến chịu sự quản lý chặt chẽ về dải tần số. Zeno Global cung cấp dịch vụ tư vấn và đồng hành pháp lý chuyên ngành:
                    </p>

                    <div className="space-y-2.5">
                      <div className="flex items-start gap-3 text-xs sm:text-sm">
                        <FileCheck2 size={17} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Đo kiểm chỉ tiêu kỹ thuật:</strong> Đo phát xạ dải tần, mức công suất phát bức xạ tại phòng đo kiểm được chỉ định.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm">
                        <FileCheck2 size={17} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Chứng nhận hợp quy (Type Approval):</strong> Hoàn thiện hồ sơ nộp Cục Viễn thông để được cấp giấy chứng nhận hợp chuẩn - hợp quy.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm">
                        <FileCheck2 size={17} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Tư vấn công bố hợp quy:</strong> Hướng dẫn in tem ICT hợp quy đúng quy định khi đưa micro ra lưu thông trên thị trường.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. CHÍNH SÁCH BẢO MẬT */}
              {(activeTab === 'bao-mat' || activeTab === 'all') && (
                <div id="bao-mat" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                      <Lock size={26} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Bảo Mật Dự Án
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                        5. Chính sách bảo mật thông tin
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                    <p>
                      Zeno Global cam kết bảo mật tuyệt đối các thông tin do quý khách hàng và đối tác cung cấp:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                        <span><strong>Bảo mật hồ sơ kỹ thuật &amp; bản vẽ:</strong> Thiết kế âm học, cấu hình loa dự án không được tiết lộ cho bên thứ ba khi chưa có sự đồng ý.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                        <span><strong>Bảo mật chính sách giá đại lý:</strong> Bảng báo giá chiết khấu, hợp đồng xuất nhập khẩu được quản lý an toàn.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                        <span><strong>Mục đích thu thập:</strong> Chỉ phục vụ công tác giao hàng, kích hoạt bảo hành thiết bị và hỗ trợ kỹ thuật sau bán hàng.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar: Contact & Fast Support */}
            <div className="space-y-6">
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7 shadow-xs">
                <h3 className="text-base font-bold text-slate-950">
                  Trung tâm hỗ trợ kỹ thuật
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Cần kích hoạt bảo hành, khiếu nại chất lượng thiết bị hoặc tư vấn hồ sơ hợp quy micro:
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={`tel:${zaloPhone}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-blue-300 hover:bg-blue-50/50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <Phone size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Hotline Kỹ Thuật
                      </p>
                      <p className="truncate text-sm font-bold text-slate-900">
                        {phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`https://zalo.me/${zaloPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-blue-600 p-3.5 text-white transition hover:bg-blue-500"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/15">
                      <MessageCircle size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-medium text-blue-100">
                        Tiếp nhận 24/7
                      </p>
                      <p className="truncate text-sm font-bold">
                        Chat Zalo Phòng Kỹ Thuật
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5 text-xs text-slate-500 space-y-2">
                  <p>📍 <strong>Cơ sở 1:</strong> Số 1 Trần Thủ Độ, Q. Hoàng Mai, Hà Nội</p>
                  <p>📍 <strong>Cơ sở 2:</strong> 56 La Sơn Phu Tử, P. Thành Sen, Hà Tĩnh</p>
                  <p>✉️ <strong>Email:</strong> {email}</p>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-xs font-bold text-white transition hover:bg-slate-800"
                >
                  <span>Gửi biểu mẫu liên hệ</span>
                  <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-amber-400 px-4 py-9 text-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:px-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-black uppercase sm:text-xl">
              Cần xác thực bảo hành hoặc hỗ trợ đo kiểm micro ngay?
            </h2>
            <p className="mt-1 text-sm text-slate-900">
              Đội ngũ kỹ sư âm thanh của Zeno Global sẵn sàng giải đáp mọi thắc mắc của bạn qua Hotline/Zalo.
            </p>
          </div>

          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            <MessageCircle size={18} />
            <span>Kết nối Hotline: {phoneDisplay}</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};