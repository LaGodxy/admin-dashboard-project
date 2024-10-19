import { useState } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const dataThisWeek = [
  { name: 'Completed', value: 300 },
  { name: 'On Hold', value: 380 },
  { name: 'On Progress', value: 210 },
  { name: 'Pending', value: 300 },
];

const dataThisMonth = [
  { name: 'Completed', value: 500 },
  { name: 'On Hold', value: 150 },
  { name: 'On Progress', value: 320 },
  { name: 'Pending', value: 200 },
];

const dataThisYear = [
  { name: 'Completed', value: 1000 },
  { name: 'On Hold', value: 400 },
  { name: 'On Progress', value: 600 },
  { name: 'Pending', value: 500 },
];

const COLORS = ['#625ED7', '#238899', '#D32C20', '#1464BF'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function TasksChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");

  // Function to get the right data based on selected period
  const getChartData = () => {
    switch (selectedPeriod) {
      case "This Week":
        return dataThisWeek;
      case "This Month":
        return dataThisMonth;
      case "This Year":
        return dataThisYear;
      default:
        return dataThisWeek;
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col w-full">
      <div className="flex justify-between items-center w-full mb-4 px-2 sm:px-6">
        <h2 className="text-lg font-semibold">Tasks</h2>
        <select
          className="bg-blue-50 text-blue-600 text-sm py-1 px-3 rounded-lg cursor-pointer outline-none"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="w-full h-full flex justify-center">
        {/* Responsive Pie Chart with Legend */}
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={getChartData()}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="80%"
              fill="#8884d8"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {getChartData().map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#fff"
                />
              ))}
            </Pie>

            {/* Legend with improved spacing for small screens */}
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              iconType="square"
              wrapperStyle={{ paddingTop: 10, fontSize: '12px' }}
              formatter={(value, entry) => (
                <span style={{ color: entry.color }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
