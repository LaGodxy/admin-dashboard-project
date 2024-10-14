import { Link } from 'react-router-dom';
import plantCareApp from "../assets/images/plantCareApp.svg";
import TaskPieChart from "../components/PieChart";
import PerformanceCard from "../components/PerformanceCard";
import LogCard from "../components/LogCard";

export default function Dashboard() {
  return (
    <div className="containermx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-2">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 flex items-start">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-3xl md:col-span-2 md:h-full sm:h-full sm:col-span-2 lg:col-span-1 p-2">
            <h4 className="text-2xl font-semibold text-gray-900 mb-2 flex items-start h-fit">Projects</h4>
            <Link to="/dashboard/project">
              <img src={plantCareApp} alt="plantCareApp" className="flex items-center" />
            </Link>
          </div>
          
          <div className="col-span-2">
            <Link to="/dashboard/project">
              <TaskPieChart/>
            </Link>
          </div>
          
          {/* Card 3 */}
          <div className="p-2 mt-0 md:col-span-2 sm:col-span-2 lg:col-span-1">
            <Link to="/dashboard/notification">
              <LogCard /> 
            </Link>
            
          </div>
          {/* Card 4 */}
          <div className="p-2 col-span-2 md:h-full sm:h-full">
          <Link to="/dashboard/performance">
            <PerformanceCard/>
          </Link>
          
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
}
