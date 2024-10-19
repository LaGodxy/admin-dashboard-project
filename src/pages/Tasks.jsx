import PropTypes from "prop-types"; 
import { useState } from "react";
import commentsB from "../assets/icons/commentsB.svg";
import attachment from "../assets/icons/attachment.svg";
import clockUnfill from "../assets/icons/clockUnfill.svg";
import Frame1 from "../assets/images/Frame1.svg";
import Frame2 from "../assets/images/Frame2.svg";
import Frame3 from "../assets/images/Frame3.svg";
import uiFrame from "../assets/images/uiFrame.svg";
import mock1 from "../assets/images/mock1.svg";
import mock2 from "../assets/images/mock2.svg";
import mock3 from "../assets/images/mock3.svg";
import mm3 from "../assets/images/mm3.svg";
import Fr3 from "../assets/images/Fr3.svg";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Modal from "react-modal"; // Assuming you have Modal functionality already


const initialTasksData = {
  backlog: [
    {
      id: 1,
      title: "Food Research",
      description: "Food design is required for our new project let’s research the best practices.",
      comments: 2,
      attachments: 2,
      daysLeft: "12 Days",
      team: [Frame1, Frame2, Frame3],
    },
    {
      id: 2,
      title: "Mockups",
      description: "Create a 12 mockups for mobile iphone 13 pro max",
      comments: 6,
      attachments: 3,
      daysLeft: "12 Days",
      team: [mock1, mock2, mock3],
    },
    {
      id: 3,
      title: "UI Animation",
      description: "Micro interaction loading and progress, story telling, Navigation",
      comments: 4,
      attachments: 2,
      daysLeft: "12 Days",
      team: [Frame1, uiFrame, mock1],
    },
  
  ],
  inProgress: [
    {
      id: 1,
      title: "Food Research",
      description: "Food design is required for our new project let’s research the best practices.",
      comments: 4,
      attachments: 2,
      daysLeft: "12 Days",
      team: [Frame1, Frame2, uiFrame],
    },
    {
      id: 2,
      title: "Mockups",
      description: "Create a 12 mockups for mobile iphone 13 pro max",
      comments: 5,
      attachments: 3,
      daysLeft: "12 Days",
      team: [mock3, mock1, Frame3],
    },
    {
      id: 3,
      title: "UI Animation",
      description: "Micro interaction loading and progress, story telling, Navigation",
      comments: 9,
      attachments: 5,
      daysLeft: "12 Days",
      team: [mock2, Frame2, Fr3],
    },
  ],
  completed: [
    {
      id: 1,
      title: "Food Research",
      description: "Food design is required for our new project let’s research the best practices.",
      comments: 2,
      attachments: 2,
      daysLeft: "12 Days",
      team: [mock3, Frame2, mm3],
    },
    {
      id: 2,
      title: "Mockups",
      description: "Create a 12 mockups for mobile iphone 13 pro max",
      comments: 6,
      attachments: 3,
      daysLeft: "12 Days",
      team: [Frame1, Fr3, mock3],
    },
    {
      id: 3,
      title: "UI Animation",
      description: "Micro interaction loading and progress, story telling, Navigation",
      comments: 4,
      attachments: 2,
      daysLeft: "12 Days",
      team: [Frame1, Frame2, Frame3],
    },
  ],
};

