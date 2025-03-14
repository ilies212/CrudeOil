import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useInView } from 'react-intersection-observer';

// Fix for default marker icons
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const locations = [
  {
    name: 'London HQ',
    position: [51.5074, -0.1278],
    description: 'Global Headquarters'
  },
  {
    name: 'Geneva Office',
    position: [46.2044, 6.1432],
    description: 'European Trading Hub'
  },
  {
    name: 'Singapore Office',
    position: [1.3521, 103.8198],
    description: 'Asian Operations Center'
  }
];

const customMapStyle = {
  styles: [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
    }
  ]
};

const GlobalPresence = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Global Presence
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Strategic locations serving the global energy market
          </p>
        </div>

        <div className={`transform transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <MapContainer
              center={[30, 0]}
              zoom={2}
              style={{ height: '100%', width: '100%' }}
              className="map-material"
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              {locations.map((location, index) => (
                <Marker key={index} position={location.position}>
                  <Popup className="custom-popup">
                    <div className="p-3">
                      <h3 className="font-bold text-lg text-blue-900">{location.name}</h3>
                      <p className="text-gray-600">{location.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;