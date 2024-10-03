import {useEffect, useRef, useState} from "react";
import {FeatureGroup, LayersControl, MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {HeatmapLayerFactory} from "@vgrid/react-leaflet-heatmap-layer";

const generatePollutionDataForMarseille = (latMin: number, latMax: number, lonMin: number, lonMax: number, gridSize: number) => {
    const points = [];
    const latStep = (latMax - latMin) / gridSize;
    const lonStep = (lonMax - lonMin) / gridSize;

    for (let lat = latMin; lat <= latMax; lat += latStep) {
        for (let lon = lonMin; lon <= lonMax; lon += lonStep) {
            const pollutionLevel = Math.random() * 100;
            points.push([lat, lon, pollutionLevel]);
        }
    }
    return points;
};

const SimpleMap = () => {
    const mapRef = useRef(null);
    const [heatMapData, setHeatMapData] = useState<any[]>([]);

    const latitude = 43.2965;
    const longitude = 5.3698;

    const HeatmapLayer = HeatmapLayerFactory<[number, number, number]>();

    const bounds = L.latLngBounds([43.1, 5.1], [43.5, 5.6]);

    const pollutionData = generatePollutionDataForMarseille(43.1, 43.5, 5.1, 5.6, 100);

    useEffect(() => {
        setHeatMapData(pollutionData);
    }, []);

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            maxZoom={13}
            minZoom={13}
            maxBounds={bounds}
            maxBoundsViscosity={1.0}
            ref={mapRef}
            style={{height: "100vh", width: "100vw"}}
            scrollWheelZoom={true}
            touchZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap | CartoDB</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            />

            <LayersControl position="topright">
                <LayersControl.Overlay name="Pollution Heatmap" checked>
                    <FeatureGroup pathOptions={{color: "purple"}}>
                        <HeatmapLayer
                            fitBoundsOnLoad
                            fitBoundsOnUpdate
                            points={heatMapData}
                            longitudeExtractor={(m) => m[1]}
                            latitudeExtractor={(m) => m[0]}
                            intensityExtractor={(m) => parseFloat(m[2].toString())}
                            radius={25}
                            blur={18}
                            maxZoom={15}
                            opacity={0.6}
                        />
                    </FeatureGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    );
};

export default SimpleMap;
