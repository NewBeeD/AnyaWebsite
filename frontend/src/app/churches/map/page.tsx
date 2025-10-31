// // app/map/page.tsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';


// interface Church {
//   id: number;
//   name: string;
//   pastor: string;
//   address: string;
//   phone: string;
//   email: string;
//   region: string;
//   coordinates: { lat: number; lng: number };
//   services: { sabbath: string; prayer: string };
//   type: string;
// }

// interface UserLocation {
//   lat: number;
//   lng: number;
// }







// export default function InteractiveMapPage() {

//   const [selectedChurch, setSelectedChurch] = useState<Church | null>(null);
  
//   const [selectedRegion, setSelectedRegion] = useState('all');

//   const [userLocation, setUserLocation] = useState<UserLocation | null>(null);

//   const [isLoadingLocation, setIsLoadingLocation] = useState(false);

//   // Sample church data with coordinates for Dominica
//   const churches = [
//     // Northern Region
//     {
//       id: 1,
//       name: "Portsmouth SDA Church",
//       pastor: "Pastor Michael Laurent",
//       address: "Church Street, Portsmouth, Dominica",
//       phone: "+1 (767) 445-1001",
//       email: "portsmouthsda@anyadominica.org",
//       region: "north",
//       coordinates: { lat: 15.5763, lng: -61.4556 },
//       services: { sabbath: "Saturday 9:30 AM", prayer: "Wednesday 7:00 PM" },
//       type: "church"
//     },
//     {
//       id: 2,
//       name: "Calibishie SDA Church",
//       pastor: "Pastor David Thomas",
//       address: "Main Road, Calibishie, Dominica",
//       phone: "+1 (767) 445-1002",
//       email: "calibishiesda@anyadominica.org",
//       region: "north",
//       coordinates: { lat: 15.5928, lng: -61.3419 },
//       services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
//       type: "church"
//     },
//     {
//       id: 3,
//       name: "Wesley SDA Church",
//       pastor: "Pastor James Pascal",
//       address: "Wesley Village, Dominica",
//       phone: "+1 (767) 445-1003",
//       email: "wesleysda@anyadominica.org",
//       region: "north",
//       coordinates: { lat: 15.5678, lng: -61.3167 },
//       services: { sabbath: "Saturday 10:00 AM", prayer: "Thursday 6:30 PM" },
//       type: "church"
//     },

//     // Southern Region
//     {
//       id: 4,
//       name: "Grand Bay SDA Church",
//       pastor: "Pastor Sarah Matthew",
//       address: "Grand Bay Village, Dominica",
//       phone: "+1 (767) 446-1001",
//       email: "grandbaysda@anyadominica.org",
//       region: "south",
//       coordinates: { lat: 15.2333, lng: -61.3167 },
//       services: { sabbath: "Saturday 8:30 AM", prayer: "Wednesday 6:00 PM" },
//       type: "church"
//     },
//     {
//       id: 5,
//       name: "Scott's Head SDA Church",
//       pastor: "Pastor Mark Green",
//       address: "Scott's Head Village, Dominica",
//       phone: "+1 (767) 446-1002",
//       email: "scottsheadsda@anyadominica.org",
//       region: "south",
//       coordinates: { lat: 15.2125, lng: -61.2667 },
//       services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
//       type: "church"
//     },

//     // Eastern Region
//     {
//       id: 6,
//       name: "Marigot SDA Church",
//       pastor: "Pastor Lisa Williams",
//       address: "Marigot Village, Dominica",
//       phone: "+1 (767) 447-1001",
//       email: "marigotsda@anyadominica.org",
//       region: "east",
//       coordinates: { lat: 15.5333, lng: -61.2833 },
//       services: { sabbath: "Saturday 9:30 AM", prayer: "Wednesday 7:00 PM" },
//       type: "church"
//     },
//     {
//       id: 7,
//       name: "Rosalie SDA Church",
//       pastor: "Pastor Daniel Roberts",
//       address: "Rosalie Village, Dominica",
//       phone: "+1 (767) 447-1002",
//       email: "rosaliesda@anyadominica.org",
//       region: "east",
//       coordinates: { lat: 15.3667, lng: -61.2667 },
//       services: { sabbath: "Saturday 8:00 AM", prayer: "Thursday 6:00 PM" },
//       type: "church"
//     },

