'use client';

import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

interface ChurchEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  church: string;
  location: string;
  address: string;
  type: 'financial' | 'relationships' | 'theology' | 'parenting' | 'health' | 'social-issues' | 'spiritual-growth' | 'community';
  description: string;
  targetAudience: string;
  cost: 'free' | 'paid';
  costAmount?: number;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  registrationRequired: boolean;
  registrationLink?: string;
  tags: string[];
  featured: boolean;
}

interface ChurchApiResult {
  events: ChurchEvent[];
  loading: boolean;
  error: any;
}

export default function useCalendarApi(): ChurchApiResult {

  // const { data, loading, error } = useStrapiQuery('/events?populate=*');
  // Filter at the API level instead of client-side
  const { data, loading, error } = useStrapiQuery('/events?populate=*&filters[EventCategory][$eq]=church');


  if (loading || error || !data) {
    return { events: [], loading, error };
  }

  const events =
    data?.data?.map((item: any) => ({
      id: item.id,
      title: item.Title ?? 'Untitled Event',
      date: new Date(item.Date),
      time: extractTime(item.Date),
      location: item.Location,
      address: item.Address,
      church: item.Church ?? 'Unknown Church',
      type: item.EventType,
      description: item.Description ?? 'No description',
      targetAudience: item.TargetAudience,
      cost: item.CostType,
      costAmount: item.CostAmount,
      registrationRequired: item.RegistrationRequired,
      registrationLink: item.RegistrationLink,
      tags: item.Tags.tags,
      featured: item.Featured,
      contactPerson: item.ContactPerson,
      contactEmail: item.ContactEmail,
      contactPhone: item.ContactPhone

    })) ?? []; 
   

  return { events, loading, error };
}



function extractTime(
  dateString: string, 
  options: { includeSeconds?: boolean; timeZone?: 'local' | 'utc' } = {}
): string {
  const { includeSeconds = false, timeZone = 'local' } = options;
  
  const date = new Date(dateString);
  
  // Use UTC or local time
  const getHours = timeZone === 'utc' ? date.getUTCHours() : date.getHours();
  const getMinutes = timeZone === 'utc' ? date.getUTCMinutes() : date.getMinutes();
  const getSeconds = timeZone === 'utc' ? date.getUTCSeconds() : date.getSeconds();

  const hours = getHours.toString().padStart(2, '0');
  const minutes = getMinutes.toString().padStart(2, '0');
  const seconds = getSeconds.toString().padStart(2, '0');

  return includeSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
}




