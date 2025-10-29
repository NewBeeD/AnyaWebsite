// components/SocialProofSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

// Mock data - replace with your actual data
const galleryPhotos = [
  {
    id: 1,
    src: '/images/gallery/youth-conference-1.jpg',
    alt: 'Youth conference worship session',
    event: 'Island Youth Conference 2024',
    church: 'Various Churches'
  },
  {
    id: 2,
    src: '/images/gallery/community-outreach.jpg',
    alt: 'Community food drive event',
    event: 'Community Outreach Program',
    church: 'St. Mark Church'
  },
  {
    id: 3,
    src: '/images/gallery/pastors-retreat.jpg',
    alt: 'Pastors prayer retreat',
    event: 'Annual Pastors Retreat',
    church: 'Leadership Gathering'
  },
  {
    id: 4,
    src: '/images/gallery/worship-night.jpg',
    alt: 'Unity worship night',
    event: 'Unity Worship Night',
    church: 'Citywide Gathering'
  },
  {
    id: 5,
    src: '/images/gallery/children-camp.jpg',
    alt: 'Children summer camp activities',
    event: 'Summer Children Camp',
    church: 'Multiple Locations'
  },
  {
    id: 6,
    src: '/images/gallery/mission-trip.jpg',
    alt: 'Mission trip team photo',
    event: 'International Mission Trip',
    church: 'Network Churches'
  }
];

const testimonials = [
  {
    id: 1,
    quote: "Being part of this network has provided our small church with resources and fellowship we could never have on our own. The unity we've found is truly transformative.",
    author: "Pastor John Makoto",
    church: "Grace Community Church, North District",
    role: "Senior Pastor"
  },
  {
    id: 2,
    quote: "The island-wide events have helped our youth connect with other young believers in a powerful way. Our kids are no longer isolated in their faith journey.",
    author: "Maria Santos",
    church: "Living Waters Church, East Coast",
    role: "Youth Leader"
  },
  {
    id: 3,
    quote: "As a new church plant, the resources and support from this network have been invaluable. We've received training, encouragement, and practical help exactly when we needed it.",
    author: "David Chen",
    church: "New Hope Church, Western Region",
    role: "Church Planter"
  }
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryPhotos[0] | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Life in Our Community</h2>
        <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
          View All Photos
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {galleryPhotos.map((photo, index) => (
          <div 
            key={photo.id}
            className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => setSelectedImage(photo)}
          >
            {/* Placeholder for images - replace with actual Image component */}
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-end">
              <div className="p-3 text-white transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-medium truncate">{photo.event}</p>
                <p className="text-xs opacity-90">{photo.church}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="relative">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.event}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.church}</p>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  View Event Recap →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl shadow-lg p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Stories of Impact</h2>
        <p className="text-indigo-100">Hear from our church family across the island</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Testimonial Content */}
        <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="text-center">
            {/* Quote Icon */}
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg lg:text-xl mb-6 text-indigo-50 leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Author Info */}
            <div>
              <p className="font-semibold text-white text-lg">
                {testimonials[currentTestimonial].author}
              </p>
              <p className="text-indigo-200">
                {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].church}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          {/* Previous Button */}
          <button 
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function SocialProofSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Photo Gallery - Takes 2/3 on large screens */}
          <div className="lg:col-span-2">
            <PhotoGallery />
          </div>

          {/* Testimonial Slider - Takes 1/3 on large screens */}
          <div className="lg:col-span-1">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
}