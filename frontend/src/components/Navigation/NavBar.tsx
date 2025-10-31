// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (dropdown) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };

//   const closeAll = () => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//   };

//   const menuItems = [

//     {
//       name: 'ABOUT US',
//       href: '#',
//       dropdown: [
//         { name: 'Our Mission', href: '/about/mission' },
//         { name: 'Our Beliefs', href: '/about/beliefs' },
//         { name: 'Our History', href: '/about/history' },
//         { name: 'Our Team', href: '/about/team' }
//       ]
//     },
//     {
//       name: 'CHURCHES',
//       href: '#',
//       dropdown: [
//         { name: 'Interactive Map', href: '/churches/map' },
//         { name: 'List of Churches', href: '/churches/list' }
//       ]
//     },
//     {
//       name: 'EVENTS',
//       href: '#',
//       dropdown: [
//         { name: 'Full Calendar View', href: '/events/calendar' },
//         { name: 'Upcoming Conferences', href: '/events/conferences' },
//         { name: 'Church Programs', href: '/events/churchprograms' },
//         { name: 'Youth Events', href: '/events/youth' }
//       ]
//     },
//     {
//       name: 'RESOURCES',
//       href: '#',
//       dropdown: [
//         { name: 'Sermons', href: '/resources/sermons' },
//         { name: 'Articles & Blog', href: '/resources/articles' },
//         { name: 'Downloads', href: '/resources/downloads' },
//         { name: 'For Leaders (Login)', href: '/resources/leaders' }
//       ]
//     }

    
//   ];


//   const menuItems2 = [    
    
//     {
//       name: 'CONTACT US',
//       href: '/contact',
//       dropdown: null
//     }
//   ]

//   return (
    
//     <nav className="bg-white shadow-lg sticky flex justify-center z-50">
//       <div className="w-full md:w-[95%] mx-auto px-2!">
        
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 ml-2">
//             <Link href="/" className="text-2xl font-bold text-blue-800">
//               ANYA
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex justify-between items-center gap-x-7">
            
//             {menuItems.map((item) => (
//               <div key={item.name} className="relative group ">
                
//                 {item.dropdown ? (
//                   <button
//                     onClick={() => toggleDropdown(item.name)}
//                     className="px-3 py-2 text-gray-700 hover:text-blue-600
//                      font-medium transition-colors duration-200 flex items-center gap-x-1"
//                   >
//                     {item.name}

//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//                   >
//                     {item.name}
//                   </Link>
//                 )}

//                 {/* Desktop Dropdown */}
//                 {item.dropdown && activeDropdown === item.name && (
//                   <div className="absolute left-0 mt-2! w-44 bg-white rounded-md shadow-lg py-2! z-50 border border-gray-200 space-y-1! font-medium">
//                     {item.dropdown.map((subItem) => (
//                       <Link
//                         key={subItem.name}
//                         href={subItem.href}
//                         className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 pl-1!"
//                         onClick={closeAll}
//                       >
//                         {subItem.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}

//           </div>

//           <div className="hidden md:flex items-center justify-between">
            
//             {menuItems2.map((point, idx) => (

//               <div key={idx} className=''>

//                 <Link
//                     href={point.href}
//                     className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//                   >
//                     {point.name}
//                   </Link>

//               </div>
//             ))}
//           </div>

//           {/* End of Desktop Menu */}

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-blue-900 focus:outline-none focus:text-blue-600 p-2"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200 flex flex-col gap-y-1">
//             {menuItems.map((item) => (
//               <div key={item.name} >
//                 {item.dropdown ? (
//                   <div className="border-b border-gray-100 gap-y-40">
//                     <button
//                       onClick={() => toggleDropdown(item.name)}
//                       className="flex justify-between items-center w-full px-4 
//                        py-3 text-left text-gray-700 hover:bg-gray-50 font-medium "
//                     >
//                       {item.name}
//                       <svg
//                         className={`w-4 h-4 transition-transform duration-200 ${
//                           activeDropdown === item.name ? 'rotate-180' : ''
//                         }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
                    
