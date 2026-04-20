'use client';

import Link from 'next/link';
import Image from 'next/image';
import useTeamApi, { formatDepartmentName } from '@/hooks/Team/useTeamApi';

export default function TeamPage() {
  const { departments, loading, error } = useTeamApi();

  const stats = [
    { number: departments.reduce((acc, d) => acc + d.members.length, 0).toString(), label: "Team Members" },
    { number: departments.length.toString(), label: "Departments" },
    { number: "2", label: "Countries Served" },
    { number: "24/7", label: "Dedicated Service" }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
              ANYA Leadership
            </div>
            <h1 className="text-5xl font-bold mb-6!">Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
              ANYA Executive is the governing body of the Adventist National Youth Association that works 
              with the youth department of the East Caribbean Conference of SDA to plan youth activities 
              for SDA members ages 13-35 across the islands.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6! text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-6!">
                <div className="text-3xl font-bold text-blue-600 mb-2!">{stat.number}</div>
                <div className="font-semibold text-gray-900">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments & Team Members */}
      <section className="py-16!">
        <div className="container mx-auto! px-4! max-w-6xl">
          {departments.map((dept, deptIndex) => (
            <div key={deptIndex} className="mb-16!">
              {/* Department Header */}
              <div className="text-center mb-10!">
                <h2 className="text-3xl font-bold text-gray-900 mb-3!">
                  {formatDepartmentName(dept.department)}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
                  {dept.description}
                </p>
              </div>

              {/* Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8!">
                {dept.members.map((member) => (
                  <div 
                    key={member.id} 
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Photo/Avatar */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-4xl font-bold text-white">
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Member Info */}
                    <div className="p-6!">
                      <h3 className="text-xl font-bold text-gray-900 mb-1!">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-3!">{member.role}</p>
                      
                      {member.church && (
                        <p className="text-sm text-gray-600 mb-3! flex items-center">
                          <svg className="w-4 h-4 mr-2! text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {member.church}
                        </p>
                      )}

                      <p className="text-gray-600 text-sm mb-4! line-clamp-3">
                        {member.shortBio || member.bio}
                      </p>

                      {/* Expertise Tags */}
                      {member.expertise && member.expertise.length > 0 && (
                        <div className="flex flex-wrap gap-1! mb-4!">
                          {member.expertise.slice(0, 3).map((skill, idx) => (
                            <span 
                              key={idx} 
                              className="bg-blue-50 text-blue-700 px-2! py-1! rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                          {member.expertise.length > 3 && (
                            <span className="bg-gray-100 text-gray-600 px-2! py-1! rounded text-xs">
                              +{member.expertise.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* Contact Links */}
                      <div className="flex gap-3! pt-4! border-t border-gray-100">
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                            title="Email"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                        )}
                        {member.phone && (
                          <a 
                            href={`tel:${member.phone}`}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                            title="Phone"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16! bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto! px-4! max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4!">Want to Get Involved?</h2>
          <p className="text-xl text-blue-100 mb-8!">
            Join our team and help make a difference in the lives of young people across the East Caribbean.
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
