import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import SnowEffect from '../components/SnowEffect';

export default function MainLayout({ children }) {
  return (
    
    <div className="min-h-screen relative bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ">
      <Navbar />
      <main className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <SnowEffect/>
        {children}
      </main>
      {/* <Footer /> */}
      <Footer2/>
    </div>
  );
}