//                     {/* Mobile Dropdown */}
//                     {activeDropdown === item.name && (
//                       <div className="bg-gray-50 pl-6">
//                         {item.dropdown.map((subItem) => (
//                           <Link
//                             key={subItem.name}
//                             href={subItem.href}
//                             className="block px-4 py-3 text-gray-600 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
//                             onClick={closeAll}
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className="block px-4 py-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 font-medium"
//                     onClick={closeAll}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Overlay to close dropdowns when clicking outside */}
//       {activeDropdown && (
//         <div
//           className="fixed inset-0 z-40"
//           onClick={() => setActiveDropdown(null)}
//         />
//       )}
//     </nav>
//   );
// }




// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (dropdown, e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };

//   const closeAll = () => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//   };

//   const handleLinkClick = () => {
//     closeAll();
//   };

//   const menuItems = [
//     {
//       name: 'ABOUT US',
//       href: '#',
//       dropdown: [
//         { name: 'Our Mission', href: '/about/mission' },
//         { name: 'Our Beliefs', href: '/about/beliefs' },
//         { name: 'Our History', href: '/about/history' },
//         { name: 'Our Team', href: '/about/team' }
//       ]
//     },
//     {
//       name: 'CHURCHES',
//       href: '#',
//       dropdown: [
//         { name: 'Interactive Map', href: '/map' },
//         { name: 'List of Churches', href: '/churches/list' }
//       ]
//     },
//     {
//       name: 'EVENTS',
//       href: '#',
//       dropdown: [
//         { name: 'Full Calendar View', href: '/calendar' },
//         { name: 'Upcoming Conferences', href: '/conferences' },
//         { name: 'Church Programs', href: '/church-events' },
//         { name: 'Youth Events', href: '/youth-events' }
//       ]
//     },
//     {
//       name: 'RESOURCES',
//       href: '#',
//       dropdown: [
//         { name: 'Sermons', href: '/sermons' },
//         { name: 'Articles & Blog', href: '/articles' },
//         { name: 'Downloads', href: '/resources/downloads' },
//         { name: 'For Leaders (Login)', href: '/resources/leaders' }
//       ]
//     },
//     {
//       name: 'CONTACT US',
//       href: '/contact',
//       dropdown: null
//     }
//   ];

//   return (
//     <nav className="bg-white! shadow-lg! sticky! flex! justify-center! z-50!">
//       <div className="w-full! md:w-[95%]! mx-auto! px-2!">
        
//         <div className="flex! justify-between! items-center! h-16!">
//           {/* Logo */}
//           <div className="flex-shrink-0! ml-2!">
//             <Link href="/" className="text-2xl! font-bold! text-blue-800!" onClick={handleLinkClick}>
//               ANYA
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden! md:flex! justify-between! items-center! gap-x-7!">
            
//             {menuItems.map((item) => (
//               <div key={item.name} className="relative! group!">
                
//                 {item.dropdown ? (
//                   <button
//                     onClick={(e) => toggleDropdown(item.name, e)}
//                     className="px-3! py-2! text-gray-700! hover:text-blue-600!
//                      font-medium! transition-colors! duration-200! flex! items-center! gap-x-1!"
//                   >
//                     {item.name}

//                     <svg className="w-4! h-4! ml-1!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className="px-3! py-2! text-gray-700! hover:text-blue-600! font-medium! transition-colors! duration-200!"
//                     onClick={handleLinkClick}
//                   >
//                     {item.name}
//                   </Link>
//                 )}

//                 {/* Desktop Dropdown */}
//                 {item.dropdown && activeDropdown === item.name && (
//                   <div 
//                     className="absolute! left-0! mt-2! w-44! bg-white! rounded-md! shadow-lg! py-2! z-50! border! border-gray-200! space-y-1! font-medium!"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     {item.dropdown.map((subItem) => (
//                       <Link
//                         key={subItem.name}
//                         href={subItem.href}
//                         className="block! px-4! py-2! text-lg! text-gray-700! hover:bg-blue-50! hover:text-blue-600! transition-colors! duration-200! pl-1!"
//                         onClick={handleLinkClick}
//                       >
//                         {subItem.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}

//           </div>

//           {/* End of Desktop Menu */}