const TaskCard = ({ title, description, comments, attachments, daysLeft, team, index }) => (
  <Draggable draggableId={title} index={index}>
    {(provided) => (
      <div
        className="bg-white p-4 rounded-lg shadow-lg w-full font-roboto"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold text-[#223759]">{title}</h3>
          <span className="flex items-center">
            <img src={clockUnfill} alt="clock icon" className="mr-2" />
            <span className="text-xs text-gray-500">{daysLeft}</span>
          </span>

        </div>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex">
          <span className="flex items-center">
            <img src={attachment} alt="attachment icon" className="mr-2" />
            <span className="text-xs text-gray-500">{attachments}</span>
          </span>

          <span className="flex items-center ml-4">
            <img src={commentsB} alt="comment icon" className="mr-2" />
            <span className="text-xs text-gray-500">{comments}</span>
          </span>
          </div>
          <div className="flex">
          <span className="rounded-full w-6 h-6 bg-blue-50 mr-2 flex justify-center items-center">+</span>
            {team.map((member, index) => (
              <img
                key={index}
                src={member}
                alt="team member"
                className="w-6 h-6 rounded-full border-2 border-white -ml-2"
              />
            ))}
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

const Tasks = () => {
  const [tasksData, setTasksData] = useState(initialTasksData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "", comments: 0, attachments: 0, daysLeft: "", team: [] });
  const [filterCriteria, setFilterCriteria] = useState("");

  // Handle Drag and Drop
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = tasksData[source.droppableId];
    const destColumn = tasksData[destination.droppableId];
    const [movedTask] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, movedTask);

    setTasksData({
      ...tasksData,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  // Filter logic
  const filteredTasksData = Object.fromEntries(
    Object.entries(tasksData).map(([key, tasks]) => [
      key,
      tasks.filter((task) =>
        filterCriteria ? task.daysLeft.includes(filterCriteria) || task.team.includes(filterCriteria) : true
      ),
    ])
  );

  // Add Task logic
  const handleAddTask = () => {
    setTasksData({
      ...tasksData,
      backlog: [...tasksData.backlog, { ...newTask, id: Date.now() }],
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <p className="text-gray-500 text-lg font-bold mb-4 sm:text-sm font-nunito">Tasks</p>
      <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-4 font-roboto">
      <p className="text-gray-500 font-bold text-xs sm:text-sm">Overview</p>
      <p className="text-gray-500 text-xs sm:text-sm">Edit or modify all cards as you want</p>
      </div>
      <div className="flex justify-between mb-4 p-6">
        <input
          type="text"
          placeholder="Search projects"
          className="p-2 border rounded bg-blue-50"
          value={filterCriteria}
          onChange={(e) => setFilterCriteria(e.target.value)}
        />
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
          {["backlog", "inProgress", "completed"].map((column) => (
            <Droppable droppableId={column} key={column}>
              {(provided) => (
                <div className="bg-white p-4 rounded-lg shadow-lg" {...provided.droppableProps} ref={provided.innerRef}>
                  <h2 className="text-lg font-semibold text-[#223759] mb-4 bg-blue-50 rounded-t-lg rounded-r-lg rounded-b-none p-4">
                    {column === "backlog"
                      ? "Backlog"
                      : column === "inProgress"
                      ? "In Progress"
                      : "Completed"}
                  </h2>
                  <div className="border-[#067C89] border-2 border-dashed rounded-lg flex justify-center items-center">
                    <button className="text-[#067C89] text-sm font-semibold" onClick={() => setIsModalOpen(true)}>
                      +
                    </button>
                  </div>

                  <div className="space-y-4">
                    {filteredTasksData[column].map((task, index) => (
                      <TaskCard key={task.id} index={index} {...task} />
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

<Modal 
    isOpen={isModalOpen} 
    onRequestClose={() => setIsModalOpen(false)} 
    style={{
        content: {
            maxWidth: '600px', // Limit the width
            height: 'auto', // Auto adjust height based on content
            margin: 'auto', // Center the modal
            overflowY: 'visible', // Remove vertical scrolling
            padding: '20px', // Add padding for content readability
            border: '1px solid #E2E8F0', // Add a light border
            borderRadius: '0.5rem', // Add border radius
            backgroundColor: '#FFFFFF', // Set background color
        },
    }}
>
    <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Add New Task</h2>
        <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
        />
        <input
            type="text"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
        />
        <button 
            onClick={handleAddTask} 
            className="bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-blue-700"
        >
            Add Task
        </button>
    </div>
</Modal>



      </div>
      </div>
    </>
  );
};


// Add PropTypes validation for TaskCard props
TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  attachments: PropTypes.number.isRequired,
  daysLeft: PropTypes.string.isRequired,
  team: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};
export default Tasks;
