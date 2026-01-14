/**
 * SectionHeading Component
 * 
 * Role: Reusable section header component for consistent typography
 * Aim:
 * - Provides consistent visual hierarchy across sections
 * - Standardizes section title and subtitle styling
 * - Creates visual separation between sections
 * - Maintains design system consistency
 */

import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      {/* Section Title - Main heading with underline accent */}
      <h2 className="text-3xl font-bold tracking-tight text-white mb-2 uppercase border-b border-zinc-800 pb-2 inline-block">
        {title}
      </h2>
      {/* Section Subtitle - Optional descriptive text below title */}
      {subtitle && <p className="text-zinc-500 text-lg max-w-xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
