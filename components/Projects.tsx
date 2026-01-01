import React from 'react';
import { Github, ExternalLink, ShieldAlert, Download, Heart, PhoneCall, MapPin, Share2, ClipboardCheck } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 'safeher',
      title: 'SafeHer – SOS Safety App',
      type: 'Android Development',
      description: 'An advanced safety solution designed for instant intervention. Triggers a loud SOS siren, calls the police, and sends live location to emergency contacts with one tap.',
      tech: ['Java', 'XML', 'Android SDK', 'Firebase'],
      image: null, 
      links: {
        github: null, 
        live: 'https://drive.google.com/file/d/1LXWpZAkZ_jaquIcyYkzmgfkYjF6VUuae/view?usp=drive_link'
      },
      icon: <ShieldAlert size={18} />,
      color: 'pink',
      features: [
        'One-Tap Emergency Activation',
        'Auto SOS SMS with Live Location',
        'Loud Siren & Police Call'
      ]
    },
    {
      id: 'attendance',
      title: 'Attendance System',
      type: 'Institutional Management',
      description: 'A high-performance institutional management platform engineered to digitize academic record-keeping with automated analytics.',
      tech: ['HTML', 'CSS', 'JS', 'SQL', 'PHP'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      links: {
        github: null,
        live: null
      },
      icon: <ClipboardCheck size={18} />,
      color: 'cyan',
      features: [
        'Secure Admin Dashboard',
        'Automated Monthly Reports',
        'Real-time DB Sync'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-4 md:px-0">
      <div className="mb-16 md:mb-20">
        <div className="inline-block px-4 py-1.5 glass border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-6">
          Selected Projects
        </div>
        <h2 className="text-4xl md:text-7xl font-black font-montserrat tracking-tighter">
          Featured <span className="gradient-text">Work</span>
        </h2>
      </div>

      <div className="space-y-24 md:space-y-32">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className={`flex flex-col lg:flex-row gap-10 md:gap-16 items-start lg:items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="w-full lg:w-1/2 group">
              <div className="relative perspective-1000">
                <div className={`relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden glass p-1.5 md:p-2 border border-white/10 shadow-xl transition-all duration-700 md:group-hover:rotate-y-4 md:group-hover:scale-[1.01] ${project.color === 'pink' ? 'group-hover:shadow-pink-500/10' : 'group-hover:shadow-cyan-500/10'}`}>
                  
                  {project.id === 'safeher' ? (
                    <div className="w-full h-[250px] md:h-[400px] bg-slate-950 rounded-[1.6rem] md:rounded-[2rem] flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-transparent opacity-50"></div>
                      
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] bg-gradient-to-br from-[#ff9ea0] via-[#ff7c82] to-[#fd656d] shadow-[0_15px_40px_rgba(255,105,180,0.3)] flex flex-col items-center justify-center p-4 border-4 border-white/20 animate-float relative">
                        <div className="relative flex flex-col items-center border-4 border-pink-900/20 rounded-[1.8rem] w-full h-full flex items-center justify-center">
                          <span className="text-5xl md:text-7xl font-black text-pink-950 leading-none tracking-tighter">Sh</span>
                          <span className="text-[10px] md:text-xs font-black text-pink-950 uppercase tracking-widest mt-1">SafeHer</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={project.image || ''} 
                      alt={project.title} 
                      className="w-full h-[250px] md:h-[400px] object-cover rounded-[1.6rem] md:rounded-[2rem] opacity-70 group-hover:opacity-100 transition-all duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl border flex items-center justify-center ${project.color === 'pink' ? 'bg-pink-500/10 text-pink-500 border-pink-500/20' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'}`}>
                  {project.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">{project.type}</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-black font-montserrat mb-6 tracking-tight">{project.title}</h3>
              <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed font-medium">{project.description}</p>

              {project.features && (
                <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] md:text-xs text-slate-300 font-bold">
                      <div className={`w-1 h-1 rounded-full ${project.color === 'pink' ? 'bg-pink-500' : 'bg-cyan-500'}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              )}

              {project.links.live && (
                <a 
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-sm md:text-base transition-all shadow-xl ${
                    project.id === 'safeher' 
                    ? 'bg-pink-600 text-white hover:bg-pink-500 shadow-pink-600/20' 
                    : 'bg-white text-slate-900 hover:bg-cyan-400'
                  }`}
                >
                  <Download size={20} />
                  Install App
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;