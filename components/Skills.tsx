import React, { useState } from 'react';
import { 
  Smartphone, Globe, Code, Terminal, 
  Database, Layers, Cpu, 
  Settings, FileJson, MessageSquare, Zap
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Mobile Architecture",
      accent: "text-green-400",
      glowClass: "skill-glow-green",
      description: "Building robust Android experiences with modern SDKs.",
      skills: [
        { name: "Android SDK", icon: <Smartphone />, level: "Expert" },
        { name: "Java Core", icon: <Terminal />, level: "Advanced" },
        { name: "Firebase", icon: <MessageSquare />, level: "Intermediate" },
        { name: "XML Layouts", icon: <Code />, level: "Expert" },
      ]
    },
    {
      title: "Web Development",
      accent: "text-cyan-400",
      glowClass: "skill-glow-cyan",
      description: "Crafting scalable, responsive web systems and interfaces.",
      skills: [
        { name: "JavaScript", icon: <Code />, level: "Advanced" },
        { name: "Node.js", icon: <Cpu />, level: "Intermediate" },
        { name: "HTML/CSS", icon: <Layers />, level: "Expert" },
        { name: "React Web", icon: <Globe />, level: "Advanced" },
      ]
    },
    {
      title: "Logic & Scalability",
      accent: "text-purple-400",
      glowClass: "skill-glow-purple",
      description: "Designing efficient data flows and algorithmic solutions.",
      skills: [
        { name: "Python", icon: <Terminal />, level: "Advanced" },
        { name: "PostgreSQL", icon: <Database />, level: "Advanced" },
        { name: "REST APIs", icon: <Settings />, level: "Intermediate" },
        { name: "JSON Data", icon: <FileJson />, level: "Expert" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-0 relative">
      {/* Decorative Rotating Circles Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[45rem] h-[45rem] border-[1px] border-dashed border-cyan-500/30 rounded-full animate-[spin_80s_linear_infinite]"></div>
        <div className="absolute w-[35rem] h-[35rem] border-[1px] border-dashed border-purple-500/30 rounded-full animate-[spin_50s_linear_infinite_reverse]"></div>
        <div className="absolute w-[25rem] h-[25rem] border-[1px] border-solid border-white/5 rounded-full"></div>
      </div>

      <div className="mb-20">
        <div className="inline-block px-4 py-1.5 glass border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-6">
          <Zap size={12} className="inline mr-2" />
          Technical Proficiency
        </div>
        <h2 className="text-4xl md:text-7xl font-black font-montserrat tracking-tighter">
          My <span className="gradient-text">Stack</span>
        </h2>
      </div>

      <div className="space-y-32">
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="relative group perspective-2000">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
              
              {/* Category Sidebar Info */}
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-1.5 rounded-full ${category.accent.replace('text-', 'bg-')}`}></div>
                  <h3 className={`text-2xl md:text-3xl font-black font-montserrat uppercase tracking-tight ${category.accent}`}>{category.title}</h3>
                </div>
                <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-sm">
                  {category.description}
                </p>
                <div className="mt-8 flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping"></div>
                   <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-500">Tap to engage 3D pulse</p>
                </div>
              </div>

              {/* Pronounced 3D Staggered Cards */}
              <div className="lg:w-2/3 grid grid-cols-2 gap-6 md:gap-10 preserve-3d">
                {category.skills.map((skill, idx) => {
                  const isActive = activeSkill === skill.name;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => {
                        setActiveSkill(skill.name);
                        setTimeout(() => setActiveSkill(null), 1000);
                      }}
                      className={`group relative h-44 md:h-64 preserve-3d transition-all duration-700 cursor-pointer
                        md:hover:rotate-x-[15deg] md:hover:-rotate-y-[15deg] md:hover:translate-y-[-10px]
                        active:scale-95
                        ${isActive ? category.glowClass : 'hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)]'}
                      `}
                    >
                      {/* Depth Layer: Bottom Shadow/Glow (Visible on hover/active) */}
                      <div className={`absolute inset-4 rounded-[2.5rem] md:rounded-[3.5rem] bg-black/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}></div>
                      
                      {/* Main Card Base Layer */}
                      <div className={`absolute inset-0 glass rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-white/5 transition-all duration-500 overflow-hidden
                        ${isActive ? 'bg-white/20 border-white/40 shadow-[0_0_60px_rgba(255,255,255,0.1)]' : 'md:group-hover:border-white/20 md:group-hover:bg-white/10'}
                      `}>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                      </div>
                      
                      {/* Multi-Layered Content with Z-Depth */}
                      <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-10 preserve-3d">
                        
                        {/* Icon Layer (High Depth) */}
                        <div 
                          className={`${category.accent} mb-6 transform transition-all duration-700 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]`}
                          style={{ transform: 'translateZ(60px)' }}
                        >
                          {React.cloneElement(skill.icon as React.ReactElement<any>, { size: 48, strokeWidth: 1.2 })}
                        </div>

                        {/* Text Layer (Medium Depth) */}
                        <div 
                          className="flex flex-col items-center gap-1"
                          style={{ transform: 'translateZ(40px)' }}
                        >
                          <span className="text-xs md:text-base font-black text-white uppercase tracking-[0.2em] text-center drop-shadow-xl">
                            {skill.name}
                          </span>
                          
                          {/* Skill Level Badge (Low Depth) */}
                          <div className={`mt-4 px-5 py-2 rounded-full bg-black/60 border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 transition-all duration-500 
                            ${isActive ? 'opacity-100 scale-110 text-white bg-white/10 border-white/20' : 'opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-[-5px]'}
                          `}>
                            {skill.level}
                          </div>
                        </div>
                      </div>

                      {/* Satisfaction Pulse Ripple */}
                      {isActive && (
                        <div className={`absolute -inset-2 rounded-[2.7rem] md:rounded-[3.7rem] border-2 animate-ping opacity-40 ${category.accent.replace('text-', 'border-')}`}></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual Stacking Continuity */}
            {catIdx < skillCategories.length - 1 && (
              <div className="hidden lg:block absolute -bottom-24 left-6 w-1 h-16 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;