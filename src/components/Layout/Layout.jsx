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
            <div className="p-4 md:ml-[96px] sm:ml-64 md:mx-auto mt-24">
                {(isAuthRequired && !isAuth) ? <NoAuth /> : children}
                {/* Modal */}
                <Signin />
                <Signup />
            </div>

        </div>
    )
}

export default Layout


