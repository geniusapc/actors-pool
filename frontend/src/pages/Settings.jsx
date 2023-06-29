import React from 'react'
import { Layout } from '../components/Layout'
import ChangePassword from '../components/Settings/ChangePasswordModal'
import DeleteAccount from '../components/Settings/DeleteAccount'
import ShareProfile from '../components/Settings/ShareProfile'
import AccountCard from '../components/Settings/AccountCard'
import HelpCard from '../components/Settings/HelpCard'
import InteractionCard from '../components/Settings/InteractionCard'



function Settings() {
    return (
        <Layout>
            <h1 className='text-3xl mb-8 font-semibold text-center'>Settings</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 justify-start content-center md:mx-20'>
                <AccountCard />
                <HelpCard />
                <InteractionCard />
            </div>

            {/* Modals */}
            <ChangePassword />
            <ShareProfile />
            <DeleteAccount />
        </Layout>
    )
}

export default Settings