// app/beliefs/page.tsx
import Link from 'next/link';

export default function BeliefsPage() {
  
  const fundamentalBeliefs = [
    {
      title: "The Holy Scriptures",
      reference: "2 Timothy 3:16-17",
      description: "The Bible is God's inspired Word, the authoritative revelation of His will, and the ultimate standard for Christian faith and life.",
      icon: "📖"
    },
    {
      title: "The Trinity",
      reference: "Matthew 28:19",
      description: "There is one God: Father, Son, and Holy Spirit, a unity of three co-eternal Persons who are equal in power and glory.",
      icon: "☀️"
    },
    {
      title: "The Sabbath",
      reference: "Exodus 20:8-11",
      description: "The seventh-day Sabbath is God's gift to humanity, a memorial of Creation, and a sign of sanctification to be observed from sunset Friday to sunset Saturday.",
      icon: "🕊️"
    },
    {
      title: "The Second Coming",
      reference: "Titus 2:13",
      description: "The imminent, personal, visible return of Jesus Christ is the blessed hope of the church, when He will resurrect the righteous and establish His eternal kingdom.",
      icon: "🎺"
    },
    {
      title: "The State of the Dead",
      reference: "Ecclesiastes 9:5-6",
      description: "The dead rest unconsciously until the resurrection at Christ's return. The righteous will receive eternal life, while the wicked will face final destruction.",
      icon: "💤"
    },
    {
      title: "The Heavenly Sanctuary",
      reference: "Hebrews 8:1-2",
      description: "Christ ministers in the heavenly sanctuary as our High Priest, providing forgiveness and cleansing through His atoning sacrifice.",
      icon: "⛪"
    },
    {
      title: "The Law of God",
      reference: "Psalm 19:7",
      description: "The Ten Commandments express God's love and will, and by the power of the Holy Spirit, point out sin and lead us to Christ for salvation.",
      icon: "📜"
    },
    {
      title: "Baptism",
      reference: "Romans 6:3-4",
      description: "Baptism by immersion symbolizes our death to sin and resurrection to new life in Christ, and follows repentance and acceptance of Jesus as Savior.",
      icon: "💧"
    },
    {
      title: "Spiritual Gifts",
      reference: "1 Corinthians 12:1-11",
      description: "The Holy Spirit bestows spiritual gifts to all believers for the edification of the church and the completion of its mission.",
      icon: "🎁"
    },
    {
      title: "The Remnant",
      reference: "Revelation 12:17",
      description: "God calls forth a remnant church in the last days to keep His commandments and maintain faith in Jesus as they proclaim the three angels' messages.",
      icon: "🌟"
    },
    {
      title: "Health & Wholeness",
      reference: "1 Corinthians 6:19-20",
      description: "Our bodies are temples of the Holy Spirit. We honor God by adopting healthful practices and abstaining from harmful substances.",
      icon: "❤️"
    },
    {
      title: "Stewardship",
      reference: "1 Peter 4:10",
      description: "We are God's stewards, entrusted with time, abilities, resources, and the earth. We return tithe and give offerings for gospel proclamation.",
      icon: "🤲"
    }
  ];

  const distinctiveEmphases = [
    {
      title: "Whole Person Health",
      description: "Caring for physical, mental, and spiritual well-being through the Adventist health message"
    },
    {
      title: "Education",
      description: "Promoting Christ-centered education that develops spiritual, intellectual, and service-oriented individuals"
    },
    {
      title: "Religious Liberty",
      description: "Defending freedom of conscience for all people as an expression of God's character of love"
    },
    {
      title: "Community Service",
      description: "Serving humanity through various ministries that address physical, emotional, and spiritual needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6!">Our Beliefs</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
              Rooted in Scripture, centered on Christ, and focused on His soon return. 
              Discover the biblical foundations of Seventh-day Adventist faith.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-4xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Christ-Centered Faith</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto! mb-6!"></div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8!">
            <p className="text-lg text-gray-800 leading-relaxed mb-4!">
              Seventh-day Adventists are a Bible-based Christian community who seek to follow Jesus 
              and prepare the world for His soon return. Our name describes who we are:
            </p>
            <div className="grid md:grid-cols-3 gap-6! text-center">
              <div className="bg-white rounded-xl p-4!">
                <div className="text-2xl mb-2!">📅</div>
                <h3 className="font-bold text-gray-900">Seventh-day</h3>
                <p className="text-gray-600 text-sm mt-2!">Worshiping on the biblical Sabbath</p>
              </div>
              <div className="bg-white rounded-xl p-4!">
                <div className="text-2xl mb-2!">🎉</div>
                <h3 className="font-bold text-gray-900">Adventist</h3>
                <p className="text-gray-600 text-sm mt-2!">Awaiting Christ's second advent</p>
              </div>
              <div className="bg-white rounded-xl p-4!">
                <div className="text-2xl mb-2!">⛪</div>
                <h3 className="font-bold text-gray-900">Church</h3>
                <p className="text-gray-600 text-sm mt-2!">A global community of believers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundamental Beliefs */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">28 Fundamental Beliefs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              Our beliefs are based on the Bible and centered on Jesus Christ. 
              Scripture is the foundation of all we believe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6!">
            {fundamentalBeliefs.map((belief, index) => (
              <div key={index} className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-x-4!">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">
                    {belief.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2!">{belief.title}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-2!">{belief.reference}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{belief.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8!">
            <p className="text-gray-600">
              These beliefs represent our understanding of biblical teaching. 
              All are subject to revision in light of new understanding from God's Word.
            </p>
          </div>
        </div>
      </section>

      {/* Distinctive Emphases */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-4xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Distinctive Emphases</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              Key areas where Seventh-day Adventists make special contributions to the Christian world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8!">
            {distinctiveEmphases.map((emphasis, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6!">
                <h3 className="text-xl font-bold text-gray-900 mb-3!">{emphasis.title}</h3>
                <p className="text-gray-700 leading-relaxed">{emphasis.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salvation & Grace */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto! px-4! max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6!">Salvation by Grace Through Faith</h2>
          <div className="bg-white/10 rounded-2xl p-8! backdrop-blur-sm">
            <p className="text-xl leading-relaxed mb-6!">
              "For by grace you have been saved through faith, and that not of yourselves; 
              it is the gift of God, not of works, lest anyone should boast." 
              <span className="block text-blue-200 mt-2!">— Ephesians 2:8-9</span>
            </p>
            <p className="text-lg text-blue-100">
              We believe salvation comes only through Jesus Christ, who lived a sinless life, 
              died for our sins, rose from the dead, and ministers for us in heaven. 
              Good works are the fruit of salvation, not its root.
            </p>
          </div>
        </div>
      </section>

      {/* Bible Study Call to Action */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">Want to Learn More?</h2>
          <p className="text-lg text-gray-600 mb-8! max-w-2xl mx-auto!">
            We'd love to study the Bible with you and explore God's Word together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4! justify-center">
            <Link 
              href="/bible-studies"
              className="bg-blue-600 text-white font-bold px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors"
            >
              Free Bible Studies
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 font-bold px-8! py-4! rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact a Pastor
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Explore Further</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8!">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-200">
              <div className="text-3xl mb-4!">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3!">Study Resources</h3>
              <p className="text-gray-600 mb-4!">Deeper insights into Adventist beliefs and biblical teachings</p>
              <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-semibold">
                Explore Resources →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6! text-center shadow-lg border border-gray-200">
              <div className="text-3xl mb-4!">⛪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3!">Visit a Church</h3>
              <p className="text-gray-600 mb-4!">Experience Seventh-day Adventist worship and community</p>
              <Link href="/churches" className="text-blue-600 hover:text-blue-700 font-semibold">
                Find a Church →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6! text-center shadow-lg border border-gray-200">
              <div className="text-3xl mb-4!">❓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3!">Questions?</h3>
              <p className="text-gray-600 mb-4!">Get answers about our beliefs and practices</p>
              <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-semibold">
                View FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}