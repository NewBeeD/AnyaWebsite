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
  type: 'leadership' | 'worship' | 'youth' | 'family' | 'evangelism' | 'teaching';
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
      type: (item.EventType?.toLowerCase() as Conference['type']) || 'other',
      description: item.Description ?? 'No description',
      speakers: item.Speakers.speakers,
      registrationFee: item.CostAmount,
      registrationLink: item.RegistrationLink,
      capacity: item.Capacity,
      registeredCount: item.RegisteredCount,
      image: item.Image ?? '',
      tags: item.Tags

    })) ?? [];
   

  return { events, loading, error };
}




