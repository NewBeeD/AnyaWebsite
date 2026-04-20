// // app/churches/page.tsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function ChurchesPage() {
//   const [selectedRegion, setSelectedRegion] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   const regions = [
//     { id: 'all', name: 'All Regions' },
//     { id: 'north', name: 'Northern Region' },
//     { id: 'south', name: 'Southern Region' },
//     { id: 'east', name: 'Eastern Region' },
//     { id: 'west', name: 'Western Region' },
//     { id: 'central', name: 'Central Region' }
//   ];

//   const churches = [
//     // Northern Region (15 churches)
//     {
//       id: 1,
//       name: "Portsmouth Seventh-day Adventist Church",
//       pastor: "Pastor Michael Laurent",
//       address: "Church Street, Portsmouth, Dominica",
//       phone: "+1 (767) 445-1001",
//       email: "portsmouthsda@anyadominica.org",
//       region: "north",
//       services: {
//         sabbath: "Saturday 9:30 AM",
//         prayer: "Wednesday 7:00 PM",
//         youth: "Friday 6:00 PM"
//       },
//       features: ["Youth Choir", "Pathfinders", "Community Service", "Bible Studies"]
//     },
//     {
//       id: 2,
//       name: "Calibishie SDA Church",
//       pastor: "Pastor David Thomas",
//       address: "Main Road, Calibishie, Dominica",
//       phone: "+1 (767) 445-1002",
//       email: "calibishiesda@anyadominica.org",
//       region: "north",
//       services: {
//         sabbath: "Saturday 9:00 AM",
//         prayer: "Tuesday 7:00 PM",
//         youth: "Saturday 4:00 PM"
//       },
//       features: ["Children's Ministry", "Health Ministry", "Prayer Groups"]
//     },
//     {
//       id: 3,
//       name: "Wesley SDA Church",
//       pastor: "Pastor James Pascal",
//       address: "Wesley Village, Dominica",
//       phone: "+1 (767) 445-1003",
//       email: "wesleysda@anyadominica.org",
//       region: "north",
//       services: {
//         sabbath: "Saturday 10:00 AM",
//         prayer: "Thursday 6:30 PM",
//         youth: "Friday 7:00 PM"
//       },
//       features: ["Music Ministry", "Community Outreach", "Youth Programs"]
//     },

//     // Southern Region (15 churches)
//     {
//       id: 4,
//       name: "Grand Bay SDA Church",
//       pastor: "Pastor Sarah Matthew",
//       address: "Grand Bay Village, Dominica",
//       phone: "+1 (767) 446-1001",
//       email: "grandbaysda@anyadominica.org",
//       region: "south",
//       services: {
//         sabbath: "Saturday 8:30 AM",
//         prayer: "Wednesday 6:00 PM",
//         youth: "Friday 6:30 PM"
//       },
//       features: ["Pathfinders", "Adventurers", "Health Expo", "Food Bank"]
//     },
//     {
//       id: 5,
//       name: "Scott's Head SDA Church",
//       pastor: "Pastor Mark Green",
//       address: "Scott's Head Village, Dominica",
//       phone: "+1 (767) 446-1002",
//       email: "scottsheadsda@anyadominica.org",
//       region: "south",
//       services: {
//         sabbath: "Saturday 9:00 AM",
//         prayer: "Tuesday 7:00 PM",
//         youth: "Sabbath Afternoon"
//       },
//       features: ["Baptismal Preparation", "Bible Workers", "Community Service"]
//     },
//     {
//       id: 6,
//       name: "Soufriere SDA Church",
//       pastor: "Pastor Naomi Thomas",
//       address: "Soufriere Village, Dominica",
//       phone: "+1 (767) 446-1003",
//       email: "soufrieresda@anyadominica.org",
//       region: "south",
//       services: {
//         sabbath: "Saturday 10:00 AM",
//         prayer: "Monday 6:30 PM",
//         youth: "Friday 7:00 PM"
//       },
//       features: ["Youth Empowerment", "Music Ministry", "Prayer Warriors"]
//     },

//     // Eastern Region (20 churches)
//     {
//       id: 7,
//       name: "Marigot SDA Church",
//       pastor: "Pastor Lisa Williams",
//       address: "Marigot Village, Dominica",
//       phone: "+1 (767) 447-1001",
//       email: "marigotsda@anyadominica.org",
//       region: "east",
//       services: {
//         sabbath: "Saturday 9:30 AM",
//         prayer: "Wednesday 7:00 PM",
//         youth: "Friday 6:00 PM"
//       },
//       features: ["Children's Sabbath School", "Health Ministry", "Community Outreach"]
//     },
//     {
//       id: 8,
//       name: "Rosalie SDA Church",
//       pastor: "Pastor Daniel Roberts",
//       address: "Rosalie Village, Dominica",
//       phone: "+1 (767) 447-1002",
//       email: "rosaliesda@anyadominica.org",
//       region: "east",
//       services: {
//         sabbath: "Saturday 8:00 AM",
//         prayer: "Thursday 6:00 PM",
//         youth: "Sabbath 3:00 PM"
//       },
//       features: ["Bible Studies", "Prayer Meetings", "Youth Activities"]
//     },
//     {
//       id: 9,
//       name: "La Plaine SDA Church",
//       pastor: "Pastor Emily Laurent",
//       address: "La Plaine Village, Dominica",
//       phone: "+1 (767) 447-1003",
//       email: "laplainesda@anyadominica.org",
//       region: "east",
//       services: {
//         sabbath: "Saturday 10:00 AM",
//         prayer: "Tuesday 7:00 PM",
//         youth: "Friday 7:30 PM"
//       },
//       features: ["Pathfinder Club", "Adventurer Club", "Community Service"]
//     },

