// components/EventCategoriesShowcase.tsx
import Link from 'next/link';

const eventCategories = [
  {
    title: "Sports & Recreation",
    icon: "⚽",
    gradient: "from-blue-500 to-cyan-500",
    description: "Friendly competitions and active fun"
  },
  {
    title: "Youth Activities", 
    icon: "🎯",
    gradient: "from-purple-500 to-pink-500",
    description: "Engaging events for teens and young adults"
  },
  {
    title: "Outdoor Adventures",
    icon: "⛺",
    gradient: "from-green-500 to-emerald-500",
    description: "Camping, bonfires, and nature activities"
  },
  {
    title: "Family Fun",
    icon: "👨‍👩‍👧‍👦",
    gradient: "from-orange-500 to-red-500",
    description: "Events for the whole family to enjoy"
  },
  {
    title: "Spiritual Growth", 
    icon: "📖",
    gradient: "from-indigo-500 to-purple-500",
    description: "Bible studies, prayer, and worship"
  },
  {
    title: "Community Service",
    icon: "🤝",
    gradient: "from-teal-500 to-cyan-500",
    description: "Outreach and service projects"
  }
];

export default function EventCategoriesShowcase() {
  return (
    <section className="py-16! bg-gray-50 px-2!">
      <div className="container mx-auto! px-4! max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12!">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">
            Events for Everyone
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
            Discover sports, youth activities, family fun, and more across our 90 churches
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6! mb-12!">
          {eventCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6! text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl mx-auto! mb-4!`}>
                {category.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2!">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/events/calendar"
            className="inline-flex items-center bg-blue-600 text-white font-semibold text-lg px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All Events
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