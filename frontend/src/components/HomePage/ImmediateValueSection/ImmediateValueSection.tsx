// components/ImmediateValueSection.tsx
'use client';

import { useState, useEffect } from 'react';
import FeaturedEvents from '@/components/HomePage/ImmediateValueSection/FeaturedEvents'



const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="bg-white p-6 w-full">
      
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row sm:px-8! gap-4 items-center justify-center py-12!">
        
        <div className="flex-1 relative">
          
          <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for an event, church, or topic..."
            className="w-[300px] sm:w-[400px] h-10 pl-8! pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-bold tracking-widest! placeholder:tracking-tight"
          />

        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium whitespace-nowrap w-[40%] h-8 tracking-widest"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default function ImmediateValueSection() {
  return (
    <section className="py-12 bg-gray-50 w-full! ">
      
      <div className="container mx-auto! px-4 w-full!">
        {/* Search Bar */}
        <div className="w-full! ">
          <SearchBar />
        </div>


        <div className="w-full! ">
          {/* Featured Events - Takes 2/3 on large screens */}
          
          <div className="w-full!">
            <FeaturedEvents />
          </div>


        </div>



        
      </div>
    </section>
  );
}



