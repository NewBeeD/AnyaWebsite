'use client';

import { useEffect, useRef, useMemo } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

interface LeafletMapInnerProps {
  churches: Church[];
  selectedChurch: Church | null;
  onChurchSelect: (church: Church) => void;
  selectedCountry: string;
  userLocation: { lat: number; lng: number } | null;
}

// Region colors mapping
const regionColors: Record<string, string> = {
  // Dominica regions
  'north': '#10b981',
  'south': '#8b5cf6',
  'east': '#f97316',
  'west': '#ef4444',
  'central': '#6366f1',
  // Barbados parishes
  'st_michael': '#14b8a6',
  'christ_church': '#10b981',
  'st_james': '#f59e0b',
  'st_george': '#f43f5e',
  'st_thomas': '#8b5cf6',
  'st_peter': '#ec4899',
  'st_andrew': '#84cc16',
  'st_joseph': '#06b6d4',
  'st_john': '#d946ef',
  'st_philip': '#0ea5e9',
  'st_lucy': '#6366f1'
};

// Country center coordinates
const countryCoordinates = {
  dominica: { lat: 15.4150, lng: -61.3710, zoom: 10 },
  barbados: { lat: 13.1939, lng: -59.5432, zoom: 11 }
};

export default function LeafletMapInner({
  churches,
  selectedChurch,
  onChurchSelect,
  selectedCountry,
  userLocation
}: LeafletMapInnerProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const userMarkerRef = useRef<L.Marker | null>(null);

  // Create custom icon
  const createIcon = (color: string, isSelected: boolean = false) => {
    const size = isSelected ? 36 : 28;
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: ${size}px;
          height: ${size}px;
          background-color: ${color};
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          ${isSelected ? 'transform: scale(1.2);' : ''}
        ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style="width: ${size * 0.5}px; height: ${size * 0.5}px;">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.1 5.1 7.63 12 4.18zM4 8.63l7 3.5v7.24l-7-3.5V8.63zm9 10.74V12.13l7-3.5v7.24l-7 3.5z"/>
          </svg>
        </div>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -size / 2]
    });
  };

  // Create user location icon
  const userIcon = L.divIcon({
    className: 'user-marker',
    html: `
      <div style="
        width: 20px;
        height: 20px;
        background-color: #3b82f6;
        border: 4px solid white;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #3b82f6, 0 2px 8px rgba(0,0,0,0.3);
        animation: pulse 2s infinite;
      "></div>
      <style>
        @keyframes pulse {
          0% { box-shadow: 0 0 0 2px #3b82f6, 0 0 0 4px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 0 2px #3b82f6, 0 0 0 12px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 2px #3b82f6, 0 0 0 4px rgba(59, 130, 246, 0.4); }
        }
      </style>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

  // Filter churches by country
  const filteredChurches = useMemo(() => {
    return churches.filter(church => church.country === selectedCountry);
  }, [churches, selectedCountry]);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Clean up existing map
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const countrySettings = countryCoordinates[selectedCountry as keyof typeof countryCoordinates] || countryCoordinates.dominica;

    // Initialize map
    const map = L.map(mapContainerRef.current, {
      center: [countrySettings.lat, countrySettings.lng],
      zoom: countrySettings.zoom,
      zoomControl: true,
      scrollWheelZoom: true
    });

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [selectedCountry]);

  // Update markers when churches or selection changes
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add markers for filtered churches
    filteredChurches.forEach(church => {
      const color = regionColors[church.region] || '#3b82f6';
      const isSelected = selectedChurch?.id === church.id;
      const icon = createIcon(color, isSelected);

      const marker = L.marker([church.coordinates.lat, church.coordinates.lng], { icon })
        .addTo(mapRef.current!);

      // Create popup content
      const popupContent = `
        <div style="min-width: 200px; font-family: system-ui, -apple-system, sans-serif;">
          <h3 style="font-weight: 600; font-size: 14px; margin: 0 0 8px 0; color: #1f2937;">${church.name}</h3>
          <p style="font-size: 12px; color: #6b7280; margin: 0 0 4px 0;">
            <strong>Pastor:</strong> ${church.pastor}
          </p>
          <p style="font-size: 12px; color: #6b7280; margin: 0 0 4px 0;">
            <strong>Address:</strong> ${church.address}
          </p>
          <p style="font-size: 12px; color: #6b7280; margin: 0 0 8px 0;">
            <strong>Sabbath:</strong> ${church.services.sabbath}
          </p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${church.coordinates.lat},${church.coordinates.lng}" 
             target="_blank" 
             rel="noopener noreferrer"
             style="display: inline-block; background: #2563eb; color: white; padding: 6px 12px; border-radius: 6px; font-size: 12px; text-decoration: none; font-weight: 500;">
            Get Directions
          </a>
        </div>
      `;

      marker.bindPopup(popupContent, {
        closeButton: true,
        className: 'church-popup'
      });

      marker.on('click', () => {
        onChurchSelect(church);
      });

      markersRef.current.push(marker);
    });
  }, [filteredChurches, selectedChurch, onChurchSelect]);

  // Handle selected church changes - fly to location
  useEffect(() => {
    if (!mapRef.current || !selectedChurch) return;

    mapRef.current.flyTo(
      [selectedChurch.coordinates.lat, selectedChurch.coordinates.lng],
      13,
      { duration: 1 }
    );

    // Open popup for selected church
    const marker = markersRef.current.find(m => {
      const pos = m.getLatLng();
      return pos.lat === selectedChurch.coordinates.lat && pos.lng === selectedChurch.coordinates.lng;
    });

    if (marker) {
      marker.openPopup();
    }
  }, [selectedChurch]);

  // Update user location marker
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove existing user marker
    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
      userMarkerRef.current = null;
    }

    // Add user location marker if available
    if (userLocation) {
      const marker = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
        .addTo(mapRef.current)
        .bindPopup('<strong>Your Location</strong>');
      
      userMarkerRef.current = marker;
    }
  }, [userLocation]);

  return (
    <div 
      ref={mapContainerRef} 
      className="h-96 w-full rounded-lg"
      style={{ minHeight: '400px' }}
    />
  );
}
