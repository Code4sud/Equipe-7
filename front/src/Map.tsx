import {useEffect, useRef, useState} from "react";
import {FeatureGroup, Popup, Circle, MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Map } from "leaflet";
import {PolluantsList, data} from "./data"
import Switcher from "./components/ui/switch";


const SimpleMap = () => {
    const mapRef = useRef<Map>(null);
    const [indexCurrentData, setIndexCurrentData] = useState(0);
    const [isCheckedPlane, setIsCheckedPlane] = useState(true);
    const [isCheckedCar, setIsCheckedCar] = useState(true);
    const [ color, setColor] = useState('')

    const latitude = 43.2965;
    const longitude = 5.3698;

    const bounds = L.latLngBounds([43.1, 5.1], [43.5, 5.6]);

    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
      ];
      
      const colors = [
        "#56C121", "#5CC321", "#62C421", "#68C621", "#6EC821", "#74C921", "#7ACB21", "#80CD21", "#86CF21", "#8CD021",
        "#92D221", "#98D421", "#9ED621", "#A4D821", "#AAD921", "#B0DB21", "#B6DD21", "#BCDF21", "#C2E021", "#C8E221",
        "#CEE421", "#D4E621", "#DAE721", "#E0E921", "#E6EB21", "#ECEC21", "#F2EE21", "#F7F021", "#FBF121", "#FFF201",
        "#FFE602", "#FFDA03", "#FFCE05", "#FFC207", "#FFB609", "#FFAA0A", "#FF9F0C", "#FF930E", "#FF8710", "#FF7B12",
        "#FF6F13", "#FF6315", "#FF5717", "#FF4B19", "#FF3F1B", "#FF331C", "#FF271E", "#FF1B20", "#FF0F22", "#FF0324",
        "#FE2531", "#FE2B33", "#FE3035", "#FE3637", "#FE3C39", "#FE423B", "#FE473D", "#FE4D3F", "#FE5341", "#FE5943",
        "#FE5E45", "#FE6447", "#FE6A49", "#FE704B", "#FE754D", "#FE7C01", "#FE7D0E", "#FE7E1A", "#FE7F27", "#FE8033",
        "#FE813F", "#FE824C", "#FE8358", "#FE8465", "#FE8571", "#FE867E", "#FE878A", "#FE8897", "#FE89A3", "#FE8AAF",
        "#FE8BBC", "#FE8CC8", "#FE8DD5", "#FE8EE1", "#FE8FED", "#FE90FA", "#FF000B", "#FF0411", "#FF0817", "#FF0C1D",
        "#FF1023", "#FF1429", "#FF182F", "#FF1C35", "#FF203B", "#FF2441", "#FF2847", "#FF2C4D", "#FF3053", "#FF3459"
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
        console.log(value);
        const idx = Math.floor(value);

        if(idx > 99) return colors[99];
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
        const currentPollutionData: PolluantsList = data[indexCurrentData];

        if (currentPollutionData) {
            // Utilisation d'une moyenne simple des baselines pour déterminer la couleur
            const totalPollution =
                    (currentPollutionData.SO2?.baseline ?? 0) +
                    (currentPollutionData.NO?.baseline ?? 0) +
                    (currentPollutionData.NO2?.baseline ?? 0) +
                    (currentPollutionData.NOx?.baseline ?? 0) +
                    (currentPollutionData.PM10?.baseline ?? 0) +
                    (currentPollutionData["PM2.5"]?.baseline ?? 0);

            // Trouver une couleur appropriée dans le gradient
            const newColor = getColorFromGradient(totalPollution);
            setColor(newColor);
        }
    }, [indexCurrentData]);

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={11}
            minZoom={11}
            maxZoom={11}
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

            <div className="absolute top-4 right-4 z-[1000]">
                <div className="bg-white bg-opacity-70 rounded-lg p-2 flex gap-2">
                    <div className="flex flex-col justify-between items-end">
                        <p>100</p>
                        <p>50</p>
                        <p>0</p>
                    </div>
                    <div className="bg-gradient w-4 h-40 rounded-md">

                    </div>
                </div>
                    
            </div>

            <div className="absolute bottom-4 left-4 z-[1000] flex gap-4">
                <div className="flex flex-col justify-center items-center gap-2">
                    <label className="bg-white bg-opacity-70 rounded-lg p-2">Trafic aérien</label>
                    <Switcher isChecked={isCheckedPlane} setIsChecked={(value) => {setIsCheckedPlane(value)}}></Switcher>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <label className="bg-white bg-opacity-70 rounded-lg p-2">Trafic routier</label>
                    <Switcher isChecked={isCheckedCar} setIsChecked={(value) => {setIsCheckedCar(value)}}></Switcher>
                </div>
            </div>
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
