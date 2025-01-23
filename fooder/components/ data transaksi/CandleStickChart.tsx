import { ResponsiveContainer, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from "recharts";

const data = [
  { name: "Mon", open: 1200, close: 1600, high: 1700, low: 1150 },
  { name: "Tue", open: 1550, close: 1400, high: 1600, low: 1300 },
  { name: "Wed", open: 1400, close: 1500, high: 1550, low: 1350 },
  { name: "Thu", open: 1500, close: 1650, high: 1700, low: 1450 },
  { name: "Fri", open: 1650, close: 1600, high: 1680, low: 1580 },
];

const CandlestickChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="low" fill="#F45846" />
        <Bar  dataKey="high" fill="#48BB78" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CandlestickChart;
