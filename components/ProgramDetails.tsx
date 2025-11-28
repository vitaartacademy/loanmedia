
import React, { useState } from 'react';
import { BookOpen, Video, Image, Mic, Rocket, Target, Users, BarChart, MessageSquare, CheckCircle2 } from 'lucide-react';

const ProgramDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basic' | 'advanced' | 'mentoring'>('basic');

  const content = {
    basic: {
      title: "Basic: AI Marketing Thực Chiến",
      subtitle: "6 Buổi - Làm chủ công cụ, tạo nội dung đa kênh tốc độ cao.",
      target: "Chủ shop, nhân viên marketing, cá nhân muốn xây kênh.",
      modules: [
        {
          title: "Buổi 1: Tư duy AI & Prompt Engineering",
          desc: "Hiểu đúng về AI Marketing. Công thức viết câu lệnh (Prompt) để AI hiểu ý và trả kết quả chuẩn xác 99%.",
          icon: Rocket
        },
        {
          title: "Buổi 2: Sáng tạo Content đa kênh",
          desc: "Quy trình tạo 30 bài viết Facebook/Zalo/Website chỉ trong 15 phút. Cá nhân hóa giọng văn thương hiệu.",
          icon: BookOpen
        },
        {
          title: "Buổi 3: Thiết kế Visual & Hình ảnh",
          desc: "Tự tạo bộ ảnh sản phẩm, banner quảng cáo, logo chuyên nghiệp không cần biết Photoshop.",
          icon: Image
        },
        {
          title: "Buổi 4: Sản xuất Video ngắn (Shorts/Reels)",
          desc: "Viết kịch bản, tạo nhân vật ảo, dựng video tự động để xây kênh TikTok/Reels triệu view.",
          icon: Video
        },
        {
          title: "Buổi 5: Clone giọng nói & Avatar ảo",
          desc: "Tạo bản sao kỹ thuật số của chủ doanh nghiệp để livestream hoặc quay video không cần lên hình.",
          icon: Mic
        },
        {
          title: "Buổi 6: Tổng kết & Lập kế hoạch",
          desc: "Xây dựng lịch đăng bài 30 ngày và bộ quy trình ứng dụng ngay vào công việc.",
          icon: CheckCircle2
        }
      ]
    },
    advanced: {
      title: "Advanced: Thương Hiệu & Hệ Thống",
      subtitle: "8 Buổi - Xây dựng chiến lược bài bản & Phễu bán hàng tự động.",
      target: "Chủ doanh nghiệp SME, CEO, Manager muốn quản trị hệ thống.",
      modules: [
        {
          title: "Buổi 1-2: Chân dung & Hành trình khách hàng",
          desc: "Dùng AI phân tích sâu insight khách hàng. Vẽ bản đồ hành trình khách hàng (Customer Journey) chi tiết.",
          icon: Users
        },
        {
          title: "Buổi 3-4: Chiến lược Thương hiệu (Brand Strategy)",
          desc: "Xây dựng Big Idea, Key Message, tính cách thương hiệu nhất quán trên mọi điểm chạm.",
          icon: Target
        },
        {
          title: "Buổi 5-6: Hệ thống Phễu (Funnel) & Lead Magnet",
          desc: "Thiết kế mồi thu hút (Lead Magnet), trang đích (Landing Page) và chuỗi email nuôi dưỡng.",
          icon: BarChart
        },
        {
          title: "Buổi 7-8: Automation cơ bản & Đo lường",
          desc: "Kết nối các điểm chạm, thiết lập đo lường chỉ số và tối ưu hóa tỷ lệ chuyển đổi.",
          icon: Rocket
        }
      ]
    },
    mentoring: {
      title: "Mentoring: Tự Động Hóa 1:1",
      subtitle: "Đồng hành trực tiếp - Giải quyết bài toán riêng biệt.",
      target: "Doanh nghiệp có nhân sự, cần chuyển đổi số quy trình marketing.",
      modules: [
        {
          title: "Giai đoạn 1: Audit & Tư vấn chiến lược",
          desc: "Rà soát toàn bộ hiện trạng marketing. Tìm điểm gãy và cơ hội tăng trưởng. Lên kế hoạch hành động.",
          icon: SearchIcon
        },
        {
          title: "Giai đoạn 2: Xây dựng hệ thống Automation",
          desc: "Triển khai CRM, Chatbot (Zalo/Messenger), Email Automation theo luồng kịch bản riêng.",
          icon: MessageSquare
        },
        {
          title: "Giai đoạn 3: Đào tạo & Chuyển giao",
          desc: "Đào tạo đội ngũ nhân sự vận hành hệ thống. Tối ưu hóa theo dữ liệu thực tế.",
          icon: Users
        }
      ]
    }
  };

  function SearchIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }

  return (
    <section id="program-details" className="py-12 md:py-16 bg-surface/30 relative scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">Chi tiết lộ trình đào tạo</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto text-balance">
            Nội dung được thiết kế tinh gọn, tập trung vào thực hành và áp dụng ngay tại lớp.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(Object.keys(content) as Array<keyof typeof content>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {key === 'basic' && 'Basic: Thực Chiến'}
              {key === 'advanced' && 'Advanced: Hệ Thống'}
              {key === 'mentoring' && 'Mentoring 1:1'}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left: Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 text-balance">{content[activeTab].title}</h3>
                <p className="text-purple-400 text-sm font-medium mb-4">{content[activeTab].subtitle}</p>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-2">Phù hợp với:</h4>
                  <p className="text-sm text-slate-400 leading-relaxed text-balance">
                    {content[activeTab].target}
                  </p>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}
                  className="w-full py-3 rounded-xl bg-white text-slate-900 font-bold text-center block hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
                >
                  Đăng ký nhận tư vấn
                </a>
              </div>
            </div>

            {/* Right: Modules */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {content[activeTab].modules.map((module, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-surface border border-slate-800/80 hover:border-primary/40 transition-colors group">
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-primary/20 transition-all">
                        <module.icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-200 group-hover:text-white mb-1 transition-colors">
                        {module.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed text-balance">
                        {module.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 lg:hidden">
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}
                  className="w-full py-3 rounded-xl bg-white text-slate-900 font-bold text-center block hover:bg-slate-200 transition-colors"
                >
                  Đăng ký nhận tư vấn
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
