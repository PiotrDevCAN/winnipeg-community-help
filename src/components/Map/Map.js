import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import L from 'leaflet';
import 'leaflet-extra-markers';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap, useMapEvents, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css';

// Fix default icon paths for markers
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

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

const fetchLocationFromAPI = async () => {
    try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        return [data.latitude, data.longitude];
    } catch (error) {
        console.error("Failed to fetch location from IP API:", error);
        return null;
    }
}

const fetchLocationFromCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error),
            { enableHighAccuracy: true }
        );
    });
};

const Map = () => {

    const cityMarkerRef = useRef(null);
    const locationMarkerRef = useRef(null);

    const [currentPosition, setCurrentPosition] = useState(cityPosition);
    const [isRealLocation, setIsRealLocation] = useState(null);

    const RecenterMap = ({ center }) => {
        const map = useMap();
        useEffect(() => {
            console.log('RecenterMap');
            map.setView(center);
        }, [center, map]);
        return null;
    }

    const CityMarker = () => {

        return (
            <Marker
                position={cityPosition}
                ref={cityMarkerRef}
                // eventHandlers={{
                //     add: () => {
                //         if (cityMarkerRef.current && !cityMarkerRef.current.isPopupOpen()) {
                //             cityMarkerRef.current.openPopup();
                //         }
                //     },
                // }}
                icon={customExtraMarker}
            >
                <Popup>Welcome to Winnipeg!</Popup>
            </Marker>
        )
    }
    const CurrentLocationMarker = () => {

        return currentPosition === null || isRealLocation === null ? null : (
            <Marker
                position={currentPosition}
                ref={locationMarkerRef}
                // eventHandlers={{
                //     add: () => {
                //         if (locationMarkerRef.current && !locationMarkerRef.current.isPopupOpen()) {
                //             locationMarkerRef.current.openPopup();
                //         }
                //     },
                // }}
            >
                <Popup>You are here!</Popup>
            </Marker>
        )
    }

    const MapClickHandler = () => {
        useMapEvents({
            click(position) {
                const location = position.latlng;
                setCurrentPosition(location);
                setIsRealLocation(true);
            },
        });
    }

    /*
    trigger MAP locate
    */
    const LocationFinder = () => {
        const map = useMap();
        useEffect(() => {
            map.locate({ setView: true, maxZoom: 16 }); // Trigger geolocation
        }, [map]);
    }

    const LocationFoundHandler = (location, isReal) => {
        setCurrentPosition(location);
        setIsRealLocation(isReal);
    }

    const BindLocationEvents = () => {
        useMapEvents({
            locationfound: (location) => {
                console.log('Location found:', location.latlng);
                // setCurrentPosition(location.latlng);
                // setIsRealLocation(true); // Update state with user's location
                LocationFoundHandler(location.latlng, true);
                //   map.flyTo(e.latlng, map.getZoom()); // Move map to user's location
            },
            locationerror: (e) => {
                console.error('Location error:', e.message);
                alert('Could not find your location.');
                // setIsRealLocation(false);
                LocationFoundHandler(null, false);
            },
        });
    }

    useEffect(() => {

        /*
        return location from API
        */
        const fetchLocation = async (callback) => {
            if (navigator.geolocation) {
                try {
                    const position = await fetchLocationFromCurrentPosition();
                    const coords = position.coords;
                    const { latitude, longitude } = coords;
                    const location = [
                        latitude,
                        longitude
                    ];

                    console.log('fetchLocationFromCurrentPosition FINISHED');
                    console.log(location);

                    // we can also set currentPosition right away
                    callback(location);
                } catch (err) {
                    // setError(err.message);
                }
            } else {
                try {
                    console.log("Geolocation is not supported by this browser.");
                    const location = await fetchLocationFromAPI();

                    console.log('fetchLocationFromAPI FINISHED');
                    console.log(location);

                    // we can also set currentPosition right away
                    callback(location);
                } catch (err) {
                    // setError(err.message);
                }
            }
        };

        fetchLocation((location) => {
            console.log('Read Location:', location);

            setCurrentPosition(location);
            setIsRealLocation(true);

            // RecenterMap(location);
        });

    }, []);

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

            {/* Current location marker */}
            <CurrentLocationMarker />

            {/* Recenter the map to new position */}
            <RecenterMap center={currentPosition} />

            {/* Update position when clicked on map */}
            <MapClickHandler />

            {/* Add location methods */}
            {/* <BindLocationEvents /> */}

            {/* Handle with obtaining a current location */}
            {/* <LocationFinder /> */}

        </MapContainer>
    )
}
export default Map;