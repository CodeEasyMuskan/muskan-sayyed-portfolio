
import React from 'react';
import { Github, Linkedin, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-3xl font-black font-montserrat gradient-text tracking-tighter block mb-2">
              MUSKAN.
            </a>
            <p className="text-slate-500 text-sm">Building impact-driven solutions with logic and passion.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/CodeEasyMuskan" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/muskan-s-sayyed" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/codewith.muskan?igsh=MTNzbXpyNTdlNm5lNw==" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.youtube.com/@CodeEasy_withMuskan/videos" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-600">
          <p>© {currentYear} MUSKAN SARFARAZ SAYYED. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1">
            BUILT WITH <Heart size={14} className="text-red-500 fill-red-500" /> AND COFFEE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
