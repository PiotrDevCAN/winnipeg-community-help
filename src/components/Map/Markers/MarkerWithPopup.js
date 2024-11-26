import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const MarkerWithPopup = ({ position, label }) => {
    const map = useMap();

    useEffect(() => {
        const marker = L.marker(position).addTo(map);
        marker.bindPopup(label).openPopup();

        return () => {
            map.removeLayer(marker);
        };
    }, [map, position, label]);

    return null;
};
export default MarkerWithPopup;