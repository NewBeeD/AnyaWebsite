// app/church-events/page.tsx
'use client';

import { useState, useEffect } from 'react';

interface ChurchEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  church: string;
  location: string;
  address: string;
  type: 'financial' | 'relationships' | 'theology' | 'parenting' | 'health' | 'social-issues' | 'spiritual-growth' | 'community';
  description: string;
  targetAudience: string;
  cost: 'free' | 'paid';
  costAmount?: number;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  registrationRequired: boolean;
  registrationLink?: string;
  tags: string[];
  featured: boolean;
}

export default function ChurchEvents() {
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<ChurchEvent | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Sample church events data
  useEffect(() => {
    const mockEvents: ChurchEvent[] = [
      {
        id: '1',
        title: 'Biblical Financial Planning & Budgeting',
        date: new Date(2024, 6, 20),
        time: '6:30 PM - 8:30 PM',
        church: 'Grace Community Church',
        location: 'Kingston',
        address: '123 Main Street, Kingston',
        type: 'financial',
        description: 'Learn how to manage your finances according to biblical principles. Practical budgeting techniques, debt management, and financial stewardship teaching.',
        targetAudience: 'Adults & Young Adults',
        cost: 'free',
        contactPerson: 'Deacon John Smith',
        contactEmail: 'finance@gracecommunity.org',
        contactPhone: '(876) 555-0123',
        registrationRequired: true,
        registrationLink: '#register',
        tags: ['Budgeting', 'Stewardship', 'Debt Management'],
        featured: true
      },
      {
        id: '2',
        title: 'Navigating Difficult Conversations in Relationships',
        date: new Date(2024, 6, 25),
        time: '7:00 PM - 9:00 PM',
        church: 'Unity Fellowship',
        location: 'Montego Bay',
        address: '456 Harmony Lane, Montego Bay',
        type: 'relationships',
        description: 'Biblical guidance on handling conflict, communication skills, and building healthy relationships in marriage, family, and friendships.',
        targetAudience: 'Married Couples & Singles',
        cost: 'paid',
        costAmount: 25,
        contactPerson: 'Pastor Sarah Johnson',
        contactEmail: 'relationships@unityfellowship.org',
        contactPhone: '(876) 555-0124',
        registrationRequired: true,
        registrationLink: '#register',
        tags: ['Communication', 'Conflict Resolution', 'Marriage'],
        featured: true
      },
      {
        id: '3',
        title: 'Contemporary Social Issues & Christian Response',
        date: new Date(2024, 7, 5),
        time: '6:00 PM - 8:00 PM',
        church: 'Truth Seekers Church',
        location: 'Spanish Town',
        address: '789 Truth Avenue, Spanish Town',
        type: 'social-issues',
        description: 'Thoughtful discussion on current social topics from a biblical perspective. Learn how to engage culture with truth and love.',
        targetAudience: 'Youth & Adults',
        cost: 'free',
        contactPerson: 'Elder Michael Brown',
        contactEmail: 'outreach@truthseekers.org',
        contactPhone: '(876) 555-0125',
        registrationRequired: false,
        tags: ['Culture', 'Apologetics', 'Engagement'],
        featured: false
      },
      {
        id: '4',
        title: 'Christian Parenting in a Digital Age',
        date: new Date(2024, 7, 12),
        time: '5:30 PM - 7:30 PM',
        church: 'Family Life Center',
        location: 'Portmore',
        address: '321 Family Road, Portmore',
        type: 'parenting',
        description: 'Practical strategies for raising children with strong faith in today\'s technology-driven world. Screen time management, online safety, and spiritual formation.',
        targetAudience: 'Parents & Guardians',
        cost: 'free',
        contactPerson: 'Sister Maria Garcia',
        contactEmail: 'family@familylifecenter.org',
        contactPhone: '(876) 555-0126',
        registrationRequired: true,
        registrationLink: '#register',
        tags: ['Digital Parenting', 'Technology', 'Child Development'],
        featured: true
      },
      {
        id: '5',
        title: 'Mental Health & Spiritual Wellness Workshop',
        date: new Date(2024, 7, 18),
        time: '9:00 AM - 12:00 PM',
        church: 'Healing Waters Church',
        location: 'Ocho Rios',
        address: '654 Wellness Drive, Ocho Rios',
        type: 'health',
        description: 'Understanding the connection between mental health and spiritual life. Coping strategies, support resources, and biblical perspectives on mental wellness.',
        targetAudience: 'All Ages',
        cost: 'paid',
        costAmount: 15,
        contactPerson: 'Counselor David Wilson',
        contactEmail: 'wellness@healingwaters.org',
        contactPhone: '(876) 555-0127',
        registrationRequired: true,
        registrationLink: '#register',
        tags: ['Mental Health', 'Wellness', 'Counseling'],
        featured: false
      },
      {
        id: '6',
        title: 'Theology 101: Understanding Core Christian Beliefs',
        date: new Date(2024, 7, 22),
        time: '6:30 PM - 8:00 PM',
        church: 'Foundation Bible Church',
        location: 'Mandeville',
        address: '987 Doctrine Street, Mandeville',
        type: 'theology',
        description: 'Beginner-friendly exploration of essential Christian doctrines. Trinity, salvation, grace, and the authority of Scripture explained clearly.',
        targetAudience: 'New Believers & Seekers',
        cost: 'free',
        contactPerson: 'Dr. Robert Chen',
        contactEmail: 'theology@foundationbible.org',
        contactPhone: '(876) 555-0128',
        registrationRequired: false,
        tags: ['Doctrine', 'Theology', 'Bible Study'],
        featured: false
      },
      {
        id: '7',
        title: 'Community Outreach & Service Projects Planning',
        date: new Date(2024, 8, 2),
        time: '4:00 PM - 6:00 PM',
        church: 'Servants Heart Ministry',
        location: 'May Pen',
        address: '147 Service Road, May Pen',
        type: 'community',
        description: 'Learn how to organize and participate in effective community service projects. Partnership opportunities with local organizations.',
        targetAudience: 'Church Leaders & Volunteers',
        cost: 'free',
        contactPerson: 'Minister Thomas Reed',
        contactEmail: 'outreach@servantsheart.org',
        contactPhone: '(876) 555-0129',
        registrationRequired: true,
        registrationLink: '#register',
        tags: ['Service', 'Outreach', 'Volunteering'],
        featured: true
      },
      {
        id: '8',
        title: 'Deepening Your Prayer Life',
        date: new Date(2024, 8, 9),
        time: '7:00 PM - 8:30 PM',
        church: 'Prayer Warriors Fellowship',
        location: 'Linstead',
        address: '258 Prayer Circle, Linstead',
        type: 'spiritual-growth',
        description: 'Practical workshop on developing a consistent and meaningful prayer life. Different prayer methods and overcoming common obstacles.',
        targetAudience: 'All Believers',
        cost: 'free',
        contactPerson: 'Prayer Leader Elizabeth White',
        contactEmail: 'prayer@prayerwarriors.org',
        contactPhone: '(876) 555-0130',
        registrationRequired: false,
        tags: ['Prayer', 'Spiritual Growth', 'Devotion'],
        featured: false
      }
    ];
    setEvents(mockEvents);
  }, []);

  const getEventTypeColor = (type: string) => {
    const colors = {
      financial: 'bg-green-50! border-green-200! text-green-700!',
      relationships: 'bg-pink-50! border-pink-200! text-pink-700!',
      theology: 'bg-blue-50! border-blue-200! text-blue-700!',
      parenting: 'bg-purple-50! border-purple-200! text-purple-700!',
      health: 'bg-red-50! border-red-200! text-red-700!',
      'social-issues': 'bg-orange-50! border-orange-200! text-orange-700!',
      'spiritual-growth': 'bg-indigo-50! border-indigo-200! text-indigo-700!',
      community: 'bg-teal-50! border-teal-200! text-teal-700!'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-50! border-gray-200! text-gray-700!';
  };

  const getEventTypeBadge = (type: string) => {
    const colors = {
      financial: 'bg-green-100! text-green-800!',
      relationships: 'bg-pink-100! text-pink-800!',
      theology: 'bg-blue-100! text-blue-800!',
      parenting: 'bg-purple-100! text-purple-800!',
      health: 'bg-red-100! text-red-800!',
      'social-issues': 'bg-orange-100! text-orange-800!',
      'spiritual-growth': 'bg-indigo-100! text-indigo-800!',
      community: 'bg-teal-100! text-teal-800!'
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

  const filteredEvents = events.filter(event => {
    const matchesFilter = filter === 'all' || event.type === filter;
    const matchesSearch = searchTerm === '' || 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.church.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const EventCard = ({ event }: { event: ChurchEvent }) => (
    <div className={`bg-white! rounded-lg! shadow-sm! border! ${event.featured ? 'border-blue-300! ring-1! ring-blue-200!' : 'border-gray-200!'} p-6! hover:shadow-md! transition-all! duration-200!`}>
      {/* Header */}
      <div className="flex! justify-between! items-start! mb-4!">
        <div className="flex! flex-wrap! gap-2!">
          <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getEventTypeBadge(event.type)}`}>
            {event.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
          {event.featured && (
            <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-blue-100! text-blue-800!">
              Featured
            </span>
          )}
          <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${
            event.cost === 'free' ? 'bg-green-100! text-green-800!' : 'bg-yellow-100! text-yellow-800!'
          }`}>
            {event.cost === 'free' ? 'Free' : `$${event.costAmount}`}
          </span>
        </div>
        {event.registrationRequired && (
          <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-purple-100! text-purple-800!">
            Registration Required
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl! font-semibold! text-gray-900! mb-3!">
        {event.title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600! mb-4! line-clamp-3!">
        {event.description}
      </p>

      {/* Details */}
      <div className="space-y-3! mb-4!">
        <div className="flex! items-center! space-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm! text-gray-700!">{formatDate(event.date)} • {event.time}</span>
        </div>
        
        <div className="flex! items-center! space-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-sm! text-gray-700!">{event.church}</span>
        </div>

        <div className="flex! items-center! space-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <span className="text-sm! text-gray-700!">{event.location}</span>
        </div>

        <div className="flex! items-center! space-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-sm! text-gray-700!">{event.targetAudience}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex! flex-wrap! gap-1! mb-4!">
        {event.tags.map(tag => (
          <span key={tag} className="inline-block! px-2! py-1! text-xs! bg-gray-100! text-gray-700! rounded!">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex! gap-x-3!">
        <button
          onClick={() => setSelectedEvent(event)}
          className="flex-1! bg-blue-600! text-white! py-2! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
        >
          View Details
        </button>
        {event.registrationRequired && event.registrationLink && (
          <button className="flex-1! border! border-blue-600! text-blue-600! py-2! px-4! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
            Register
          </button>
        )}
      </div>
    </div>
  );

  const EventListItem = ({ event }: { event: ChurchEvent }) => (
    <div className={`bg-white! rounded-lg! shadow-sm! border! ${event.featured ? 'border-blue-300! ring-1! ring-blue-200!' : 'border-gray-200!'} p-6! hover:shadow-md! transition-all! duration-200!`}>
      <div className="flex! flex-col! lg:flex-row! lg:items-center! justify-between!">
        <div className="flex-1!">
          <div className="flex! items-center! space-x-3! mb-3!">
            <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getEventTypeBadge(event.type)}`}>
              {event.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
            {event.featured && (
              <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-blue-100! text-blue-800!">
                Featured
              </span>
            )}
            <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${
              event.cost === 'free' ? 'bg-green-100! text-green-800!' : 'bg-yellow-100! text-yellow-800!'
            }`}>
              {event.cost === 'free' ? 'Free' : `$${event.costAmount}`}
            </span>
            {event.registrationRequired && (
              <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-purple-100! text-purple-800!">
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

          <div className="flex! flex-wrap! gap-4! text-sm! text-gray-600! mb-3!">
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(event.date)} • {event.time}</span>
            </div>
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{event.church}</span>
            </div>
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>{event.location}</span>
            </div>
          </div>

          <div className="flex! flex-wrap! gap-1!">
            {event.tags.map(tag => (
              <span key={tag} className="inline-block! px-2! py-1! text-xs! bg-gray-100! text-gray-700! rounded!">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex! gap-x-3! mt-4! lg:mt-0! lg:ml-6!">
          <button
            onClick={() => setSelectedEvent(event)}
            className="px-4! py-2! text-blue-600! border! border-blue-600! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
          >
            Details
          </button>
          {event.registrationRequired && event.registrationLink && (
            <button className="px-4! py-2! bg-blue-600! text-white! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
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
            Church Events & Programs
          </h1>
          <p className="text-base! sm:text-lg! text-gray-600!">
            Discover meaningful programs and events from churches across the island
          </p>
        </div>

        {/* Controls Card */}
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mb-4! sm:mb-6! mx-2! sm:mx-0!">
          <div className="flex! flex-col! lg:flex-row! justify-between! items-start! lg:items-center! space-y-4! lg:space-y-0!">
            {/* Search and View Controls */}
            <div className="flex! flex-col! sm:flex-row! space-y-4! sm:space-y-0! sm:gap-x-6! w-full! lg:w-auto!">
              {/* Search */}
              <div className="w-full! sm:w-64!">
                <label htmlFor="search" className="sr-only!">Search events</label>
                <div className="relative!">
                  <div className="absolute! inset-y-0! left-0! pl-3! flex! items-center! pointer-events-none!">
                    <svg className="h-5! w-5! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block! w-full! pl-10! pr-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                  />
                </div>
              </div>

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
            </div>

            {/* Filter */}
            <div className="flex! items-center! gap-x-3! w-full! lg:w-auto!">
              <label htmlFor="event-type-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                Filter by topic:
              </label>
              <select
                id="event-type-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full! lg:w-auto! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
              >
                <option value="all">All Topics</option>
                <option value="financial">Financial</option>
                <option value="relationships">Relationships</option>
                <option value="theology">Theology</option>
                <option value="parenting">Parenting</option>
                <option value="health">Health & Wellness</option>
                <option value="social-issues">Social Issues</option>
                <option value="spiritual-growth">Spiritual Growth</option>
                <option value="community">Community</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid/List */}
        {filteredEvents.length === 0 ? (
          <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-8! text-center! mx-2! sm:mx-0!">
            <svg className="w-12! h-12! text-gray-400! mx-auto! mb-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg! font-medium! text-gray-900! mb-2!">No events found</h3>
            <p className="text-gray-600!">Try adjusting your search or filters to see more events.</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid! grid-cols-1! md:grid-cols-2! xl:grid-cols-3! gap-6! mx-2! sm:mx-0!">
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
          <h3 className="text-lg! font-semibold! text-gray-900! mb-3! sm:mb-4!">Program Topics</h3>
          <div className="flex! flex-wrap! gap-3! sm:gap-4!">
            {Object.entries({
              financial: 'Financial',
              relationships: 'Relationships',
              theology: 'Theology',
              parenting: 'Parenting',
              health: 'Health & Wellness',
              'social-issues': 'Social Issues',
              'spiritual-growth': 'Spiritual Growth',
              community: 'Community'
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
                      {selectedEvent.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                    {selectedEvent.featured && (
                      <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-blue-100! text-blue-800!">
                        Featured Event
                      </span>
                    )}
                    <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${
                      selectedEvent.cost === 'free' ? 'bg-green-100! text-green-800!' : 'bg-yellow-100! text-yellow-800!'
                    }`}>
                      {selectedEvent.cost === 'free' ? 'Free Event' : `Cost: $${selectedEvent.costAmount}`}
                    </span>
                    {selectedEvent.registrationRequired && (
                      <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-purple-100! text-purple-800!">
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
                    <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4!">
                <div className="flex! items-start! gap-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Date & Time</p>
                    <p className="text-sm! text-gray-600!">
                      {formatDate(selectedEvent.date)} • {selectedEvent.time}
                    </p>
                  </div>
                </div>
                
                <div className="flex! items-start! gap-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Host Church</p>
                    <p className="text-sm! text-gray-600!">{selectedEvent.church}</p>
                  </div>
                </div>

                <div className="flex! items-start! gap-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Location</p>
                    <p className="text-sm! text-gray-600!">{selectedEvent.address}, {selectedEvent.location}</p>
                  </div>
                </div>

                <div className="flex! items-start! gap-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Target Audience</p>
                    <p className="text-sm! text-gray-600!">{selectedEvent.targetAudience}</p>
                  </div>
                </div>

                <div className="flex! items-start! gap-x-3!">
                  <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm! font-medium! text-gray-900!">Description</p>
                    <p className="text-sm! text-gray-600!">{selectedEvent.description}</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50! rounded-lg! p-4!">
                  <h4 className="text-sm! font-medium! text-gray-900! mb-3!">Contact Information</h4>
                  <div className="space-y-2!">
                    <div className="flex! items-center! space-x-2!">
                      <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm! text-gray-600!">Contact: {selectedEvent.contactPerson}</span>
                    </div>
                    <div className="flex! items-center! space-x-2!">
                      <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm! text-gray-600!">{selectedEvent.contactEmail}</span>
                    </div>
                    <div className="flex! items-center! space-x-2!">
                      <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round!" strokeLinejoin="round!" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm! text-gray-600!">{selectedEvent.contactPhone}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex! flex-wrap! gap-1!">
                  {selectedEvent.tags.map(tag => (
                    <span key={tag} className="inline-block! px-2! py-1! text-xs! bg-gray-100! text-gray-700! rounded!">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6! flex! flex-col! sm:flex-row! space-y-3! sm:space-y-0! sm:gap-x-3!">
                {selectedEvent.registrationRequired && selectedEvent.registrationLink ? (
                  <>
                    <button className="flex-1! bg-blue-600! text-white! py-3! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                      Register Now
                    </button>
                    <button className="flex-1! border! border-gray-300! text-gray-700! py-3! px-4! rounded-lg! font-medium! hover:bg-gray-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-gray-500! focus:ring-offset-2!">
                      Save Event
                    </button>
                  </>
                ) : (
                  <button className="w-full! bg-blue-600! text-white! py-3! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
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