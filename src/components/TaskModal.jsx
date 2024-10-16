import React, { useState } from "react";

const TaskModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full p-6">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={handleModalClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Make a Suitable form
                  </h3>
                  <p className="text-sm text-gray-500">Project / Task ID: 1234</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500 text-sm">00:00</span>
                  <button className="bg-green-100 text-green-500 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 3l14 9-14 9V3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Priority and Status */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-600">Priority:</span>
                  <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full">
                    High
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-600">Status:</span>
                  <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full">
                    Completed
                  </span>
                </div>
              </div>

              {/* Owner and Assignee */}
              <div className="flex items-center space-x-6">
                <div>
                  <span className="font-semibold text-gray-600">Owner:</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="owner"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-800">Lil Sharks</span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Assignee:</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="assignee"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-800">Coder bhai</span>
                  </div>
                </div>
              </div>

              {/* Due Date */}
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-600">Due Date:</span>
                <span className="text-gray-800">March 24th 2023</span>
              </div>

              {/* Attachments */}
              <div className="space-y-2">
                <span className="font-semibold text-gray-600">Attachments:</span>
                <div className="flex items-center space-x-2 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89-7.89c.41-.41.96-.61 1.54-.61h6.11c.99 0 1.8.81 1.8 1.8v12.11c0 .58-.2 1.13-.61 1.54L12 21l-9-9v-4c0-.99.81-1.8 1.8-1.8h4V8z"
                    />
                  </svg>
                  <span>Document Links</span>
                </div>
                <button className="flex items-center space-x-1 text-blue-600">
                  <span>+ Add Attachment</span>
                </button>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <span className="font-semibold text-gray-600">Description:</span>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel placerat nunc. Cras finibus est ac felis placerat.
                </p>
              </div>

              {/* Comment section */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="commentor"
                    className="w-8 h-8 rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Add a comment or description..."
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm"
                  />
                </div>
              </div>

              {/* Save and Cancel buttons */}
              <div className="flex justify-end space-x-4">
                <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                  Cancel
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskModal;