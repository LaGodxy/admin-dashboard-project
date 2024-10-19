import addodleAvatar from "../assets/images/addodleAvatar.svg";
import comments from "../assets/icons/Comments.svg";
import light from "../assets/icons/light.svg";
import PerformanceCard from "../components/PerformanceCard";
import WorkLogChart from "../components/WorkLogChart";
import Pagination from "../components/Pagination";

const tasks = [
  {
    id: 1,
    title: "Make an Automatic Payment System that enable the design",
    opened: "#402235 opened 10 days ago by Yash Ghari",
    status: "Cancelled",
    completion: "Completed",
    startDate: "25/3/2023",
    endDate: "25/3/2023",
    timeSpent: "view",
    avatar: addodleAvatar,
  },
  {
    id: 2,
    title: "Make an Automatic Payment System that enable the design",
    opened: "#402235 opened 10 days ago by Yash Ghari",
    timeSpent: "view",
    avatar: addodleAvatar,
  },
];

const Performance = () => {
  const routesForPerformance = ['/dashboard/performance', '/dashboard/project-addodle', '/dashboard/tasksaddodle'];

  return (
    <>
      <div className="h-screen p-4 md:p-8">
        <p className="font-nunito">Performance Report</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* PieChart (2 columns) */}
          <div className="lg:col-span-2 bg-white shadow-lg">
            <PerformanceCard />
          </div>

          {/* worklog */}
          <div className="lg:col-span-2 bg-white shadow-lg">
            <WorkLogChart />
          </div>
        </div>
        {/* Task Container */}
        <div className="p-6 mb-12 mt-8 overflow-x-hidden md:overflow-x-auto">
          <div className="w-full sm:min-w-[900px]">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center space-x-4 mb-4">
                <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-xl p-4 w-full justify-between items-start sm:items-center">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center">
                      <img src={light} alt="Light" className="mr-2" />
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold font-montserrat">{task.title}</p>
                        <div className="flex flex-col sm:flex-row text-xs space-x-2">
                          <p className="text-gray-500 font-roboto">{task.opened}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="flex font-semibold bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      {task.timeSpent}
                    </span>
                    <img
                      src={task.avatar}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <img
                      src={comments}
                      alt="Comments"
                      className="w-5 h-5 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Pagination routes={routesForPerformance}/>
        </div>
      </div>
    </>
  );
};

export default Performance;
