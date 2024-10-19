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

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-3/4 max-h-[90vh] p-4 sm:p-6 overflow-y-auto">
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
            <div className="flex flex-col items-start space-x-4">
              <div className="flex space-x-16 ml-4 mb-4">
                <div className='flex'>
                  <img src={priority} alt="icon" />
                  <label className="font-semibold text-gray-600">Priority</label>
                </div>
                <span className="bg-[#F06A6A] text-white px-8 py-1 rounded-full">
                  High
                </span>
              </div>
              <div className="flex space-x-16 mb-4">
                <div className='flex'>
                  <img src={status} alt="icon" />
                  <label className="font-semibold text-gray-600">Status</label>
                </div>
                <span className="bg-[#4BA665] text-white px-8 py-1 ml-6 rounded-full">
                  Completed
                </span>
              </div>

              {/* Owner and Assignee */}
              <div className="flex items-center space-x-16">
                <div className='flex'>
                  <img src={owner} alt="icon" />
                  <span className="font-semibold text-gray-600">Owner</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <img
                    src={userAvatar}
                    alt="owner"
                    className="w-8 h-8 rounded-full space-x-2"
                  />
                  <span className="text-gray-800">Lil Sharks</span>
                </div>
              </div>
              <div className="flex items-center space-x-12">
                <div className='flex'>
                  <img src={assigne} alt="icon" />
                  <span className="font-semibold text-gray-600">Assignee</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <img
                    src={userAvatar}
                    alt="assignee"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-800">Coder bhai</span>
                </div>
              </div>
            </div>

            {/* Due Date */}
            <div className="flex items-center space-x-12 ml-4">
              <div className='flex'>
                <img src={dueDate} alt="icon" />
                <span className="font-semibold text-gray-600">Due Date</span>
              </div>
              <span className="text-gray-800">March 24th 2023</span>
            </div>

            {/* Attachments */}
            <div className="space-y-2 border-t-gray-300 border-b-gray-300 border-b-2 border-t-2 border-l-0 border-r-0 pt-4 pb-4">
              <span className="font-semibold text-gray-600">Attachments</span>
              <div className="flex items-center space-x-2 text-blue-600">
                <img src={documentLinks} alt="icon" className="" />
                <span>Document Links</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={addAttachments} alt="icon" className="" />
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
                <img
                  src={userAvatar}
                  alt="commentor"
                  className="w-8 h-8 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Add attachment..."
                  className="w-full border border-gray-300 rounded-xl bg-gray-200 p-2 text-sm"
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
    </>
  );
};

// Define propTypes for the component
TaskModal.propTypes = {
  onClose: PropTypes.func.isRequired, // Ensure onClose is a function
};

export default TaskModal;
