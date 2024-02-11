import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const RatingChart = ({ data }) => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data
        .map((point, index) => ({ name: index, uv: point[3] }))
        .slice(0, Math.min(30, data.length))}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#000" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default RatingChart;
