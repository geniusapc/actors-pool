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
import NotFound from './pages/_404';
import * as Admin from './pages/Admin';
import { AdminLayout } from './components/Layout';
import { useProfileData } from './hooks/useUserData';
import { ROLES } from './constants';
import NoAuth from './components/Authentication/NoAuth';
import { Modal } from 'flowbite-react';
import Loading from './components/DataController/Loading';
import { useEffect } from 'react';

const AppRoute = ({ component: Component, layout: Layout, isProtected = true, roles = [] }) => {
  const { data, isFetchedAfterMount, refetch } = useProfileData({ enabled: isProtected });
  const userRole = data?.data?.data?.role;
  const userHasAccess = roles.includes(userRole);
  const showComponent = !isProtected || (!!isFetchedAfterMount && !!userHasAccess);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isProtected && isFetchedAfterMount && !userHasAccess) {
    return (
      <Modal show={true} popup>
        <Modal.Body>
          <NoAuth />
        </Modal.Body>
      </Modal>
    );
  }

  return <Layout>{showComponent ? <Component /> : <Loading />}</Layout>;
};

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
  {
    path: 'admin/dashboard',
    element: <AppRoute component={Admin.Dashboard} roles={[ROLES.Admin]} layout={AdminLayout} />,
  },
  {
    path: 'admin/talents',
    element: <AppRoute component={Admin.Talents} roles={[ROLES.Admin]} layout={AdminLayout} />,
  },
  {
    path: 'admin/talents/create',
    element: <AppRoute component={Admin.CreateTalent} roles={[ROLES.Admin]} layout={AdminLayout} />,
  },
  {
    path: 'admin/talents/:username',
    element: <AppRoute component={Admin.TalentDetails} roles={[ROLES.Admin]} layout={AdminLayout} />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
