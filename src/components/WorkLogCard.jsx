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
    <div className="flex justify-center items-center h-screen">
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
const WorkLogCard = ({ title, selectedPeriod, onPeriodChange, data }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 w-60 relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Header with Title */}
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-lg font-semibold mr-10">{title}</h2>
        <select
          className="bg-blue-50 text-blue-600 text-sm py-1 px-3 rounded-lg cursor-pointer outline-none mr-8"
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
        <p>stats</p>
      </div>
    </motion.div>
  );
};

WorkLogCard.propTypes = {
  title: PropTypes.string.isRequired,
  selectedPeriod: PropTypes.string.isRequired,
  onPeriodChange: PropTypes.func.isRequired,
  data: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default ParentComponent;
