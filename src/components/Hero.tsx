import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="block bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent pb-3">
                Divyan Parmar
              </span>
              Data Scientist  &  AI / ML Engineer
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transforming data into intelligent solutions through cutting-edge machine learning 
              and artificial intelligence technologies
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ExternalLink className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

              
            <a
  href="https://drive.google.com/file/d/1UqHD-yzWA9c-1dRbuuifVBdgf7dYo6eb/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
    Download Resume
    <Download className="inline-block ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-200" />
  </button>
</a>   
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/60">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-white/60">Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-white/60">AI Certifications</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center">
  <button 
    onClick={() => scrollToSection('about')}
    className="text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
  >
    <ChevronDown className="h-8 w-8" />
  </button>
</div>

    </section>
  );
};

export default Hero;