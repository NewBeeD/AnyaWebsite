'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Define interfaces
interface Church {
  id: number;
  name: string;
  pastor: string;
  address: string;
  phone: string;
  email: string;
  country: string;
  region: string;
  coordinates: { lat: number; lng: number };
  services: { sabbath: string; prayer: string };
  type: string;
}

interface LeafletMapProps {
  churches: Church[];
  selectedChurch: Church | null;
  onChurchSelect: (church: Church) => void;
  selectedCountry: string;
  userLocation: { lat: number; lng: number } | null;
}

// We need to dynamically import the map component to avoid SSR issues
const LeafletMapInner = dynamic(
  () => import('./LeafletMapInner'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    )
  }
);

export default function LeafletMap(props: LeafletMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return <LeafletMapInner {...props} />;
}
