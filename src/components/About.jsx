import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const [stats, setStats] = useState([
    { label: 'Projects Completed', value: 0, target: 75 },
    { label: 'Years Experience', value: 0, target: 6 },
    { label: 'Happy Clients', value: 0, target: 45 },
    { label: 'Technologies Mastered', value: 0, target: 20 },
  ]);

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js/Express', level: 90 },
    { name: 'E-Commerce Platforms', level: 92 },
    { name: 'AI/ML Integration', level: 85 },
    { name: 'Digital Marketing', level: 88 },
    { name: 'Three.js/GSAP', level: 80 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats counter
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          stats.forEach((stat, index) => {
            gsap.to(stat, {
              value: stat.target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function() {
                setStats(prevStats => {
                  const newStats = [...prevStats];
                  newStats[index] = { ...newStats[index], value: Math.round(this.targets()[0].value) };
                  return newStats;
                });
              }
            });
          });
        }
      });

      // Animate skill bars
      gsap.fromTo(
        '.skill-bar-fill',
        { width: '0%' },
        {
          width: (index, target) => target.dataset.level + '%',
          duration: 1.5,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.skills-container',
            start: 'top 80%',
          }
        }
      );

      // Animate section elements
      gsap.fromTo(
        '.fade-in-up',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate full-stack developer and e-commerce strategist who specializes in building 
              scalable digital solutions that drive business growth and enhance user experiences.
            </p>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center fade-in-up glass-effect">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}+
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started as a curious developer with a passion for creating digital solutions that make a difference. 
                  Over the years, I've specialized in full-stack development, e-commerce strategy, and AI integration, 
                  helping businesses transform their digital presence.
                </p>
                <p>
                  My expertise spans from building robust web applications with React and Node.js to developing 
                  comprehensive e-commerce solutions using platforms like Shopify, WooCommerce, and MedusaJS. 
                  I also integrate AI tools to enhance user experiences and automate business processes.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest AI developments, optimizing digital 
                  marketing strategies, or contributing to open-source projects that benefit the developer community.
                </p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'Shopify', 'WooCommerce', 'MedusaJS', 'AI/ML', 'GSAP', 'Three.js', 'Adobe Suite', 'Canva', 'HuggingFace'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="skills-container fade-in-up">
              <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden skill-bar">
                      <div
                        className="h-full bg-gradient-to-r from-coral-accent to-dark-navy skill-bar-fill"
                        data-level={skill.level}
                        style={{ backgroundColor: 'var(--coral-accent)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