//     // Western Region (20 churches)
//     {
//       id: 10,
//       name: "Roseau Central SDA Church",
//       pastor: "Pastor Maria John",
//       address: "Victoria Street, Roseau, Dominica",
//       phone: "+1 (767) 448-1001",
//       email: "roseaucentralsda@anyadominica.org",
//       region: "west",
//       services: {
//         sabbath: "Saturday 9:00 AM & 11:00 AM",
//         prayer: "Wednesday 7:00 PM",
//         youth: "Friday 6:30 PM"
//       },
//       features: ["Multiple Services", "Youth Choir", "Bible Studies", "Health Ministry"]
//     },
//     {
//       id: 11,
//       name: "Canefield SDA Church",
//       pastor: "Pastor Peter Henderson",
//       address: "Canefield, Dominica",
//       phone: "+1 (767) 448-1002",
//       email: "canefieldsda@anyadominica.org",
//       region: "west",
//       services: {
//         sabbath: "Saturday 9:30 AM",
//         prayer: "Tuesday 7:00 PM",
//         youth: "Friday 7:00 PM"
//       },
//       features: ["Community Outreach", "Music Ministry", "Children's Programs"]
//     },
//     {
//       id: 12,
//       name: "Goodwill SDA Church",
//       pastor: "Pastor Rachel Joseph",
//       address: "Goodwill, Roseau, Dominica",
//       phone: "+1 (767) 448-1003",
//       email: "goodwillsda@anyadominica.org",
//       region: "west",
//       services: {
//         sabbath: "Saturday 10:00 AM",
//         prayer: "Thursday 6:30 PM",
//         youth: "Sabbath 4:00 PM"
//       },
//       features: ["Worship Team", "Prayer Ministry", "Youth Evangelism"]
//     },

//     // Central Region (20 churches)
//     {
//       id: 13,
//       name: "St. Joseph SDA Church",
//       pastor: "Pastor Samuel Charles",
//       address: "St. Joseph Village, Dominica",
//       phone: "+1 (767) 449-1001",
//       email: "stjosephsda@anyadominica.org",
//       region: "central",
//       services: {
//         sabbath: "Saturday 9:00 AM",
//         prayer: "Wednesday 6:30 PM",
//         youth: "Friday 6:00 PM"
//       },
//       features: ["Pathfinders", "Community Service", "Health Programs"]
//     },
//     {
//       id: 14,
//       name: "Morne Prosper SDA Church",
//       pastor: "Pastor Angela Frederick",
//       address: "Morne Prosper, Dominica",
//       phone: "+1 (767) 449-1002",
//       email: "morneprosper@anyadominica.org",
//       region: "central",
//       services: {
//         sabbath: "Saturday 10:00 AM",
//         prayer: "Tuesday 7:00 PM",
//         youth: "Friday 7:00 PM"
//       },
//       features: ["Bible Workers", "Prayer Groups", "Youth Ministry"]
//     },
//     {
//       id: 15,
//       name: "Massacre SDA Church",
//       pastor: "Pastor John Baptiste",
//       address: "Massacre Village, Dominica",
//       phone: "+1 (767) 449-1003",
//       email: "massacresda@anyadominica.org",
//       region: "central",
//       services: {
//         sabbath: "Saturday 9:30 AM",
//         prayer: "Monday 6:30 PM",
//         youth: "Sabbath 3:30 PM"
//       },
//       features: ["Community Outreach", "Music Ministry", "Children's Sabbath School"]
//     }
//   ];

//   const filteredChurches = churches.filter(church => {
//     const matchesRegion = selectedRegion === 'all' || church.region === selectedRegion;
//     const matchesSearch = church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          church.pastor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          church.address.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesRegion && matchesSearch;
//   });

//   const regionStats = {
//     north: churches.filter(c => c.region === 'north').length,
//     south: churches.filter(c => c.region === 'south').length,
//     east: churches.filter(c => c.region === 'east').length,
//     west: churches.filter(c => c.region === 'west').length,
//     central: churches.filter(c => c.region === 'central').length,
//     total: churches.length
//   };

//   return (
    
//     <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
//       {/* Hero Section */}
//       <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
//         <div className="container mx-auto! px-4! max-w-6xl">
//           <div className="text-center">
//             <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
//               ANYA Dominica • 90 Churches United
//             </div>
//             <h1 className="text-5xl font-bold mb-6!">Our Churches</h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
//               Discover the 90 Seventh-day Adventist churches across Dominica where you can worship, 
//               fellowship, and grow in faith with our vibrant communities.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section className="py-12! bg-white">
//         <div className="container mx-auto! px-4! max-w-6xl">
//           <div className="grid grid-cols-2 md:grid-cols-6 gap-4! text-center">
//             <div className="bg-blue-50 rounded-2xl p-4!">
//               <div className="text-2xl font-bold text-blue-600">{regionStats.total}</div>
//               <div className="text-sm text-gray-600">Total Churches</div>
//             </div>
//             <div className="bg-green-50 rounded-2xl p-4!">
//               <div className="text-2xl font-bold text-green-600">{regionStats.north}</div>
//               <div className="text-sm text-gray-600">Northern</div>
//             </div>
//             <div className="bg-purple-50 rounded-2xl p-4!">
//               <div className="text-2xl font-bold text-purple-600">{regionStats.south}</div>
//               <div className="text-sm text-gray-600">Southern</div>
//             </div>
//             <div className="bg-orange-50 rounded-2xl p-4!">
//               <div className="text-2xl font-bold text-orange-600">{regionStats.east}</div>
//               <div className="text-sm text-gray-600">Eastern</div>
//             </div>
//             <div className="bg-red-50 rounded-2xl p-4!">
//               <div className="text-2xl font-bold text-red-600">{regionStats.west}</div>
//               <div className="text-sm text-gray-600">Western</div>
//             </div>
//             <div className="bg-indigo-50 rounded-2xl p-4!">
//               <div className="text-2xl font-bold text-indigo-600">{regionStats.central}</div>
//               <div className="text-sm text-gray-600">Central</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search and Filter Section */}
//       <section className="py-12! bg-gray-50">
//         <div className="container mx-auto! px-4! max-w-6xl">
//           <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6!">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
//               {/* Search Input */}
//               <div>
//                 <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2!">
//                   Search Churches
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     id="search"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     placeholder="Search by church name, pastor, or location..."
//                     className="w-full pl-10! pr-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   />
//                   <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//               </div>

