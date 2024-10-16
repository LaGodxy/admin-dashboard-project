import ProjectCard2 from "../components/ProjectCard2"
import Pagination from "../components/Pagination"
import searchNormal from "../assets/icons/searchNormal.svg";

const descriptionOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat."
const descriptionTwo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
const descriptionThree = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
const descriptionFour = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
const descriptionFive = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
const descriptionSix = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const Project = () => {
  const routesForProject2 = ['/dashboard/project-completed', '/dashboard/projects-stats', '/dashboard/project'];
  return (
    <>
      <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6 flex items-start font-nunito">Projects</h1>
            <div className="relative w-72">
            <input
              type="text"
              placeholder="Search for anything..."
              className="border border-gray-300 rounded-sm py-2 px-4 pl-10 text-sm w-full"
            />
            <img
              src={searchNormal}
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard2 description={descriptionOne} to="/dashboard" move="/dashboard/create-project" />
            <ProjectCard2 description={descriptionTwo} to="/dashboard" move="/dashboard/create-project" />
            <ProjectCard2 description={descriptionThree} to="/dashboard" move="/dashboard/create-project" />
            <ProjectCard2 description={descriptionFour} to="/dashboard" move="/dashboard/create-project" />
            <ProjectCard2 description={descriptionFive} to="/dashboard" move="/dashboard/create-project" />
            <ProjectCard2 description={descriptionSix} to="/dashboard" move="/dashboard/create-project" />
          </div>
          <div className="mt-8">
            <Pagination routes={routesForProject2}/>
          </div>
      </div>
    </>
  )
}

export default Project
