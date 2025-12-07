// app/events/gallery/page.tsx
'use client';

import { useState } from 'react';
import UseGalleryApi, { GalleryEvent, EventImage } from '@/hooks/Events/UseGalleryApi';
import Link from 'next/link';

export default function EventsGallery() {
  const { events, loading, error } = UseGalleryApi();
  
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [countryFilter, setCountryFilter] = useState<string>('all');
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [view, setView] = useState<'grid' | 'masonry'>('grid');
  const [sortBy, setSortBy] = useState<'date' | 'name'>('date');

  // Extract unique countries from events
  const countries = Array.from(new Set(events.map(event => event.country))).sort();
  
  // Extract unique years from events
  const years = Array.from(
    new Set(events.map(event => event.date.getFullYear().toString()))
  ).sort((a, b) => parseInt(b) - parseInt(a));

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
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredAndSortedEvents = events
    .filter(event => {
      const matchesType = typeFilter === 'all' || event.eventType === typeFilter;
      const matchesCountry = countryFilter === 'all' || event.country === countryFilter;
      const matchesYear = yearFilter === 'all' || event.date.getFullYear().toString() === yearFilter;
      return matchesType && matchesCountry && matchesYear;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return b.date.getTime() - a.date.getTime(); // Newest first
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const GridCard = ({ event }: { event: GalleryEvent }) => {
    const mainImage = event.images[0]; // Use first image as thumbnail
    
    return (
      <Link href={`/events/eventsgallery/${event.id}`}>
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! overflow-hidden! hover:shadow-md! transition-all! duration-200! cursor-pointer! h-full!">
          {/* Image Container */}
          <div className="relative! h-64! overflow-hidden! group">
            <div className="absolute! inset-0! bg-gradient-to-t! from-black/60! to-transparent! opacity-0! group-hover:opacity-100! transition-opacity! duration-300! z-10!"></div>
            
            {/* Images count badge */}
            <div className="absolute! top-3! left-3! z-20!">
              <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-white/90! text-gray-800! backdrop-blur-sm!">
                <svg className="w-3! h-3! mr-1!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.images.length} photos
              </span>
            </div>
            
            {/* Featured Badge */}
            {event.featured && (
              <div className="absolute! top-3! right-3! z-20!">
                <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-yellow-500! text-white!">
                  Featured
                </span>
              </div>
            )}
            
            {/* Event Type Badge */}
            <div className="absolute! bottom-3! left-3! z-20!">
              <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${getEventTypeColor(event.eventType)}`}>
                {getEventTypeBadge(event.eventType)}
              </span>
            </div>
            
            {/* Image */}
            <img
              src={mainImage.thumbnailUrl}
              alt={event.name}
              className="w-full! h-full! object-cover! group-hover:scale-105! transition-transform! duration-300!"
              loading="lazy"
            />
            
            {/* View Overlay */}
            <div className="absolute! inset-0! flex! items-center! justify-center! opacity-0! group-hover:opacity-100! transition-opacity! duration-300! z-10!">
              <div className="bg-white/20! backdrop-blur-sm! rounded-full! p-3!">
                <svg className="w-6! h-6! text-white!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4!">
            {/* Date and Location */}
            <div className="flex! items-center! justify-between! mb-2!">
              <span className="text-xs! font-medium! text-gray-500!">
                {formatDate(event.date)}
              </span>
              <span className="text-xs! font-medium! text-gray-500!">
                {event.country}
              </span>
            </div>

            {/* Event Name */}
            <h3 className="text-base! font-semibold! text-gray-900! mb-2! line-clamp-2!">
              {event.name}
            </h3>
            
            {/* Description */}
            <p className="text-sm! text-gray-600! mb-3! line-clamp-2!">
              {event.description}
            </p>

            {/* Tags */}
            <div className="flex! flex-wrap! gap-1!">
              {event.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="inline-block! px-2! py-1! text-xs! font-medium! text-gray-600! bg-gray-100! rounded!"
                >
                  {tag}
                </span>
              ))}
              {event.tags.length > 3 && (
                <span className="inline-block! px-2! py-1! text-xs! font-medium! text-gray-500!">
                  +{event.tags.length - 3}
                </span>
              )}
            </div>

            {/* Attendance info */}
            {event.attendeesCount && (
              <div className="mt-3! pt-3! border-t! border-gray-100!">
                <div className="flex! items-center! text-xs! text-gray-500!">
                  <svg className="w-3! h-3! mr-1!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{event.attendeesCount.toLocaleString()} attendees</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  };

  const MasonryCard = ({ event }: { event: GalleryEvent }) => {
    const mainImage = event.images[0]; // Use first image as thumbnail
    
    return (
      <Link href={`/events/eventsgallery/${event.id}`}>
        <div className="break-inside-avoid! mb-6! cursor-pointer!">
          <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! overflow-hidden! hover:shadow-md! transition-all! duration-200!">
            {/* Image */}
            <div className="relative!">
              <img
                src={mainImage.thumbnailUrl}
                alt={event.name}
                className="w-full! h-auto!"
                loading="lazy"
              />
              
              {/* Images count badge */}
              <div className="absolute! top-3! left-3!">
                <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-white/90! text-gray-800! backdrop-blur-sm!">
                  <svg className="w-3! h-3! mr-1!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.images.length}
                </span>
              </div>
              
              {/* Event Type Badge */}
              <div className="absolute! top-3! right-3!">
                <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${getEventTypeColor(event.eventType)}`}>
                  {getEventTypeBadge(event.eventType)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4!">
              <h3 className="text-base! font-semibold! text-gray-900! mb-1!">
                {event.name}
              </h3>
              <div className="flex! items-center! justify-between! text-xs! text-gray-500! mb-2!">
                <span>{formatDate(event.date)}</span>
                <span>{event.location}</span>
              </div>
              <p className="text-sm! text-gray-600! line-clamp-2!">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen! bg-gray-50! py-4! sm:py-8!">
      <div className="max-w-7xl! mx-auto! px-3! sm:px-6! lg:px-8!">
        
        {/* Header Section */}
        <div className="mb-6! sm:mb-8! px-2!">
          <h1 className="text-2xl! sm:text-3xl! font-bold! text-gray-900! mb-2!">
            Past Events Gallery
          </h1>
          <p className="text-base! sm:text-lg! text-gray-600!">
            Relive the memories and moments from our past events, conferences, and gatherings
          </p>
        </div>

        {/* Controls Card */}
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mb-4! sm:mb-6! mx-2! sm:mx-0!">
          <div className="flex! flex-col! lg:flex-row! justify-between! items-start! lg:items-center! space-y-4! lg:space-y-0!">
            {/* View and Sort Controls */}
            <div className="flex! flex-col! sm:flex-row! space-y-4! sm:space-y-0! sm:gap-x-6!">
              {/* View Toggle */}
              <div className="flex! items-center! gap-x-2!">
                <span className="text-sm! font-medium! text-gray-700!">View:</span>
                <div className="flex! bg-gray-100! rounded-lg! p-1!">
                  <button
                    onClick={() => setView('grid')}
                    className={`px-3! py-1! rounded! text-sm! font-medium! transition-colors! duration-200! ${
                      view === 'grid' 
                        ? 'bg-white! text-gray-900! shadow-sm!' 
                        : 'text-gray-600! hover:text-gray-900!'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setView('masonry')}
                    className={`px-3! py-1! rounded! text-sm! font-medium! transition-colors! duration-200! ${
                      view === 'masonry' 
                        ? 'bg-white! text-gray-900! shadow-sm!' 
                        : 'text-gray-600! hover:text-gray-900!'
                    }`}
                  >
                    Masonry
                  </button>
                </div>
              </div>

              {/* Sort By */}
              <div className="flex! items-center! gap-x-2!">
                <span className="text-sm! font-medium! text-gray-700!">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="date">Newest First</option>
                  <option value="name">Event Name</option>
                </select>
              </div>
            </div>

            {/* Filters */}
            <div className="flex! flex-col! sm:flex-row! gap-4! w-full! lg:w-auto!">
              {/* Type Filter */}
              <div className="flex! items-center! gap-x-3! w-full! sm:w-auto!">
                <label htmlFor="type-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                  Event Type:
                </label>
                <select
                  id="type-filter"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full! sm:w-auto! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="all">All Types</option>
                  <option value="conference">Conference</option>
                  <option value="worship">Worship</option>
                  <option value="youth">Youth</option>
                  <option value="leadership">Leadership</option>
                  <option value="community">Community</option>
                  <option value="mission">Mission</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Country Filter */}
              <div className="flex! items-center! gap-x-3! w-full! sm:w-auto!">
                <label htmlFor="country-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                  Country:
                </label>
                <select
                  id="country-filter"
                  value={countryFilter}
                  onChange={(e) => setCountryFilter(e.target.value)}
                  className="w-full! sm:w-auto! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="all">All Countries</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="flex! items-center! gap-x-3! w-full! sm:w-auto!">
                <label htmlFor="year-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                  Year:
                </label>
                <select
                  id="year-filter"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="w-full! sm:w-auto! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Events Gallery */}
        {filteredAndSortedEvents.length === 0 && !loading ? (
          <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-8! text-center! mx-2! sm:mx-0!">
            <svg className="w-12! h-12! text-gray-400! mx-auto! mb-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg! font-medium! text-gray-900! mb-2!">No events found</h3>
            <p className="text-gray-600!">Try adjusting your filters to see more events.</p>
          </div>
        ) : loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600!"></div>
            <p className="mt-2 text-gray-600">Loading events gallery...</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid! grid-cols-1! sm:grid-cols-2! lg:grid-cols-3! xl:grid-cols-4! gap-4! sm:gap-6! mx-2! sm:mx-0!">
            {filteredAndSortedEvents.map(event => (
              <GridCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="columns-1! sm:columns-2! lg:columns-3! gap-4! sm:gap-6! mx-2! sm:mx-0!">
            {filteredAndSortedEvents.map(event => (
              <MasonryCard key={event.id} event={event} />
            ))}
          </div>
        )}

        {/* Event Type Legend */}
        <div className="mt-6! bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mx-2! sm:mx-0!">
          <h3 className="text-lg! font-semibold! text-gray-900! mb-3! sm:mb-4!">Event Types</h3>
          <div className="flex! flex-wrap! gap-3! sm:gap-4!">
            {Object.entries({
              conference: 'Conference',
              worship: 'Worship',
              youth: 'Youth',
              leadership: 'Leadership',
              community: 'Community',
              mission: 'Mission',
              other: 'Other'
            }).map(([type, label]) => (
              <div key={type} className="flex! items-center! gap-x-2!">
                <div className={`w-3! h-3! sm:w-4! sm:h-4! rounded! ${getEventTypeColor(type)}`} />
                <span className="text-xs! sm:text-sm! text-gray-700!">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}