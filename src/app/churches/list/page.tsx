'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { churchData, getDominicaChurches, getBarbadosChurches } from '@/data/churchData';

export default function ChurchesPage() {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const countries = [
    { id: 'all', name: 'All Countries' },
    { id: 'dominica', name: 'Dominica' },
    { id: 'barbados', name: 'Barbados' }
  ];

  const dominicaRegions = [
    { id: 'all', name: 'All Regions', country: 'dominica' },
    { id: 'north', name: 'Northern Region', country: 'dominica' },
    { id: 'south', name: 'Southern Region', country: 'dominica' },
    { id: 'east', name: 'Eastern Region', country: 'dominica' },
    { id: 'west', name: 'Western Region', country: 'dominica' },
    { id: 'central', name: 'Central Region', country: 'dominica' }
  ];

  const barbadosRegions = [
    { id: 'all', name: 'All Parishes', country: 'barbados' },
    { id: 'st_michael', name: 'St. Michael', country: 'barbados' },
    { id: 'christ_church', name: 'Christ Church', country: 'barbados' },
    { id: 'st_james', name: 'St. James', country: 'barbados' },
    { id: 'st_george', name: 'St. George', country: 'barbados' },
    { id: 'st_thomas', name: 'St. Thomas', country: 'barbados' },
    { id: 'st_peter', name: 'St. Peter', country: 'barbados' },
    { id: 'st_andrew', name: 'St. Andrew', country: 'barbados' },
    { id: 'st_joseph', name: 'St. Joseph', country: 'barbados' },
    { id: 'st_john', name: 'St. John', country: 'barbados' },
    { id: 'st_philip', name: 'St. Philip', country: 'barbados' },
    { id: 'st_lucy', name: 'St. Lucy', country: 'barbados' }
  ];

  const getRegions = () => {
    if (selectedCountry === 'dominica') return dominicaRegions;
    if (selectedCountry === 'barbados') return barbadosRegions;
    return [{ id: 'all', name: 'All Regions', country: 'all' }];
  };

  const regions = getRegions();

  // Use centralized church data
  const churches = churchData;

  // Calculate stats from actual data
  const stats = useMemo(() => {
    const dominicaChurches = getDominicaChurches();
    const barbadosChurches = getBarbadosChurches();
    
    return {
      total: churches.length,
      dominica: {
        total: dominicaChurches.length,
        north: dominicaChurches.filter(c => c.region === 'north').length,
        south: dominicaChurches.filter(c => c.region === 'south').length,
        east: dominicaChurches.filter(c => c.region === 'east').length,
        west: dominicaChurches.filter(c => c.region === 'west').length,
        central: dominicaChurches.filter(c => c.region === 'central').length,
      },
      barbados: {
        total: barbadosChurches.length,
        st_michael: barbadosChurches.filter(c => c.region === 'st_michael').length,
        christ_church: barbadosChurches.filter(c => c.region === 'christ_church').length,
        st_james: barbadosChurches.filter(c => c.region === 'st_james').length,
        st_george: barbadosChurches.filter(c => c.region === 'st_george').length,
        st_thomas: barbadosChurches.filter(c => c.region === 'st_thomas').length,
        st_peter: barbadosChurches.filter(c => c.region === 'st_peter').length,
        st_andrew: barbadosChurches.filter(c => c.region === 'st_andrew').length,
        st_joseph: barbadosChurches.filter(c => c.region === 'st_joseph').length,
        st_john: barbadosChurches.filter(c => c.region === 'st_john').length,
        st_philip: barbadosChurches.filter(c => c.region === 'st_philip').length,
        st_lucy: barbadosChurches.filter(c => c.region === 'st_lucy').length,
      }
    };
  }, [churches]);

  // Filter churches based on selections
  const filteredChurches = useMemo(() => {
    return churches.filter(church => {
      const matchesCountry = selectedCountry === 'all' || church.country === selectedCountry;
      const matchesRegion = selectedRegion === 'all' || church.region === selectedRegion;
      const matchesSearch = 
        church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        church.pastor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        church.address.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCountry && matchesRegion && matchesSearch;
    });
  }, [churches, selectedCountry, selectedRegion, searchTerm]);

  const getRegionName = (regionId: string, country: string) => {
    if (country === 'dominica') {
      const region = dominicaRegions.find(r => r.id === regionId);
      return region?.name || regionId;
    } else {
      const region = barbadosRegions.find(r => r.id === regionId);
      return region?.name || regionId;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
              East Caribbean Conference • {stats.total} Churches United
            </div>
            <h1 className="text-5xl font-bold mb-6!">Our Churches</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
              Discover Seventh-day Adventist churches across Dominica and Barbados where you can worship, 
              fellowship, and grow in faith with our vibrant communities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4! text-center">
            <div className="bg-blue-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Churches</div>
            </div>
            <div className="bg-green-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-green-600">{stats.dominica.total}</div>
              <div className="text-sm text-gray-600">Dominica</div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-purple-600">{stats.barbados.total}</div>
              <div className="text-sm text-gray-600">Barbados</div>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-indigo-600">2</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6!">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6!">
              {/* Search Input */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2!">
                  Search Churches
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name, pastor, or location..."
                    className="w-full pl-10! pr-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Country Filter */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2!">
                  Filter by Country
                </label>
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    setSelectedRegion('all');
                  }}
                  className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  {countries.map(country => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2!">
                  Filter by Region/Parish
                </label>
                <select
                  id="region"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  disabled={selectedCountry === 'all'}
                >
                  {regions.map(region => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            <div className="flex flex-wrap gap-2! mt-4!">
              {selectedCountry !== 'all' && (
                <span className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Country: {countries.find(c => c.id === selectedCountry)?.name}
                  <button onClick={() => { setSelectedCountry('all'); setSelectedRegion('all'); }} className="ml-1! hover:text-blue-900">×</button>
                </span>
              )}
              {selectedRegion !== 'all' && (
                <span className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Region: {regions.find(r => r.id === selectedRegion)?.name}
                  <button onClick={() => setSelectedRegion('all')} className="ml-1! hover:text-purple-900">×</button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Search: &quot;{searchTerm}&quot;
                  <button onClick={() => setSearchTerm('')} className="ml-1! hover:text-green-900">×</button>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Churches Grid */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">
              {selectedCountry === 'all' ? 'All Churches' : 
               selectedRegion !== 'all' ? `${getRegionName(selectedRegion, selectedCountry)} Churches` :
               `${countries.find(c => c.id === selectedCountry)?.name} Churches`}
            </h2>
            <p className="text-lg text-gray-600">
              Showing {filteredChurches.length} of {churches.length} churches
            </p>
          </div>

          {filteredChurches.length === 0 ? (
            <div className="text-center py-12!">
              <div className="text-6xl mb-4!">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2!">No churches found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8!">
              {filteredChurches.map(church => (
                <div key={church.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Church Header */}
                  <div className={`p-6! text-white ${
                    church.country === 'dominica' 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}>
                    <div className="flex items-center gap-2! mb-2!">
                      <span className="text-xs bg-white/20 px-2! py-1! rounded">
                        {church.country === 'dominica' ? '🇩🇲 Dominica' : '🇧🇧 Barbados'}
                      </span>
                      {church.type === 'office' && (
                        <span className="text-xs bg-yellow-500/80 px-2! py-1! rounded">Office</span>
                      )}
                    </div>
                    <h3 className="font-bold text-lg mb-2!">{church.name}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <svg className="w-4 h-4 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {getRegionName(church.region, church.country)}
                    </div>
                  </div>

                  {/* Church Details */}
                  <div className="p-6!">
                    {/* Pastor Info */}
                    <div className="flex items-center mb-4!">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3! ${
                        church.country === 'dominica' ? 'bg-green-500' : 'bg-blue-500'
                      }`}>
                        {church.pastor.split(' ').slice(-1)[0]?.charAt(0) || 'P'}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{church.pastor}</div>
                        <div className="text-sm text-gray-600">{church.type === 'office' ? 'Administration' : 'Pastor'}</div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3! mb-4!">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-3! text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {church.address}
                      </div>
                      <a href={`tel:${church.phone}`} className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
                        <svg className="w-4 h-4 mr-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {church.phone}
                      </a>
                      <a href={`mailto:${church.email}`} className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors truncate">
                        <svg className="w-4 h-4 mr-3! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {church.email}
                      </a>
                    </div>

                    {/* Service Times */}
                    <div className="mb-4!">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2!">Service Times</h4>
                      <div className="space-y-1! text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Sabbath:</span>
                          <span className="font-medium">{church.services.sabbath}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prayer Meeting:</span>
                          <span className="font-medium">{church.services.prayer}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-x-2! mt-6!">
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${church.coordinates.lat},${church.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white text-center py-2! px-4! rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Get Directions
                      </a>
                      <Link
                        href="/churches/map"
                        className="flex-1 bg-gray-100 text-gray-700 text-center py-2! px-4! rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        View on Map
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16! bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto! px-4! max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4!">Can&apos;t Find Your Church?</h2>
          <p className="text-xl text-blue-100 mb-8!">
            If your church is not listed or you have updated information, please contact us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 font-semibold text-lg px-8! py-4! rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
