'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const participantStories = [
  {
    name: "Sarah Chen",
    age: 16,
    church: "Hope Community Church",
    activity: "Youth Camp",
    quote: "Summer camp helped me make friends from different churches and grow in my faith in such a fun way!",
    image: "/images/youth-testimonial.jpg"
  },
  {
    name: "Mike Rodriguez",
    age: 24,
    church: "Faith Assembly",
    activity: "Sports Tournament",
    quote: "The basketball tournament wasn't just about competition - it was about building community across churches.",
    image: "/images/sports-testimonial.jpg"
  },
  {
    name: "The Thompson Family",
    age: "Family",
    church: "Grace Fellowship",
    activity: "Family Carnival",
    quote: "These events have helped our family connect with other Christian families in such a meaningful way.",
    image: "/images/family-testimonial.jpg"
  },
  {
    name: "Jessica Williams",
    age: 19,
    church: "New Life Church",
    activity: "Worship Night",
    quote: "The worship night brought together so many young people passionate about Jesus. It was electrifying!",
    image: "/images/worship-testimonial.jpg"
  },
  {
    name: "Pastor Mark Johnson",
    age: 42,
    church: "Living Waters Church",
    activity: "Pastors Gathering",
    quote: "Seeing churches collaborate instead of compete has been transformative for our entire community.",
    image: "/images/pastor-testimonial.jpg"
  },
  {
    name: "Emily & David Kim",
    age: "Young Couple",
    church: "Harvest Church",
    activity: "Marriage Retreat",
    quote: "The marriage retreat strengthened our relationship and connected us with other couples walking the same journey.",
    image: "/images/couple-testimonial.jpg"
  },
  {
    name: "Carlos Martinez",
    age: 17,
    church: "City Light Church",
    activity: "Mission Trip",
    quote: "The mission trip opened my eyes to serving others and showed me what true Christian community looks like.",
    image: "/images/mission-testimonial.jpg"
  },
  {
    name: "Grandma Ruth",
    age: 78,
    church: "First Baptist Church",
    activity: "Senior Fellowship",
    quote: "At my age, it's wonderful to still be part of such vibrant intergenerational activities. God is good!",
    image: "/images/senior-testimonial.jpg"
  },
  {
    name: "The Peterson Family",
    age: "Family of 5",
    church: "Community Grace",
    activity: "Fall Festival",
    quote: "Our kids made lifelong friends and we found a support system that feels like extended family.",
    image: "/images/family2-testimonial.jpg"
  },
  {
    name: "Marcus Thompson",
    age: 22,
    church: "Unity Church",
    activity: "Leadership Conference",
    quote: "The leadership conference equipped me with practical skills to serve my church and community better.",
    image: "/images/leadership-testimonial.jpg"
  }
];

export default function ParticipantStories() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Set initial state
    setSelectedIndex(emblaApi.selectedScrollSnap());
    
    // Listen for slide changes
    emblaApi.on('select', onSelect);
    
    // Cleanup
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-8! bg-white px-4!">
      <div className="container mx-auto! max-w-6xl">
        <div className="text-center mb-12!">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stories from Our Community
          </h2>

        </div>

        {/* Carousel Container */}
        <div className="relative ">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">

              {participantStories.map((story, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4!  ">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8! text-center group hover:shadow-xl transition-all duration-300 max-w-2xl! mx-auto! w-full">
                    {/* Avatar */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mx-auto mb-6! flex items-center justify-center text-2xl">
                      👤
                    </div>
                    
                    {/* Content */}
                    <blockquote className="text-gray-700 italic mb-6! leading-relaxed text-lg">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="space-y-2!">
                      <div className="font-bold text-gray-900 text-xl">{story.name}</div>
                      <div className="text-sm text-gray-600">{story.age} • {story.church}</div>
                      <div className="text-sm text-blue-600 font-medium">{story.activity}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/20 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 z-10"
            onClick={scrollPrev}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/20 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 z-10"
            onClick={scrollNext}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8!">
          {participantStories.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1! rounded-full transition-all duration-200 ${
                index === selectedIndex 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300'
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}