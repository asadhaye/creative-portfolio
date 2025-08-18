import { useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AVPNCaseStudy from "./components/AVPNCaseStudy";
import './App.css';

function App() {
  useEffect(() => {
    // Use light theme by default for Muhammad Asad Haye's portfolio
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThreeBackground />
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Projects />
        <Gallery />
        <Brands />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
