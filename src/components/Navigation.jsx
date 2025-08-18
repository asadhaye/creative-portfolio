import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Github, Mail, Linkedin, Home, User, Briefcase, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-modern ${
        isScrolled
          ? 'bg-background/20 backdrop-blur-md border-b border-border/50 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold nav-text-primary flex items-center gap-2 nav-logo">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center text-white font-bold">
              AH
            </div>
            <span>Asad Haye</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('#home')}
              className="nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 flex items-center gap-2 nav-item"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 flex items-center gap-2 nav-item"
            >
              <User className="h-4 w-4" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className="nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 flex items-center gap-2 nav-item"
            >
              <Briefcase className="h-4 w-4" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 flex items-center gap-2 nav-item"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-80 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-4 space-y-3 border-t border-border/50 px-2">
            <button
              onClick={() => scrollToSection('#home')}
              className="block w-full text-left nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 py-3 px-4 rounded-lg items-center gap-3 hover:bg-primary/10"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="block w-full text-left nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 py-3 px-4 rounded-lg items-center gap-3 hover:bg-primary/10"
            >
              <User className="h-5 w-5" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className="block w-full text-left nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 py-3 px-4 rounded-lg items-center gap-3 hover:bg-primary/10"
            >
              <Briefcase className="h-5 w-5" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="block w-full text-left nav-text-secondary hover:text-primary hover-text-primary transition-all duration-200 py-3 px-4 rounded-lg items-center gap-3 hover:bg-primary/10"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Contact</span>
            </button>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-2 mt-2 border-t border-border/30">
              <a href="#" className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