//           {/* Mobile menu button */}
//           <div className="md:hidden!">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700! hover:text-blue-900! focus:outline-none! focus:text-blue-600! p-2!"
//             >
//               <svg className="h-6! w-6!" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isOpen ? (
//                   <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden! bg-white! border-t! border-gray-200!">
//             {menuItems.map((item) => (
//               <div key={item.name}>
//                 {item.dropdown ? (
//                   <div className="border-b! border-gray-100!">
//                     <button
//                       onClick={(e) => toggleDropdown(item.name, e)}
//                       className="flex! justify-between! items-center! w-full! px-4! 
//                        py-3! text-left! text-gray-700! hover:bg-gray-50! font-medium!"
//                     >
//                       {item.name}
//                       <svg
//                         className={`w-4! h-4! transition-transform! duration-200! ${
//                           activeDropdown === item.name ? 'rotate-180!' : ''
//                         }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
                    
//                     {/* Mobile Dropdown */}
//                     {activeDropdown === item.name && (
//                       <div 
//                         className="bg-gray-50!"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         {item.dropdown.map((subItem) => (
//                           <Link
//                             key={subItem.name}
//                             href={subItem.href}
//                             className="block! px-6! py-3! text-gray-600! hover:bg-gray-100! border-b! border-gray-100! last:border-b-0!"
//                             onClick={handleLinkClick}
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className="block! px-4! py-3! text-gray-700! hover:bg-gray-50! border-b! border-gray-100! font-medium!"
//                     onClick={handleLinkClick}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Overlay to close dropdowns when clicking outside */}
//       {activeDropdown && (
//         <div
//           className="fixed! inset-0! z-40!"
//           onClick={() => setActiveDropdown(null)}
//         />
//       )}
//     </nav>
//   );
// }




'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
        { name: 'Interactive Map', href: '/map' },
        { name: 'List of Churches', href: '/churches/list' }
      ]
    },
    {
      name: 'EVENTS',
      href: '#',
      dropdown: [
        { name: 'Full Calendar View', href: '/calendar' },
        { name: 'Upcoming Conferences', href: '/conferences' },
        { name: 'Church Programs', href: '/church-events' },
        { name: 'Youth Events', href: '/youth-events' }
      ]
    },
    {
      name: 'RESOURCES',
      href: '#',
      dropdown: [
        { name: 'Sermons', href: '/resources/sermons' },
        { name: 'Articles & Blog', href: '/resources/articles' },
        { name: 'Downloads', href: '/resources/downloads' },
        { name: 'For Leaders (Login)', href: '/resources/leaders' }
      ]
    },
    {
      name: 'CONTACT US',
      href: '/contact',
      dropdown: null
    }
  ];

  const handleMobileLinkClick = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <nav className="bg-white! shadow-lg! sticky! top-0! z-50!">
      <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8!">
        <div className="flex! justify-between! h-16!">
          {/* Logo */}
          <div className="flex! items-center!">
            <Link href="/" className="text-2xl! font-bold! text-blue-800!">
              ANYA
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden! md:flex! items-center! space-x-8!">
            {menuItems.map((item) => (
              <div key={item.name} className="relative!">
                {item.dropdown ? (
                  <div className="relative! group!">
                    <button className="text-gray-700! hover:text-blue-600! px-3! py-2! font-medium!">
                      {item.name}
                    </button>
                    <div className="absolute! left-0! mt-2! w-48! bg-white! rounded-md! shadow-lg! py-1! opacity-0! invisible! group-hover:opacity-100! group-hover:visible! transition-all! duration-200! z-50! border!">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block! px-4! py-2! text-sm! text-gray-700! hover:bg-blue-50! hover:text-blue-600!"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700! hover:text-blue-600! px-3! py-2! font-medium!"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden! flex! items-center!">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700! hover:text-blue-600! p-2!"
            >
              <svg className="h-6! w-6!" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden! bg-white! border-t! border-gray-200!">
            <div className="px-2! pt-2! pb-3! space-y-1!">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-1!">
                      <div className="text-gray-700! px-3! py-2! font-medium!">
                        {item.name}
                      </div>
                      <div className="pl-4! space-y-1!">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleMobileLinkClick(subItem.href)}
                            className="block! w-full! text-left! text-gray-600! hover:text-blue-600! px-3! py-2! font-medium!"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleMobileLinkClick(item.href)}
                      className="block! w-full! text-left! text-gray-700! hover:text-blue-600! px-3! py-2! font-medium!"
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
    </nav>
  );
}