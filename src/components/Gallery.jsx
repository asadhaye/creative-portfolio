import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion as Motion } from 'framer-motion';
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

  // Responsive columns based on screen width
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
    <section id="gallery" className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Photo Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my photography work showcasing various projects and creative explorations.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="flex flex-wrap -mx-2">
          {getColumnImages().map((column, columnIndex) => (
            <div key={columnIndex} className="px-2 w-full sm:w-1/2 lg:w-1/3">
              <div className="flex flex-col space-y-4">
                {column.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: image.id * 0.1 }}
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
      </div>
    </section>
  );
};

export default Gallery;