import { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

// Data for the PieChart
const dataThisWeek = [
  { name: 'Product 1', value: 200 },
  { name: 'Product 2', value: 200 },
  { name: 'Product 3', value: 300 },
  { name: 'Product 4', value: 600 },
  { name: 'Product 5', value: 100 },
];

const dataThisMonth = [
  { name: 'Product 1', value: 500 },
  { name: 'Product 2', value: 150 },
  { name: 'Product 3', value: 320 },
  { name: 'Product 4', value: 200 },
  { name: 'Product 5', value: 400 },
];

const dataThisYear = [
  { name: 'Product 1', value: 1000 },
  { name: 'Product 2', value: 400 },
  { name: 'Product 3', value: 600 },
  { name: 'Product 4', value: 500 },
  { name: 'Product 5', value: 300 },
];

// Define the colors for the PieChart
const COLORS = ['#FF4F4F', '#00C49F', '#FFBB28', '#FF8042', '#0088FE'];

const LogCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");

  // Function to get the chart data based on the selected period
  const getChartData = () => {
    switch (selectedPeriod) {
      case "This Month":
        return dataThisMonth;
      case "This Year":
        return dataThisYear;
      default:
        return dataThisWeek;
    }
  };

  const renderCustomLegend = () => {
    return (
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-2">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-[#ff6384] rounded-full w-2 h-2"></span>
            <span className='text-xs md:text-sm whitespace-nowrap'>Product 1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#36a2eb] rounded-full w-2 h-2"></span>
            <span className='text-xs md:text-sm whitespace-nowrap'>Product 2</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-[#4bc0c0] rounded-full w-2 h-2"></span>
            <span className='text-xs md:text-sm whitespace-nowrap'>Product 4</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#9966ff] rounded-full w-2 h-2"></span>
            <span className='text-xs md:text-sm whitespace-nowrap'>Product 5</span>
          </div>
        </div>
      </div>
    );
  };

  const WorkLogChart = () => {
    return (
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-center w-full">
          <h4 className="text-lg md:text-xl font-semibold text-gray-900">Work Log</h4>
          <select
            className="bg-blue-50 text-blue-600 text-sm py-1 px-3 rounded-md cursor-pointer"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center lg:justify-between lg:items-start">
          {/* Pie chart on the left */}
          <div className="flex-shrink-0">
            <PieChart width={200} height={200} className="md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-auto">
              <Pie
                data={getChartData()}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90} // Adjusted for better layout
                innerRadius={50}
                fill="#8884d8"
              >
                {getChartData().map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>

          {/* Custom Legend on the right */}
          <div className="mt-4 md:mt-16 md:ml-6 lg:ml-10 lg:w-auto lg:flex-shrink lg:flex-wrap">{renderCustomLegend()}</div>
        </div>
      </div>
    );
  };

  return <WorkLogChart />;
};

export default LogCard;
