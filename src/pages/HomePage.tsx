import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Volume2,
  Speaker,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
  Sliders,
  Mic,
  Disc3,
  Cable,
  Radio,
  Ship,
  Globe2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Cục đẩy công suất',
    label: 'CÔNG SUẤT / MẠCH CLASS TD-D',
    description: 'Nguồn xung ổn áp, tải ổn định hệ thống sub kép và line array lớn.',
    image: '/images/home/1.jpg',
  },
  {
    title: 'Mixer - Vang số',
    label: 'DSP XỬ LÝ / CHỐNG HÚ',
    description: 'Tinh chỉnh âm sắc kỹ thuật số, chống dội và triệt tiêu hú rít hoàn toàn.',
    image: '/images/home/ROB1101.JPG',
  },
  {
    title: 'Micro chuyên nghiệp',
    label: 'UHF / CHUẨN HỢP QUY TẦN SỐ',
    description: 'Bắt sóng xa, độ nhạy cao. Hỗ trợ đo kiểm & cấp chứng nhận hợp quy.',
    image: '/images/home/ADE1396.JPG',
  },
  {
    title: 'Hệ thống Loa',
    label: 'LINE ARRAY / SUBWOOFER / FULL',
    description: 'Độ phủ âm đồng đều, nội lực mạnh mẽ cho sân khấu & hội trường.',
    image: '/images/home/ROB1146.JPG',
  },
  {
    title: 'Quản lý nguồn',
    label: 'BẢO VỆ NGUỒN / ĐÓNG NGẮT TUẦN TỰ',
    description: 'Tránh sốc điện, bảo vệ an toàn tuyệt đối cho toàn bộ chuỗi thiết bị.',
    image: '/images/home/ROB1142.JPG',
  },
  {
    title: 'Phụ kiện âm thanh',
    label: 'TỦ RACK / DÂY JACK / ĐẤU NỐI',
    description: 'Dây jack tín hiệu chuẩn, pat treo array và tủ thiết bị chuyên dụng.',
    image: '/images/home/showroom.jpg',
  },
];

const applications = [
  {
    title: 'Sân khấu & Sự kiện',
    heading: 'Để mọi vị trí đều là\nhàng ghế đầu.',
    description:
      'Hệ thống Line Array công suất thực phối ghép cùng Subwoofer uy lực. Cấu hình tính toán chuẩn xác theo diện tích và độ phủ ngoài trời lẫn trong nhà.',
    image: '/images/home/1.jpg',
    tags: ['Line array', 'Cục đẩy công suất lớn', 'Micro UHF', 'Xử lý DSP'],
  },
  {
    title: 'Hội trường & Hội nghị',
    heading: 'Từng lời nói.\nĐều được lắng nghe rõ nét.',
    description:
      'Đặc biệt chú trọng độ rõ của giọng nói, dải tần trung thực, micro chống hú rít và phủ đều toàn bộ khán phòng không góc chết.',
    image: '/images/home/ROB1146.JPG',
    tags: ['Rõ giọng nói', 'Vang số cắt hú', 'Độ phủ đồng đều', 'Quản lý nguồn'],
  },
  {
    title: 'Đo kiểm & Hợp quy Micro',
    heading: 'Đạt chuẩn kỹ thuật.\nHợp pháp lưu hành.',
    description:
      'Tư vấn và thực hiện thủ tục đo kiểm, chứng nhận hợp chuẩn - hợp quy tần số vô tuyến cho thiết bị micro không dây theo quy định pháp luật.',
    image: '/images/home/ADE1396.JPG',
    tags: ['Chuẩn tần số', 'Đo kiểm chỉ tiêu', 'Chứng nhận hợp quy', 'Hồ sơ pháp lý'],
  },
  {
    title: 'Sourcing & Xuất nhập khẩu',
    heading: 'Kết nối tận xưởng.\nNhập khẩu chính ngạch.',
    description:
      'Kinh nghiệm sourcing thiết bị Pro Audio từ các tổ hợp sản xuất hàng đầu, kết nối triển lãm demo quốc tế và tối ưu thủ tục hải quan.',
    image: '/images/home/showroom.jpg',
    tags: ['Logistics Pro Audio', 'Triển lãm Expo', 'Hải quan chính ngạch', 'Nhà máy uy tín'],
  },
];

