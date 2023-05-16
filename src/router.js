import { createBrowserRouter } from 'react-router-dom';
import Directory from './pages/Directory';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import TalentDetails from './pages/TalentDetails';
import Messages from './pages/Messages';
import Projects from './pages/Projects';
import Settings from './pages/Settings';

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
    element: <Profile />,
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
    path: 'settings',
    element: <Settings />,
  },
]);

export default router;
