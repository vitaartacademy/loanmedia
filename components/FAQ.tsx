
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Tôi không rành về công nghệ có học được không?",
      answer: "Hoàn toàn được. Chương trình được thiết kế cho người làm kinh doanh, không phải dân lập trình. Chúng tôi hướng dẫn cầm tay chỉ việc, cài đặt sẵn công cụ, bạn chỉ cần nhập ý tưởng và sử dụng."
    },
    {
      question: "Chương trình Basic và Advanced khác nhau thế nào?",
      answer: "Basic tập trung vào kỹ năng tạo nội dung (Content, Ảnh, Video) để triển khai ngay. Advanced tập trung vào tư duy chiến lược, xây dựng thương hiệu và hệ thống phễu marketing tự động cho chủ doanh nghiệp."
    },
    {
      question: "Học hình thức Online hay Offline?",
      answer: "Vita Marketing AI tổ chức cả 2 hình thức. Lớp Offline (tại Hà Nội/TP.HCM) giúp tương tác trực tiếp. Lớp Online qua Zoom có record video để xem lại. Doanh nghiệp có thể chọn đào tạo In-house tại văn phòng."
    },
    {
      question: "Sau khóa học có được hỗ trợ không?",
      answer: "Có. Học viên được tham gia cộng đồng kín để cập nhật kiến thức AI mới nhất trọn đời. Với gói Mentoring, chúng tôi đồng hành 1:1 để đảm bảo hệ thống vận hành ổn định."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-background border-t border-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-2">
            <HelpCircle className="text-accent" />
            Câu hỏi thường gặp
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'bg-slate-800/50 border-primary/50 shadow-lg' 
                  : 'bg-surface border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left gap-4"
              >
                <span className={`text-sm md:text-base font-semibold ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-slate-500 shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`px-6 text-slate-400 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
