import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type DataPoint = {
  year: string;
  SO2: number;
  NO: number;
  NO2: number;
  NOx: number;
  PM10: number;
  PM2_5?: number;
  PM1?: number;
};

type ParticleKey = keyof Omit<DataPoint, 'year'>;

const data: DataPoint[] = [
  { year: '2018', SO2: 4.82, NO: 44.16, NO2: 46.47, NOx: 114.29, PM10: 42.00 },
  { year: '2019', SO2: 2.21, NO: 10.92, NO2: 32.03, NOx: 48.80, PM10: 26.90 },
  { year: '2020', SO2: 2.15, NO: 8.84, NO2: 29.11, NOx: 42.67, PM10: 27.19, PM2_5: 11.86 },
  { year: '2021', SO2: 1.46, NO: 11.56, NO2: 31.28, NOx: 49.00, PM10: 16.73, PM2_5: 10.64, PM1: 6.67 },
  { year: '2022', SO2: 1.47, NO: 10.18, NO2: 32.42, NOx: 48.02, PM10: 19.25, PM2_5: 10.33, PM1: 7.58 },
  { year: '2023', SO2: 1.45, NO: 11.29, NO2: 32.71, NOx: 50.01, PM10: 21.82, PM2_5: 13.72, PM1: 11.80 },
];

const particleExplanations: Record<ParticleKey, string> = {
  SO2: "Le dioxyde de soufre (SO2) montre une tendance à la baisse de 2018 à 2023, passant de 4.82 à 1.45 µg/m³. Cette diminution pourrait être attribuée à des réglementations plus strictes sur les émissions industrielles et l'utilisation de carburants à faible teneur en soufre.",
  NO: "Le monoxyde d'azote (NO) a connu une forte baisse entre 2018 et 2019, passant de 44.16 à 10.92 µg/m³. Depuis, les niveaux fluctuent autour de 10-11 µg/m³, ce qui pourrait indiquer des efforts soutenus pour réduire les émissions des véhicules et de l'industrie.",
  NO2: "Le dioxyde d'azote (NO2) a diminué de 46.47 µg/m³ en 2018 à 32.71 µg/m³ en 2023. Cette baisse progressive pourrait être le résultat de l'amélioration des technologies de contrôle des émissions dans les transports et l'industrie.",
  NOx: "Les oxydes d'azote (NOx) ont connu une forte baisse entre 2018 et 2019, passant de 114.29 à 48.80 µg/m³. Depuis, les niveaux sont restés relativement stables, oscillant autour de 50 µg/m³, ce qui suggère un maintien des efforts de réduction des émissions.",
  PM10: "Les particules PM10 ont montré une tendance générale à la baisse, passant de 42.00 µg/m³ en 2018 à 21.82 µg/m³ en 2023. Cette amélioration pourrait être due à des mesures de contrôle de la pollution plus efficaces et à la modernisation des équipements industriels et des véhicules.",
  PM2_5: "Les données pour les particules PM2.5 ne sont disponibles qu'à partir de 2020. On observe une légère augmentation de 11.86 µg/m³ en 2020 à 13.72 µg/m³ en 2023. Cette tendance mérite une surveillance continue et pourrait nécessiter des mesures supplémentaires pour réduire ces émissions fines.",
  PM1: "Les particules PM1, les plus fines, ne sont mesurées que depuis 2021. On constate une augmentation de 6.67 µg/m³ en 2021 à 11.80 µg/m³ en 2023. Cette hausse significative est préoccupante et pourrait indiquer la nécessité de nouvelles stratégies pour contrôler ces particules ultrafines."
};

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{content}</p>
        <button
          onClick={onClose}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

const PollutionChart: React.FC = () => {
  const [selectedParticle, setSelectedParticle] = useState<ParticleKey | null>(null);

  const handleClick = (dataKey: ParticleKey) => {
    setSelectedParticle(dataKey);
  };

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis 
            label={{ 
              value: 'µg/m³', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle' }
            }}
          />
          <Tooltip />
          <Legend 
            onClick={(e) => {
              if (e && e.dataKey) {
                handleClick(e.dataKey as ParticleKey);
              }
            }}
            formatter={(value, entry) => (
              <span style={{ color: entry.color, cursor: 'pointer' }}>{value}</span>
            )}
          />
          {(Object.keys(particleExplanations) as ParticleKey[]).map((key) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={getColor(key)}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <CustomDialog
        isOpen={selectedParticle !== null}
        onClose={() => setSelectedParticle(null)}
        title={selectedParticle || ''}
        content={selectedParticle ? particleExplanations[selectedParticle] : ''}
      />
    </>
  );
};

function getColor(key: ParticleKey): string {
  const colors: Record<ParticleKey, string> = {
    SO2: "#8884d8",
    NO: "#82ca9d",
    NO2: "#FF0000",
    NOx: "#ff8042",
    PM10: "#0088fe",
    PM2_5: "#A52A2A",
    PM1: "#FFBB28"
  };
  return colors[key];
}

export default PollutionChart;