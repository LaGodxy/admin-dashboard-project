
const SubTaskForm = () => {
  return (
    <div className="h-scree p-4 md:p-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">SubTask / Create SubTask</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
            {/* SubTask Title and Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-2">SubTask Title</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Add SubTask Title"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-2">SubTask Status</label>
            <select
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Type - I</option>
              <option>Type - II</option>
            </select>
          </div>
        </div>

        {/* Date Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-2">Start Date</label>
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-2">End Date</label>
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        </div>

        {/* SubTask Description */}
        <div className="mb-4">
          <label className="text-gray-600 text-sm mb-2 block">SubTask Description</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
            placeholder="Add SubTask Description"
          ></textarea>
        </div>

        {/* Reporter and Assignee */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-2">Reporter</label>
           <div className="border border-gray-300 rounded-lg">
             <select
              className="px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Team Lead</option>
              <option>Team Member</option>
            </select>
            <div className="mt-2 p-4">
              {[...Array(6)].map((_, index) => (
                <label key={index} className="flex justify-between items-center space-x-2 mb-2 border border-gray-300 border-l-0 border-r-0 border-b-0">
                  <span className="text-gray-600">Yash <span className="text-sm text-gray-500 ml-4 italic">Team Lead</span></span>
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                </label>
              ))}
            </div>
           </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-2">Assignee</label>
            <div className="border border-gray-300 rounded-lg">
                <select
              className="px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Team Lead</option>
              <option>Team Member</option>
            </select>
            <div className="mt-2 p-4">
              {[...Array(6)].map((_, index) => (
                <label key={index} className="flex justify-between items-center space-x-2 mb-2 border border-gray-300 border-l-0 border-r-0 border-b-0">
                  <span className="text-gray-600">Yash <span className="text-sm text-gray-500 ml-4 italic">Team Lead</span></span>
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                </label>
              ))}
            </div>
            </div>
          </div>
           {/* Buttons */}
        <div className="flex flex-col items-center mt-48">
          <button className="px-6 py-2 bg-green-100 text-green-500 rounded-md hover:bg-green-300">
            Add Attachment
          </button>
          <div className="flex justify-between space-x-4 mt-8">
            <button className="px-6 py-2 bg-[#036EFF] text-white rounded-md hover:bg-blue-300">
              Create
            </button>
            <button className="px-6 py-2 bg-green-100 text-[#036EFF] rounded-md hover:bg-red-100">
              Delete
            </button>
          </div>
        </div>
        </div>

       
      </div>
    </div>
  );
};

export default SubTaskForm;