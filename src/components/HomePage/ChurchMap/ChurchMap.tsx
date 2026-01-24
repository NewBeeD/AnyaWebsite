// components/ChurchMapShowcase.tsx
import Link from 'next/link';

export default function ChurchMapShowcase() {
  return (
    <section className="py-16! bg-white">
      <div className="container mx-auto! px-4! max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12!">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">
            90 Churches Across the Island
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
            Find a welcoming church community near you, no matter where you are on the island
          </p>
        </div>

        {/* Map Visualization */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8! mb-8!">
          <div className="relative bg-white rounded-xl shadow-sm border border-gray-200 aspect-video flex items-center justify-center">
            {/* Simplified Island Map */}
            <div className="absolute inset-8 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl border-2 border-green-200">
              
              {/* Map Dots representing churches */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              
              {/* More dots for visual density */}
              <div className="absolute top-2/5 left-2/5 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-2/5 right-2/5 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute top-3/5 left-1/5 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-1/5 right-3/5 w-2 h-2 bg-blue-400 rounded-full"></div>
              
            </div>
            
            {/* Overlay Text */}
            <div className="relative z-10 text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6! shadow-lg">
              <div className="text-4xl mb-2">🗺️</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Interactive Church Map</h3>
              <p className="text-gray-600">90 locations across the island</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6! mb-8! text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">30+</div>
            <div className="text-sm text-gray-600">Churches</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-600">Regions</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">20+</div>
            <div className="text-sm text-gray-600">Communities</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Accessible</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/churches/map"
            className="inline-flex items-center bg-blue-600 text-white font-semibold text-lg px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Find Churches Near You
            <svg 
              className="w-5 h-5 ml-2!" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}