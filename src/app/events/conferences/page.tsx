// app/conferences/page.tsx
'use client';

import { useState, useEffect } from 'react';
import UseConfernceApi from '@/hooks/Events/UseConferenceApi'
import Link from 'next/link';

interface Conference {
  id: string;
  title: string;
  date: Date;
  endDate: Date;
  location: string;
  venue: string;
  hostChurch: string;
  type: 'chaplaincy-ministries' | 'family-life' | 'personal-ministries' | 'disaster-relief' | 'health-ministries' | 'prayer-ministries' | 'possibility-ministries' | 'ministerial-association' | 'publishing-ministries' | 'laymen-services' | 'ministerial-secretary' | 'spirit-of-prophecy' | 'children-adolescent' | 'mens-ministries' | 'sabbath-school' | 'communications' | 'public-affairs' | 'stewardship-ministries' | 'community-services' | 'campus-ministries' | 'womans-ministries' | 'education' | 'planned-giving' | 'youth-ministries' | 'spiritual-growth' | 'discipleship' | 'bible-knowledge' | 'apologetics-doctrine' | 'leadership-development' | 'fellowship-social' | 'community-outreach' | 'evangelism-mission' | 'health-lifestyle' | 'life-skills' | 'creative-arts' | 'recreation-sports' | 'stewardship-service' | 'identity-purpose' | 'technology-media' | 'adventist-heritage';
  description: string;
  speakers: string[];
  registrationFee: number;
  registrationLink: string;
  capacity: number;
  registeredCount: number;
  image?: string;
  tags: string[];
  country: string;
}

