// components/SermonHighlights.tsx
import Link from 'next/link';

const recentSermons = [
  {
    title: "Living in Community",
    speaker: "Pastor John Makoto",
    date: "March 15, 2024",
    duration: "45 min",
    series: "Building Together"
  },
  {
    title: "Faith in Action", 
    speaker: "Rev. Maria Santos",
    date: "March 8, 2024",
    duration: "38 min",
    series: "Practical Faith"
  },
  {
    title: "The Power of Unity",
    speaker: "Dr. David Chen", 
    date: "March 1, 2024",
    duration: "42 min",
    series: "One Body"
  }
];

export default function SermonHighlights() {
  return (
    <section className="py-16! bg-gray-50">
      <div className="container mx-auto! px-4! max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12!">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">
            Recent Messages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
            Inspiring teachings from across our church network to encourage and strengthen your faith
          </p>
        </div>

        {/* Sermon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6! mb-12!">
          {recentSermons.map((sermon, index) => (
            <div key={index} className="bg-white rounded-xl p-6! shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
              {/* Sermon Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4!">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              
              <h3 className="font-bold text-gray-900 text-lg mb-2!">{sermon.title}</h3>
              <p className="text-blue-600 font-medium mb-1!">{sermon.speaker}</p>
              
              <div className="text-sm text-gray-600 space-y-1! mb-4!">
                <div>{sermon.date}</div>
                <div>{sermon.duration} • {sermon.series}</div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2! rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Listen Now
              </button>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6! mb-8! text-center">
          <div className="bg-white rounded-xl p-4! shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Sermons Available</div>
          </div>
          <div className="bg-white rounded-xl p-4! shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">Different Speakers</div>
          </div>
          <div className="bg-white rounded-xl p-4! shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">15</div>
            <div className="text-sm text-gray-600">Teaching Series</div>
          </div>
          <div className="bg-white rounded-xl p-4! shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Streaming Available</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/sermons"
            className="inline-flex items-center bg-blue-600 text-white font-semibold text-lg px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Browse All Sermons
            <svg 
              className="w-5 h-5 ml-2!" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}