import React from 'react';

const mockNews = [
  {
    id: 1,
    title: 'Xu hướng thiết bị âm thanh hội trường & sân khấu 2026',
    date: '02/09/2026',
    desc: 'Cập nhật những công nghệ loa và amply mới nhất từ các triển lãm quốc tế.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500'
  },
  {
    id: 2,
    title: 'Kinh nghiệm kiểm tra chất lượng nguồn hàng Sourcing tại nhà máy',
    date: '28/08/2026',
    desc: 'Các tiêu chí quan trọng giúp doanh nghiệp đánh giá đúng năng lực nhà cung cấp.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500'
  }
];

export const NewsPage: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 uppercase">Tin Tức & Thị Trường</h1>
          <p className="text-blue-600 text-sm font-semibold uppercase mt-1">LATEST NEWS & INSIGHTS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockNews.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border overflow-hidden shadow-sm flex flex-col md:flex-row">
              <img src={item.image} alt={item.title} className="w-full md:w-48 h-48 object-cover" />
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-gray-400">{item.date}</span>
                  <h3 className="font-bold text-gray-900 text-base mt-1 hover:text-blue-600 cursor-pointer">{item.title}</h3>
                  <p className="text-xs text-gray-600 mt-2">{item.desc}</p>
                </div>
                <button className="text-blue-600 text-xs font-bold text-left mt-4 hover:underline">Xem chi tiết →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};