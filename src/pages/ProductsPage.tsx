import React from 'react';
import { PackageSearch, Search, CheckCircle2 } from 'lucide-react';
import { ProductCatalog } from '../components/ProductCatalog';

export const ProductsPage: React.FC = () => {
  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50">
        {/* Background decoration */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-slate-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <PackageSearch size={15} className="text-blue-600" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                Product Sourcing
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Danh mục
              <span className="text-blue-600"> sản phẩm</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Khám phá các nhóm sản phẩm Zeno Global đang cung cấp và hỗ trợ
              tìm nguồn trực tiếp từ hệ thống nhà máy, nhà sản xuất uy tín.
            </p>

            {/* Trust points */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 size={17} className="text-blue-600" />
                Nguồn hàng trực tiếp
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 size={17} className="text-blue-600" />
                Kiểm tra nhà cung cấp
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 size={17} className="text-blue-600" />
                Hỗ trợ xuất nhập khẩu
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT CATALOG ================= */}
      <section className="relative py-14 sm:py-16 lg:py-20">
        <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />

        <div className="relative">
          <ProductCatalog />
        </div>
      </section>

      {/* ================= SOURCING CTA ================= */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-400">
                <Search size={21} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Không tìm thấy sản phẩm bạn cần?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Gửi thông tin sản phẩm, hình ảnh hoặc thông số kỹ thuật.
                Zeno Global sẽ hỗ trợ tìm kiếm nhà máy và nguồn hàng phù hợp
                với yêu cầu của doanh nghiệp.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-500"
            >
              Gửi yêu cầu sourcing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};