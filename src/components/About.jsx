import { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Marketing Strategy', level: 95 },
    { name: 'E-Commerce', level: 90 },
    { name: 'Digital Analytics', level: 85 },
    { name: 'AI/ML Integration', level: 80 },
    { name: 'Three.js', level: 75 },
    { name: 'React/Next.js', level: 70 },
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Shopify', 'WooCommerce', 'MedusaJS', 
    'AI/ML', 'Three.js', 'Adobe Suite', 'Canva', 'HuggingFace'
  ];

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
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16">
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-primary">
              About Me
            </h2>
            <p className="text-xl body-text-secondary max-w-3xl mx-auto">
              Passionate marketer and e-commerce strategist with expertise in AI integration and modern web technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <div 
              ref={aboutRef}
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl heading-secondary">My Journey</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="body-text-secondary leading-relaxed">
                    I'm Muhammad Asad Haye, a results-driven marketing professional with over 8 years of experience 
                    in digital marketing and e-commerce strategy. My passion lies in leveraging cutting-edge 
                    technologies to create innovative marketing solutions.
                  </p>
                  <p className="body-text-secondary leading-relaxed">
                    From traditional marketing campaigns to AI-powered automation, I've helped businesses 
                    across various industries achieve remarkable growth and market presence.
                  </p>
                  <p className="body-text-secondary leading-relaxed">
                    When I'm not optimizing conversion rates or analyzing market trends, you'll find me 
                    exploring the latest in AI technology, building interactive web experiences, or 
                    mentoring the next generation of digital marketers.
                  </p>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl heading-secondary">Core Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium body-text-primary">{skill.name}</span>
                        <span className="text-sm body-text-secondary">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Stats & Tech */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Stats */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl heading-secondary">Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-bright mb-2">150+</div>
                      <div className="text-sm body-text-secondary">Campaigns Managed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-bright mb-2">$2M+</div>
                      <div className="text-sm body-text-secondary">Revenue Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-bright mb-2">85%</div>
                      <div className="text-sm body-text-secondary">Avg. Conversion Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-bright mb-2">50+</div>
                      <div className="text-sm body-text-secondary">Happy Clients</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl heading-secondary">Technologies & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl heading-secondary">Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold body-text-primary">Senior Marketing Manager</h4>
                    <p className="text-sm body-text-secondary">TechCorp Inc. • 2021-Present</p>
                    <p className="text-sm body-text-secondary mt-1">
                      Leading digital marketing initiatives and AI integration projects
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold body-text-primary">E-Commerce Strategist</h4>
                    <p className="text-sm body-text-secondary">Retail Solutions • 2019-2021</p>
                    <p className="text-sm body-text-secondary mt-1">
                      Optimized online stores and implemented conversion strategies
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold body-text-primary">Digital Marketing Specialist</h4>
                    <p className="text-sm body-text-secondary">Marketing Agency • 2017-2019</p>
                    <p className="text-sm body-text-secondary mt-1">
                      Managed social media campaigns and content marketing
                    </p>
                  </div>
                </CardContent>
              </Card>
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

export default About;

