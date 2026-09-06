import React, { useState } from 'react';
import { Search, Filter, MessageCircle, CheckCircle2 } from 'lucide-react';

// Dữ liệu danh mục và sản phẩm mẫu
const categories = [
  { id: 'all', name: 'Tất cả sản phẩm' },
  { id: 'audio', name: 'Thiết bị âm thanh' },
  { id: 'lighting', name: 'Thiết bị ánh sáng' },
  { id: 'flooring', name: 'Thảm & Trải sàn' },
  { id: 'tiles', name: 'Gạch ốp lát' },
  { id: 'sanitary', name: 'Thiết bị vệ sinh' },
];

const productsData = [
  {
    id: 1,
    category: 'audio',
    name: 'Loa Array Hội Trường Chuyên Nghiệp',
    code: 'AUDIO-AR-01',
    desc: 'Công suất lớn, âm thanh trong trẻo thích hợp cho hội trường và sân khấu sự kiện lớn.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500',
    specs: ['Công suất: 1200W', 'Tần số: 45Hz - 20kHz', 'Xuất xứ: Trung Quốc (Sourcing)']
  },
  {
    id: 2,
    category: 'lighting',
    name: 'Đèn Moving Head Sân Khấu LED',
    code: 'LIGHT-MV-02',
    desc: 'Đèn hiệu ứng ánh sáng nhiều màu sắc, điều khiển qua bàn DMX chuyên nghiệp.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500',
    specs: ['Công suất LED: 300W', 'Góc quay: Pan 540° / Tilt 270°', 'Độ bền: 50.000h']
  },
  {
    id: 3,
    category: 'flooring',
    name: 'Thảm Trải Sàn Văn Phòng Khách Sạn',
    code: 'FLOOR-CP-03',
    desc: 'Thảm cuộn/thảm tấm cao cấp, chống cháy nhẹ, cách âm và chống mài mòn tốt.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500',
    specs: ['Chất liệu: Nylon / PP', 'Độ dày: 6mm - 10mm', 'Quy cách: Dạng tấm 50x50cm']
  },
  {
    id: 4,
    category: 'tiles',
    name: 'Gạch Porcelain Khổ Lớn 80x80',
    code: 'TILE-PC-04',
    desc: 'Gạch bóng kính/mờ vân đá tự nhiên, chịu lực cao dùng cho Showroom và sảnh lớn.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500',
    specs: ['Kích thước: 80x80 cm / 60x120 cm', 'Bề mặt: Men bóng / Men mờ', 'Hút nước: < 0.5%']
  },
  {
    id: 5,
    category: 'sanitary',
    name: 'Bộ Sen Cây Tắm Đứng Thông Minh',
    code: 'SANI-SC-05',
    desc: 'Thiết kế hiện đại hiển thị nhiệt độ, chất liệu đồng thau mạ PVD chống bám bẩn.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500',
    specs: ['Chất liệu: Đồng thau sơn tĩnh điện', 'Màu sắc: Đen xám / Vàng PVD', 'Bảo hành: 3 năm']
  }
];

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const zaloPhone = '0912345678';

  // Lọc sản phẩm theo danh mục và từ khóa tìm kiếm
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Tiêu đề & Thanh tìm kiếm */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 uppercase">Danh Mục Sản Phẩm & Nguồn Hàng</h1>
          <p className="text-xs text-gray-500 mt-1">Tìm kiếm và gửi yêu cầu báo giá trực tiếp qua Zalo</p>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Tìm theo tên hoặc mã SP..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Filter danh mục */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        <Filter size={16} className="text-gray-500 shrink-0 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white border text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Danh sách sản phẩm dạng Lưới (Grid) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {product.code}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-base mb-2 hover:text-blue-600 cursor-pointer">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 line-clamp-2">{product.desc}</p>

                  <div className="space-y-1 bg-gray-50 p-2.5 rounded-lg border text-xs text-gray-700 mb-4">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-blue-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nút gửi Zalo báo giá */}
              <div className="p-4 pt-0">
                <a
                  href={`https://zalo.me/${zaloPhone}?text=Tôi%20muốn%20nhận%20báo%20giá%20sản%20phẩm:%20${encodeURIComponent(product.name)}%20(${product.code})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-bold text-xs transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Yêu cầu báo giá qua Zalo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border">
          <p className="text-gray-500 text-sm">Không tìm thấy sản phẩm phù hợp.</p>
        </div>
      )}
    </section>
  );
};