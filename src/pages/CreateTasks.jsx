import { useState } from 'react';

const CreateTasks = () => {
    const [priority, setPriority] = useState('High');
    const [taskStatus, setTaskStatus] = useState('Pending');
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Tasks / Create Tasks</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Task Title */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">Task Title</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter task title"
              />
            </div>
  
            {/* Task Type */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">Task Type</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter task type"
              />
            </div>
  
            {/* Task Start Date */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">Task Start Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
  
            {/* Task End Date */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">Task End Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
  
            {/* Task Description */}
            <div className="md:col-span-2">
              <label className="block text-gray-600 text-sm font-medium mb-2">Task Description</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                rows="4"
                placeholder="Enter task description"
              ></textarea>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-wrap items-center justify-between space-x-4">
                {/* Assign To Dropdown */}
                <div className="flex flex-col">
                <label className="text-sm font-medium">Assign to</label>
                <select
                    className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option>Yash Ghori</option>
                    {/* Add more options as needed */}
                </select>
                </div>

                {/* Priority Tag */}
                <div className="flex flex-col">
                <label className="text-sm font-medium">Priority</label>
                <div className="mt-2 p-2 flex items-center border border-red-300 rounded-lg bg-red-50">
                    <span className="text-red-600 font-medium">{priority}</span>
                    <button
                    className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
                    onClick={() => setPriority('')}
                    >
                    ×
                    </button>
                </div>
                </div>

                {/* Task Assigning Tag */}
                <div className="flex flex-col">
                <label className="text-sm font-medium">Task Assigning</label>
                <div className="mt-2 p-2 flex items-center border border-red-300 rounded-lg bg-red-50">
                    <span className="text-red-600 font-medium">{taskStatus}</span>
                    <button
                    className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
                    onClick={() => setTaskStatus('')}
                    >
                    ×
                    </button>
                </div>
                </div>
            </div>
        
          <div className="flex justify-end mt-6 space-x-4">
            {/* Create and Delete Buttons */}
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Create</button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md">Delete</button>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default CreateTasks;