import {useEffect, useRef, useState} from "react";
import {FeatureGroup, LayersControl, MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {HeatmapLayerFactory} from "@vgrid/react-leaflet-heatmap-layer";

const generatePollutionData = (
    latMin: number,
    latMax: number,
    lonMin: number,
    lonMax: number,
    gridSize: number,
    pollutionType: "road" | "air"
) => {
    const points = [];
    const latStep = (latMax - latMin) / gridSize;
    const lonStep = (lonMax - lonMin) / gridSize;

    for (let lat = latMin; lat <= latMax; lat += latStep) {
        for (let lon = lonMin; lon <= lonMax; lon += lonStep) {
            const pollutionLevel = pollutionType === "road" ? Math.random() * 70 : Math.random() * 100;
            points.push([lat, lon, pollutionLevel]);
        }
    }
    return points;
};

const SimpleMap = () => {
    const mapRef = useRef(null);
    const [heatMapDataRoad, setHeatMapDataRoad] = useState<any[]>([]);
    const [heatMapDataAir, setHeatMapDataAir] = useState<any[]>([]);
    const [roadOpacity, setRoadOpacity] = useState(0.5);
    const [airOpacity, setAirOpacity] = useState(0.5);

    const latitude = 43.2965;
    const longitude = 5.3698;

    const HeatmapLayer = HeatmapLayerFactory<[number, number, number]>();

    const bounds = L.latLngBounds([43.1, 5.1], [43.5, 5.6]);

    useEffect(() => {
        const roadData = generatePollutionData(43.1, 43.5, 5.1, 5.6, 100, "road");
        const airData = generatePollutionData(43.1, 43.5, 5.1, 5.6, 100, "air");

        setHeatMapDataRoad(roadData);
        setHeatMapDataAir(airData);
    }, []);

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
                <LayersControl.Overlay name="Road Pollution Heatmap" checked>
                    <FeatureGroup pathOptions={{color: "purple"}}>
                        <HeatmapLayer
                            points={heatMapDataRoad}
                            longitudeExtractor={(m) => m[1]}
                            latitudeExtractor={(m) => m[0]}
                            intensityExtractor={(m) => parseFloat(m[2].toString())}
                            radius={25}
                            blur={18}
                            maxZoom={13}
                            opacity={roadOpacity}
                            gradient={roadHeatmapGradient}
                        />
                    </FeatureGroup>
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Air Pollution Heatmap" checked>
                    <FeatureGroup pathOptions={{color: "purple"}}>
                        <HeatmapLayer
                            points={heatMapDataAir}
                            longitudeExtractor={(m) => m[1]}
                            latitudeExtractor={(m) => m[0]}
                            intensityExtractor={(m) => parseFloat(m[2].toString())}
                            radius={25}
                            blur={18}
                            maxZoom={13}
                            opacity={airOpacity}
                            gradient={airHeatmapGradient}
                        />
                    </FeatureGroup>
                </LayersControl.Overlay>
            </LayersControl>

            <div
                style={{
                    position: "absolute",
                    top: 10,
                    left: "10%",
                    transform: "translateX(-50%)",
                    zIndex: 1000,
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                }}
            >
                <div style={{marginBottom: "10px"}}>
                    <label style={{display: "block", marginBottom: "5px"}}>Road Heatmap Opacity: </label>
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

                <div>
                    <label style={{display: "block", marginBottom: "5px"}}>Air Heatmap Opacity: </label>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={airOpacity}
                        onChange={(e) => setAirOpacity(parseFloat(e.target.value))}
                        style={{width: "100%"}}
                    />
                </div>
            </div>
        </MapContainer>
    );
};

export default SimpleMap;
