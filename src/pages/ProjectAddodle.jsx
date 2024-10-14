import adoddle1 from "../assets/images/adoddle1.svg";
import adoddle2 from "../assets/images/adoddle2.svg";
import adoddle3 from "../assets/images/adoddle3.svg";
import adoddle4 from "../assets/images/adoddle4.svg";
import userAvatar from "../assets/icons/userAvatar.svg";
import addodleAvatar from "../assets/images/addodleAvatar.svg";
import comments from "../assets/icons/comments.svg";
import calender from "../assets/icons/calender.svg";
import taskIcon from "../assets/icons/taskIcon.svg";
import fileIcon from "../assets/icons/fileIcon.svg";
import clockLoader from "../assets/icons/clockLoader.svg";
import light from "../assets/icons/light.svg";
import { FaArrowRightLong } from 'react-icons/fa6';
import { useState } from 'react';

const ProjectAddodle = () => {
  const [hoveredAvatar, setHoveredAvatar] = useState(null);

  const tasks = [
    {
      id: 1,
      title: 'Make an Automatic Payment System that enable the design',
      opened: '#402235 opened 10 days ago by Yash Ghari',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      timeSpent: '00:30:00',
      avatar: addodleAvatar,
    },
    {
      id: 2,
      title: 'Make an Automatic Payment System that enable the design',
      opened: '#402235 opened 10 days ago by Yash Ghari',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      timeSpent: '00:30:00',
      avatar: addodleAvatar,
    },
    {
      id: 3,
      title: 'Make an Automatic Payment System that enable the design',
      opened: '#402235 opened 10 days ago by Yash Ghari',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      timeSpent: '00:30:00',
      avatar: addodleAvatar,
    },
    {
      id: 4,
      title: 'Make an Automatic Payment System that enable the design',
      opened: '#402235 opened 10 days ago by Yash Ghari',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      timeSpent: '00:30:00',
      avatar: addodleAvatar,
    },
    {
      id: 5,
      title: 'Make an Automatic Payment System that enable the design',
      opened: '#402235 opened 10 days ago by Yash Ghari',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      timeSpent: '00:30:00',
      avatar: addodleAvatar,
    },
    {
      id: 6,
      title: 'Make an Automatic Payment System that enable the design',
      opened: '#402235 opened 10 days ago by Yash Ghari',
      status: 'Cancelled',
      completion: 'Completed',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      timeSpent: '00:30:00',
      avatar: addodleAvatar,
    },
    // more tasks...
  ];

  const avatars = [
    { id: 1, name: "John Doe", image: adoddle1 },
    { id: 2, name: "Jane Smith", image: adoddle2 },
    { id: 3, name: "Sam Wilson", image: adoddle3 },
    { id: 4, name: "Chris Evans", image: adoddle4 },
  ];

  return (
    <div className="p-4 sm:p-6 h-screen">
      <div className="">
        {/* Breadcrumb and Project Header */}
        <div className="mb-6">
          <p className="text-gray-500 text-xs sm:text-sm">Projects / Addodle</p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl sm:text-3xl font-bold">Addodle</h2>
              <div className="flex items-center space-x-2 mt-2">
                {/* Team Avatars */}
                <div className="flex items-center space-x-3">
                  <img src={userAvatar} alt="User Avatar" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <FaArrowRightLong className="text-gray-500 w-3 h-3 sm:w-4 sm:h-4" />
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
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white hover:scale-110 transition-transform duration-300"
                        />
                        {hoveredAvatar === avatar.id && (
                          <div className="absolute left-0 bottom-8 sm:bottom-10 bg-gray-800 text-white text-xs rounded-lg py-1 px-2">
                            {avatar.name}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-red-100 border-2 border-white text-gray-500">
                      +2
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-600 text-xs sm:text-sm rounded-full">OnTrack</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-4 sm:mt-0 md:flex-row">
              <div className="flex flex-col items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <p className="text-gray-700 text-sm">Time spent</p>
                <span className="flex font-bold px-2 py-1 bg-green-100 text-green-600 text-xs sm:text-sm rounded-full">
                  <img src={clockLoader} alt="Clock" className="mr-1" /> 2M : 0W : 0D
                </span>
              </div>
              <div className="flex flex-col items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <p className="text-gray-700 text-sm">Deadline</p>
                <span className="flex font-bold px-2 py-1 bg-green-100 text-green-600 text-xs sm:text-sm rounded-full">
                  <img src={clockLoader} alt="Clock" className="mr-1" /> 6M : 0W : 0D
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Task Container */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 overflow-x-hidden md:overflow-x-auto">
        <div className="w-full sm:min-w-[900px]">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-4 mb-4">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-[#85C5A2]" 
                style={{ accentColor: '#85C5A2', color:'white'}}/>
              <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-xl p-4 w-full justify-between items-start sm:items-center">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center">
                    <img src={light} alt="Light" className="mr-2" />
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">{task.title}</p>
                      <div className="flex flex-col sm:flex-row text-xs space-x-2">
                        <p className="text-gray-500">{task.opened}</p>
                        <span className={`px-2 py-1 my-4 rounded-full text-center lg:m-0 ${task.status === 'Cancelled' ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-600'}`}>
                          {task.status}
                        </span>
                        <span className="px-2 py-1 my-4 bg-green-100 text-green-600 rounded-full text-center lg:m-0">{task.completion}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start text-gray-500">
                    <p>Start Date</p>
                    <p className="flex items-center"><img src={calender} alt="Calendar" className="mr-2" /> {task.startDate}</p>
                  </div>

                  <div className="flex flex-col items-start text-gray-500">
                    <p>End Date</p>
                    <p className="flex items-center"><img src={calender} alt="Calendar" className="mr-2" /> {task.endDate}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="flex font-semibold bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    <img src={clockLoader} alt="Clock" className="mr-2" /> {task.timeSpent}
                  </span>
                  <img src={task.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                  <img src={comments} alt="Comments" className="w-5 h-5 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
          </div>
           {/* Footer Information */}
        <div className="flex justify-end text-gray-500 text-xs sm:text-sm mt-6">
          <p className="flex mr-6">
            <img src={taskIcon} alt="Tasks Icon" className="mr-1" /> 50 tasks
          </p>
          <p className="flex">
            <img src={fileIcon} alt="Files Icon" className="mr-1" /> 15 files
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAddodle;
