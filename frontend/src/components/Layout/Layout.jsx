import React from 'react'
import { Header } from '../Headers'
import { SideBar } from '../SideBar'
import NoAuth from '../Authentication/NoAuth'
import Signin from '../Authentication/Signin'
import Signup from '../Authentication/Signup'
import { useSelector } from 'react-redux'
import { useProfileData } from '../../hooks/useUserData'
import { useNavigate } from 'react-router-dom'


function Layout({ showTalentHidden, sideBarHidden, children, isAuthRequired = true }) {
    const navigate = useNavigate()
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    const { data } = useProfileData()
    const user = data?.data
    const userRole = user?.role;

    if (userRole === "Admin") navigate("/admin")

    return (
        <div>
            <Header showTalentHidden={showTalentHidden} />
            {!sideBarHidden && <SideBar role={userRole} />}
            <div className="p-y-4 px-5 md:px-10  md:ml-28  md:mx-auto my-20">
                <div className='mx-auto'>
                    {(isAuthRequired && !isAuth) ? <NoAuth /> : children}
                    {/* Modal */}
                    <Signin />
                    <Signup />

                </div>
            </div>

        </div>
    )
}

export default Layout


