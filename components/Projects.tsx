/**
 * Projects Component
 * 
 * Role: Portfolio showcase displaying featured work and projects
 * Aim:
 * - Demonstrates technical capabilities through real project examples
 * - Provides visual evidence of design and development skills
 * - Enables potential clients/employers to assess work quality
 * - Creates opportunities for deeper engagement through project links
 */

import React from 'react';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Introduces the projects section */}
        <SectionHeading title="Deployments" subtitle="A curated selection of applications built for scale and performance." />
        
        {/* Projects Grid - Responsive layout displaying project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              className="group block relative border border-zinc-900 bg-zinc-950 overflow-hidden rounded-sm hover:border-zinc-700 transition-all duration-500"
            >
              {/* Project Image - Visual representation of the project */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Project Details - Title, description, and technology tags */}
              <div className="p-8">
                {/* Project Header - Title with external link indicator */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  {/* External Link Icon - Indicates clickable project */}
                  <div className="text-zinc-600 group-hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </div>
                </div>
                {/* Project Description - Brief overview of project purpose and features */}
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                {/* Technology Tags - Shows technologies and tools used */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-zinc-900 text-zinc-500 rounded-sm font-bold border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Archive Button - Provides access to additional projects */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-10 py-4 border border-zinc-800 text-white font-mono text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Browse Archive
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
