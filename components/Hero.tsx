
import React from 'react';
import { ArrowRight, Zap, TrendingUp, CheckCircle2, Bot, BarChart3, Users, UserCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-20 pb-8 md:pt-28 md:pb-12 overflow-hidden scroll-mt-28">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Reduced gap further to gap-8 lg:gap-10 for tighter layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 w-fit mx-auto lg:mx-0 mb-4 backdrop-blur-sm shadow-lg shadow-black/20">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-200 tracking-wide">Đào tạo & Tư vấn AI Marketing Thực Chiến</span>
            </div>

            {/* Optimized Headline: Adjusted size and spacing */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.15] mb-4 text-balance">
              Làm chủ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">AI Marketing</span> <br className="hidden lg:block"/> trong doanh nghiệp.
            </h1>

            <p className="text-slate-300 text-lg mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light text-pretty">
              Vita Marketing AI giúp doanh nghiệp nhỏ, spa, trung tâm ứng dụng AI để <strong className="text-white font-semibold">xây dựng thương hiệu</strong>, tối ưu chi phí và <strong className="text-white font-semibold">tự động hóa</strong> quy trình bán hàng.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
              <a 
                href="#programs"
                onClick={(e) => { e.preventDefault(); document.getElementById('programs')?.scrollIntoView({behavior: 'smooth'}); }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-base font-semibold shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1"
              >
                Xem 3 chương trình
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-surface hover:bg-slate-800 border border-slate-700 text-slate-200 text-base font-medium transition-all"
              >
                Tư vấn miễn phí
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm md:text-base text-slate-400 mb-6">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-accent" />
                <span>Thực chiến ra đơn</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-accent" />
                <span>Lộ trình rõ ràng</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-accent" />
                <span>Mentoring 1:1</span>
              </div>
            </div>

            {/* Founder Bio Section - Compacted */}
            <div className="pt-4 border-t border-slate-800/60 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 text-center lg:text-left">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 shadow-lg">
                  <UserCheck size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wider mb-0.5">Founder & Trainer</div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-0.5">Nguyễn Phương Loan</h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-snug text-balance">
                    Chuyên đào tạo & đồng hành triển khai AI Marketing cho doanh nghiệp nhỏ, spa, thương hiệu cá nhân.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative w-full max-w-[500px] lg:max-w-none mx-auto">
            {/* Main Dashboard Card */}
            <div className="relative rounded-2xl bg-surface border border-slate-800/80 overflow-hidden shadow-2xl shadow-black/60 z-20 backdrop-blur-sm">
              
              {/* Card Header */}
              <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">AI System</div>
              </div>

              <div className="p-5 md:p-7 space-y-5">
                
                {/* Header Stats */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-slate-400 text-xs md:text-sm font-medium mb-1">Hiệu quả chiến dịch</h3>
                    <div className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                      +125.4% 
                      <span className="text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1">
                        <TrendingUp size={12} /> Tăng trưởng
                      </span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 animate-pulse">
                    <Bot size={18} />
                  </div>
                </div>

                {/* Funnel Visual - Compacted */}
                <div className="space-y-3">
                  {/* Stage 1 */}
                  <div className="relative">
                    <div className="flex justify-between text-xs md:text-sm mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                        <Users size={14} className="text-blue-400"/> Tiếp cận
                      </span>
                      <span className="font-mono text-white">15,420</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-full rounded-full" />
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className="relative pl-3">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 border-l border-dashed border-slate-700"></div>
                    <div className="flex justify-between text-xs md:text-sm mb-1">
                      <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                        <BarChart3 size={14} className="text-purple-400"/> Tương tác
                      </span>
                      <span className="font-mono text-white">4,285</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 w-[65%] rounded-full relative overflow-hidden">
                         <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12"></div>
                      </div>
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className="relative pl-3">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 border-l border-dashed border-slate-700"></div>
                    <div className="flex justify-between text-xs md:text-sm mb-1">
                      <span className="flex items-center gap-1.5 text-white font-bold">
                        <CheckCircle2 size={14} className="text-accent"/> Chuyển đổi
                      </span>
                      <span className="font-mono text-accent font-bold text-base">856</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden border border-accent/20">
                      <div className="h-full bg-gradient-to-r from-orange-600 to-accent w-[35%] rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                    </div>
                  </div>
                </div>

                {/* Channel Distribution */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800/60">
                  <div className="text-center">
                    <div className="text-[9px] md:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Facebook</div>
                    <div className="text-sm md:text-base font-bold text-white">45%</div>
                    <div className="h-1 w-5 mx-auto bg-blue-600 rounded-full mt-1 opacity-80"></div>
                  </div>
                  <div className="text-center relative">
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-800/60"></div>
                    <div className="text-[9px] md:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">TikTok</div>
                    <div className="text-sm md:text-base font-bold text-white">32%</div>
                    <div className="h-1 w-5 mx-auto bg-black border border-slate-700 rounded-full mt-1 opacity-80"></div>
                  </div>
                  <div className="text-center relative">
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-800/60"></div>
                    <div className="text-[9px] md:text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Website</div>
                    <div className="text-sm md:text-base font-bold text-white">23%</div>
                    <div className="h-1 w-5 mx-auto bg-green-500 rounded-full mt-1 opacity-80"></div>
                  </div>
                </div>

                {/* AI Notification Toast */}
                <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-700/60 flex items-center gap-3 backdrop-blur-md shadow-lg">
                   <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0 border border-green-500/20">
                      <Zap size={14} fill="currentColor" />
                   </div>
                   <div>
                      <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wide">AI Optimization</p>
                      <p className="text-xs text-white font-bold">Đã tối ưu chi phí ads -18%</p>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
