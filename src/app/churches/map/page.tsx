// app/map/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { churchData } from '@/data/churchData';

// Dynamically import the Leaflet map component to avoid SSR issues
const LeafletMap = dynamic(
  () => import('@/components/ChurchMap/LeafletMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading interactive map...</p>
        </div>
      </div>
    )
  }
);

// Define interfaces for TypeScript
interface Church {
  id: number;
  name: string;
  pastor: string;
  address: string;
  phone: string;
  email: string;
  country: string;
  region: string;
  coordinates: { lat: number; lng: number };
  services: { sabbath: string; prayer: string };
  type: string;
}

interface UserLocation {
  lat: number;
  lng: number;
}

interface Region {
  id: string;
  name: string;
  color: string;
  count: number;
  country: string;
}

export default function InteractiveMapPage() {
  const [selectedChurch, setSelectedChurch] = useState<Church | null>(null);
  const [selectedCountry, setSelectedCountry] = useState('dominica');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  // Import church data from centralized data file
  const churches = churchData;

  const dominicaRegions: Region[] = [
    { id: 'all', name: 'All Regions', color: 'blue', count: churches.filter(c => c.country === 'dominica').length, country: 'dominica' },
    { id: 'north', name: 'Northern Region', color: 'green', count: churches.filter(c => c.country === 'dominica' && c.region === 'north').length, country: 'dominica' },
    { id: 'south', name: 'Southern Region', color: 'purple', count: churches.filter(c => c.country === 'dominica' && c.region === 'south').length, country: 'dominica' },
    { id: 'east', name: 'Eastern Region', color: 'orange', count: churches.filter(c => c.country === 'dominica' && c.region === 'east').length, country: 'dominica' },
    { id: 'west', name: 'Western Region', color: 'red', count: churches.filter(c => c.country === 'dominica' && c.region === 'west').length, country: 'dominica' },
    { id: 'central', name: 'Central Region', color: 'indigo', count: churches.filter(c => c.country === 'dominica' && c.region === 'central').length, country: 'dominica' }
  ];

  const barbadosRegions: Region[] = [
    { id: 'all', name: 'All Parishes', color: 'blue', count: churches.filter(c => c.country === 'barbados').length, country: 'barbados' },
    { id: 'st_michael', name: 'St. Michael', color: 'teal', count: churches.filter(c => c.country === 'barbados' && c.region === 'st_michael').length, country: 'barbados' },
    { id: 'christ_church', name: 'Christ Church', color: 'emerald', count: churches.filter(c => c.country === 'barbados' && c.region === 'christ_church').length, country: 'barbados' },
    { id: 'st_james', name: 'St. James', color: 'amber', count: churches.filter(c => c.country === 'barbados' && c.region === 'st_james').length, country: 'barbados' },
    { id: 'st_george', name: 'St. George', color: 'rose', count: churches.filter(c => c.country === 'barbados' && c.region === 'st_george').length, country: 'barbados' },
    { id: 'st_thomas', name: 'St. Thomas', color: 'violet', count: churches.filter(c => c.country === 'barbados' && c.region === 'st_thomas').length, country: 'barbados' },
    { id: 'st_peter', name: 'St. Peter', color: 'pink', count: churches.filter(c => c.country === 'barbados' && c.region === 'st_peter').length, country: 'barbados' },
    { id: 'st_andrew', name: 'St. Andrew', color: 'lime', count: churches.filter(c => c.country === 'barbados' && c.region === 'st_andrew').length, country: 'barbados' },
    { id: 'st_joseph', name: 'St. Joseph', color: 'cyan', count: churches.filter(c => c.country === 'barbados' && c.region === 'st_joseph').length, country: 'barbados' },
    { id: 'st_john', name: 'St. John', color: 'fuchsia', count: churches.filter(c => c.country === 'barbados' && c.region === 'st_john').length, country: 'barbados' },
    { id: 'st_philip', name: 'St. Philip', color: 'sky', count: churches.filter(c => c.country === 'barbados' && c.region === 'st_philip').length, country: 'barbados' },
    { id: 'st_lucy', name: 'St. Lucy', color: 'indigo', count: churches.filter(c => c.country === 'barbados' && c.region === 'st_lucy').length, country: 'barbados' }
  ];

  const getRegions = () => {
    return selectedCountry === 'dominica' ? dominicaRegions : barbadosRegions;
  };

  const filteredChurches = churches.filter(church => {
    const matchesCountry = church.country === selectedCountry;
    const matchesRegion = selectedRegion === 'all' || church.region === selectedRegion;
    return matchesCountry && matchesRegion;
  });

  const findNearestChurch = () => {
    if (!userLocation) return;

    // Only search within selected country
    const countryChurches = churches.filter(church => church.country === selectedCountry);
    
    let nearestChurch: Church | null = null;
    let shortestDistance = Infinity;

    countryChurches.forEach(church => {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        church.coordinates.lat,
        church.coordinates.lng
      );
      
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestChurch = church;
      }
    });

    if (nearestChurch) {
      setSelectedChurch(nearestChurch);
    }
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setIsLoadingLocation(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        setIsLoadingLocation(false);
        alert('Unable to retrieve your location. Please ensure location services are enabled.');
      }
    );
  };

  const getDirectionsUrl = (church: Church) => {
    const destination = `${church.coordinates.lat},${church.coordinates.lng}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=driving`;
  };

  // Get coordinate bounds for each country
  const getCountryBounds = () => {
    if (selectedCountry === 'dominica') {
      return { latMin: 15.2, latMax: 15.6, lngMin: -61.5, lngMax: -61.2 };
    } else {
      return { latMin: 13.0, latMax: 13.3, lngMin: -59.7, lngMax: -59.4 };
    }
  };

  const bounds = getCountryBounds();

  const getPositionOnMap = (lat: number, lng: number) => {
    const latPercent = ((lat - bounds.latMin) / (bounds.latMax - bounds.latMin)) * 100;
    const lngPercent = ((lng - bounds.lngMin) / (bounds.lngMax - bounds.lngMin)) * 100;
    return {
      left: `${lngPercent}%`,
      top: `${100 - latPercent}%` // Invert because north is up
    };
  };

  const getRegionColor = (regionId: string) => {
    const region = getRegions().find(r => r.id === regionId);
    if (!region) return 'blue';
    
    // Convert Tailwind color names to actual colors
    const colorMap: Record<string, string> = {
      'blue': '#3b82f6',
      'green': '#10b981',
      'purple': '#8b5cf6',
      'orange': '#f97316',
      'red': '#ef4444',
      'indigo': '#6366f1',
      'teal': '#14b8a6',
      'emerald': '#10b981',
      'amber': '#f59e0b',
      'rose': '#f43f5e',
      'violet': '#8b5cf6',
      'pink': '#ec4899',
      'lime': '#84cc16',
      'cyan': '#06b6d4',
      'fuchsia': '#d946ef',
      'sky': '#0ea5e9'
    };
    
    return colorMap[region.color] || colorMap['blue'];
  };

  const getCountryName = () => {
    return selectedCountry === 'dominica' ? 'Dominica' : 'Barbados';
  };

  const getRegionName = (regionId: string) => {
    const region = getRegions().find(r => r.id === regionId);
    return region?.name || regionId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
              ANYA • Interactive Church Locator
            </div>
            <h1 className="text-5xl font-bold mb-6!">Church Map</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
              Find the nearest Seventh-day Adventist church across Dominica and Barbados. 
              Use our interactive map to locate worship services near you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8! bg-white">
        <div className="container mx-auto px-4! max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8!">
            
            {/* Sidebar - Church List & Filters */}
            <div className="lg:col-span-1 space-y-6!">
              
              {/* Country Selector */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6!">
                <h3 className="font-bold text-gray-900 mb-4!">Select Country</h3>
                <div className="grid grid-cols-2 gap-3!">
                  <button
                    onClick={() => {
                      setSelectedCountry('dominica');
                      setSelectedRegion('all');
                      setSelectedChurch(null);
                    }}
                    className={`p-4! rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center ${
                      selectedCountry === 'dominica'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-25'
                    }`}
                  >
                    <div className="text-2xl mb-2!">🇩🇲</div>
                    <div className="font-semibold">Dominica</div>
                    <div className="text-sm text-gray-600 mt-1!">
                      {churches.filter(c => c.country === 'dominica').length} churches
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCountry('barbados');
                      setSelectedRegion('all');
                      setSelectedChurch(null);
                    }}
                    className={`p-4! rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center ${
                      selectedCountry === 'barbados'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-gray-50 hover:border-purple-300 hover:bg-purple-25'
                    }`}
                  >
                    <div className="text-2xl mb-2!">🇧🇧</div>
                    <div className="font-semibold">Barbados</div>
                    <div className="text-sm text-gray-600 mt-1!">
                      {churches.filter(c => c.country === 'barbados').length} churches
                    </div>
                  </button>
                </div>
              </div>

              {/* Location Finder */}
              <div className="bg-blue-50 rounded-2xl p-6! border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4!">📍 Find Churches Near Me</h3>
                <button
                  onClick={getUserLocation}
                  disabled={isLoadingLocation}
                  className="w-full bg-blue-600 text-white py-3! rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                >
                  {isLoadingLocation ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1! mr-3! h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Detecting Location...
                    </div>
                  ) : (
                    'Use My Current Location'
                  )}
                </button>
                {userLocation && (
                  <button
                    onClick={findNearestChurch}
                    className="w-full bg-green-600 text-white py-2! rounded-lg hover:bg-green-700 transition-colors mt-3! font-semibold"
                  >
                    Find Nearest Church
                  </button>
                )}
              </div>

              {/* Region Filter */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6!">
                <h3 className="font-bold text-gray-900 mb-4!">
                  Filter by {selectedCountry === 'dominica' ? 'Region' : 'Parish'}
                </h3>
                <div className="space-y-2! max-h-60 overflow-y-auto">
                  {getRegions().map(region => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`w-full text-left px-4! py-3! rounded-lg transition-all duration-200 ${
                        selectedRegion === region.id
                          ? `bg-${region.color}-100 text-${region.color}-700 border-2 border-${region.color}-300`
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{region.name}</span>
                        <span className={`bg-${region.color}-500 text-white px-2! py-1! rounded-full text-xs font-bold`}>
                          {region.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Church List */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6!">
                <h3 className="font-bold text-gray-900 mb-4!">
                  Churches in {getCountryName()}
                  <span className="text-gray-500 text-sm font-normal ml-2!">({filteredChurches.length})</span>
                </h3>
                <div className="space-y-3! max-h-96 overflow-y-auto">
                  {filteredChurches.map(church => (
                    <button
                      key={church.id}
                      onClick={() => setSelectedChurch(church)}
                      className={`w-full text-left p-4! rounded-lg border-2 transition-all duration-200 ${
                        selectedChurch?.id === church.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-25'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2!">
                        <div className="font-semibold text-gray-900 text-sm flex-1">{church.name}</div>
                        <span className="text-xs">
                          {church.country === 'dominica' ? '🇩🇲' : '🇧🇧'}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mb-2!">{church.address}</div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs px-2! py-1! rounded-full text-gray-700 bg-gray-100">
                          {getRegionName(church.region)}
                        </span>
                        <span className="text-blue-600 text-xs font-medium">View →</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Map Area */}
            <div className="lg:col-span-3">
              
              {/* Map Container */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-800 p-4! text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">
                        {getCountryName()} Church Map
                      </h3>
                      <p className="text-sm text-gray-300">
                        Click on a church marker for details
                      </p>
                    </div>
                    <div className="flex items-center space-x-4! text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2!"></div>
                        <span>Church Locations</span>
                      </div>
                      {userLocation && (
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2! animate-pulse"></div>
                          <span>Your Location</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Interactive Leaflet Map */}
                <LeafletMap
                  churches={churches}
                  selectedChurch={selectedChurch}
                  onChurchSelect={setSelectedChurch}
                  selectedCountry={selectedCountry}
                  userLocation={userLocation}
                />

                {/* Selected Church Details */}
                {selectedChurch && (
                  <div className="border-t border-gray-200 p-6!">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
                      <div>
                        <div className="flex items-center justify-between mb-2!">
                          <h3 className="text-xl font-bold text-gray-900">{selectedChurch.name}</h3>
                          <span className="text-lg">{selectedChurch.country === 'dominica' ? '🇩🇲' : '🇧🇧'}</span>
                        </div>
                        <div className="space-y-2! text-sm text-gray-600">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-3! text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {selectedChurch.pastor}
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-3! text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {selectedChurch.address}
                          </div>
                          <a href={`tel:${selectedChurch.phone}`} className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                            <svg className="w-4 h-4 mr-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {selectedChurch.phone}
                          </a>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2!">Service Times</h4>
                        <div className="space-y-1! text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>Sabbath Service:</span>
                            <span className="font-medium">{selectedChurch.services.sabbath}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Prayer Meeting:</span>
                            <span className="font-medium">{selectedChurch.services.prayer}</span>
                          </div>
                        </div>
                        <div className="flex gap-x-3! mt-4!">
                          <a
                            href={getDirectionsUrl(selectedChurch)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-600 text-white text-center py-2! px-4! rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                          >
                            Get Directions
                          </a>
                          <a
                            href={`tel:${selectedChurch.phone}`}
                            className="flex-1 bg-gray-600 text-white text-center py-2! px-4! rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                          >
                            Call Church
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4! mt-6!">
                <Link
                  href="/churches/list"
                  className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2!">📋</div>
                  <h4 className="font-semibold text-gray-900 mb-2!">Full Church List</h4>
                  <p className="text-sm text-gray-600">Browse complete directory of churches</p>
                </Link>
                <Link
                  href="/about/beliefs"
                  className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2!">⛪</div>
                  <h4 className="font-semibold text-gray-900 mb-2!">First Time Visiting?</h4>
                  <p className="text-sm text-gray-600">What to expect at our services</p>
                </Link>
                <Link
                  href="/contact"
                  className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-2xl mb-2!">💬</div>
                  <h4 className="font-semibold text-gray-900 mb-2!">Need Help?</h4>
                  <p className="text-sm text-gray-600">Contact our team for assistance</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Information */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Churches Across Both Islands</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              ANYA coordinates Adventist churches in Dominica and Barbados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8!">
            {/* Dominica Regions */}
            <div className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6!">
                <h3 className="text-xl font-bold text-gray-900">Dominica Regions</h3>
                <div className="text-2xl">🇩🇲</div>
              </div>
              <div className="grid grid-cols-2 gap-4!">
                {dominicaRegions
                  .filter(r => r.id !== 'all')
                  .map(region => (
                    <button
                      key={region.id}
                      onClick={() => {
                        setSelectedCountry('dominica');
                        setSelectedRegion(region.id);
                        setSelectedChurch(null);
                      }}
                      className="bg-blue-50 rounded-xl p-4! text-center hover:bg-blue-100 transition-colors"
                    >
                      <div className="font-semibold text-blue-700 text-sm mb-1!">{region.name}</div>
                      <div className="text-lg font-bold text-gray-900">{region.count}</div>
                      <div className="text-xs text-gray-600">churches</div>
                    </button>
                  ))}
              </div>
            </div>

            {/* Barbados Parishes */}
            <div className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6!">
                <h3 className="text-xl font-bold text-gray-900">Barbados Parishes</h3>
                <div className="text-2xl">🇧🇧</div>
              </div>
              <div className="grid grid-cols-2 gap-4!">
                {barbadosRegions
                  .filter(r => r.id !== 'all')
                  .slice(0, 6) // Show first 6 parishes
                  .map(region => (
                    <button
                      key={region.id}
                      onClick={() => {
                        setSelectedCountry('barbados');
                        setSelectedRegion(region.id);
                        setSelectedChurch(null);
                      }}
                      className="bg-purple-50 rounded-xl p-4! text-center hover:bg-purple-100 transition-colors"
                    >
                      <div className="font-semibold text-purple-700 text-sm mb-1!">{region.name}</div>
                      <div className="text-lg font-bold text-gray-900">{region.count}</div>
                      <div className="text-xs text-gray-600">churches</div>
                    </button>
                  ))}
              </div>
              <div className="mt-4! text-center">
                <button
                  onClick={() => setSelectedCountry('barbados')}
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  View all 11 parishes →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}