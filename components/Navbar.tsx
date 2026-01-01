import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, ChevronRight, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'YouTube', href: '#youtube' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certs', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const youtubeUrl = "https://www.youtube.com/@CodeEasy_withMuskan";

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-black font-montserrat tracking-tighter flex items-center gap-1">
          <span className="gradient-text">MUSKAN</span>
          <span className="text-white opacity-20">/</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.2em] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex gap-3 ml-2">
            <a 
              href="#" 
              className="px-4 py-2.5 rounded-xl glass border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <FileText size={12} />
              RESUME
            </a>
            <a 
              href={youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-white text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all shadow-xl"
            >
              SUBSCRIBE
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 rounded-xl glass border border-white/10 text-white" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"></div>
        
        <div className="relative h-full flex flex-col justify-center px-10 space-y-8">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-4xl font-black text-white flex items-center justify-between group py-2" 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <ChevronRight className="text-cyan-500" size={24} />
              </a>
            ))}
          </div>

          <div className="pt-10 border-t border-white/10 space-y-4">
            <a 
              href="#" 
              className="w-full py-5 rounded-2xl glass border border-white/10 text-white text-center font-black text-lg flex items-center justify-center gap-3"
            >
              <FileText size={24} />
              RESUME
            </a>
            <a 
              href={youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-5 rounded-2xl bg-white text-slate-950 text-center font-black text-lg flex items-center justify-center gap-3"
            >
              <Youtube size={24} className="text-red-600" />
              YOUTUBE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;