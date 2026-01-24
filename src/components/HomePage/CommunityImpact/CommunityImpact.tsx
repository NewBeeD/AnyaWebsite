// components/CommunityImpact.tsx
import Link from 'next/link';

const impactStats = [
  {
    number: "5,000+",
    label: "Meals Served",
    icon: "🍽️"
  },
  {
    number: "200+", 
    label: "Volunteers",
    icon: "👥"
  },
  {
    number: "15",
    label: "Community Projects", 
    icon: "🏗️"
  },
  {
    number: "12",
    label: "Outreach Programs",
    icon: "🤝"
  }
];

export default function CommunityImpact() {
  return (
    <section className="py-16! bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto! px-4! max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12!">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">
            Making a Difference Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
            90 churches united in serving our communities across the island
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6! mb-12!">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6! text-center shadow-sm border border-gray-200">
              <div className="text-3xl mb-2!">{stat.icon}</div>
              <div className="text-2xl font-bold text-green-600">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Outreach Programs */}
        <div className="bg-white rounded-2xl p-8! shadow-sm border border-gray-200 mb-8!">
          <h3 className="font-bold text-gray-900 text-lg mb-6! text-center">Our Outreach Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4!">
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3!"></div>
              Food Distribution & Meal Programs
            </div>
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3!"></div>
              Homeless Shelter Support
            </div>
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3!"></div>
              Elderly Care & Visitation
            </div>
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3!"></div>
              Youth Mentorship Programs
            </div>
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3!"></div>
              Community Cleanup Initiatives
            </div>
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3!"></div>
              Disaster Relief Response
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/outreach"
            className="inline-flex items-center bg-green-600 text-white font-semibold text-lg px-8! py-4! rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Join Our Outreach Efforts
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