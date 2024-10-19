import WorkLogCard from "../components/WorkLogCard";
import NotificationCard from "../components/NotificationCard";

const Notification = () => {
    return (
      <div className="h-screen p-6 flex flex-col lg:flex-row gap-6">
        {/* Left Section: Work Log */}
        <div className="bg-white rounded-lg shadow-md p-6 pt-10 flex-1 h-full">
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
          <div className="mt-[170px]">
            <WorkLogCard title=""/>
            
           
          </div>
  
          {/* Notifications */}
         <div className="mt-[-120px] mb-44">
         <NotificationCard />
         </div>
        </div>
      </div>
    );
  };
  
  export default Notification;