// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.hero-content', {
        start: 'top center',
        onEnter: (batch) => {
          gsap.from(batch, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.2
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="pt-24 pb-16 px-4 max-w-7xl mx-auto text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <h1 className="hero-content text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
        Your Smart Study Partner
      </h1>
      <p className="hero-content text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
        AI-driven revision with limitless practice and real-time grading
      </p>
      <div className="hero-content flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
          Get Started
          <ArrowRight className="h-5 w-5" />
        </button>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 text-white rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
          Start Learning
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-16">
        {}
        <img 
          src="../../public/feature.png" 
          alt="Feature" 
          className="hero-content mx-auto rounded-lg shadow-xl dark:shadow-blue-500/10 transition-all duration-300" 
        />
        <p className="hero-content text-xl mt-4 text-gray-700 dark:text-gray-300">
          Instant & Precise Assessment
        </p>
      </div>
    </div>
  );
}