import Form from "../components/Form";
import ProfileCard from "../components/ProfileCard";
import ProjectEditCard from "../components/ProjectEditCard";
import UiDeveloper from "../components/UiDeveloper";
import WorkLogCard from "../components/WorkLogCard";

const EditProfile = () => {
  return (
    <div className="h-screen p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Profile Card */}
        <div className="flex flex-col">
          <ProfileCard/>
          <div className="mt-48 mb-8">
            <WorkLogCard/>
          </div>
        </div>

        {/* Edit Profile Form */}
            <div className="lg:col-span-2">
                <Form/>
            </div>

        {/* Right Side Projects & Developer Info */}
        <div className="flex flex-col">
          <ProjectEditCard/>
          <div className="mt-4 mb-8">
            <UiDeveloper/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EditProfile;