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
  type: 'chaplaincy-ministries' | 'family-life' | 'personal-ministries' | 'disaster-relief' | 'health-ministries' | 'prayer-ministries' | 'possibility-ministries' | 'ministerial-association' | 'publishing-ministries' | 'laymen-services' | 'ministerial-secretary' | 'spirit-of-prophecy' | 'children-adolescent' | 'mens-ministries' | 'sabbath-school' | 'communications' | 'public-affairs' | 'stewardship-ministries' | 'community-services' | 'campus-ministries' | 'womans-ministries' | 'education' | 'planned-giving' | 'youth-ministries' | 'spiritual-growth' | 'discipleship' | 'bible-knowledge' | 'apologetics-doctrine' | 'leadership-development' | 'fellowship-social' | 'community-outreach' | 'evangelism-mission' | 'health-lifestyle' | 'life-skills' | 'creative-arts' | 'recreation-sports' | 'stewardship-service' | 'identity-purpose' | 'technology-media' | 'adventist-heritage';
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
      'chaplaincy-ministries': 'bg-green-50! border-green-200! text-green-700!',
      'family-life': 'bg-pink-50! border-pink-200! text-pink-700!',
      'personal-ministries': 'bg-blue-50! border-blue-200! text-blue-700!',
      'disaster-relief': 'bg-red-50! border-red-200! text-red-700!',
      'health-ministries': 'bg-red-50! border-red-200! text-red-700!',
      'prayer-ministries': 'bg-indigo-50! border-indigo-200! text-indigo-700!',
      'possibility-ministries': 'bg-yellow-50! border-yellow-200! text-yellow-700!',
      'ministerial-association': 'bg-purple-50! border-purple-200! text-purple-700!',
      'publishing-ministries': 'bg-orange-50! border-orange-200! text-orange-700!',
      'laymen-services': 'bg-teal-50! border-teal-200! text-teal-700!',
      'ministerial-secretary': 'bg-cyan-50! border-cyan-200! text-cyan-700!',
      'spirit-of-prophecy': 'bg-violet-50! border-violet-200! text-violet-700!',
      'children-adolescent': 'bg-pink-50! border-pink-200! text-pink-700!',
      'mens-ministries': 'bg-slate-50! border-slate-200! text-slate-700!',
      'sabbath-school': 'bg-amber-50! border-amber-200! text-amber-700!',
      'communications': 'bg-sky-50! border-sky-200! text-sky-700!',
      'public-affairs': 'bg-rose-50! border-rose-200! text-rose-700!',
      'stewardship-ministries': 'bg-green-50! border-green-200! text-green-700!',
      'community-services': 'bg-teal-50! border-teal-200! text-teal-700!',
      'campus-ministries': 'bg-blue-50! border-blue-200! text-blue-700!',
      'womans-ministries': 'bg-fuchsia-50! border-fuchsia-200! text-fuchsia-700!',
      'education': 'bg-lime-50! border-lime-200! text-lime-700!',
      'planned-giving': 'bg-emerald-50! border-emerald-200! text-emerald-700!',
      'youth-ministries': 'bg-purple-50! border-purple-200! text-purple-700!',
      'spiritual-growth': 'bg-indigo-50! border-indigo-200! text-indigo-700!',
      'discipleship': 'bg-orange-50! border-orange-200! text-orange-700!',
      'bible-knowledge': 'bg-yellow-50! border-yellow-200! text-yellow-700!',
      'apologetics-doctrine': 'bg-red-50! border-red-200! text-red-700!',
      'leadership-development': 'bg-green-50! border-green-200! text-green-700!',
      'fellowship-social': 'bg-pink-50! border-pink-200! text-pink-700!',
      'community-outreach': 'bg-cyan-50! border-cyan-200! text-cyan-700!',
      'evangelism-mission': 'bg-violet-50! border-violet-200! text-violet-700!',
      'health-lifestyle': 'bg-rose-50! border-rose-200! text-rose-700!',
      'life-skills': 'bg-blue-50! border-blue-200! text-blue-700!',
      'creative-arts': 'bg-fuchsia-50! border-fuchsia-200! text-fuchsia-700!',
      'recreation-sports': 'bg-amber-50! border-amber-200! text-amber-700!',
      'stewardship-service': 'bg-emerald-50! border-emerald-200! text-emerald-700!',
      'identity-purpose': 'bg-sky-50! border-sky-200! text-sky-700!',
      'technology-media': 'bg-slate-50! border-slate-200! text-slate-700!',
      'adventist-heritage': 'bg-teal-50! border-teal-200! text-teal-700!'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-50! border-gray-200! text-gray-700!';
  };

  const getEventTypeBadge = (type: string) => {
    const colors = {
      'chaplaincy-ministries': 'bg-green-100! text-green-800!',
      'family-life': 'bg-pink-100! text-pink-800!',
      'personal-ministries': 'bg-blue-100! text-blue-800!',
      'disaster-relief': 'bg-red-100! text-red-800!',
      'health-ministries': 'bg-red-100! text-red-800!',
      'prayer-ministries': 'bg-indigo-100! text-indigo-800!',
      'possibility-ministries': 'bg-yellow-100! text-yellow-800!',
      'ministerial-association': 'bg-purple-100! text-purple-800!',
      'publishing-ministries': 'bg-orange-100! text-orange-800!',
      'laymen-services': 'bg-teal-100! text-teal-800!',
      'ministerial-secretary': 'bg-cyan-100! text-cyan-800!',
      'spirit-of-prophecy': 'bg-violet-100! text-violet-800!',
      'children-adolescent': 'bg-pink-100! text-pink-800!',
      'mens-ministries': 'bg-slate-100! text-slate-800!',
      'sabbath-school': 'bg-amber-100! text-amber-800!',
      'communications': 'bg-sky-100! text-sky-800!',
      'public-affairs': 'bg-rose-100! text-rose-800!',
      'stewardship-ministries': 'bg-green-100! text-green-800!',
      'community-services': 'bg-teal-100! text-teal-800!',
      'campus-ministries': 'bg-blue-100! text-blue-800!',
      'womans-ministries': 'bg-fuchsia-100! text-fuchsia-800!',
      'education': 'bg-lime-100! text-lime-800!',
      'planned-giving': 'bg-emerald-100! text-emerald-800!',
      'youth-ministries': 'bg-purple-100! text-purple-800!',
      'spiritual-growth': 'bg-indigo-100! text-indigo-800!',
      'discipleship': 'bg-orange-100! text-orange-800!',
      'bible-knowledge': 'bg-yellow-100! text-yellow-800!',
      'apologetics-doctrine': 'bg-red-100! text-red-800!',
      'leadership-development': 'bg-green-100! text-green-800!',
      'fellowship-social': 'bg-pink-100! text-pink-800!',
      'community-outreach': 'bg-cyan-100! text-cyan-800!',
      'evangelism-mission': 'bg-violet-100! text-violet-800!',
      'health-lifestyle': 'bg-rose-100! text-rose-800!',
      'life-skills': 'bg-blue-100! text-blue-800!',
      'creative-arts': 'bg-fuchsia-100! text-fuchsia-800!',
      'recreation-sports': 'bg-amber-100! text-amber-800!',
      'stewardship-service': 'bg-emerald-100! text-emerald-800!',
      'identity-purpose': 'bg-sky-100! text-sky-800!',
      'technology-media': 'bg-slate-100! text-slate-800!',
      'adventist-heritage': 'bg-teal-100! text-teal-800!'
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
                  <option value="all">All Topics</option>
                  <option value="chaplaincy-ministries">Adventist Chaplaincy Ministries</option>
                  <option value="family-life">Family Life Ministries</option>
                  <option value="personal-ministries">Personal Ministries</option>
                  <option value="disaster-relief">Adventist Disaster Relief Agency</option>
                  <option value="health-ministries">Health Ministries</option>
                  <option value="prayer-ministries">Prayer Ministries</option>
                  <option value="possibility-ministries">Adventist Possibility Ministries</option>
                  <option value="ministerial-association">Ministerial Association</option>
                  <option value="publishing-ministries">Publishing Ministries</option>
                  <option value="laymen-services">Adventist-laymen's Services & Industries</option>
                  <option value="ministerial-secretary">Ministerial Secretary</option>
                  <option value="spirit-of-prophecy">Spirit of Prophecy</option>
                  <option value="children-adolescent">Children & Adolescent Ministries</option>
                  <option value="mens-ministries">Men's Ministries</option>
                  <option value="sabbath-school">Sabbath School</option>
                  <option value="communications">Communications</option>
                  <option value="public-affairs">Public affairs & Religious Liberty</option>
                  <option value="stewardship-ministries">Stewardship Ministries</option>
                  <option value="community-services">Community Services</option>
                  <option value="campus-ministries">Public Campus Ministries</option>
                  <option value="womans-ministries">Woman's Ministries</option>
                  <option value="education">Education</option>
                  <option value="planned-giving">Planned Giving and Trust Services</option>
                  <option value="youth-ministries">Youth Ministries</option>
                  <option value="spiritual-growth">Spiritual Growth</option>
                  <option value="discipleship">Discipleship</option>
                  <option value="bible-knowledge">Bible Knowledge</option>
                  <option value="apologetics-doctrine">Apologetics & Doctrine</option>
                  <option value="leadership-development">Leadership Development</option>
                  <option value="fellowship-social">Fellowship & Social</option>
                  <option value="community-outreach">Community Outreach</option>
                  <option value="evangelism-mission">Evangelism & Mission</option>
                  <option value="health-lifestyle">Health & Lifestyle</option>
                  <option value="life-skills">Life Skills & Career Development</option>
                  <option value="creative-arts">Creative Arts & Talents</option>
                  <option value="recreation-sports">Recreation & Sports</option>
                  <option value="stewardship-service">Stewardship & Service</option>
                  <option value="identity-purpose">Identity & Purpose</option>
                  <option value="technology-media">Technology & Media Ministry</option>
                  <option value="adventist-heritage">Adventist Heritage & Beliefs</option>
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
          <h3 className="text-lg! font-semibold! text-gray-900! mb-3! sm:mb-4!">Program Topics</h3>
          <div className="flex! flex-wrap! gap-3! sm:gap-4!">
            {Object.entries({
              'chaplaincy-ministries': 'Adventist Chaplaincy Ministries',
              'family-life': 'Family Life Ministries',
              'personal-ministries': 'Personal Ministries',
              'disaster-relief': 'Adventist Disaster Relief Agency',
              'health-ministries': 'Health Ministries',
              'prayer-ministries': 'Prayer Ministries',
              'possibility-ministries': 'Adventist Possibility Ministries',
              'ministerial-association': 'Ministerial Association',
              'publishing-ministries': 'Publishing Ministries',
              'laymen-services': 'Adventist-laymen\'s Services & Industries',
              'ministerial-secretary': 'Ministerial Secretary',
              'spirit-of-prophecy': 'Spirit of Prophecy',
              'children-adolescent': 'Children & Adolescent Ministries',
              'mens-ministries': 'Men\'s Ministries',
              'sabbath-school': 'Sabbath School',
              'communications': 'Communications',
              'public-affairs': 'Public affairs & Religious Liberty',
              'stewardship-ministries': 'Stewardship Ministries',
              'community-services': 'Community Services',
              'campus-ministries': 'Public Campus Ministries',
              'womans-ministries': 'Woman\'s Ministries',
              'education': 'Education',
              'planned-giving': 'Planned Giving and Trust Services',
              'youth-ministries': 'Youth Ministries',
              'spiritual-growth': 'Spiritual Growth',
              'discipleship': 'Discipleship',
              'bible-knowledge': 'Bible Knowledge',
              'apologetics-doctrine': 'Apologetics & Doctrine',
              'leadership-development': 'Leadership Development',
              'fellowship-social': 'Fellowship & Social',
              'community-outreach': 'Community Outreach',
              'evangelism-mission': 'Evangelism & Mission',
              'health-lifestyle': 'Health & Lifestyle',
              'life-skills': 'Life Skills & Career Development',
              'creative-arts': 'Creative Arts & Talents',
              'recreation-sports': 'Recreation & Sports',
              'stewardship-service': 'Stewardship & Service',
              'identity-purpose': 'Identity & Purpose',
              'technology-media': 'Technology & Media Ministry',
              'adventist-heritage': 'Adventist Heritage & Beliefs'
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