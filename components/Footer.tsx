/**
 * Footer Component
 * 
 * Role: Site footer with metadata and additional information
 * Aim:
 * - Provides copyright and attribution information
 * - Displays site status and version information
 * - Offers legal/terms links
 * - Completes the page structure with consistent branding
 */

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Copyright and Attribution - Legal information and tech stack credit */}
        <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
          © 2024 Alex Riviera // Built with React & GSAP
        </div>
        
        {/* Status and Links - System status indicator and legal links */}
        <div className="flex items-center gap-6">
          {/* System Status Indicator - Shows site availability */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">System Online</span>
          </div>
          {/* Terms Link - Legal documentation access */}
          <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest cursor-pointer hover:text-white">
            Terms of Service
          </div>
        </div>

        {/* Version Information - Site version and deployment status */}
        <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
          v1.4.2 // Stability: Production
        </div>
      </div>
    </footer>
  );
};

export default Footer;
