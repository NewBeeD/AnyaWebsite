// components/EventHighlightsShowcase.tsx
import Link from 'next/link';

const upcomingEvents = [
  {
    title: "Island Sports Day",
    date: "Jun 15, 2024",
    location: "Central Community Field",
    type: "Sports",
    participants: "All Ages"
  },
  {
    title: "Summer Youth Camp", 
    date: "Jul 20-22, 2024",
    location: "Mountain Retreat",
    type: "Camping",
    participants: "Youth 13-18"
  },
  {
    title: "Beach Bonfire Night",
    date: "Aug 5, 2024", 
    location: "Sunset Beach",
    type: "Outdoor",
    participants: "Young Adults"
  }
];

export default function EventHighlightsShowcase() {
  return (
    <section className="py-16! bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4! max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12!">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">
            Upcoming Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
            Don't miss these exciting events happening across our church network
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6! mb-12!">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6! shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4!">
                <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3! py-1! rounded-full">
                  {event.type}
                </span>
                <span className="text-sm text-gray-500">{event.participants}</span>
              </div>
              
              <h3 className="font-bold text-gray-900 text-lg mb-3!">
                {event.title}
              </h3>
              
              <div className="space-y-2! text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2! text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2! text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/events"
            className="inline-flex items-center bg-blue-600 text-white font-semibold text-lg px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View Full Event Calendar
            <svg 
              className="w-5 h-5 ml-2!" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}