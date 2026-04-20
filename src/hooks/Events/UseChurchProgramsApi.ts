'use client';

import { useState, useEffect } from 'react';

export interface ChurchProgram {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  programDate: Date;
  endDate?: Date;
  startTime?: string;
  endTime?: string;
  isRecurring: boolean;
  recurrencePattern?: string;
  programType: string;
  hostChurch: string;
  churchAddress?: string;
  country: 'dominica' | 'barbados' | 'both';
  region?: string;
  coverImage?: string;
  gallery?: string[];
  speakers?: { name: string; role?: string; bio?: string }[];
  targetAudience: string;
  isFree: boolean;
  cost?: number;
  registrationRequired: boolean;
  registrationLink?: string;
  contactPerson?: string;
  contactEmail?: string;
  contactPhone?: string;
  featured: boolean;
  tags?: string[];
  ministries?: string;
  expectedAttendance?: number;
  liveStreamLink?: string;
  isVirtual: boolean;
  source: 'strapi' | 'mock';
}

interface UseChurchProgramsApiResult {
  programs: ChurchProgram[];
  featuredPrograms: ChurchProgram[];
  loading: boolean;
  error: Error | null;
}

// Mock church programs data
const mockChurchPrograms: ChurchProgram[] = [
  {
    id: 1,
    title: "Faith & Politics: Where Do We Draw the Line?",
    slug: "faith-and-politics",
    description: "A respectful dialogue on Christian engagement in politics. Can faith influence governance without compromising spiritual values? Join us for this thought-provoking discussion.",
    shortDescription: "A respectful dialogue on Christian engagement in politics.",
    programDate: new Date('2026-05-15'),
    startTime: "19:30",
    endTime: "21:00",
    isRecurring: false,
    programType: "workshop",
    hostChurch: "Roseau Central SDA Church",
    churchAddress: "Victoria Street, Roseau, Dominica",
    country: "dominica",
    region: "west",
    targetAudience: "adults",
    isFree: true,
    registrationRequired: true,
    registrationLink: "https://forms.example.com/faith-politics",
    contactPerson: "Pastor Maria John",
    contactEmail: "roseaucentralsda@anyadominica.org",
    featured: true,
    tags: ["Discussion", "Politics", "Faith"],
    isVirtual: false,
    source: 'mock'
  },
  {
    id: 2,
    title: "Biblical Budgeting & Financial Freedom",
    slug: "biblical-budgeting",
    description: "Practical money management from a Christian perspective. Learn to budget, invest, and give generously while honoring God. Professional financial advisors present.",
    shortDescription: "Practical money management from a Christian perspective.",
    programDate: new Date('2026-05-20'),
    startTime: "14:00",
    endTime: "17:00",
    isRecurring: false,
    programType: "workshop",
    hostChurch: "King Street SDA Church",
    churchAddress: "King Street, Bridgetown, Barbados",
    country: "barbados",
    region: "st_michael",
    targetAudience: "all_ages",
    isFree: true,
    registrationRequired: true,
    contactPerson: "Pastor William Thompson",
    contactEmail: "kingstreetsda@anyabarbados.org",
    featured: true,
    tags: ["Finance", "Stewardship", "Workshop"],
    isVirtual: false,
    source: 'mock'
  },
  {
    id: 3,
    title: "Mental Health & Spiritual Warfare",
    slug: "mental-health-spiritual-warfare",
    description: "Navigating depression, anxiety, and mental health challenges from a biblical perspective. Professional counselors and pastoral team present to provide support and guidance.",
    shortDescription: "Navigating mental health challenges from a biblical perspective.",
    programDate: new Date('2026-06-08'),
    startTime: "20:00",
    endTime: "22:00",
    isRecurring: false,
    programType: "health_seminar",
    hostChurch: "Bethel SDA Church",
    churchAddress: "Goodwill, Roseau, Dominica",
    country: "dominica",
    region: "south",
    targetAudience: "all_ages",
    isFree: true,
    registrationRequired: false,
    contactPerson: "Mr. Dave Antoine",
    contactEmail: "d.antoine@anyadominica.org",
    featured: true,
    tags: ["Mental Health", "Counseling", "Support"],
    isVirtual: false,
    source: 'mock'
  },
  {
    id: 4,
    title: "Youth Praise & Worship Night",
    slug: "youth-praise-worship",
    description: "An evening of contemporary praise and worship led by youth from across the conference. Come experience the power of unified worship!",
    shortDescription: "An evening of contemporary praise and worship.",
    programDate: new Date('2026-05-30'),
    startTime: "18:00",
    endTime: "21:00",
    isRecurring: true,
    recurrencePattern: "monthly",
    programType: "concert",
    hostChurch: "Silver Hill SDA Church",
    churchAddress: "Silver Hill, Christ Church, Barbados",
    country: "barbados",
    region: "christ_church",
    targetAudience: "youth",
    isFree: true,
    registrationRequired: false,
    contactPerson: "Youth Department",
    contactEmail: "youth@anyabarbados.org",
    featured: false,
    tags: ["Worship", "Music", "Youth"],
    isVirtual: false,
    source: 'mock'
  },
  {
    id: 5,
    title: "Community Health Fair",
    slug: "community-health-fair",
    description: "Free health screenings, nutrition education, and wellness workshops. Open to the community. Bring the whole family for a day focused on health and well-being.",
    shortDescription: "Free health screenings, nutrition education, and wellness workshops.",
    programDate: new Date('2026-06-15'),
    startTime: "09:00",
    endTime: "15:00",
    isRecurring: false,
    programType: "community_service",
    hostChurch: "Portsmouth SDA Church",
    churchAddress: "Portsmouth, Dominica",
    country: "dominica",
    region: "north",
    targetAudience: "all_ages",
    isFree: true,
    registrationRequired: false,
    contactPerson: "Health Ministry Team",
    contactEmail: "health@anyadominica.org",
    featured: true,
    tags: ["Health", "Community", "Free"],
    isVirtual: false,
    source: 'mock'
  },
  {
    id: 6,
    title: "Vacation Bible School 2026",
    slug: "vbs-2026",
    description: "An exciting week of Bible stories, crafts, games, and songs for children ages 4-12. Theme: 'Adventures in Faith'. Registration opens June 1st.",
    shortDescription: "Exciting week of Bible activities for children ages 4-12.",
    programDate: new Date('2026-07-13'),
    endDate: new Date('2026-07-17'),
    startTime: "09:00",
    endTime: "12:00",
    isRecurring: false,
    programType: "childrens_program",
    hostChurch: "Holders Hill SDA Church",
    churchAddress: "Durants Village, St James, Barbados",
    country: "barbados",
    region: "st_james",
    targetAudience: "children",
    isFree: true,
    registrationRequired: true,
    registrationLink: "https://forms.example.com/vbs2026",
    contactPerson: "Children's Ministry",
    contactEmail: "children@anyabarbados.org",
    featured: true,
    tags: ["Children", "VBS", "Summer"],
    isVirtual: false,
    source: 'mock'
  }
];

