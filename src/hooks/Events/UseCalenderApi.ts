'use client';

import React from 'react';

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  church: string;
  type: 'conference' | 'workshop' | 'church' | 'youth' | 'other';
  description?: string;
  country?: string;
  ministries?: string;
  image?: string;
  source?: 'strapi';
}

interface CalendarApiResult {
  events: CalendarEvent[];
  loading: boolean;
  error: any;
}

// Map Strapi EventCategory to our event types
const mapEventCategory = (category: string): CalendarEvent['type'] => {
  const categoryMap: Record<string, CalendarEvent['type']> = {
    'youth': 'youth',
    'conference': 'conference',
    'workshop': 'workshop',
    'church': 'church',
    'prayer': 'church',
    'other': 'other'
  };
  return categoryMap[category?.toLowerCase()] || 'other';
};

// Transform Strapi event data to CalendarEvent format
const transformStrapiEvent = (item: any): CalendarEvent => ({
  id: `strapi-${item.id}`,
  title: item.Title || 'Untitled Event',
  date: new Date(item.Date),
  endDate: item.EndDate ? new Date(item.EndDate) : undefined,
  church: item.Church || 'ECC',
  type: mapEventCategory(item.EventCategory),
  description: item.Description || undefined,
  country: item.Country || 'All',
  ministries: item.Ministries || undefined,
  image: item.Image?.url || undefined,
  source: 'strapi' as const
});

export default function useCalendarApi(): CalendarApiResult {
  const [events, setEvents] = React.useState<CalendarEvent[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchAllEvents = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://anyabacken.onrender.com/api';
        const allEvents: CalendarEvent[] = [];
        let page = 1;
        let hasMorePages = true;

        // Fetch all pages (Strapi limits to 100 per page)
        while (hasMorePages) {
          const response = await fetch(
            `${apiUrl}/events?populate=*&pagination[pageSize]=100&pagination[page]=${page}`
          );
          
          if (!response.ok) {
            throw new Error(`Failed to fetch events: ${response.statusText}`);
          }
          
          const data = await response.json();
          const pageEvents = data.data?.map(transformStrapiEvent) || [];
          allEvents.push(...pageEvents);
          
          // Check if there are more pages
          const { pageCount } = data.meta?.pagination || {};
          hasMorePages = page < pageCount;
          page++;
        }

        // Sort all events by date
        allEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
        setEvents(allEvents);
      } catch (err) {
        console.error('Error fetching calendar events:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllEvents();
  }, []);

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
