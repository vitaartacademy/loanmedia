
import React from 'react';
import { CheckCircle2, Workflow } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    { title: "AI gắn với bài toán doanh nghiệp", desc: "Không dạy lý thuyết suông. Mọi bài tập xoay quanh sản phẩm thực tế của bạn." },
    { title: "Lộ trình 3 cấp độ rõ ràng", desc: "Từ Content cơ bản đến xây dựng Brand và hệ thống Automation." },
    { title: "Thực hành đa kênh", desc: "Facebook, Zalo, TikTok, Web - Doanh nghiệp dùng gì, học cái đó." },
    { title: "Mentoring 1:1 sâu sát", desc: "Đồng hành gỡ rối trực tiếp, đảm bảo ra kết quả chuyển đổi." },
  ];

  const steps = [
    { num: 1, title: "Khảo sát", desc: "Trao đổi bài toán, mục tiêu 1-3 tháng." },
    { num: 2, title: "Đề xuất", desc: "Chọn cấp độ Basic/Advanced/Mentor phù hợp." },
    { num: 3, title: "Triển khai", desc: "Học & áp dụng ngay vào kênh doanh nghiệp." },
    { num: 4, title: "Tối ưu", desc: "Đo lường, chỉnh sửa và tự động hóa." },
  ];

  return (
    <section id="why-us" className="py-12 md:py-16 bg-surface/50 border-y border-slate-900 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reduced gap from gap-10 to gap-8, lg:gap-14 to lg:gap-10 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Benefits - Left Side */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">Tại sao chọn Vita Marketing AI?</h2>
            <p className="text-slate-400 text-base md:text-lg mb-6 max-w-2xl text-balance">
              Thay vì học công cụ rời rạc, chúng tôi tập trung vào tư duy hệ thống và kết quả kinh doanh cuối cùng.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {benefits.map((item, i) => (
                <div key={i} className="bg-background p-5 rounded-xl border border-slate-800 hover:border-primary/30 transition-colors">
                  <h4 className="font-bold text-white text-base mb-1.5 flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 pl-7 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl h-full">
              <h3 className="text-lg md:text-xl font-bold text-white mb-5 flex items-center gap-2.5">
                <Workflow className="text-accent" size={22} />
                Quy trình triển khai
              </h3>
              
              <div className="space-y-5 relative">
                {/* Connecting Line */}
                <div className="absolute left-[17px] top-4 bottom-4 w-0.5 bg-slate-800 -z-10" />

                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-surface border border-slate-700 flex items-center justify-center text-sm font-bold text-slate-300 shrink-0 shadow-sm z-10">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 text-base">{step.title}</h4>
                      <p className="text-sm text-slate-500 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
