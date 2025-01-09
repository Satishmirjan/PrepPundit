import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </main>
      <Footer />
    </div>
  );
}

