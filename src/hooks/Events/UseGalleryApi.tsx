// hooks/Events/UseGalleryApi.ts
import { useState, useEffect } from 'react';

export interface EventImage {
  id: string;
  imageUrl: string;
  thumbnailUrl: string;
  description?: string;
  photographer?: string;
  featured?: boolean;
  uploadDate: Date;
}

export interface GalleryEvent {
  id: string;
  name: string;
  eventType: 'conference' | 'worship' | 'youth' | 'leadership' | 'community' | 'mission' | 'other';
  date: Date;
  endDate?: Date;
  location: string;
  country: string;
  description: string;
  venue: string;
  images: EventImage[];
  tags: string[];
  speakers?: string[];
  attendeesCount?: number;
  featured?: boolean;
  hostChurch?: string;
  registrationCount?: number;
  capacity?: number;
}

const mockEventsData: GalleryEvent[] = [
  {
    id: '1',
    name: '2024 National Leadership Conference',
    eventType: 'leadership',
    date: new Date('2024-03-15'),
    endDate: new Date('2024-03-17'),
    location: 'Nairobi, Kenya',
    country: 'Kenya',
    venue: 'Kenyatta International Convention Centre',
    description: 'Annual gathering of church leaders from across the region for training and fellowship.',
    images: [
      {
        id: '1-1',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
        description: 'Main conference session',
        photographer: 'John Doe',
        featured: true,
        uploadDate: new Date('2024-03-18')
      },
      {
        id: '1-2',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
        description: 'Workshop session',
        photographer: 'Jane Smith',
        uploadDate: new Date('2024-03-18')
      },
      {
        id: '1-3',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
        description: 'Networking lunch',
        photographer: 'Mike Johnson',
        uploadDate: new Date('2024-03-18')
      },
      {
        id: '1-4',
        imageUrl: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&h=800&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=300&fit=crop',
        description: 'Evening worship session',
        photographer: 'Sarah Williams',
        uploadDate: new Date('2024-03-19')
      },
      {
        id: '1-5',
        imageUrl: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=1200&h=800&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=400&h=300&fit=crop',
        description: 'Keynote speech',
        photographer: 'John Doe',
        uploadDate: new Date('2024-03-19')
      },
      {
        id: '1-6',
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
        description: 'Group photo of all attendees',
        photographer: 'Conference Team',
        uploadDate: new Date('2024-03-20')
      }
    ],
    tags: ['Leadership', 'Training', 'Networking', 'Ministry'],
    speakers: ['Dr. James Kariuki', 'Pastor Sarah Mwangi', 'Bishop David Omondi'],
    attendeesCount: 450,
    capacity: 500,
    registrationCount: 450,
    featured: true,
    hostChurch: 'Nairobi Central Church'
  },
  {
    id: '2',
    name: 'Youth Revival Night 2024',
    eventType: 'youth',
    date: new Date('2024-02-20'),
    location: 'Kampala, Uganda',
    country: 'Uganda',
    venue: 'National Stadium',
    description: 'Powerful night of worship and ministry for young people.',
    images: [
      {
        id: '2-1',
        imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
        description: 'Main worship session',
        photographer: 'Youth Ministry Team',
        featured: true,
        uploadDate: new Date('2024-02-21')
      },
      {
        id: '2-2',
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop',
        thumbnailUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
        description: 'Youth praying together',
        uploadDate: new Date('2024-02-21')
      }
    ],
    tags: ['Youth', 'Worship', 'Revival', 'Prayer'],
    attendeesCount: 1200,
    capacity: 1500,
    registrationCount: 1200,
    hostChurch: 'Kampala Youth Church'
  },
  // Add more events as needed...
];

const UseGalleryApi = () => {
  const [events, setEvents] = useState<GalleryEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setEvents(mockEventsData);
      } catch (err) {
        setError('Failed to load events gallery');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEventsData();
  }, []);

  // Function to get a single event by ID
  const getEventById = (id: string): GalleryEvent | undefined => {
    return events.find(event => event.id === id);
  };

  return { events, loading, error, getEventById };
};

export default UseGalleryApi;