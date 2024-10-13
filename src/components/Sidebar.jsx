import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import navlogo from "../assets/images/navlogo.svg";
import projectIcon from "../assets/icons/projectIcon.svg";
import settingsIcon from "../assets/icons/settingsIcon.svg";
import workLogsIcon from "../assets/icons/workLogsIcon.svg";
import tasksIcon from "../assets/icons/tasksIcon.svg";
import performanceIcon from "../assets/icons/performanceIcon.svg";
import userAvatar from "../assets/icons/userAvatar.svg";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // Handles setting the active item
  const handleClick = (item) => {
    setActiveItem(item);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col max-w-full mx-auto">
      {/* Navbar */}
      <nav className="bg-white shadow-md w-full px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 focus:outline-none md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M3 5h14M3 10h14M3 15h14" clipRule="evenodd" />
            </svg>
          </button>
          <img src={navlogo} alt="Logo" className="h-8 ml-4" />
          <h1 className="text-xl font-bold text-gray-800 ml-2">AProjectO</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for anything..."
            className="border border-gray-300 rounded-sm py-2 px-4 text-sm w-72 hidden md:block"
          />
          <div className="ml-6 flex items-center">
            <div className="flex-col">
              <span className="text-gray-600 text-sm mr-4">Anisa Agrawal</span>
              <br />
              <span className="text-gray-600 text-sm ml-8">U.P, India</span>
            </div>
            <img src={userAvatar} alt="User Avatar" className="h-10 w-10 rounded-full border border-gray-300" />
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-white text-grey-500 w-64 z-10 fixed inset-y-0 left-0 transform md:static md:translate-x-0 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:block`}
        >
          <div className="py-4">
            <ul>
              {/* Project */}
              <li
                onClick={() => handleClick("projects")}
                className={`px-6 py-3 cursor-pointer transition-colors duration-200 ${
                  activeItem === "projects" ? "bg-[#F0F6FF] rounded-lg py-[2px] mx-[10px]" : "hover:bg-[#F0F6FF] rounded-lg py-[2px] mx-[10px]"
                }`}
              >
                <Link to="/project" className="inline-flex items-center">
                  <img src={projectIcon} alt="Project Icon" />
                  <span>Project</span>
                </Link>
              </li>

              {/* Tasks */}
              <li
                onClick={() => handleClick("tasks")}
                className={`px-6 py-3 cursor-pointer transition-colors duration-200 ${
                  activeItem === "tasks" ? "bg-[#F0F6FF] rounded-lg py-[2px] mx-[10px]" : "hover:bg-[#F0F6FF] rounded-lg py-[2px] mx-[10px]"
                }`}
              >
                <Link to="/tasks" className="inline-flex items-center">
                  <img src={tasksIcon} alt="Tasks Icon" />
                  <span>Tasks</span>
                </Link>
              </li>

              {/* Work Logs */}
              <li
                onClick={() => handleClick("workLogs")}
                className={`px-6 py-3 cursor-pointer transition-colors duration-200 ${
                  activeItem === "workLogs" ? "bg-[#F0F6FF] rounded-lg py-[2px] mx-[10px]" : "hover:bg-[#F0F6FF] rounded-lg py-[2px] mx-[10px]"
                }`}
              >
                <Link to="/" className="inline-flex items-center">
                  <img src={workLogsIcon} alt="Work Logs Icon" />
                  <span>Work Logs</span>
                </Link>
              </li>

              {/* Performance */}
              <li
                onClick={() => handleClick("performance")}
                className={`px-6 py-3 cursor-pointer transition-colors duration-200 ${
                  activeItem === "performance" ? "bg-[#F0F6FF] rounded-lg py-[2px] mx-[10px]" : "hover:bg-[#F0F6FF] rounded-lg py-[2px] mx-[10px]"
                }`}
              >
                <Link to="/create" className="inline-flex items-center">
                  <img src={performanceIcon} alt="Performance Icon" />
                  <span>Performance</span>
                </Link>
              </li>

              {/* Settings */}
              <li
                onClick={() => handleClick("settings")}
                className={`px-6 py-3 cursor-pointer transition-colors duration-200 ${
                  activeItem === "settings" ? "bg-[#F0F6FF] rounded-lg py-[2px] mx-[10px]" : "hover:bg-[#F0F6FF] rounded-lg py-[2px] mx-[10px]"
                }`}
              >
                <Link to="/" className="inline-flex items-center">
                  <img src={settingsIcon} alt="Settings Icon" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