const gallery = [
  { title: 'Sân khấu biểu diễn đỉnh cao', type: 'SÂN KHẤU', image: '/images/home/1.jpg' },
  { title: 'Triển lãm Pro Audio quốc tế', type: 'EXPO DEMO', image: '/images/home/ADE1396.JPG' },
  { title: 'Kỹ thuật căn chỉnh tín hiệu', type: 'VANG SỐ / DSP', image: '/images/home/ROB1101.JPG' },
  { title: 'Linh kiện & củ loa cao cấp', type: 'CỦ BASS / TREBLE', image: '/images/home/ROB1142.JPG' },
  { title: 'Module Line Array treo', type: 'LINE ARRAY', image: '/images/home/ROB1146.JPG' },
  { title: 'Không gian trải nghiệm âm thanh', type: 'SHOWROOM', image: '/images/home/showroom.jpg' },
];

function AudioImage({
  src,
  alt,
  className = '',
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  return (
    <div className={`ah-image ${className}`}>
      <div className="ah-image-fallback" aria-hidden="true">
        <Speaker size={72} strokeWidth={0.6} />
        <span>ZENO GLOBAL / PRO AUDIO SOLUTIONS</span>
      </div>
      {failedSrc !== src && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailedSrc(src)}
        />
      )}
      {failedSrc === src && <span className="ah-sr-only">{alt} — hình ảnh chưa có sẵn</span>}
    </div>
  );
}

