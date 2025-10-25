'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MenuBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { name: 'Dashboard', href: '/', icon: '📊' },
    { name: 'Assets', href: '/assets', icon: '📦' },
    { name: 'Analytics', href: '/analytics', icon: '📈' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <div className={`flex flex-col h-full bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 
      ${isExpanded ? 'w-64' : 'w-16'}`}>
      
      {/* Hamburger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
      >
        <div className="space-y-1.5">
          <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></div>
          <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></div>
          <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300"></div>
        </div>
      </button>

      {/* Menu Items */}
      <nav className="flex-1 pt-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors
                  ${isExpanded ? 'justify-start space-x-3' : 'justify-center'}`}
              >
                <span className="text-xl">{item.icon}</span>
                {isExpanded && (
                  <span className="font-medium">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}