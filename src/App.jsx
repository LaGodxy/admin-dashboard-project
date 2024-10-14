import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './layout/Layout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Tasks from './pages/Tasks';
import ProjectAddodle from './pages/ProjectAddodle';
import ProjectAddodle2 from './pages/ProjectAddodle2';
import ProfileFew from './pages/ProfileFew';
import TasksAddodle from './pages/TasksAddodle';
import TasksSubtasks from './pages/TasksSubtasks';
import ProjectAddodleIcon from './pages/ProjectAddodleIcon';
import SubTaskForm from './pages/SubTaskForm';
import AddUser from './pages/AddUser';
import Notification from './pages/Notification';
import CreateTasks from './pages/CreateTasks';
import CreateProject from './pages/CreateProject';
import ProjectsStats from './pages/ProjectsStats';
import Performance from './pages/Performance';

// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/dashboard',
    element: <Layout><Outlet /></Layout>, 
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: '/dashboard/project',
        element: <Project />
      },
      {
        path: '/dashboard/project-completed',
        element: <Project2 />
      },
      {
        path: '/dashboard/projects-stats',
        element: <ProjectsStats />
      },
      {
        path: '/dashboard/profile',
        element: <Profile />
      },
      {
        path: '/dashboard/edit-profile',
        element: <EditProfile />
      },
      {
        path: '/dashboard/adduser',
        element: <AddUser />
      },
      {
        path: '/dashboard/profile-few',
        element: <ProfileFew />
      },
      {
        path: '/dashboard/notification',
        element: <Notification />
      },
      {
        path: '/dashboard/create-tasks',
        element: <CreateTasks />
      },
      {
        path: '/dashboard/project-addodle',
        element: <ProjectAddodle />
      },
      {
        path: '/dashboard/project-addodle-2',
        element: <ProjectAddodle2 />
      },
      {
        path: '/dashboard/tasksaddodle',
        element: <TasksAddodle />
      },
      {
        path: '/dashboard/project-addodle-icon',
        element: <ProjectAddodleIcon />
      },
      {
        path: '/dashboard/tasks',
        element: <Tasks />
      },
      {
        path: '/dashboard/tasks-subtasks',
        element: <TasksSubtasks />
      },
      {
        path: '/dashboard/subtaskform',
        element: <SubTaskForm />
      },
      {
        path: '/dashboard/create-project',
        element: <CreateProject />
      },
      {
        path: '/dashboard/performance',
        element: <Performance />
      },
    ]
  }
]);

// The main App component
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
