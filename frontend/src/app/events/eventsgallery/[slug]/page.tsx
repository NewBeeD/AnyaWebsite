// app/events/gallery/[eventId]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import UseGalleryApi, { GalleryEvent } from '@/hooks/Events/UseGalleryApi';
import Link from 'next/link';

export default function EventGalleryPage() {
  const params = useParams();

  console.log(params);
  
  const router = useRouter();
  const eventId = params.slug as string;


  console.log('eventId: ', eventId);
  
  
  const { getEventById, loading } = UseGalleryApi();
  const [event, setEvent] = useState<GalleryEvent | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  useEffect(() => {
    const eventData = getEventById(eventId);
    if (eventData) {
      setEvent(eventData);
    }
  }, [eventId, getEventById]);

  const getEventTypeColor = (type: string) => {
    const colors = {
      leadership: 'bg-blue-100! text-blue-800!',
      conference: 'bg-purple-100! text-purple-800!',
      worship: 'bg-yellow-100! text-yellow-800!',
      youth: 'bg-green-100! text-green-800!',
      community: 'bg-pink-100! text-pink-800!',
      mission: 'bg-orange-100! text-orange-800!',
      other: 'bg-gray-100! text-gray-800!'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100! text-gray-800!';
  };

  const getEventTypeBadge = (type: string) => {
    const labels = {
      leadership: 'Leadership',
      conference: 'Conference',
      worship: 'Worship',
      youth: 'Youth',
      community: 'Community',
      mission: 'Mission',
      other: 'Other'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateRange = (startDate: Date, endDate?: Date) => {
    const start = formatDate(startDate);
    if (!endDate) return start;
    
    if (startDate.getFullYear() === endDate.getFullYear() && 
        startDate.getMonth() === endDate.getMonth()) {
      const endDay = endDate.getDate();
      return `${start.split(' ')[0]} ${startDate.getDate()} - ${endDay}, ${startDate.getFullYear()}`;
    }
    
    return `${start} - ${formatDate(endDate)}`;
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    if (event) {
      setSelectedImageIndex((prev) => 
        prev === event.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (event) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? event.images.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen! bg-gray-50! flex! items-center! justify-center!">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600!"></div>
          <p className="mt-2 text-gray-600">Loading event gallery...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen! bg-gray-50! py-8!">
        <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8!">
          <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-8! text-center!">
            <svg className="w-12! h-12! text-gray-400! mx-auto! mb-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg! font-medium! text-gray-900! mb-2!">Event not found</h3>
            <p className="text-gray-600! mb-4!">The event you're looking for doesn't exist or has been removed.</p>
            <Link 
              href="/events/eventsgallery/"
              className="inline-flex! items-center! px-4! py-2! bg-blue-600! text-white! rounded-lg! hover:bg-blue-700! transition-colors! duration-200!"
            >
              <svg className="w-4! h-4! mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Gallery
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const selectedImage = event.images[selectedImageIndex];

  return (
    <div className="min-h-screen! bg-gray-50!">
      {/* Header */}
      <div className="bg-white! border-b! border-gray-200! sticky! top-0! z-30!">
        <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8! py-4!">
          <div className="flex! items-center! justify-between!">
            <div className="flex! items-center! space-x-4!">
              <Link 
                href="/events/eventsgallery"
                className="text-gray-600! hover:text-gray-900! transition-colors! duration-200!"
              >
                <svg className="w-5! h-5!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <div>
                <h1 className="text-xl! sm:text-2xl! font-bold! text-gray-900!">
                  {event.name}
                </h1>
                <div className="flex! items-center! space-x-2! text-sm! text-gray-600!">
                  <span>{formatDateRange(event.date, event.endDate)}</span>
                  <span>•</span>
                  <span>{event.location}, {event.country}</span>
                </div>
              </div>
            </div>
            
            <div className="flex! items-center! space-x-3!">
              <div className="flex! items-center! bg-gray-100! rounded-lg! p-1!">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3! py-1! rounded! text-sm! font-medium! transition-colors! duration-200! ${
                    viewMode === 'grid' 
                      ? 'bg-white! text-gray-900! shadow-sm!' 
                      : 'text-gray-600! hover:text-gray-900!'
                  }`}
                >
                  <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`px-3! py-1! rounded! text-sm! font-medium! transition-colors! duration-200! ${
                    viewMode === 'masonry' 
                      ? 'bg-white! text-gray-900! shadow-sm!' 
                      : 'text-gray-600! hover:text-gray-900!'
                  }`}
                >
                  <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </button>
              </div>
              
              <span className="text-sm! text-gray-600! bg-gray-100! px-3! py-1! rounded-full!">
                {event.images.length} photos
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8! py-6!">
        <div className="grid! lg:grid-cols-3! gap-8!">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-1!">
            <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! sticky! top-24!">
              {/* Event Type Badge */}
              <div className="mb-4!">
                <span className={`inline-flex! items-center! px-3! py-1! rounded-full! text-sm! font-medium! ${getEventTypeColor(event.eventType)}`}>
                  {getEventTypeBadge(event.eventType)}
                </span>
                {event.featured && (
                  <span className="ml-2! inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-yellow-100! text-yellow-800!">
                    Featured Event
                  </span>
                )}
              </div>

              <h2 className="text-xl! font-bold! text-gray-900! mb-4!">
                Event Information
              </h2>

              <div className="space-y-4!">
                <div className="flex! items-start! space-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Date</p>
                    <p className="text-sm! text-gray-600!">
                      {formatDateRange(event.date, event.endDate)}
                    </p>
                  </div>
                </div>

                <div className="flex! items-start! space-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Venue</p>
                    <p className="text-sm! text-gray-600!">{event.venue}</p>
                    <p className="text-sm! text-gray-500!">{event.location}, {event.country}</p>
                  </div>
                </div>

                {event.hostChurch && (
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Host Church</p>
                      <p className="text-sm! text-gray-600!">{event.hostChurch}</p>
                    </div>
                  </div>
                )}

                {event.attendeesCount && (
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Attendance</p>
                      <p className="text-sm! text-gray-600!">
                        {event.attendeesCount.toLocaleString()} attendees
                        {event.capacity && ` of ${event.capacity.toLocaleString()}`}
                      </p>
                      {event.capacity && (
                        <div className="w-full! bg-gray-200! rounded-full! h-2! mt-1!">
                          <div 
                            className="h-2! rounded-full! bg-green-600!"
                            style={{ width: `${(event.attendeesCount / event.capacity) * 100}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {event.speakers && event.speakers.length > 0 && (
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Speakers</p>
                      <div className="mt-1! space-y-1!">
                        {event.speakers.slice(0, 3).map((speaker, index) => (
                          <p key={index} className="text-sm! text-gray-600!">
                            • {speaker}
                          </p>
                        ))}
                        {event.speakers.length > 3 && (
                          <p className="text-sm! text-gray-500!">
                            +{event.speakers.length - 3} more
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Event Description */}
                <div className="pt-4! border-t! border-gray-200!">
                  <h3 className="text-sm! font-medium! text-gray-900! mb-2!">About this Event</h3>
                  <p className="text-sm! text-gray-600!">{event.description}</p>
                </div>

                {/* Tags */}
                <div className="pt-4! border-t! border-gray-200!">
                  <h3 className="text-sm! font-medium! text-gray-900! mb-2!">Tags</h3>
                  <div className="flex! flex-wrap! gap-2!">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block! px-3! py-1! text-xs! font-medium! text-gray-700! bg-gray-100! rounded-full!"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download All Button */}
                <div className="pt-4! border-t! border-gray-200!">
                  <button className="w-full! bg-blue-600! text-white! py-2! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                    Download All Photos ({event.images.length})
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Gallery */}
          <div className="lg:col-span-2!">
            <div className="mb-6!">
              <h2 className="text-xl! font-bold! text-gray-900! mb-2!">Event Gallery</h2>
              <p className="text-gray-600!">
                Browse through {event.images.length} photos from this event. Click on any photo to view it in full size.
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid! grid-cols-1! sm:grid-cols-2! gap-4!">
                {event.images.map((image, index) => (
                  <div 
                    key={image.id}
                    className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! overflow-hidden! hover:shadow-md! transition-all! duration-200! cursor-pointer! group!"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative! aspect-video! overflow-hidden!">
                      <img
                        src={image.thumbnailUrl}
                        alt={image.description || event.name}
                        className="w-full! h-full! object-cover! group-hover:scale-105! transition-transform! duration-300!"
                      />
                      {image.featured && (
                        <div className="absolute! top-3! left-3!">
                          <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-yellow-500! text-white!">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute! inset-0! bg-black/0! group-hover:bg-black/20! transition-colors! duration-300! flex! items-center! justify-center! opacity-0! group-hover:opacity-100!">
                        <div className="bg-white/20! backdrop-blur-sm! rounded-full! p-3!">
                          <svg className="w-6! h-6! text-white!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4!">
                      {image.description && (
                        <p className="text-sm! text-gray-700! mb-2!">{image.description}</p>
                      )}
                      {image.photographer && (
                        <div className="flex! items-center! text-xs! text-gray-500!">
                          <svg className="w-3! h-3! mr-1!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Photo by {image.photographer}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="columns-1! sm:columns-2! gap-4!">
                {event.images.map((image, index) => (
                  <div 
                    key={image.id}
                    className="break-inside-avoid! mb-4! bg-white! rounded-lg! shadow-sm! border! border-gray-200! overflow-hidden! hover:shadow-md! transition-all! duration-200! cursor-pointer! group!"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative! overflow-hidden!">
                      <img
                        src={image.thumbnailUrl}
                        alt={image.description || event.name}
                        className="w-full! h-auto! group-hover:scale-105! transition-transform! duration-300!"
                      />
                      <div className="absolute! inset-0! bg-black/0! group-hover:bg-black/20! transition-colors! duration-300!"></div>
                    </div>
                    {image.description && (
                      <div className="p-3!">
                        <p className="text-sm! text-gray-700!">{image.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed! inset-0! bg-black! bg-opacity-95! flex! items-center! justify-center! p-4! z-50! animate-in! fade-in! duration-200!">
          <div className="relative! w-full! max-w-6xl! max-h-[90vh]!">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute! top-4! right-4! z-50! text-white! hover:text-gray-300! transition-colors! duration-200! p-2! rounded-full! hover:bg-white/10!"
            >
              <svg className="w-6! h-6!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute! left-4! top-1/2! transform! -translate-y-1/2! z-50! text-white! hover:text-gray-300! transition-colors! duration-200! p-3! rounded-full! hover:bg-white/10!"
            >
              <svg className="w-6! h-6!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute! right-4! top-1/2! transform! -translate-y-1/2! z-50! text-white! hover:text-gray-300! transition-colors! duration-200! p-3! rounded-full! hover:bg-white/10!"
            >
              <svg className="w-6! h-6!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute! top-4! left-4! z-50! text-white! bg-black/50! backdrop-blur-sm! px-3! py-1! rounded-full! text-sm!">
              {selectedImageIndex + 1} / {event.images.length}
            </div>

            {/* Main Image */}
            <div className="flex! items-center! justify-center! h-full!">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.description || event.name}
                className="max-w-full! max-h-[80vh]! object-contain! rounded-lg!"
              />
            </div>

            {/* Image Info */}
            <div className="absolute! top-0! left-0! right-0! text-center!">
              <div className="inline-block! bg-black/35! backdrop-blur-sm! text-white! px-4! py-2! rounded-lg! max-w-2xl! mx-auto!">
                {selectedImage.description && (
                  <p className="text-[10px]! sm:text-base! font-medium! mb-1!">
                    {selectedImage.description}
                  </p>
                )}
                {selectedImage.photographer && (
                  <p className="text-[8px]! sm:text-sm! text-gray-300!">
                    Photo by {selectedImage.photographer}
                  </p>
                )}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute! bottom-0! left-0! right-0! overflow-x-auto!">
              <div className="flex! space-x-2! justify-center! px-4! pb-2!">
                {event.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0! w-10! h-10! rounded! overflow-hidden! border-2! ${
                      index === selectedImageIndex 
                        ? 'border-blue-500! ring-2! ring-blue-500!' 
                        : 'border-transparent! hover:border-white!'
                    }`}
                  >
                    <img
                      src={image.thumbnailUrl}
                      alt=""
                      className="w-full! h-full! object-cover!"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}