import { createBrowserRouter } from 'react-router-dom';
import Directory from './pages/Directory';
import Landing from './pages/Landing';
// import Profile from './pages/Profile';
import TalentDetails from './pages/TalentDetails';
import Messages from './pages/Messages';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/Projects/ProjectDetails';
import Settings from './pages/Settings';
import MyProfile from './pages/MyTalentProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: 'directory',
    element: <Directory />,
  },
  {
    path: 'talent/:id',
    element: <TalentDetails />,
  },
  {
    path: 'profile',
    element: <MyProfile />,
  },
  {
    path: 'messages',
    element: <Messages />,
  },
  {
    path: 'projects',
    element: <Projects />,
  },
  {
    path: 'projects/:id',
    element: <ProjectDetails />,
  },
  {
    path: 'settings',
    element: <Settings />,
  },
]);

export default router;
