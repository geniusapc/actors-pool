import React from 'react';
import { Header } from '../Headers';
import { SideBar } from '../SideBar';
import Signin from '../Authentication/Signin';
import Signup from '../Authentication/Signup';

function AdminLayout({ showTalentHidden, sideBarHidden, children, isAuthRequired = true }) {
    return (
        <div>
            <Header showTalentHidden={showTalentHidden} />
            {!sideBarHidden && <SideBar role={'Admin'} />}
            <div className="p-y-4 px-5 md:px-10  md:ml-28  md:mx-auto my-20">
                <div className="containter mx-auto ">
                    {children}
                    {/* Modal */}
                    <Signin />
                    <Signup />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