//     // Western Region
//     {
//       id: 8,
//       name: "Roseau Central SDA Church",
//       pastor: "Pastor Maria John",
//       address: "Victoria Street, Roseau, Dominica",
//       phone: "+1 (767) 448-1001",
//       email: "roseaucentralsda@anyadominica.org",
//       region: "west",
//       coordinates: { lat: 15.3017, lng: -61.3875 },
//       services: { sabbath: "Saturday 9:00 AM & 11:00 AM", prayer: "Wednesday 7:00 PM" },
//       type: "church"
//     },
//     {
//       id: 9,
//       name: "Canefield SDA Church",
//       pastor: "Pastor Peter Henderson",
//       address: "Canefield, Dominica",
//       phone: "+1 (767) 448-1002",
//       email: "canefieldsda@anyadominica.org",
//       region: "west",
//       coordinates: { lat: 15.3333, lng: -61.3833 },
//       services: { sabbath: "Saturday 9:30 AM", prayer: "Tuesday 7:00 PM" },
//       type: "church"
//     },
//     {
//       id: 10,
//       name: "Goodwill SDA Church",
//       pastor: "Pastor Rachel Joseph",
//       address: "Goodwill, Roseau, Dominica",
//       phone: "+1 (767) 448-1003",
//       email: "goodwillsda@anyadominica.org",
//       region: "west",
//       coordinates: { lat: 15.3167, lng: -61.3833 },
//       services: { sabbath: "Saturday 10:00 AM", prayer: "Thursday 6:30 PM" },
//       type: "church"
//     },

//     // Central Region
//     {
//       id: 11,
//       name: "St. Joseph SDA Church",
//       pastor: "Pastor Samuel Charles",
//       address: "St. Joseph Village, Dominica",
//       phone: "+1 (767) 449-1001",
//       email: "stjosephsda@anyadominica.org",
//       region: "central",
//       coordinates: { lat: 15.4000, lng: -61.4333 },
//       services: { sabbath: "Saturday 9:00 AM", prayer: "Wednesday 6:30 PM" },
//       type: "church"
//     },
//     {
//       id: 12,
//       name: "Morne Prosper SDA Church",
//       pastor: "Pastor Angela Frederick",
//       address: "Morne Prosper, Dominica",
//       phone: "+1 (767) 449-1002",
//       email: "morneprosper@anyadominica.org",
//       region: "central",
//       coordinates: { lat: 15.3500, lng: -61.3667 },
//       services: { sabbath: "Saturday 10:00 AM", prayer: "Tuesday 7:00 PM" },
//       type: "church"
//     }
//   ];

//   const regions = [
//     { id: 'all', name: 'All Regions', color: 'blue', count: churches.length },
//     { id: 'north', name: 'Northern Region', color: 'green', count: churches.filter(c => c.region === 'north').length },
//     { id: 'south', name: 'Southern Region', color: 'purple', count: churches.filter(c => c.region === 'south').length },
//     { id: 'east', name: 'Eastern Region', color: 'orange', count: churches.filter(c => c.region === 'east').length },
//     { id: 'west', name: 'Western Region', color: 'red', count: churches.filter(c => c.region === 'west').length },
//     { id: 'central', name: 'Central Region', color: 'indigo', count: churches.filter(c => c.region === 'central').length }
//   ];

//   const filteredChurches = selectedRegion === 'all' 
//     ? churches 
//     : churches.filter(church => church.region === selectedRegion);

//   const findNearestChurch = () => {
//     if (!userLocation) return;

//     let nearestChurch = null;
//     let shortestDistance = Infinity;

//     churches.forEach(church => {
//       const distance = calculateDistance(
//         userLocation.lat,
//         userLocation.lng,
//         church.coordinates.lat,
//         church.coordinates.lng
//       );
      
//       if (distance < shortestDistance) {
//         shortestDistance = distance;
//         nearestChurch = church;
//       }
//     });

//     if (nearestChurch) {
//       setSelectedChurch(nearestChurch);
//     }
//   };

//   const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
//     const R = 6371; // Earth's radius in km
//     const dLat = (lat2 - lat1) * Math.PI / 180;
//     const dLon = (lon2 - lon1) * Math.PI / 180;
//     const a = 
//       Math.sin(dLat/2) * Math.sin(dLat/2) +
//       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
//       Math.sin(dLon/2) * Math.sin(dLon/2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     return R * c;
//   };

//   const getUserLocation = () => {
//     if (!navigator.geolocation) {
//       alert('Geolocation is not supported by your browser');
//       return;
//     }

//     setIsLoadingLocation(true);
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         });
//         setIsLoadingLocation(false);
//       },
//       (error) => {
//         console.error('Error getting location:', error);
//         setIsLoadingLocation(false);
//         alert('Unable to retrieve your location. Please ensure location services are enabled.');
//       }
//     );
//   };

//   const getDirectionsUrl = (church: any) => {
//     const destination = `${church.coordinates.lat},${church.coordinates.lng}`;
//     return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=driving`;
//   };

