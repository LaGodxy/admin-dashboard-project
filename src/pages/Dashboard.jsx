import plantCareApp from "../assets/images/plantCareApp.svg";
import TaskPieChart from "../components/PieChart";
import PerformanceCard from "../components/PerformanceCard";
import LogCard from "../components/LogCard";

export default function Dashboard() {
  return (
    <div className="containermx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 flex items-start">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg md:col-span-2 md:h-full sm:h-full sm:col-span-2 lg:col-span-1 p-2 lg:h-[450px]">
            <h4 className="text-2xl font-semibold text-gray-900 mb-2 flex items-start">Projects</h4>
            <img src={plantCareApp} alt="plantCareApp" className="" />
          </div>
          <div className="col-span-2">
            <TaskPieChart/>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow rounded-lg p-2 mt-0 md:col-span-2 sm:col-span-2 lg:col-span-1">
            <LogCard /> 
          </div>
          {/* Card 4 */}
          <div className="bg-white shadow rounded-lg p-2 col-span-2 md:h-full sm:h-full">
            <PerformanceCard/>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
}
