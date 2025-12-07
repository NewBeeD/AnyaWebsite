// app/map/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

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

  // Sample church data with coordinates for Dominica and Barbados
  const churches: Church[] = [
    // Dominica - Northern Region
    {
      id: 1,
      name: "Portsmouth SDA Church",
      pastor: "Pastor Michael Laurent",
      address: "Church Street, Portsmouth, Dominica",
      phone: "+1 (767) 445-1001",
      email: "portsmouthsda@anyadominica.org",
      country: "dominica",
      region: "north",
      coordinates: { lat: 15.5763, lng: -61.4556 },
      services: { sabbath: "Saturday 9:30 AM", prayer: "Wednesday 7:00 PM" },
      type: "church"
    },
    {
      id: 2,
      name: "Calibishie SDA Church",
      pastor: "Pastor David Thomas",
      address: "Main Road, Calibishie, Dominica",
      phone: "+1 (767) 445-1002",
      email: "calibishiesda@anyadominica.org",
      country: "dominica",
      region: "north",
      coordinates: { lat: 15.5928, lng: -61.3419 },
      services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    },
    {
      id: 3,
      name: "Wesley SDA Church",
      pastor: "Pastor James Pascal",
      address: "Wesley Village, Dominica",
      phone: "+1 (767) 445-1003",
      email: "wesleysda@anyadominica.org",
      country: "dominica",
      region: "north",
      coordinates: { lat: 15.5678, lng: -61.3167 },
      services: { sabbath: "Saturday 10:00 AM", prayer: "Thursday 6:30 PM" },
      type: "church"
    },

    // Dominica - Southern Region
    {
      id: 4,
      name: "Grand Bay SDA Church",
      pastor: "Pastor Sarah Matthew",
      address: "Grand Bay Village, Dominica",
      phone: "+1 (767) 446-1001",
      email: "grandbaysda@anyadominica.org",
      country: "dominica",
      region: "south",
      coordinates: { lat: 15.2333, lng: -61.3167 },
      services: { sabbath: "Saturday 8:30 AM", prayer: "Wednesday 6:00 PM" },
      type: "church"
    },
    {
      id: 5,
      name: "Scott's Head SDA Church",
      pastor: "Pastor Mark Green",
      address: "Scott's Head Village, Dominica",
      phone: "+1 (767) 446-1002",
      email: "scottsheadsda@anyadominica.org",
      country: "dominica",
      region: "south",
      coordinates: { lat: 15.2125, lng: -61.2667 },
      services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    },

    // Dominica - Eastern Region
    {
      id: 6,
      name: "Marigot SDA Church",
      pastor: "Pastor Lisa Williams",
      address: "Marigot Village, Dominica",
      phone: "+1 (767) 447-1001",
      email: "marigotsda@anyadominica.org",
      country: "dominica",
      region: "east",
      coordinates: { lat: 15.5333, lng: -61.2833 },
      services: { sabbath: "Saturday 9:30 AM", prayer: "Wednesday 7:00 PM" },
      type: "church"
    },
    {
      id: 7,
      name: "Rosalie SDA Church",
      pastor: "Pastor Daniel Roberts",
      address: "Rosalie Village, Dominica",
      phone: "+1 (767) 447-1002",
      email: "rosaliesda@anyadominica.org",
      country: "dominica",
      region: "east",
      coordinates: { lat: 15.3667, lng: -61.2667 },
      services: { sabbath: "Saturday 8:00 AM", prayer: "Thursday 6:00 PM" },
      type: "church"
    },

    // Dominica - Western Region
    {
      id: 8,
      name: "Roseau Central SDA Church",
      pastor: "Pastor Maria John",
      address: "Victoria Street, Roseau, Dominica",
      phone: "+1 (767) 448-1001",
      email: "roseaucentralsda@anyadominica.org",
      country: "dominica",
      region: "west",
      coordinates: { lat: 15.3017, lng: -61.3875 },
      services: { sabbath: "Saturday 9:00 AM & 11:00 AM", prayer: "Wednesday 7:00 PM" },
      type: "church"
    },
    {
      id: 9,
      name: "Canefield SDA Church",
      pastor: "Pastor Peter Henderson",
      address: "Canefield, Dominica",
      phone: "+1 (767) 448-1002",
      email: "canefieldsda@anyadominica.org",
      country: "dominica",
      region: "west",
      coordinates: { lat: 15.3333, lng: -61.3833 },
      services: { sabbath: "Saturday 9:30 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    },
    {
      id: 10,
      name: "Goodwill SDA Church",
      pastor: "Pastor Rachel Joseph",
      address: "Goodwill, Roseau, Dominica",
      phone: "+1 (767) 448-1003",
      email: "goodwillsda@anyadominica.org",
      country: "dominica",
      region: "west",
      coordinates: { lat: 15.3167, lng: -61.3833 },
      services: { sabbath: "Saturday 10:00 AM", prayer: "Thursday 6:30 PM" },
      type: "church"
    },

    // Dominica - Central Region
    {
      id: 11,
      name: "St. Joseph SDA Church",
      pastor: "Pastor Samuel Charles",
      address: "St. Joseph Village, Dominica",
      phone: "+1 (767) 449-1001",
      email: "stjosephsda@anyadominica.org",
      country: "dominica",
      region: "central",
      coordinates: { lat: 15.4000, lng: -61.4333 },
      services: { sabbath: "Saturday 9:00 AM", prayer: "Wednesday 6:30 PM" },
      type: "church"
    },
    {
      id: 12,
      name: "Morne Prosper SDA Church",
      pastor: "Pastor Angela Frederick",
      address: "Morne Prosper, Dominica",
      phone: "+1 (767) 449-1002",
      email: "morneprosper@anyadominica.org",
      country: "dominica",
      region: "central",
      coordinates: { lat: 15.3500, lng: -61.3667 },
      services: { sabbath: "Saturday 10:00 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    },

    // Barbados - St. Michael Parish
    {
      id: 101,
      name: "King Street SDA Church",
      pastor: "Pastor William Thompson",
      address: "King Street, Bridgetown, Barbados",
      phone: "+1 (246) 426-1001",
      email: "kingstreetsda@anyabarbados.org",
      country: "barbados",
      region: "st_michael",
      coordinates: { lat: 13.0975, lng: -59.6161 },
      services: { sabbath: "Saturday 8:30 AM & 11:00 AM", prayer: "Wednesday 7:30 PM" },
      type: "church"
    },
    {
      id: 102,
      name: "Warrens SDA Church",
      pastor: "Pastor Angela Forde",
      address: "Warrens, St. Michael, Barbados",
      phone: "+1 (246) 426-1002",
      email: "warrenssda@anyabarbados.org",
      country: "barbados",
      region: "st_michael",
      coordinates: { lat: 13.1000, lng: -59.5833 },
      services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    },

    // Barbados - Christ Church Parish
    {
      id: 103,
      name: "Oistins SDA Church",
      pastor: "Pastor Robert Clarke",
      address: "Oistins, Christ Church, Barbados",
      phone: "+1 (246) 428-1001",
      email: "oistinssda@anyabarbados.org",
      country: "barbados",
      region: "christ_church",
      coordinates: { lat: 13.0667, lng: -59.5333 },
      services: { sabbath: "Saturday 8:00 AM", prayer: "Thursday 6:30 PM" },
      type: "church"
    },
    {
      id: 104,
      name: "Silver Sands SDA Church",
      pastor: "Pastor Jennifer Simmons",
      address: "Silver Sands, Christ Church, Barbados",
      phone: "+1 (246) 428-1002",
      email: "silversandssda@anyabarbados.org",
      country: "barbados",
      region: "christ_church",
      coordinates: { lat: 13.0500, lng: -59.5167 },
      services: { sabbath: "Saturday 10:00 AM", prayer: "Wednesday 7:00 PM" },
      type: "church"
    },

    // Barbados - St. James Parish
    {
      id: 105,
      name: "Holetown SDA Church",
      pastor: "Pastor David Worrell",
      address: "Holetown, St. James, Barbados",
      phone: "+1 (246) 432-1001",
      email: "holetownsda@anyabarbados.org",
      country: "barbados",
      region: "st_james",
      coordinates: { lat: 13.1833, lng: -59.6500 },
      services: { sabbath: "Saturday 9:30 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    },

    // Barbados - St. George Parish
    {
      id: 106,
      name: "Glebe SDA Church",
      pastor: "Pastor Sandra White",
      address: "Glebe, St. George, Barbados",
      phone: "+1 (246) 437-1001",
      email: "glebesda@anyabarbados.org",
      country: "barbados",
      region: "st_george",
      coordinates: { lat: 13.1500, lng: -59.5667 },
      services: { sabbath: "Saturday 8:30 AM", prayer: "Wednesday 7:30 PM" },
      type: "church"
    },

    // Barbados - St. Thomas Parish
    {
      id: 107,
      name: "Welchman Hall SDA Church",
      pastor: "Pastor Mark Alleyne",
      address: "Welchman Hall, St. Thomas, Barbados",
      phone: "+1 (246) 438-1001",
      email: "welchmanhallsda@anyabarbados.org",
      country: "barbados",
      region: "st_thomas",
      coordinates: { lat: 13.1667, lng: -59.5833 },
      services: { sabbath: "Saturday 9:00 AM", prayer: "Thursday 7:00 PM" },
      type: "church"
    },

    // Barbados - St. Peter Parish
    {
      id: 108,
      name: "Speightstown SDA Church",
      pastor: "Pastor Charles Bynoe",
      address: "Speightstown, St. Peter, Barbados",
      phone: "+1 (246) 439-1001",
      email: "speightstownsda@anyabarbados.org",
      country: "barbados",
      region: "st_peter",
      coordinates: { lat: 13.2500, lng: -59.6500 },
      services: { sabbath: "Saturday 10:00 AM", prayer: "Tuesday 6:30 PM" },
      type: "church"
    },

    // Barbados - St. Andrew Parish
    {
      id: 109,
      name: "Belleplaine SDA Church",
      pastor: "Pastor Elizabeth Holder",
      address: "Belleplaine, St. Andrew, Barbados",
      phone: "+1 (246) 433-1001",
      email: "belleplainesda@anyabarbados.org",
      country: "barbados",
      region: "st_andrew",
      coordinates: { lat: 13.2000, lng: -59.5667 },
      services: { sabbath: "Saturday 8:00 AM", prayer: "Wednesday 6:00 PM" },
      type: "church"
    },

    // Barbados - St. Joseph Parish
    {
      id: 110,
      name: "Bathsheba SDA Church",
      pastor: "Pastor George Moore",
      address: "Bathsheba, St. Joseph, Barbados",
      phone: "+1 (246) 433-1002",
      email: "bathshebasda@anyabarbados.org",
      country: "barbados",
      region: "st_joseph",
      coordinates: { lat: 13.2167, lng: -59.5333 },
      services: { sabbath: "Saturday 9:30 AM", prayer: "Thursday 7:00 PM" },
      type: "church"
    },

    // Barbados - St. John Parish
    {
      id: 111,
      name: "Four Roads SDA Church",
      pastor: "Pastor Patricia King",
      address: "Four Roads, St. John, Barbados",
      phone: "+1 (246) 433-1003",
      email: "fourroadssda@anyabarbados.org",
      country: "barbados",
      region: "st_john",
      coordinates: { lat: 13.1667, lng: -59.5000 },
      services: { sabbath: "Saturday 10:00 AM", prayer: "Wednesday 7:30 PM" },
      type: "church"
    },

    // Barbados - St. Philip Parish
    {
      id: 112,
      name: "Six Roads SDA Church",
      pastor: "Pastor Andrew Griffith",
      address: "Six Roads, St. Philip, Barbados",
      phone: "+1 (246) 423-1001",
      email: "sixroadssda@anyabarbados.org",
      country: "barbados",
      region: "st_philip",
      coordinates: { lat: 13.1167, lng: -59.4667 },
      services: { sabbath: "Saturday 9:00 AM", prayer: "Tuesday 7:00 PM" },
      type: "church"
    },

    // Barbados - St. Lucy Parish
    {
      id: 113,
      name: "Checker Hall SDA Church",
      pastor: "Pastor Sandra Brathwaite",
      address: "Checker Hall, St. Lucy, Barbados",
      phone: "+1 (246) 439-1002",
      email: "checkerhallsda@anyabarbados.org",
      country: "barbados",
      region: "st_lucy",
      coordinates: { lat: 13.2833, lng: -59.6333 },
      services: { sabbath: "Saturday 8:30 AM", prayer: "Wednesday 7:00 PM" },
      type: "church"
    }
  ];

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

                {/* Interactive Map Visualization */}
                <div className="relative bg-gradient-to-br from-blue-100 to-green-100 h-96 p-8!">
                  {/* Island Outline */}
                  <div className={`absolute inset-8 rounded-2xl border-4 shadow-lg ${
                    selectedCountry === 'dominica' 
                      ? 'bg-green-200 border-green-300' 
                      : 'bg-yellow-200 border-yellow-300'
                  }`}>
                    
                    {/* Map Points */}
                    {filteredChurches.map(church => {
                      const position = getPositionOnMap(church.coordinates.lat, church.coordinates.lng);
                      return (
                        <button
                          key={church.id}
                          onClick={() => setSelectedChurch(church)}
                          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 z-10 ${
                            selectedChurch?.id === church.id ? 'scale-125' : 'hover:scale-110'
                          }`}
                          style={{
                            left: position.left,
                            top: position.top
                          }}
                        >
                          <div 
                            className="w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                            style={{ backgroundColor: getRegionColor(church.region) }}
                          >
                            {selectedChurch?.id === church.id && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                        </button>
                      );
                    })}

                    {/* User Location Marker */}
                    {userLocation && (
                      <div
                        className="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse transform -translate-x-1/2 -translate-y-1/2 z-20"
                        style={getPositionOnMap(userLocation.lat, userLocation.lng)}
                      ></div>
                    )}
                  </div>

                  {/* Country Indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3! shadow-lg">
                    <div className="flex items-center">
                      <div className="text-2xl mr-2!">
                        {selectedCountry === 'dominica' ? '🇩🇲' : '🇧🇧'}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{getCountryName()}</div>
                        <div className="text-xs text-gray-600">{filteredChurches.length} churches shown</div>
                      </div>
                    </div>
                  </div>

                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4! shadow-lg">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2!">
                      {selectedCountry === 'dominica' ? 'Regions' : 'Parishes'}
                    </h4>
                    <div className="space-y-1! text-xs max-h-32 overflow-y-auto">
                      {getRegions()
                        .filter(r => r.id !== 'all')
                        .map(region => (
                          <div key={region.id} className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: getRegionColor(region.id) }}
                            ></div>
                            <span className="text-gray-700">{region.name}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

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