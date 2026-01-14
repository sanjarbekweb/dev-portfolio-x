/**
 * Contact Component
 * 
 * Role: Call-to-action section for collaboration and communication
 * Aim:
 * - Encourages potential clients/employers to initiate contact
 * - Provides clear pathways for communication (email, social links)
 * - Creates sense of availability and openness to opportunities
 * - Serves as final engagement point before footer
 */

import React from 'react';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Overlay - Subtle visual separation from other sections */}
      <div className="absolute inset-0 bg-zinc-900/10 pointer-events-none"></div>
      
      {/* Content Container - Centered text and action elements */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Badge - Visual indicator for section type */}
        <div className="inline-block px-4 py-1 border border-blue-500/30 text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-8">
          Next Phase
        </div>
        
        {/* Main Headline - Compelling call-to-action message */}
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
          READY TO START THE <br />
          <span className="text-zinc-600">CONVERSATION?</span>
        </h2>
        
        {/* Invitation Text - Encourages engagement and describes availability */}
        <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently accepting new projects and roles. If you have a vision that requires precision and speed, let's build something remarkable.
        </p>
        
        {/* Action Buttons - Primary and secondary contact methods */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Primary Email Button - Main contact method */}
          <a 
            href="mailto:hello@alexriviera.dev"
            className="w-full md:w-auto px-12 py-5 bg-white text-black font-bold text-lg rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Say Hello
          </a>
          
          {/* Social Media Links - Alternative contact and networking channels */}
          <div className="flex gap-4">
            {/* GitHub Link - Code repository and open source work */}
            <a href="#" className="p-5 border border-zinc-800 rounded-sm hover:bg-zinc-900 transition-colors text-zinc-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            {/* LinkedIn Link - Professional networking platform */}
            <a href="#" className="p-5 border border-zinc-800 rounded-sm hover:bg-zinc-900 transition-colors text-zinc-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Twitter Link - Social media presence */}
            <a href="#" className="p-5 border border-zinc-800 rounded-sm hover:bg-zinc-900 transition-colors text-zinc-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
