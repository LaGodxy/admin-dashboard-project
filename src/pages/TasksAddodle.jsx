import addodleAvatar from "../assets/images/addodleAvatar.svg";
import comments from "../assets/icons/Comments.svg";
import Tasks from "../assets/icons/Tasks.svg";
import clockLoader from "../assets/icons/clockLoader.svg";
import light from "../assets/icons/light.svg";
import Pagination from "../components/Pagination";


const TasksAddodle = () => {
  const routesForTasks = ['/dashboard/tasksaddodle', '/dashboard/project-addodle', '/dashboard/performance'];

  const tasks = [
    {
      id: 1,
      title: "Make an Automatic Payment System that enable the design",
      opened: "#402235 opened 10 days ago by Yash Ghari",
      status: "low",
      completion: "Completed",
      startDate: "25/3/2023",
      endDate: "25/3/2023",
      timeSpent: "00:15:00",
      avatar: addodleAvatar,
    },
    {
      id: 2,
      title: "Make an Automatic Payment System that enable the design",
      opened: "#402235 opened 10 days ago by Yash Ghari",
      status: "low",
      completion: "Completed",
      startDate: "25/3/2023",
      endDate: "25/3/2023",
      timeSpent: "00:30:00",
      avatar: addodleAvatar,
    },
    {
      id: 3,
      title: "Make an Automatic Payment System that enable the design",
      opened: "#402235 opened 10 days ago by Yash Ghari",
      status: "low",
      completion: "Completed",
      startDate: "25/3/2023",
      endDate: "25/3/2023",
      timeSpent: "00:30:00",
      avatar: addodleAvatar,
    },
    {
      id: 4,
      title: "Make an Automatic Payment System that enable the design",
      opened: "#402235 opened 10 days ago by Yash Ghari",
      status: "low",
      completion: "Completed",
      startDate: "25/3/2023",
      endDate: "25/3/2023",
      timeSpent: "00:30:00",
      avatar: addodleAvatar,
    },
    {
      id: 5,
      title: "Make an Automatic Payment System that enable the design",
      opened: "#402235 opened 10 days ago by Yash Ghari",
      status: "high",
      completion: "Completed",
      startDate: "25/3/2023",
      endDate: "25/3/2023",
      timeSpent: "00:30:00",
      avatar: addodleAvatar,
    },
    {
      id: 6,
      title: "Make an Automatic Payment System that enable the design",
      opened: "#402235 opened 10 days ago by Yash Ghari",
      status: "low",
      completion: "Completed",
      startDate: "25/3/2023",
      endDate: "25/3/2023",
      timeSpent: "00:30:00",
      avatar: addodleAvatar,
    },
    {
      id: 7,
      title: "Make an Automatic Payment System that enable the design",
      opened: "#402235 opened 10 days ago by Yash Ghari",
      status: "low",
      completion: "Completed",
      startDate: "25/3/2023",
      endDate: "25/3/2023",
      timeSpent: "00:30:00",
      avatar: addodleAvatar,
    },
    {
      id: 8,
      title: "Make an Automatic Payment System that enable the design",
      opened: "#402235 opened 10 days ago by Yash Ghari",
      status: "low",
      completion: "Completed",
      startDate: "25/3/2023",
      endDate: "25/3/2023",
      timeSpent: "00:30:00",
      avatar: addodleAvatar,
    },
  ];

  return (
    <div className="p-4 sm:p-6 h-screen">
      <div className="">
        {/* Breadcrumb and Project Header */}
        <div className="mb-6">
          <p className="text-gray-500 mt-2 text-xs sm:text-sm font-nunito">Tasks</p>
        </div>

        {/* Task Container */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 overflow-x-hidden md:overflow-x-auto">
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
                          <span className="px-2 py-1 my-4 bg-green-100 text-green-600 rounded-full text-center lg:m-0">
                            {task.completion}
                          </span>
                          <span
                            className={`px-2 py-1 my-4 rounded-full text-center lg:m-0 font-montserrat ${
                              task.status === "high"
                                ? "bg-red-100 text-red-500"
                                : "bg-green-100 text-green-600"
                            }`}
                          >
                            {task.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span
                      className={`flex font-semibold bg-green-100 text-green-600 px-2 py-1 rounded-full font-montserrat ${
                        task.timeSpent === "00:15:00"
                          ? "bg-red-100 text-red-500"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      <img src={clockLoader} alt="Clock" className="mr-2" />{" "}
                      {task.timeSpent}
                    </span>
                    <img
                      src={task.avatar}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="flex">
                      <p className="mr-2 font-semibold">2</p>
                      <img
                        src={Tasks}
                        alt="tasks icon"
                        className="w-5 h-5 cursor-pointer"
                      />
                    </span>
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
      </div>

      <div className="mt-8">
         <Pagination routes={routesForTasks}/>
      </div>
    </div>
  );
};

export default TasksAddodle;
