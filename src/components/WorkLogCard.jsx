import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";
// import PropTypes from 'prop-types';


const WorkLogCard = () => {
  const value = 75; // Assuming 75% completion as shown in the circle

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-5 w-64 relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Header with Title */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-semibold">title</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 12h12m-6 6v-12"
            />
          </svg>
        </button>
      </div>

      {/* Circular Progress Bar */}
      <div className="flex justify-center mb-4">
        <CircularProgressbar
          value={value}
          text={"5w: 2d"}
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

// Define propTypes to validate props
// WorkLogCard.propTypes = {
//   description: PropTypes.string.isRequired, // Mark 'description' as a required string
// };

export default WorkLogCard;