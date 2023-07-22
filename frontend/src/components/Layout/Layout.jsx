import React, { useEffect } from 'react';
import { Header } from '../Headers';
import { SideBar } from '../SideBar';
import NoAuth from '../Authentication/NoAuth';
import Signin from '../Authentication/Signin';
import Signup from '../Authentication/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { useProfileData } from '../../hooks/useUserData';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/auth';

function Layout({ showTalentHidden, sideBarHidden, children, isAuthRequired = true }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const { data, error, isError } = useProfileData({ enabled: isAuth });
  const user = data?.data;
  const userRole = user?.role;

  if (userRole === 'Admin') navigate('/admin');

  useEffect(() => {
    if (error?.response?.status === 401) {
      dispatch(logout());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
    <div>
      <Header showTalentHidden={showTalentHidden} />
      {!sideBarHidden && <SideBar role={'User'} />}
      <div className="p-y-4 px-5 md:px-10  md:ml-28  md:mx-auto my-28">
        <div className="mx-auto">
          {isAuthRequired && !isAuth ? <NoAuth /> : children}
          {/* Modal */}
          <Signin />
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default Layout;
