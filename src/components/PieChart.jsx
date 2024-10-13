import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

export default function TaskPieChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");
  const [activeIndex, setActiveIndex] = useState(null);

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
    <div className="flex flex-col bg-white shadow-lg items-center justify-center mb-6">
      <div className="flex justify-between items-center w-full px-8 mb-4"> {/* Flexbox for header and select alignment */}
        <h4 className="text-2xl font-semibold text-gray-900">Tasks</h4>
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

      {/* Pie Chart Section */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={getChartData()}
            cx="50%" // Centered the pie chart horizontally
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {getChartData().map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#fff"
                strokeWidth={activeIndex === index ? 3 : 1}  // Thicker border on hover
                style={{
                  transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)', // Scale effect on hover
                  transition: 'all 0.3s ease', // Smooth animation
                }}
              />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconType="square"
            wrapperStyle={{
              right: '10%',
              marginTop: '-20px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
