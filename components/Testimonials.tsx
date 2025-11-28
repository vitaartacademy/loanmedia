import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Chị Lan Anh",
      role: "Chủ Spa tại Hà Nội",
      content: "Trước đây mình thuê ngoài viết content tốn 5-7 triệu/tháng mà không hiệu quả. Sau khóa Basic, mình tự dùng AI lên lịch 1 tháng chỉ trong 30 phút. Rất thực tế!",
      avatar: "LA",
      color: "bg-purple-500"
    },
    {
      name: "Anh Minh Tuấn",
      role: "CEO Nội Thất Decor",
      content: "Chương trình Mentoring của Vita giúp mình xây dựng lại toàn bộ hệ thống CRM và Automation. Giờ khách nhắn tin là có AI chăm sóc bước đầu, tỷ lệ chốt tăng rõ rệt.",
      avatar: "MT",
      color: "bg-blue-500"
    },
    {
      name: "Ngọc Mai",
      role: "Kinh doanh thời trang",
      content: "Mình thích cách chị Loan dạy tư duy trước khi dạy công cụ. AI chỉ là hỗ trợ, quan trọng là chiến lược thương hiệu. Rất đáng tiền cho các chủ shop nhỏ.",
      avatar: "NM",
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-surface relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 w-fit mx-auto mb-3">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <span className="text-[10px] md:text-xs font-semibold text-slate-300 uppercase tracking-wide">Được tin tưởng bởi 300+ Học viên</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance text-white">
            Khách hàng nói gì về <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Vita Marketing AI</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 relative group hover:-translate-y-1 transition-all duration-300 hover:border-primary/30 shadow-xl">
              <Quote className="absolute top-4 right-4 text-slate-800 group-hover:text-primary/20 transition-colors" size={40} />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                "{review.content}"
              </p>

              <div className="flex items-center gap-3 border-t border-slate-800/60 pt-4">
                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;