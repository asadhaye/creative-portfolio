import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye, Cpu, Globe, Rocket } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  // Intersection Observer for the entrance animation
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

  // Data drawn from your professional background and tech projects [1-3]
  const projects = [
    {
      id: 1,
      title: "Urdu AI SaaS Platform",
      description: "A hybrid offline-first platform featuring multilingual, on-device AI agents with user context categories for non-tech users in Pakistan [3].",
      image: "/api/placeholder/600/400",
      category: "ai",
      technologies: ["Transformers.js", "HuggingFace", "Next.js", "Whisper"],
      liveUrl: "#",
      githubUrl: "https://github.com/asadhaye",
      featured: true
    },
    {
      id: 2,
      title: "MedusaJS Headless Marketplace",
      description: "A high-performance headless e-commerce marketplace integrated with various third-party services and optimized for speed and SEO [2].",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["MedusaJS", "Next.js", "PostgreSQL", "Tailwind"],
      liveUrl: "#",
      githubUrl: "https://github.com/asadhaye",
      featured: true
    },
    {
      id: 3,
      title: "Saleem Fabrics Growth Engine",
      description: "Scaled a fashion brand's e-commerce division from zero to PKR 30M/month revenue through full-cycle digital operations and performance marketing [4, 5].",
      image: "/api/placeholder/600/400",
      category: "marketing",
      technologies: ["Shopify", "Meta Ads", "Google Ads", "GA4"],
      liveUrl: "https://www.saleemfabrics.com",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "D4 Accountants AI Assistant",
      description: "Digital assistant and tax dashboard for a UK-based firm, integrating AI-powered appointment booking and automated CRM workflows [3].",
      image: "/api/placeholder/600/400",
      category: "ai",
      technologies: ["Vercel AI SDK", "React", "Node.js", "CRM"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Meezan Lab Platform",
      description: "Full-stack pathology lab website featuring comprehensive test listings, SEO optimization, and an automated booking system [6].",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "Node.js", "SEO", "Responsive UI"],
      liveUrl: "https://www.meezanlab.pk",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Shahana Collection Logistics",
      description: "Managed cross-border e-commerce strategy and supply chain for a UK-facing fashion brand sourcing directly from Pakistan [2, 5].",
      image: "/api/placeholder/600/400",
      category: "marketing",
      technologies: ["Shopify", "3PL Coordination", "Direct Shipping"],
      liveUrl: "https://www.shahanacollection.pk",
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
    <section id="projects" className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16 section-modern py-20">
      {/* Floating Elements for "Awwwards" Aesthetic [7, 8] */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          style={{ 
            left: `${50 + mousePosition.x * 10}%`, 
            top: `${50 + mousePosition.y * 10}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.5s ease-out'
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={projectsRef} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              Featured Work
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A collection of innovative projects bridging grassroots impact with high-growth digital transformation [9].
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-slate-900 text-white shadow-lg scale-105' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white/80 backdrop-blur-sm">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer"><Eye className="w-5 h-5" /></a>
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github className="w-5 h-5" /></a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-slate-500 border-slate-200 font-medium">
                      {project.category === 'ai' && <Cpu className="w-3 h-3 mr-1" />}
                      {project.category === 'web' && <Globe className="w-3 h-3 mr-1" />}
                      {project.category === 'marketing' && <Rocket className="w-3 h-3 mr-1" />}
                      {filter.label.replace('All Projects', project.category.toUpperCase())}
                    </Badge>
                    {project.featured && <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-none">Featured</Badge>}
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
