import React, { useState } from 'react';
import { Search, Filter, MessageCircle, CheckCircle2 } from 'lucide-react';

// Danh mục chuẩn âm thanh ZENO GLOBAL
const categories = [
  { id: 'all', name: 'Tất cả sản phẩm' },
  { id: 'cuc-day', name: 'Cục đẩy công suất' },
  { id: 'mixer', name: 'Mixer - Vang số' },
  { id: 'micro', name: 'Micro (Có/Không dây)' },
  { id: 'loa', name: 'Hệ thống Loa' },
  { id: 'quan-ly-nguon', name: 'Quản lý nguồn' },
  { id: 'phu-kien', name: 'Phụ kiện âm thanh' },
];

const productsData = [
  {
    id: 1,
    category: 'loa',
    name: 'Hệ Thống Loa Line Array Hội Trường Sân Khấu',
    code: 'ZENO-LA-12',
    desc: 'Loa line array công suất lớn, độ phủ âm rộng, độ méo tiếng cực thấp dùng cho hội trường và sự kiện ngoài trời.',
    image: '/images/home/ROB1146.JPG',
    specs: ['Công suất: 800W - 1600W RMS', 'Đáp tuyến: 55Hz - 20kHz', 'Dòng: Sân khấu / Hội trường'],
  },
  {
    id: 2,
    category: 'cuc-day',
    name: 'Cục Đẩy Công Suất 4 Kênh Chuyên Nghiệp',
    code: 'ZENO-PWR-413',
    desc: 'Main công suất mạch Class TD/D hiệu suất cao, nguồn xung ổn áp tải tốt các dòng sub kép và loa array.',
    image: '/images/home/1.jpg',
    specs: ['Công suất: 4 x 1300W (8Ω)', 'Mạch: Class TD / Công nghệ xung', 'Bảo vệ: Chống ngắn mạch, quá tải'],
  },
  {
    id: 3,
    category: 'micro',
    name: 'Micro Không Dây Chuyên Nghiệp (Hỗ Trợ Hợp Quy)',
    code: 'ZENO-MIC-U800',
    desc: 'Micro sóng UHF bắt xa tới 200m, chống hú tốt, hỗ trợ kiểm định đo kiểm và cấp chứng nhận hợp quy tần số.',
    image: '/images/home/ADE1396.JPG',
    specs: ['Dải tần: UHF chuẩn hợp quy', 'Số kênh: 200 CH độc lập', 'Tính năng: Tự ngắt, dò sóng sạch'],
  },
  {
    id: 4,
    category: 'mixer',
    name: 'Vang Số / DSP Xử Lý Tín Hiệu Số Cao Cấp',
    code: 'ZENO-DSP-900',
    desc: 'Bộ xử lý tín hiệu kỹ thuật số đa kênh, phần mềm căn chỉnh chi tiết qua máy tính, triệt tiêu phản hồi âm 100%.',
    image: '/images/home/1.jpg',
    specs: ['Xử lý: DSP 32-bit / 48kHz', 'Ngõ vào: Optical, Bluetooth, AUX', 'Ngõ ra: 6 đường out độc lập'],
  },
  {
    id: 5,
    category: 'quan-ly-nguon',
    name: 'Bộ Quản Lý Nguồn Điện Âm Thanh 8 Cổng',
    code: 'ZENO-PWR-SEQ8',
    desc: 'Bảo vệ toàn bộ thiết bị âm thanh, đóng ngắt tuần tự từng cổng tránh sốc điện làm cháy loa hay amply.',
    image: '/images/home/ROB1146.JPG',
    specs: ['Số cổng: 8 ổ cắm sau + 2 trước', 'Màn hình: Hiển thị điện áp V/A', 'Tính năng: Cầu dao Aptomat tự ngắt'],
  },
  {
    id: 6,
    category: 'phu-kien',
    name: 'Tủ Rack Âm Thanh & Phụ Kiện Kết Nối Dự Án',
    code: 'ZENO-ACC-RACK12U',
    desc: 'Tủ âm thanh chuyên dụng có bánh xe, khóa an toàn kèm jack Canon/Neutrik chuẩn kỹ thuật.',
    image: '/images/home/ADE1396.JPG',
    specs: ['Kích thước: 12U / 16U có ngăn mixer', 'Chất liệu: Gỗ dán phủ Melamine, khung nhôm', 'Tiêu chuẩn: Chống va đập'],
  },
];

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const zaloPhone = '0332933226';

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
            Danh Mục Thiết Bị Âm Thanh
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Tra cứu thiết bị và nhận báo giá trực tiếp qua Hotline/Zalo: <strong>0332 933 226</strong>
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Tìm theo tên hoặc mã SP..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        <Filter size={16} className="text-slate-500 shrink-0 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-slate-950/80 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded">
                    {product.code}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-slate-950 text-base mb-2 hover:text-blue-600 cursor-pointer">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                    {product.desc}
                  </p>

                  <div className="space-y-1 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs text-slate-700 mb-4">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-blue-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Zalo Button */}
              <div className="p-4 pt-0">
                <a
                  href={`https://zalo.me/${zaloPhone}?text=Tôi%20muốn%20nhận%20báo%20giá%20thiết%20bị:%20${encodeURIComponent(product.name)}%20(${product.code})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-bold text-xs transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Báo giá qua Zalo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
          <p className="text-slate-500 text-sm">Không tìm thấy thiết bị âm thanh phù hợp.</p>
        </div>
      )}
    </section>
  );
};