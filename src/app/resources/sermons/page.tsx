// app/sermons/page.tsx
'use client';

import { useState, useEffect } from 'react';
import useSermonApi from '@/hooks/Resources/useSermonsApi'

import Link from 'next/link';

interface Sermon {
  id: string;
  title: string;
  preacher: string;
  church: string;
  date: Date;
  scripture: string;
  series: string;
  seriesPart?: number;
  description: string;
  content: string;
  readingTime: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  downloadCount: number;
  language: 'english' | 'spanish' | 'french' | 'creole';
  format: 'article' | 'transcript' | 'outline' | 'study-guide';
  slug: string;
}

export default function Sermons() {


  const { events: sermons, loading, error } = useSermonApi()
  
  
  // const [sermons, setSermons] = useState<Sermon[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [formatFilter, setFormatFilter] = useState<string>('all');
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState<string>('');



  const getLanguageColor = (language: string) => {
    const colors = {
      english: 'bg-blue-50! border-blue-200! text-blue-700!',
      spanish: 'bg-green-50! border-green-200! text-green-700!',
      french: 'bg-purple-50! border-purple-200! text-purple-700!',
      creole: 'bg-orange-50! border-orange-200! text-orange-700!'
    };
    return colors[language as keyof typeof colors] || 'bg-gray-50! border-gray-200! text-gray-700!';
  };

  const getLanguageBadge = (language: string) => {
    const colors = {
      english: 'bg-blue-100! text-blue-800!',
      spanish: 'bg-green-100! text-green-800!',
      french: 'bg-purple-100! text-purple-800!',
      creole: 'bg-orange-100! text-orange-800!'
    };
    return colors[language as keyof typeof colors] || 'bg-gray-100! text-gray-800!';
  };

  const getFormatBadge = (format: string) => {
    const colors = {
      article: 'bg-indigo-100! text-indigo-800!',
      transcript: 'bg-teal-100! text-teal-800!',
      outline: 'bg-amber-100! text-amber-800!',
      'study-guide': 'bg-rose-100! text-rose-800!'
    };
    return colors[format as keyof typeof colors] || 'bg-gray-100! text-gray-800!';
  };

  const getFormatName = (format: string) => {
    const names = {
      article: 'Article',
      transcript: 'Transcript',
      outline: 'Outline',
      'study-guide': 'Study Guide'
    };
    return names[format as keyof typeof names] || format;
  };

  const getLanguageName = (language: string) => {
    const names = {
      english: 'English',
      spanish: 'Español',
      french: 'Français',
      creole: 'Kreyòl'
    };
    return names[language as keyof typeof names] || language;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredSermons = sermons.filter(sermon => {
    const matchesLanguage = filter === 'all' || sermon.language === filter;

    const matchesFormat = formatFilter === 'all' || sermon.format === formatFilter;

    const matchesSearch = searchTerm === '' || 
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.church.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.scripture.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesLanguage && matchesFormat && matchesSearch;
  });

  const SermonCard = ({ sermon }: { sermon: Sermon }) => (
    <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! hover:shadow-md! transition-all! duration-200!">
      {/* Header */}
      <div className="flex! justify-between! items-start! mb-4!">
        <div className="flex! flex-wrap! gap-2!">
          <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getLanguageBadge(sermon.language)}`}>
            {getLanguageName(sermon.language)}
          </span>
          <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${getFormatBadge(sermon.format)}`}>
            {getFormatName(sermon.format)}
          </span>
          {sermon.seriesPart && (
            <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
              Part {sermon.seriesPart}
            </span>
          )}
        </div>
        <div className="text-sm! text-gray-500!">
          {sermon.readingTime}
        </div>
      </div>

      {/* Title and Series */}
      <h3 className="text-xl! font-semibold! text-gray-900! mb-2!">
        {sermon.title}
      </h3>
      
      {sermon.series && (
        <p className="text-sm! text-blue-600! font-medium! mb-3!">
          {sermon.series} {sermon.seriesPart && `• Part ${sermon.seriesPart}`}
        </p>
      )}

      {/* Scripture */}
      <div className="flex! items-center! gap-x-2! mb-3!">
        <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="text-sm! text-gray-700! font-medium!">{sermon.scripture}</span>
      </div>
      
      {/* Description */}
      <p className="text-gray-600! mb-4! line-clamp-3!">
        {sermon.description}
      </p>

      {/* Details */}
      <div className="space-y-2! mb-4!">
        <div className="flex! items-center! gap-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-sm! text-gray-700!">{sermon.preacher}</span>
        </div>
        
        <div className="flex! items-center! gap-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-sm! text-gray-700!">{sermon.church}</span>
        </div>

        <div className="flex! items-center! gap-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm! text-gray-700!">{formatDate(sermon.date)}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex! items-center! gap-x-4! text-sm! text-gray-500! mb-4!">
        <div className="flex! items-center! gap-x-1!">
          <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>{sermon.viewCount}</span>
        </div>
        <div className="flex! items-center! gap-x-1!">
          <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{sermon.likeCount}</span>
        </div>
        <div className="flex! items-center! gap-x-1!">
          <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>{sermon.downloadCount}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex! flex-wrap! gap-1! mb-4!">
        {sermon.tags.map(tag => (
          <span key={tag} className="inline-block! px-2! py-1! text-xs! bg-gray-100! text-gray-700! rounded!">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex! gap-x-3!">
        
        {/* <button
          onClick={() => setSelectedSermon(sermon)}
          className="flex-1! bg-blue-600! text-white! py-2! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
        >
          Read Sermon
        </button> */}


        <Link
          href={`/resources/sermons/${sermon.slug}`}
          className="flex-1 bg-blue-600 text-white py-2! px-4! rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center inline-block"
        >
          Read Sermon
        </Link>

        <button className="px-4! py-2! border! border-blue-600! text-blue-600! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
          Download
        </button>
      </div>
    </div>
  );

  const SermonListItem = ({ sermon }: { sermon: Sermon }) => (
    <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! hover:shadow-md! transition-all! duration-200!">
      <div className="flex! flex-col! lg:flex-row! lg:items-center! justify-between!">
        <div className="flex-1!">
          <div className="flex! items-center! gap-x-3! mb-3!">
            <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getLanguageBadge(sermon.language)}`}>
              {getLanguageName(sermon.language)}
            </span>
            <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${getFormatBadge(sermon.format)}`}>
              {getFormatName(sermon.format)}
            </span>
            {sermon.seriesPart && (
              <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
                Part {sermon.seriesPart}
              </span>
            )}
            <span className="text-sm! text-gray-500!">{sermon.readingTime}</span>
          </div>
          
          <h3 className="text-xl! font-semibold! text-gray-900! mb-2!">
            {sermon.title}
          </h3>
          
          {sermon.series && (
            <p className="text-sm! text-blue-600! font-medium! mb-2!">
              {sermon.series} {sermon.seriesPart && `• Part ${sermon.seriesPart}`}
            </p>
          )}

          <p className="text-gray-600! mb-3!">
            {sermon.description}
          </p>

          <div className="flex! flex-wrap! gap-4! text-sm! text-gray-600! mb-3!">
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>{sermon.scripture}</span>
            </div>
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{sermon.preacher}</span>
            </div>
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{sermon.church}</span>
            </div>
          </div>

          <div className="flex! flex-wrap! gap-2!">
            {sermon.tags.map(tag => (
              <span key={tag} className="inline-block! px-2! py-1! text-xs! bg-gray-100! text-gray-700! rounded!">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex! items-center! gap-x-4! mt-4! lg:mt-0! lg:ml-6!">
          {/* Stats */}
          <div className="flex! items-center! gap-x-4! text-sm! text-gray-500!">
            <div className="flex! items-center! gap-x-1!">
              <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{sermon.viewCount}</span>
            </div>
            <div className="flex! items-center! gap-x-1!">
              <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{sermon.likeCount}</span>
            </div>
          </div>

          <div className="flex! gap-x-2!">
            <button
              onClick={() => setSelectedSermon(sermon)}
              className="px-4! py-2! text-blue-600! border! border-blue-600! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
            >
              Read
            </button>
            <button className="px-4! py-2! bg-blue-600! text-white! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
              Download
            </button>
          </div>
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
            Sermons Library
          </h1>
          <p className="text-base! sm:text-lg! text-gray-600!">
            Written sermons, transcripts, and study materials from pastors across our 90 member churches
          </p>
        </div>

        {/* Controls Card */}
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mb-4! sm:mb-6! mx-2! sm:mx-0!">
          <div className="flex! flex-col! lg:flex-row! justify-between! items-start! lg:items-center! space-y-4! lg:space-y-0!">
            {/* Search and View Controls */}
            <div className="flex! flex-col! sm:flex-row! space-y-4! sm:space-y-0! sm:gap-x-6! w-full! lg:w-auto!">
              {/* Search */}
              <div className="w-full! sm:w-64!">
                <label htmlFor="search" className="sr-only!">Search sermons</label>
                <div className="relative!">
                  <div className="absolute! inset-y-0! left-0! pl-3! flex! items-center! pointer-events-none!">
                    <svg className="h-5! w-5! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search sermons..."
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

            {/* Filters */}
            <div className="flex! flex-col! sm:flex-row! space-y-3! sm:space-y-0! sm:gap-x-4! w-full! lg:w-auto!">
              <div className="flex! items-center! gap-x-2!">
                <label htmlFor="language-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                  Language:
                </label>
                <select
                  id="language-filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full! sm:w-auto! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="all">All Languages</option>
                  <option value="english">English</option>
                  <option value="spanish">Español</option>
                  <option value="french">Français</option>
                  <option value="creole">Kreyòl</option>
                </select>
              </div>

              <div className="flex! items-center! gap-x-2!">
                <label htmlFor="format-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                  Format:
                </label>
                <select
                  id="format-filter"
                  value={formatFilter}
                  onChange={(e) => setFormatFilter(e.target.value)}
                  className="w-full! sm:w-auto! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="all">All Formats</option>
                  <option value="article">Articles</option>
                  <option value="transcript">Transcripts</option>
                  <option value="outline">Outlines</option>
                  <option value="study-guide">Study Guides</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Sermons Grid/List */}
        {filteredSermons.length === 0 ? (
          <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-8! text-center! mx-2! sm:mx-0!">
            <svg className="w-12! h-12! text-gray-400! mx-auto! mb-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg! font-medium! text-gray-900! mb-2!">No sermons found</h3>
            <p className="text-gray-600!">Try adjusting your search or filters to see more sermons.</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid! grid-cols-1! md:grid-cols-2! xl:grid-cols-3! gap-6! mx-2! sm:mx-0!">
            {filteredSermons.map(sermon => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
        ) : (
          <div className="space-y-4! mx-2! sm:mx-0!">
            {filteredSermons.map(sermon => (
              <SermonListItem key={sermon.id} sermon={sermon} />
            ))}
          </div>
        )}

        {/* Language & Format Legend */}
        <div className="mt-6! bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mx-2! sm:mx-0!">
          <div className="grid! md:grid-cols-2! gap-6!">
            <div>
              <h3 className="text-lg! font-semibold! text-gray-900! mb-3! sm:mb-4!">Available Languages</h3>
              <div className="flex! flex-wrap! gap-3! sm:gap-4!">
                {Object.entries({
                  english: 'English',
                  spanish: 'Español',
                  french: 'Français',
                  creole: 'Kreyòl'
                }).map(([language, label]) => (
                  <div key={language} className="flex! items-center! gap-x-2!">
                    <div className={`w-3! h-3! sm:w-4! sm:h-4! rounded! ${getLanguageBadge(language)}`} />
                    <span className="text-xs! sm:text-sm! text-gray-700!">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg! font-semibold! text-gray-900! mb-3! sm:mb-4!">Sermon Formats</h3>
              <div className="flex! flex-wrap! gap-3! sm:gap-4!">
                {Object.entries({
                  article: 'Articles',
                  transcript: 'Transcripts',
                  outline: 'Outlines',
                  'study-guide': 'Study Guides'
                }).map(([format, label]) => (
                  <div key={format} className="flex! items-center! gap-x-2!">
                    <div className={`w-3! h-3! sm:w-4! sm:h-4! rounded! ${getFormatBadge(format)}`} />
                    <span className="text-xs! sm:text-sm! text-gray-700!">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sermon Detail Modal */}
      {selectedSermon && (
        <div className="fixed! inset-0! bg-black! bg-opacity-50! flex! items-center! justify-center! p-3! sm:p-4! z-50! animate-in! fade-in! duration-200!">
          <div className="bg-white! rounded-lg! max-w-4xl! w-full! max-h-[90vh]! overflow-y-auto! animate-in! slide-in-from-bottom-2! duration-300!">
            <div className="p-4! sm:p-6!">
              <div className="flex! justify-between! items-start! mb-4!">
                <div className="pr-4!">
                  <h2 className="text-2xl! font-bold! text-gray-900! mb-2!">
                    {selectedSermon.title}
                  </h2>
                  <div className="flex! flex-wrap! gap-2!">
                    <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getLanguageBadge(selectedSermon.language)}`}>
                      {getLanguageName(selectedSermon.language)}
                    </span>
                    <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${getFormatBadge(selectedSermon.format)}`}>
                      {getFormatName(selectedSermon.format)}
                    </span>
                    {selectedSermon.seriesPart && (
                      <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
                        Part {selectedSermon.seriesPart}
                      </span>
                    )}
                    <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-blue-100! text-blue-800!">
                      {selectedSermon.readingTime}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSermon(null)}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Scripture</p>
                      <p className="text-lg! font-semibold! text-gray-600!">{selectedSermon.scripture}</p>
                    </div>
                  </div>
                  
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Preacher</p>
                      <p className="text-sm! text-gray-600!">{selectedSermon.preacher}</p>
                    </div>
                  </div>

                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Church</p>
                      <p className="text-sm! text-gray-600!">{selectedSermon.church}</p>
                    </div>
                  </div>

                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Date</p>
                      <p className="text-sm! text-gray-600!">{formatDate(selectedSermon.date)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  {selectedSermon.series && (
                    <div className="flex! items-start! space-x-3! mb-4!">
                      <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <div>
                        <p className="text-sm! font-medium! text-gray-900!">Series</p>
                        <p className="text-sm! text-gray-600!">
                          {selectedSermon.series} 
                          {selectedSermon.seriesPart && ` (Part ${selectedSermon.seriesPart})`}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="bg-gray-50! rounded-lg! p-4!">
                    <h4 className="text-sm! font-medium! text-gray-900! mb-3!">Sermon Stats</h4>
                    <div className="grid! grid-cols-3! gap-4!">
                      <div className="text-center!">
                        <div className="text-2xl! font-bold! text-blue-600!">{selectedSermon.viewCount}</div>
                        <div className="text-xs! text-gray-600!">Views</div>
                      </div>
                      <div className="text-center!">
                        <div className="text-2xl! font-bold! text-red-600!">{selectedSermon.likeCount}</div>
                        <div className="text-xs! text-gray-600!">Likes</div>
                      </div>
                      <div className="text-center!">
                        <div className="text-2xl! font-bold! text-green-600!">{selectedSermon.downloadCount}</div>
                        <div className="text-xs! text-gray-600!">Downloads</div>
                      </div>
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
                  <p className="text-sm! text-gray-600!">{selectedSermon.description}</p>
                </div>
              </div>

              {/* Sermon Content Preview */}
              <div className="bg-gray-50! rounded-lg! p-4! mb-6!">
                <h4 className="text-sm! font-medium! text-gray-900! mb-3!">Sermon Preview</h4>
                <div className="prose! prose-sm! max-w-none!">
                  <p className="text-gray-600! line-clamp-4!">
                    {selectedSermon.content}
                  </p>
                </div>
                <p className="text-xs! text-gray-500! mt-2!">Preview of the first few paragraphs...</p>
              </div>

              {/* Tags */}
              <div className="flex! flex-wrap! gap-2! mb-6!">
                {selectedSermon.tags.map(tag => (
                  <span key={tag} className="inline-block! px-3! py-1! text-sm! bg-gray-100! text-gray-700! rounded-full!">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex! flex-col! sm:flex-row! space-y-3! sm:space-y-0! sm:space-x-3!">
                <button className="flex-1! bg-blue-600! text-white! py-3! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                  Read Full Sermon
                </button>
                <button className="flex-1! border! border-blue-600! text-blue-600! py-3! px-4! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                  Download PDF
                </button>
                <button className="flex-1! border! border-gray-300! text-gray-700! py-3! px-4! rounded-lg! font-medium! hover:bg-gray-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-gray-500! focus:ring-offset-2!">
                  Share Sermon
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}