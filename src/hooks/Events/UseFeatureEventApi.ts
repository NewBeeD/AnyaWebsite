'use client';

import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

export interface FeaturedEvent {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  type: 'conference' | 'workshop' | 'prayer' | 'youth' | 'church' | 'other';
  description?: string;
  image: string | null;
  country?: string;
  church?: string;
  featured?: boolean;
}

interface FeaturedEventApiResult {
  events: FeaturedEvent[];
  loading: boolean;
  error: any;
}

export default function useFeaturedEventApi(): FeaturedEventApiResult {
  // Fetch only featured events from Strapi
  const { data, loading, error }: any = useStrapiQuery('/events?filters[Featured][$eq]=true&populate=*');

  if (loading || error || !data) {
    return { events: [], loading, error };
  }

  // Map Strapi EventCategory to our event types
  const mapEventCategory = (category: string): FeaturedEvent['type'] => {
    const categoryMap: Record<string, FeaturedEvent['type']> = {
      'youth': 'youth',
      'conference': 'conference',
      'workshop': 'workshop',
      'church': 'church',
      'prayer': 'prayer',
      'other': 'other'
    };
    return categoryMap[category?.toLowerCase()] || 'other';
  };

  const events: FeaturedEvent[] = data?.data?.map((item: any) => ({
    id: item.id.toString(),
    title: item.Title ?? 'Untitled Event',
    date: new Date(item.Date),
    endDate: item.EndDate ? new Date(item.EndDate) : undefined,
    type: mapEventCategory(item.EventCategory),
    description: item.Description ?? 'No description',
    country: item.Country ?? 'All',
    church: item.Church ?? 'ECC',
    image: item.Image?.url ?? null,
    featured: item.Featured ?? false
  })) ?? [];

  console.log('Featured events from Strapi:', events);

  return { events, loading, error };
}
