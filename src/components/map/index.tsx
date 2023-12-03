import { useEffect } from 'react';
import mapIcon from '../../assets/images/icon-location.svg';
import { MapOptions, latLng, map, tileLayer, marker, icon } from 'leaflet';

const MapDiv = ({
  mapApiKey,
  lat,
  lng,
}: {
  mapApiKey: string;
  lat: number;
  lng: number;
}) => {
  useEffect(() => {
    const options: MapOptions = {
      center: latLng(lat, lng),
      zoom: 12,
    };

    const mymap = map('map', options);
    tileLayer(
      `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${mapApiKey}`,
      {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution:
          '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
        crossOrigin: true,
      }
    ).addTo(mymap);

    const cutsomIcon = icon({
      iconUrl: mapIcon,
      iconSize: [46, 56],
      iconAnchor: [23, 56],
    });

    marker([lat, lng], { icon: cutsomIcon }).addTo(mymap);

    // Cleanup function to remove the map on component unmount
    return () => {
      mymap.remove();
    };
  }, [mapApiKey, lat, lng]);

  return (
    <div id="map" className="h-full flex-[2]" style={{ height: '400px' }} />
  );
};

export default MapDiv;
