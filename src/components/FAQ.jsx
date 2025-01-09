import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How does PrepePundit work?',
      answer: 'PrepePundit uses AI to convert your study materials into interactive questions.'
    },
    {
      question: 'What file formats are supported?',
      answer: 'We support PDF, DOC, TXT, and video files.'
    } ,{
      question: 'How does PrepePundit work?',
      answer: 'PrepePundit uses AI to convert your study materials into interactive questions.'
    },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {faq.question}
                <span className="transform transition-transform duration-200">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}