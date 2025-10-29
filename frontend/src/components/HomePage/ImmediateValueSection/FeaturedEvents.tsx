'use client';

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

const featuredEvents = [
  {
    id: 1,
    title: 'Island-Wide Youth Conference',
    date: '2024-03-15',
    image: '/conference.jpg',
    description: 'Annual gathering for youth across all churches'
  },
  {
    id: 2,
    title: 'Pastors Prayer Gathering',
    date: '2024-03-22',
    image: '/pastor.jpg',
    description: 'Monthly prayer meeting for church leaders'
  },
  {
    id: 3,
    title: 'Community Outreach Training',
    date: '2024-04-05',
    image: '/outreach.jpg',
    description: 'Equipping churches for effective community service'
  },
  {
    id: 4,
    title: 'Worship Leaders Workshop',
    date: '2024-04-12',
    image: '/worship.jpg',
    description: 'Training for worship teams from all churches'
  }
];

export default function FeaturedEventsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2500 })])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 w-full! px-2! flex justify-center items-center">

      
      
      <div className='w-full! '>

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-semibold text-gray-800 py-2!">
            Featured Events
          </h2>


 

        </div>


        {/* Embla Carousel */}
        <div className="embla overflow-hidden " ref={emblaRef}>

          <div className="embla__container flex">
            
            {featuredEvents.map((item, idx) => (
              
              <div className="embla__slide flex-[0_0_100%] min-w-0" key={idx}>

                <div className="flex flex-col md:flex-row gap-6 p-4">

                  {/* Event Image */}
                  <div className="md:w-2/5">
                    <div className="relative aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                        priority={idx === 0}
                      />
                      {/* Fallback icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="md:w-3/5 flex flex-col justify-center gap-y-1 sm:pl-1!">

                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center text-gray-600 mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>

                    <button className="bg-indigo-600 text-white px-6 py-1.5! w-28 rounded-lg hover:bg-indigo-700 transition-colors font-medium self-start">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-x-2 mt-4! pb-4! ">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>


      </div>
      
    </div>
  );
}