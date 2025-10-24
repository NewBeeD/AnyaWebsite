'use client';

import { useState } from 'react';



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


export default function FeaturedEventscarousel (){
  
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
}

