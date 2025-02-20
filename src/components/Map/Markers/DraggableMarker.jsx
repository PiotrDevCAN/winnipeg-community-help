import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet';

const DraggableMarker = ({ position, onDraggable, onDragend }) => {
    const [draggable, setDraggable] = useState(false)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    onDragend(marker.getLatLng())
                }
            },
        }),
        [onDragend],
    )
    const toggleDraggable = useCallback(() => {
        onDraggable();
        setDraggable((d) => !d)
    }, [onDraggable])

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
            <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                    {draggable
                        ? 'Click on the map to set desired location'
                        : 'Click here to make marker draggable'}
                </span>
            </Popup>
        </Marker>
    )
}
export default DraggableMarker;