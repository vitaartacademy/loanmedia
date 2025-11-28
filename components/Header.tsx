
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-surface/95 backdrop-blur-md border-slate-800 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-primary/20">
              VA
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-wide uppercase text-base">Vita Marketing AI</span>
              <span className="text-slate-400 text-[11px] uppercase tracking-widest font-medium">AI for Business</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-slate-300">
            <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="hover:text-white transition-colors">Trang chủ</a>
            <a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-white transition-colors">Chương trình</a>
            <a href="#why-us" onClick={(e) => scrollToSection(e, 'why-us')} className="hover:text-white transition-colors">Tại sao chọn Vita</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors">Liên hệ</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
             <a href="#program-details" onClick={(e) => scrollToSection(e, 'program-details')} className="text-base font-medium text-slate-300 hover:text-white transition-colors">
              Xem chi tiết
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white text-base font-semibold shadow-lg shadow-blue-900/40 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Đăng ký tư vấn
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-200 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-slate-800 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-5 gap-4 bg-surface">
          <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="text-slate-200 text-lg font-medium hover:text-accent py-2 border-b border-slate-800/50">Trang chủ</a>
          <a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="text-slate-200 text-lg font-medium hover:text-accent py-2 border-b border-slate-800/50">Chương trình đào tạo</a>
          <a href="#why-us" onClick={(e) => scrollToSection(e, 'why-us')} className="text-slate-200 text-lg font-medium hover:text-accent py-2 border-b border-slate-800/50">Quy trình & Lợi ích</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-accent text-lg font-semibold py-2">Đăng ký ngay</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