//               {/* Region Filter */}
//               <div>
//                 <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2!">
//                   Filter by Region
//                 </label>
//                 <select
//                   id="region"
//                   value={selectedRegion}
//                   onChange={(e) => setSelectedRegion(e.target.value)}
//                   className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 >
//                   {regions.map(region => (
//                     <option key={region.id} value={region.id}>
//                       {region.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Active Filters Display */}
//             <div className="flex flex-wrap gap-2! mt-4!">
//               {selectedRegion !== 'all' && (
//                 <span className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                   Region: {regions.find(r => r.id === selectedRegion)?.name}
//                   <button
//                     onClick={() => setSelectedRegion('all')}
//                     className="ml-1! hover:text-blue-900"
//                   >
//                     ×
//                   </button>
//                 </span>
//               )}
//               {searchTerm && (
//                 <span className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-green-100 text-green-800">
//                   Search: "{searchTerm}"
//                   <button
//                     onClick={() => setSearchTerm('')}
//                     className="ml-1! hover:text-green-900"
//                   >
//                     ×
//                   </button>
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Churches Grid */}
//       <section className="py-16! bg-white">
//         <div className="container mx-auto! px-4! max-w-6xl">
//           <div className="text-center mb-12!">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4!">
//               {selectedRegion === 'all' ? 'All Churches' : `${regions.find(r => r.id === selectedRegion)?.name} Churches`}
//             </h2>
//             <p className="text-lg text-gray-600">
//               Showing {filteredChurches.length} of {churches.length} churches
//             </p>
//           </div>

//           {filteredChurches.length === 0 ? (
//             <div className="text-center py-12!">
//               <div className="text-6xl mb-4!">🔍</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2!">No churches found</h3>
//               <p className="text-gray-600">Try adjusting your search or filter criteria</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8!">
//               {filteredChurches.map(church => (
//                 <div key={church.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
//                   {/* Church Header */}
//                   <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6! text-white">
//                     <h3 className="font-bold text-lg mb-2!">{church.name}</h3>
//                     <div className="flex items-center text-blue-100 text-sm">
//                       <svg className="w-4 h-4 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       </svg>
//                       {regions.find(r => r.id === church.region)?.name}
//                     </div>
//                   </div>

//                   {/* Church Details */}
//                   <div className="p-6!">
//                     {/* Pastor Info */}
//                     <div className="flex items-center mb-4!">
//                       <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mr-3!">
//                         {church.pastor.split(' ').map(n => n[0]).join('')}
//                       </div>
//                       <div>
//                         <div className="font-semibold text-gray-900">{church.pastor}</div>
//                         <div className="text-sm text-gray-600">Pastor</div>
//                       </div>
//                     </div>

//                     {/* Contact Information */}
//                     <div className="space-y-3! mb-4!">
//                       <div className="flex items-center text-sm text-gray-600">
//                         <svg className="w-4 h-4 mr-3! text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         </svg>
//                         {church.address}
//                       </div>
//                       <a href={`tel:${church.phone}`} className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
//                         <svg className="w-4 h-4 mr-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                         </svg>
//                         {church.phone}
//                       </a>
//                       <a href={`mailto:${church.email}`} className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
//                         <svg className="w-4 h-4 mr-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                         </svg>
//                         {church.email}
//                       </a>
//                     </div>

