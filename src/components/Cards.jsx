import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Cards() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.card', {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top center',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  const [cards, setCards] = useState()

  useEffect(()=>{
    let tempcards = [1, 2, 3].map(num => ({
      title: `Video ${num}`,
      description: `Description for Video ${num}`
    }));
    setCards(tempcards)
  },[])


  return cards && (
    <div ref={cardsRef} className="py-16 pt-80 mt-10 bg-gray-50 dark:bg-gray-800  ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-black/70 dark:border-white/70 dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transition-all duration-200 relative z-10"
          >
            <div className="aspect-video bg-gray-200 dark:bg-blue-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}