import React, { useState, useRef } from 'react';
import { Youtube, PlayCircle, Star, Brain, Code, Terminal, ExternalLink, Zap } from 'lucide-react';

const YouTubeSection: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const channelUrl = "https://www.youtube.com/@CodeEasy_withMuskan";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="youtube" className="py-24 relative px-4 md:px-0 overflow-visible">
      <div className="mb-14 text-center lg:text-left">
        <div className="inline-block px-4 py-1.5 glass border border-red-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-red-400 mb-6">
          <Youtube size={14} className="inline mr-2" />
          Channel Spotlight
        </div>
        <h2 className="text-4xl md:text-7xl font-black font-montserrat tracking-tighter">
          Code Easy <span className="text-red-500">with Muskan</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center overflow-visible">
        {/* 3D Hacker Card */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full lg:w-1/2 perspective-2000 py-16 px-4 sm:px-8 overflow-visible"
        >
          <div 
            className="relative w-full max-w-[450px] aspect-[4/3] mx-auto preserve-3d transition-transform duration-300 ease-out cursor-pointer"
            style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
          >
            <div className="absolute inset-0 preserve-3d">
               {/* Main Card Body */}
               <div className="absolute inset-0 glass rounded-[2.5rem] border-2 border-red-500/20 bg-slate-950/90 shadow-[0_0_80px_rgba(239,68,68,0.15)] flex flex-col p-8 preserve-3d">
                 {/* Header Bar */}
                 <div className="flex justify-between items-center mb-10 translate-z-20">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/60 animate-pulse"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                   </div>
                   <div className="text-[10px] font-mono text-red-400/80 uppercase tracking-widest bg-red-500/10 px-2 py-0.5 rounded">root@muskan-dev:~/youtube</div>
                 </div>

                 {/* Central Content */}
                 <div className="flex-1 flex flex-col justify-center items-center text-center translate-z-60">
                   <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.5)] mb-8 animate-float">
                     <PlayCircle size={48} className="text-white fill-white/10" />
                   </div>
                   <h3 className="text-3xl font-black font-montserrat tracking-tighter text-white mb-2">CodeEasy</h3>
                   <p className="text-xs font-mono text-slate-400 mb-8 tracking-[0.3em] uppercase">Simplifying Tech Logic</p>
                   
                   {/* Stats Grid */}
                   <div className="grid grid-cols-2 gap-4 w-full translate-z-40">
                     <div className="glass p-4 rounded-[1.5rem] border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                       <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Curriculum</p>
                       <p className="text-sm font-black text-white">AI & Python</p>
                     </div>
                     <div className="glass p-4 rounded-[1.5rem] border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                       <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Core Focus</p>
                       <p className="text-sm font-black text-white">DSA Visuals</p>
                     </div>
                   </div>
                 </div>

                 {/* Bottom Decoration */}
                 <div className="mt-8 opacity-40 font-mono text-[8px] flex justify-between uppercase tracking-widest translate-z-20">
                   <span>0xMuskan_Logic_Engine</span>
                   <span>Status: Optimized</span>
                 </div>
               </div>

               {/* Floating Accents */}
               <div className="absolute -top-12 -right-10 w-24 h-24 glass rounded-[2rem] flex items-center justify-center text-red-500 border-red-500/40 translate-z-100 animate-float shadow-2xl backdrop-blur-xl z-[60]">
                 <Zap size={32} />
               </div>
               <div className="absolute -bottom-8 -left-10 w-20 h-20 glass rounded-2xl flex items-center justify-center text-cyan-400 border-cyan-500/40 translate-z-80 animate-pulse shadow-2xl backdrop-blur-xl z-[60]">
                 <Code size={28} />
               </div>
            </div>
          </div>
        </div>

        {/* Narrative Side */}
        <div className="w-full lg:w-1/2">
          <p className="text-2xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight font-montserrat">
            Deconstructing software into <span className="text-red-500">logic-first</span> tutorials.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-red-500 shrink-0 shadow-lg border-red-500/20">
                <Star size={24} />
              </div>
              <div>
                <h4 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-2">Master Python</h4>
                <p className="text-base text-slate-400 font-medium leading-relaxed">Structured learning path from basic syntax to advanced algorithmic thinking.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-indigo-400 shrink-0 shadow-lg border-indigo-500/20">
                <Brain size={24} />
              </div>
              <div>
                <h4 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-2">DSA Visualized</h4>
                <p className="text-base text-slate-400 font-medium leading-relaxed">Simplifying complex data structures through intuitive visual breakdown.</p>
              </div>
            </div>
          </div>

          <a 
            href={channelUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-5 px-12 py-6 rounded-[2rem] bg-white text-slate-900 font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-500/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-red-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="relative z-10 flex items-center gap-3 tracking-widest">
              <PlayCircle size={28} className="group-hover:text-white transition-colors" />
              SUBSCRIBE NOW
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;