//                     {/* Service Times */}
//                     <div className="mb-4!">
//                       <h4 className="font-semibold text-gray-900 text-sm mb-2!">Service Times</h4>
//                       <div className="space-y-1! text-sm text-gray-600">
//                         <div className="flex justify-between">
//                           <span>Sabbath:</span>
//                           <span className="font-medium">{church.services.sabbath}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>Prayer Meeting:</span>
//                           <span className="font-medium">{church.services.prayer}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>Youth Service:</span>
//                           <span className="font-medium">{church.services.youth}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Features */}
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-sm mb-2!">Ministries & Features</h4>
//                       <div className="flex flex-wrap gap-1!">
//                         {church.features.map((feature, index) => (
//                           <span key={index} className="bg-gray-100 text-gray-700 px-2! py-1! rounded text-xs">
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex gap-x-2! mt-6!">
//                       <a
//                         href={`tel:${church.phone}`}
//                         className="flex-1 bg-blue-600 text-white text-center py-2! px-4! rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
//                       >
//                         Call Church
//                       </a>
//                       <a
//                         href={`mailto:${church.email}`}
//                         className="flex-1 bg-gray-600 text-white text-center py-2! px-4! rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
//                       >
//                         Email
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Map & Directions CTA */}
//       <section className="py-16! bg-gradient-to-r from-blue-600 to-purple-700 text-white">
//         <div className="container mx-auto! px-4! max-w-4xl text-center">
//           <h2 className="text-3xl font-bold mb-4!">Find a Church Near You</h2>
//           <p className="text-xl text-blue-100 mb-8! max-w-2xl mx-auto!">
//             Use our interactive map to find the closest Seventh-day Adventist church in your area
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4! justify-center">
//             <Link 
//               href="/map"
//               className="bg-white text-blue-600 font-bold px-8! py-4! rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               View Church Map
//             </Link>
//             <Link 
//               href="/visit"
//               className="bg-transparent text-white border-2 border-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
//             >
//               First Time Visiting?
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Regional Information */}
//       <section className="py-16! bg-gray-50">
//         <div className="container mx-auto! px-4! max-w-6xl">
//           <div className="text-center mb-12!">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4!">Church Regions</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
//               ANYA coordinates Adventist churches across all 5 regions of Dominica
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6!">
//             {regions.filter(r => r.id !== 'all').map(region => (
//               <div key={region.id} className="bg-white rounded-2xl p-6! text-center shadow-lg border border-gray-200">
//                 <div className="text-3xl mb-4!">
//                   {region.id === 'north' && '🏔️'}
//                   {region.id === 'south' && '🌴'}
//                   {region.id === 'east' && '🌅'}
//                   {region.id === 'west' && '🏙️'}
//                   {region.id === 'central' && '📍'}
//                 </div>
//                 <h3 className="font-bold text-gray-900 mb-2">{region.name}</h3>
//                 <div className="text-2xl font-bold text-blue-600 mb-2!">
//                   {regionStats[region.id as keyof typeof regionStats]}
//                 </div>
//                 <div className="text-sm text-gray-600">Churches</div>
//                 <button
//                   onClick={() => setSelectedRegion(region.id)}
//                   className="mt-4! text-blue-600 hover:text-blue-700 text-sm font-medium"
//                 >
//                   View Churches →
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Links */}
//       <section className="py-12! bg-white border-t border-gray-200">
//         <div className="container mx-auto! px-4! max-w-6xl">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8! text-center">
//             <div>
//               <h3 className="font-bold text-gray-900 mb-3!">Worship With Us</h3>
//               <Link href="/beliefs" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 Our Beliefs
//               </Link>
//               <Link href="/visit" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 First Time?
//               </Link>
//               <Link href="/sabbath" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 About Sabbath
//               </Link>
//             </div>
//             <div>
//               <h3 className="font-bold text-gray-900 mb-3!">Get Involved</h3>
//               <Link href="/anya" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 Join ANYA
//               </Link>
//               <Link href="/volunteer" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 Volunteer
//               </Link>
//               <Link href="/events" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 Events
//               </Link>
//             </div>
//             <div>
//               <h3 className="font-bold text-gray-900 mb-3!">Resources</h3>
//               <Link href="/map" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 Church Map
//               </Link>
//               <Link href="/resources" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 Downloads
//               </Link>
//               <Link href="/news" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 News
//               </Link>
//             </div>
//             <div>
//               <h3 className="font-bold text-gray-900 mb-3!">Need Help?</h3>
//               <Link href="/contact" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 Contact Us
//               </Link>
//               <Link href="/prayer" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 Prayer Request
//               </Link>
//               <Link href="/faq" className="text-blue-600 hover:text-blue-700 block text-sm">
//                 FAQ
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }









