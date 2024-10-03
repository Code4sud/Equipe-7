import {useRef} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const SimpleMap = () => {
    const mapRef = useRef(null);
    const latitude = 43.2965;
    const longitude = 5.3698;

    const bounds = L.latLngBounds(
        [43.1, 5.1],
        [43.5, 5.6]
    );

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            minZoom={13}
            maxBounds={bounds}
            maxBoundsViscosity={1.0}
            ref={mapRef}
            style={{height: "100vh", width: "100vw"}}
            scrollWheelZoom={true}
            touchZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default SimpleMap;
