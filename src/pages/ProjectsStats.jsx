import PerformanceCard from "../components/PerformanceCard";
import PieChart from "../components/PieChart";
import ProjectSec from "../components/ProjectSec";


const projects = [
    { name: 'Emo stuff', image: emoStuff, description: 'Project A details...' },
    { name: 'Tim Burton', image: timBurton, description: 'Project B details...' },
    { name: 'Halloween!', image: halloween, description: 'Project C details...' },
    { name: 'Spooky Art', image: spookyArt, description: 'Project C details...' },
    { name: 'Dark Art', image: darkArt, description: 'Project C details...' },
    { name: 'Gothic art', image: gothicArt, description: 'Project C details...' },
    { name: '-happy :3', image: happy, description: 'Project C details...' },
    { name: '*V4MPYR*', image: v4mpyr, description: 'Project C details...' },
    { name: '|<3 Art', image: art, description: 'Project C details...' },
    
  ];
const ProjectsStats = () => {
    return (
        <>
            <div className="h-screen p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    
                    {/* PieChart (2 columns) */}
                    <div className="lg:col-span-2">
                        <PieChart />
                    </div>
                    
                    {/* PerformanceCard (2 columns) */}
                    <div className="lg:col-span-2">
                        <PerformanceCard />
                    </div>
                    
                    {/* Right Side Projects & Developer Info (1 column) */}
                    <div className="lg:col-span-1">
                      <ProjectSec/>
                    </div>

                    {/* UI Developers (4 columns, below PieChart and PerformanceCard) */}
                    <div className="lg:col-span-4 bg-white mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold text-lg">UI Developers</h2>
                            <button className="text-blue-500">View all</button>
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-7 gap-2">
                        {developers.slice(0, 9).map((project, index) => (
                            <div
                            key={index}
                            className="text-center cursor-pointer">
                            <img className="w-12 h-12 rounded-md" src={developers.image} alt={developers.name} />
                            <p className="text-[9px] mt-2 flex items-start whitespace-nowrap">{developers.name}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsStats;
