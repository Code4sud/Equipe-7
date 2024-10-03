import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2018', SO2: 4.82, NO: 44.16, NO2: 46.47, NOx: 114.29, PM10: 42.00 },
  { year: '2019', SO2: 2.21, NO: 10.92, NO2: 32.03, NOx: 48.80, PM10: 26.90 },
  { year: '2020', SO2: 2.15, NO: 8.84, NO2: 29.11, NOx: 42.67, PM10: 27.19, PM2_5: 11.86 },
  { year: '2021', SO2: 1.46, NO: 11.56, NO2: 31.28, NOx: 49.00, PM10: 16.73, PM2_5: 10.64, PM1: 6.67 },
  { year: '2022', SO2: 1.47, NO: 10.18, NO2: 32.42, NOx: 48.02, PM10: 19.25, PM2_5: 10.33, PM1: 7.58 },
  { year: '2023', SO2: 1.45, NO: 11.29, NO2: 32.71, NOx: 50.01, PM10: 21.82, PM2_5: 13.72, PM1: 11.80 },
];

const PollutionChart = () => {
  return (
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
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="SO2" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="NO" stroke="#82ca9d" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="NO2" stroke="#ffc658" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="NOx" stroke="#ff8042" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="PM10" stroke="#0088fe" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="PM2_5" stroke="#A52A2A" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="PM1" stroke="#ff0000" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PollutionChart;