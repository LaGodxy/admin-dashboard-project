import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import yashGhori from "../assets/images/yashGhori.svg";

const ProfileCard = () => {
  return (
    <div>
       {/* Profile Section */}
       <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 font-roboto">
       <div className="text-center">
         <img src={yashGhori} alt="Profile" className="w-24 h-24 mx-auto rounded-full border-4 border-[#ED2590]" />
         <h2 className="mt-4 text-xl font-bold">Yash Ghari</h2>
         <p className="text-gray-500">Ahmedabad, Gujarat</p>
         <p className="text-gray-500">India</p>
       </div>
       {/* Contact Info */}
       <div className="mt-6 space-y-2 flext items-center">
         <div className='border-t-[1px] border-b-[1px] border-[#D9E6F7]'>
           <div className="flex items-center space-x-2 text-gray-600">
             <FaEnvelope />
             <p>UI-Intern</p>
             </div>
             <div className="flex items-center space-x-2 text-gray-600">
             <FaEnvelope />
             <p>On-teak</p>
             </div>
           </div>
         <div className="flex items-center space-x-2 text-gray-600">
           <FaEnvelope />
           <p>yghari@gmail.com</p>
         </div>
         <div className="flex items-center space-x-2 text-gray-600">
           <FaPhone />
           <p>+91 7048144030</p>
         </div>
         <div className="flex items-center space-x-2 text-gray-600">
           <FaClock />
           <p>PDT - J</p>
         </div>
       </div>
     </div>
    </div>
  )
}

export default ProfileCard
