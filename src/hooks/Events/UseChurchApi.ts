'use client';

import { useState, useEffect } from 'react';

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

// Transform Strapi Church Program data to ChurchEvent format
const transformChurchProgram = (item: any): ChurchEvent => ({
  id: `church-program-${item.id}`,
  title: item.Title || 'Untitled Program',
  date: new Date(item.Date),
  time: formatTime(new Date(item.Date)),
  church: item.Church || 'ECC',
  location: item.Location || item.Country || 'ECC',
  address: item.Address || '',
  type: item.Ministry || item.ProgramType || 'church',
  description: item.Description || 'Church program',
  targetAudience: item.TargetAudience || 'All members',
  cost: item.CostType?.toLowerCase() === 'paid' ? 'paid' : 'free',
  costAmount: item.CostAmount || 0,
  contactPerson: item.ContactPerson || '',
  contactEmail: item.ContactEmail || '',
  contactPhone: item.ContactPhone || '',
  registrationRequired: item.RegistrationRequired || false,
  registrationLink: item.RegistrationLink || '',
  image: item.Image?.url || '',
  tags: item.Ministry ? item.Ministry.split(',').map((m: string) => m.trim()) : [],
  featured: item.Featured || false,
  country: item.Country || 'All',
  ministries: item.Ministry
});

export default function UseChurchApi(): ChurchApiResult {
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchChurchPrograms = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://anyabacken.onrender.com/api';
        const allPrograms: ChurchEvent[] = [];
        let page = 1;
        let hasMorePages = true;

        // Fetch all pages (Strapi limits to 100 per page)
        while (hasMorePages) {
          const response = await fetch(
            `${apiUrl}/church-programs?populate=*&pagination[pageSize]=100&pagination[page]=${page}`
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch church programs: ${response.statusText}`);
          }

          const data = await response.json();
          const pagePrograms = data.data?.map(transformChurchProgram) || [];
          allPrograms.push(...pagePrograms);

          // Check if there are more pages
          const { pageCount } = data.meta?.pagination || {};
          hasMorePages = page < pageCount;
          page++;
        }

        // Sort by date
        allPrograms.sort((a, b) => a.date.getTime() - b.date.getTime());
        setEvents(allPrograms);
      } catch (err) {
        console.error('Error fetching church programs:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChurchPrograms();
  }, []);

  return { events, loading, error };
}

function formatTime(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}