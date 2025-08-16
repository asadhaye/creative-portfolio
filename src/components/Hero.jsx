import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const useHeroAnimations = (containerRef) => {
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Fade in .hero-line
      gsap.fromTo(
        '.hero-line',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
      );

      // Parallax effect on .hero-parallax
      gsap.to('.hero-parallax', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-parallax',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);

  // Existing GSAP timeline
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        socialRef.current.children,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.2'
      );
  }, []);

  // New hook for .hero-line and .hero-parallax
  useHeroAnimations(heroRef);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text hero-line"
          >
            Muhammad Asad Haye
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto hero-line"
          >
            Full-Stack Developer • E-Commerce Strategist • AI Enthusiast
          </p>
          
          <div ref={ctaRef} className="mb-12 hero-line">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="glass-effect hover:scale-105 transition-transform duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div ref={socialRef} className="flex justify-center space-x-6 hero-parallax">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:scale-110 transition-transform duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:asad@example.com"
              className="p-3 rounded-full glass-effect hover:scale-110 transition-transform duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;