// app/churches/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ChurchesPage() {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const countries = [
    { id: 'all', name: 'All Countries' },
    { id: 'dominica', name: 'Dominica' },
    { id: 'barbados', name: 'Barbados' }
  ];

  const dominicaRegions = [
    { id: 'all', name: 'All Regions', country: 'dominica' },
    { id: 'north', name: 'Northern Region', country: 'dominica' },
    { id: 'south', name: 'Southern Region', country: 'dominica' },
    { id: 'east', name: 'Eastern Region', country: 'dominica' },
    { id: 'west', name: 'Western Region', country: 'dominica' },
    { id: 'central', name: 'Central Region', country: 'dominica' }
  ];

  const barbadosRegions = [
    { id: 'all', name: 'All Regions', country: 'barbados' },
    { id: 'st_michael', name: 'St. Michael', country: 'barbados' },
    { id: 'christ_church', name: 'Christ Church', country: 'barbados' },
    { id: 'st_james', name: 'St. James', country: 'barbados' },
    { id: 'st_george', name: 'St. George', country: 'barbados' },
    { id: 'st_thomas', name: 'St. Thomas', country: 'barbados' },
    { id: 'st_peter', name: 'St. Peter', country: 'barbados' },
    { id: 'st_andrew', name: 'St. Andrew', country: 'barbados' },
    { id: 'st_joseph', name: 'St. Joseph', country: 'barbados' },
    { id: 'st_john', name: 'St. John', country: 'barbados' },
    { id: 'st_philip', name: 'St. Philip', country: 'barbados' },
    { id: 'st_lucy', name: 'St. Lucy', country: 'barbados' }
  ];

  const getRegions = () => {
    if (selectedCountry === 'dominica') return dominicaRegions;
    if (selectedCountry === 'barbados') return barbadosRegions;
    return [...dominicaRegions, ...barbadosRegions.filter(r => r.id !== 'all')];
  };

  const regions = getRegions();

  const churches = [
    // Dominica Churches (Northern Region - 15 churches)
    {
      id: 1,
      name: "Portsmouth Seventh-day Adventist Church",
      pastor: "Pastor Michael Laurent",
      address: "Church Street, Portsmouth, Dominica",
      phone: "+1 (767) 445-1001",
      email: "portsmouthsda@anyadominica.org",
      country: "dominica",
      region: "north",
      services: {
        sabbath: "Saturday 9:30 AM",
        prayer: "Wednesday 7:00 PM",
        youth: "Friday 6:00 PM"
      },
      features: ["Youth Choir", "Pathfinders", "Community Service", "Bible Studies"]
    },
    {
      id: 2,
      name: "Calibishie SDA Church",
      pastor: "Pastor David Thomas",
      address: "Main Road, Calibishie, Dominica",
      phone: "+1 (767) 445-1002",
      email: "calibishiesda@anyadominica.org",
      country: "dominica",
      region: "north",
      services: {
        sabbath: "Saturday 9:00 AM",
        prayer: "Tuesday 7:00 PM",
        youth: "Saturday 4:00 PM"
      },
      features: ["Children's Ministry", "Health Ministry", "Prayer Groups"]
    },

    // Dominica Churches (Southern Region - 15 churches)
    {
      id: 4,
      name: "Grand Bay SDA Church",
      pastor: "Pastor Sarah Matthew",
      address: "Grand Bay Village, Dominica",
      phone: "+1 (767) 446-1001",
      email: "grandbaysda@anyadominica.org",
      country: "dominica",
      region: "south",
      services: {
        sabbath: "Saturday 8:30 AM",
        prayer: "Wednesday 6:00 PM",
        youth: "Friday 6:30 PM"
      },
      features: ["Pathfinders", "Adventurers", "Health Expo", "Food Bank"]
    },

    // Dominica Churches (Eastern Region - 20 churches)
    {
      id: 7,
      name: "Marigot SDA Church",
      pastor: "Pastor Lisa Williams",
      address: "Marigot Village, Dominica",
      phone: "+1 (767) 447-1001",
      email: "marigotsda@anyadominica.org",
      country: "dominica",
      region: "east",
      services: {
        sabbath: "Saturday 9:30 AM",
        prayer: "Wednesday 7:00 PM",
        youth: "Friday 6:00 PM"
      },
      features: ["Children's Sabbath School", "Health Ministry", "Community Outreach"]
    },

    // Dominica Churches (Western Region - 20 churches)
    {
      id: 10,
      name: "Roseau Central SDA Church",
      pastor: "Pastor Maria John",
      address: "Victoria Street, Roseau, Dominica",
      phone: "+1 (767) 448-1001",
      email: "roseaucentralsda@anyadominica.org",
      country: "dominica",
      region: "west",
      services: {
        sabbath: "Saturday 9:00 AM & 11:00 AM",
        prayer: "Wednesday 7:00 PM",
        youth: "Friday 6:30 PM"
      },
      features: ["Multiple Services", "Youth Choir", "Bible Studies", "Health Ministry"]
    },

    // Dominica Churches (Central Region - 20 churches)
    {
      id: 13,
      name: "St. Joseph SDA Church",
      pastor: "Pastor Samuel Charles",
      address: "St. Joseph Village, Dominica",
      phone: "+1 (767) 449-1001",
      email: "stjosephsda@anyadominica.org",
      country: "dominica",
      region: "central",
      services: {
        sabbath: "Saturday 9:00 AM",
        prayer: "Wednesday 6:30 PM",
        youth: "Friday 6:00 PM"
      },
      features: ["Pathfinders", "Community Service", "Health Programs"]
    },

    // Barbados Churches (St. Michael Parish)
    {
      id: 101,
      name: "King Street Seventh-day Adventist Church",
      pastor: "Pastor William Thompson",
      address: "King Street, Bridgetown, Barbados",
      phone: "+1 (246) 426-1001",
      email: "kingstreetsda@anyabarbados.org",
      country: "barbados",
      region: "st_michael",
      services: {
        sabbath: "Saturday 8:30 AM & 11:00 AM",
        prayer: "Wednesday 7:30 PM",
        youth: "Friday 7:00 PM"
      },
      features: ["Orchestra", "Pathfinders", "Community Outreach", "Health Ministry"]
    },
    {
      id: 102,
      name: "Warrens SDA Church",
      pastor: "Pastor Angela Forde",
      address: "Warrens, St. Michael, Barbados",
      phone: "+1 (246) 426-1002",
      email: "warrenssda@anyabarbados.org",
      country: "barbados",
      region: "st_michael",
      services: {
        sabbath: "Saturday 9:00 AM",
        prayer: "Tuesday 7:00 PM",
        youth: "Sabbath 4:00 PM"
      },
      features: ["Youth Ministry", "Music Ministry", "Bible Studies", "Prayer Groups"]
    },

    // Barbados Churches (Christ Church Parish)
    {
      id: 103,
      name: "Oistins SDA Church",
      pastor: "Pastor Robert Clarke",
      address: "Oistins, Christ Church, Barbados",
      phone: "+1 (246) 428-1001",
      email: "oistinssda@anyabarbados.org",
      country: "barbados",
      region: "christ_church",
      services: {
        sabbath: "Saturday 8:00 AM",
        prayer: "Thursday 6:30 PM",
        youth: "Friday 6:30 PM"
      },
      features: ["Children's Church", "Community Service", "Health Expo", "Food Bank"]
    },
    {
      id: 104,
      name: "Silver Sands SDA Church",
      pastor: "Pastor Jennifer Simmons",
      address: "Silver Sands, Christ Church, Barbados",
      phone: "+1 (246) 428-1002",
      email: "silversandssda@anyabarbados.org",
      country: "barbados",
      region: "christ_church",
      services: {
        sabbath: "Saturday 10:00 AM",
        prayer: "Wednesday 7:00 PM",
        youth: "Friday 7:30 PM"
      },
      features: ["Youth Choir", "Pathfinders", "Adventurers", "Bible Workers"]
    },

    // Barbados Churches (St. James Parish)
    {
      id: 105,
      name: "Holetown SDA Church",
      pastor: "Pastor David Worrell",
      address: "Holetown, St. James, Barbados",
      phone: "+1 (246) 432-1001",
      email: "holetownsda@anyabarbados.org",
      country: "barbados",
      region: "st_james",
      services: {
        sabbath: "Saturday 9:30 AM",
        prayer: "Tuesday 7:00 PM",
        youth: "Friday 6:00 PM"
      },
      features: ["Music Ministry", "Community Outreach", "Health Programs", "Prayer Ministry"]
    },

    // Barbados Churches (St. George Parish)
    {
      id: 106,
      name: "Glebe SDA Church",
      pastor: "Pastor Sandra White",
      address: "Glebe, St. George, Barbados",
      phone: "+1 (246) 437-1001",
      email: "glebesda@anyabarbados.org",
      country: "barbados",
      region: "st_george",
      services: {
        sabbath: "Saturday 8:30 AM",
        prayer: "Wednesday 7:30 PM",
        youth: "Friday 7:00 PM"
      },
      features: ["Children's Ministry", "Youth Programs", "Community Service", "Bible Studies"]
    },

    // Barbados Churches (St. Thomas Parish)
    {
      id: 107,
      name: "Welchman Hall SDA Church",
      pastor: "Pastor Mark Alleyne",
      address: "Welchman Hall, St. Thomas, Barbados",
      phone: "+1 (246) 438-1001",
      email: "welchmanhallsda@anyabarbados.org",
      country: "barbados",
      region: "st_thomas",
      services: {
        sabbath: "Saturday 9:00 AM",
        prayer: "Thursday 7:00 PM",
        youth: "Sabbath 3:30 PM"
      },
      features: ["Pathfinder Club", "Adventurer Club", "Health Ministry", "Music Ministry"]
    },

    // Barbados Churches (St. Peter Parish)
    {
      id: 108,
      name: "Speightstown SDA Church",
      pastor: "Pastor Charles Bynoe",
      address: "Speightstown, St. Peter, Barbados",
      phone: "+1 (246) 439-1001",
      email: "speightstownsda@anyabarbados.org",
      country: "barbados",
      region: "st_peter",
      services: {
        sabbath: "Saturday 10:00 AM",
        prayer: "Tuesday 6:30 PM",
        youth: "Friday 6:30 PM"
      },
      features: ["Community Outreach", "Youth Evangelism", "Prayer Warriors", "Bible Workers"]
    },

    // Barbados Churches (St. Andrew Parish)
    {
      id: 109,
      name: "Belleplaine SDA Church",
      pastor: "Pastor Elizabeth Holder",
      address: "Belleplaine, St. Andrew, Barbados",
      phone: "+1 (246) 433-1001",
      email: "belleplainesda@anyabarbados.org",
      country: "barbados",
      region: "st_andrew",
      services: {
        sabbath: "Saturday 8:00 AM",
        prayer: "Wednesday 6:00 PM",
        youth: "Friday 7:00 PM"
      },
      features: ["Children's Sabbath School", "Health Ministry", "Community Service", "Prayer Groups"]
    },

    // Barbados Churches (St. Joseph Parish)
    {
      id: 110,
      name: "Bathsheba SDA Church",
      pastor: "Pastor George Moore",
      address: "Bathsheba, St. Joseph, Barbados",
      phone: "+1 (246) 433-1002",
      email: "bathshebasda@anyabarbados.org",
      country: "barbados",
      region: "st_joseph",
      services: {
        sabbath: "Saturday 9:30 AM",
        prayer: "Thursday 7:00 PM",
        youth: "Friday 6:00 PM"
      },
      features: ["Music Ministry", "Youth Programs", "Community Outreach", "Health Expo"]
    },

    // Barbados Churches (St. John Parish)
    {
      id: 111,
      name: "Four Roads SDA Church",
      pastor: "Pastor Patricia King",
      address: "Four Roads, St. John, Barbados",
      phone: "+1 (246) 433-1003",
      email: "fourroadssda@anyabarbados.org",
      country: "barbados",
      region: "st_john",
      services: {
        sabbath: "Saturday 10:00 AM",
        prayer: "Wednesday 7:30 PM",
        youth: "Friday 7:00 PM"
      },
      features: ["Worship Team", "Prayer Ministry", "Bible Studies", "Community Service"]
    },

    // Barbados Churches (St. Philip Parish)
    {
      id: 112,
      name: "Six Roads SDA Church",
      pastor: "Pastor Andrew Griffith",
      address: "Six Roads, St. Philip, Barbados",
      phone: "+1 (246) 423-1001",
      email: "sixroadssda@anyabarbados.org",
      country: "barbados",
      region: "st_philip",
      services: {
        sabbath: "Saturday 9:00 AM",
        prayer: "Tuesday 7:00 PM",
        youth: "Friday 6:30 PM"
      },
      features: ["Pathfinders", "Adventurers", "Health Ministry", "Youth Choir"]
    },

    // Barbados Churches (St. Lucy Parish)
    {
      id: 113,
      name: "Checker Hall SDA Church",
      pastor: "Pastor Sandra Brathwaite",
      address: "Checker Hall, St. Lucy, Barbados",
      phone: "+1 (246) 439-1002",
      email: "checkerhallsda@anyabarbados.org",
      country: "barbados",
      region: "st_lucy",
      services: {
        sabbath: "Saturday 8:30 AM",
        prayer: "Wednesday 7:00 PM",
        youth: "Friday 7:00 PM"
      },
      features: ["Community Outreach", "Music Ministry", "Children's Programs", "Prayer Groups"]
    }
  ];

  const filteredChurches = churches.filter(church => {
    const matchesCountry = selectedCountry === 'all' || church.country === selectedCountry;
    const matchesRegion = selectedRegion === 'all' || church.region === selectedRegion;
    const matchesSearch = church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         church.pastor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         church.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCountry && matchesRegion && matchesSearch;
  });

  const countryStats = {
    dominica: churches.filter(c => c.country === 'dominica').length,
    barbados: churches.filter(c => c.country === 'barbados').length,
    total: churches.length
  };

  const regionStats = {
    north: churches.filter(c => c.country === 'dominica' && c.region === 'north').length,
    south: churches.filter(c => c.country === 'dominica' && c.region === 'south').length,
    east: churches.filter(c => c.country === 'dominica' && c.region === 'east').length,
    west: churches.filter(c => c.country === 'dominica' && c.region === 'west').length,
    central: churches.filter(c => c.country === 'dominica' && c.region === 'central').length,
    st_michael: churches.filter(c => c.country === 'barbados' && c.region === 'st_michael').length,
    christ_church: churches.filter(c => c.country === 'barbados' && c.region === 'christ_church').length,
    st_james: churches.filter(c => c.country === 'barbados' && c.region === 'st_james').length,
    st_george: churches.filter(c => c.country === 'barbados' && c.region === 'st_george').length,
    st_thomas: churches.filter(c => c.country === 'barbados' && c.region === 'st_thomas').length,
    st_peter: churches.filter(c => c.country === 'barbados' && c.region === 'st_peter').length,
    st_andrew: churches.filter(c => c.country === 'barbados' && c.region === 'st_andrew').length,
    st_joseph: churches.filter(c => c.country === 'barbados' && c.region === 'st_joseph').length,
    st_john: churches.filter(c => c.country === 'barbados' && c.region === 'st_john').length,
    st_philip: churches.filter(c => c.country === 'barbados' && c.region === 'st_philip').length,
    st_lucy: churches.filter(c => c.country === 'barbados' && c.region === 'st_lucy').length,
  };

  const getRegionName = (regionId: string, country: string) => {
    if (country === 'dominica') {
      return dominicaRegions.find(r => r.id === regionId)?.name || regionId;
    } else if (country === 'barbados') {
      return barbadosRegions.find(r => r.id === regionId)?.name || regionId;
    }
    return regionId;
  };

  const getCountryName = (countryId: string) => {
    return countries.find(c => c.id === countryId)?.name || countryId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
              ANYA • Churches in Dominica & Barbados
            </div>
            <h1 className="text-5xl font-bold mb-6!">Our Churches</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
              Discover Seventh-day Adventist churches across Dominica and Barbados where you can worship, 
              fellowship, and grow in faith with our vibrant communities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4! text-center">
            <div className="bg-blue-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-blue-600">{countryStats.total}</div>
              <div className="text-sm text-gray-600">Total Churches</div>
            </div>
            <div className="bg-green-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-green-600">{countryStats.dominica}</div>
              <div className="text-sm text-gray-600">Dominica</div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-purple-600">{countryStats.barbados}</div>
              <div className="text-sm text-gray-600">Barbados</div>
            </div>
          </div>
          
          {/* Region Stats (shown when country is selected) */}
          {selectedCountry !== 'all' && (
            <div className="mt-8">
              <h3 className="text-center text-xl font-bold text-gray-900 mb-4">
                {selectedCountry === 'dominica' ? 'Dominica Regions' : 'Barbados Parishes'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4! text-center">
                {(selectedCountry === 'dominica' ? dominicaRegions : barbadosRegions)
                  .filter(region => region.id !== 'all')
                  .map(region => (
                    <div key={region.id} className="bg-orange-50 rounded-2xl p-4!">
                      <div className="text-2xl font-bold text-orange-600">
                        {regionStats[region.id as keyof typeof regionStats]}
                      </div>
                      <div className="text-sm text-gray-600">{region.name}</div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6!">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6!">
              {/* Country Filter */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2!">
                  Filter by Country
                </label>
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    setSelectedRegion('all');
                  }}
                  className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  {countries.map(country => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2!">
                  Filter by {selectedCountry === 'barbados' ? 'Parish' : 'Region'}
                </label>
                <select
                  id="region"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="all">All {selectedCountry === 'barbados' ? 'Parishes' : 'Regions'}</option>
                  {regions
                    .filter(region => region.id !== 'all')
                    .map(region => (
                      <option key={region.id} value={region.id}>
                        {region.name}
                      </option>
                    ))}
                </select>
              </div>

              {/* Search Input */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2!">
                  Search Churches
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by church name, pastor, or location..."
                    className="w-full pl-10! pr-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            <div className="flex flex-wrap gap-2! mt-4!">
              {selectedCountry !== 'all' && (
                <span className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Country: {getCountryName(selectedCountry)}
                  <button
                    onClick={() => setSelectedCountry('all')}
                    className="ml-1! hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedRegion !== 'all' && (
                <span className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {selectedCountry === 'barbados' ? 'Parish' : 'Region'}: {getRegionName(selectedRegion, selectedCountry)}
                  <button
                    onClick={() => setSelectedRegion('all')}
                    className="ml-1! hover:text-green-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-1! hover:text-orange-900"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Churches Grid */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">
              {selectedCountry === 'all' 
                ? 'All Churches' 
                : `${getCountryName(selectedCountry)} Churches`}
              {selectedRegion !== 'all' && ` • ${getRegionName(selectedRegion, selectedCountry)}`}
            </h2>
            <p className="text-lg text-gray-600">
              Showing {filteredChurches.length} of {churches.length} churches
            </p>
          </div>

          {filteredChurches.length === 0 ? (
            <div className="text-center py-12!">
              <div className="text-6xl mb-4!">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2!">No churches found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8!">
              {filteredChurches.map(church => (
                <div key={church.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Church Header with Country Flag */}
                  <div className={`p-6! text-white ${church.country === 'dominica' ? 'bg-gradient-to-r from-green-600 to-blue-600' : 'bg-gradient-to-r from-blue-600 to-yellow-600'}`}>
                    <div className="flex justify-between items-start mb-2!">
                      <h3 className="font-bold text-lg">{church.name}</h3>
                      <span className="text-xs bg-white/20 px-2! py-1! rounded-full">
                        {church.country === 'dominica' ? '🇩🇲' : '🇧🇧'}
                      </span>
                    </div>
                    <div className="flex items-center text-blue-100 text-sm">
                      <svg className="w-4 h-4 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {getRegionName(church.region, church.country)} • {getCountryName(church.country)}
                    </div>
                  </div>

                  {/* Church Details */}
                  <div className="p-6!">
                    {/* Pastor Info */}
                    <div className="flex items-center mb-4!">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mr-3!">
                        {church.pastor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{church.pastor}</div>
                        <div className="text-sm text-gray-600">Pastor</div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3! mb-4!">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-3! text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {church.address}
                      </div>
                      <a href={`tel:${church.phone}`} className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
                        <svg className="w-4 h-4 mr-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {church.phone}
                      </a>
                      <a href={`mailto:${church.email}`} className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
                        <svg className="w-4 h-4 mr-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {church.email}
                      </a>
                    </div>

                    {/* Service Times */}
                    <div className="mb-4!">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2!">Service Times</h4>
                      <div className="space-y-1! text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Sabbath:</span>
                          <span className="font-medium">{church.services.sabbath}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prayer Meeting:</span>
                          <span className="font-medium">{church.services.prayer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Youth Service:</span>
                          <span className="font-medium">{church.services.youth}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-2!">Ministries & Features</h4>
                      <div className="flex flex-wrap gap-1!">
                        {church.features.map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2! py-1! rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-x-2! mt-6!">
                      <a
                        href={`tel:${church.phone}`}
                        className="flex-1 bg-blue-600 text-white text-center py-2! px-4! rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Call Church
                      </a>
                      <a
                        href={`mailto:${church.email}`}
                        className="flex-1 bg-gray-600 text-white text-center py-2! px-4! rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Regional Information */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Church Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              ANYA coordinates Adventist churches across both Dominica and Barbados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8!">
            {/* Dominica Regions */}
            <div className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6! text-center">Dominica Regions</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4!">
                {dominicaRegions
                  .filter(region => region.id !== 'all')
                  .map(region => (
                    <div 
                      key={region.id} 
                      className="bg-blue-50 rounded-xl p-4! text-center cursor-pointer hover:bg-blue-100 transition-colors"
                      onClick={() => {
                        setSelectedCountry('dominica');
                        setSelectedRegion(region.id);
                      }}
                    >
                      <div className="text-lg font-bold text-blue-600 mb-1!">{region.name}</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {regionStats[region.id as keyof typeof regionStats]}
                      </div>
                      <div className="text-sm text-gray-600">Churches</div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Barbados Parishes */}
            <div className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6! text-center">Barbados Parishes</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4!">
                {barbadosRegions
                  .filter(region => region.id !== 'all')
                  .map(region => (
                    <div 
                      key={region.id} 
                      className="bg-purple-50 rounded-xl p-4! text-center cursor-pointer hover:bg-purple-100 transition-colors"
                      onClick={() => {
                        setSelectedCountry('barbados');
                        setSelectedRegion(region.id);
                      }}
                    >
                      <div className="text-lg font-bold text-purple-600 mb-1!">{region.name}</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {regionStats[region.id as keyof typeof regionStats]}
                      </div>
                      <div className="text-sm text-gray-600">Churches</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions CTA */}
      <section className="py-16! bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto! px-4! max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4!">Find a Church Near You</h2>
          <p className="text-xl text-blue-100 mb-8! max-w-2xl mx-auto!">
            Use our interactive map to find the closest Seventh-day Adventist church in your area
          </p>
          <div className="flex flex-col sm:flex-row gap-4! justify-center">
            <Link 
              href="/map"
              className="bg-white text-blue-600 font-bold px-8! py-4! rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Church Map
            </Link>
            <Link 
              href="/visit"
              className="bg-transparent text-white border-2 border-white font-bold px-8! py-4! rounded-lg hover:bg-white/10 transition-colors"
            >
              First Time Visiting?
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12! bg-white border-t border-gray-200">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8! text-center">
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Worship With Us</h3>
              <Link href="/beliefs" className="text-blue-600 hover:text-blue-700 block text-sm">
                Our Beliefs
              </Link>
              <Link href="/visit" className="text-blue-600 hover:text-blue-700 block text-sm">
                First Time?
              </Link>
              <Link href="/sabbath" className="text-blue-600 hover:text-blue-700 block text-sm">
                About Sabbath
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Get Involved</h3>
              <Link href="/anya" className="text-blue-600 hover:text-blue-700 block text-sm">
                Join ANYA
              </Link>
              <Link href="/volunteer" className="text-blue-600 hover:text-blue-700 block text-sm">
                Volunteer
              </Link>
              <Link href="/events" className="text-blue-600 hover:text-blue-700 block text-sm">
                Events
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Resources</h3>
              <Link href="/map" className="text-blue-600 hover:text-blue-700 block text-sm">
                Church Map
              </Link>
              <Link href="/resources" className="text-blue-600 hover:text-blue-700 block text-sm">
                Downloads
              </Link>
              <Link href="/news" className="text-blue-600 hover:text-blue-700 block text-sm">
                News
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Need Help?</h3>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 block text-sm">
                Contact Us
              </Link>
              <Link href="/prayer" className="text-blue-600 hover:text-blue-700 block text-sm">
                Prayer Request
              </Link>
              <Link href="/faq" className="text-blue-600 hover:text-blue-700 block text-sm">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}