import WorkLogCard from "../components/WorkLogCard";

const Notification = () => {
    return (
      <div className="h-screen bg-gray-100 p-6 flex flex-col lg:flex-row gap-6">
        {/* Left Section: Work Log */}
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-gray-600 text-sm mt-10">0{5 - index} Nov 2022</p>
                <p className="text-gray-700 font-semibold mt-10 mr-10">
                  Make an Automatic Payment System that enables the design
                </p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Right Section: WorkLog Summary and Notifications */}
        <div className="">
          {/* Total Work Log */}
          <div className="bg-wh p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Total WorkLog</h3>
            <WorkLogCard />
            
           
          </div>
  
          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-md p-6 flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700 font-poppins">Notifications</h3>
              <button className="text-blue-500 text-xs font-poppins">View all</button>
            </div>
            <div className="space-y-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex-shrink-0"></div>
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">Notification Title</p>
                    <p className="text-gray-500 text-sm">Description goes here...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Notification;