import React from 'react'
import AuthHeader from '../Headers/AuthHeader'
import SideBar from '../SideBar/SideBar'


function Layout({ searchTalentHidden, sideBarHidden, children }) {
    return (
        <div>
            <AuthHeader searchTalentHidden={searchTalentHidden} />
            {!sideBarHidden && <SideBar />}
            <div className="p-4 md:ml-[96px] sm:ml-64 md:mx-auto mt-24">
                {children}
            </div>

        </div>
    )
}

export default Layout