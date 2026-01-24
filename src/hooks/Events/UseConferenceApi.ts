'use client';

import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

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
}

interface CalendarApiResult {
  events: Conference[];
  loading: boolean;
  error: any;
}

export default function useCalendarApi(): CalendarApiResult {

  // const { data, loading, error } = useStrapiQuery('/events?populate=*');
  // Filter at the API level instead of client-side
  const { data, loading, error } = useStrapiQuery('/events?populate=*&filters[EventCategory][$eq]=conference');


  if (loading || error || !data) {
    return { events: [], loading, error };
  }

  const events =
    data?.data?.map((item: any) => ({
      id: item.id,
      title: item.Title ?? 'Untitled Event',
      date: new Date(item.Date),
      endDate: new Date(item.Date),
      location: item.Address,
      venue: item.Location,
      hostChurch: item.Church,
      church: item.Church ?? 'Unknown Church',
      type: (item.EventType?.toLowerCase() as Conference['type']) || 'personal-ministries',
      description: item.Description ?? 'No description',
      speakers: Array.isArray(item.Speakers) ? item.Speakers : (typeof item.Speakers === 'string' ? item.Speakers.split(',').map(s => s.trim()) : []),
      registrationFee: item.CostAmount,
      registrationLink: item.RegistrationLink,
      capacity: item.Capacity,
      registeredCount: item.RegisteredCount,
      image: item.Image ?? '',
      tags: Array.isArray(item.Tags) ? item.Tags : (typeof item.Tags === 'string' ? item.Tags.split(',').map(t => t.trim()) : []),
      country: item.Country ?? 'Unknown Country',

    })) ?? [];



    console.log(events);
    
   

  return { events, loading, error };
}