//   return (
//     <div className="min-h-screen! bg-gradient-to-b! from-white! to-blue-50!">
//       {/* Hero Section */}
//       <section className="relative! py-20! bg-gradient-to-r! from-blue-700! to-purple-800! text-white!">
//         <div className="container! mx-auto! px-4! max-w-6xl!">
//           <div className="text-center!">
//             <div className="inline-flex! items-center! px-4! py-2! bg-white/20! rounded-full! text-sm! font-medium! mb-4!">
//               ANYA Dominica • Interactive Church Locator
//             </div>
//             <h1 className="text-5xl! font-bold! mb-6!">Church Map</h1>
//             <p className="text-xl! text-blue-100! max-w-3xl! mx-auto! leading-relaxed!">
//               Find the nearest Seventh-day Adventist church across Dominica. 
//               Use our interactive map to locate worship services near you.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-8! bg-white!">
//         <div className="container! mx-auto! px-4! max-w-7xl!">
//           <div className="grid! grid-cols-1! lg:grid-cols-4! gap-8!">
            
//             {/* Sidebar - Church List & Filters */}
//             <div className="lg:col-span-1! space-y-6!">
              
//               {/* Location Finder */}
//               <div className="bg-blue-50! rounded-2xl! p-6! border! border-blue-200!">
//                 <h3 className="font-bold! text-gray-900! mb-4!">📍 Find Churches Near Me</h3>
//                 <button
//                   onClick={getUserLocation}
//                   disabled={isLoadingLocation}
//                   className="w-full! bg-blue-600! text-white! py-3! rounded-lg! hover:bg-blue-700! transition-colors! disabled:opacity-50! disabled:cursor-not-allowed! font-semibold!"
//                 >
//                   {isLoadingLocation ? (
//                     <div className="flex! items-center! justify-center!">
//                       <svg className="animate-spin! -ml-1! mr-3! h-5! w-5! text-white!" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25!" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75!" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Detecting Location...
//                     </div>
//                   ) : (
//                     'Use My Current Location'
//                   )}
//                 </button>
//                 {userLocation && (
//                   <button
//                     onClick={findNearestChurch}
//                     className="w-full! bg-green-600! text-white! py-2! rounded-lg! hover:bg-green-700! transition-colors! mt-3! font-semibold!"
//                   >
//                     Find Nearest Church
//                   </button>
//                 )}
//               </div>

//               {/* Region Filter */}
//               <div className="bg-white! rounded-2xl! shadow-lg! border! border-gray-200! p-6!">
//                 <h3 className="font-bold! text-gray-900! mb-4!">Filter by Region</h3>
//                 <div className="space-y-2!">
//                   {regions.map(region => (
//                     <button
//                       key={region.id}
//                       onClick={() => setSelectedRegion(region.id)}
//                       className={`w-full! text-left! px-4! py-3! rounded-lg! transition-all! duration-200! ${
//                         selectedRegion === region.id
//                           ? `bg-${region.color}-100! text-${region.color}-700! border-2! border-${region.color}-300!`
//                           : 'bg-gray-50! text-gray-700! hover:bg-gray-100! border-2! border-transparent!'
//                       }`}
//                     >
//                       <div className="flex! justify-between! items-center!">
//                         <span className="font-medium!">{region.name}</span>
//                         <span className={`bg-${region.color}-500! text-white! px-2! py-1! rounded-full! text-xs! font-bold!`}>
//                           {region.count}
//                         </span>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Church List */}
//               <div className="bg-white! rounded-2xl! shadow-lg! border! border-gray-200! p-6!">
//                 <h3 className="font-bold! text-gray-900! mb-4!">
//                   Churches in {regions.find(r => r.id === selectedRegion)?.name}
//                   <span className="text-gray-500! text-sm! font-normal! ml-2!">({filteredChurches.length})</span>
//                 </h3>
//                 <div className="space-y-3! max-h-96! overflow-y-auto!">
//                   {filteredChurches.map(church => (
//                     <button
//                       key={church.id}
//                       onClick={() => setSelectedChurch(church)}
//                       className={`w-full! text-left! p-4! rounded-lg! border-2! transition-all! duration-200! ${
//                         selectedChurch?.id === church.id
//                           ? 'border-blue-500! bg-blue-50!'
//                           : 'border-gray-200! bg-gray-50! hover:border-blue-300! hover:bg-blue-25!'
//                       }`}
//                     >
//                       <div className="font-semibold! text-gray-900! text-sm! mb-1!">{church.name}</div>
//                       <div className="text-xs! text-gray-600! mb-2!">{church.address}</div>
//                       <div className="flex! justify-between! items-center!">
//                         <span className={`text-xs! px-2! py-1! rounded-full! ${
//                           church.region === 'north' ? 'bg-green-100! text-green-700!' :
//                           church.region === 'south' ? 'bg-purple-100! text-purple-700!' :
//                           church.region === 'east' ? 'bg-orange-100! text-orange-700!' :
//                           church.region === 'west' ? 'bg-red-100! text-red-700!' :
//                           'bg-indigo-100! text-indigo-700!'
//                         }`}>
//                           {regions.find(r => r.id === church.region)?.name}
//                         </span>
//                         <span className="text-blue-600! text-xs! font-medium!">View →</span>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Main Map Area */}
//             <div className="lg:col-span-3!">
              
