'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

type Coords = [number, number];

interface MapProps {
  coords: Coords;
  popup: string;
}

function Map({ coords, popup }: MapProps) {
  const icon = new Icon({
    iconUrl: iconMarker.src,
    iconShadow: iconShadow.src,
  });

  return (
    <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker position={coords} icon={icon} alt={popup}>
        <Popup>{popup}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
