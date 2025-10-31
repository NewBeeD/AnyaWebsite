// app/history/page.tsx
import Link from 'next/link';

export default function HistoryPage() {
  const timelineEvents = [
    {
      year: "1863",
      title: "Seventh-day Adventist Church Organized",
      description: "The Seventh-day Adventist Church was officially organized in Battle Creek, Michigan, with 3,500 members and a vision to share Christ's soon return.",
      location: "Battle Creek, Michigan",
      significance: "Global Adventist movement begins"
    },
    {
      year: "1900s",
      title: "Adventism Reaches the Caribbean",
      description: "Missionaries brought the Adventist message to the Caribbean islands, establishing the first churches and schools in the region.",
      location: "Caribbean Region",
      significance: "Adventist faith arrives in the Caribbean"
    },
    {
      year: "1954",
      title: "First Adventist Church in Dominica",
      description: "The first Seventh-day Adventist congregation was established in Dominica, beginning a legacy of faith that would grow across the island.",
      location: "Dominica",
      significance: "Adventist roots planted in Dominica"
    },
    {
      year: "1978",
      title: "ANYA Dominica Founded",
      description: "The Adventist National Youth Association was established to coordinate and empower youth ministries across Dominica's growing Adventist community.",
      location: "Roseau, Dominica",
      significance: "ANYA begins unifying Adventist youth"
    },
    {
      year: "1990s",
      title: "Rapid Growth Across Dominica",
      description: "Adventist churches multiplied across the island, with ANYA playing a crucial role in youth engagement and community outreach.",
      location: "Throughout Dominica",
      significance: "Church growth and youth mobilization"
    },
    {
      year: "2000s",
      title: "Digital Ministry Expansion",
      description: "ANYA embraced technology to connect Adventist youth across Dominica, using media and online platforms to share the message.",
      location: "Dominica",
      significance: "Modern outreach methods adopted"
    },
    {
      year: "2017",
      title: "Hurricane Maria Response",
      description: "ANYA and Adventist churches across Dominica coordinated relief efforts after Hurricane Maria, demonstrating practical Christianity in crisis.",
      location: "Throughout Dominica",
      significance: "Community service during disaster"
    },
    {
      year: "2020",
      title: "90 Churches United Under ANYA",
      description: "ANYA reached a milestone of coordinating youth ministries across 90 Seventh-day Adventist churches throughout Dominica.",
      location: "Dominica",
      significance: "Island-wide coordination achieved"
    },
    {
      year: "Today",
      title: "Continuing the Legacy",
      description: "ANYA continues to equip young Adventists across Dominica, building on our rich history while innovating for future ministry.",
      location: "Across Dominica",
      significance: "Ongoing mission and growth"
    }
  ];

  const keyMilestones = [
    {
      number: "90",
      label: "Churches United",
      description: "Adventist congregations across Dominica"
    },
    {
      number: "65+",
      label: "Years of Service",
      description: "Serving Adventist youth in Dominica"
    },
    {
      number: "1000+",
      label: "Youth Impacted",
      description: "Young people empowered through ANYA"
    },
    {
      number: "15",
      label: "Regions Served",
      description: "Covering every district in Dominica"
    }
  ];

  const foundingPrinciples = [
    {
      title: "Youth Empowerment",
      description: "Equipping young Adventists with leadership skills and spiritual tools for effective ministry.",
      icon: "🎯"
    },
    {
      title: "Island Unity",
      description: "Breaking down geographical barriers to unite Adventist youth across Dominica.",
      icon: "🤝"
    },
    {
      title: "Community Service",
      description: "Demonstrating Christ's love through practical service to Dominican communities.",
      icon: "❤️"
    },
    {
      title: "Doctrinal Integrity",
      description: "Maintaining strong Adventist beliefs while making them relevant to new generations.",
      icon: "📖"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
              ANYA Dominica • Since 1978
            </div>
            <h1 className="text-5xl font-bold mb-6!">Our History</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
              From humble beginnings to island-wide impact. The story of how ANYA united 
              90 Adventist churches across Dominica through faith, vision, and perseverance.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6! text-center">
            {keyMilestones.map((milestone, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-6!">
                <div className="text-3xl font-bold text-blue-600 mb-2!">{milestone.number}</div>
                <div className="font-semibold text-gray-900 mb-1!">{milestone.label}</div>
                <div className="text-sm text-gray-600">{milestone.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-4xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Our Founding Story</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto! mb-6!"></div>
          </div>
          
          <div className="bg-white rounded-2xl p-8! shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8! items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4!">The ANYA Vision Begins</h3>
                <p className="text-gray-700 leading-relaxed mb-4!">
                  In 1978, a group of visionary Adventist leaders in Dominica recognized the need 
                  for coordinated youth ministry across the island. Young people were the future 
                  of the church, but their potential was limited by geographical isolation and 
                  fragmented resources.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ANYA was born from this vision—to create a unified network that would empower 
                  Adventist youth, develop their leadership potential, and mobilize them for 
                  service across all 90 churches in Dominica.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6! text-center">
                <div className="text-6xl mb-4!">🏝️</div>
                <h4 className="font-bold text-gray-900 text-lg mb-2!">Dominican Roots</h4>
                <p className="text-gray-600 text-sm">
                  Founded in Roseau with a mission to serve every Adventist young person across our beautiful island
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Our Journey Through Time</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              From global Adventist beginnings to local Dominican impact
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            
            {/* Timeline events */}
            <div className="space-y-12!">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8!' : 'pl-8!'}`}>
                    <div className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-3!">
                        <div className="bg-blue-600 text-white px-3! py-1! rounded-full text-sm font-bold">
                          {event.year}
                        </div>
                        <div className="ml-3! text-sm text-gray-500">{event.location}</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2!">{event.title}</h3>
                      <p className="text-gray-600 mb-3! leading-relaxed">{event.description}</p>
                      <div className="bg-blue-50 rounded-lg p-3!">
                        <p className="text-blue-700 text-sm font-medium">{event.significance}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Spacer for opposite side */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding Principles */}
      <section className="py-16! bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold mb-4!">Enduring Principles</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto!">
              The core values that have guided ANYA Dominica since the beginning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6!">
            {foundingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-6! text-center backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-4!">{principle.icon}</div>
                <h3 className="text-xl font-bold mb-3!">{principle.title}</h3>
                <p className="text-blue-100 leading-relaxed text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy & Impact */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-4xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Our Lasting Impact</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6!"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8!">
            <div className="bg-blue-50 rounded-2xl p-6!">
              <h3 className="text-xl font-bold text-gray-900 mb-4!">🚀 Youth Leadership Development</h3>
              <p className="text-gray-700 mb-4!">
                ANYA has trained generations of Adventist leaders who now serve across Dominica 
                and around the world—pastors, teachers, healthcare professionals, and community leaders.
              </p>
              <ul className="space-y-2! text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3!"></div>
                  Leadership training programs since 1978
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3!"></div>
                  Mentorship across 30+ churches
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3!"></div>
                  Global network of ANYA alumni
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-6!">
              <h3 className="text-xl font-bold text-gray-900 mb-4!">🤝 Community Transformation</h3>
              <p className="text-gray-700 mb-4!">
                Through disaster response, health initiatives, and ongoing service projects, 
                ANYA has demonstrated practical Christianity across Dominican communities.
              </p>
              <ul className="space-y-2! text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3!"></div>
                  Hurricane Maria relief coordination
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3!"></div>
                  Annual community service projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3!"></div>
                  Health and wellness programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">Become Part of Our Story</h2>
          <p className="text-lg text-gray-600 mb-8! max-w-2xl mx-auto!">
            Join the next chapter of ANYA's history as we continue to empower Adventist youth 
            and serve communities across Dominica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4! justify-center">
            <Link 
              href="/join"
              className="bg-blue-600 text-white font-bold px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join ANYA Today
            </Link>
            <Link 
              href="/gallery"
              className="bg-white text-blue-600 border-2 border-blue-600 font-bold px-8! py-4! rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Our History Gallery
            </Link>
            <Link 
              href="/contact"
              className="bg-purple-600 text-white font-bold px-8! py-4! rounded-lg hover:bg-purple-700 transition-colors"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </section>

      {/* Historical Resources */}
      <section className="py-12! bg-white border-t border-gray-200">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8! text-center">
            <div className="bg-blue-50 rounded-2xl p-6!">
              <div className="text-3xl mb-4!">📚</div>
              <h3 className="font-bold text-gray-900 mb-3!">Historical Archives</h3>
              <p className="text-gray-600 mb-4! text-sm">Explore photos, documents, and stories from ANYA's rich history</p>
              <Link href="/archives" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Browse Archives →
              </Link>
            </div>

            <div className="bg-green-50 rounded-2xl p-6!">
              <div className="text-3xl mb-4!">🎥</div>
              <h3 className="font-bold text-gray-900 mb-3!">Oral Histories</h3>
              <p className="text-gray-600 mb-4! text-sm">Watch interviews with ANYA founders and early members</p>
              <Link href="/oral-history" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                Watch Stories →
              </Link>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6!">
              <div className="text-3xl mb-4!">📊</div>
              <h3 className="font-bold text-gray-900 mb-3!">Growth Timeline</h3>
              <p className="text-gray-600 mb-4! text-sm">See how ANYA and Adventist churches have grown in Dominica</p>
              <Link href="/timeline" className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
                Interactive Timeline →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}