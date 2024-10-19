import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PerformanceCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");

  // Different datasets for each time period
  const dataThisWeek = [
    { name: "Oct 2021", achieved: 2, target: 3 },
    { name: "Nov 2021", achieved: 4, target: 4 },
    { name: "Dec 2021", achieved: 5, target: 6 },
    { name: "Jan 2022", achieved: 3, target: 5 },
    { name: "Feb 2022", achieved: 6, target: 7 },
    { name: "Mar 2022", achieved: 7, target: 8 },
    { name: "Apr 2022", achieved: 8, target: 9 },
  ];

  const dataThisMonth = [
    { name: "Week 1", achieved: 15, target: 18 },
    { name: "Week 2", achieved: 18, target: 20 },
    { name: "Week 3", achieved: 20, target: 22 },
    { name: "Week 4", achieved: 22, target: 24 },
  ];

  const dataThisYear = [
    { name: "Jan", achieved: 10, target: 12 },
    { name: "Feb", achieved: 12, target: 14 },
    { name: "Mar", achieved: 16, target: 18 },
    { name: "Apr", achieved: 20, target: 22 },
    { name: "May", achieved: 18, target: 20 },
    { name: "Jun", achieved: 22, target: 25 },
    { name: "Jul", achieved: 24, target: 28 },
    { name: "Aug", achieved: 28, target: 30 },
    { name: "Sep", achieved: 30, target: 32 },
    { name: "Oct", achieved: 32, target: 34 },
    { name: "Nov", achieved: 34, target: 36 },
    { name: "Dec", achieved: 36, target: 38 },
  ];

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
    <>
     <div className="p-4 md:p-6 flex flex-col font-nunito">
     <div className="flex justify-between items-start mb-6">
      <h4 className="text-2xl font-semibold text-gray-900 mb-2 flex items-start">Performance</h4>
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

      {/* Line Chart */}
      <div className="">
        <ResponsiveContainer width="100%" height={265}>
          <LineChart data={getChartData()} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal="false"/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" align="right" height={36} iconType="circle" />
            <Line
              type="monotone"
              dataKey="achieved"
              stroke="#f87171"
              dot={false}
              strokeWidth={3}
              activeDot={{ r: 8 }}
              animationDuration={2000} // Smooth animation
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#3b82f6"
              dot={false}
              strokeWidth={3}
              animationDuration={2000} // Smooth animation
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
     </div>
    </>
  );
};

export default PerformanceCard;