import { createBrowserRouter } from 'react-router-dom';
import Directory from './pages/Directory';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import TalentDetails from './pages/TalentDetails';
import Projects from './pages/Projects';

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
    path: 'talent/details',
    element: <TalentDetails />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
  {
    path: 'projects',
    element: <Projects />,
  },
]);

export default router;
