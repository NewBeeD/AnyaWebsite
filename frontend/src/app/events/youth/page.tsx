// app/youth-events/page.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import UseYouthApi from '@/hooks/Events/UseYouthApi'
import Link from 'next/link';

interface YouthEvent {
  id: string;
  title: string;
  date: Date;
  location: string;
  church: string;
  type: 'camp' | 'workshop' | 'retreat' | 'conference' | 'social' | 'mission';
  description: string;
  ageGroup: string;
  registrationRequired: boolean;
  registrationLink?: string;
  image?: string;
  country: string;
}

export default function YouthEvents() {
  const { events, loading, error } = UseYouthApi();
  const [filter, setFilter] = useState<string>('all');
  const [countryFilter, setCountryFilter] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<YouthEvent | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  // Get unique countries from events
  const countries = useMemo(() => {
    const uniqueCountries = Array.from(new Set(events.map(event => event.country)))
      .filter(country => country) // Remove empty/null countries
      .sort(); // Sort alphabetically
    return uniqueCountries;
  }, [events]);

  const getEventTypeColor = (type: string) => {
    const colors = {
      camp: 'bg-green-50! border-green-200! text-green-700!',
      workshop: 'bg-blue-50! border-blue-200! text-blue-700!',
      retreat: 'bg-purple-50! border-purple-200! text-purple-700!',
      conference: 'bg-orange-50! border-orange-200! text-orange-700!',
      social: 'bg-pink-50! border-pink-200! text-pink-700!',
      mission: 'bg-red-50! border-red-200! text-red-700!'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-50! border-gray-200! text-gray-700!';
  };

  const getEventTypeBadge = (type: string) => {
    const colors = {
      camp: 'bg-green-100! text-green-800!',
      workshop: 'bg-blue-100! text-blue-800!',
      retreat: 'bg-purple-100! text-purple-800!',
      conference: 'bg-orange-100! text-orange-800!',
      social: 'bg-pink-100! text-pink-800!',
      mission: 'bg-red-100! text-red-800!'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100! text-gray-800!';
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Filter events by both type and country
  const filteredEvents = events.filter(event => {
    const typeMatch = filter === 'all' || event.type === filter;
    const countryMatch = countryFilter === 'all' || event.country === countryFilter;
    return typeMatch && countryMatch;
  });

  const EventCard = ({ event }: { event: YouthEvent }) => (
    <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! hover:shadow-md! transition-all! duration-200!">
      <div className="flex! justify-between! items-start! mb-4!">
        <div>
          <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getEventTypeBadge(event.type)}`}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
          <span className="ml-2! inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
            {event.ageGroup}
          </span>
          {event.country && (
            <span className="ml-2! inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-indigo-100! text-indigo-800!">
              {event.country}
            </span>
          )}
        </div>
        {event.registrationRequired && (
          <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-yellow-100! text-yellow-800!">
            Registration Required
          </span>
        )}
      </div>

      <h3 className="text-xl! font-semibold! text-gray-900! mb-2!">
        {event.title}
      </h3>
      
      <p className="text-gray-600! mb-4! line-clamp-2!">
        {event.description}
      </p>

      <div className="space-y-2! mb-4!">
        <div className="flex! items-center! space-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm! text-gray-700!">{formatDate(event.date)}</span>
        </div>
        
        <div className="flex! items-center! space-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm! text-gray-700!">{event.location}</span>
        </div>

        <div className="flex! items-center! space-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-sm! text-gray-700!">{event.church}</span>
        </div>
      </div>

      <div className="flex! gap-x-3!">
        <button
          onClick={() => setSelectedEvent(event)}
          className="flex-1! bg-blue-600! text-white! py-2! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
        >
          View Details
        </button>
        {event.registrationRequired && event.registrationLink && (



          <Link
          href={event.registrationLink?? '#'}
          target={event.registrationLink == null? '_self': '_blank'}
          rel="noopener noreferrer">

            <button className="flex-1! border! border-blue-600! text-blue-600! py-2! px-4! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
              Register
            </button>

          </Link>
          
          
          
        )}
      </div>
    </div>
  );

  const EventListItem = ({ event }: { event: YouthEvent }) => (
    <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! hover:shadow-md! transition-all! duration-200!">
      <div className="flex! flex-col! md:flex-row! md:items-center! justify-between!">
        <div className="flex-1!">
          <div className="flex! items-center! gap-x-3! mb-2!">
            <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getEventTypeBadge(event.type)}`}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </span>
            <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
              {event.ageGroup}
            </span>
            {event.country && (
              <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-indigo-100! text-indigo-800!">
                {event.country}
              </span>
            )}
            {event.registrationRequired && (
              <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-yellow-100! text-yellow-800!">
                Registration Required
              </span>
            )}
          </div>
          
          <h3 className="text-xl! font-semibold! text-gray-900! mb-2!">
            {event.title}
          </h3>
          
          <p className="text-gray-600! mb-3!">
            {event.description}
          </p>

          <div className="flex! flex-wrap! gap-4! text-sm! text-gray-600!">
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>{event.location}</span>
            </div>
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{event.church}</span>
            </div>
            {event.country && (
              <div className="flex! items-center! space-x-1!">
                <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{event.country}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex! gap-x-3! mt-4! md:mt-0! md:ml-6!">
          <button
            onClick={() => setSelectedEvent(event)}
            className="px-4! py-2! bg-blue-600! text-white! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
          >
            Details
          </button>
          {event.registrationRequired && event.registrationLink && (
            <button className="px-4! py-2! border! border-blue-600! text-blue-600! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen! bg-gray-50! py-4! sm:py-8!">
      <div className="max-w-7xl! mx-auto! px-3! sm:px-6! lg:px-8!">
        
        {/* Header Section */}
        <div className="mb-6! sm:mb-8! px-2!">
          <h1 className="text-2xl! sm:text-3xl! font-bold! text-gray-900! mb-2!">
            Youth Events
          </h1>
          <p className="text-base! sm:text-lg! text-gray-600!">
            Exciting events and activities for youth across our 90 member churches
          </p>
        </div>

        {/* Controls Card */}
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mb-4! sm:mb-6! mx-2! sm:mx-0!">
          <div className="flex! flex-col! sm:flex-row! justify-between! items-start! sm:items-center! space-y-4! sm:space-y-0!">
            {/* View Toggle */}
            <div className="flex! items-center! space-x-2!">
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
                  onClick={() => setView('list')}
                  className={`px-3! py-1! rounded! text-sm! font-medium! transition-colors! duration-200! ${
                    view === 'list' 
                      ? 'bg-white! text-gray-900! shadow-sm!' 
                      : 'text-gray-600! hover:text-gray-900!'
                  }`}
                >
                  List
                </button>
              </div>
            </div>

            {/* Filters Container */}
            <div className="flex! flex-col! sm:flex-row! gap-4! w-full! sm:w-auto!">
              {/* Event Type Filter */}
              <div className="flex! items-center! gap-x-3! w-full! sm:w-auto!">
                <label htmlFor="event-type-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                  Event Type:
                </label>
                <select
                  id="event-type-filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full! sm:w-auto! min-w-[140px]! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="all">All Events</option>
                  <option value="camp">Camps</option>
                  <option value="workshop">Workshops</option>
                  <option value="retreat">Retreats</option>
                  <option value="conference">Conferences</option>
                  <option value="social">Social Events</option>
                  <option value="mission">Mission Trips</option>
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
                  className="w-full! sm:w-auto! min-w-[140px]! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="all">All Countries</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid/List */}
        {filteredEvents.length === 0 ? (
          <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-8! text-center! mx-2! sm:mx-0!">
            <svg className="w-12! h-12! text-gray-400! mx-auto! mb-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg! font-medium! text-gray-900! mb-2!">No events found</h3>
            <p className="text-gray-600!">Try adjusting your filters to see more events.</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-6! mx-2! sm:mx-0!">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="space-y-4! mx-2! sm:mx-0!">
            {filteredEvents.map(event => (
              <EventListItem key={event.id} event={event} />
            ))}
          </div>
        )}

        {/* Event Type Legend */}
        <div className="mt-6! bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mx-2! sm:mx-0!">
          <h3 className="text-lg! font-semibold! text-gray-900! mb-3! sm:mb-4!">Event Types</h3>
          <div className="flex! flex-wrap! gap-3! sm:gap-4!">
            {Object.entries({
              camp: 'Camps',
              workshop: 'Workshops',
              retreat: 'Retreats',
              conference: 'Conferences',
              social: 'Social Events',
              mission: 'Mission Trips'
            }).map(([type, label]) => (
              <div key={type} className="flex! items-center! gap-x-2!">
                <div className={`w-3! h-3! sm:w-4! sm:h-4! rounded! ${getEventTypeBadge(type)}`} />
                <span className="text-xs! sm:text-sm! text-gray-700!">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed! inset-0! bg-black! bg-opacity-50! flex! items-center! justify-center! p-3! sm:p-4! z-50! animate-in! fade-in! duration-200!">
          <div className="bg-white! rounded-lg! max-w-2xl! w-full! max-h-[90vh]! overflow-y-auto! animate-in! slide-in-from-bottom-2! duration-300!">
            <div className="p-4! sm:p-6!">
              <div className="flex! justify-between! items-start! mb-4!">
                <div className="pr-4!">
                  <h2 className="text-2xl! font-bold! text-gray-900! mb-2!">
                    {selectedEvent.title}
                  </h2>
                  <div className="flex! flex-wrap! gap-2!">
                    <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getEventTypeBadge(selectedEvent.type)}`}>
                      {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                    </span>
                    <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
                      Ages {selectedEvent.ageGroup}
                    </span>
                    {selectedEvent.country && (
                      <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-indigo-100! text-indigo-800!">
                        {selectedEvent.country}
                      </span>
                    )}
                    {selectedEvent.registrationRequired && (
                      <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-yellow-100! text-yellow-800!">
                        Registration Required
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400! hover:text-gray-600! transition-colors! duration-200! p-1! rounded-lg! hover:bg-gray-100! flex-shrink-0!"
                >
                  <svg className="w-6! h-6!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4!">
                <div className="flex! items-start! space-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Date & Time</p>
                    <p className="text-sm! text-gray-600!">
                      {selectedEvent.date.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex! items-start! space-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Location</p>
                    <p className="text-sm! text-gray-600!">{selectedEvent.location}</p>
                  </div>
                </div>

                <div className="flex! items-start! space-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Host Church</p>
                    <p className="text-sm! text-gray-600!">{selectedEvent.church}</p>
                  </div>
                </div>

                {selectedEvent.country && (
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Country</p>
                      <p className="text-sm! text-gray-600!">{selectedEvent.country}</p>
                    </div>
                  </div>
                )}

                <div className="flex! items-start! space-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Description</p>
                    <p className="text-sm! text-gray-600!">{selectedEvent.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6! flex! flex-col! sm:flex-row! space-y-3! sm:space-y-0! sm:gap-x-3!">
                {selectedEvent.registrationRequired && selectedEvent.registrationLink ? (
                  <>
                    <button className="flex-1! bg-blue-600! text-white! py-2.5! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                      Register Now
                    </button>
                    <button className="flex-1! border! border-gray-300! text-gray-700! py-2.5! px-4! rounded-lg! font-medium! hover:bg-gray-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-gray-500! focus:ring-offset-2!">
                      Share Event
                    </button>
                  </>
                ) : (
                  <button className="w-full! bg-blue-600! text-white! py-2.5! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                    Learn More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}