//               {/* Map Container */}
//               <div className="bg-white! rounded-2xl! shadow-lg! border! border-gray-200! overflow-hidden!">
//                 <div className="bg-gray-800! p-4! text-white!">
//                   <div className="flex! justify-between! items-center!">
//                     <h3 className="font-bold! text-lg!">Dominica Church Map</h3>
//                     <div className="flex! items-center! space-x-4! text-sm!">
//                       <div className="flex! items-center!">
//                         <div className="w-3! h-3! bg-blue-500! rounded-full! mr-2!"></div>
//                         <span>Church Locations</span>
//                       </div>
//                       {userLocation && (
//                         <div className="flex! items-center!">
//                           <div className="w-3! h-3! bg-green-500! rounded-full! mr-2!"></div>
//                           <span>Your Location</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Interactive Map Visualization */}
//                 <div className="relative! bg-gradient-to-br! from-blue-100! to-green-100! h-96! p-8!">
//                   {/* Dominica Island Outline */}
//                   <div className="absolute! inset-8! bg-green-200! rounded-2xl! border-4! border-green-300! shadow-lg!">
                    
//                     {/* Map Points */}
//                     {filteredChurches.map(church => (
//                       <button
//                         key={church.id}
//                         onClick={() => setSelectedChurch(church)}
//                         className={`absolute! transform! -translate-x-1/2! -translate-y-1/2! transition-all! duration-200! ${
//                           selectedChurch?.id === church.id ? 'scale-125! z-10!' : 'hover:scale-110!'
//                         }`}
//                         style={{
//                           left: `${((church.coordinates.lng + 61.5) / 1.2) * 100}%`,
//                           top: `${((15.6 - church.coordinates.lat) / 0.8) * 100}%`
//                         }}
//                       >
//                         <div className={`w-6! h-6! rounded-full! border-2! border-white! shadow-lg! ${
//                           church.region === 'north' ? 'bg-green-500!' :
//                           church.region === 'south' ? 'bg-purple-500!' :
//                           church.region === 'east' ? 'bg-orange-500!' :
//                           church.region === 'west' ? 'bg-red-500!' :
//                           'bg-indigo-500!'
//                         }`}></div>
//                       </button>
//                     ))}

//                     {/* User Location Marker */}
//                     {userLocation && (
//                       <div
//                         className="absolute! w-4! h-4! bg-green-500! rounded-full! border-2! border-white! shadow-lg! animate-pulse!"
//                         style={{
//                           left: `${((userLocation.lng + 61.5) / 1.2) * 100}%`,
//                           top: `${((15.6 - userLocation.lat) / 0.8) * 100}%`
//                         }}
//                       ></div>
//                     )}
//                   </div>

//                   {/* Map Legend */}
//                   <div className="absolute! bottom-4! left-4! bg-white/90! backdrop-blur-sm! rounded-lg! p-4! shadow-lg!">
//                     <h4 className="font-semibold! text-gray-900! text-sm! mb-2!">Regions</h4>
//                     <div className="space-y-1! text-xs!">
//                       {regions.filter(r => r.id !== 'all').map(region => (
//                         <div key={region.id} className="flex! items-center!">
//                           <div className={`w-3! h-3! rounded-full! mr-2! ${
//                             region.id === 'north' ? 'bg-green-500!' :
//                             region.id === 'south' ? 'bg-purple-500!' :
//                             region.id === 'east' ? 'bg-orange-500!' :
//                             region.id === 'west' ? 'bg-red-500!' :
//                             'bg-indigo-500!'
//                           }`}></div>
//                           <span className="text-gray-700!">{region.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Selected Church Details */}
//                 {selectedChurch && (
//                   <div className="border-t! border-gray-200! p-6!">
//                     <div className="grid! grid-cols-1! md:grid-cols-2! gap-6!">
//                       <div>
//                         <h3 className="text-xl! font-bold! text-gray-900! mb-2!">{selectedChurch.name}</h3>
//                         <div className="space-y-2! text-sm! text-gray-600!">
//                           <div className="flex! items-center!">
//                             <svg className="w-4! h-4! mr-3! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                             </svg>
//                             {selectedChurch.pastor}
//                           </div>
//                           <div className="flex! items-center!">
//                             <svg className="w-4! h-4! mr-3! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                             </svg>
//                             {selectedChurch.address}
//                           </div>
//                           <a href={`tel:${selectedChurch.phone}`} className="flex! items-center! text-blue-600! hover:text-blue-700! transition-colors!">
//                             <svg className="w-4! h-4! mr-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                             </svg>
//                             {selectedChurch.phone}
//                           </a>
//                         </div>
//                       </div>
//                       <div>
//                         <h4 className="font-semibold! text-gray-900! mb-2!">Service Times</h4>
//                         <div className="space-y-1! text-sm! text-gray-600!">
//                           <div className="flex! justify-between!">
//                             <span>Sabbath Service:</span>
//                             <span className="font-medium!">{selectedChurch.services.sabbath}</span>
//                           </div>
//                           <div className="flex! justify-between!">
//                             <span>Prayer Meeting:</span>
//                             <span className="font-medium!">{selectedChurch.services.prayer}</span>
//                           </div>
//                         </div>
//                         <div className="flex! gap-x-3! mt-4!">
//                           <a
//                             href={getDirectionsUrl(selectedChurch)}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex-1! bg-blue-600! text-white! text-center! py-2! px-4! rounded-lg! hover:bg-blue-700! transition-colors! text-sm! font-semibold!"
//                           >
//                             Get Directions
//                           </a>
//                           <a
//                             href={`tel:${selectedChurch.phone}`}
//                             className="flex-1! bg-gray-600! text-white! text-center! py-2! px-4! rounded-lg! hover:bg-gray-700! transition-colors! text-sm! font-semibold!"
//                           >
//                             Call Church
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Quick Actions */}
//               <div className="grid! grid-cols-1! md:grid-cols-3! gap-4! mt-6!">
//                 <Link
//                   href="/churches/list"
//                   className="bg-white! rounded-2xl! p-6! shadow-lg! border! border-gray-200! hover:shadow-xl! transition-all! duration-300! text-center!"
//                 >
//                   <div className="text-2xl! mb-2!">📋</div>
//                   <h4 className="font-semibold! text-gray-900! mb-2!">Full Church List</h4>
//                   <p className="text-sm! text-gray-600!">Browse complete directory of 90 churches</p>
//                 </Link>
//                 <Link
//                   href="/about/beliefs"
//                   className="bg-white! rounded-2xl! p-6! shadow-lg! border! border-gray-200! hover:shadow-xl! transition-all! duration-300! text-center!"
//                 >
//                   <div className="text-2xl! mb-2!">⛪</div>
//                   <h4 className="font-semibold! text-gray-900! mb-2!">First Time Visiting?</h4>
//                   <p className="text-sm! text-gray-600!">What to expect at our services</p>
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="bg-white! rounded-2xl! p-6! shadow-lg! border! border-gray-200! hover:shadow-xl! transition-all! duration-300! text-center!"
//                 >
//                   <div className="text-2xl! mb-2!">💬</div>
//                   <h4 className="font-semibold! text-gray-900! mb-2!">Need Help?</h4>
//                   <p className="text-sm! text-gray-600!">Contact our team for assistance</p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Regional Information */}
//       <section className="py-16! bg-gray-50!">
//         <div className="container! mx-auto! px-4! max-w-6xl!">
//           <div className="text-center! mb-12!">
//             <h2 className="text-3xl! font-bold! text-gray-900! mb-4!">Churches Across Dominica</h2>
//             <p className="text-lg! text-gray-600! max-w-2xl! mx-auto!">
//               ANYA coordinates Adventist churches in every region of our beautiful island
//             </p>
//           </div>

//           <div className="grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-5! gap-6!">
//             {regions.filter(r => r.id !== 'all').map(region => (
//               <div key={region.id} className="bg-white! rounded-2xl! p-6! text-center! shadow-lg! border! border-gray-200! hover:shadow-xl! transition-all! duration-300!">
//                 <div className="text-3xl! mb-4!">
//                   {region.id === 'north' && '🏔️'}
//                   {region.id === 'south' && '🌴'}
//                   {region.id === 'east' && '🌅'}
//                   {region.id === 'west' && '🏙️'}
//                   {region.id === 'central' && '📍'}
//                 </div>
//                 <h3 className="font-bold! text-gray-900! mb-2!">{region.name}</h3>
//                 <div className="text-2xl! font-bold! text-blue-600! mb-2!">{region.count}</div>
//                 <div className="text-sm! text-gray-600!">Churches</div>
//                 <button
//                   onClick={() => setSelectedRegion(region.id)}
//                   className="mt-4! text-blue-600! hover:text-blue-700! text-sm! font-medium!"
//                 >
//                   View on Map →
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





// app/map/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define interfaces for TypeScript
interface Church {
  id: number;
  name: string;
  pastor: string;
  address: string;
  phone: string;
  email: string;
  region: string;
  coordinates: { lat: number; lng: number };
  services: { sabbath: string; prayer: string };
  type: string;
}

interface UserLocation {
  lat: number;
  lng: number;
}

interface Region {
  id: string;
  name: string;
  color: string;
  count: number;
}

