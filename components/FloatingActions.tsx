import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Floating Side Buttons (Desktop/Tablet) */}
      <div className="fixed right-4 bottom-24 md:bottom-8 z-40 flex flex-col gap-3">
        <a 
          href="tel:0909123456" 
          className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30 hover:scale-110 transition-transform duration-200"
          title="Gọi ngay"
        >
          <Phone size={24} />
        </a>
        <a 
          href="https://zalo.me/0909123456" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-200 font-bold text-xl"
          title="Chat Zalo"
        >
          Z
        </a>
        <a 
          href="https://m.me/yourfacebookid" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-sky-500/30 hover:scale-110 transition-transform duration-200"
          title="Messenger"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-lg border-t border-slate-800 p-3">
        <a 
          href="#contact" 
          className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-bold text-sm shadow-lg"
        >
          📩 Đăng ký tư vấn ngay
        </a>
      </div>
    </>
  );
};

export default FloatingActions;