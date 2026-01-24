// app/calendar/page.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import useCalendarApi from '@/hooks/Events/UseCalenderApi';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  church: string;
  type: 'conference' | 'workshop' | 'church' | 'youth' | 'other';
  description?: string;
  country: string;
}

export default function FullCalendarView() {
  const { events, loading, error } = useCalendarApi();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [countryFilter, setCountryFilter] = useState<string>('all');
  const [isMobile, setIsMobile] = useState(false);
  
  // Use useMemo to derive available countries and event types
  const availableCountries = useMemo(() => {
    if (!events || events.length === 0) return [];
    const countries = Array.from(new Set(events.map(event => event.country)))
      .filter(country => country && typeof country === 'string')
      .sort();
    return countries;
  }, [events]);

  const availableEventTypes = useMemo(() => {
    if (!events || events.length === 0) return [];
    const eventTypes = Array.from(new Set(events.map(event => event.type)))
      .filter(type => type && typeof type === 'string')
      .sort();
    return eventTypes;
  }, [events]);

  // Check mobile screen size - only run once
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []); // Empty dependency array - runs once

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventTypeColor = (type: string) => {
    const colors = {
      conference: 'bg-blue-50 border-blue-200 text-blue-700',
      workshop: 'bg-green-50 border-green-200 text-green-700',
      church: 'bg-purple-50 border-purple-200 text-purple-700', // Changed from prayer to church
      youth: 'bg-orange-50 border-orange-200 text-orange-700',
      other: 'bg-gray-50 border-gray-200 text-gray-700'
    };
    
    if (!type) return colors.other;
    
    const normalizedType = type.toLowerCase();
    if (normalizedType.includes('conference')) return colors.conference;
    if (normalizedType.includes('workshop')) return colors.workshop;
    if (normalizedType.includes('church')) return colors.church; // Changed from prayer to church
    if (normalizedType.includes('youth')) return colors.youth;
    return colors.other;
  };

  const getEventTypeBadge = (type: string) => {
    const colors = {
      conference: 'bg-blue-100 text-blue-800',
      workshop: 'bg-green-100 text-green-800',
      church: 'bg-purple-100 text-purple-800', // Changed from prayer to church
      youth: 'bg-orange-100 text-orange-800',
      other: 'bg-gray-100 text-gray-800'
    };
    
    if (!type) return colors.other;
    
    const normalizedType = type.toLowerCase();
    if (normalizedType.includes('conference')) return colors.conference;
    if (normalizedType.includes('workshop')) return colors.workshop;
    if (normalizedType.includes('church')) return colors.church; // Changed from prayer to church
    if (normalizedType.includes('youth')) return colors.youth;
    return colors.other;
  };

  // FIXED: Updated normalization to handle 'church' instead of 'prayer'
  const normalizeEventType = (eventType: string): string => {
    if (!eventType) return 'other';
    
    const normalized = eventType.toLowerCase();
    if (normalized.includes('conference')) return 'conference';
    if (normalized.includes('workshop')) return 'workshop';
    if (normalized.includes('church')) return 'church'; // Changed from prayer to church
    if (normalized.includes('youth')) return 'youth';
    return 'other';
  };

  // FIXED: Updated getEventsForDay with better matching logic
  const getEventsForDay = (day: number) => {
    if (!events || events.length === 0) return [];
    
    return events.filter(event => {
      if (!event.date) return false;
      
      try {
        const eventDate = new Date(event.date);
        if (isNaN(eventDate.getTime())) return false;
        
        const dayMatch = eventDate.getDate() === day && 
                        eventDate.getMonth() === currentDate.getMonth() &&
                        eventDate.getFullYear() === currentDate.getFullYear();
        
        if (!dayMatch) return false; // Early exit if date doesn't match
        
        // FIXED: Better type matching - handle case insensitivity
        const normalizedEventType = normalizeEventType(event.type || '');
        let typeMatch = false;
        
        if (typeFilter === 'all') {
          typeMatch = true;
        } else {
          // Handle different cases: 'Conference' vs 'conference' vs 'Conference'
          const normalizedFilter = typeFilter.toLowerCase();
          typeMatch = normalizedEventType === normalizedFilter;
        }
        
        if (!typeMatch) return false; // Early exit if type doesn't match
        
        // Country matching
        const countryMatch = countryFilter === 'all' || 
                            (event.country && event.country.toLowerCase() === countryFilter.toLowerCase());
        
        return countryMatch;
      } catch (error) {
        console.error('Error processing event date:', error);
        return false;
      }
    });
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  // Check if there are any events matching the current filters
  const hasEventsForCurrentMonth = useMemo(() => {
    if (!events || events.length === 0) return false;
    
    return Array.from({ length: daysInMonth }, (_, i) => i + 1)
      .some(day => getEventsForDay(day).length > 0);
  }, [events, daysInMonth, currentDate, typeFilter, countryFilter]);

  // Mobile calendar view - simplified for small screens
  const MobileCalendarView = () => {
    const daysWithEvents = Array.from({ length: daysInMonth }, (_, i) => i + 1)
      .map(day => ({ day, events: getEventsForDay(day) }))
      .filter(({ events }) => events.length > 0);

    if (daysWithEvents.length === 0) {
      return null; // Will be handled by the main render logic
    }

    return (
      <div className="space-y-4">
        {daysWithEvents.map(({ day, events: dayEvents }) => (
          <div key={day} className="bg-white rounded-lg border border-gray-200 p-4!">
            <div className="flex items-center gap-x-3! mb-3!">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                new Date().getDate() === day && 
                new Date().getMonth() === currentDate.getMonth() && 
                new Date().getFullYear() === currentDate.getFullYear()
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}>
                {day}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toLocaleDateString('en-US', { weekday: 'long' })}
              </div>
            </div>
            <div className="space-y-2!">
              {dayEvents.map(event => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className={`w-full text-left p-3! rounded-lg border-l-4 ${getEventTypeColor(event.type)} hover:shadow-sm transition-all duration-200`}
                >
                  <div className="font-medium text-sm mb-1!">{event.title}</div>
                  <div className="text-xs text-gray-500 flex justify-between items-center">
                    <span>{event.church}</span>
                    <span className={`px-2! py-1! rounded-full text-xs ${getEventTypeBadge(event.type)}`}>
                      {event.type} {/* Show original type, not normalized */}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1!">
                    {event.country}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4! sm:py-8!">
      <div className="max-w-7xl mx-auto px-3! sm:px-6! lg:px-8!">
        
        {/* Header Section */}
        <div className="mb-6! sm:mb-8! px-2!">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2!">
            Church Events Calendar
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            View events across different countries
          </p>
        </div>

        {/* Calendar Controls Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4! sm:p-6! mb-4! sm:mb-6! mx-2! sm:mx-0!">
          <div className="flex flex-col space-y-4! sm:space-y-0! sm:flex-row justify-between items-start sm:items-center">
            {/* Month Navigation */}
            <div className="flex items-center gap-x-3! w-full sm:w-auto! justify-between sm:justify-start">
              <div className="flex items-center gap-x-2!">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2! rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Previous month"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 min-w-[160px] sm:min-w-[200px] text-center">
                  {formatMonthYear(currentDate)}
                </h2>
                
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2! rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Next month"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-3! py-2! text-xs sm:text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Today
              </button>
            </div>

            {/* Filter Section */}
            <div className="flex flex-col sm:flex-row gap-4! w-full sm:w-auto!">
              {/* Country Filter */}
              <div className="flex items-center gap-x-3! w-full sm:w-auto! justify-between sm:justify-start">
                <label htmlFor="country-filter" className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Country:
                </label>
                <select
                  id="country-filter"
                  value={countryFilter}
                  onChange={(e) => setCountryFilter(e.target.value)}
                  className="w-full sm:w-[180px]! px-3! py-2! border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  <option value="all">All Countries</option>
                  {availableCountries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {/* Event Type Filter - FIXED: using lowercase values to match normalization */}
              <div className="flex items-center gap-x-3! w-full sm:w-auto! justify-between sm:justify-start">
                <label htmlFor="event-filter" className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Event Type:
                </label>
                <select
                  id="event-filter"
                  value={typeFilter}
                  onChange={(e) => {
                    console.log('Setting type filter to:', e.target.value);
                    setTypeFilter(e.target.value);
                  }}
                  className="w-full sm:w-[180px]! px-3! py-2! border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  <option value="all">All Events</option>
                  <option value="conference">Conferences</option>
                  <option value="workshop">Workshops</option>
                  <option value="church">Church</option>
                  <option value="youth">Youth</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Active Filters Display */}
          {(countryFilter !== 'all' || typeFilter !== 'all') && (
            <div className="mt-4! flex flex-wrap gap-2!">
              <div className="text-sm text-gray-600 font-medium">Active filters:</div>
              {countryFilter !== 'all' && (
                <div className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Country: {countryFilter}
                  <button 
                    onClick={() => setCountryFilter('all')}
                    className="ml-2! text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </div>
              )}
              {typeFilter !== 'all' && (
                <div className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Type: {typeFilter}
                  <button 
                    onClick={() => setTypeFilter('all')}
                    className="ml-2! text-green-600 hover:text-green-800"
                  >
                    ×
                  </button>
                </div>
              )}
              {(countryFilter !== 'all' || typeFilter !== 'all') && (
                <button 
                  onClick={() => {
                    setCountryFilter('all');
                    setTypeFilter('all');
                  }}
                  className="text-xs text-gray-600 hover:text-gray-900 underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="animate-pulse space-y-4!">
            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto! mb-6!"></div>
            <div className="space-y-3!">
              <div className="h-6 bg-gray-200 rounded w-4/5 mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded w-5/6 mx-auto"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto! mt-6!"></div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="mb-6! p-4! bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center justify-center">
              <div className="text-yellow-600 mr-2!">⚠️</div>
              <p className="text-yellow-800 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Debug Info - Remove in production */}
        {!loading && events && events.length > 0 && (
          <div className="mb-4! text-xs text-gray-500">
            <p>Found {events.length} total events. Available types: {availableEventTypes.join(', ')}</p>
            <p>Current filters - Type: "{typeFilter}", Country: "{countryFilter}"</p>
          </div>
        )}

        {/* No Events State */}
        {!loading && events && events.length > 0 && !hasEventsForCurrentMonth && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8! text-center">
            <div className="text-gray-400 mb-2!">📅</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2!">No events found for this month</h3>
            <p className="text-gray-600 mb-4!">
              Try selecting a different month or adjusting your filters.
            </p>
            {(countryFilter !== 'all' || typeFilter !== 'all') && (
              <button
                onClick={() => {
                  setCountryFilter('all');
                  setTypeFilter('all');
                }}
                className="px-4! py-2! bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* No Events at All */}
        {!loading && events && events.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8! text-center">
            <div className="text-gray-400 mb-2!">📅</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2!">No events available</h3>
            <p className="text-gray-600">Check back later for upcoming events.</p>
          </div>
        )}

        {!loading && events && events.length > 0 && hasEventsForCurrentMonth && (
          <div>
            {/* Calendar Grid */}
            {isMobile ? (
              <MobileCalendarView />
            ) : (
              <>
                {/* Desktop Calendar Grid Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-2! sm:mx-0">
                  {/* Week Days Header */}
                  <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="p-3! sm:p-4! text-center font-semibold text-gray-700 text-xs sm:text-sm uppercase tracking-wide">
                        {day}
                      </div>
                    ))}
                  </div>
    
                  {/* Calendar Days Grid */}
                  <div className="grid grid-cols-7 gap-px! bg-gray-200">
                    {days.map((day, index) => (
                      <div
                        key={index}
                        className="bg-white min-h-[120px] sm:min-h-[140px] p-2! sm:p-3! hover:bg-gray-50 transition-colors duration-150"
                      >
                        {day && (
                          <>
                            {/* Day Number */}
                            <div className="flex justify-between items-start mb-2!">
                              <span className={`text-sm font-medium ${
                                new Date().getDate() === day && 
                                new Date().getMonth() === currentDate.getMonth() && 
                                new Date().getFullYear() === currentDate.getFullYear()
                                  ? 'bg-blue-600 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm'
                                  : 'text-gray-900'
                              }`}>
                                {day}
                              </span>
                            </div>
                            
                            {/* Events for the day */}
                            <div className="space-y-1! sm:space-y-2!">
                              {getEventsForDay(day).map(event => (
                                <button
                                  key={event.id}
                                  onClick={() => setSelectedEvent(event)}
                                  className={`w-full text-left text-xs p-1! sm:p-2! rounded-lg border-l-4 ${getEventTypeColor(event.type)} hover:shadow-sm transition-all duration-200 text-start`}
                                >
                                  <div className="font-medium truncate text-xs sm:text-sm">{event.title}</div>
                                  <div className="text-xs text-gray-500 mt-0.5! truncate">{event.church}</div>
                                  <div className="text-xs text-gray-400 mt-0.5! truncate">{event.country}</div>
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
    
                {/* Event Type Legend - FIXED: Updated to show 'Church' instead of 'Prayer' */}
                <div className="mt-6! bg-white rounded-lg shadow-sm border border-gray-200 p-4! sm:p-6! mx-2! sm:mx-0">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4!">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3! sm:mb-4!">Event Types</h3>
                      <div className="flex flex-wrap gap-3! sm:gap-4!">
                        {Object.entries({
                          conference: 'Conferences',
                          workshop: 'Workshops',
                          church: 'Church', // Changed from prayer to church
                          youth: 'Youth Events',
                          other: 'Other Events'
                        }).map(([type, label]) => (
                          <div key={type} className="flex items-center gap-x-2!">
                            <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded ${getEventTypeBadge(type)}`} />
                            <span className="text-xs sm:text-sm text-gray-700">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Showing events from: <span className="font-medium">{countryFilter === 'all' ? 'All Countries' : countryFilter}</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3! sm:p-4! z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-2 duration-300">
            <div className="p-4! sm:p-6!">
              <div className="flex justify-between items-start mb-4!">
                <div className="pr-4!">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2!">
                    {selectedEvent.title}
                  </h3>
                  <span className={`inline-flex items-center px-2.5! py-0.5! rounded-full text-xs font-medium ${getEventTypeBadge(selectedEvent.type)}`}>
                    {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1! rounded-lg hover:bg-gray-100 flex-shrink-0"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4! pb-2!">
                <div className="flex items-start gap-x-3!">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Date & Time</p>
                    <p className="text-sm text-gray-600">
                      {selectedEvent.date.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-3!">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Host Church</p>
                    <p className="text-sm text-gray-600">{selectedEvent.church}</p>
                  </div>
                </div>

                <div className="flex items-start gap-x-3!">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Country</p>
                    <p className="text-sm text-gray-600">{selectedEvent.country}</p>
                  </div>
                </div>

                <div className="flex items-start gap-x-3!">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Event Type</p>
                    <p className="text-sm text-gray-600">{selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}</p>
                  </div>
                </div>

                {selectedEvent.description && (
                  <div className="flex items-start gap-x-3!">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Description</p>
                      <p className="text-sm text-gray-600 py-1!">{selectedEvent.description}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row space-y-3! sm:space-y-0! sm:gap-x-3!">
                <button className="flex-1 bg-blue-600 text-white py-2.5! px-4! rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Add to Calendar
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2.5! px-4! rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  Share Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}