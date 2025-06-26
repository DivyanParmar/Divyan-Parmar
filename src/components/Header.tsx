import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // background: #3F5EFB;
// background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-(radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%))'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-400" />
            <span className="text-xl font-bold text-white">Divyan Parmar</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/DivyanParmar" className="text-white/80 hover:text-white transition-colors duration-200" target='_blank'>
                  <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/divyanparmar/" className="text-white/80 hover:text-white transition-colors duration-200" target='_blank'>
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:divyanparmar3@gmail.com" className="text-white/80 hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">
  <Mail className="h-5 w-5" />
</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-white/20">
                <a href="https://github.com/DivyanParmar" className="text-white/80 hover:text-white transition-colors duration-200">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/divyanparmar/" className="text-white/80 hover:text-white transition-colors duration-200" >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="divyanparmar3@gmail.com" className="text-white/80 hover:text-white transition-colors duration-200">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;