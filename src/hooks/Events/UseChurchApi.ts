'use client';

import { useMemo } from 'react';
import useCalendarApi, { CalendarEvent } from '@/hooks/Events/UseCalenderApi';

export interface ChurchEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  church: string;
  location: string;
  address: string;
  type: string;
  description: string;
  targetAudience: string;
  cost: 'free' | 'paid';
  costAmount?: number;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  registrationRequired: boolean;
  registrationLink?: string;
  image?: string;
  tags: string[];
  featured: boolean;
  country: string;
  ministries?: string;
}

interface ChurchApiResult {
  events: ChurchEvent[];
  loading: boolean;
  error: any;
}

export default function UseChurchApi(): ChurchApiResult {
  const { events: allEvents, loading, error } = useCalendarApi();

  const events = useMemo(() => {
    if (!allEvents || allEvents.length === 0) return [];

    // Filter events with type 'church' or 'workshop' (church programs)
    return allEvents
      .filter((event: CalendarEvent) => event.type === 'church' || event.type === 'workshop')
      .map((event: CalendarEvent): ChurchEvent => ({
        id: event.id,
        title: event.title,
        date: event.date,
        time: formatTime(event.date),
        church: event.church || 'ECC',
        location: event.country || 'ECC',
        address: '',
        type: event.ministries || event.type,
        description: event.description || 'Church program event',
        targetAudience: 'All members',
        cost: 'free',
        costAmount: 0,
        contactPerson: '',
        contactEmail: '',
        contactPhone: '',
        registrationRequired: false,
        registrationLink: '',
        image: event.image || '',
        tags: event.ministries ? event.ministries.split(',').map(m => m.trim()) : [],
        featured: false,
        country: event.country || 'All',
        ministries: event.ministries
      }));
  }, [allEvents]);

  return { events, loading, error };
}

function formatTime(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}




