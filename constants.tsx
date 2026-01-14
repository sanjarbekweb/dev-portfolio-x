/**
 * Constants File
 * 
 * Role: Centralized data storage for portfolio content
 * Aim:
 * - Separates content data from component logic
 * - Enables easy content updates without touching components
 * - Provides single source of truth for portfolio data
 * - Facilitates content management and maintenance
 */

import { Project, Skill } from './types';

// Projects Data - Portfolio showcase items with descriptions and metadata
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Linear Clone",
    description: "A high-performance task management system with real-time sync and keyboard-first navigation.",
    tags: ["React", "TypeScript", "Tailwind", "GSAP"],
    link: "#",
    image: "https://picsum.photos/seed/p1/800/600"
  },
  {
    id: 2,
    title: "Synth Dashboard",
    description: "Interactive data visualization platform for financial metrics using D3.js and Recharts.",
    tags: ["D3.js", "Node.js", "PostgreSQL"],
    link: "#",
    image: "https://picsum.photos/seed/p2/800/600"
  },
  {
    id: 3,
    title: "Vercel SDK Explorer",
    description: "Documentation and sandbox for next-gen edge functions and real-time streaming.",
    tags: ["Next.js", "Edge Functions", "Edge Hooks"],
    link: "#",
    image: "https://picsum.photos/seed/p3/800/600"
  },
  {
    id: 4,
    title: "Onyx E-commerce",
    description: "Minimalist fashion platform focusing on motion-based shopping experiences.",
    tags: ["Framer Motion", "Stripe", "Sanity"],
    link: "#",
    image: "https://picsum.photos/seed/p4/800/600"
  }
];

// Skills Data - Technical expertise organized by category
export const SKILLS: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "GSAP", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Figma", category: "tools" }
];
