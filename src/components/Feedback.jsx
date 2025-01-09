import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../assets/assets';

export default function Feedback() {
  const feedbackRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from('.feedback-card', {
  //       scrollTrigger: {
  //         trigger: feedbackRef.current,
  //         start: 'top center',
  //       },
  //       x: -100,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.2
  //     });
  //   }, feedbackRef);

  //   return () => ctx.revert();
  // }, []);

  const testimonials = [
    {
      name: 'John Doe',
      role: 'Student',
      content: 'PrepePundit has revolutionized my study routine!'
    },
    {
      name: 'Jane Smith',
      role: 'Teacher',
      content: 'An excellent tool for creating practice materials.'
    }
  ];

  return (
    <div ref={feedbackRef} className="py-16 bg-white dark:bg-gray-800 pt-80">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[600px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="feedback-card bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg border dark:border-white border-black relative z-10"
            >
              <div className="flex items-center mb-4 justify-center flex-col">
                <img
                  src={assets.testimonial}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-center">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center mt-4">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
