/**
 * About Component
 * 
 * Role: Personal introduction and professional background section
 * Aim:
 * - Provides context about professional experience and expertise
 * - Communicates work philosophy and approach to development
 * - Displays key professional information in an engaging format
 * - Creates personal connection through structured narrative
 */

import React from 'react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-b border-zinc-900 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column - Text Content */}
        <div>
          {/* Section Header - Title and subtitle for the about section */}
          <SectionHeading title="System Log" subtitle="Focused on the intersection of design engineering and scalable infrastructure." />
          
          {/* Professional Narrative - Main content describing experience and philosophy */}
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            {/* Experience Statement - Highlights years of experience and specialization */}
            <p>
              With over 6 years of experience, I specialize in building complex web applications that don't compromise on speed or aesthetics. My approach is rooted in the philosophy of "less but better"—reducing complexity while maximizing user utility.
            </p>
            {/* Collaboration Statement - Describes working style and creative approach */}
            <p>
              I thrive in environments where engineering meets creativity, often collaborating with designers to push the boundaries of what's possible in the browser.
            </p>
            
            {/* Key Information Cards - Quick reference for location and professional status */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {/* Location Card - Shows geographic availability */}
              <div className="border border-zinc-900 p-4 rounded-sm hover:border-zinc-700 transition-colors">
                <h4 className="text-white text-sm font-bold uppercase mb-1">Location</h4>
                <p className="text-zinc-500 text-sm">Remote / San Francisco</p>
              </div>
              {/* Status Card - Current professional level */}
              <div className="border border-zinc-900 p-4 rounded-sm hover:border-zinc-700 transition-colors">
                <h4 className="text-white text-sm font-bold uppercase mb-1">Status</h4>
                <p className="text-zinc-500 text-sm">Senior Full-stack</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Interactive Profile Display */}
        <div className="relative group">
          {/* Hover Glow Effect - Adds visual feedback on interaction */}
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          {/* Profile JSON Display - Styled code block showing professional profile */}
          <div className="relative border border-zinc-800 bg-zinc-950 p-8 rounded-sm">
            {/* Terminal Window Header - Mimics code editor interface */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-2 text-xs text-zinc-600 font-mono uppercase tracking-widest">profile.json</div>
            </div>
            
            {/* Profile Data - Structured information in JSON format */}
            <pre className="font-mono text-sm md:text-base text-zinc-500 leading-tight overflow-x-auto">
              <code>{`{
  "name": "Alex Riviera",
  "role": "Full Stack Engineer",
  "expertise": [
    "Frontend Architecture",
    "Design Systems",
    "API Orchestration"
  ],
  "philosophy": "Functional Minimalism",
  "currently_learning": "Advanced TypeScript Patterns",
  "loves": ["Coffee", "Open Source", "Racing"]
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