export default function useChurchProgramsApi(): UseChurchProgramsApiResult {
  const [programs, setPrograms] = useState<ChurchProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        
        const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';
        const response = await fetch(`${STRAPI_URL}/church-programs?populate=*&sort=ProgramDate:asc`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch church programs from Strapi');
        }
        
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          const strapiPrograms: ChurchProgram[] = data.data.map((item: any) => {
            const attrs = item.attributes || item;
            return {
              id: item.id,
              title: attrs.Title,
              slug: attrs.Slug,
              description: attrs.Description,
              shortDescription: attrs.ShortDescription,
              programDate: new Date(attrs.ProgramDate),
              endDate: attrs.EndDate ? new Date(attrs.EndDate) : undefined,
              startTime: attrs.StartTime,
              endTime: attrs.EndTime,
              isRecurring: attrs.IsRecurring || false,
              recurrencePattern: attrs.RecurrencePattern,
              programType: attrs.ProgramType,
              hostChurch: attrs.HostChurch,
              churchAddress: attrs.ChurchAddress,
              country: attrs.Country,
              region: attrs.Region,
              coverImage: attrs.CoverImage?.data?.attributes?.url 
                ? `${STRAPI_URL.replace('/api', '')}${attrs.CoverImage.data.attributes.url}`
                : attrs.CoverImage?.url 
                  ? `${STRAPI_URL.replace('/api', '')}${attrs.CoverImage.url}`
                  : undefined,
              gallery: attrs.Gallery?.data?.map((img: any) => 
                `${STRAPI_URL.replace('/api', '')}${img.attributes?.url || img.url}`
              ) || [],
              speakers: attrs.Speakers || [],
              targetAudience: attrs.TargetAudience || 'all_ages',
              isFree: attrs.IsFree ?? true,
              cost: attrs.Cost,
              registrationRequired: attrs.RegistrationRequired || false,
              registrationLink: attrs.RegistrationLink,
              contactPerson: attrs.ContactPerson,
              contactEmail: attrs.ContactEmail,
              contactPhone: attrs.ContactPhone,
              featured: attrs.Featured || false,
              tags: attrs.Tags || [],
              ministries: attrs.Ministries,
              expectedAttendance: attrs.ExpectedAttendance,
              liveStreamLink: attrs.LiveStreamLink,
              isVirtual: attrs.IsVirtual || false,
              source: 'strapi' as const
            };
          });
          
          setPrograms(strapiPrograms);
        } else {
          // Use mock data as fallback
          setPrograms(mockChurchPrograms);
        }
      } catch (err) {
        console.log('Using mock church programs data:', err);
        setPrograms(mockChurchPrograms);
        setError(null); // Don't set error, just use mock data
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  // Filter featured programs
  const featuredPrograms = programs.filter(p => p.featured);

  return { programs, featuredPrograms, loading, error };
}

