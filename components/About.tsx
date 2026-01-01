import React from 'react';
import { GraduationCap, Trophy, MapPin, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Polished 3D Profile Card */}
        <div className="w-full lg:w-[42%] perspective-2000 group">
          <div className="relative glass rounded-[2.5rem] border border-white/10 p-1 md:p-1.5 shadow-2xl transition-all duration-700 md:group-hover:rotate-y-6 md:group-hover:-rotate-x-3 preserve-3d">
            
            <div className="relative bg-slate-950/40 rounded-[2.3rem] p-8 md:p-10 overflow-hidden preserve-3d">
              {/* Subtle Decor */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl rounded-full translate-z-20"></div>
              
              <div className="flex items-center gap-3 mb-10 translate-z-40">
                <div className="w-8 h-1 bg-cyan-500 rounded-full"></div>
                <h2 className="text-base md:text-lg font-black font-montserrat uppercase tracking-widest text-white">Profile</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6 translate-z-30">
                {[
                  { label: 'Education', val: 'BBA CA Graduate', icon: <GraduationCap />, color: 'text-cyan-400' },
                  { label: 'Performance', val: '9.00 Distinction', icon: <Trophy />, color: 'text-purple-400' },
                  { label: 'Specialization', val: 'Logic Building', icon: <Code />, color: 'text-orange-400' },
                  { label: 'Based In', val: 'Pune, India', icon: <MapPin />, color: 'text-green-400' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center group/item transition-transform hover:translate-x-1">
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${item.color} shadow-lg`}>
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 18 })}
                    </div>
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-600 mb-0.5">{item.label}</p>
                      <p className="text-sm md:text-base font-bold text-slate-200">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="w-full lg:w-[58%]">
          <h3 className="text-3xl md:text-5xl font-black font-montserrat mb-8 leading-tight text-white tracking-tighter">
            Coding with <span className="text-cyan-400">Passion</span>,<br /> 
            Building with <span className="text-purple-400">Logic</span>.
          </h3>
          <div className="space-y-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl font-medium">
            <p>
              I deconstruct complex software logic to build accessible, impactful solutions. My journey as a <span className="text-white font-bold">BBA CA Graduate</span> allows me to merge technical expertise with strategic thinking.
            </p>
            <p>
              Through <span className="text-white font-bold italic">"Code Easy with Muskan"</span>, I help builders bridge the gap between abstract concepts and practical execution.
            </p>
            
            <div className="pt-4">
              <div className="relative p-6 rounded-3xl glass border-l-4 border-cyan-500 shadow-xl transition-all hover:bg-white/5">
                <p className="italic text-slate-200 text-base md:text-lg font-medium leading-relaxed">
                  "I believe that logic is the foundation of every great innovation. My mission is to make technology understandable for everyone."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;