export default function UpcomingConferences() {
  const {events: conferences, loading, error} = UseConfernceApi()
  
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [countryFilter, setCountryFilter] = useState<string>('all');
  const [selectedConference, setSelectedConference] = useState<Conference | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'fee'>('date');

  // Extract unique countries from conferences
  const countries = Array.from(new Set(conferences.map(conf => conf.country))).sort();

  const getConferenceTypeColor = (type: string) => {
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

  const getConferenceTypeBadge = (type: string) => {
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

  const formatDateRange = (startDate: Date, endDate: Date) => {
    const start = startDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
    const end = endDate.toLocaleDateString('en-US', {
      month: startDate.getMonth() === endDate.getMonth() ? undefined : 'short',
      day: 'numeric',
      year: 'numeric'
    });
    return `${start} - ${end}`;
  };

  const getRegistrationStatus = (conference: Conference) => {
    const percentage = (conference.registeredCount / conference.capacity) * 100;
    if (percentage >= 90) return { text: 'Almost Full', color: 'bg-red-100! text-red-800!' };
    if (percentage >= 75) return { text: 'Filling Fast', color: 'bg-orange-100! text-orange-800!' };
    return { text: 'Available', color: 'bg-green-100! text-green-800!' };
  };

  const filteredAndSortedConferences = conferences
    .filter(conference => {
      const matchesType = typeFilter === 'all' || conference.type === typeFilter;
      const matchesCountry = countryFilter === 'all' || conference.country === countryFilter;
      return matchesType && matchesCountry;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return a.date.getTime() - b.date.getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'fee':
          return a.registrationFee - b.registrationFee;
        default:
          return 0;
      }
    });

  const ConferenceCard = ({ conference }: { conference: Conference }) => {
    const status = getRegistrationStatus(conference);
    const percentage = (conference.registeredCount / conference.capacity) * 100;
    
    return (
      <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! hover:shadow-md! transition-all! duration-200!">
        {/* Header */}
        <div className="flex! justify-between! items-start! mb-4!">
          <div>
            <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getConferenceTypeBadge(conference.type)}`}>
              {conference.type.charAt(0).toUpperCase() + conference.type.slice(1)}
            </span>
            <span className="ml-2! inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
              {conference.country}
            </span>
          </div>
          <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${status.color}`}>
            {status.text}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl! font-semibold! text-gray-900! mb-3! line-clamp-2!">
          {conference.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600! mb-4! line-clamp-3!">
          {conference.description}
        </p>

        {/* Details */}
        <div className="space-y-3! mb-4!">
          <div className="flex! items-center! space-x-2!">
            <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm! text-gray-700!">{formatDateRange(conference.date, conference.endDate)}</span>
          </div>
          
          <div className="flex! items-center! space-x-2!">
            <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className="text-sm! text-gray-700!">{conference.venue}, {conference.location}</span>
          </div>

          <div className="flex! items-center! space-x-2!">
            <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm! text-gray-700!">{conference.speakers.slice(0, 2).join(', ')} {conference.speakers.length > 2 && `+${conference.speakers.length - 2} more`}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4!">
          <div className="flex! justify-between! text-xs! text-gray-600! mb-1!">
            <span>Registration: {conference.registeredCount}/{conference.capacity}</span>
            <span>{Math.round(percentage)}%</span>
          </div>
          <div className="w-full! bg-gray-200! rounded-full! h-2!">
            <div 
              className={`h-2! rounded-full! ${
                percentage >= 90 ? 'bg-red-600!' : 
                percentage >= 75 ? 'bg-orange-500!' : 'bg-green-600!'
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex! justify-between! items-center!">
          <div className="text-lg! font-bold! text-gray-900!">
            ${conference.registrationFee}
            <span className="text-sm! font-normal! text-gray-600!"> / person</span>
          </div>
          <div className="flex! space-x-2!">
            <button
              onClick={() => setSelectedConference(conference)}
              className="px-4! py-2! text-sm! font-medium! text-blue-600! hover:text-blue-700! transition-colors! duration-200!"
            >
              Details
            </button>


            <Link
            href={conference.registrationLink?? '#'}
            target={conference.registrationLink == null? '_self': '_blank'}
            rel="noopener noreferrer">

              <button className="px-4! py-2! text-sm! font-medium! bg-blue-600! text-white! rounded-lg! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                Register
              </button>


            </Link>



          </div>
        </div>
      </div>
    );
  };

  const ConferenceListItem = ({ conference }: { conference: Conference }) => {
    const status = getRegistrationStatus(conference);
    
    return (
      <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! hover:shadow-md! transition-all! duration-200!">
        <div className="flex! flex-col! lg:flex-row! lg:items-center! justify-between!">
          <div className="flex-1!">
            <div className="flex! items-center! space-x-3! mb-3!">
              <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getConferenceTypeBadge(conference.type)}`}>
                {conference.type.charAt(0).toUpperCase() + conference.type.slice(1)}
              </span>
              <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
                {conference.country}
              </span>
              <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${status.color}`}>
                {status.text}
              </span>
              <span className="text-lg! font-bold! text-gray-900!">
                ${conference.registrationFee}
              </span>
            </div>
            
            <h3 className="text-xl! font-semibold! text-gray-900! mb-2!">
              {conference.title}
            </h3>
            
            <p className="text-gray-600! mb-3!">
              {conference.description}
            </p>

            <div className="flex! flex-wrap! gap-4! text-sm! text-gray-600!">
              <div className="flex! items-center! space-x-1!">
                <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDateRange(conference.date, conference.endDate)}</span>
              </div>
              <div className="flex! items-center! space-x-1!">
                <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{conference.venue}, {conference.location}</span>
              </div>
              <div className="flex! items-center! space-x-1!">
                <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{conference.registeredCount}/{conference.capacity} registered</span>
              </div>
            </div>
          </div>

          <div className="flex! space-x-3! mt-4! lg:mt-0! lg:ml-6!">
            <button
              onClick={() => setSelectedConference(conference)}
              className="px-4! py-2! text-blue-600! border! border-blue-600! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
            >
              Details
            </button>

            <button className="px-4! py-2! bg-blue-600! text-white! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen! bg-gray-50! py-4! sm:py-8!">
      <div className="max-w-7xl! mx-auto! px-3! sm:px-6! lg:px-8!">
        
        {/* Header Section */}
        <div className="mb-6! sm:mb-8! px-2!">
          <h1 className="text-2xl! sm:text-3xl! font-bold! text-gray-900! mb-2!">
            Upcoming Conferences
          </h1>
          <p className="text-base! sm:text-lg! text-gray-600!">
            Professional development and spiritual growth conferences for church leaders and members
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

              {/* Sort By */}
              <div className="flex! items-center! gap-x-2!">
                <span className="text-sm! font-medium! text-gray-700!">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="date">Date</option>
                  <option value="title">Title</option>
                  <option value="fee">Registration Fee</option>
                </select>
              </div>
            </div>

            {/* Filters */}
            <div className="flex! flex-col! sm:flex-row! gap-4! w-full! lg:w-auto!">
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

              {/* Type Filter */}
              <div className="flex! items-center! gap-x-3! w-full! sm:w-auto!">
                <label htmlFor="conference-type-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                  Type:
                </label>
                <select
                  id="conference-type-filter"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full! sm:w-auto! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
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
            </div>
          </div>
        </div>

        {/* Conferences Grid/List */}
        {filteredAndSortedConferences.length === 0 && !loading ? (
          <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-8! text-center! mx-2! sm:mx-0!">
            <svg className="w-12! h-12! text-gray-400! mx-auto! mb-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg! font-medium! text-gray-900! mb-2!">No conferences found</h3>
            <p className="text-gray-600!">Try adjusting your filters to see more conferences.</p>
          </div>
        ) : loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading conferences...</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid! grid-cols-1! md:grid-cols-2! xl:grid-cols-3! gap-6! mx-2! sm:mx-0!">
            {filteredAndSortedConferences.map(conference => (
              <ConferenceCard key={conference.id} conference={conference} />
            ))}
          </div>
        ) : (
          <div className="space-y-4! mx-2! sm:mx-0!">
            {filteredAndSortedConferences.map(conference => (
              <ConferenceListItem key={conference.id} conference={conference} />
            ))}
          </div>
        )}

        {/* Conference Type Legend */}
        <div className="mt-6! bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mx-2! sm:mx-0!">
          <h3 className="text-lg! font-semibold! text-gray-900! mb-3! sm:mb-4!">Conference Topics</h3>
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
                <div className={`w-3! h-3! sm:w-4! sm:h-4! rounded! ${getConferenceTypeBadge(type)}`} />
                <span className="text-xs! sm:text-sm! text-gray-700!">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conference Detail Modal */}
      {selectedConference && (
        <div className="fixed! inset-0! bg-black! bg-opacity-50! flex! items-center! justify-center! p-3! sm:p-4! z-50! animate-in! fade-in! duration-200!">
          <div className="bg-white! rounded-lg! max-w-4xl! w-full! max-h-[90vh]! overflow-y-auto! animate-in! slide-in-from-bottom-2! duration-300!">
            <div className="p-4! sm:p-6!">
              <div className="flex! justify-between! items-start! mb-4!">
                <div className="pr-4!">
                  <h2 className="text-2xl! font-bold! text-gray-900! mb-2!">
                    {selectedConference.title}
                  </h2>
                  <div className="flex! flex-wrap! gap-2!">
                    <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getConferenceTypeBadge(selectedConference.type)}`}>
                      {selectedConference.type.charAt(0).toUpperCase() + selectedConference.type.slice(1)}
                    </span>
                    <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
                      {selectedConference.country}
                    </span>
                    {selectedConference.tags.map(tag => (
                      <span key={tag} className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedConference(null)}
                  className="text-gray-400! hover:text-gray-600! transition-colors! duration-200! p-1! rounded-lg! hover:bg-gray-100! flex-shrink-0!"
                >
                  <svg className="w-6! h-6!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid! md:grid-cols-2! gap-6! mb-6!">
                <div className="space-y-4!">
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Date & Time</p>
                      <p className="text-sm! text-gray-600!">
                        {formatDateRange(selectedConference.date, selectedConference.endDate)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Location</p>
                      <p className="text-sm! text-gray-600!">{selectedConference.venue}</p>
                      <p className="text-sm! text-gray-500!">{selectedConference.location}</p>
                      <p className="text-sm! text-gray-500!">{selectedConference.country}</p>
                    </div>
                  </div>

                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Host Church</p>
                      <p className="text-sm! text-gray-600!">{selectedConference.hostChurch}</p>
                    </div>
                  </div>

                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Registration Fee</p>
                      <p className="text-lg! font-bold! text-gray-900!">${selectedConference.registrationFee}</p>
                      <p className="text-sm! text-gray-500!">per person</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900! mb-2!">Featured Speakers</p>
                      <ul className="space-y-2!">
                        {selectedConference.speakers.map((speaker, index) => (
                          <li key={index} className="text-sm! text-gray-600! flex! items-center! space-x-2!">
                            <div className="w-2! h-2! bg-blue-500! rounded-full!"></div>
                            <span>{speaker}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex! items-start! space-x-3! mb-6!">
                <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm! font-medium! text-gray-900!">Description</p>
                  <p className="text-sm! text-gray-600!">{selectedConference.description}</p>
                </div>
              </div>

              {/* Registration Progress */}
              <div className="bg-gray-50! rounded-lg! p-4! mb-6!">
                <div className="flex! justify-between! items-center! mb-2!">
                  <span className="text-sm! font-medium! text-gray-900!">Registration Progress</span>
                  <span className="text-sm! text-gray-600!">
                    {selectedConference.registeredCount} / {selectedConference.capacity} registered
                    ({Math.round((selectedConference.registeredCount / selectedConference.capacity) * 100)}%)
                  </span>
                </div>
                <div className="w-full! bg-gray-200! rounded-full! h-2! mb-2!">
                  <div 
                    className={`h-2! rounded-full! ${
                      (selectedConference.registeredCount / selectedConference.capacity) >= 0.9 ? 'bg-red-600!' : 
                      (selectedConference.registeredCount / selectedConference.capacity) >= 0.75 ? 'bg-orange-500!' : 'bg-green-600!'
                    }`}
                    style={{ width: `${(selectedConference.registeredCount / selectedConference.capacity) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs! text-gray-500!">
                  {getRegistrationStatus(selectedConference).text}
                </p>
              </div>
              
              <div className="flex! flex-col! sm:flex-row! space-y-3! sm:space-y-0! sm:space-x-3!">
                <button className="flex-1! bg-blue-600! text-white! py-3! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                  Register Now - ${selectedConference.registrationFee}
                </button>
                <button className="flex-1! border! border-gray-300! text-gray-700! py-3! px-4! rounded-lg! font-medium! hover:bg-gray-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-gray-500! focus:ring-offset-2!">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}