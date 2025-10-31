// components/LeadershipSpotlight.tsx
import Link from 'next/link';

const leaders = [
  {
    name: "Pastor John Makoto",
    role: "Network Director",
    church: "Grace Community Church",
    experience: "15+ years ministry",
    focus: "Church Unity & Outreach"
  },
  {
    name: "Rev. Maria Santos", 
    role: "Youth Ministry Lead",
    church: "Living Waters Church",
    experience: "10+ years youth work",
    focus: "Next Generation"
  },
  {
    name: "Dr. David Chen",
    role: "Church Planting Director", 
    church: "New Hope Church",
    experience: "12+ years planting",
    focus: "Growth & Development"
  }
];

export default function LeadershipSpotlight() {
  return (
    <section className="py-16! bg-white">
      <div className="container mx-auto! px-4! max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12!">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
            Experienced leaders guiding our network of 90 churches toward shared mission and vision
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8! mb-12!">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-2xl p-6! hover:shadow-lg transition-shadow duration-300">
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto! mb-4! flex items-center justify-center text-white font-bold text-xl">
                {leader.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 className="font-bold text-gray-900 text-lg mb-1!">{leader.name}</h3>
              <p className="text-blue-600 font-medium mb-2!">{leader.role}</p>
              <p className="text-gray-600 text-sm mb-3!">{leader.church}</p>
              
              <div className="text-xs text-gray-500 space-y-1!">
                <div>{leader.experience}</div>
                <div>{leader.focus}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6! mb-8! text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">Years Combined Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">90</div>
            <div className="text-sm text-gray-600">Churches Led</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">15</div>
            <div className="text-sm text-gray-600">Regions Served</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Pastoral Support</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/about/team"
            className="inline-flex items-center bg-blue-600 text-white font-semibold text-lg px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Meet Our Full Team
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