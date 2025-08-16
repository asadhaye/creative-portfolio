import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform with AI',
      description: 'Full-stack e-commerce solution with AI-powered product recommendations and automated customer service.',
      image: '/api/placeholder/400/250',
      category: 'ecommerce',
      technologies: ['Next.js', 'Node.js', 'Shopify API', 'OpenAI', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Digital Marketing Dashboard',
      description: 'Comprehensive analytics dashboard for tracking multi-channel marketing campaigns and ROI.',
      image: '/api/placeholder/400/250',
      category: 'marketing',
      technologies: ['React', 'D3.js', 'Node.js', 'Google Analytics API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool for e-commerce product descriptions and marketing copy.',
      image: '/api/placeholder/400/250',
      category: 'ai',
      technologies: ['React', 'HuggingFace', 'OpenAI API', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'MedusaJS Store Builder',
      description: 'Custom e-commerce store builder using MedusaJS with advanced customization options.',
      image: '/api/placeholder/400/250',
      category: 'ecommerce',
      technologies: ['MedusaJS', 'React', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Interactive Portfolio Site',
      description: 'Award-winning portfolio website with Three.js animations and GSAP interactions.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['Three.js', 'GSAP', 'React', 'WebGL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 6,
      title: 'WooCommerce Automation Suite',
      description: 'Complete automation solution for WooCommerce stores with inventory and order management.',
      image: '/api/placeholder/400/250',
      category: 'ecommerce',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'ai', label: 'AI Development' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'web', label: 'Web Development' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate .proj-card elements
      gsap.from(
        '.proj-card',
        {
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Animate section title
      gsap.fromTo(
        '.section-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    
    // Animate filter change
    gsap.fromTo(
      '.project-card',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05 }
    );
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 section-title">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my latest work in full-stack development, e-commerce solutions, AI integration, and digital marketing.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'default' : 'outline'}
                onClick={() => handleFilterChange(category.id)}
                className="transition-all duration-300 hover:scale-105"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className={`proj-card overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

