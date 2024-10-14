import { useState } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import adoddle1 from "../assets/images/adoddle1.svg";
import adoddle2 from "../assets/images/adoddle2.svg";
import adoddle3 from "../assets/images/adoddle3.svg";
import adoddle4 from "../assets/images/adoddle4.svg";
import adoddleIcon from "../assets/icons/adoddleIcon.svg";
import hourglass from "../assets/icons/hourglass.svg";
import issuesIcon from "../assets/icons/issuesIcon.svg";

const ProjectCard = ({description, to, move}) => {
  const [hoveredAvatar, setHoveredAvatar] = useState(null);
  const [hoveredStatus, setHoveredStatus] = useState(false);
  const [hoveredIssues, setHoveredIssues] = useState(false);

  const avatars = [
    { id: 1, name: "John Doe", image: adoddle1 },
    { id: 2, name: "Jane Smith", image: adoddle2 },
    { id: 3, name: "Sam Wilson", image: adoddle3 },
    { id: 4, name: "Chris Evans", image: adoddle4 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 pb-0 max-w-sm">
      {/* Header */}
      <div className="flex justify-between items-start p-2 mb-4 border-b-2 border-gray-600">
        <Link to={move}>
          <h2 className="text-2xl font-semibold">
            Adoddle
            <span className="inline-block ml-2 text-gray-500">
              <img src={adoddleIcon} alt="adoddleIcon" />
            </span>
          </h2>
        </Link>
        <span
          className="text-sm bg-red-100 text-red-500 py-1 px-3 rounded-lg relative cursor-pointer"
          onMouseEnter={() => setHoveredStatus(true)}
          onMouseLeave={() => setHoveredStatus(false)}
        >
          Offtrack
          {hoveredStatus && (
            <div className="absolute right-0 top-8 bg-red-300 text-white text-xs rounded-lg py-1 px-2">
              Project is currently offtrack due to pending tasks.
            </div>
          )}
        </span>
      </div>

      {/* Description */}
          <Link to={to}>
            <p className="text-gray-600 mb-4 text-justify tracking-[-2px]">{description}</p>
          </Link>
      {/* Footer with date, avatars, and issues */}
      <div className="flex items-center">
        {/* Date */}
        <div className="flex items-center text-red-500 text-sm">
          <img src={hourglass} alt="hourglass" className="mr-2" />
          05 APRIL 2023
        </div>
      </div>
      {/* Team Avatars */}
      <div className="flex justify-between mt-2">
        <div className="flex -space-x-2">
          {avatars.map((avatar) => (
            <div
              key={avatar.id}
              onMouseEnter={() => setHoveredAvatar(avatar.id)}
              onMouseLeave={() => setHoveredAvatar(null)}
              className="relative"
            >
              <img
                src={avatar.image}
                alt={avatar.name}
                className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition-transform duration-300"
              />
              {/* Hover tooltip */}
              {hoveredAvatar === avatar.id && (
                <div className="absolute left-0 bottom-10 bg-gray-800 text-white text-xs rounded-lg py-1 px-2">
                  {avatar.name}
                </div>
              )}
            </div>
          ))}
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 border-2 border-white text-gray-500">
            +2
          </div>
        </div>

        {/* Issues */}
        <div
          className="flex items-center text-gray-500 text-sm relative cursor-pointer"
          onMouseEnter={() => setHoveredIssues(true)}
          onMouseLeave={() => setHoveredIssues(false)}
        >
          <img src={issuesIcon} alt="issuesIcon" className="mr-1"/>
          14 issues
          {hoveredIssues && (
            <div className="absolute left-0 bottom-8 bg-red-300 text-white text-xs rounded-lg py-1 px-2">
              There are 14 unresolved issues.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Define propTypes to validate props
ProjectCard.propTypes = {
  description: PropTypes.string.isRequired, // Mark 'description' as a required string
  to: PropTypes.string.isRequired, // Mark 'description' as a required string
  move: PropTypes.string.isRequired, // Mark 'description' as a required string
};


export default ProjectCard;