export const HomePage: React.FC = () => {
  const zaloPhone = '0332933226';
  const phoneDisplay = '0332 933 226';
  const contactUrl = `https://zalo.me/${zaloPhone}`;

  const [selected, setSelected] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const application = applications[selected];

  return (
    <main className="audio-home">
      <style>{styles}</style>

      {/* ================= HERO ================= */}
      <section className="ah-hero" aria-labelledby="ah-hero-title">
        <AudioImage
          src="/images/home/1.jpg"
          alt="Hệ thống âm thanh biểu diễn chuyên nghiệp Zeno Global"
          className="ah-hero-photo"
          eager
        />
        <div className="ah-hero-shade" />

        <div className="ah-container ah-hero-content">
          <div className="ah-hero-top">
            <span className="ah-eyebrow">
              <i /> ZENO GLOBAL PRO AUDIO
            </span>
            <span className="ah-hero-index">HÀ NỘI · HÀ TĨNH · TOÀN QUỐC</span>
          </div>

          <div className="ah-hero-copy">
            <span className="ah-kicker">THIẾT BỊ ĐỒNG BỘ · ĐO KIỂM HỢP QUY · XUẤT NHẬP KHẨU</span>
            <h1 id="ah-hero-title">
              Âm thanh lớn.<br />
              <span>Chất chuẩn mực.</span>
            </h1>
            <p>
              Cung cấp trọn bộ Cục đẩy, Vang số, Micro, Loa, Quản lý nguồn &amp; Phụ kiện.
              <br className="ah-desktop-break" />
              Tư vấn đo kiểm chứng nhận hợp quy micro và giải pháp thương mại Pro Audio quốc tế.
            </p>

            <div className="ah-actions">
              <Link className="ah-button ah-button-lime" to="/products">
                Khám phá sản phẩm <ArrowUpRight size={19} />
              </Link>
              <a
                className="ah-button ah-button-glass"
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tư vấn Zalo ({phoneDisplay}) <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="ah-hero-bottom">
            <a href="#ah-categories">
              DANH MỤC THIẾT BỊ <span>↓</span>
            </a>
            <div className="ah-signal" aria-hidden="true">
              {Array.from({ length: 36 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    height: `${Math.round(10 + Math.sin(i * 0.45) * 16 + 10)}px`,
                  }}
                />
              ))}
            </div>
            <span>HOTLINE / ZALO: {phoneDisplay}</span>
          </div>
        </div>
      </section>

      {/* ================= SERVICE STRIP ================= */}
      <div className="ah-service-strip">
        <div className="ah-container ah-service-grid">
          {[
            {
              icon: Speaker,
              title: 'Hệ thiết bị đầy đủ',
              sub: 'Cục đẩy, Vang, Mic, Loa, Nguồn',
            },
            {
              icon: Radio,
              title: 'Hợp quy micro',
              sub: 'Đo kiểm dải tần vô tuyến chuẩn',
            },
            {
              icon: Ship,
              title: 'Tư vấn xuất nhập khẩu',
              sub: 'Kết nối xưởng sản xuất quốc tế',
            },
            {
              icon: Globe2,
              title: 'Demo & Triển lãm',
              sub: 'Cập nhật công nghệ Pro Audio',
            },
          ].map(({ icon: Icon, title, sub }) => (
            <div className="ah-service" key={title}>
              <Icon size={24} strokeWidth={1.6} />
              <div>
                <strong>{title}</strong>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 01 / CATEGORIES ================= */}
      <section className="ah-section ah-categories" id="ah-categories" aria-labelledby="ah-category-title">
        <div className="ah-container">
          <div className="ah-section-head">
            <div>
              <span className="ah-eyebrow ah-muted">01 / DANH MỤC SẢN PHẨM</span>
              <h2 id="ah-category-title">
                Hệ sinh thái thiết bị<br />đồng bộ chuyên nghiệp.
              </h2>
            </div>
            <div className="ah-head-aside">
              <p>
                Phân phối và tư vấn cấu hình chính xác cho hội trường,
                <br />sân khấu, sự kiện biểu diễn và dự án công trình.
              </p>
              <Link className="ah-text-link" to="/products">
                Tất cả sản phẩm <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="ah-category-grid">
            {categories.map((item, index) => (
              <Link
                to="/products"
                className="ah-category"
                key={item.title}
                aria-label={`Khám phá ${item.title}`}
              >
                <div className="ah-category-visual">
                  <AudioImage src={item.image} alt={item.title} />
                  <span className="ah-category-number">0{index + 1}</span>
                  <span className="ah-circle-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </div>
                <div className="ah-category-info">
                  <span className="ah-small-label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 02 / APPLICATIONS ================= */}
      <section className="ah-section ah-solutions" aria-labelledby="ah-solutions-title">
        <div className="ah-container">
          <div className="ah-section-head">
            <div>
              <span className="ah-eyebrow">02 / GIẢI PHÁP THEO YÊU CẦU</span>
              <h2 id="ah-solutions-title">
                Tối ưu từng không gian.<br />
                <span>Hoàn thiện pháp lý &amp; kỹ thuật.</span>
              </h2>
            </div>
            <p className="ah-section-description">
              Không chỉ là lựa chọn thiết bị riêng lẻ.
              <br />Zeno Global đồng hành cùng bạn ở mọi khâu chuyên môn.
            </p>
          </div>

          <div className="ah-solution-layout">
            <div className="ah-solution-options" role="group" aria-label="Chọn giải pháp chuyên môn">
              {applications.map((item, index) => (
                <button
                  className={`ah-solution-choice ${selected === index ? 'is-active' : ''}`}
                  type="button"
                  key={item.title}
                  aria-pressed={selected === index}
                  aria-controls="ah-solution-detail"
                  onClick={() => setSelected(index)}
                >
                  <span className="ah-choice-number">0{index + 1}</span>
                  <span>{item.title}</span>
                  <ArrowUpRight size={20} />
                </button>
              ))}

              <div className="ah-solution-note">
                <Volume2 size={22} />
                <p>
                  Đúng công suất. Đạt chứng nhận hợp quy.
                  <br />Tối ưu ngân sách đầu tư cho dự án.
                </p>
              </div>
            </div>

            <div
              className="ah-solution-detail"
              id="ah-solution-detail"
              aria-live="polite"
              aria-atomic="true"
            >
              <AudioImage src={application.image} alt={application.title} />
              <div className="ah-solution-overlay" />
              <div className="ah-solution-copy">
                <span className="ah-small-label">DỊCH VỤ / 0{selected + 1}</span>
                <h3>{application.heading}</h3>
                <p>{application.description}</p>
                <div className="ah-tags">
                  {application.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className="ah-text-link"
                  href={contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tư vấn giải pháp này qua Zalo <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 03 / APPROACH & CORE VALUES ================= */}
      <section className="ah-section ah-approach" aria-labelledby="ah-approach-title">
        <div className="ah-container ah-approach-layout">
          <div>
            <span className="ah-eyebrow ah-muted">03 / GIÁ TRỊ CỐT LÕI</span>
            <h2 id="ah-approach-title">
              Thiết bị chuẩn.<br />
              <span>Pháp lý minh bạch.<br />Kỹ thuật đồng hành.</span>
            </h2>
            <p className="ah-approach-intro">
              Chúng tôi không chỉ cung ứng phần cứng mà trực tiếp giải quyết các bài toán về chất lượng kiểm định, hợp quy dải tần micro và nhập khẩu chính ngạch.
            </p>
            <a
              className="ah-text-link"
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Trao đổi cùng Zeno Global <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="ah-values">
            {[
              {
                icon: CheckCircle2,
                title: 'Tư vấn đúng cấu hình thực tế',
                desc: 'Phối ghép đồng bộ giữa công suất cục đẩy, dải cắt tần của vang số và khả năng chịu tải của củ loa.',
              },
              {
                icon: Radio,
                title: 'Đo kiểm & chứng nhận hợp quy',
                desc: 'Hỗ trợ trọn gói thủ tục đo kiểm tần số micro không dây, hoàn thiện hồ sơ chứng nhận theo quy chuẩn quốc gia.',
              },
              {
                icon: Wrench,
                title: 'Hỗ trợ kỹ thuật & kết nối quốc tế',
                desc: 'Cung cấp thông tin triển lãm demo Pro Audio, hỗ trợ thủ tục hải quan xuất nhập khẩu và chính sách bảo mật, vận chuyển rõ ràng.',
              },
            ].map(({ icon: Icon, title, desc }, index) => (
              <div className="ah-value" key={title}>
                <span className="ah-value-icon">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <span className="ah-value-index">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 04 / REALITY GALLERY ================= */}
      <section className="ah-section ah-gallery" aria-labelledby="ah-gallery-title">
        <div className="ah-container">
          <div className="ah-section-head">
            <div>
              <span className="ah-eyebrow ah-muted">04 / HÌNH ẢNH THỰC TẾ</span>
              <h2 id="ah-gallery-title">
                Sản phẩm hiện diện.<br />Dự án thành công.
              </h2>
            </div>
            <button
              className="ah-text-link"
              type="button"
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              aria-controls="ah-gallery-grid"
            >
              {showAll ? 'Thu gọn hình ảnh' : 'Xem toàn bộ hình ảnh'}{' '}
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="ah-gallery-grid" id="ah-gallery-grid">
            {(showAll ? gallery : gallery.slice(0, 3)).map((item, index) => (
              <figure
                className={`ah-gallery-item ${index === 0 ? 'ah-gallery-featured' : ''}`}
                key={item.title}
              >
                <AudioImage src={item.image} alt={item.title} />
                <figcaption>
                  <span className="ah-small-label">{item.type}</span>
                  <h3>{item.title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="ah-contact" aria-labelledby="ah-contact-title">
        <div className="ah-container ah-contact-layout">
          <div>
            <span className="ah-eyebrow">LIÊN HỆ ZENO GLOBAL</span>
            <h2 id="ah-contact-title">
              Sẵn sàng hợp tác<br />
              <span>dự án âm thanh?</span>
            </h2>
            <p>
              📍 <strong>Hà Nội:</strong> Số 1 Trần Thủ Độ, Quận Hoàng Mai<br />
              📍 <strong>Hà Tĩnh:</strong> 56 La Sơn Phu Tử, Phường Thành Sen<br />
              Hotline/Zalo: <strong>{phoneDisplay}</strong> · Email: zenoglobalvietnam@gmail.com
            </p>
          </div>

          <a
            className="ah-contact-action"
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ah-contact-icon">
              <ArrowUpRight size={42} strokeWidth={1.4} />
            </span>
            <strong>Chat Zalo ({phoneDisplay})</strong>
            <span>Nhận tư vấn cấu hình &amp; báo giá nhanh</span>
          </a>
        </div>

        <div className="ah-container ah-contact-bottom">
          <span>ZENO GLOBAL AUDIO &amp; TRADE SOLUTIONS</span>
          <span>CHUYÊN NGHIỆP · ĐO KIỂM HỢP QUY · XUẤT NHẬP KHẨU</span>
        </div>
      </section>
    </main>
  );
};

const styles = `
.audio-home{--ah-ink:#171a18;--ah-dark:#0c120f;--ah-lime:#d5ef69;--ah-paper:#f6f7f2;--ah-muted:#697065;background:var(--ah-paper);color:var(--ah-ink);font-family:Arial,Helvetica,sans-serif;line-height:1.5;-webkit-font-smoothing:antialiased;isolation:isolate}
.audio-home *{box-sizing:border-box}.audio-home h1,.audio-home h2,.audio-home h3,.audio-home p,.audio-home figure{margin:0}.audio-home a{color:inherit;text-decoration:none}.audio-home button{font:inherit;cursor:pointer}.audio-home button,.audio-home a{-webkit-tap-highlight-color:transparent}.audio-home svg{flex-shrink:0}.audio-home a:focus-visible,.audio-home button:focus-visible{outline:3px solid #658714;outline-offset:6px}.audio-home .ah-hero a:focus-visible,.audio-home .ah-solutions a:focus-visible,.audio-home .ah-solutions button:focus-visible{outline-color:var(--ah-lime)}
.audio-home .ah-container{width:min(1280px,calc(100% - 112px));margin-inline:auto}.audio-home .ah-section{padding:104px 0}.audio-home .ah-eyebrow{display:inline-flex;align-items:center;gap:11px;font-size:10px;font-weight:700;letter-spacing:2px;line-height:1.7}.audio-home .ah-eyebrow i{width:7px;height:7px;background:var(--ah-lime);border-radius:50%;box-shadow:0 0 18px #d5ef6950}.audio-home .ah-muted{color:var(--ah-muted)}.audio-home .ah-small-label{font-size:9px;letter-spacing:1.6px;font-weight:700}.audio-home h2{font-size:clamp(32px,3.4vw,50px);letter-spacing:-1.9px;font-weight:700;line-height:1.19;margin-top:20px}.audio-home .ah-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.audio-home .ah-image{position:relative;overflow:hidden;background:#252d26;width:100%;height:100%}.audio-home .ah-image img{position:relative;display:block;width:100%;height:100%;object-fit:cover;transition:transform .65s ease}.audio-home .ah-image-fallback{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;background:radial-gradient(ellipse at 50% 40%,#535f43 0,transparent 65%),repeating-linear-gradient(90deg,transparent 0 20px,#ffffff03 21px 22px),#202820;color:#b0c58b}.audio-home .ah-image-fallback span{font-size:8px;letter-spacing:1.5px;text-align:center;padding:0 12px}
.audio-home .ah-hero{position:relative;min-height:720px;background:var(--ah-dark);color:white;overflow:hidden}.audio-home .ah-hero-photo{position:absolute;inset:0}.audio-home .ah-hero-photo img{object-position:65% 45%;filter:saturate(.75)}.audio-home .ah-hero-photo .ah-image-fallback{align-items:flex-end;padding-right:14%;background:radial-gradient(ellipse at 85% 50%,#526839 0,transparent 55%),repeating-linear-gradient(115deg,transparent 0 75px,#d5ef6906 76px 77px),#101811}.audio-home .ah-hero-photo .ah-image-fallback svg{width:240px;height:340px;opacity:.7}.audio-home .ah-hero-photo .ah-image-fallback span{display:none}.audio-home .ah-hero-shade{position:absolute;inset:0;background:linear-gradient(90deg,#0c120fed 0%,#0c120fb8 45%,#0c120f25 100%),linear-gradient(0deg,#0c120fe8,transparent 45%)}.audio-home .ah-hero-content{position:relative;min-height:720px;display:flex;flex-direction:column}.audio-home .ah-hero-top{display:flex;align-items:center;justify-content:space-between;padding:30px 0;border-bottom:1px solid #ffffff26}.audio-home .ah-hero-index{font-size:9px;letter-spacing:1.8px;color:#c2c8bf}.audio-home .ah-hero-copy{padding:85px 0 78px;max-width:820px}.audio-home .ah-kicker{font-size:10px;color:#d2d9cb;letter-spacing:2px;font-weight:700}.audio-home h1{font-size:clamp(50px,6.5vw,92px);line-height:1.1;letter-spacing:-4px;font-weight:700;margin:21px 0 24px}.audio-home h1 span{color:var(--ah-lime)}.audio-home .ah-hero-copy>p{color:#c3cabf;line-height:1.9;max-width:540px;font-size:14px}.audio-home .ah-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:32px}.audio-home .ah-button{display:inline-flex;align-items:center;justify-content:center;gap:23px;min-height:52px;padding:14px 22px;font-size:12px;font-weight:700;border:1px solid transparent;transition:background .2s,transform .2s}.audio-home .ah-button:hover{transform:translateY(-3px)}.audio-home .ah-button-lime{background:var(--ah-lime);color:var(--ah-ink)}.audio-home .ah-button-lime:hover{background:#e2ff77}.audio-home .ah-button-glass{border-color:#ffffff45;background:#ffffff06}.audio-home .ah-button-glass:hover{background:#ffffff15}.audio-home .ah-hero-bottom{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:25px;padding:24px 0;border-top:1px solid #ffffff26;font-size:9px;letter-spacing:1.6px;color:#b7c1b1}.audio-home .ah-hero-bottom a{display:flex;align-items:center;gap:25px;min-height:30px}.audio-home .ah-hero-bottom a span{color:var(--ah-lime);font-size:20px}.audio-home .ah-signal{display:flex;gap:4px;align-items:center;height:44px}.audio-home .ah-signal i{display:block;width:2px;background:var(--ah-lime);opacity:.75}
.audio-home .ah-service-strip{border-bottom:1px solid #dddeda;background:#eef0e9}.audio-home .ah-service-grid{display:grid;grid-template-columns:repeat(4,1fr);padding:29px 0;gap:20px}.audio-home .ah-service{display:flex;gap:15px;align-items:center;border-right:1px solid #d4d9cd}.audio-home .ah-service:last-child{border:0}.audio-home .ah-service svg{color:#556934}.audio-home .ah-service strong{display:block;font-size:12px}.audio-home .ah-service span{display:block;font-size:10px;color:var(--ah-muted);margin-top:3px}
.audio-home .ah-section-head{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;margin-bottom:42px}.audio-home .ah-head-aside p,.audio-home .ah-section-description{font-size:13px;line-height:1.9;color:var(--ah-muted)}.audio-home .ah-text-link{display:inline-flex;align-items:center;justify-content:space-between;gap:26px;font-size:12px;font-weight:700;border:0;border-bottom:1px solid currentColor;padding:10px 0;background:transparent;transition:gap .2s}.audio-home .ah-text-link:hover{gap:34px}.audio-home .ah-head-aside .ah-text-link{margin-top:13px}.audio-home .ah-category-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.audio-home .ah-category-visual{height:280px;position:relative;overflow:hidden;background:#e8eae2}.audio-home .ah-category-visual .ah-image img{filter:saturate(.8)}.audio-home .ah-category:hover img{transform:scale(1.05)}.audio-home .ah-category-number{position:absolute;top:15px;left:15px;font-size:10px;color:white;background:#11180eb3;padding:4px 8px}.audio-home .ah-circle-arrow{position:absolute;bottom:15px;right:15px;width:39px;height:39px;border-radius:50%;background:var(--ah-paper);display:grid;place-items:center;transition:background .2s,transform .2s}.audio-home .ah-category:hover .ah-circle-arrow{background:var(--ah-lime);transform:rotate(45deg)}.audio-home .ah-category-info{padding:20px 0 0}.audio-home .ah-category-info .ah-small-label{color:var(--ah-muted)}.audio-home .ah-category-info h3{font-size:20px;letter-spacing:-.6px;margin:8px 0}.audio-home .ah-category-info p{font-size:12px;color:var(--ah-muted);line-height:1.8;max-width:320px}
.audio-home .ah-solutions{background:var(--ah-dark);color:#f6f7f2}.audio-home .ah-solutions .ah-eyebrow{color:var(--ah-lime)}.audio-home .ah-solutions h2>span{color:#a6b09d}.audio-home .ah-solutions .ah-section-description{color:#a7b09f}.audio-home .ah-solution-layout{display:grid;grid-template-columns:1fr 1.95fr;gap:44px}.audio-home .ah-solution-choice{display:flex;align-items:center;text-align:left;width:100%;gap:16px;padding:24px 13px;border:0;border-bottom:1px solid #ffffff20;background:transparent;color:#b4bead;font-size:14px;min-height:78px;transition:color .2s,background .2s}.audio-home .ah-solution-choice svg{margin-left:auto}.audio-home .ah-choice-number{font-size:10px;opacity:.65}.audio-home .ah-solution-choice.is-active{background:var(--ah-lime);color:var(--ah-ink);border-color:var(--ah-lime);font-weight:700}.audio-home .ah-solution-choice:not(.is-active):hover{color:white;background:#ffffff08}.audio-home .ah-solution-note{display:flex;align-items:center;gap:15px;margin:33px 8px 0;color:#9ba68f}.audio-home .ah-solution-note p{font-size:11px;line-height:1.8}.audio-home .ah-solution-detail{position:relative;min-height:480px;overflow:hidden;background:#2b3228}.audio-home .ah-solution-detail>.ah-image{position:absolute;inset:0}.audio-home .ah-solution-overlay{position:absolute;inset:0;background:linear-gradient(0deg,#0c120ff5,#0c120f50 80%)}.audio-home .ah-solution-copy{position:relative;padding:120px 38px 34px}.audio-home .ah-solution-copy>.ah-small-label{color:var(--ah-lime)}.audio-home .ah-solution-copy h3{white-space:pre-line;font-size:clamp(27px,3vw,38px);line-height:1.2;letter-spacing:-1.2px;margin:15px 0}.audio-home .ah-solution-copy p{max-width:500px;color:#d2d9cc;line-height:1.8;font-size:12px}.audio-home .ah-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:20px}.audio-home .ah-tags span{border:1px solid #ffffff45;padding:5px 10px;font-size:9px;color:#e0e6db}.audio-home .ah-solution-copy .ah-text-link{margin-top:22px;color:var(--ah-lime)}
.audio-home .ah-approach-layout{display:grid;grid-template-columns:1fr 1fr;gap:90px}.audio-home .ah-approach h2 span{color:#808879}.audio-home .ah-approach-intro{font-size:13px;color:var(--ah-muted);line-height:1.9;margin:24px 0 18px;max-width:380px}.audio-home .ah-values{padding-top:10px}.audio-home .ah-value{display:flex;gap:22px;padding:30px 0;border-top:1px solid #d8dcd2}.audio-home .ah-value:last-child{border-bottom:1px solid #d8dcd2}.audio-home .ah-value-icon{width:47px;height:47px;display:grid;place-items:center;flex-shrink:0;background:#e8ecdF;color:#556934}.audio-home .ah-value h3{font-size:17px;letter-spacing:-.4px;margin-bottom:10px}.audio-home .ah-value p{font-size:12px;line-height:1.9;color:var(--ah-muted)}.audio-home .ah-value-index{font-size:9px;color:#828977;margin-left:auto}
.audio-home .ah-gallery{padding-top:10px}.audio-home .ah-gallery-grid{display:grid;grid-template-columns:1.4fr 1fr;grid-auto-rows:235px;gap:18px}.audio-home .ah-gallery-item{position:relative;overflow:hidden;min-width:0}.audio-home .ah-gallery-featured{grid-row:span 2}.audio-home .ah-gallery-item::after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,#0b130ee8,transparent 70%);pointer-events:none}.audio-home .ah-gallery-item figcaption{position:absolute;z-index:1;bottom:25px;left:27px;right:20px;color:white}.audio-home .ah-gallery-item .ah-small-label{color:var(--ah-lime)}.audio-home .ah-gallery-item h3{font-size:20px;letter-spacing:-.5px;margin-top:7px}.audio-home .ah-gallery-featured h3{font-size:28px}.audio-home .ah-gallery-item:hover img{transform:scale(1.04)}
.audio-home .ah-contact{background:var(--ah-lime);padding:75px 0 0;overflow:hidden}.audio-home .ah-contact-layout{display:flex;justify-content:space-between;align-items:center;gap:50px;padding-bottom:65px}.audio-home .ah-contact h2{font-size:clamp(37px,4.7vw,66px);letter-spacing:-2.8px;margin-top:20px}.audio-home .ah-contact h2 span{color:#566923}.audio-home .ah-contact p{font-size:13px;line-height:1.9;margin-top:23px;color:#39481b}.audio-home .ah-contact-action{display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center;padding:20px}.audio-home .ah-contact-icon{display:grid;place-items:center;border-radius:50%;background:var(--ah-ink);color:var(--ah-lime);width:100px;height:100px;margin-bottom:10px;transition:transform .25s}.audio-home .ah-contact-action:hover .ah-contact-icon{transform:rotate(45deg)}.audio-home .ah-contact-action strong{font-size:17px}.audio-home .ah-contact-action>span:last-child{font-size:10px;color:#39481b}.audio-home .ah-contact-bottom{border-top:1px solid #17200c30;padding:24px 0;display:flex;justify-content:space-between;gap:20px;font-size:9px;letter-spacing:1.5px;font-weight:700}
@media(min-width:1600px){.audio-home .ah-hero,.audio-home .ah-hero-content{min-height:820px}.audio-home .ah-hero-copy{padding-top:120px}}
@media(max-width:1100px){.audio-home .ah-container{width:calc(100% - 64px)}.audio-home .ah-category-grid{grid-template-columns:repeat(2,1fr)}.audio-home .ah-category-visual{height:250px}.audio-home .ah-service{gap:10px}.audio-home .ah-service strong{font-size:11px}.audio-home .ah-service span{font-size:9px}.audio-home .ah-solution-layout{gap:25px;grid-template-columns:1fr 1.55fr}.audio-home .ah-solution-choice{font-size:12px;gap:10px}.audio-home .ah-approach-layout{gap:45px}.audio-home .ah-hero-bottom>span{display:none}}
@media(max-width:760px){.audio-home .ah-container{width:calc(100% - 40px)}.audio-home .ah-section{padding:66px 0}.audio-home .ah-hero,.audio-home .ah-hero-content{min-height:660px}.audio-home .ah-hero-top{padding:23px 0}.audio-home .ah-hero-index{display:none}.audio-home .ah-hero-copy{padding:75px 0 65px}.audio-home h1{font-size:clamp(45px,9.7vw,72px);letter-spacing:-2.8px;line-height:1.12}.audio-home .ah-hero-copy>p{font-size:13px;max-width:420px}.audio-home .ah-hero-photo img{object-position:65% center}.audio-home .ah-hero-shade{background:linear-gradient(90deg,#0c120fe8,#0c120f6b),linear-gradient(0deg,#0c120f,transparent)}.audio-home .ah-kicker{font-size:9px;letter-spacing:1.5px}.audio-home .ah-eyebrow{font-size:9px;letter-spacing:1.5px}.audio-home .ah-hero-bottom{font-size:8px;letter-spacing:1px}.audio-home .ah-signal{gap:3px}.audio-home .ah-signal i:nth-child(n+26){display:none}.audio-home .ah-service-grid{grid-template-columns:1fr 1fr;gap:24px 16px}.audio-home .ah-service:nth-child(2){border:0}.audio-home .ah-service strong{font-size:11px}.audio-home .ah-service span{font-size:9px}.audio-home .ah-section-head{align-items:flex-start;flex-direction:column;gap:22px;margin-bottom:30px}.audio-home h2{font-size:36px;letter-spacing:-1.5px}.audio-home .ah-head-aside{display:flex;justify-content:space-between;gap:25px;width:100%;align-items:flex-end}.audio-home .ah-head-aside p{font-size:12px}.audio-home .ah-head-aside .ah-text-link{white-space:nowrap}.audio-home .ah-category-grid{grid-template-columns:1fr;gap:24px}.audio-home .ah-category-visual{height:250px}.audio-home .ah-category-info{padding-top:16px}.audio-home .ah-category-info h3{font-size:19px}.audio-home .ah-category-info p{font-size:12px}.audio-home .ah-small-label{font-size:8px;letter-spacing:1px}.audio-home .ah-solution-layout{grid-template-columns:1fr;gap:24px}.audio-home .ah-solution-options{display:grid;grid-template-columns:1fr 1fr;gap:8px}.audio-home .ah-solution-choice{min-height:64px;padding:14px 10px;border:1px solid #ffffff20;font-size:11px}.audio-home .ah-choice-number{display:none}.audio-home .ah-solution-note{display:none}.audio-home .ah-solution-copy{padding:105px 25px 30px}.audio-home .ah-solution-detail{min-height:450px}.audio-home .ah-approach-layout{grid-template-columns:1fr;gap:30px}.audio-home .ah-approach-intro{max-width:480px}.audio-home .ah-value{padding:25px 0}.audio-home .ah-gallery{padding-top:0}.audio-home .ah-gallery-grid{grid-auto-rows:200px;grid-template-columns:1fr 1fr;gap:12px}.audio-home .ah-gallery-featured{grid-column:span 2;grid-row:span 1;min-height:280px}.audio-home .ah-gallery-grid{grid-template-rows:280px}.audio-home .ah-gallery-item figcaption{bottom:19px;left:18px;right:15px}.audio-home .ah-gallery-item h3{font-size:16px}.audio-home .ah-gallery-featured h3{font-size:24px}.audio-home .ah-contact{padding-top:55px}.audio-home .ah-contact-layout{flex-direction:column;align-items:flex-start;gap:26px;padding-bottom:40px}.audio-home .ah-contact h2{font-size:43px;letter-spacing:-2px}.audio-home .ah-contact-action{padding:0;display:grid;grid-template-columns:62px 1fr;text-align:left;column-gap:17px;row-gap:2px}.audio-home .ah-contact-icon{width:62px;height:62px;grid-row:span 2;margin:0}.audio-home .ah-contact-icon svg{width:30px;height:30px}.audio-home .ah-contact-action strong{align-self:end;font-size:15px}.audio-home .ah-contact-action>span:last-child{align-self:start}.audio-home .ah-contact-bottom{font-size:8px;letter-spacing:1px}.audio-home .ah-contact-bottom>span:last-child{display:none}}
@media(max-width:420px){.audio-home .ah-container{width:calc(100% - 32px)}.audio-home .ah-button{padding:13px 15px;gap:12px;font-size:11px}.audio-home .ah-actions{gap:9px}.audio-home .ah-head-aside{display:block}.audio-home .ah-category-visual{height:210px}.audio-home .ah-category-info h3{font-size:17px}.audio-home .ah-circle-arrow{width:32px;height:32px;right:10px;bottom:10px}.audio-home .ah-service svg{width:20px}.audio-home .ah-service{gap:9px}.audio-home .ah-service strong{font-size:10px}.audio-home .ah-service span{font-size:8px}.audio-home .ah-desktop-break{display:none}.audio-home .ah-contact h2{font-size:36px}.audio-home .ah-value{gap:14px}.audio-home .ah-value h3{font-size:15px}.audio-home .ah-gallery-item h3{font-size:14px}.audio-home .ah-gallery-featured h3{font-size:22px}}
@media(prefers-reduced-motion:reduce){.audio-home *,.audio-home *::before,.audio-home *::after{transition:none!important;animation:none!important;scroll-behavior:auto!important}}
`;

export default HomePage;