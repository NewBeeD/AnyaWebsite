'use client';

import { useMemo } from 'react';
import useCalendarApi, { CalendarEvent } from '@/hooks/Events/UseCalenderApi';

export interface Conference {
  id: string;
  title: string;
  date: Date;
  endDate: Date;
  location: string;
  venue: string;
  hostChurch: string;
  type: string;
  description: string;
  speakers: string[];
  registrationFee: number;
  registrationLink: string;
  capacity: number;
  registeredCount: number;
  image?: string;
  tags: string[];
  country: string;
  ministries?: string;
}

interface ConferenceApiResult {
  events: Conference[];
  loading: boolean;
  error: any;
}

export default function UseConferenceApi(): ConferenceApiResult {
  const { events: allEvents, loading, error } = useCalendarApi();

  const events = useMemo(() => {
    if (!allEvents || allEvents.length === 0) return [];

    // Filter events with type 'conference'
    return allEvents
      .filter((event: CalendarEvent) => event.type === 'conference')
      .map((event: CalendarEvent): Conference => ({
        id: event.id,
        title: event.title,
        date: event.date,
        endDate: event.endDate || event.date,
        location: event.country || 'ECC',
        venue: event.church || 'ECC',
        hostChurch: event.church || 'ECC',
        type: event.ministries || 'conference',
        description: event.description || 'Conference event',
        speakers: [],
        registrationFee: 0,
        registrationLink: '',
        capacity: 100,
        registeredCount: 0,
        image: event.image || '',
        tags: event.ministries ? event.ministries.split(',').map(m => m.trim()) : [],
        country: event.country || 'All',
        ministries: event.ministries
      }));
  }, [allEvents]);

  return { events, loading, error };
}




