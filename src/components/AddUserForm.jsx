import yashGhori from "../assets/images/yashGhori.svg";

const AddUserForm = () => {
    return (
      <>
      <h2 className="text-2xl font-semibold mb-4 text-gray-300">Add User</h2>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full h-3/4">          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Form Inputs */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Phone No.</label>
                <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Created Date</label>
                <input type="date" className="mt-1 block w-full px-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="grid grid-cols-2">
                  <div>
                  <label className="block text-sm font-medium text-gray-700">Designation</label>
                  <select className="mt-1 block w-full border px-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option>UI Intern</option>
                  </select>
                  </div>

                  <div className="ml-2">
                  <label className="block text-sm font-medium text-gray-700">Department</label>
                    <select className="mt-1 block w-full border px-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                      <option>PDT</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Created By</label>
                <select className="mt-1 block w-full border px-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                      <option>Yash Ghori</option>
                </select>
              </div>
            </div>
  
            {/* Photo Upload */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-pink-500 overflow-hidden">
                <img
                  src={yashGhori}
                  alt="photo"
                  className="object-cover w-full h-full"
                />
              </div>
              <button className="mt-4 text-sm">Upload Photo</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default AddUserForm;