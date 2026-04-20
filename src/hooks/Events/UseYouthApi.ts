'use client';

import { useMemo } from 'react';
import useCalendarApi, { CalendarEvent } from '@/hooks/Events/UseCalenderApi';

export interface YouthEvent {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  location: string;
  church: string;
  type: string;
  description: string;
  ageGroup: string;
  registrationRequired: boolean;
  registrationLink?: string;
  image?: string;
  country: string;
  ministries?: string;
}

interface YouthApiResult {
  events: YouthEvent[];
  loading: boolean;
  error: any;
}

export default function UseYouthApi(): YouthApiResult {
  const { events: allEvents, loading, error } = useCalendarApi();

  const events = useMemo(() => {
    if (!allEvents || allEvents.length === 0) return [];

    // Filter events with type 'youth'
    return allEvents
      .filter((event: CalendarEvent) => event.type === 'youth')
      .map((event: CalendarEvent): YouthEvent => ({
        id: event.id,
        title: event.title,
        date: event.date,
        endDate: event.endDate,
        location: event.country || 'ECC',
        church: event.church || 'ECC',
        type: event.ministries || 'youth-ministries',
        description: event.description || 'Youth event',
        ageGroup: 'Youth',
        registrationRequired: false,
        registrationLink: '',
        image: event.image || '',
        country: event.country || 'All',
        ministries: event.ministries
      }));
  }, [allEvents]);

  return { events, loading, error };
}






