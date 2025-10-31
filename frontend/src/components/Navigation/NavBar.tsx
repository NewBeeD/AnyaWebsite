'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const router = useRouter();

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleDropdown = (dropdown: string, e: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    closeAll();
  };

  const handleMobileLinkClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const menuItems = [
    {
      name: 'ABOUT US',
      href: '#',
      dropdown: [
        { name: 'Our Mission', href: '/about/mission' },
        { name: 'Our Beliefs', href: '/about/beliefs' },
        { name: 'Our History', href: '/about/history' },
        { name: 'Our Team', href: '/about/team' }
      ]
    },
    {
      name: 'CHURCHES',
      href: '#',
      dropdown: [
        { name: 'Interactive Map', href: '/churches/map' },
        { name: 'List of Churches', href: '/churches/list' }
      ]
    },
    {
      name: 'EVENTS',
      href: '#',
      dropdown: [
        { name: 'Full Calendar View', href: '/events/calendar' },
        { name: 'Upcoming Conferences', href: '/events/conferences' },
        { name: 'Church Programs', href: '/events/churchprograms' },
        { name: 'Youth Events', href: '/events/youth' }
      ]
    },
    {
      name: 'RESOURCES',
      href: '#',
      dropdown: [
        { name: 'Sermons', href: '/resources/sermons' },
        { name: 'Articles & Blog', href: '/resources/articles' },
        { name: 'Downloads', href: '#' },
        { name: 'For Leaders (Login)', href: '#' }
      ]
    }
  ];

  const menuItems2 = [    
    {
      name: 'CONTACT US',
      href: '/contact',
      dropdown: null
    }
  ];

  return (
    <>
      <nav className="bg-white shadow-lg sticky flex justify-center z-50">
        <div className="w-full md:w-[95%] mx-auto! px-2!">
          
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 ml-2!">
              <Link href="/" className="text-2xl font-bold text-blue-800" onClick={handleLinkClick}>
                ANYA
              </Link>
            </div>

            {/* Desktop Menu - Using the commented version for larger screens */}
            <div className="hidden md:flex justify-between items-center gap-x-7!">
              
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  
                  {item.dropdown ? (
                    <button
                      onClick={(e) => toggleDropdown(item.name, e)}
                      className="px-3! py-2 text-gray-700 hover:text-blue-600
                       font-medium transition-colors duration-200 flex items-center gap-x-1!"
                    >
                      {item.name}

                      <svg className="w-4 h-4 ml-1!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3! py-2! text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute left-0 mt-2! w-44 bg-white rounded-md shadow-lg py-2! z-50 border border-gray-200 space-y-1! font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4! py-2! text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 pl-1!"
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>

            <div className="hidden md:flex items-center justify-between">
              
              {menuItems2.map((point, idx) => (
                <div key={idx}>
                  <Link
                    href={point.href}
                    className="px-3! py-2! text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    {point.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* End of Desktop Menu */}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-900 focus:outline-none focus:text-blue-600 p-2!"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Using the mobile-only version for mobile view */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2! pt-2! pb-3! space-y-1!">
                {/* Combine menuItems and menuItems2 for mobile */}
                {[...menuItems, ...menuItems2].map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-1!">
                        <div className="text-gray-700 px-3! py-2! font-medium">
                          {item.name}
                        </div>
                        <div className="pl-4! space-y-1!">
                          {item.dropdown.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => handleMobileLinkClick(subItem.href)}
                              className="block w-full text-left text-gray-600 hover:text-blue-600 px-3! py-1! font-medium"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleMobileLinkClick(item.href)}
                        className="block w-full text-left text-gray-700 hover:text-blue-600 px-3! py-2! font-medium"
                      >
                        {item.name}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Overlay to close dropdowns when clicking outside */}
        {activeDropdown && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </nav>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3! bg-blue-600/40 hover:bg-blue-700/80! text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Back to top"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      )}
    </>
  );
}