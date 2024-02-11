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
        .map((point, index) => ({ day: index, rating: point[3] }))
        .slice(0, Math.min(30, data.length))}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="rating" stroke="#000" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default RatingChart;
