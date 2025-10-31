import { Card } from "../ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export function WeeklyScanChart() {
  const data = [
    { day: "Mon", scans: 45 },
    { day: "Tue", scans: 52 },
    { day: "Wed", scans: 38 },
    { day: "Thu", scans: 65 },
    { day: "Fri", scans: 58 },
    { day: "Sat", scans: 42 },
    { day: "Sun", scans: 35 },
  ];

  return (
    <Card className="p-6 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
      <div className="mb-6">
        <h4 className="text-[#2d5a3d] mb-1">Weekly Scan Activity</h4>
        <p className="text-sm text-[#5a8268]">Scans performed this week</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorScans" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7fb093" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#7fb093" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#d4e5d8" />
          <XAxis dataKey="day" stroke="#5a8268" />
          <YAxis stroke="#5a8268" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid #d4e5d8",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Line
            type="monotone"
            dataKey="scans"
            stroke="#7fb093"
            strokeWidth={3}
            dot={{ fill: "#7fb093", r: 5 }}
            activeDot={{ r: 7 }}
            fill="url(#colorScans)"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export function AllergenTypeChart() {
  const data = [
    { name: "Dairy", value: 35, color: "#7fb093" },
    { name: "Gluten", value: 25, color: "#a8c9b4" },
    { name: "Nuts", value: 20, color: "#f59e0b" },
    { name: "Soy", value: 12, color: "#fbbf24" },
    { name: "Eggs", value: 8, color: "#10b981" },
  ];

  return (
    <Card className="p-6 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
      <div className="mb-6">
        <h4 className="text-[#2d5a3d] mb-1">Allergen Distribution</h4>
        <p className="text-sm text-[#5a8268]">Types of allergens detected</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid #d4e5d8",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{ paddingTop: "20px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}

export function FoodCategoryChart() {
  const data = [
    { category: "Snacks", safe: 78, unsafe: 22 },
    { category: "Dairy", safe: 45, unsafe: 55 },
    { category: "Grains", safe: 92, unsafe: 8 },
    { category: "Proteins", safe: 85, unsafe: 15 },
    { category: "Beverages", safe: 88, unsafe: 12 },
  ];

  return (
    <Card className="p-6 bg-white/50 backdrop-blur-xl border-white/60 shadow-lg">
      <div className="mb-6">
        <h4 className="text-[#2d5a3d] mb-1">Food Categories</h4>
        <p className="text-sm text-[#5a8268]">Safety by category</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d4e5d8" />
          <XAxis dataKey="category" stroke="#5a8268" />
          <YAxis stroke="#5a8268" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid #d4e5d8",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Legend />
          <Bar dataKey="safe" fill="#10b981" radius={[8, 8, 0, 0]} />
          <Bar dataKey="unsafe" fill="#ef4444" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
