/**
 * Hero Component
 * 
 * Role: Primary landing section and first visual impression
 * Aim:
 * - Creates immediate visual impact with large typography and animations
 * - Communicates professional identity and value proposition
 * - Provides clear call-to-action buttons for user engagement
 * - Establishes the visual tone and aesthetic of the portfolio
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    /**
     * Title Animation
     * Role: Animates the main headline on component mount
     * Aim: Creates a dramatic entrance effect that draws attention to the core message
     */
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power4.out", delay: 0.5 }
    )
    /**
     * Tagline Animation
     * Role: Animates the subtitle text with slight delay from title
     * Aim: Provides smooth sequential reveal of content hierarchy
     */
    .fromTo(taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    /**
     * Background Glow Animation
     * Role: Creates subtle pulsing effect on background gradient elements
     * Aim: Adds depth and visual interest without distracting from content
     */
    gsap.to(".hero-glow", {
      opacity: 0.4,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden border-b border-zinc-900"
    >
      {/* Background Gradient Glows - Creates atmospheric depth and visual interest */}
      <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none opacity-20"></div>
      <div className="hero-glow absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none opacity-10"></div>

      {/* Main Content Container - Centers all hero content */}
      <div className="z-10 text-center max-w-4xl">
        {/* Availability Status Indicator - Shows current professional availability */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-pulse">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Available for new opportunities</span>
        </div>
        
        {/* Main Headline - Primary value proposition and brand statement */}
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none"
        >
          ENGINEERING THE <br />
          <span className="text-zinc-500">NEXT INTERFACE.</span>
        </h1>
        
        {/* Professional Tagline - Brief description of expertise and approach */}
        <p 
          ref={taglineRef}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Senior Frontend Developer focused on performance, modular architecture, and sharp aesthetic precision. Crafting digital products with a minimal footprint.
        </p>

        {/* Call-to-Action Buttons - Primary user engagement points */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {/* View Projects Button - Directs users to portfolio work */}
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-sm hover:bg-zinc-200 transition-colors">
            View Projects
          </button>
          {/* Resume Button - Provides access to professional resume */}
          <button className="px-8 py-3 border border-zinc-800 text-white font-semibold rounded-sm hover:bg-zinc-900 transition-colors">
            Resume
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Visual cue encouraging users to scroll down */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </section>
  );
};

export default Hero;
