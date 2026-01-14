/**
 * CustomCursor Component
 * 
 * Role: Custom cursor implementation replacing default browser cursor
 * Aim:
 * - Enhances visual experience with branded cursor design
 * - Provides visual feedback on interactive elements
 * - Creates unique, memorable interaction pattern
 * - Differentiates the portfolio with custom UI elements
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    /**
     * Cursor Movement Handler
     * Role: Updates cursor position based on mouse movement
     * Aim: Creates smooth, responsive cursor tracking with dual-layer effect
     */
    const moveCursor = (e: MouseEvent) => {
      // Primary cursor - Fast, precise tracking
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      // Follower cursor - Slower, trailing effect
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
      });
    };

    /**
     * Hover State Handler
     * Role: Expands cursor when hovering over interactive elements
     * Aim: Provides clear visual feedback for clickable/interactive areas
     */
    const handleHover = () => {
      gsap.to(follower, { scale: 2, backgroundColor: 'rgba(255,255,255,0.1)', duration: 0.3 });
    };

    /**
     * Leave State Handler
     * Role: Returns cursor to default state when leaving interactive elements
     * Aim: Maintains consistent cursor appearance when not interacting
     */
    const handleLeave = () => {
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
    };

    // Mouse movement tracking
    window.addEventListener('mousemove', moveCursor);

    // Interactive element detection and hover handlers
    const interactiveElements = document.querySelectorAll('a, button, input, .hover-trigger');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    /**
     * Cleanup Function
     * Role: Removes event listeners to prevent memory leaks
     * Aim: Ensures proper resource management when component unmounts
     */
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Primary Cursor - Small dot that follows mouse precisely */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {/* Follower Cursor - Larger ring that trails behind primary cursor */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;
