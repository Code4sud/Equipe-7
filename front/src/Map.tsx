import {useEffect, useRef, useState} from "react";
import {FeatureGroup, Popup, Circle, MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Map } from "leaflet";
import {PolluantsList, data} from "./data"


const SimpleMap = () => {
    const mapRef = useRef<Map>(null);
    const [indexCurrentData, setIndexCurrentData] = useState(0);
    const [ color, setColor] = useState('')

    const latitude = 43.2965;
    const longitude = 5.3698;

    const bounds = L.latLngBounds([43.1, 5.1], [43.5, 5.6]);

    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
      ];
      
    const colors = [
        "#00FF00", // Vert (très faible pollution)
        "#7FFF00",
        "#ADFF2F",
        "#FFFF00", // Jaune (pollution modérée)
        "#FFD700",
        "#FFA500",
        "#FF8C00",
        "#FF4500",
        "#FF0000", // Rouge (pollution élevée)
        "#8B0000"  // Rouge foncé (pollution très élevée)
      ];

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

    const getColorFromGradient = (value: number): string => {
        const idx = Math.floor(value/6);

        if(idx > 9) return colors[9];
        else if(idx < 0) return colors[0];
        return colors[idx];
    };

    const formatDate = (dateStr: string): string => {
        const [year, month] = dateStr.split("-");
        const monthIndex = parseInt(month) - 1;
        
        return `${months[monthIndex]} ${year}`;
    };

    const [ date, setDate ] = useState(formatDate(data.at(indexCurrentData)!.date))

    useEffect(() => {
        setDate(formatDate(data[indexCurrentData].date))
        // Logique pour mettre à jour la couleur en fonction des taux de pollution
        const currentPollutionData: PolluantsList = data[indexCurrentData]?.pollutants;

        if (currentPollutionData) {
            // Utilisation d'une moyenne simple des baselines pour déterminer la couleur
            const totalPollution =
                    currentPollutionData.SO2?.baseline +
                    currentPollutionData.NO?.baseline +
                    currentPollutionData.NO2?.baseline +
                    currentPollutionData.NOx?.baseline +
                    currentPollutionData.PM10?.baseline +
                    currentPollutionData.PM25?.baseline;

            // Trouver une couleur appropriée dans le gradient
            const newColor = getColorFromGradient(totalPollution);
            setColor(newColor);
        }
    }, [indexCurrentData]);

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

            <FeatureGroup pathOptions={{ color: color, fillColor: color, fillOpacity: 0.6 }}>
                <Popup>Popup in FeatureGroup</Popup>
                <Circle center={[43.2965, 5.3698]} radius={5000} />
            </FeatureGroup>
            <div
                className="absolute bottom-4 translate-x-1/2 w-1/2 z-[1000]"
            >
                <div className="flex flex-col justify-center items-center gap-4">
                    <input
                        className="w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[25px] [&::-webkit-slider-thumb]:w-[25px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                        type="range"
                        min="0"
                        max={data.length-1}
                        step="1"
                        value={indexCurrentData}
                        onChange={(e) => setIndexCurrentData(parseInt(e.target.value))}
                        onMouseDown={disableMapInteraction}
                        onMouseUp={enableMapInteraction}
                        onTouchStart={disableMapInteraction}
                        onTouchEnd={enableMapInteraction}
                    />
                    <p className="bg-white bg-opacity-70 rounded-lg py-2 px-4 text-xl">{ date }</p>
                </div>
            </div>
        </MapContainer>
    );
};

export default SimpleMap;
