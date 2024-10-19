import PerformanceCard from "../components/PerformanceCard";
import TasksChart from "../components/TasksChart";
import ProjectSec from "../components/ProjectSec";
import Group1 from "../assets/images/Group1.svg";
import Group2 from "../assets/images/Group2.svg";
import Group3 from "../assets/images/Group3.svg";
import Group4 from "../assets/images/Group4.svg";
import Group5 from "../assets/images/Group5.svg";
import Group6 from "../assets/images/Group6.svg";
import Group7 from "../assets/images/Group7.svg";
import Group21 from "../assets/images/Group21.svg";
import Group22 from "../assets/images/Group22.svg";
import Group23 from "../assets/images/Group23.svg";
import Group24 from "../assets/images/Group24.svg";
import Group25 from "../assets/images/Group25.svg";
import Group26 from "../assets/images/Group26.svg";
import Group27 from "../assets/images/Group27.svg";
import Pagination from "../components/Pagination";




const developers = [
    { image: Group1 },
    { image: Group2 },
    { image: Group3 },
    { image: Group4 },
    { image: Group5 },
    { image: Group6 },
    { image: Group7 },
    { image: Group21 },
    { image: Group22 },
    { image: Group23 },
    { image: Group24 },
    { image: Group25 },
    { image: Group26 },
    { image: Group27 },
    { image: Group21 },
    { image: Group22 },
    { image: Group23 },
    { image: Group24 },
    { image: Group25 },
    { image: Group26 },
    { image: Group27 },
    
  ];
const ProjectsStats = () => {
    const routesForProjectStats = ['/dashboard/projects-stats', '/dashboard/project', '/dashboard/project-completed'];
    return (
        <>
            <div className="h-screen p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    
                    {/* PieChart (2 columns) */}
                    <div className="lg:col-span-2 bg-white shadow-lg">
                        <TasksChart />
                    </div>
                    
                    {/* PerformanceCard (2 columns) */}
                    <div className="lg:col-span-2 h-[415px] bg-white rounded-lg shadow-lg">
                        <PerformanceCard />
                    </div>
                    
                    {/* Right Side Projects & Developer Info (1 column) */}
                    <div className="lg:col-span-1 h-full">
                      <ProjectSec/>
                    </div>

                    {/* UI Developers (4 columns, below PieChart and PerformanceCard) */}
                    <div className="lg:col-span-4 bg-white mb-6 p-6 shadow-lg rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold text-lg">UI Developers</h2>
                            <button className="text-blue-500">View all</button>
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-2">
                        {developers.slice(0, 21).map((developers, index) => (
                            <div
                            key={index}
                            className="text-center cursor-pointer">
                            <img className="w-12 h-12 rounded-md" src={developers.image} alt={developers.name} />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <Pagination routes={routesForProjectStats}/>
                </div>
            </div>
        </>
    );
};

export default ProjectsStats;
