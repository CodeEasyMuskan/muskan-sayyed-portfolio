import React from 'react';
import { Youtube, Sparkles, ChevronDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[85vh] md:min-h-screen flex flex-col justify-center items-start pt-32 pb-12 relative">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyan-500/20 text-cyan-400 text-[9px] font-black uppercase tracking-[0.2em] mb-6 opacity-0 animate-reveal-text [animation-delay:100ms]" style={{ animationFillMode: 'forwards' }}>
          <span className="animate-pulse flex items-center gap-2">
            <Sparkles size={10} />
            Tech Creator
          </span>
        </div>

        {/* Name with Peeking Character */}
        <div className="mb-6 relative inline-block">
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-montserrat tracking-tighter leading-[1.1] opacity-0 animate-reveal-text [animation-delay:300ms]" style={{ animationFillMode: 'forwards' }}>
            Hi, I’m <br className="sm:hidden" />
            <span className="relative">
              Muska
              <span className="relative inline-block">
                {'n'}
                {/* Ultra Cute Peeking Girl Character Container - Increased dimensions to prevent clipping */}
                <div className="absolute -top-16 sm:-top-24 md:-top-28 left-1/2 -translate-x-1/2 w-36 sm:w-48 md:w-52 h-36 sm:h-48 md:h-52 -z-10 pointer-events-none flex justify-center overflow-visible">
                  <div className="relative animate-character-peek sm:animate-none md:animate-character-peek flex flex-col items-center overflow-visible">
                     
                     {/* Refined Speech Bubble - Adjusted positioning */}
                     <div className="absolute -top-6 sm:-top-8 xs:-right-10 -right-16 sm:-right-20 z-50 animate-bubble pointer-events-none">
                        <div className="relative glass px-3 py-2 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
                           <span className="text-[10px] sm:text-xs font-black text-cyan-400 uppercase tracking-tighter whitespace-nowrap block">Hii! 👋</span>
                           {/* Tail of the bubble */}
                           <div className="absolute -bottom-1 left-3 w-2.5 h-2.5 bg-[#0a0f20] border-r border-b border-white/10 rotate-45"></div>
                        </div>
                     </div>
                     
                     {/* Cutest Chibi-style Girl SVG */}
                     <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-20 sm:w-28 sm:h-34 filter drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                       {/* Hair Back */}
                       <path d="M10 45C10 20 25 10 45 10C65 10 80 20 80 45V75H10V45Z" fill="#140D07" />
                       
                       {/* Face */}
                       <circle cx="45" cy="50" r="28" fill="#FDE0A6" />
                       
                       {/* Sparkling Chibi Eyes */}
                       <g className="animate-pulse">
                         <circle cx="35" cy="48" r="4" fill="#2D3748" />
                         <circle cx="55" cy="48" r="4" fill="#2D3748" />
                         <circle cx="36" cy="46" r="1.5" fill="white" />
                         <circle cx="56" cy="46" r="1.5" fill="white" />
                       </g>
                       
                       {/* Cuter Blush */}
                       <circle cx="30" cy="58" r="3" fill="#F687B3" opacity="0.6" />
                       <circle cx="60" cy="58" r="3" fill="#F687B3" opacity="0.6" />
                       
                       {/* Small Sweet Mouth */}
                       <path d="M42 60C42 60 45 63 48 60" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" />
                       
                       {/* Hair Front with Shine */}
                       <path d="M10 50C10 25 25 10 45 10C65 10 80 25 80 50C80 50 65 32 45 32C25 32 10 50 10 50Z" fill="#2D1A10" />
                       
                       {/* Bright Teal Hoodie */}
                       <path d="M20 80C20 80 20 110 45 110C70 110 70 80 70 80H20Z" fill="#0EA5E9" />
                       
                       {/* Waving Tiny Hand */}
                       <g>
                         <style>
                           {`
                             @keyframes waveTiny {
                               0%, 100% { transform: rotate(0deg); }
                               50% { transform: rotate(-25deg); }
                             }
                             .wave-tiny { animation: waveTiny 1.2s ease-in-out infinite; transform-origin: 70px 80px; }
                           `}
                         </style>
                         <path d="M70 75C70 75 82 77 86 86" stroke="#FDE0A6" strokeWidth="8" strokeLinecap="round" className="wave-tiny" />
                       </g>
                     </svg>
                  </div>
                </div>
              </span>
            </span>
            <span className="gradient-text ml-4">Sayyed</span>
          </h1>
        </div>
        
        {/* Bio */}
        <div className="max-w-2xl mb-10 opacity-0 animate-reveal-text [animation-delay:500ms]" style={{ animationFillMode: 'forwards' }}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-medium leading-relaxed">
            a passionate tech developer and content creator. I build web and mobile apps, solve real-world problems, and share coding knowledge to help others grow.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 opacity-0 animate-reveal-text [animation-delay:700ms]" style={{ animationFillMode: 'forwards' }}>
          <a 
            href="https://www.youtube.com/@CodeEasy_withMuskan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 py-3 sm:px-10 sm:py-5 rounded-2xl bg-white text-slate-900 font-black text-sm sm:text-base md:text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.05)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyan-400 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <Youtube size={24} className="text-red-600 relative z-10" />
            <span className="relative z-10 uppercase tracking-widest">Join on YouTube</span>
          </a>
          
          <a 
            href="#" 
            className="group relative inline-flex items-center gap-4 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl glass border border-white/20 text-white font-black text-sm sm:text-base md:text-lg transition-all hover:scale-105 active:scale-95 hover:bg-white/5"
          >
            <FileText size={24} className="text-cyan-400" />
            <span className="uppercase tracking-widest">View Resume</span>
          </a>
        </div>
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[300px] bg-cyan-600/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 opacity-20 animate-bounce hidden md:block">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
