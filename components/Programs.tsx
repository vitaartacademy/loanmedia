
import React from 'react';
import { Check, Users, Clock, Target, Settings, Shield, Briefcase } from 'lucide-react';

interface ProgramFeature {
  icon: React.ElementType;
  text: string;
}

interface ProgramCardProps {
  badge: string;
  title: string;
  desc: string;
  features: ProgramFeature[];
  price: string;
  unit: string;
  cta: string;
  isPopular?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ badge, title, desc, features, price, unit, cta, isPopular }) => (
  <article className={`flex flex-col h-full bg-surface rounded-2xl border ${isPopular ? 'border-primary shadow-2xl shadow-primary/10' : 'border-slate-800'} p-5 md:p-7 relative overflow-hidden transition-transform hover:-translate-y-1 duration-300`}>
    {isPopular && (
      <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
        Phổ biến nhất
      </div>
    )}
    <div className="mb-3">
      <span className={`inline-block px-3 py-0.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-wide border ${isPopular ? 'bg-primary/10 text-blue-400 border-primary/20' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
        {badge}
      </span>
    </div>
    {/* text-balance helps title wrap nicely */}
    <h3 className="text-lg md:text-xl font-bold text-white mb-2 text-balance">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">{desc}</p>
    
    <div className="space-y-2.5 mb-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
          <feature.icon size={16} className="text-accent mt-0.5 shrink-0" />
          <span>{feature.text}</span>
        </div>
      ))}
    </div>

    <div className="mt-auto pt-4 border-t border-slate-800">
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-xl md:text-2xl font-bold text-orange-400">{price}</span>
        <span className="text-xs text-slate-500">{unit}</span>
      </div>
      <a 
        href="#contact" 
        onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}
        className={`w-full block text-center py-2.5 rounded-xl text-sm md:text-base font-bold transition-colors ${
          isPopular 
            ? 'bg-primary hover:bg-primary-hover text-white' 
            : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white'
        }`}
      >
        {cta}
      </a>
    </div>
  </article>
);

const Programs: React.FC = () => {
  const programs = [
    {
      badge: "Basic • Nhóm nhỏ",
      title: "AI Marketing Thực Chiến",
      desc: "Ứng dụng AI để tạo bài viết, hình ảnh, video, nội dung quảng cáo – triển khai ngay trên các kênh.",
      features: [
        { icon: Clock, text: "6 buổi × 2 giờ" },
        { icon: Users, text: "6–15 học viên" },
        { icon: Target, text: "Tập trung thực hành" }
      ],
      price: "3.500.000đ",
      unit: "/ học viên",
      cta: "Đăng ký quan tâm"
    },
    {
      badge: "Advanced • Hệ thống",
      title: "Thương Hiệu & Hệ Thống AI",
      desc: "Xây chân dung khách hàng, chiến lược thương hiệu, kế hoạch nội dung và phễu marketing đa kênh.",
      features: [
        { icon: Clock, text: "8 buổi × 2 giờ" },
        { icon: Users, text: "5–12 học viên" },
        { icon: Target, text: "Case study doanh nghiệp" }
      ],
      price: "5.500.000đ",
      unit: "/ học viên",
      cta: "Đăng ký quan tâm",
      isPopular: true
    },
    {
      badge: "Mentoring • 1:1",
      title: "Tự Động Hóa & Mentoring 1:1",
      desc: "Đồng hành 1:1 thiết kế phễu, CRM, chatbot, automation – giải quyết bài toán cụ thể.",
      features: [
        { icon: Settings, text: "Lộ trình tùy chỉnh riêng biệt" },
        { icon: Briefcase, text: "Hỗ trợ kỹ thuật chuyên sâu" },
        { icon: Shield, text: "Triển khai trực tiếp vào vận hành" }
      ],
      price: "Liên hệ báo giá",
      unit: "/ Theo quy mô dự án",
      cta: "Yêu cầu tư vấn"
    }
  ];

  return (
    <section id="programs" className="py-12 md:py-16 bg-background relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">3 Chương trình đào tạo chuyên sâu</h2>
          <p className="text-slate-400 text-base md:text-lg text-balance">Lộ trình từ cơ bản đến nâng cao, thiết kế riêng cho nhu cầu thực tế của SME.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((p, index) => (
            <ProgramCard 
              key={index}
              badge={p.badge}
              title={p.title}
              desc={p.desc}
              features={p.features.map(f => ({...f, icon: f.icon || Check}))}
              price={p.price}
              unit={p.unit}
              cta={p.cta}
              isPopular={p.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
