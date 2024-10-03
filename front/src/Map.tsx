import {useEffect, useRef, useState} from "react";
import {FeatureGroup, Popup, Circle, MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Map } from "leaflet";
import {HeatmapLayerFactory} from "@vgrid/react-leaflet-heatmap-layer";

const generatePollutionData = (
    latMin: number,
    latMax: number,
    lonMin: number,
    lonMax: number,
    gridSize: number,
    pollutionType: "road" | "air",
    year: number
) => {
    const points = [];
    const latStep = (latMax - latMin) / gridSize;
    const lonStep = (lonMax - lonMin) / gridSize;

    const cityCenterLat = 43.2965;
    const cityCenterLon = 5.3698;

    const yearFactor = 1 - (year - 2018) * 0.05;

    for (let lat = latMin; lat <= latMax; lat += latStep) {
        for (let lon = lonMin; lon <= lonMax; lon += lonStep) {
            const distanceFromCenter = Math.sqrt(
                Math.pow(lat - cityCenterLat, 2) + Math.pow(lon - cityCenterLon, 2)
            );

            const basePollutionLevel =
                pollutionType === "road"
                    ? Math.random() * 70 * (1 / (1 + distanceFromCenter))
                    : Math.random() * 100 * (1 / (1 + distanceFromCenter));

            const pollutionLevel = basePollutionLevel * yearFactor;

            const noise = (Math.random() - 0.5) * 10;

            points.push([lat, lon, pollutionLevel + noise]);
        }
    }
    return points;
};


const SimpleMap = () => {
    const mapRef = useRef<Map>(null);
    const [heatMapDataRoad, setHeatMapDataRoad] = useState<any[]>([]);
    const [heatMapDataAir, setHeatMapDataAir] = useState<any[]>([]);
    const [roadOpacity, setRoadOpacity] = useState(0.5);
    const [airOpacity, setAirOpacity] = useState(0.5);
    const [selectedYear, setSelectedYear] = useState(2023);

    const latitude = 43.2965;
    const longitude = 5.3698;

    const HeatmapLayer = HeatmapLayerFactory<[number, number, number]>();

    const bounds = L.latLngBounds([43.1, 5.1], [43.5, 5.6]);

    useEffect(() => {
        const roadData = generatePollutionData(43.1, 43.5, 5.1, 5.6, 100, "road", selectedYear);
        const airData = generatePollutionData(43.1, 43.5, 5.1, 5.6, 100, "air", selectedYear);

        setHeatMapDataRoad(roadData);
        setHeatMapDataAir(airData);
    }, [selectedYear]);

    const roadHeatmapGradient = {
        0.0: "#FF0000",
        0.2: "#FFA500",
        0.4: "#FFFF00",
        0.6: "#008000",
        0.8: "#0000FF",
        1.0: "#800080",
    };

    const airHeatmapGradient = {
        0.0: "#4B0082",
        0.2: "#8B0000",
        0.4: "#FFA500",
        0.6: "#9ACD32",
        0.8: "#90EE90",
        1.0: "#ADD8E6",
    };

    const disableMapInteraction = () => {
        if (mapRef.current) {
            const map = mapRef.current;
            map.dragging.disable();
            map.touchZoom.disable();
            map.doubleClickZoom.disable();
            map.scrollWheelZoom.disable();
            map.boxZoom.disable();
            map.keyboard.disable();
        }
    };

    const enableMapInteraction = () => {
        if (mapRef.current) {
            const map = mapRef.current;
            map.dragging.enable();
            map.touchZoom.enable();
            map.doubleClickZoom.enable();
            map.scrollWheelZoom.enable();
            map.boxZoom.enable();
            map.keyboard.enable();
        }
    };

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            maxZoom={13}
            minZoom={13}
            maxBounds={bounds}
            maxBoundsViscosity={1.0}
            ref={mapRef}
            style={{height: "100%", width: "100%"}}
            scrollWheelZoom={false}
            touchZoom={false}
            bounds={bounds}
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap | CartoDB</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            />

            <FeatureGroup pathOptions={{ color: 'green', fillColor: 'green' }}>
                <Popup>Popup in FeatureGroup</Popup>
                <Circle center={[43.2965, 5.3698]} radius={200} />
            </FeatureGroup>
            <div
                style={{
                    position: "absolute",
                    transform: "translateX(50%)",
                    width: "50%",
                    bottom: 10,
                    zIndex: 1000,
                    backgroundColor: "#ffffff77",
                    borderRadius: "5px",
                    padding: "10px",
                }}
                onMouseDown={disableMapInteraction}
                onMouseUp={enableMapInteraction}
                onTouchStart={disableMapInteraction}
                onTouchEnd={enableMapInteraction}
            >
                <div style={{marginBottom: "10px"}}>
                    <label style={{display: "block", marginBottom: "5px"}}>Date: </label>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={roadOpacity}
                        onChange={(e) => setRoadOpacity(parseFloat(e.target.value))}
                        style={{width: "100%"}}
                    />
                </div>
            </div>
        </MapContainer>
    );
};

export default SimpleMap;
