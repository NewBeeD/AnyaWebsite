// app/churches/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ChurchesPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'north', name: 'Northern Region' },
    { id: 'south', name: 'Southern Region' },
    { id: 'east', name: 'Eastern Region' },
    { id: 'west', name: 'Western Region' },
    { id: 'central', name: 'Central Region' }
  ];

  const churches = [
    // Northern Region (15 churches)
    {
      id: 1,
      name: "Portsmouth Seventh-day Adventist Church",
      pastor: "Pastor Michael Laurent",
      address: "Church Street, Portsmouth, Dominica",
      phone: "+1 (767) 445-1001",
      email: "portsmouthsda@anyadominica.org",
      region: "north",
      services: {
        sabbath: "Saturday 9:30 AM",
        prayer: "Wednesday 7:00 PM",
        youth: "Friday 6:00 PM"
      },
      features: ["Youth Choir", "Pathfinders", "Community Service", "Bible Studies"]
    },
    {
      id: 2,
      name: "Calibishie SDA Church",
      pastor: "Pastor David Thomas",
      address: "Main Road, Calibishie, Dominica",
      phone: "+1 (767) 445-1002",
      email: "calibishiesda@anyadominica.org",
      region: "north",
      services: {
        sabbath: "Saturday 9:00 AM",
        prayer: "Tuesday 7:00 PM",
        youth: "Saturday 4:00 PM"
      },
      features: ["Children's Ministry", "Health Ministry", "Prayer Groups"]
    },
    {
      id: 3,
      name: "Wesley SDA Church",
      pastor: "Pastor James Pascal",
      address: "Wesley Village, Dominica",
      phone: "+1 (767) 445-1003",
      email: "wesleysda@anyadominica.org",
      region: "north",
      services: {
        sabbath: "Saturday 10:00 AM",
        prayer: "Thursday 6:30 PM",
        youth: "Friday 7:00 PM"
      },
      features: ["Music Ministry", "Community Outreach", "Youth Programs"]
    },

    // Southern Region (15 churches)
    {
      id: 4,
      name: "Grand Bay SDA Church",
      pastor: "Pastor Sarah Matthew",
      address: "Grand Bay Village, Dominica",
      phone: "+1 (767) 446-1001",
      email: "grandbaysda@anyadominica.org",
      region: "south",
      services: {
        sabbath: "Saturday 8:30 AM",
        prayer: "Wednesday 6:00 PM",
        youth: "Friday 6:30 PM"
      },
      features: ["Pathfinders", "Adventurers", "Health Expo", "Food Bank"]
    },
    {
      id: 5,
      name: "Scott's Head SDA Church",
      pastor: "Pastor Mark Green",
      address: "Scott's Head Village, Dominica",
      phone: "+1 (767) 446-1002",
      email: "scottsheadsda@anyadominica.org",
      region: "south",
      services: {
        sabbath: "Saturday 9:00 AM",
        prayer: "Tuesday 7:00 PM",
        youth: "Sabbath Afternoon"
      },
      features: ["Baptismal Preparation", "Bible Workers", "Community Service"]
    },
    {
      id: 6,
      name: "Soufriere SDA Church",
      pastor: "Pastor Naomi Thomas",
      address: "Soufriere Village, Dominica",
      phone: "+1 (767) 446-1003",
      email: "soufrieresda@anyadominica.org",
      region: "south",
      services: {
        sabbath: "Saturday 10:00 AM",
        prayer: "Monday 6:30 PM",
        youth: "Friday 7:00 PM"
      },
      features: ["Youth Empowerment", "Music Ministry", "Prayer Warriors"]
    },

    // Eastern Region (20 churches)
    {
      id: 7,
      name: "Marigot SDA Church",
      pastor: "Pastor Lisa Williams",
      address: "Marigot Village, Dominica",
      phone: "+1 (767) 447-1001",
      email: "marigotsda@anyadominica.org",
      region: "east",
      services: {
        sabbath: "Saturday 9:30 AM",
        prayer: "Wednesday 7:00 PM",
        youth: "Friday 6:00 PM"
      },
      features: ["Children's Sabbath School", "Health Ministry", "Community Outreach"]
    },
    {
      id: 8,
      name: "Rosalie SDA Church",
      pastor: "Pastor Daniel Roberts",
      address: "Rosalie Village, Dominica",
      phone: "+1 (767) 447-1002",
      email: "rosaliesda@anyadominica.org",
      region: "east",
      services: {
        sabbath: "Saturday 8:00 AM",
        prayer: "Thursday 6:00 PM",
        youth: "Sabbath 3:00 PM"
      },
      features: ["Bible Studies", "Prayer Meetings", "Youth Activities"]
    },
    {
      id: 9,
      name: "La Plaine SDA Church",
      pastor: "Pastor Emily Laurent",
      address: "La Plaine Village, Dominica",
      phone: "+1 (767) 447-1003",
      email: "laplainesda@anyadominica.org",
      region: "east",
      services: {
        sabbath: "Saturday 10:00 AM",
        prayer: "Tuesday 7:00 PM",
        youth: "Friday 7:30 PM"
      },
      features: ["Pathfinder Club", "Adventurer Club", "Community Service"]
    },

    // Western Region (20 churches)
    {
      id: 10,
      name: "Roseau Central SDA Church",
      pastor: "Pastor Maria John",
      address: "Victoria Street, Roseau, Dominica",
      phone: "+1 (767) 448-1001",
      email: "roseaucentralsda@anyadominica.org",
      region: "west",
      services: {
        sabbath: "Saturday 9:00 AM & 11:00 AM",
        prayer: "Wednesday 7:00 PM",
        youth: "Friday 6:30 PM"
      },
      features: ["Multiple Services", "Youth Choir", "Bible Studies", "Health Ministry"]
    },
    {
      id: 11,
      name: "Canefield SDA Church",
      pastor: "Pastor Peter Henderson",
      address: "Canefield, Dominica",
      phone: "+1 (767) 448-1002",
      email: "canefieldsda@anyadominica.org",
      region: "west",
      services: {
        sabbath: "Saturday 9:30 AM",
        prayer: "Tuesday 7:00 PM",
        youth: "Friday 7:00 PM"
      },
      features: ["Community Outreach", "Music Ministry", "Children's Programs"]
    },
    {
      id: 12,
      name: "Goodwill SDA Church",
      pastor: "Pastor Rachel Joseph",
      address: "Goodwill, Roseau, Dominica",
      phone: "+1 (767) 448-1003",
      email: "goodwillsda@anyadominica.org",
      region: "west",
      services: {
        sabbath: "Saturday 10:00 AM",
        prayer: "Thursday 6:30 PM",
        youth: "Sabbath 4:00 PM"
      },
      features: ["Worship Team", "Prayer Ministry", "Youth Evangelism"]
    },

    // Central Region (20 churches)
    {
      id: 13,
      name: "St. Joseph SDA Church",
      pastor: "Pastor Samuel Charles",
      address: "St. Joseph Village, Dominica",
      phone: "+1 (767) 449-1001",
      email: "stjosephsda@anyadominica.org",
      region: "central",
      services: {
        sabbath: "Saturday 9:00 AM",
        prayer: "Wednesday 6:30 PM",
        youth: "Friday 6:00 PM"
      },
      features: ["Pathfinders", "Community Service", "Health Programs"]
    },
    {
      id: 14,
      name: "Morne Prosper SDA Church",
      pastor: "Pastor Angela Frederick",
      address: "Morne Prosper, Dominica",
      phone: "+1 (767) 449-1002",
      email: "morneprosper@anyadominica.org",
      region: "central",
      services: {
        sabbath: "Saturday 10:00 AM",
        prayer: "Tuesday 7:00 PM",
        youth: "Friday 7:00 PM"
      },
      features: ["Bible Workers", "Prayer Groups", "Youth Ministry"]
    },
    {
      id: 15,
      name: "Massacre SDA Church",
      pastor: "Pastor John Baptiste",
      address: "Massacre Village, Dominica",
      phone: "+1 (767) 449-1003",
      email: "massacresda@anyadominica.org",
      region: "central",
      services: {
        sabbath: "Saturday 9:30 AM",
        prayer: "Monday 6:30 PM",
        youth: "Sabbath 3:30 PM"
      },
      features: ["Community Outreach", "Music Ministry", "Children's Sabbath School"]
    }
  ];

  const filteredChurches = churches.filter(church => {
    const matchesRegion = selectedRegion === 'all' || church.region === selectedRegion;
    const matchesSearch = church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         church.pastor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         church.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const regionStats = {
    north: churches.filter(c => c.region === 'north').length,
    south: churches.filter(c => c.region === 'south').length,
    east: churches.filter(c => c.region === 'east').length,
    west: churches.filter(c => c.region === 'west').length,
    central: churches.filter(c => c.region === 'central').length,
    total: churches.length
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
              ANYA Dominica • 90 Churches United
            </div>
            <h1 className="text-5xl font-bold mb-6!">Our Churches</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
              Discover the 90 Seventh-day Adventist churches across Dominica where you can worship, 
              fellowship, and grow in faith with our vibrant communities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4! text-center">
            <div className="bg-blue-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-blue-600">{regionStats.total}</div>
              <div className="text-sm text-gray-600">Total Churches</div>
            </div>
            <div className="bg-green-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-green-600">{regionStats.north}</div>
              <div className="text-sm text-gray-600">Northern</div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-purple-600">{regionStats.south}</div>
              <div className="text-sm text-gray-600">Southern</div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-orange-600">{regionStats.east}</div>
              <div className="text-sm text-gray-600">Eastern</div>
            </div>
            <div className="bg-red-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-red-600">{regionStats.west}</div>
              <div className="text-sm text-gray-600">Western</div>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-4!">
              <div className="text-2xl font-bold text-indigo-600">{regionStats.central}</div>
              <div className="text-sm text-gray-600">Central</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6!">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
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
                    placeholder="Search by church name, pastor, or location..."
                    className="w-full pl-10! pr-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Region Filter */}
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2!">
                  Filter by Region
                </label>
                <select
                  id="region"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
              {selectedRegion !== 'all' && (
                <span className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Region: {regions.find(r => r.id === selectedRegion)?.name}
                  <button
                    onClick={() => setSelectedRegion('all')}
                    className="ml-1! hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center px-3! py-1! rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-1! hover:text-green-900"
                  >
                    ×
                  </button>
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
              {selectedRegion === 'all' ? 'All Churches' : `${regions.find(r => r.id === selectedRegion)?.name} Churches`}
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
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6! text-white">
                    <h3 className="font-bold text-lg mb-2!">{church.name}</h3>
                    <div className="flex items-center text-blue-100 text-sm">
                      <svg className="w-4 h-4 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {regions.find(r => r.id === church.region)?.name}
                    </div>
                  </div>

                  {/* Church Details */}
                  <div className="p-6!">
                    {/* Pastor Info */}
                    <div className="flex items-center mb-4!">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mr-3!">
                        {church.pastor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{church.pastor}</div>
                        <div className="text-sm text-gray-600">Pastor</div>
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
                      <a href={`mailto:${church.email}`} className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
                        <svg className="w-4 h-4 mr-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <div className="flex justify-between">
                          <span>Youth Service:</span>
                          <span className="font-medium">{church.services.youth}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-2!">Ministries & Features</h4>
                      <div className="flex flex-wrap gap-1!">
                        {church.features.map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2! py-1! rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-x-2! mt-6!">
                      <a
                        href={`tel:${church.phone}`}
                        className="flex-1 bg-blue-600 text-white text-center py-2! px-4! rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Call Church
                      </a>
                      <a
                        href={`mailto:${church.email}`}
                        className="flex-1 bg-gray-600 text-white text-center py-2! px-4! rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Map & Directions CTA */}
      <section className="py-16! bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto! px-4! max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4!">Find a Church Near You</h2>
          <p className="text-xl text-blue-100 mb-8! max-w-2xl mx-auto!">
            Use our interactive map to find the closest Seventh-day Adventist church in your area
          </p>
          <div className="flex flex-col sm:flex-row gap-4! justify-center">
            <Link 
              href="/map"
              className="bg-white text-blue-600 font-bold px-8! py-4! rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Church Map
            </Link>
            <Link 
              href="/visit"
              className="bg-transparent text-white border-2 border-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              First Time Visiting?
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Information */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Church Regions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              ANYA coordinates Adventist churches across all 5 regions of Dominica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6!">
            {regions.filter(r => r.id !== 'all').map(region => (
              <div key={region.id} className="bg-white rounded-2xl p-6! text-center shadow-lg border border-gray-200">
                <div className="text-3xl mb-4!">
                  {region.id === 'north' && '🏔️'}
                  {region.id === 'south' && '🌴'}
                  {region.id === 'east' && '🌅'}
                  {region.id === 'west' && '🏙️'}
                  {region.id === 'central' && '📍'}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{region.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2!">
                  {regionStats[region.id as keyof typeof regionStats]}
                </div>
                <div className="text-sm text-gray-600">Churches</div>
                <button
                  onClick={() => setSelectedRegion(region.id)}
                  className="mt-4! text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View Churches →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12! bg-white border-t border-gray-200">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8! text-center">
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Worship With Us</h3>
              <Link href="/beliefs" className="text-blue-600 hover:text-blue-700 block text-sm">
                Our Beliefs
              </Link>
              <Link href="/visit" className="text-blue-600 hover:text-blue-700 block text-sm">
                First Time?
              </Link>
              <Link href="/sabbath" className="text-blue-600 hover:text-blue-700 block text-sm">
                About Sabbath
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Get Involved</h3>
              <Link href="/anya" className="text-blue-600 hover:text-blue-700 block text-sm">
                Join ANYA
              </Link>
              <Link href="/volunteer" className="text-blue-600 hover:text-blue-700 block text-sm">
                Volunteer
              </Link>
              <Link href="/events" className="text-blue-600 hover:text-blue-700 block text-sm">
                Events
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Resources</h3>
              <Link href="/map" className="text-blue-600 hover:text-blue-700 block text-sm">
                Church Map
              </Link>
              <Link href="/resources" className="text-blue-600 hover:text-blue-700 block text-sm">
                Downloads
              </Link>
              <Link href="/news" className="text-blue-600 hover:text-blue-700 block text-sm">
                News
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Need Help?</h3>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 block text-sm">
                Contact Us
              </Link>
              <Link href="/prayer" className="text-blue-600 hover:text-blue-700 block text-sm">
                Prayer Request
              </Link>
              <Link href="/faq" className="text-blue-600 hover:text-blue-700 block text-sm">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}