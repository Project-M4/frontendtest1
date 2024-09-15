import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import Information from './Information';
import SearchBar from './SearchBar';
const Map = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  
  const markers = [
    {
      name: 'Lubbock',
      temperature: 25,
      siteType: 'Landfill',
      latitude: 33.5822,
      longitude: -101.8503,
      methane: 1900,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: 'https://www.google.com/maps/place/Museum+of+Texas+Tech+University/@33.5923684,-101.8787293,13.68z/data=!4m6!3m5!1s0x86fe12a657e418af:0xee27097fbb2add08!8m2!3d33.5906441!4d-101.8858761!16s%2Fm%2F04f49zg?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',

 
    },
    {
      name: 'Midland',
      temperature: 25,
      siteType: 'oil plant',
      latitude: 31.9973,
      longitude: -102.0779,
      methane: 1900,
      aeroselHeight: 3000.32,
      temperature: 0.3,
      dew: -5.5,
      humidity: 68.4,
      windspeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: 'https://www.google.com/maps/place/Museum+of+Texas+Tech+University/@33.5923684,-101.8787293,13.68z/data=!4m6!3m5!1s0x86fe12a657e418af:0xee27097fbb2add08!8m2!3d33.5906441!4d-101.8858761!16s%2Fm%2F04f49zg?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
    },
   
    
    // Add more markers to this array
  ];

  const onSelectMarker = (marker) => {
    setSelectedMarker(marker);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([marker.latitude, marker.longitude], 15, {
        duration: 2, // 2 seconds
      });
    }
  };

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      const map = L.map(mapRef.current).setView([33.5778, -101.8553], 3);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);
  
      mapInstanceRef.current = map;
  
      markers.forEach((marker) => {
  const markerInstance = L.marker([marker.latitude, marker.longitude]).addTo(map);
  markerInstance.bindPopup(marker.name);
  markerInstance.on('click', () => {
    onSelectMarker(marker);
  });
});
    }
  }, [mapRef]);

  return (
       <div>
      <div id="map" ref={mapRef} style={{ height: '100vh', width: '100vw', position:'relative', zIndex:'0'}} />
      <SearchBar />

      <Information markers={markers} selectedMarker={selectedMarker} onSelectMarker={onSelectMarker} />
    </div>
  );
};

export default Map;