/**
 * Skills Component
 * 
 * Role: Technical skills and expertise display section
 * Aim:
 * - Showcases technical proficiency across different domains
 * - Helps potential clients/employers assess technical fit
 * - Organizes skills by category for easy scanning
 * - Demonstrates breadth and depth of technical knowledge
 */

import React from 'react';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Skill categories for organizing technical expertise
  const categories = ['frontend', 'backend', 'tools'];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 border-b border-zinc-900 bg-[#020202]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Introduces the skills section */}
        <SectionHeading title="Toolkit" subtitle="Modern technologies for the modern web." />
        
        {/* Skills Grid - Three-column layout organized by category */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat} className="space-y-6">
              {/* Category Header - Labels each skill category */}
              <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-600 font-black border-l-2 border-blue-500 pl-4">
                {cat}
              </h3>
              {/* Skills List - Displays individual skills within category */}
              <div className="flex flex-col gap-2">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div 
                    key={skill.name} 
                    className="group flex items-center justify-between p-4 border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all cursor-default"
                  >
                    {/* Skill Name - Technology or tool name */}
                    <span className="text-zinc-400 group-hover:text-white transition-colors">{skill.name}</span>
                    {/* Status Indicator - Visual dot that highlights on hover */}
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-blue-500 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
