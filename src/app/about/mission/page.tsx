// app/mission/page.tsx
import Link from 'next/link';

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6!">Our Mission & Vision</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
              Uniting 30+ churches across the island to share the love of Christ, 
              build authentic community, and serve our neighbors together.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-4xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Our Mission</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto! mb-8!"></div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8! text-center">
            <p className="text-2xl text-gray-800 leading-relaxed font-serif italic">
              "To unite churches across the island in proclaiming the Gospel, 
              making disciples, and serving our communities with the love of Christ, 
              that all may know God's transforming grace."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              These values guide everything we do as a network of churches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8!">
            {[
              {
                icon: "🤝",
                title: "Biblical Unity",
                description: "We believe in the power of churches working together across denominational lines, united by our common faith in Christ."
              },
              {
                icon: "📖",
                title: "Scriptural Foundation",
                description: "God's Word is our ultimate authority and guide for faith, life, and ministry practice."
              },
              {
                icon: "🙏",
                title: "Prayer & Dependence",
                description: "We rely on God's guidance and power through consistent, fervent prayer in all our endeavors."
              },
              {
                icon: "👥",
                title: "Authentic Community",
                description: "We foster genuine relationships where people can grow, serve, and support one another in faith."
              },
              {
                icon: "🌍",
                title: "Missional Living",
                description: "Every believer is called to be Christ's witness in their family, workplace, and community."
              },
              {
                icon: "🎯",
                title: "Next Generation",
                description: "We invest in children, youth, and young adults to ensure a vibrant future for the Church."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4!">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3!">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-4xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Our Vision</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto! mb-8!"></div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8!">
            <p className="text-lg text-gray-800 leading-relaxed mb-6!">
              We envision an island where every person has the opportunity to encounter Jesus Christ 
              through the united witness of vibrant, loving churches working together in harmony.
            </p>
            <div className="grid md:grid-cols-2 gap-6!">
              <div className="space-y-4!">
                <h4 className="font-bold text-gray-900 text-lg">What We See:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3!"></div>
                    Churches collaborating instead of competing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3!"></div>
                    Communities transformed by the Gospel
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3!"></div>
                    Every generation passionate for Christ
                  </li>
                </ul>
              </div>
              <div className="space-y-4!">
                <h4 className="font-bold text-gray-900 text-lg">Our Hope:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3!"></div>
                    Spiritual renewal across our island
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3!"></div>
                    Churches known for love and service
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3!"></div>
                    Lasting impact for God's Kingdom
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Strategic Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              How we're working together to fulfill our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8!">
            {[
              {
                title: "Church Collaboration",
                description: "Facilitating partnerships and shared resources among our 90 member churches for greater impact.",
                initiatives: ["Joint worship events", "Leadership training", "Resource sharing"]
              },
              {
                title: "Community Transformation",
                description: "Addressing practical needs and spiritual hunger through united outreach efforts.",
                initiatives: ["Food distribution", "Homeless ministry", "Community development"]
              },
              {
                title: "Discipleship & Growth",
                description: "Equipping believers to grow in faith and effectively share the Gospel.",
                initiatives: ["Small groups", "Training programs", "Mentorship"]
              },
              {
                title: "Next Generation Ministry",
                description: "Investing in children, youth, and young adults to build the church of tomorrow.",
                initiatives: ["Youth camps", "Children's programs", "College ministry"]
              }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3!">{area.title}</h3>
                <p className="text-gray-600 mb-4!">{area.description}</p>
                <div className="space-y-2!">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Initiatives:</h4>
                  <div className="flex flex-wrap gap-2!">
                    {area.initiatives.map((initiative, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-3! py-1! rounded-full text-sm">
                        {initiative}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16! bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto! px-4! max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4!">Join Us in Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8! max-w-2xl mx-auto!">
            Whether you're a church leader, volunteer, or someone exploring faith, 
            there's a place for you in what God is doing across our island.
          </p>
          <div className="flex flex-col sm:flex-row gap-4! justify-center">
            <Link 
              href="/churches"
              className="bg-white text-blue-600 font-bold px-8! py-4! rounded-lg hover:bg-gray-100 transition-colors"
            >
              Find a Church
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent text-white border-2 border-white font-bold px-8! py-4! rounded-lg hover:bg-white/10 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-8! bg-white border-t border-gray-200">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="flex flex-wrap justify-center gap-8! text-sm">
            <Link href="/beliefs" className="text-blue-600 hover:text-blue-700 font-medium">
              Our Beliefs
            </Link>
            <Link href="/leadership" className="text-blue-600 hover:text-blue-700 font-medium">
              Our Leadership
            </Link>
            <Link href="/churches" className="text-blue-600 hover:text-blue-700 font-medium">
              Member Churches
            </Link>
            <Link href="/events" className="text-blue-600 hover:text-blue-700 font-medium">
              Upcoming Events
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}