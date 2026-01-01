
import React from 'react';
import { Mail, Send, Linkedin, Instagram, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="glass rounded-[3rem] border border-white/10 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-10 md:p-16 bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border-r border-white/10">
            <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-8">Let's <br />Connect.</h2>
            <p className="text-lg text-slate-400 mb-12">
              Have a project in mind, an internship opportunity, or just want to talk tech? Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <a href="mailto:muskansayyed9527@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Email Me</p>
                  <p className="text-lg font-bold">muskansayyed9527@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/muskan-s-sayyed" target="_blank" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-900 transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500">LinkedIn</p>
                  <p className="text-lg font-bold">Muskan S. Sayyed</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Current Base</p>
                  <p className="text-lg font-bold">Pune, MH, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-10 md:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Muskan S." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Internship Inquiry" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Hi Muskan, I saw your SafeHer app..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 rounded-2xl bg-cyan-500 text-slate-900 font-black text-lg hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-3"
              >
                Send Message
                <Send size={20} />
              </button>
              
              <p className="text-center text-xs text-slate-500 mt-4 italic">
                Note: Form is currently static. Please email me directly for immediate response.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
