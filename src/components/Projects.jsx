import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "AVPN Platform",
      description: "A comprehensive VPN solution with military-grade encryption, global server network, and cross-platform compatibility.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "Node.js", "Three.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Analytics Dashboard",
      description: "Real-time analytics platform for e-commerce businesses with AI-powered insights and predictive analytics.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "AI Marketing Automation",
      description: "Intelligent marketing automation platform using machine learning for personalized customer engagement.",
      image: "/api/placeholder/600/400",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio website with Three.js animations and interactive elements.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "Three.js", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Digital Marketing Suite",
      description: "Comprehensive digital marketing tools including SEO, social media, and email marketing automation.",
      image: "/api/placeholder/600/400",
      category: "marketing",
      technologies: ["Vue.js", "Laravel", "Redis", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Blockchain Analytics",
      description: "Real-time blockchain data analysis and visualization platform for cryptocurrency traders.",
      image: "/api/placeholder/600/400",
      category: "ai",
      technologies: ["React", "Python", "Web3.js", "InfluxDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'marketing', label: 'Digital Marketing' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const handleFilterChange = (newFilter) => {
    setActiveFilter(newFilter);
  };

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

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16 section-modern">
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
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            ref={projectsRef}
            className={`text-center mb-16 transition-all duration-1000 animate-fade-in-up ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 heading-primary">
              Featured Work
            </h2>
            <p className="text-xl body-text-secondary max-w-3xl mx-auto">
              A collection of innovative projects that showcase my expertise in web development, 
              AI integration, and digital marketing strategy.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 animate-fade-in-up ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${
                  activeFilter === filter.id
                    ? 'btn-primary shadow-glow'
                    : 'btn-secondary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group transition-all duration-1000 delay-${Math.min(index * 100, 500)} animate-fade-in-up ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <Card className="card-modern group relative overflow-hidden hover-lift">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video rounded-t-xl">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary/50">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        asChild
                        size="sm"
                        className="btn-primary"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="btn-secondary"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-primary to-purple-500 text-white border-0 shadow-glow">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold heading-secondary group-hover:text-primary group-hover:hover-text-primary transition-all duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="body-text-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-white/5 border border-white/10 text-muted-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-3 pt-2">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 btn-primary"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 btn-secondary"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Source
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-700 animate-fade-in-up ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 heading-secondary">
                Ready to start your next project?
              </h3>
              <p className="body-text-secondary mb-6">
                Let's collaborate to bring your ideas to life with cutting-edge technology and innovative design.
              </p>
              <Button
                asChild
                size="lg"
                className="btn-primary hover-lift px-8 py-4 text-lg font-semibold"
              >
                <a href="#contact">
                  Let's Talk
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
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
    </section>
  );
};

export default Projects;

