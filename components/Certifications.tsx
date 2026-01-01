import React from 'react';
import { Award, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

interface Certification {
  title: string;
  organization: string;
  date: string;
  imageUrl: string;
  verifyUrl?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Android App Development",
      organization: "Google Developers",
      date: "Dec 2023",
      imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800",
      verifyUrl: "#"
    },
    {
      title: "Python for Data Science",
      organization: "IBM / Coursera",
      date: "Aug 2023",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      verifyUrl: "#"
    },
    {
      title: "Web Architecture Specialist",
      organization: "FreeCodeCamp",
      date: "May 2023",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="mb-16">
        <div className="inline-block px-4 py-1.5 glass border border-purple-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-6">
          <Award size={14} className="inline mr-2" />
          Verified Credentials
        </div>
        <h2 className="text-4xl md:text-7xl font-black font-montserrat tracking-tighter">
          My <span className="gradient-text">Certifications</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="group relative perspective-1000"
          >
            <div className="relative h-full glass rounded-[2.5rem] border border-white/10 p-6 flex flex-col transition-all duration-700 md:group-hover:rotate-x-6 md:group-hover:-rotate-y-6 preserve-3d shadow-2xl">
              
              {/* Thumbnail Container */}
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 preserve-3d" style={{ transform: 'translateZ(20px)' }}>
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                <div className="absolute top-4 right-4 p-2 rounded-full glass border border-white/20 text-white">
                  <ShieldCheck size={16} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 preserve-3d" style={{ transform: 'translateZ(40px)' }}>
                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-2">
                  {cert.organization}
                </p>
                <h3 className="text-xl md:text-2xl font-black font-montserrat text-white leading-tight mb-4">
                  {cert.title}
                </h3>
              </div>

              <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/5 preserve-3d" style={{ transform: 'translateZ(30px)' }}>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{cert.date}</span>
                <a 
                  href={cert.verifyUrl}
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group-hover:scale-110"
                  aria-label="Verify Certificate"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Back Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-500/20 rounded-[2.6rem] blur opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>
          </div>
        ))}

        {/* Future Expansion Card */}
        <div className="group relative">
          <div className="h-full glass rounded-[2.5rem] border border-dashed border-white/10 p-10 flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-all cursor-default">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <Zap size={32} className="text-slate-400" />
            </div>
            <p className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">
              More Coming <br /> Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;