'use client';

import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

interface YouthEvent {
  id: string;
  title: string;
  date: Date;
  location: string;
  church: string;
  type: 'camp' | 'workshop' | 'retreat' | 'conference' | 'social' | 'mission';
  description: string;
  ageGroup: string;
  registrationRequired: boolean;
  registrationLink?: string;
  image?: string;
}

interface YouthApiResult {
  events: YouthEvent[];
  loading: boolean;
  error: any;
}

export default function useCalendarApi(): YouthApiResult {

  // const { data, loading, error } = useStrapiQuery('/events?populate=*');
  // Filter at the API level instead of client-side
  const { data, loading, error } = useStrapiQuery('/events?populate=*&filters[EventCategory][$eq]=youth');


  if (loading || error || !data) {
    return { events: [], loading, error };
  }

  const events =
    data?.data?.map((item: any) => ({
      id: item.id,
      title: item.Title ?? 'Untitled Event',
      date: new Date(item.Date),
      location: item.Location,
      church: item.Church ?? 'Unknown Church',
      type: item.EventType,
      description: item.Description ?? 'No description',
      registrationRequired: item.RegistrationRequired,
      registrationLink: item.RegistrationLink,
      ageGroup: item.AgeGroup,
      image: item.Image

    })) ?? [];
 

  return { events, loading, error };
}






