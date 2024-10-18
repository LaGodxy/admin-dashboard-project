import { Link } from 'react-router-dom';
import plantCareApp from "../assets/images/plantCareApp.svg";
import TasksChart from "../components/TasksChart";
import PerformanceCard from "../components/PerformanceCard";
import WorkLogChart from "../components/WorkLogChart";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
    <h1 className="text-xl font-bold mb-6">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
        <div className="flex gap-4">
          <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
          <Link to="/dashboard/project">
            <img src={plantCareApp} alt="Project" className="w-full h-auto object-cover rounded-md" />
            </Link>
          </div>
        </div>
      </div>
      <Link to="/dashboard/project">
        <TasksChart />
      </Link>

      <Link to="/dashboard/notification">
        <WorkLogChart />
      </Link>

      <Link to="/dashboard/performance">
        <PerformanceCard />
      </Link>

    </div>
  </div>
   
  );
}
