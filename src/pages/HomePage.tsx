import React from 'react';
import { 
  Search, CheckCircle2, ShieldCheck, Truck, Users, 
  FileText, Award, Globe, ArrowRight, Calendar 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const zaloPhone = '0912345678'; // Thay SĐT Zalo của bạn tại đây

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200')` }}
        />
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
            YOUR PRODUCT.
          </h1>
          <h2 className="text-xl md:text-3xl font-extrabold text-amber-500 mt-2 tracking-wide uppercase">
            OUR SOURCING & TRADE EXPERTISE.
          </h2>
          <p className="text-slate-300 mt-4 max-w-3xl mx-auto text-sm md:text-base font-medium">
            Kết nối nguồn hàng chất lượng – Giải pháp thương mại & xuất nhập khẩu toàn diện
          </p>
          <p className="text-slate-400 text-xs md:text-sm">
            Connecting you with reliable manufacturers and complete import - export solutions.
          </p>

          {/* 4 Nút Nổi Bật Tính Năng */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-10">
            <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-lg flex items-center gap-3 text-left">
              <CheckCircle2 className="text-amber-500 shrink-0" size={20} />
              <div>
                <p className="text-xs font-bold">Nguồn hàng uy tín</p>
                <p className="text-[10px] text-slate-400">Reliable Sourcing from China</p>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-lg flex items-center gap-3 text-left">
              <Award className="text-amber-500 shrink-0" size={20} />
              <div>
                <p className="text-xs font-bold">Am hiểu sản phẩm</p>
                <p className="text-[10px] text-slate-400">Industry Expertise</p>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-lg flex items-center gap-3 text-left">
              <Users className="text-amber-500 shrink-0" size={20} />
              <div>
                <p className="text-xs font-bold">Hỗ trợ kỹ thuật</p>
                <p className="text-[10px] text-slate-400">Technical Support</p>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-lg flex items-center gap-3 text-left">
              <Truck className="text-amber-500 shrink-0" size={20} />
              <div>
                <p className="text-xs font-bold">XNK đơn giản</p>
                <p className="text-[10px] text-slate-400">Import - Export Made Simple</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/products"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-md font-bold text-xs uppercase flex items-center gap-2 transition-colors"
            >
              <span>Tìm nguồn hàng</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white hover:bg-white hover:text-slate-900 text-white px-6 py-3 rounded-md font-bold text-xs uppercase flex items-center gap-2 transition-colors"
            >
              <span>Liên hệ tư vấn</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. NGÀNH HÀNG CHÚNG TÔI CUNG CẤP */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black uppercase text-gray-900 tracking-wide">
              NGÀNH HÀNG CHÚNG TÔI CUNG CẤP
            </h2>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">
              OUR INDUSTRY PLATFORMS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* 1. Âm thanh */}
            <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400" alt="Audio" className="h-40 w-full object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-sm text-gray-900 uppercase">THIẾT BỊ ÂM THANH</h3>
                  <p className="text-[10px] text-gray-400 font-bold mb-3">PRO AUDIO</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left list-disc pl-4">
                    <li>Micro không dây</li>
                    <li>Loa, Amply, Mixer</li>
                    <li>Thiết bị hội nghị</li>
                    <li>Thiết bị sân khấu</li>
                    <li>Phụ kiện âm thanh</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Ánh sáng */}
            <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400" alt="Lighting" className="h-40 w-full object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-sm text-gray-900 uppercase">THIẾT BỊ ÁNH SÁNG</h3>
                  <p className="text-[10px] text-gray-400 font-bold mb-3">LIGHTING</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left list-disc pl-4">
                    <li>Đèn sân khấu</li>
                    <li>Đèn kiến trúc</li>
                    <li>LED, LED Film</li>
                    <li>Thiết bị điều khiển</li>
                    <li>Phụ kiện</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Thảm */}
            <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=400" alt="Flooring" className="h-40 w-full object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-sm text-gray-900 uppercase">THẢM & TRẢI SÀN</h3>
                  <p className="text-[10px] text-gray-400 font-bold mb-3">FLOORING</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left list-disc pl-4">
                    <li>Thảm văn phòng</li>
                    <li>Thảm khách sạn</li>
                    <li>Thảm sự kiện</li>
                    <li>Thảm công trình</li>
                    <li>Carpet Tile</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Gạch */}
            <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400" alt="Tiles" className="h-40 w-full object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-sm text-gray-900 uppercase">GẠCH ỐP LÁT</h3>
                  <p className="text-[10px] text-gray-400 font-bold mb-3">TILES</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left list-disc pl-4">
                    <li>Gạch porcelain</li>
                    <li>Gạch ceramic</li>
                    <li>Gạch lót nền</li>
                    <li>Gạch ốp tường</li>
                    <li>Vật liệu hoàn thiện</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Vệ sinh */}
            <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400" alt="Sanitary" className="h-40 w-full object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-sm text-gray-900 uppercase">THIẾT BỊ VỆ SINH</h3>
                  <p className="text-[10px] text-gray-400 font-bold mb-3">SANITARY WARE</p>
                  <ul className="text-xs text-gray-600 space-y-1 text-left list-disc pl-4">
                    <li>Sen vòi, vòi chậu</li>
                    <li>Bồn cầu, chậu rửa</li>
                    <li>Phụ kiện phòng tắm</li>
                    <li>Phụ kiện nhà bếp</li>
                    <li>Thiết bị vệ sinh cao cấp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GIẢI PHÁP TOÀN DIỆN (7 BƯỚC QUY TRÌNH) */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black uppercase text-gray-900">GIẢI PHÁP TOÀN DIỆN</h2>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">
              OUR END-TO-END SOLUTIONS
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-3 text-center">
            {[
              { num: '01', title: 'Tìm nguồn hàng Sourcing', icon: Search, desc: 'Tìm kiếm sản phẩm & nhà cung cấp phù hợp' },
              { num: '02', title: 'Đánh giá nhà cung cấp', icon: CheckCircle2, desc: 'Kiểm tra năng lực & uy tín nhà cung cấp' },
              { num: '03', title: 'Kiểm tra sản phẩm', icon: ShieldCheck, desc: 'Hỗ trợ kiểm tra chất lượng, thông số kỹ thuật' },
              { num: '04', title: 'Đàm phán & đặt hàng', icon: FileText, desc: 'Đàm phán giá cả, ký kết hợp đồng' },
              { num: '05', title: 'Chứng từ & thủ tục', icon: FileText, desc: 'Chuẩn bị chứng từ, hỗ trợ xuất nhập khẩu' },
              { num: '06', title: 'Vận chuyển Logistics', icon: Truck, desc: 'Vận chuyển quốc tế & giao tận nơi' },
              { num: '07', title: 'Hậu mãi & hỗ trợ', icon: Users, desc: 'Hỗ trợ sau bán hàng & giải quyết phát sinh' },
            ].map((step, idx) => (
              <div key={idx} className="p-3 bg-gray-50 rounded-lg border flex flex-col items-center">
                <span className="text-amber-500 font-extrabold text-lg">{step.num}</span>
                <step.icon size={22} className="text-blue-600 my-2" />
                <h4 className="font-bold text-xs text-gray-900 mb-1">{step.title}</h4>
                <p className="text-[10px] text-gray-500 leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* 5 Khối Thế Mạnh Bên Dưới 7 Bước */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-10">
            <div className="p-4 bg-gray-50 rounded-lg border text-center">
              <Users size={24} className="text-blue-600 mx-auto mb-2" />
              <h5 className="font-bold text-xs uppercase">AM HIỂU CHUYÊN NGÀNH</h5>
              <p className="text-[10px] text-gray-500 mt-1">Hiểu rõ sản phẩm âm thanh, ánh sáng, vật liệu cho dự án.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border text-center">
              <Globe size={24} className="text-blue-600 mx-auto mb-2" />
              <h5 className="font-bold text-xs uppercase">MẠNG LƯỚI RỘNG KHẮP</h5>
              <p className="text-[10px] text-gray-500 mt-1">Kết nối trực tiếp nhà máy uy tín tại Trung Quốc.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border text-center">
              <Award size={24} className="text-blue-600 mx-auto mb-2" />
              <h5 className="font-bold text-xs uppercase">HỖ TRỢ KỸ THUẬT</h5>
              <p className="text-[10px] text-gray-500 mt-1">Đọc thông số & tư vấn giải pháp phù hợp.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border text-center">
              <Truck size={24} className="text-blue-600 mx-auto mb-2" />
              <h5 className="font-bold text-xs uppercase">KINH NGHIỆM XNK</h5>
              <p className="text-[10px] text-gray-500 mt-1">Thông quan nhanh chóng, đầy đủ thủ tục.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border text-center">
              <ShieldCheck size={24} className="text-blue-600 mx-auto mb-2" />
              <h5 className="font-bold text-xs uppercase">UY TÍN & BẢO MẬT</h5>
              <p className="text-[10px] text-gray-500 mt-1">Bảo mật thông tin khách hàng & minh bạch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRIỂN LÃM ÂM THANH QUỐC TẾ */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black uppercase tracking-wide">TRIỂN LÃM ÂM THANH QUỐC TẾ</h2>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">
              INTERNATIONAL PRO AUDIO EXHIBITIONS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="font-bold text-amber-500 text-sm">TRIỂN LÃM QUỐC TẾ THIẾT BỊ & CÔNG NGHỆ ÂM THANH VIỆT NAM</h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">VIETNAM INTERNATIONAL PRO AUDIO EXHIBITION</p>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li>• Giới thiệu sản phẩm & công nghệ mới nhất</li>
                <li>• Kết nối trực tiếp với nhiều nhà máy - khách hàng</li>
                <li>• Trải nghiệm sản phẩm thực tế</li>
                <li>• Hội thảo chuyên ngành & đào tạo</li>
              </ul>
              <div className="flex justify-between items-center text-xs text-amber-400 font-bold border-t border-slate-700 pt-4">
                <span>HÀ NỘI | TP. HỒ CHÍ MINH</span>
                <span>Hàng năm | Annual</span>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="font-bold text-amber-500 text-sm">TRIỂN LÃM ÂM THANH CHUYÊN NGHIỆP QUỐC TẾ QUẢNG CHÂU</h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">GUANGZHOU INTERNATIONAL PRO AUDIO EXHIBITION</p>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li>• Quy tụ thương hiệu âm thanh hàng đầu</li>
                <li>• Cập nhật xu hướng & công nghệ mới</li>
                <li>• Kết nối với nhà máy & supplier chất lượng</li>
                <li>• Cơ hội hợp tác & phát triển thị trường</li>
              </ul>
              <div className="flex justify-between items-center text-xs text-amber-400 font-bold border-t border-slate-700 pt-4">
                <span>QUẢNG CHÂU, TRUNG QUỐC</span>
                <span>Hàng năm | Annual</span>
              </div>
            </div>
          </div>

          {/* Banner phụ thông báo Lịch Triển Lãm */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-300">
              Chúng tôi hỗ trợ khách hàng tham dự, kết nối nhà cung cấp và tìm kiếm sản phẩm tại các triển lãm âm thanh quốc tế.
            </p>
            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-4 py-2 rounded text-xs whitespace-nowrap flex items-center gap-1"
            >
              <Calendar size={14} />
              <span>Xem lịch triển lãm</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. DỰ ÁN TIÊU BIỂU */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black uppercase text-gray-900">DỰ ÁN TIÊU BIỂU</h2>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">FEATURED PROJECTS</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: 'Hội trường - Âm thanh & Ánh sáng', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500' },
              { title: 'Khách sạn - Thảm trải sàn', img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500' },
              { title: 'Showroom - Gạch ốp lát', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500' },
              { title: 'Nhà máy - Thiết bị âm thanh', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500' },
              { title: 'Khách sạn - Thiết bị vệ sinh', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500' },
            ].map((proj, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden text-center hover:shadow-md transition-shadow">
                <img src={proj.img} alt={proj.title} className="h-32 w-full object-cover" />
                <p className="p-2 text-xs font-semibold text-gray-800">{proj.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CON SỐ THỐNG KÊ (STATISTICS) */}
      <section className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-extrabold text-amber-500">100+</p>
            <p className="text-xs text-slate-300 mt-1">Nhà cung cấp uy tín tại Trung Quốc</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-amber-500">500+</p>
            <p className="text-xs text-slate-300 mt-1">Đơn hàng đã thực hiện thành công</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-amber-500">10+</p>
            <p className="text-xs text-slate-300 mt-1">Quốc gia đã xuất khẩu và nhập khẩu</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-amber-500">5+</p>
            <p className="text-xs text-slate-300 mt-1">Năm kinh nghiệm trong thương mại quốc tế</p>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER CUỐI TRANG (GỬI YÊU CẦU) */}
      <section className="bg-amber-500 text-slate-900 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-extrabold text-lg uppercase">BẠN ĐANG TÌM KIẾM NGUỒN HÀNG HOẶC SẢN PHẨM CỤ THỂ?</h3>
            <p className="text-xs font-medium text-slate-800 mt-1">
              Gửi yêu cầu cho chúng tôi. Zeno Global sẽ tìm kiếm và đề xuất giải pháp phù hợp nhất cho bạn.
            </p>
          </div>
          <a
            href={`https://zalo.me/${zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-md text-xs uppercase flex items-center gap-2 whitespace-nowrap transition-colors"
          >
            <span>Gửi yêu cầu ngay</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};