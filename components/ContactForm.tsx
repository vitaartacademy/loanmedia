
import React, { useState } from 'react';
import { Send, ShieldCheck, Star, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  // --- CẤU HÌNH ---
  // Bạn hãy thay đường link bên dưới bằng link Web App bạn copy từ Google Apps Script
  // Ví dụ: https://script.google.com/macros/s/AKfycbx.../exec
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx_YOUR_ID_HERE/exec"; 
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    level: 'basic',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    // Nếu người dùng chưa thay link script (vẫn dùng link mẫu), ta chỉ giả lập thành công
    if (SCRIPT_URL.includes("YOUR_ID_HERE")) {
        console.warn("Chưa cấu hình Google Sheet URL. Đang chạy chế độ Demo.");
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', phone: '', company: '', level: 'basic', note: '' });
        }, 1500);
        return;
    }
    
    try {
      const formBody = new FormData();
      formBody.append("Thời gian", new Date().toISOString());
      formBody.append("Họ tên", formData.name); // Khớp với tên cột Google Sheet
      formBody.append("name", formData.name);   // Fallback cho email
      formBody.append("SĐT", formData.phone);
      formBody.append("phone", formData.phone);
      formBody.append("Doanh nghiệp", formData.company);
      formBody.append("company", formData.company);
      formBody.append("Cấp độ", formData.level);
      formBody.append("level", formData.level);
      formBody.append("Ghi chú", formData.note);
      formBody.append("note", formData.note);

      // Gửi dữ liệu sang Google Apps Script
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors' // Quan trọng: Google Script yêu cầu no-cors để không bị chặn
      });

      // Vì no-cors không trả về status chuẩn, ta mặc định là thành công nếu không văng lỗi
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', company: '', level: 'basic', note: '' });

    } catch (error) {
      console.error("Error!", error);
      setIsSubmitting(false);
      setErrorMsg('Có lỗi xảy ra khi gửi. Vui lòng thử lại hoặc liên hệ Zalo/Hotline.');
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-background relative scroll-mt-28">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-5/12 bg-slate-900 p-6 md:p-8 flex flex-col justify-between border-r border-slate-800">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 text-balance">Đăng ký tư vấn miễn phí</h2>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Để lại thông tin, chúng tôi sẽ liên hệ trong 24h để xác định cấp độ và lộ trình phù hợp nhất cho doanh nghiệp của bạn.
              </p>
              
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="text-green-500" size={18} />
                  <span className="text-sm font-semibold text-slate-200">Cam kết chất lượng</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-400 pl-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-slate-500 rounded-full" />
                    Tư vấn đúng bài toán
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-slate-500 rounded-full" />
                    Không chèo kéo khóa học
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-slate-500 rounded-full" />
                    Bảo mật thông tin 100%
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-800/50">
               <div className="flex items-center gap-1 text-yellow-500 mb-1.5">
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
                 <Star size={14} fill="currentColor" />
               </div>
               <p className="text-[10px] text-slate-500">Được tin tưởng bởi 50+ Doanh nghiệp SME</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 p-6 md:p-8 bg-slate-800/30 relative">
            {isSuccess ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Đăng ký thành công!</h3>
                <p className="text-slate-300 text-sm mb-6 max-w-xs text-balance">
                  Cảm ơn bạn. Vita Marketing AI đã nhận được thông tin và sẽ liên hệ lại qua Zalo/SĐT trong thời gian sớm nhất.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 rounded-full bg-slate-800 border border-slate-700 text-white text-sm hover:bg-slate-700 transition-colors"
                >
                  Quay lại form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`space-y-4 transition-opacity duration-300 ${isSubmitting ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                {errorMsg && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg text-xs flex items-center gap-2">
                        <AlertCircle size={16} /> {errorMsg}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wide">Họ tên *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wide">SĐT / Zalo *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                      placeholder="0909xxxxxx"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="company" className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wide">Doanh nghiệp / Brand</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-background border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                    placeholder="Công ty TNHH..."
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="level" className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wide">Quan tâm cấp độ</label>
                  <div className="relative">
                    <select 
                      id="level" 
                      name="level" 
                      value={formData.level}
                      onChange={handleChange}
                      className="w-full bg-background border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                    >
                      <option value="basic">Basic – AI Marketing Thực Chiến</option>
                      <option value="advanced">Advanced – Thương Hiệu & Hệ Thống</option>
                      <option value="mentoring">Mentoring – Tự Động Hóa 1:1</option>
                      <option value="unknown">Chưa rõ – Cần tư vấn thêm</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="note" className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wide">Ghi chú thêm</label>
                  <textarea 
                    id="note" 
                    name="note" 
                    rows={2}
                    value={formData.note}
                    onChange={handleChange}
                    className="w-full bg-background border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                    placeholder="Vd: Tôi đang kinh doanh spa, muốn tăng khách hàng..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-bold py-2.5 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-sm md:text-base mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      Gửi thông tin ngay
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
