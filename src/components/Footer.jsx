// src/components/Footer.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const links = [
    'AI',
    'Text to Brainrot',
    'PDF to Brainrot',
    'Contact Us',
    'Privacy Policy',
    'Terms & Conditions'
  ];

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {links.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>© 2024 BrainrotAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}