

// import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

// interface CalendarEvent {
//   id: string;
//   title: string;
//   date: Date;
//   church: string;
//   type: 'conference' | 'workshop' | 'prayer' | 'youth' | 'other';
//   description?: string;
// }

// /**
//  * Custom hook that fetches events and returns an array of CalendarEvent objects
//  */
// export default function useFullCalendarViewApi(): CalendarEvent[] | undefined {
//   const { data, loading, error } = useStrapiQuery('/events');

//   if (loading || error || !data) return undefined;

//   return modifyData(data);
// }

// /**
//  * Helper function that transforms the raw API data into CalendarEvent[] format
//  */
// function modifyData(info: any): CalendarEvent[] {
//   if (!info?.data) return [];

//   return info.data.map((item: any) => ({
//     id: item.id,
//     title: item.Title,
//     date: item.Date,
//     church: item.Church,
//     type: (item.EventCategory?.toLowerCase() as CalendarEvent['type']) || 'other',
//     description: item.Description?.[0]?.children?.[0]?.text || '',
//   }));
// }




'use client';

import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  church: string;
  type: 'conference' | 'workshop' | 'prayer' | 'youth' | 'other';
  description?: string;
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
      church: item.Church ?? 'Unknown Church',
      type: (item.EventType?.toLowerCase() as CalendarEvent['type']) || 'other',
      description: item.Description ?? 'No description',
    })) ?? [];



  return { events, loading, error };
}



// // hooks/Events/UseCalenderApi.js
// import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

// const useCalendarApi = () => {
//   const { data, loading, error } = useStrapiQuery('/events?populate=*');

//   // Transform Strapi data to CalendarEvent format
//   const events = data?.data?.map(item => ({
//     id: item.id.toString(),
//     title: item.attributes.title || 'Untitled Event',
//     date: new Date(item.attributes.date || item.attributes.createdAt),
//     church: item.attributes.church || 'Unknown Church',
//     type: item.attributes.type || 'other',
//     description: item.attributes.description || null,
//   })) || [];

//   return {
//     events,
//     loading,
//     error,
//   };
// };

// export default useCalendarApi;
