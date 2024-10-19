import { useState } from 'react';
import PropTypes from 'prop-types';
import userAvatar from "../assets/icons/userAvatar.svg";
import addAttachments from "../assets/icons/addAttachments.svg";
import documentLinks from "../assets/icons/documentLinks.svg";
import dueDate from "../assets/icons/dueDate.svg";
import assigne from "../assets/icons/assigne.svg";
import owner from "../assets/icons/owner.svg";
import status from "../assets/icons/status.svg";
import priority from "../assets/icons/priority.svg";

const TaskModal = ({ onClose }) => {
  const [showFormatter, setShowFormatter] = useState(false);

  const handleFocus = () => {
    setShowFormatter(true);
  };

  const handleBlur = () => {
    setShowFormatter(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-3/4 max-h-[90vh] p-4 sm:p-6 overflow-y-auto">
          <div className="flex mb-6">
            <p className="text-sm text-gray-500">Project / Task ID: 1234</p>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={onClose}
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
          </div>

          <div className="flex flex-col space-y-4 md:space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Make a Suitable form
                </h3>
              </div>
              <div className="flex items-center space-x-6 rounded-full bg-green-100">
                <span className="text-gray-500 text-sm ml-4">00:00</span>
                <button className="bg-green-100 text-green-500 p-2 rounded-full border-green-200 border-2">
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
            <div className="flex flex-col items-start space-y-4">
              {/* Priority */}
              <div className="flex items-center space-x-4">
                <img src={priority} alt="icon" className="mr-2" />
                <label className="font-semibold text-gray-600 w-24">Priority</label>
                <span className="bg-[#F06A6A] text-white px-8 py-1 rounded-full w-[120px] text-center">
                  High
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center space-x-4">
                <img src={status} alt="icon" className="mr-2" />
                <label className="font-semibold text-gray-600 w-24">Status</label>
                <span className="bg-[#4BA665] text-white px-8 py-1 rounded-full w-[120px] text-center">
                  Completed
                </span>
              </div>

              {/* Owner */}
              <div className="flex items-center space-x-4">
                <img src={owner} alt="icon" className="mr-2" />
                <label className="font-semibold text-gray-600 w-24">Owner</label>
                <div className="flex items-center space-x-2">
                  <img src={userAvatar} alt="owner" className="w-8 h-8 rounded-full" />
                  <span className="text-gray-800">Lil Sharks</span>
                </div>
              </div>

              {/* Assignee */}
              <div className="flex items-center space-x-4">
                <img src={assigne} alt="icon" className="mr-2" />
                <label className="font-semibold text-gray-600 w-24">Assignee</label>
                <div className="flex items-center space-x-2">
                  <img src={userAvatar} alt="assignee" className="w-8 h-8 rounded-full" />
                  <span className="text-gray-800">Coder bhai</span>
                </div>
              </div>
            </div>

            {/* Due Date */}
            <div className="flex items-center space-x-4">
              <img src={dueDate} alt="icon" className="mr-2" />
              <label className="font-semibold text-gray-600 w-24">Due Date</label>
              <span className="text-gray-800">March 24th 2023</span>
            </div>

            {/* Attachments */}
            <div className="space-y-6 border-t-gray-300 border-b-gray-300 border-b-2 border-t-2 border-l-0 border-r-0 pt-4 pb-8">
              <span className="font-semibold text-gray-600">Attachments</span>
              <div className="flex items-center space-x-2 text-blue-600">
                <img src={documentLinks} alt="icon" />
                <span>Document Links</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={addAttachments} alt="icon" />
                <span>Add Attachment</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 border-b-gray-300 border-b-2 pb-4">
              <span className="font-semibold text-gray-600">Description</span>
              <p className="text-gray-500 text-sm pt-4">
                Lörem ipsum salig nen, ip-tv plus labesa. Eurov yk. Funktionell dumhet<br />
                sabel som antiras mide. Heteron bionebelt preseling, divis peng. Trer beroren.
              </p>
            </div>

            {/* Comment section */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2">
                <img src={userAvatar} alt="commentor" className="w-8 h-8 rounded-full" />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full border border-gray-300 rounded-xl bg-gray-200 p-2 text-sm"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* Show Formatter and Buttons only when input is focused */}
              {showFormatter && (
                <div className="pt-2">
                  {/* Formatting Icons */}
                  <div className="flex justify-between items-center text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="hover:text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      <button className="hover:text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <button className="hover:text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                        </svg>
                      </button>
                      <button className="hover:text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4v8" />
                        </svg>
                      </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center space-x-2">
                      <button className="hover:text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m0 0l3 3m-3-3l3-3" />
                        </svg>
                      </button>
                      <button className="hover:text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5L19 5L19 11" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Save and Cancel buttons */}
            <div className="flex justify-end space-x-4">
              <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100" onClick={onClose}>
                Cancel
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500" onClick={onClose}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Define propTypes for the component
TaskModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TaskModal;