export default function InteractiveMapPage() {
  const [selectedChurch, setSelectedChurch] = useState<Church | null>(null);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  // Sample church data with coordinates for Dominica
  const churches: Church[] = [
    // Northern Region
    {
      id: 1,
      name: "Portsmouth SDA Church",
      pastor: "Pastor Michael Laurent",
      address: "Church Street, Portsmouth, Dominica",
      phone: "+1 (767) 445-1001",
      email: "portsmouthsda@anyadominica.org",
      region: "north",
      coordinates: { lat: 15.5763, lng: -61.4556 },
      services: { sabbath: "Saturday 9:30 AM", prayer: "Wednesday 7:00 PM" },
      type: "church"
    },
    {
      id: 2,
      name: "Calibishie SDA Church",
      pastor: "Pastor David Thomas",
      address: "Main Road, Calibishie, Dominica",
      phone: "+1 (767) 445-1002",
      email: "calibishiesda@anyadominica.org",
      region: "north",
      coordinates: { lat: 15.5928, lng: -61.3419 },
      services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    },
    {
      id: 3,
      name: "Wesley SDA Church",
      pastor: "Pastor James Pascal",
      address: "Wesley Village, Dominica",
      phone: "+1 (767) 445-1003",
      email: "wesleysda@anyadominica.org",
      region: "north",
      coordinates: { lat: 15.5678, lng: -61.3167 },
      services: { sabbath: "Saturday 10:00 AM", prayer: "Thursday 6:30 PM" },
      type: "church"
    },

    // Southern Region
    {
      id: 4,
      name: "Grand Bay SDA Church",
      pastor: "Pastor Sarah Matthew",
      address: "Grand Bay Village, Dominica",
      phone: "+1 (767) 446-1001",
      email: "grandbaysda@anyadominica.org",
      region: "south",
      coordinates: { lat: 15.2333, lng: -61.3167 },
      services: { sabbath: "Saturday 8:30 AM", prayer: "Wednesday 6:00 PM" },
      type: "church"
    },
    {
      id: 5,
      name: "Scott's Head SDA Church",
      pastor: "Pastor Mark Green",
      address: "Scott's Head Village, Dominica",
      phone: "+1 (767) 446-1002",
      email: "scottsheadsda@anyadominica.org",
      region: "south",
      coordinates: { lat: 15.2125, lng: -61.2667 },
      services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    },

    // Eastern Region
    {
      id: 6,
      name: "Marigot SDA Church",
      pastor: "Pastor Lisa Williams",
      address: "Marigot Village, Dominica",
      phone: "+1 (767) 447-1001",
      email: "marigotsda@anyadominica.org",
      region: "east",
      coordinates: { lat: 15.5333, lng: -61.2833 },
      services: { sabbath: "Saturday 9:30 AM", prayer: "Wednesday 7:00 PM" },
      type: "church"
    },
    {
      id: 7,
      name: "Rosalie SDA Church",
      pastor: "Pastor Daniel Roberts",
      address: "Rosalie Village, Dominica",
      phone: "+1 (767) 447-1002",
      email: "rosaliesda@anyadominica.org",
      region: "east",
      coordinates: { lat: 15.3667, lng: -61.2667 },
      services: { sabbath: "Saturday 8:00 AM", prayer: "Thursday 6:00 PM" },
      type: "church"
    },

    // Western Region
    {
      id: 8,
      name: "Roseau Central SDA Church",
      pastor: "Pastor Maria John",
      address: "Victoria Street, Roseau, Dominica",
      phone: "+1 (767) 448-1001",
      email: "roseaucentralsda@anyadominica.org",
      region: "west",
      coordinates: { lat: 15.3017, lng: -61.3875 },
      services: { sabbath: "Saturday 9:00 AM & 11:00 AM", prayer: "Wednesday 7:00 PM" },
      type: "church"
    },
    {
      id: 9,
      name: "Canefield SDA Church",
      pastor: "Pastor Peter Henderson",
      address: "Canefield, Dominica",
      phone: "+1 (767) 448-1002",
      email: "canefieldsda@anyadominica.org",
      region: "west",
      coordinates: { lat: 15.3333, lng: -61.3833 },
      services: { sabbath: "Saturday 9:30 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    },
    {
      id: 10,
      name: "Goodwill SDA Church",
      pastor: "Pastor Rachel Joseph",
      address: "Goodwill, Roseau, Dominica",
      phone: "+1 (767) 448-1003",
      email: "goodwillsda@anyadominica.org",
      region: "west",
      coordinates: { lat: 15.3167, lng: -61.3833 },
      services: { sabbath: "Saturday 10:00 AM", prayer: "Thursday 6:30 PM" },
      type: "church"
    },

    // Central Region
    {
      id: 11,
      name: "St. Joseph SDA Church",
      pastor: "Pastor Samuel Charles",
      address: "St. Joseph Village, Dominica",
      phone: "+1 (767) 449-1001",
      email: "stjosephsda@anyadominica.org",
      region: "central",
      coordinates: { lat: 15.4000, lng: -61.4333 },
      services: { sabbath: "Saturday 9:00 AM", prayer: "Wednesday 6:30 PM" },
      type: "church"
    },
    {
      id: 12,
      name: "Morne Prosper SDA Church",
      pastor: "Pastor Angela Frederick",
      address: "Morne Prosper, Dominica",
      phone: "+1 (767) 449-1002",
      email: "morneprosper@anyadominica.org",
      region: "central",
      coordinates: { lat: 15.3500, lng: -61.3667 },
      services: { sabbath: "Saturday 10:00 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    }
  ];

  const regions: Region[] = [
    { id: 'all', name: 'All Regions', color: 'blue', count: churches.length },
    { id: 'north', name: 'Northern Region', color: 'green', count: churches.filter(c => c.region === 'north').length },
    { id: 'south', name: 'Southern Region', color: 'purple', count: churches.filter(c => c.region === 'south').length },
    { id: 'east', name: 'Eastern Region', color: 'orange', count: churches.filter(c => c.region === 'east').length },
    { id: 'west', name: 'Western Region', color: 'red', count: churches.filter(c => c.region === 'west').length },
    { id: 'central', name: 'Central Region', color: 'indigo', count: churches.filter(c => c.region === 'central').length }
  ];

  const filteredChurches = selectedRegion === 'all' 
    ? churches 
    : churches.filter(church => church.region === selectedRegion);

  const findNearestChurch = () => {
    if (!userLocation) return;

    let nearestChurch: Church | null = null;
    let shortestDistance = Infinity;

    churches.forEach(church => {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        church.coordinates.lat,
        church.coordinates.lng
      );
      
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestChurch = church;
      }
    });

    if (nearestChurch) {
      setSelectedChurch(nearestChurch);
    }
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setIsLoadingLocation(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        setIsLoadingLocation(false);
        alert('Unable to retrieve your location. Please ensure location services are enabled.');
      }
    );
  };

  const getDirectionsUrl = (church: Church) => {
    const destination = `${church.coordinates.lat},${church.coordinates.lng}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=driving`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
              ANYA Dominica • Interactive Church Locator
            </div>
            <h1 className="text-5xl font-bold mb-6!">Church Map</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Find the nearest Seventh-day Adventist church across Dominica. 
              Use our interactive map to locate worship services near you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8! bg-white">
        <div className="container mx-auto px-4! max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8!">
            
            {/* Sidebar - Church List & Filters */}
            <div className="lg:col-span-1 space-y-6!">
              
              {/* Location Finder */}
              <div className="bg-blue-50 rounded-2xl p-6! border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4!">📍 Find Churches Near Me</h3>
                <button
                  onClick={getUserLocation}
                  disabled={isLoadingLocation}
                  className="w-full bg-blue-600 text-white py-3! rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                >
                  {isLoadingLocation ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1! mr-3! h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Detecting Location...
                    </div>
                  ) : (
                    'Use My Current Location'
                  )}
                </button>
                {userLocation && (
                  <button
                    onClick={findNearestChurch}
                    className="w-full bg-green-600 text-white py-2! rounded-lg hover:bg-green-700 transition-colors mt-3! font-semibold"
                  >
                    Find Nearest Church
                  </button>
                )}
              </div>

              {/* Region Filter */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6!">
                <h3 className="font-bold text-gray-900 mb-4!">Filter by Region</h3>
                <div className="space-y-2!">
                  {regions.map(region => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`w-full text-left px-4! py-3! rounded-lg transition-all duration-200 ${
                        selectedRegion === region.id
                          ? `bg-${region.color}-100 text-${region.color}-700 border-2 border-${region.color}-300`
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{region.name}</span>
                        <span className={`bg-${region.color}-500 text-white px-2! py-1! rounded-full text-xs font-bold`}>
                          {region.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Church List */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6!">
                <h3 className="font-bold text-gray-900 mb-4!">
                  Churches in {regions.find(r => r.id === selectedRegion)?.name}
                  <span className="text-gray-500 text-sm font-normal ml-2!">({filteredChurches.length})</span>
                </h3>
                <div className="space-y-3! max-h-96 overflow-y-auto">
                  {filteredChurches.map(church => (
                    <button
                      key={church.id}
                      onClick={() => setSelectedChurch(church)}
                      className={`w-full text-left p-4! rounded-lg border-2 transition-all duration-200 ${
                        selectedChurch?.id === church.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-25'
                      }`}
                    >
                      <div className="font-semibold text-gray-900 text-sm mb-1!">{church.name}</div>
                      <div className="text-xs text-gray-600 mb-2!">{church.address}</div>
                      <div className="flex justify-between items-center">
                        <span className={`text-xs px-2! py-1! rounded-full ${
                          church.region === 'north' ? 'bg-green-100 text-green-700' :
                          church.region === 'south' ? 'bg-purple-100 text-purple-700' :
                          church.region === 'east' ? 'bg-orange-100 text-orange-700' :
                          church.region === 'west' ? 'bg-red-100 text-red-700' :
                          'bg-indigo-100 text-indigo-700'
                        }`}>
                          {regions.find(r => r.id === church.region)?.name}
                        </span>
                        <span className="text-blue-600 text-xs font-medium">View →</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Map Area */}
            <div className="lg:col-span-3">
              
              {/* Map Container */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-800 p-4! text-white">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Dominica Church Map</h3>
                    <div className="flex items-center space-x-4! text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2!"></div>
                        <span>Church Locations</span>
                      </div>
                      {userLocation && (
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2!"></div>
                          <span>Your Location</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Interactive Map Visualization */}
                <div className="relative bg-gradient-to-br from-blue-100 to-green-100 h-96 p-8!">
                  {/* Dominica Island Outline */}
                  <div className="absolute inset-8 bg-green-200 rounded-2xl border-4 border-green-300 shadow-lg">
                    
                    {/* Map Points */}
                    {filteredChurches.map(church => (
                      <button
                        key={church.id}
                        onClick={() => setSelectedChurch(church)}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                          selectedChurch?.id === church.id ? 'scale-125 z-10' : 'hover:scale-110'
                        }`}
                        style={{
                          left: `${((church.coordinates.lng + 61.5) / 1.2) * 100}%`,
                          top: `${((15.6 - church.coordinates.lat) / 0.8) * 100}%`
                        }}
                      >
                        <div className={`w-6 h-6 rounded-full border-2 border-white shadow-lg ${
                          church.region === 'north' ? 'bg-green-500' :
                          church.region === 'south' ? 'bg-purple-500' :
                          church.region === 'east' ? 'bg-orange-500' :
                          church.region === 'west' ? 'bg-red-500' :
                          'bg-indigo-500'
                        }`}></div>
                      </button>
                    ))}

                    {/* User Location Marker */}
                    {userLocation && (
                      <div
                        className="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"
                        style={{
                          left: `${((userLocation.lng + 61.5) / 1.2) * 100}%`,
                          top: `${((15.6 - userLocation.lat) / 0.8) * 100}%`
                        }}
                      ></div>
                    )}
                  </div>

                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4! shadow-lg">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2!">Regions</h4>
                    <div className="space-y-1! text-xs">
                      {regions.filter(r => r.id !== 'all').map(region => (
                        <div key={region.id} className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-2 ${
                            region.id === 'north' ? 'bg-green-500' :
                            region.id === 'south' ? 'bg-purple-500' :
                            region.id === 'east' ? 'bg-orange-500' :
                            region.id === 'west' ? 'bg-red-500' :
                            'bg-indigo-500'
                          }`}></div>
                          <span className="text-gray-700">{region.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Selected Church Details */}
                {selectedChurch && (
                  <div className="border-t border-gray-200 p-6!">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2!">{selectedChurch.name}</h3>
                        <div className="space-y-2! text-sm text-gray-600">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-3! text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {selectedChurch.pastor}
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-3! text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {selectedChurch.address}
                          </div>
                          <a href={`tel:${selectedChurch.phone}`} className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                            <svg className="w-4 h-4 mr-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {selectedChurch.phone}
                          </a>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2!">Service Times</h4>
                        <div className="space-y-1! text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>Sabbath Service:</span>
                            <span className="font-medium">{selectedChurch.services.sabbath}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Prayer Meeting:</span>
                            <span className="font-medium">{selectedChurch.services.prayer}</span>
                          </div>
                        </div>
                        <div className="flex gap-x-3! mt-4!">
                          <a
                            href={getDirectionsUrl(selectedChurch)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                          >
                            Get Directions
                          </a>
                          <a
                            href={`tel:${selectedChurch.phone}`}
                            className="flex-1 bg-gray-600 text-white text-center py-2! px-4! rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                          >
                            Call Church
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4! mt-6!">
                <Link
                  href="/churches/list"
                  className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2!">📋</div>
                  <h4 className="font-semibold text-gray-900 mb-2!">Full Church List</h4>
                  <p className="text-sm text-gray-600">Browse complete directory of 90 churches</p>
                </Link>
                <Link
                  href="/about/beliefs"
                  className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2!">⛪</div>
                  <h4 className="font-semibold text-gray-900 mb-2!">First Time Visiting?</h4>
                  <p className="text-sm text-gray-600">What to expect at our services</p>
                </Link>
                <Link
                  href="/contact"
                  className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2!">💬</div>
                  <h4 className="font-semibold text-gray-900 mb-2!">Need Help?</h4>
                  <p className="text-sm text-gray-600">Contact our team for assistance</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Information */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Churches Across Dominica</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              ANYA coordinates Adventist churches in every region of our beautiful island
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6!">
            {regions.filter(r => r.id !== 'all').map(region => (
              <div key={region.id} className="bg-white rounded-2xl p-6! text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4!">
                  {region.id === 'north' && '🏔️'}
                  {region.id === 'south' && '🌴'}
                  {region.id === 'east' && '🌅'}
                  {region.id === 'west' && '🏙️'}
                  {region.id === 'central' && '📍'}
                </div>
                <h3 className="font-bold text-gray-900 mb-2!">{region.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2!">{region.count}</div>
                <div className="text-sm text-gray-600">Churches</div>
                <button
                  onClick={() => setSelectedRegion(region.id)}
                  className="mt-4! text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View on Map →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}