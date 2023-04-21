import { createBrowserRouter } from 'react-router-dom';
import Directory from './pages/Directory';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import TalentDetails from './pages/TalentDetails';

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
]);

export default router;
