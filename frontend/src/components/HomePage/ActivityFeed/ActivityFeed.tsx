// components/ActivityFeedShowcase.tsx
import Link from 'next/link';

const recentActivities = [
  {
    event: "Youth Basketball Tournament",
    church: "Grace Community Church",
    participants: "45 youth joined",
    action: "played",
    time: "2 days ago"
  },
  {
    event: "Summer Camp Registration",
    church: "Multiple Churches", 
    participants: "120 spots filled",
    action: "registered for",
    time: "1 week ago"
  },
  {
    event: "Beach Cleanup Day",
    church: "Coastal Fellowship",
    participants: "60 volunteers",
    action: "served at", 
    time: "3 days ago"
  }
];

export default function ActivityFeedShowcase() {
  return (
    <section className="py-16! bg-gray-50">
      <div className="container mx-auto! px-4! max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12!">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">
            Recent Community Activity
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
            See what's happening right now across our network of churches
          </p>
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6! mb-8!">
          <div className="space-y-6!">
            {recentActivities.map((activity, index) => (
              
              <div key={index} className="flex items-start space-x-4! p-2! rounded-lg hover:bg-gray-50 transition-colors duration-200">

                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                  {activity.participants.split(' ')[0]}
                </div>

                <div className="flex-1 min-w-0">

                  <p className="text-gray-900 font-medium">
                    {activity.participants} {activity.action} <span className="text-blue-600">{activity.event}</span>
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mt-1!">
                    <span>{activity.church}</span>
                    <span className="mx-2!">•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6! mb-8! text-center">
          <div className="bg-white rounded-xl p-4! shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">1,200+</div>
            <div className="text-sm text-gray-600">Active Members</div>
          </div>
          <div className="bg-white rounded-xl p-4! shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">45</div>
            <div className="text-sm text-gray-600">Events This Month</div>
          </div>
          <div className="bg-white rounded-xl p-4! shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">90</div>
            <div className="text-sm text-gray-600">Partner Churches</div>
          </div>
          <div className="bg-white rounded-xl p-4! shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">15</div>
            <div className="text-sm text-gray-600">Cities Reached</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/events/youth"
            className="inline-flex items-center bg-blue-600 text-white font-semibold text-lg px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            See All Activities
            <svg 
              className="w-5 h-5 ml-2" 
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