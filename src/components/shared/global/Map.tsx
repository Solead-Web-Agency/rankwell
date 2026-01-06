/**
 * MAP - Composant carte Leaflet réutilisable
 * Affiche une carte OpenStreetMap centrée sur des coordonnées
 */

'use client';

import 'leaflet/dist/leaflet.css';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import L from 'leaflet';

// Fix pour l'icône marker de Leaflet en Next.js
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  markerLabel?: string;
  className?: string;
}

const Map = ({
  latitude,
  longitude,
  zoom = 15,
  markerLabel,
  className = 'h-full w-full',
}: MapProps) => {
  if (typeof window === 'undefined') return null;

  const position: [number, number] = [latitude, longitude];

  return (
    <MapContainer className={className} center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={markerIcon}>
        {markerLabel && <Popup>{markerLabel}</Popup>}
      </Marker>
    </MapContainer>
  );
};

Map.displayName = 'Map';
export default Map;
