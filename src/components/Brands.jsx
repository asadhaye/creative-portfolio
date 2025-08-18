import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion as Motion } from 'framer-motion';

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
    <section id="brands" className="py-20 px-4 md:px-8 lg:px-16 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Brands & Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've had the pleasure of working with these amazing companies on various projects.
          </p>
        </motion.div>

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
              className="flex flex-col items-center justify-center p-6 rounded-lg glass-effect-dark transition-all duration-300"
            >
              <div className="w-full h-24 flex items-center justify-center mb-4">
                <img 
                  src={brand.src} 
                  alt={brand.alt} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              <p className="text-sm font-medium text-foreground/80">{brand.name}</p>
            </motion.div>
        ))}
      </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
          >
            Work with me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;