import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  TooltipIndex,
} from "recharts";

const data1 = [
  { name: "Maria", age: 10, weight: 60 },
  { name: "Juan", age: 20, weight: 80 },
  { name: "Lucas", age: 25, weight: 90 },
  { name: "Laura", age: 15, weight: 65 },
];

const data2 = [
  { name: "A", value: 2000 },
  { name: "B", value: 5000 },
  { name: "C", value: 1000 },
  { name: "D", value: 25000 },
];

const COLORS = [
  "#ce93d8",
  "#5c6bc0",
  "#b39ddb",
  "#4dd0e1",
  "#f48fb1",
  "#d500f9",
];

export default function BarCharts() {
  return (
    <div style={{marginTop: "20px", display:"flex", flexDirection:"row"}}>
      <ResponsiveContainer width="40%" aspect={2}>
        <BarChart data={data1}>
          <CartesianGrid strokeDasharray="4 1 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="weight" fill="#6b48ff" />
          <Bar dataKey="age" fill="#1ee3cf" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="40%" aspect={2}>
        <AreaChart data={data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="age"
            stackId="1"
            stroke="#8884d8"
            fill="#82caed"
          />
          <Area
            type="monotone"
            dataKey="weight"
            stackId="1"
            stroke="#82caed"
            fill="#fad3cf"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div style={{ width: "400px", height: 500 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={data2}
              cx="50%"
              cy="50%"
              fill="#4ae284ff"
              isAnimationActive={true}
            >
              {data2.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
