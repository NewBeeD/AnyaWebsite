'use client';

import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'conference' | 'workshop' | 'prayer' | 'youth' | 'other';
  description?: string;
  image: string | null;
}

interface CalendarApiResult {
  events: CalendarEvent[];
  loading: boolean;
  error: any;
}

export default function useCalendarApi(): CalendarApiResult {
  const { data, loading, error } = useStrapiQuery('/events');

 
 

  if (loading || error || !data) {
    return { events: [], loading, error };
  }

  const events =
    data?.data?.map((item: any) => ({
      id: item.id,
      title: item.Title ?? 'Untitled Event',
      date: new Date(item.Date),
      description: item.Description ?? 'No description',
      country: item.Country ?? 'Dominica',
      image: item.Image?.url ?? ''
    })) ?? [];



     console.log('Here is the final data', events);



  return { events, loading, error };
}


function formatDate(dateString: string): Date {


}
