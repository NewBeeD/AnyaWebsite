// components/ImmediateValueSection.tsx
'use client';

import { useState, useEffect } from 'react';

// Mock data - replace with your actual data source
const featuredEvents = [
  {
    id: 1,
    title: 'Island-Wide Youth Conference',
    date: '2024-03-15',
    image: '/images/youth-conference.jpg',
    description: 'Annual gathering for youth across all churches'
  },
  {
    id: 2,
    title: 'Pastors Prayer Gathering',
    date: '2024-03-22',
    image: '/images/prayer-gathering.jpg',
    description: 'Monthly prayer meeting for church leaders'
  },
  {
    id: 3,
    title: 'Community Outreach Training',
    date: '2024-04-05',
    image: '/images/outreach-training.jpg',
    description: 'Equipping churches for effective community service'
  },
  {
    id: 4,
    title: 'Worship Leaders Workshop',
    date: '2024-04-12',
    image: '/images/worship-workshop.jpg',
    description: 'Training for worship teams from all churches'
  }
];

const QuickStats = () => {
  const [churchesCount, setChurchesCount] = useState(0);
  const [regionsCount, setRegionsCount] = useState(0);

  useEffect(() => {
  const duration = 1500; // 1 second
  const steps = 60;
  const incrementChurches = 90 / steps;
  const incrementRegions = 15 / steps;
  
  let currentStep = 0;
  
  const interval = setInterval(() => {
    currentStep++;
    setChurchesCount(Math.min(90, Math.floor(incrementChurches * currentStep)));
    setRegionsCount(Math.min(15, Math.floor(incrementRegions * currentStep)));
    
    if (currentStep >= steps) {
      clearInterval(interval);
    }
  }, duration / steps);
  
  return () => clearInterval(interval);
}, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-center pt-8!">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-2xl font-bold text-indigo-700">{churchesCount}+</div>
          <div className="text-sm text-gray-600 mt-1">Churches</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-indigo-700">{regionsCount}</div>
          <div className="text-sm text-gray-600 mt-1">Regions</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-indigo-700">1995</div>
          <div className="text-sm text-gray-600 mt-1">Serving Since</div>
        </div>
      </div>
    </div>
  );
};

const FeaturedEventsCarousel = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredEvents.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Featured Events</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous event"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next event"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featuredEvents.map((event) => (
            
            <div key={event.id} className="w-full flex-shrink-0">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Event Image */}
                <div className="md:w-2/5">
                  <div className="aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-12 h-12 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="md:w-3/5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {featuredEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to event ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="bg-white p-6">
      
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row sm:px-8! gap-4 items-center justify-center py-12!">
        
        <div className="flex-1 relative">
          
          <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for an event, church, or topic..."
            className="w-[300px] sm:w-[400px] h-10 pl-8! pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-bold tracking-widest! placeholder:tracking-tight"
          />

        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium whitespace-nowrap w-[40%] h-8 tracking-widest"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default function ImmediateValueSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>


        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Events - Takes 2/3 on large screens */}
          
          <div className="lg:col-span-2">
            <FeaturedEventsCarousel />
          </div>


        </div>



        
      </div>
    </section>
  );
}



