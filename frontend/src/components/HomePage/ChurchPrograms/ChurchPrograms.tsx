// import Link from 'next/link';

// const FeaturedPrograms = () => {
//   // Featured programs - just a few to showcase
//   const featuredPrograms = [
//     {
//       id: 1,
//       title: "Faith & Politics: Where Do We Draw the Line?",
//       church: "Grace Community Church",
//       date: "2024-01-18",
//       time: "19:30",
//       location: "Central District",
//       region: "central",
//       category: "discussion",
//       description: "A respectful dialogue on Christian engagement in politics. Can faith influence governance without compromising spiritual values?",
//       image: "/api/placeholder/400/250",
//       featured: true,
//       controversial: true
//     },
//     {
//       id: 2,
//       title: "Biblical Budgeting & Financial Freedom",
//       church: "St. Andrew's Cathedral",
//       date: "2024-01-20",
//       time: "14:00",
//       location: "City Hall",
//       region: "central",
//       category: "finance",
//       description: "Practical money management from a Christian perspective. Learn to budget, invest, and give generously while honoring God.",
//       image: "/api/placeholder/400/250",
//       featured: true
//     },
//     {
//       id: 3,
//       title: "Mental Health & Spiritual Warfare",
//       church: "Holy Trinity Church",
//       date: "2024-02-08",
//       time: "20:00",
//       location: "Northern Coast",
//       region: "north",
//       category: "health",
//       description: "Navigating depression, anxiety, and mental health challenges from a biblical perspective. Professional counselors present.",
//       image: "/api/placeholder/400/250",
//       featured: true,
//       controversial: true
//     }
//   ];

//   const categories = [
//     { id: 'discussion', name: 'Hot Topics', color: 'bg-red-100 text-red-800' },
//     { id: 'finance', name: 'Finance', color: 'bg-green-100 text-green-800' },
//     { id: 'youth', name: 'Youth', color: 'bg-blue-100 text-blue-800' },
//     { id: 'health', name: 'Mental Health', color: 'bg-indigo-100 text-indigo-800' }
//   ];

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

//   const getCategoryColor = (categoryId) => {
//     const category = categories.find(cat => cat.id === categoryId);
//     return category ? category.color : 'bg-gray-100 text-gray-800';
//   };

//   return (
    
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12! px-2! sm:px-6! lg:px-8!">

//       <div className="max-w-6xl mx-auto!">
//         {/* Header */}
//         <div className="text-center mb-12!">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4!">
//             Featured Church Programs
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover inspiring events and activities happening in churches across the island. 
//             Join us for worship, fellowship, and spiritual growth.
//           </p>
//         </div>



//         {/* Featured Programs Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12!">

//           {featuredPrograms.map(program => (
            
//             <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              
//               <div className="md:flex">

//                 <div className="md:flex-shrink-0 md:w-48 relative">
//                   <div className={`h-48 md:h-full flex items-center justify-center ${
//                     program.controversial 
//                       ? 'bg-gradient-to-br from-red-400 to-orange-500' 
//                       : 'bg-gradient-to-br from-blue-400 to-purple-600'
//                   }`}>
//                     <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//                     </svg>
//                   </div>

//                   {program.controversial && (
//                     <div className="absolute top-3 left-3">
//                       <span className="bg-red-500 text-white px-2! py-1! rounded-full text-xs font-bold">
//                         Hot Topic
//                       </span>
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-2! flex-1">
//                   <div className="flex items-center justify-between mb-2!">
//                     <span className={`inline-flex items-center px-3! py-1! rounded-full text-xs font-medium ${getCategoryColor(program.category)}`}>
//                       {categories.find(cat => cat.id === program.category)?.name}
//                     </span>
//                     <span className="text-sm text-gray-500">{program.region.toUpperCase()}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2!">{program.title}</h3>
//                   <p className="text-gray-600 mb-4!">{program.description}</p>
//                   <div className="flex items-center text-sm text-gray-500 mb-2!">
//                     <svg className="w-4 h-4 mr-1!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                     {program.church}
//                   </div>
//                   <div className="flex items-center text-sm text-gray-500 mb-2!">
//                     <svg className="w-4 h-4 mr-1!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                     {program.location}
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div className="text-sm font-semibold text-blue-600">
//                       {formatDate(program.date)} • {program.time}
//                     </div>
//                     <button className="bg-blue-600 text-white px-4! py-1! rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center">
//           <Link 
//             href="/programs" 
//             className="inline-flex items-center px-3! py-2! bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
//           >
//             View All Programs
//             <svg className="w-5 h-5 ml-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default FeaturedPrograms;


