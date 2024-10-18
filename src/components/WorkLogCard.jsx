import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

// Parent Component that handles the state for the select
const ParentComponent = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Week');

  // Dummy data for each period
  const data = {
    "This Week": { value: 75, label: "5w: 2d" },
    "This Month": { value: 60, label: "20w: 10d" },
    "This Year": { value: 90, label: "240w: 180d" },
  };

  return (
    <div className="flex justify-center items-center h-screen mt-[-340px]">
      <WorkLogCard
        title="Tasks"
        selectedPeriod={selectedPeriod}
        onPeriodChange={setSelectedPeriod}
        data={data[selectedPeriod]}
      />
    </div>
  );
};

// WorkLogCard Component
const WorkLogCard = ({ selectedPeriod, onPeriodChange, data, stats }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 w-60 relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Header with Title */}
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-xs font-semibold mr-16 whitespace-nowrap">Total work done</h2>
        <select
          className="bg-blue-50 text-blue-600 text-[10px] py-1 rounded-lg cursor-pointer outline-none "
          value={selectedPeriod}
          onChange={(e) => onPeriodChange(e.target.value)} // Pass the selected value back to the parent
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      {/* Circular Progress Bar */}
      <div className="flex justify-center mb-4">
        <CircularProgressbar
          value={data.value} // Value based on selected period
          text={data.label} // Label based on selected period
          styles={buildStyles({
            pathColor: "#3b82f6", // Blue color for progress
            textColor: "#000000", // Text color for the middle value
            trailColor: "#d1d5db", // Gray trail for the uncompleted part
          })}
        />
      </div>

      {/* Statistics Label */}
      <div className="text-center text-gray-500">
        <p>{stats}</p>
      </div>
    </motion.div>
  );
};

WorkLogCard.propTypes = {
  stats: PropTypes.string.isRequired,
  selectedPeriod: PropTypes.string.isRequired,
  onPeriodChange: PropTypes.func.isRequired,
  data: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default ParentComponent;
