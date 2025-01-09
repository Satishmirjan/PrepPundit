// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Moon, Sun } from 'lucide-react';

// export default function Navbar() {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     document.documentElement.classList.toggle('dark');
//   };

//   return (
//     <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center space-x-2">
//               <img src="/api/placeholder/40/40" alt="PrepePundit Logo" className="h-10" />
//               <span className="text-xl font-bold">PrepePundit AI</span>
//             </Link>
//             <div className="hidden md:block ml-10">
//               <div className="flex items-baseline space-x-4">
//                 {['IBDP', 'IGCSE', 'Dashboard', 'Analytics', 'Pricing'].map((item) => (
//                   <Link
//                     key={item}
//                     to={`/${item.toLowerCase()}`}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
//             >
//               {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </button>
//             <img
//               src="/api/placeholder/32/32"
//               alt="User"
//               className="h-8 w-8 rounded-full hover:scale-110 transition-all duration-200"
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { assets } from '../assets/assets';

export default function Navbar() {
  // Check system preference for initial dark mode
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    // Apply dark mode class on initial load
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* TODO: Replace with actual logo image */}
              <img src={assets.logo} alt="PrepePundit Logo" className="h-10" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">PrepePundit AI</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {['IBDP', 'IGCSE', 'Dashboard', 'Analytics', 'Pricing'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            {/* TODO: Replace with actual user profile image */}
            <img
              src={assets.logo}
              alt="User"
              className="h-8 w-8 rounded-full hover:scale-110 transition-all duration-200 ring-2 ring-gray-200 dark:ring-gray-700"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}