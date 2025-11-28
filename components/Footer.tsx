
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-surface border-t border-slate-800 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p>© {currentYear} Vita Marketing AI.</p>
          <p className="text-xs mt-1 text-slate-600">Đào tạo & tư vấn AI Marketing thực chiến.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#top" onClick={(e) => scrollTo(e, 'top')} className="hover:text-primary transition-colors">Trang chủ</a>
          <a href="#programs" onClick={(e) => scrollTo(e, 'programs')} className="hover:text-primary transition-colors">Chương trình</a>
          <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-primary transition-colors">Đăng ký</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
