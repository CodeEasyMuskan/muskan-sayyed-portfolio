import React, { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import YouTubeSection from './components/YouTubeSection';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] overflow-x-hidden">
      {/* Background blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      
      <main className="container mx-auto px-6 md:px-12 overflow-visible">
        <Hero />
        <About />
        <Projects />
        <YouTubeSection />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;