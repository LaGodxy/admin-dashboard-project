import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

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
  const [activeIndex, setActiveIndex] = useState(null);

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
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '110px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '300px' }}>
        {/* First row (Product 1 and Product 2) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ backgroundColor: '#FF4F4F', borderRadius: '50%', width: '10px', height: '10px', marginRight: '8px' }}></span>
            <span className='whitespace-nowrap'>Product 1</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ backgroundColor: '#00C49F', borderRadius: '50%', width: '10px', height: '10px', marginRight: '8px' }}></span>
            <span className='whitespace-nowrap'>Product 2</span>
          </div>
        </div>
  
        {/* Second row (Product 3 and Product 4) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ backgroundColor: '#FFBB28', borderRadius: '50%', width: '10px', height: '10px', marginRight: '8px' }}></span>
            <span className='whitespace-nowrap'>Product 4</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ backgroundColor: '#FF8042', borderRadius: '50%', width: '10px', height: '10px', marginRight: '8px' }}></span>
            <span className='whitespace-nowrap'>Product 5</span>
          </div>
        </div>
      </div>
    );
  };
  
  return (
  <>
    <div className="flex flex-col items-center justify-center p-6 w-full h-full bg-white rounded-3xl shadow-lg">
      {/* Header and Select Dropdown */}
      <div className="flex justify-between items-center w-full">
        <h4 className="text-xl font-semibold text-gray-900">Work Log</h4>
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

      {/* Responsive PieChart */}
      <div className="mt-24 w-full mb-20">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={getChartData()}
            cx={94} 
            cy={100} 
            innerRadius={68}
            outerRadius={100}
            fill="#17171d"
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {getChartData().map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke={activeIndex === index ? '#e2cbcb' : '#fff'} // Darker stroke on hover
                strokeWidth={activeIndex === index ? 3 : 1} // Thicker stroke on hover
                style={{
                  transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)', // Slight scale on hover
                  transition: 'all 0.3s ease', // Smooth animation
                }}
              />
            ))}
          </Pie>

          {/* Legend */}
          <Legend
           content={renderCustomLegend}
          />
        </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
    </>
  );
};

export default LogCard;