// components/FeaturedProgramsShowcase.tsx
import Link from 'next/link';

const featuredPrograms = [
  {
    id: 1,
    title: "Faith & Politics: Where Do We Draw the Line?",
    church: "Grace Community Church",
    date: "2024-01-18",
    time: "19:30",
    location: "Central District",
    region: "central",
    category: "discussion",
    description: "A respectful dialogue on Christian engagement in politics. Can faith influence governance without compromising spiritual values?",
    featured: true,
    controversial: true
  },
  {
    id: 2,
    title: "Biblical Budgeting & Financial Freedom",
    church: "St. Andrew's Cathedral",
    date: "2024-01-20",
    time: "14:00",
    location: "City Hall",
    region: "central",
    category: "finance",
    description: "Practical money management from a Christian perspective. Learn to budget, invest, and give generously while honoring God.",
    featured: true
  },
  {
    id: 3,
    title: "Mental Health & Spiritual Warfare",
    church: "Holy Trinity Church",
    date: "2024-02-08",
    time: "20:00",
    location: "Northern Coast",
    region: "north",
    category: "health",
    description: "Navigating depression, anxiety, and mental health challenges from a biblical perspective. Professional counselors present.",
    featured: true,
    controversial: true
  }
];

const categories = [
  { id: 'discussion', name: 'Hot Topics', color: 'from-red-500 to-orange-500', bgColor: 'bg-red-50', textColor: 'text-red-600' },
  { id: 'finance', name: 'Finance', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50', textColor: 'text-green-600' },
  { id: 'health', name: 'Mental Health', color: 'from-indigo-500 to-purple-500', bgColor: 'bg-indigo-50', textColor: 'text-indigo-600' }
];

export default function FeaturedProgramsShowcase() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryInfo = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category || { 
      name: 'General', 
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600'
    };
  };

  return (
    <section className="py-16! bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto! px-4! max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12!">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">
            Featured Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
            Discover inspiring events and activities happening in churches across the island
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8! mb-12!">
          {featuredPrograms.map((program) => {
            const categoryInfo = getCategoryInfo(program.category);
            
            return (
              <div 
                key={program.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${categoryInfo.color} p-4! text-white`}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">{categoryInfo.name}</span>
                    {program.controversial && (
                      <span className="bg-white/20 px-2! py-1! rounded-full text-xs font-bold">
                        Hot Topic
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6!">
                  {/* Church & Location */}
                  <div className="flex items-center text-sm text-gray-500 mb-3!">
                    <svg className="w-4 h-4 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {program.church} • {program.region.toUpperCase()}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-gray-900 text-lg mb-3! leading-tight group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4! leading-relaxed">
                    {program.description}
                  </p>

                  {/* Date & Time */}
                  <div className="flex items-center text-sm text-blue-600 font-semibold mb-4!">
                    <svg className="w-4 h-4 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(program.date)} • {program.time}
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-sm text-gray-500 mb-4!">
                    <svg className="w-4 h-4 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {program.location}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 text-white font-semibold py-3! rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/programs"
            className="inline-flex items-center bg-blue-600 text-white font-semibold text-lg px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Programs
            <svg 
              className="w-5 h-5 ml-2!" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}