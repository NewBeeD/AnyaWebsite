'use client';

import Link from 'next/link';

const audienceCards = [
  {
    id: 1,
    icon: (
      <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    headline: "Find a Church & Events",
    description: "Looking for a local church home or the next island-wide gathering? Find everything you need here.",
    buttonText: "Explore Church Directory",
    buttonLink: "/churches",
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200"
  },
  {
    id: 2,
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    headline: "Leadership Resources",
    description: "Access our private portal for forums, shared documents, and leader-specific events.",
    buttonText: "Leader Login",
    buttonSecondaryText: "Learn More",
    buttonLink: "/leaders",
    buttonSecondaryLink: "/leaders-info",
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-200"
  },
  {
    id: 3,
    icon: (
      <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    headline: "New Here?",
    description: "Learn about our shared mission, beliefs, and how we serve the community.",
    buttonText: "Our Beliefs",
    buttonLink: "/beliefs",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200"
  }
];

// const AudienceCard = ({ card }: { card: typeof audienceCards[0] }) => {
//   return (
//     <div className={`bg-gradient-to-br ${card.bgGradient} border ${card.borderColor} rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105`}>
//       {/* Icon */}
//       <div className="flex justify-center mb-4">
//         <div className="bg-white rounded-full p-3 shadow-sm">
//           {card.icon}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="text-center flex-1 flex flex-col">
//         <h3 className="text-xl font-semibold text-gray-800 mb-3">
//           {card.headline}
//         </h3>
        
//         <p className="text-gray-600 mb-6 leading-relaxed flex-1">
//           {card.description}
//         </p>

//         {/* Button(s) */}
//         <div className="space-y-3">
//           <Link 
//             href={card.buttonLink}
//             className="block w-full bg-white text-gray-800 font-medium py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors text-center"
//           >
//             {card.buttonText}
//           </Link>
          
//           {card.buttonSecondaryText && (
//             <Link 
//               href={card.buttonSecondaryLink || '#'}
//               className="block w-full bg-transparent text-gray-600 font-medium py-3 px-4 rounded-lg border border-gray-300 hover:bg-white hover:border-gray-400 transition-colors text-center"
//             >
//               {card.buttonSecondaryText}
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };



const AudienceCard = ({ card }: { card: typeof audienceCards[0] }) => {
  return (
    <div className="group relative h-full flex flex-col text-center">
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} rounded-2xl transition-all duration-500 group-hover:scale-105 group-hover:opacity-80`}></div>
      
      {/* Card Content */}
      <div className="relative flex-1 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group-hover:shadow-2xl transition-all duration-500 p-8 flex flex-col overflow-hidden">
        
        {/* Decorative Accent */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.bgGradient}`}></div>
        
        {/* Icon Container */}
        <div className="relative mb-6 ">
          <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${card.bgGradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/30 rounded-full backdrop-blur-sm"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white/20 rounded-full backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col py-4! ">
          <h3 className="text-2xl font-bold bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300 ">
            {card.headline}
          </h3>
          
          <p className="text-gray-600 mb-8 leading-relaxed flex-1 text-lg group-hover:text-gray-700 transition-colors duration-300 py-4!">
            {card.description}
          </p>

          {/* Button(s) */}
          <div className="space-y-4">
            <Link 
              href={card.buttonLink}
              className={`group/btn block w-full bg-gradient-to-r ${card.bgGradient} text-black font-semibold py-3! px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:brightness-110 text-center relative overflow-hidden`}
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 -left-full group-hover/btn:left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 "></div>
              <span className="relative">{card.buttonText}</span>
            </Link>
            
            {card.buttonSecondaryText && (
              <Link 
                href={card.buttonSecondaryLink || '#'}
                className="block w-full bg-white/60 backdrop-blur-sm text-gray-700 font-medium py-3! px-6 rounded-xl border border-gray-200/80 hover:border-gray-300 hover:bg-white/80 hover:shadow-lg transition-all duration-300 text-center group-hover/secondary:scale-105"
              >
                {card.buttonSecondaryText}
              </Link>
            )}
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <div className={`w-full h-full bg-gradient-to-tl ${card.bgGradient} rounded-tl-2xl`}></div>
        </div>
      </div>
    </div>
  );
};


export default function KeyAudiencesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        
        <div className="text-center mb-12 py-10!">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Path
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We serve different members of our community in unique ways. 
            Choose your path to find relevant resources and information.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10!">
          {audienceCards.map((card) => (
            <AudienceCard key={card.id} card={card} />
          ))}
        </div>

        {/* Optional: Bottom CTA */}
        <div className="text-center mt-12 py-8!">
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Not Sure Where to Start?
            </h3>
            <p className="text-gray-600 mb-4">
              Contact us directly and we'll help guide you to the right resources.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors p-3!"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


