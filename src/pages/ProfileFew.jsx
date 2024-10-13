import { useState } from 'react';
import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import yashGhori from "../assets/images/yashGhori.svg";
import addodle from "../assets/images/addodle.svg";
import marketPlace from "../assets/images/marketPlace.svg";
import vonDracula from "../assets/images/vonDracula.svg";
import johnJoestar from "../assets/images/johnJoestar.svg";
import akaliJin from "../assets/images/akaliJin.svg";
import kaynVampyr from "../assets/images/kaynVampyr.svg";
import emoStuff from "../assets/images/emoStuff.svg";
import timBurton from "../assets/images/timBurton.svg";
import halloween from "../assets/images/halloween.svg";
import spookyArt from "../assets/images/spookyArt.svg";
import darkArt from "../assets/images/darkArt.svg";
import gothicArt from "../assets/images/gothicArt.svg";
import happy from "../assets/images/happy.svg";
import v4mpyr from "../assets/images/v4mpyr.svg";
import art from "../assets/images/art.svg";
import WorkLogCard from '../components/WorkLogCard';


const ProfileFew = () => {
  // State for handling modal visibility and content
  const [isPersonModalOpen, setIsPersonModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [modalPersonData, setModalPersonData] = useState(null);
  const [modalProjectData, setModalProjectData] = useState(null);

  const workedWith = [
    { name: 'Addodle', image: addodle, role: 'Developer' },
    { name: 'Marketplace', image: marketPlace, role: 'Designer' },
    { name: 'Von Dracula', image: vonDracula, role: 'Manager' },
    { name: 'Von Dracula', image:vonDracula, role: 'Manager' },
    { name: 'John Joestar', image: johnJoestar, role: 'Manager' },
    { name: 'Akali Jin', image: akaliJin, role: 'Manager' },
    { name: 'Kayn Vampyr', image: kaynVampyr, role: 'Manager' },
    { name: 'Kayn Vampyr', image: kaynVampyr, role: 'Manager' },
    { name: 'John Joestar', image: johnJoestar, role: 'Manager' },
    { name: 'Akali Jin', image: akaliJin, role: 'Manager' },
    { name: 'Kayn Vampyr', image: kaynVampyr, role: 'Manager' },
    { name: 'Kayn Vampyr', image: kaynVampyr, role: 'Manager' },
    { name: 'John Joestar', image: johnJoestar, role: 'Manager' },
    { name: 'Akali Jin', image: akaliJin, role: 'Manager' },
    { name: 'Kayn Vampyr', image: kaynVampyr, role: 'Manager' },
    { name: 'Kayn Vampyr', image: kaynVampyr, role: 'Manager' },    
  ];

  const projects = [
    { name: 'Emo stuff', image: emoStuff, description: 'Project A details...' },
    { name: 'Tim Burton', image: timBurton, description: 'Project B details...' },
    { name: 'Halloween!', image: halloween, description: 'Project C details...' },
    { name: 'Spooky Art', image: spookyArt, description: 'Project C details...' },
    { name: 'Dark Art', image: darkArt, description: 'Project C details...' },
    { name: 'Gothic art', image: gothicArt, description: 'Project C details...' },
    { name: '-happy :3', image: happy, description: 'Project C details...' },
    { name: '*V4MPYR*', image: v4mpyr, description: 'Project C details...' },
    { name: '|<3 Art', image: art, description: 'Project C details...' },
    
  ];

  // Open person modal and pass data
  const openPersonModal = (person) => {
    setModalPersonData(person);
    setIsPersonModalOpen(true);
  };

  // Open project modal and pass data
  const openProjectModal = (project) => {
    setModalProjectData(project);
    setIsProjectModalOpen(true);
  };

  return (
    <div className="h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1">
          <div className="text-center">
            <img src={yashGhori} alt="Profile" className="w-24 h-24 mx-auto rounded-full border-4 border-[#ED2590]" />
            <h2 className="mt-4 text-xl font-bold">Yash Ghari</h2>
            <p className="text-gray-500">Ahmedabad, Gujarat</p>
            <p className="text-gray-500">India</p>
          </div>
          {/* Contact Info */}
          <div className="mt-6 space-y-2">
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

        {/* Center Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2">
          <p className="text-sm mb-4">Inicio Profile</p>
          <h3 className="text-2xl font-bold mb-4">UI Developer</h3>
          <p className="text-gray-600 mb-4">Lorem ipsum is the best sentence in the world of dummy text</p>
          <div className="mb-6">
            <div className='flex justify-between'>
                <h4 className="text-lg font-semibold">Worked with</h4>
                <p className="text-[#ED2590] mt-2 inline-block">View all</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-4">
              {workedWith.slice(0, 8).map((person, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer"
                  onClick={() => openPersonModal(person)}
                >
                  <img className="w-12 h-12 rounded-full" src={person.image} alt={person.name} />
                  <p className="text-sm mt-2 text-justify">{person.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 h-screen">
          <div className="mb-6">
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold">Projects</h4>
              <p className="text-[#ED2590] mt-2 inline-block">View all</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {projects.slice(0, 6).map((project, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <img className="w-12 h-12 rounded-md" src={project.image} alt={project.name} />
                  <p className="text-sm mt-2 flex items-start">{project.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Person Modal */}
      {isPersonModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
            <h2 className="text-xl font-bold mb-2">{modalPersonData.name}</h2>
            <p className="text-gray-600 mb-4">{modalPersonData.role}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsPersonModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
            <h2 className="text-xl font-bold mb-2">{modalProjectData.name}</h2>
            <p className="text-gray-600 mb-4">{modalProjectData.description}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsProjectModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Total Work Done Card */}
      <div className="bg-[#F5F5F5] p-1 px-[-29px] rounded-lg shadow-md flex justify-end ml-[400px]">
           <WorkLogCard title='Total work done'/>
          </div>
    </div>
  );
};

export default ProfileFew;