import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import L from 'leaflet';
import 'leaflet-extra-markers';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap, useMapEvents, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css';

// Fix default icon paths for markers
delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

const customExtraMarker = L.ExtraMarkers.icon({
    icon: 'fa-number',
    number: 'W',
    markerColor: 'green',
    shape: 'penta',
    prefix: 'fa'
});

const containerStyle = {
    height: "100%",
    width: "100%"
}

const cityPosition = [49.8954, -97.1384];
// const cityPosition = { lat: 49.8954, lng: -97.1384 };

const PreviewMap = () => {

    const cityMarkerRef = useRef(null);

    const [currentPosition, setCurrentPosition] = useState(cityPosition);

    const CityMarker = () => {

        return (
            <Marker
                position={cityPosition}
                ref={cityMarkerRef}
                icon={customExtraMarker}
            >
                <Popup>Welcome to Winnipeg!</Popup>
            </Marker>
        )
    }

    return (
        <MapContainer
            center={currentPosition}
            zoom={13}
            style={containerStyle}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Winnipeg City marker */}
            <CityMarker />

        </MapContainer>
    )
}
export default PreviewMap;