import { createBrowserRouter } from 'react-router-dom';
import Landing from './pages/Home/Landing';
import Directory from './pages/Talents/Directory';
import TalentDetails from './pages/Talents/TalentDetails';
import Messages from './pages/Messages';
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/Projects/ProjectDetails';
import Settings from './pages/Settings';
import TermsAndCondition from './pages/TermsAndCondition';
import FAQ from './pages/FAQ';
import MyProfile from './pages/Profile/MyProfile';
import CreateProfile from './pages/Profile/CreateProfile';
import Pdf from './pages/ViewPDF';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },

  {
    path: 'talents',
    element: <Directory />,
  },
  {
    path: 'talent/:username',
    element: <TalentDetails />,
  },
  {
    path: 'profile',
    element: <MyProfile />,
  },
  {
    path: 'profile/create',
    element: <CreateProfile />,
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
    path: 'projects-talents/download',
    element: <Pdf />,
  },
  {
    path: 'projects/:id',
    element: <ProjectDetails />,
  },
  {
    path: 'settings',
    element: <Settings />,
  },
  {
    path: 'settings/terms-and-conditions',
    element: <TermsAndCondition />,
  },
  {
    path: 'settings/faq',
    element: <FAQ />,
  },
]);

export default router;