// Helper function to format program type for display
export function formatProgramType(type: string): string {
  const typeMap: Record<string, string> = {
    'worship_service': 'Worship Service',
    'prayer_meeting': 'Prayer Meeting',
    'bible_study': 'Bible Study',
    'youth_program': 'Youth Program',
    'childrens_program': "Children's Program",
    'health_seminar': 'Health Seminar',
    'evangelistic_series': 'Evangelistic Series',
    'concert': 'Concert',
    'community_service': 'Community Service',
    'workshop': 'Workshop',
    'retreat': 'Retreat',
    'camp_meeting': 'Camp Meeting',
    'special_service': 'Special Service',
    'other': 'Other'
  };
  return typeMap[type] || type;
}

// Helper function to get program type color
export function getProgramTypeColor(type: string): string {
  const colorMap: Record<string, string> = {
    'worship_service': 'bg-blue-100 text-blue-800',
    'prayer_meeting': 'bg-purple-100 text-purple-800',
    'bible_study': 'bg-indigo-100 text-indigo-800',
    'youth_program': 'bg-green-100 text-green-800',
    'childrens_program': 'bg-pink-100 text-pink-800',
    'health_seminar': 'bg-red-100 text-red-800',
    'evangelistic_series': 'bg-orange-100 text-orange-800',
    'concert': 'bg-yellow-100 text-yellow-800',
    'community_service': 'bg-teal-100 text-teal-800',
    'workshop': 'bg-cyan-100 text-cyan-800',
    'retreat': 'bg-emerald-100 text-emerald-800',
    'camp_meeting': 'bg-lime-100 text-lime-800',
    'special_service': 'bg-amber-100 text-amber-800',
    'other': 'bg-gray-100 text-gray-800'
  };
  return colorMap[type] || 'bg-gray-100 text-gray-800';
}
