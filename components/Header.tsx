/**
 * Header Component
 * 
 * Role: Fixed navigation bar providing site-wide navigation
 * Aim:
 * - Provides persistent access to all main sections
 * - Establishes brand identity through logo/name
 * - Enables quick navigation without scrolling
 * - Maintains visual consistency across page sections
 */

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-card border-b border-zinc-900 px-6 py-4 flex items-center justify-between">
      {/* Logo/Brand Section - Brand identity and home link */}
      <div className="flex items-center gap-2 group hover-trigger">
        {/* Logo Icon - Rotating X symbol on hover */}
        <div className="w-6 h-6 bg-white flex items-center justify-center font-black text-black text-[10px] transform group-hover:rotate-90 transition-transform">
          X
        </div>
        {/* Brand Name - Personal/professional identifier */}
        <span className="font-bold text-lg tracking-tighter uppercase">Alex.</span>
      </div>
      
      {/* Navigation Menu - Links to main page sections */}
      <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-500">
        {/* About Section Link */}
        <a href="#about" className="hover:text-white transition-colors hover-trigger">Log</a>
        {/* Projects Section Link */}
        <a href="#projects" className="hover:text-white transition-colors hover-trigger">Projects</a>
        {/* Skills Section Link */}
        <a href="#skills" className="hover:text-white transition-colors hover-trigger">Toolkit</a>
        {/* Contact Section Link */}
        <a href="#contact" className="hover:text-white transition-colors hover-trigger">Signal</a>
      </nav>

      {/* Right Side Actions - Additional navigation and user elements */}
      <div className="flex items-center gap-4">
        {/* Menu Button - Mobile/expanded navigation trigger */}
        <button className="hidden sm:block px-4 py-1.5 border border-zinc-800 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Menu
        </button>
        {/* Avatar - Profile image or user identifier */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-800">
          <img src="https://picsum.photos/seed/user/100/100" alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
