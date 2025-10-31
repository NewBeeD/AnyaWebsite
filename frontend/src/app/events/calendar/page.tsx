// app/calendar/page.tsx
'use client';

import { useState, useEffect } from 'react';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  church: string;
  type: 'conference' | 'workshop' | 'prayer' | 'youth' | 'other';
  description?: string;
}

export default function FullCalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sample data - replace with actual API calls
  useEffect(() => {
    const mockEvents: CalendarEvent[] = [
      {
        id: '1',
        title: 'Pastors Conference',
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        church: 'All Churches',
        type: 'conference',
        description: 'Annual gathering of pastors from all 90 churches for fellowship and strategic planning.'
      },
      {
        id: '2',
        title: 'Youth Leadership Workshop',
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 20),
        church: 'Central Church',
        type: 'workshop',
        description: 'Training session for youth leaders across the island.'
      },
      {
        id: '3',
        title: 'Unity Prayer Meeting',
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        church: 'Northside Fellowship',
        type: 'prayer',
        description: 'Joint prayer meeting for church unity and community transformation.'
      },
      {
        id: '4',
        title: 'Worship Team Training',
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 22),
        church: 'Coastal Community',
        type: 'workshop',
      },
      {
        id: '5',
        title: 'Youth Summer Camp',
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 25),
        church: 'Mountain View',
        type: 'youth',
      },
    ];
    setEvents(mockEvents);
  }, [currentDate]);

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
      prayer: 'bg-purple-50 border-purple-200 text-purple-700',
      youth: 'bg-orange-50 border-orange-200 text-orange-700',
      other: 'bg-gray-50 border-gray-200 text-gray-700'
    };
    return colors[type as keyof typeof colors] || colors.other;
  };

  const getEventTypeBadge = (type: string) => {
    const colors = {
      conference: 'bg-blue-100 text-blue-800',
      workshop: 'bg-green-100 text-green-800',
      prayer: 'bg-purple-100 text-purple-800',
      youth: 'bg-orange-100 text-orange-800',
      other: 'bg-gray-100 text-gray-800'
    };
    return colors[type as keyof typeof colors] || colors.other;
  };

  const getEventsForDay = (day: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day && 
             eventDate.getMonth() === currentDate.getMonth() &&
             eventDate.getFullYear() === currentDate.getFullYear() &&
             (filter === 'all' || event.type === filter);
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

  // Mobile calendar view - simplified for small screens
  const MobileCalendarView = () => (
    <div className="space-y-4">
      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
        const dayEvents = getEventsForDay(day);
        if (dayEvents.length === 0) return null;

        return (
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
                      {event.type}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      }).filter(Boolean)}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-4! sm:py-8!">
      <div className="max-w-7xl mx-auto px-3! sm:px-6! lg:px-8!">
        
        {/* Header Section */}
        <div className="mb-6! sm:mb-8! px-2!">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2!">
            Church Events Calendar
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            View all events across our 90 member churches
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
            <div className="flex items-center gap-x-3! w-full sm:w-auto justify-between sm:justify-start">
              <label htmlFor="event-filter" className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Filter by:
              </label>
              <select
                id="event-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full sm:w-auto! px-3! py-2! border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option value="all">All Events</option>
                <option value="conference">Conferences</option>
                <option value="workshop">Workshops</option>
                <option value="prayer">Prayer</option>
                <option value="youth">Youth</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

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
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Event Type Legend */}
            <div className="mt-6! bg-white rounded-lg shadow-sm border border-gray-200 p-4! sm:p-6! mx-2! sm:mx-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-3! sm:mb-4!">Event Types</h3>
              <div className="flex flex-wrap gap-3! sm:gap-4!">
                {Object.entries({
                  conference: 'Conferences',
                  workshop: 'Workshops',
                  prayer: 'Prayer Meetings',
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
          </>
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
              
              <div className="space-y-4!">
                <div className="flex items-start space-x-3!">
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
                
                <div className="flex items-start space-x-3!">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Host Church</p>
                    <p className="text-sm text-gray-600">{selectedEvent.church}</p>
                  </div>
                </div>

                {selectedEvent.description && (
                  <div className="flex items-start space-x-3!">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Description</p>
                      <p className="text-sm text-gray-600">{selectedEvent.description}</p>
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