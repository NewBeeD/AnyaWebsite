// components/KeyAudiencesSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const audienceCards = [
  {
    id: 1,
    title: "Church Members",
    subtitle: "Find Community & Events",
    description: "Looking for a local church home or the next island-wide gathering? Connect with believers near you and discover meaningful events.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ["Find Local Churches", "Event Calendar", "Small Groups", "Volunteer Opportunities"],
    primaryButton: {
      text: "Find a Church",
      href: "/churches"
    },
    secondaryButton: {
      text: "View Events",
      href: "/events"
    },
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200"
  },
  {
    id: 2,
    title: "Pastors & Leaders",
    subtitle: "Resources & Support",
    description: "Access our private portal for leadership training, shared resources, and collaborative opportunities with other church leaders.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    features: ["Leadership Portal", "Training Materials", "Pastoral Support", "Network Meetings"],
    primaryButton: {
      text: "Leader Login",
      href: "/leaders/login"
    },
    secondaryButton: {
      text: "Learn More",
      href: "/leaders"
    },
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-200"
  },
  {
    id: 3,
    title: "New Visitors",
    subtitle: "Learn & Explore",
    description: "New to our network? Discover our shared mission, core beliefs, and how we're making a difference across the island together.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ["Our Beliefs", "Mission & Vision", "Get Connected", "FAQ"],
    primaryButton: {
      text: "Our Beliefs",
      href: "/beliefs"
    },
    secondaryButton: {
      text: "Contact Us",
      href: "/contact"
    },
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200"
  }
];

const AudienceCard = ({ card, isHovered, onHover }: { card: typeof audienceCards[0]; isHovered: boolean; onHover: (id: number | null) => void }) => {
  return (
    <div 
      className="group relative h-full"
      onMouseEnter={() => onHover(card.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} rounded-3xl transition-all duration-500 ${
        isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
      }`}></div>
      
      {/* Main Card */}
      <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 ${
        isHovered ? 'border-white shadow-2xl' : 'border-gray-100 shadow-lg'
      } transition-all duration-500 p-8! h-full flex flex-col overflow-hidden`}>
        
        {/* Animated Top Accent */}
        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${card.gradient} transform ${
          isHovered ? 'scale-x-100' : 'scale-x-0'
        } transition-transform duration-500 origin-left`}></div>

        {/* Icon Section */}
        <div className="relative mb-6!">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg ${
            isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
          } transition-all duration-300`}>
            <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>
          </div>
          
          {/* Floating Dots */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200"></div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col">
          {/* Title & Subtitle */}
          <div className="mb-4!">
            <h3 className={`text-2xl font-bold bg-gradient-to-br ${card.gradient} bg-clip-text text-transparent ${
              isHovered ? 'from-gray-900 to-gray-700' : ''
            } transition-all duration-300`}>
              {card.title}
            </h3>
            <p className="text-gray-600 font-medium mt-1">{card.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6! leading-relaxed flex-1 transition-colors duration-300 group-hover:text-gray-700">
            {card.description}
          </p>

          {/* Features List */}
          <div className="mb-8!">
            <div className="grid grid-cols-2 gap-2!">
              {card.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient} mr-2!`}></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3!">
            <Link 
              href={card.primaryButton.href}
              className={`group/btn block w-full bg-gradient-to-r ${card.gradient} text-white font-semibold py-4! px-6! rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center relative overflow-hidden`}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 -left-full group-hover/btn:left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700"></div>
              <span className="relative">{card.primaryButton.text}</span>
            </Link>
            
            <Link 
              href={card.secondaryButton.href}
              className="block w-full bg-white text-gray-700 font-medium py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-center hover:shadow-md"
            >
              {card.secondaryButton.text}
            </Link>
          </div>
        </div>

        {/* Corner Accent */}
        <div className={`absolute bottom-4 right-4 w-12 h-12 opacity-10 ${
          isHovered ? 'opacity-20 scale-110' : 'opacity-10 scale-100'
        } transition-all duration-300`}>
          <div className={`w-full h-full bg-gradient-to-tl ${card.gradient} rounded-tl-2xl`}></div>
        </div>
      </div>
    </div>
  );
};

export default function KeyAudiencesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="key-audiences" className="py-20! bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto! px-4! max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16!">
          <div className="inline-flex items-center px-4! py-2! rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4!">
            👋 Find Your Path
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4!">
            Designed for <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto! leading-relaxed">
            Whether you're looking for a church home, leading a congregation, or exploring faith for the first time, 
            we have resources and community waiting for you.
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8! max-w-6xl mx-auto!">
          {audienceCards.map((card) => (
            <AudienceCard 
              key={card.id} 
              card={card} 
              isHovered={hoveredCard === card.id}
              onHover={setHoveredCard}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16!">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8! max-w-2xl mx-auto!">
            <h3 className="text-2xl font-bold text-gray-900 mb-3!">
              Not Sure Where to Start?
            </h3>
            <p className="text-gray-600 mb-6!">
              Our team is here to help guide you to the right resources and connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4! justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8! py-3! rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Our Team
              </Link>
              <Link 
                href="/about"
                className="border border-gray-300 text-gray-700 px-8! py-3! rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn About Our Network
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}