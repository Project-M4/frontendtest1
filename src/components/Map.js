import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import Information from './Information';
import SearchBar from './SearchBar';
const Map = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedLocationId, setSelectedLocationId] = useState(null); // Add this line

  
  const markers = [
    {
      name: 'Lubbock',
      temperature: 25,
      siteType: 'Landfill',
      latitude: 33.673388,
      longitude:  -101.852624,
      methane: 1889,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: 'https://www.google.com/maps/place/Museum+of+Texas+Tech+University/@33.5923684,-101.8787293,13.68z/data=!4m6!3m5!1s0x86fe12a657e418af:0xee27097fbb2add08!8m2!3d33.5906441!4d-101.8858761!16s%2Fm%2F04f49zg?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
      locationId: 'lubbock',

 
    },
    {
      name: 'Big Spring',
      temperature: 25,
      siteType: 'gas plant',
      latitude: 32.514825,
      longitude:-101.522698,
      methane: 1920,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: "https://www.google.com/maps/place/32%C2%B030'53.4%22N+101%C2%B031'21.7%22W/@32.5149701,-101.5249759,432m/data=!3m1!1e3!4m4!3m3!8m2!3d32.514825!4d-101.522698?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
      locationId: 'big-spring',

 
    },

{
      name: 'EnLink Plant',
      temperature: 25,
      siteType: 'gas plant',
      latitude: 32.165056,
      longitude: -102.225389,
      methane: 1929,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: 'https://www.google.com/maps/place/EnLink+Midstream+MidMar+West+Plant/@32.1650552,-102.2356886,3119m/data=!3m1!1e3!4m12!1m5!3m4!2zMzLCsDA5JzU0LjIiTiAxMDLCsDEzJzMxLjQiVw!8m2!3d32.1650556!4d-102.2253889!3m5!1s0x86fbe890773d335b:0xf2786e9339d1ca22!8m2!3d32.1641669!4d-102.2249999!16s%2Fg%2F11ddzhy7cy?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D',
      locationId: 'enlink-plant',
 
    },
{
      name: 'Midland School District',
      temperature: 25,
      siteType: 'gas feilds',
      latitude: 31.879855,
      longitude:-102.229780,
      methane: 1927,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: "https://www.google.com/maps/place/31%C2%B052'47.5%22N+102%C2%B013'47.2%22W/@31.8758981,-102.1933463,2088m/data=!3m1!1e3!4m4!3m3!8m2!3d31.879855!4d-102.22978?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
      locationId: 'midland-school-district',

 
    },
{
      name: '14401 FM 3503 Midland',
      temperature: 25,
      siteType: 'gas plant',
      latitude: 31.784043,
      longitude: -102.248992,
      methane: 1910,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: "https://www.google.com/maps/place/31%C2%B047'02.6%22N+102%C2%B014'56.4%22W/@31.7825583,-102.2510511,1296m/data=!3m1!1e3!4m4!3m3!8m2!3d31.784043!4d-102.248992?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
      locationId: '14401-fm-3503-midland',

 
    },
{
      name: 'ETC gas fieldpipeline',
      temperature: 25,
      siteType: 'gas fields/pipeline',
      latitude: 31.841815,
      longitude: -103.319630,
      methane: 1989,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: "https://www.google.com/maps/place/31%C2%B050'30.5%22N+103%C2%B019'10.7%22W/@31.8339733,-103.3183396,4571m/data=!3m1!1e3!4m4!3m3!8m2!3d31.8418056!4d-103.3196389?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
      locationId: 'etc-gas-fieldpipeline',

 
    },
{
      name: 'Kinetik Pecos Plant',
      temperature: 25,
      siteType: 'gas fields/pipeline',
      latitude: 31.330043,
      longitude: -103.505639,
      methane: 1905,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: "https://www.google.com/maps/place/31%C2%B019'48.2%22N+103%C2%B030'20.3%22W/@31.3312023,-103.50641,939m/data=!3m1!1e3!4m4!3m3!8m2!3d31.330043!4d-103.505639?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
      locationId: 'kinetik-pecos-plant',

 
    },
{
      name: '9201 Farm Rd',
      temperature: 25,
      siteType: 'gas fields/pipeline',
      latitude: 35.645328,
      longitude: -101.425803,
      methane: 1893,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: "https://www.google.com/maps/place/35%C2%B038'43.2%22N+101%C2%B025'32.9%22W/@35.6450594,-101.4292365,1271m/data=!3m1!1e3!4m4!3m3!8m2!3d35.645328!4d-101.425803?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
      locationId: '9201-farm-rd',

 
    },
{
      name: 'Van Horn Texas',
      temperature: 25,
      siteType: 'gas fields/pipeline',
      latitude: 31.428996,
      longitude: -104.720228,
      methane: 1890,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: "https://www.google.com/maps/place/31%C2%B025'44.4%22N+104%C2%B043'12.8%22W/@31.4286162,-104.7237507,1119m/data=!3m1!1e3!4m4!3m3!8m2!3d31.428996!4d-104.720228?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
      locationId:  'van-horn-texas',

 
    },
{
      name: 'Reagan County gas fields',
      temperature: 25,
      siteType: 'gas fields/pipeline',
      latitude: 31.4497512,
      longitude: -101.4656298,
      methane: 1914,
      aeroselHeight: 3000.32,
      dew: -5.5,
      humidity: 68.4,
      windSpeed: 14.2,
      seaLevelPressure: 1024 ,
      uvIndex: 6,
      gmapsLink: "https://www.google.com/maps/place/31%C2%B026'44.9%22N+101%C2%B027'44.7%22W/@31.4497512,-101.4656298,3438m/data=!3m1!1e3!4m4!3m3!8m2!3d31.445806!4d-101.462403?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
      locationId:  'reagan-county-gas-fields',
 
    },
    // Add more markers to this array
  ];
  const normalIcon = L.icon({
    iconUrl: '/marker.png',
    iconSize: [20, 20],
    iconAnchor: [10, 0],
  });

  const selectedIcon = L.icon({
    iconUrl: '/heatmap.png', // assuming selected-marker.png is in the public folder
    iconSize: [200, 200],
    iconAnchor: [100, 70],
  });

  const onSelectMarker = (marker) => {
    setSelectedMarker(marker);
    setSelectedLocationId(marker.locationId);


    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([marker.latitude, marker.longitude], 15, {
        duration: 2, // 2 seconds
      });
  
      
    }
  };

  useEffect(() => {
    
    if (mapRef.current && !mapInstanceRef.current) {
      const map = L.map(mapRef.current).setView([33.5778, -101.8553], 6);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);
  
      mapInstanceRef.current = map;
  
      markers.forEach((marker) => {
        marker.markerInstance = L.marker([marker.latitude, marker.longitude], { icon: normalIcon }).addTo(map);
        marker.markerInstance.bindPopup(marker.name);
      
        // Add a click event listener to each marker
        marker.markerInstance.on('click', () => {
          onSelectMarker(marker);
        });
      });
  
      map.on('zoomend', () => {
        const currentZoom = map.getZoom();
        if (currentZoom >= 15) { // adjust the zoom level to your liking
          markers.forEach((marker) => {
            marker.markerInstance.setIcon(selectedIcon);
          });
        } else {
          markers.forEach((marker) => {
            marker.markerInstance.setIcon(normalIcon);
          });
        }
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