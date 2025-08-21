'use client'

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion'
import { X } from 'lucide-react';

// Import placeholder images
import galleryImage1 from '../assets/gallery-placeholder-1.svg';
import galleryImage2 from '../assets/gallery-placeholder-2.svg';
import galleryImage3 from '../assets/gallery-placeholder-3.svg';
import galleryImage4 from '../assets/gallery-placeholder-4.svg';
import galleryImage5 from '../assets/gallery-placeholder-5.svg';
import galleryImage6 from '../assets/gallery-placeholder-6.svg';

const galleryImages = [
  { id: 1, src: galleryImage1, alt: 'Gallery Image 1', width: 400, height: 300 },
  { id: 2, src: galleryImage2, alt: 'Gallery Image 2', width: 400, height: 600 },
  { id: 3, src: galleryImage3, alt: 'Gallery Image 3', width: 500, height: 300 },
  { id: 4, src: galleryImage4, alt: 'Gallery Image 4', width: 600, height: 500 },
  { id: 5, src: galleryImage5, alt: 'Gallery Image 5', width: 400, height: 400 },
  { id: 6, src: galleryImage6, alt: 'Gallery Image 6', width: 500, height: 400 },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [columns, setColumns] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);
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

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  // Organize images into columns for masonry layout
  const getColumnImages = () => {
    const columnImages = Array.from({ length: columns }, () => []);
    
    galleryImages.forEach((image, index) => {
      const columnIndex = index % columns;
      columnImages[columnIndex].push(image);
    });
    
    return columnImages;
  };

  return (
    <section id="gallery" className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16">
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
            ref={galleryRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary">
              Photo Gallery
            </h2>
            <p className="text-xl body-text-secondary max-w-3xl mx-auto">
              A collection of my photography work showcasing various projects and creative explorations.
            </p>
          </div>

          {/* Masonry Gallery */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="flex flex-wrap -mx-2">
              {getColumnImages().map((column, columnIndex) => (
                <div key={columnIndex} className="px-2 w-full sm:w-1/2 lg:w-1/3">
                  <div className="flex flex-col space-y-4">
                    {column.map((image) => (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="overflow-hidden rounded-lg cursor-pointer glass-effect"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" 
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Gallery;