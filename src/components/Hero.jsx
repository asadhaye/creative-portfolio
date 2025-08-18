import { useRef, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import profilePlaceholder from '../assets/profile-placeholder.svg';
import TypingAnimation from './ui/typing-animation';

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Main gradient blob */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{
            left: `${50 + mousePosition.x * 20}%`,
            top: `${50 + mousePosition.y * 20}%`,
            transform: 'translate(-50%, -50%) rotate(5deg)',
            transition: 'all 0.3s ease-out',
            animation: 'pulse-slow 8s infinite alternate, float 15s infinite ease-in-out'
          }}
        />
        {/* Secondary gradient blob */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            left: `${30 - mousePosition.x * 15}%`,
            top: `${70 - mousePosition.y * 15}%`,
            transform: 'translate(-50%, -50%) rotate(-5deg)',
            transition: 'all 0.3s ease-out',
            animation: 'pulse-slow 10s infinite alternate-reverse, float 20s infinite ease-in-out',
            animationDelay: '2s'
          }}
        />
        {/* Small accent blob */}
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-primary/10 to-primary/30 rounded-full blur-2xl"
          style={{
            right: `${20 + mousePosition.x * 10}%`,
            top: `${30 - mousePosition.y * 10}%`,
            transform: 'translate(50%, -50%) rotate(15deg)',
            transition: 'all 0.3s ease-out',
            animation: 'pulse-slow 6s infinite alternate, float 12s infinite ease-in-out',
            animationDelay: '1s'
          }}
        />
        {/* Tiny floating particles */}
        <div 
          className="absolute w-8 h-8 bg-primary/40 rounded-full blur-md"
          style={{
            left: '25%',
            top: '40%',
            animation: 'float-particle 20s infinite linear'
          }}
        />
        <div 
          className="absolute w-6 h-6 bg-blue-500/40 rounded-full blur-md"
          style={{
            right: '15%',
            bottom: '30%',
            animation: 'float-particle 15s infinite linear reverse',
            animationDelay: '3s'
          }}
        />
        <div 
          className="absolute w-4 h-4 bg-purple-500/40 rounded-full blur-sm"
          style={{
            left: '60%',
            bottom: '20%',
            animation: 'float-particle 25s infinite linear',
            animationDelay: '5s'
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative hero-content">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Profile Image */}
          <div className={`mb-8 transition-all duration-1000 delay-100 animate-fade-in-up ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 overflow-hidden rounded-full border-4 border-primary/20 shadow-glow hover:shadow-glow-intense transition-all duration-500">
              <img 
                src={profilePlaceholder} 
                alt="Muhammad Asad Haye" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Main Title with Staggered Animation */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
              <span className={`block transition-all duration-1000 delay-100 animate-fade-in-up heading-primary ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                MUHAMMAD
              </span>
              <span className={`block transition-all duration-1000 delay-200 animate-fade-in-up heading-primary ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                ASAD
              </span>
              <span className={`block transition-all duration-1000 delay-300 animate-fade-in-up heading-primary ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                HAYE
              </span>
            </h1>
          </div>

          {/* Subtitle with Modern Typography */}
          <div className={`mb-6 transition-all duration-1000 delay-400 animate-fade-in-up ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wider uppercase">
              <span className="inline-block mr-4 subtitle-accent">I am a </span>
              <span className="inline-block subtitle-text text-primary">
                <TypingAnimation 
                  texts={["Marketer", "E-Commerce Strategist", "AI Enthusiast", "Digital Innovator"]} 
                  typingSpeed={80} 
                  deletingSpeed={40} 
                  delayBetweenTexts={1500} 
                />
              </span>
            </p>
          </div>
          
          {/* Professional Tagline */}
          <div className={`mb-12 transition-all duration-1000 delay-450 animate-fade-in-up ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              Transforming e-commerce strategies with 15+ years of expertise. Specializing in data-driven marketing solutions that deliver measurable results and exceptional customer experiences.
            </p>
          </div>

          {/* CTA Button with Hover Effects */}
          <div className={`mb-16 transition-all duration-1000 delay-500 animate-fade-in-up ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="btn-primary hover-lift text-lg font-semibold px-12 py-6"
            >
              <span className="relative z-10 flex items-center btn-text-primary">
                View My Work
                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          {/* Social Links with Enhanced Hover Animations */}
          <div className={`flex justify-center space-x-8 transition-all duration-1000 delay-600 animate-fade-in-up ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300 overflow-hidden social-icon-container"
              aria-label="GitHub Profile"
            >
              <span className="absolute inset-0 bg-primary/10 transform scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
              <Github className="h-6 w-6 transition-all duration-300 social-text group-hover:text-primary group-hover:hover-text-primary relative z-10" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300 overflow-hidden social-icon-container"
              aria-label="LinkedIn Profile"
            >
              <span className="absolute inset-0 bg-primary/10 transform scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
              <Linkedin className="h-6 w-6 transition-all duration-300 social-text group-hover:text-primary group-hover:hover-text-primary relative z-10" />
            </a>
            <a
              href="mailto:asad@example.com"
              className="group relative p-4 rounded-full glass-effect hover:scale-110 hover-lift transition-all duration-300 overflow-hidden social-icon-container"
              aria-label="Email Contact"
            >
              <span className="absolute inset-0 bg-primary/10 transform scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
              <Mail className="h-6 w-6 transition-all duration-300 social-text group-hover:text-primary group-hover:hover-text-primary relative z-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Animation */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm uppercase tracking-wider font-light scroll-text">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
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
    </section>
  );
};

export default Hero;
