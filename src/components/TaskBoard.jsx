import PropTypes from 'prop-types';

const tasksData = [
  {
    id: 1,
    title: "UI Animation",
    description: "Working on smooth animation transitions in the app.",
    comments: 2,
    daysLeft: "12 Days",
    team: ["team1.png", "team2.png", "team3.png"],
  },
  {
    id: 2,
    title: "Nodejs",
    description: "Setting up Node.js server and APIs.",
    comments: 5,
    daysLeft: "7 Days",
    team: ["team1.png", "team4.png", "team5.png"],
  },
  // Add more tasks here...
];

const TaskCard = ({ title, description, comments, daysLeft, team }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-xs text-gray-400">{daysLeft}</p>
      </div>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
      <div className="flex justify-between items-center mt-3">
        <div className="flex">
          {team.map((member, index) => (
            <img
              key={index}
              src={member}
              alt="team member"
              className="w-6 h-6 rounded-full border-2 border-white -ml-2"
            />
          ))}
        </div>
        <p className="text-xs text-gray-500">{comments} comments</p>
      </div>
    </div>
  );
};

const TaskBoard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Backlog</h2>
        <div className="space-y-4">
          {tasksData.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              comments={task.comments}
              daysLeft={task.daysLeft}
              team={task.team}
            />
          ))}
          <button className="text-blue-600 text-sm font-semibold">+ Add Task</button>
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">In Progress</h2>
        {/* Add in-progress tasks */}
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Completed</h2>
        {/* Add completed tasks */}
      </div>
    </div>
  );
};
// Define propTypes to validate props
TaskBoard.propTypes = {
  description: PropTypes.string.isRequired, // Mark 'description' as a required string
};

export default TaskBoard;