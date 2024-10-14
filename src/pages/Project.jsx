import { Link } from 'react-router-dom';
import ProjectCard from "../components/ProjectCard"

const descriptionOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat."
const descriptionTwo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
const descriptionThree = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
const descriptionFour = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
const descriptionFive = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
const descriptionSix = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const Project = () => {
  return (
    <>
      <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6 flex items-start font-nunito">Projects</h1>
            <Link to="/dashboard/create-project">
              <button className="px-4 py-1 mb-4 bg-[#036EFF] text-white rounded-md hover:bg-blue-300 font-inter">
                  Create
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard description={descriptionOne} to="/dashboard" move="/dashboard/create-project" />
            <ProjectCard description={descriptionTwo} to="/dashboard" move="/dashboard/create-project" />
            <ProjectCard description={descriptionThree} to="/dashboard" move="/dashboard/create-project" />
            <ProjectCard description={descriptionFour} to="/dashboard" move="/dashboard/create-project" />
            <ProjectCard description={descriptionFive} to="/dashboard" move="/dashboard/create-project" />
            <ProjectCard description={descriptionSix} to="/dashboard" move="/dashboard/create-project" />
          </div>
        </div>
    </>
  )
}

export default Project
