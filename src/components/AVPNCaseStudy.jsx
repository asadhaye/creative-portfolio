// src/components/AVPNCaseStudy.jsx
import { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const AVPNCaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const caseStudyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (caseStudyRef.current) {
      observer.observe(caseStudyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            onClick={goBack}
            variant="ghost"
            className="mb-8 hover:bg-muted transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>

          {/* Case Study Header */}
          <div 
            ref={caseStudyRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Badge variant="secondary" className="mb-4">
              Case Study
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-primary">
              AVPN - Virtual Private Network Platform
            </h1>
            <p className="text-xl body-text-secondary max-w-3xl mx-auto">
              A comprehensive VPN solution designed for privacy, security, and seamless user experience across all devices.
            </p>
          </div>

          {/* Project Overview */}
          <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  AVPN is a cutting-edge virtual private network platform that provides users with 
                  secure, fast, and reliable internet access. The project focuses on creating an 
                  intuitive user interface while maintaining robust security protocols.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Client:</span>
                    <span className="text-muted-foreground">AVPN Technologies</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span className="text-muted-foreground">6 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Role:</span>
                    <span className="text-muted-foreground">Lead Developer</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Military-grade encryption (AES-256)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Global server network (50+ countries)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Cross-platform compatibility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Zero-logs policy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Kill switch functionality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Split tunneling</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Implementation */}
          <div className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Technical Implementation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Frontend Architecture</h4>
                  <p className="text-muted-foreground mb-3">
                    Built with React and Next.js for optimal performance and SEO. Implemented a 
                    responsive design using Tailwind CSS and Framer Motion for smooth animations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Backend Infrastructure</h4>
                  <p className="text-muted-foreground mb-3">
                    Node.js backend with Express framework, implementing secure authentication, 
                    real-time connection monitoring, and automated server management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io'].map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Security Features</h4>
                  <p className="text-muted-foreground mb-3">
                    Implemented OpenVPN and WireGuard protocols, certificate-based authentication, 
                    and comprehensive audit logging for compliance requirements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['OpenVPN', 'WireGuard', 'TLS 1.3', 'OAuth 2.0', 'JWT'].map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Challenges & Solutions */}
          <div className={`mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Challenges & Solutions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-500">Challenge: Performance Optimization</h4>
                  <p className="text-muted-foreground mb-3">
                    VPN connections needed to maintain high speeds while ensuring security protocols 
                    didn't impact user experience.
                  </p>
                  <h5 className="font-medium mb-2 text-green-500">Solution:</h5>
                  <p className="text-muted-foreground">
                    Implemented connection pooling, optimized routing algorithms, and used CDN 
                    distribution for global performance. Achieved 95%+ of native internet speeds.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-500">Challenge: Cross-Platform Compatibility</h4>
                  <p className="text-muted-foreground mb-3">
                    Needed to support Windows, macOS, Linux, iOS, and Android with consistent 
                    functionality and user experience.
                  </p>
                  <h5 className="font-medium mb-2 text-green-500">Solution:</h5>
                  <p className="text-muted-foreground">
                    Used React Native for mobile apps and Electron for desktop applications, 
                    ensuring code reusability while maintaining platform-specific optimizations.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-500">Challenge: Security Compliance</h4>
                  <p className="text-muted-foreground mb-3">
                    Required compliance with GDPR, SOC 2, and various international privacy regulations.
                  </p>
                  <h5 className="font-medium mb-2 text-green-500">Solution:</h5>
                  <p className="text-muted-foreground">
                    Implemented comprehensive audit trails, automated compliance reporting, and 
                    privacy-by-design architecture. Successfully achieved all required certifications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results & Impact */}
          <div className={`mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Results & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                    <div className="text-sm text-muted-foreground">User Rating</div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <p className="text-muted-foreground">
                    The AVPN platform successfully launched with zero critical security incidents 
                    and exceeded performance benchmarks by 20%. User adoption exceeded initial 
                    projections by 150% within the first quarter.
                  </p>
                  <p className="text-muted-foreground">
                    The project established new industry standards for VPN security and performance, 
                    leading to partnerships with major cybersecurity firms and recognition in 
                    industry publications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Links */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="hover:scale-105 transition-transform">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild className="hover:scale-105 transition-transform">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AVPNCaseStudy;
