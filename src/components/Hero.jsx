// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { assets } from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     ScrollTrigger.batch('.hero-content', {
  //       start: 'top center',
  //       onEnter: (batch) => {
  //         gsap.from(batch, {
  //           y: 100,
  //           opacity: 0,
  //           duration: 1,
  //           ease: 'power4.out',
  //           stagger: 0.2
  //         });
  //       }
  //     });
  //   }, heroRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={heroRef} className="relative pt-12 pb-72 px-4 max-w-7xl mx-auto text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:bg-none transition-colors duration-300">
      <div className='absolute z-20 pt-20 top-12 left-0 h-full w-full flex justify-between px-4'>
			<div className='flex flex-col items-center gap-8 max-md:hidden'>
				<div className='flex items-center '>
					<img src={assets.science} className='rounded-full h-16 w-16 object-cover object-left-bottom border-[5px] border-green-500'/>
					<div className='w-min px-3 py-1 relative right-2 bg-green-400 text-black rounded-full text-sm font-bold'>Science</div>
				</div>
				<div className='flex items-center relative left-8 '>
					<div className='w-min px-3 py-1 relative left-2 bg-yellow-200 text-black rounded-full text-sm font-bold '>Mathematics</div>
					<img src={assets.math} className='rounded-full h-16 w-16 border-[5px] border-yellow-500'/>
				</div>
				<div className='flex items-center '>
					<img src={assets.economics} className='rounded-full h-16 w-16 object-cover object-left-bottom  border-[5px] border-blue-500'/>
					<div className='w-min px-3 py-1 relative right-2 bg-blue-400 text-black rounded-full text-sm font-bold '>Economics</div>
				</div>
			</div>

			<div className='flex flex-col-reverse self-start gap-8 items-center max-md:hidden'>
				<div className='flex items-center '>
					<div className='w-min px-3 py-1 relative left-2 bg-green-400 text-black rounded-full text-sm font-bold'>Computer</div>
					<img src={assets.computer} className='rounded-full h-16 w-16 object-cover object-left-bottom border-[5px] border-green-500'/>
				</div>
				<div className='flex items-center relative right-8 '>
					<img src={assets.english} className='rounded-full h-16 w-16 border-[5px] border-red-500'/>
					<div className='w-max px-3 py-1 relative right-2 bg-red-200 text-black rounded-full text-sm font-bold '>English & Lit</div>
				</div>
				<div className='flex items-center '>
					<div className='w-max px-3 py-1 relative left-2 bg-blue-400 text-black rounded-full text-sm font-bold '>Social</div>
					<img src={assets.social} className='rounded-full h-16 w-16 object-cover object-left-bottom  border-[5px] border-blue-500'/>
				</div>
			</div>

      </div>

	  <div className="mt-16">
		<p className="hero-content text-xl mt-4 text-gray-700 dark:text-gray-300">
          Instant & Precise Assessment
        </p>
		<div className='md:hidden w-full flex gap-4 justify-center my-4'>
			<img src={assets.science} className='rounded-full h-16 w-16 object-cover object-left-bottom border-[5px] border-green-500'/>
			<img src={assets.math} className='rounded-full h-16 w-16 border-[5px] border-yellow-500'/>
			<img src={assets.economics} className='rounded-full h-16 w-16 object-cover object-left-bottom  border-[5px] border-blue-500'/>
			<img src={assets.computer} className='rounded-full h-16 w-16 object-cover object-left-bottom border-[5px] border-green-500'/>
			<img src={assets.english} className='rounded-full h-16 w-16 border-[5px] border-red-500'/>
			<img src={assets.social} className='rounded-full h-16 w-16 object-cover object-left-bottom  border-[5px] border-blue-500'/>
			</div>
        <img 
          src={assets.feature}
          alt="Feature" 
          className="mx-auto rounded-xl shadow-xl dark:shadow-blue-500/10 transition-all duration-300 block h-[300px] dark:hidden border-2 border-black" 
        />
        <img 
          src={assets.image}
          alt="Feature" 
          className="mx-auto relative z-10 rounded-xl shadow-xl dark:shadow-blue-500/10 transition-all duration-300 h-[300px] hidden dark:block border-2 border-blue-500" 
        />
      </div>

      <h1 className="hero-content mt-8 text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
        Your Smart Study Partner
      </h1>
      <p className="hero-content text-lg mb-8 text-gray-600 dark:text-gray-300">
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
	  <div className='mt-12 flex items-center justify-center absolute left-[50%] translate-x-[-50%]'>
		<img src={assets.heroimagedark} className='h-[500px] min-w-[800px] rounded-xl border-blue-500 border-[5px] hidden dark:block' />
		<img src={assets.heroimage} className='h-[500px] min-w-[800px] rounded-xl border-blue-500 border-[5px] block dark:hidden' />
	  </div>

    </div>
  );
}