/**
 * App Component
 * 
 * Role: Main application container and orchestrator
 * Aim: 
 * - Serves as the root component that composes all page sections
 * - Initializes GSAP scroll animations for smooth section reveals
 * - Manages the overall layout structure (header, main content, footer)
 * - Provides global styling context (dark theme, selection colors)
 */

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    /**
     * Scroll Animation Setup
     * Role: Creates smooth fade-in and slide-up animations for sections
     * Aim: Enhances user experience by revealing content progressively as user scrolls
     */
    const sections = ['#about', '#projects', '#skills', '#contact'];
    
    sections.forEach(selector => {
      gsap.fromTo(selector, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    /**
     * Cleanup Function
     * Role: Prevents memory leaks by cleaning up GSAP ScrollTrigger instances
     * Aim: Ensures proper resource management when component unmounts
     */
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-blue-500 selection:text-white">
      {/* Custom Cursor Component - Provides interactive cursor effects */}
      <CustomCursor />
      
      {/* Header Component - Fixed navigation bar at the top */}
      <Header />
      
      {/* Main Content Area - Contains all portfolio sections */}
      <main>
        {/* Hero Section - First impression, main headline and call-to-action */}
        <Hero />
        
        {/* About Section - Personal introduction and professional background */}
        <About />
        
        {/* Projects Section - Showcase of portfolio work and projects */}
        <Projects />
        
        {/* Skills Section - Technical skills and expertise display */}
        <Skills />
        
        {/* Contact Section - Call-to-action for collaboration and contact information */}
        <Contact />
      </main>

      {/* Footer Component - Site metadata, links, and version information */}
      <Footer />
    </div>
  );
};

export default App;
