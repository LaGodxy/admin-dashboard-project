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
import ProfileFew from './pages/ProfileFew';
import TasksAddodle from './pages/TasksAddodle';
import TasksSubtasks from './pages/TasksSubtasks';
import ProjectAddodleIcon from './pages/ProjectAddodleIcon';
import SubTaskForm from './pages/SubTaskForm';
import AddUser from './pages/AddUser';
import Notification from './pages/Notification';
import CreateTasks from './pages/CreateTasks';
import ProjectsStats from './pages/ProjectsStats';

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
      // Dashboard Home
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'projects-stats',
        element: <ProjectsStats />
      },

      // Project Section
      
      {
        path: 'project',
        element: <Project />,
        children: [
          {
            path: 'projects-stats',
            element: <ProjectsStats />
          },
          {
            path: 'addodle',
            element: <ProjectAddodle />
          },
          {
            path: 'addodle-icon',
            element: <ProjectAddodleIcon />
          }
        ]
      },

      // Tasks Section
      {
        path: 'tasks',
        element: <Tasks />,
        children: [
          {
            path: 'subtasks',
            element: <TasksSubtasks />
          },
          {
            path: 'subtaskform',
            element: <SubTaskForm />
          },
          {
            path: 'tasksaddodle',
            element: <TasksAddodle />
          }   
        ]
      },

      // Performance Section
      {
        path: 'create',
        element: <CreateTasks />,
        children: [
          
          ]
        },

      // Profile Section
      {
        path: 'profile',
        element: <Profile />,
        children: [
          {
            path: 'edit',
            element: <EditProfile />
          },
          {
            path: 'few',
            element: <ProfileFew />
          },
          {
            path: 'notification',
            element: <Notification />
          }
        ]
      },

      // Add User Section
      {
        path: 'adduser',
        element: <AddUser />
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
