import { Link } from 'react-router-dom';
import plantCareApp from "../assets/images/plantCareApp.svg";
import TasksChart from "../components/TasksChart";
import PerformanceCard from "../components/PerformanceCard";
import WorkLogChart from "../components/WorkLogChart";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Projects Card */}
        <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Projects</h2>
          <div className="flex-grow flex items-center justify-center">
            <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
              <Link to="/dashboard/project">
                <img src={plantCareApp} alt="Project" className="w-full h-auto object-cover rounded-md" />
              </Link>
            </div>
          </div>
        </div>

        {/* Tasks Chart */}
        <Link to="/dashboard/project" className="h-full">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <TasksChart />
          </div>
        </Link>

        {/* Work Log Chart */}
        <Link to="/dashboard/notification" className="h-full">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <WorkLogChart />
          </div>
        </Link>

        {/* Performance Card */}
        <Link to="/dashboard/performance" className="h-full">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <PerformanceCard />
          </div>
        </Link>
      </div>
    </div>
  );
}
