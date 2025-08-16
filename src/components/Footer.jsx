import { Button } from './ui/button';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">AsadHaye.com</h3>
              <p className="text-muted-foreground mb-4">
                Full-Stack Developer & E-Commerce Strategist specializing in AI integration 
                and digital marketing solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/asadhaye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/asadhaye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:asad@asadhaye.com"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>asad@asadhaye.com</p>
                <p>+92 (300) 123-4567</p>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t">
            <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>by Muhammad Asad Haye</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground text-sm">
                © 2024 All rights reserved
              </span>
              
              <Button
                onClick={scrollToTop}
                size="sm"
                variant="outline"
                className="hover:scale-105 transition-transform"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

