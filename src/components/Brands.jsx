'use client'
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

// Import brand logos
import brandLogo1 from '../assets/brand-logo-1.svg';
import brandLogo2 from '../assets/brand-logo-2.svg'; 
import brandLogo3 from '../assets/brand-logo-3.svg';
import brandLogo4 from '../assets/brand-logo-4.svg';

const brandLogos = [
  { id: 1, src: brandLogo1, alt: 'Brand 1', name: 'Company One' },
  { id: 2, src: brandLogo2, alt: 'Brand 2', name: 'Company Two' },
  { id: 3, src: brandLogo3, alt: 'Brand 3', name: 'Company Three' },
  { id: 4, src: brandLogo4, alt: 'Brand 4', name: 'Company Four' },
  { id: 5, src: brandLogo1, alt: 'Brand 5', name: 'Company Five' },
  { id: 6, src: brandLogo2, alt: 'Brand 6', name: 'Company Six' },
  { id: 7, src: brandLogo3, alt: 'Brand 7', name: 'Company Seven' },
  { id: 8, src: brandLogo4, alt: 'Brand 8', name: 'Company Eight' },
];

const Brands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isVisible, setIsVisible] = useState(false);
  const brandsRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (brandsRef.current) {
      observer.observe(brandsRef.current);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section id="brands" className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            ref={brandsRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary">
              Brands & Clients
            </h2>
            <p className="text-xl body-text-secondary max-w-3xl mx-auto">
              I've had the pleasure of working with these amazing companies on various projects.
            </p>
          </div>

          {/* Brands Grid */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {brandLogos.map((brand) => (
                <motion.div
                  key={brand.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-6 rounded-lg glass-effect hover-lift transition-all duration-300"
                >
                  <div className="w-full h-24 flex items-center justify-center mb-4">
                    <img 
                      src={brand.src} 
                      alt={brand.alt} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <p className="text-sm font-medium body-text-primary">{brand.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 heading-secondary">
                Ready to collaborate?
              </h3>
              <p className="body-text-secondary mb-6">
                Let's work together to bring your vision to life with innovative solutions.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full btn-primary hover-lift text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Work with me
              </motion.a>
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
    </section>
  );
};

export default Brands;