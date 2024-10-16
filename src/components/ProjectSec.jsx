import { useState } from 'react';
import emoStuff from "../assets/images/emoStuff.svg";
import timBurton from "../assets/images/timBurton.svg";
import halloween from "../assets/images/halloween.svg";
import spookyArt from "../assets/images/spookyArt.svg";
import darkArt from "../assets/images/darkArt.svg";
import gothicArt from "../assets/images/gothicArt.svg";
import happy from "../assets/images/happy.svg";
import v4mpyr from "../assets/images/v4mpyr.svg";
import art from "../assets/images/art.svg";

const CreateTasks = () => {
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [modalProjectData, setModalProjectData] = useState(null);

    
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

   // Open project modal and pass data
   const openProjectModal = (project) => {
    setModalProjectData(project);
    setIsProjectModalOpen(true);
   };
  
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 h-full">
          <div className="mb-6">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">Projects</h3>
              <p className="text-[#ED2590] mt-2 inline-block">View all</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {projects.slice(0, 9).map((project, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <img className="w-12 h-12 rounded-md" src={project.image} alt={project.name} />
                  <p className="text-[9px] mt-2 flex items-start whitespace-nowrap">{project.name}</p>
                </div>
              ))}

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
            </div>
          </div>
        </div>
       
);
};

export default CreateTasks;