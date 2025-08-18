import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16 section-modern relative z-10">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl floating-element"
          style={{
            left: `${50 + mousePosition.x * 20}%`,
            top: `${50 + mousePosition.y * 20}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl floating-element"
          style={{
            left: `${30 - mousePosition.x * 15}%`,
            top: `${70 - mousePosition.y * 15}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
            animationDelay: '2s'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold heading-accent mb-4">Asad Haye</h3>
              <p className="body-text-secondary mb-4">
                Full-Stack Developer & E-Commerce Strategist specializing in AI integration 
                and digital marketing solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/asadhaye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300"
                >
                  <Github className="h-5 w-5 social-text hover:text-primary hover-text-primary" />
                </a>
                <a
                  href="https://linkedin.com/in/asadhaye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 social-text hover:text-primary hover-text-primary" />
                </a>
                <a
                  href="mailto:asad@asadhaye.com"
                  className="p-2 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300"
                >
                  <Mail className="h-5 w-5 social-text hover:text-primary hover-text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 heading-secondary">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block body-text-secondary hover:text-primary hover-text-primary transition-all duration-200"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 heading-secondary">Get In Touch</h4>
              <div className="space-y-2">
                <p className="body-text-secondary">email@asadhaye.com</p>
                <p className="body-text-secondary">+92 (313) 844-4321</p>
                <p className="body-text-secondary">Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t">
            <div className="flex items-center body-text-secondary mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>by Muhammad Asad Haye</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="body-text-secondary text-sm">
                © 2025 All rights reserved
              </span>
              
              <Button
                onClick={scrollToTop}
                size="sm"
                className="btn-secondary hover-lift"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
      </div>
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
      </div>
    </footer>
  );
};

export default Footer;

