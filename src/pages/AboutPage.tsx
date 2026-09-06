import React from 'react';
import { ShieldCheck, Award, Users, Globe2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">Về Chúng Tôi</h1>
          <p className="text-blue-600 font-semibold text-sm uppercase mt-1">ABOUT ZENO GLOBAL</p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Zeno Global là đơn vị chuyên cung cấp giải pháp Sourcing, thương mại và xuất nhập khẩu toàn diện. Chúng tôi giúp doanh nghiệp tối ưu hóa chi phí mua hàng bằng cách kết nối trực tiếp tới các nhà máy sản xuất uy tín tại Trung Quốc và quốc tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="p-6 bg-gray-50 rounded-xl text-center border">
            <Globe2 className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Mạng Lưới Rộng Khen</h3>
            <p className="text-xs text-gray-600">Kết nối trực tiếp 100+ nhà sản xuất chất lượng cao.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl text-center border">
            <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Kinh Nghiệm Chuyên Sâu</h3>
            <p className="text-xs text-gray-600">Hơn 5 năm hoạt động trong ngành thương mại quốc tế.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl text-center border">
            <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Bảo Mật & Uy Tín</h3>
            <p className="text-xs text-gray-600">Cam kết bảo mật thông tin dự án & minh bạch giá cả.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl text-center border">
            <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Hỗ Trợ 24/7</h3>
            <p className="text-xs text-gray-600">Đội ngũ tư vấn kỹ thuật và thủ tục XNK nhiệt tình.</p>
          </div>
        </div>
      </div>
    </div>
  );
};