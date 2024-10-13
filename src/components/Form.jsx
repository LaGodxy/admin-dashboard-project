
const Form = () => {

    return (
         <div className="lg:col-span-2 h-3/4 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Edit Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" value="Yash" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" value="Ghori" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" value="yghori@site.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" value="+91 7048144030" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Password</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" placeholder="Change Password" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Nationality</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                <option>India</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Designation</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                <option>UI Intern</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button className="px-6 py-2 mt-8 bg-[#5570F1] text-white rounded-lg hover:bg-indigo-200 focus:outline-none">Save</button>
          </div>
        </div>
    );
};

export default Form;        