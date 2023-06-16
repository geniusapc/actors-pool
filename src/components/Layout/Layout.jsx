import React from 'react'
import { Header } from '../Headers'
import SideBar from '../SideBar/SideBar'
import NoAuth from './NoAuth'
import Signin from '../Authentication/Signin'
import Signup from '../Authentication/Signup'
import { useSelector } from 'react-redux'


function Layout({ showTalentHidden, sideBarHidden, children, isAuthRequired = true }) {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    return (
        <div>
            <Header showTalentHidden={showTalentHidden} />
            {!sideBarHidden && <SideBar />}
            <div className="p-y-4 px-5 md:px-10  md:ml-28  md:mx-auto my-20">
                <div className='containter mx-auto '>
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


